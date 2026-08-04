import type { NextRequest } from 'next/server';
import {
  ATTEMPT_WINDOW_MS,
  getAttemptsCookieName,
  LOCKOUT_MS,
  MAX_ATTEMPTS,
} from './config';

interface AttemptState {
  count: number;
  windowStart: number;
  blockedUntil: number;
}

// Per-IP tracking, in-memory. Unlike the cookie-based limiter below, this
// can't be defeated just by discarding cookies between requests. It resets
// on cold start and isn't shared across serverless instances, so it's
// defense in depth rather than a hard guarantee.
const ipAttempts = new Map<string, AttemptState>();
const IP_MAP_CLEANUP_THRESHOLD = 500;

export function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }
  const realIp = request.headers.get('x-real-ip');
  if (realIp) return realIp;
  return 'unknown';
}

function pruneIpState(key: string, now: number): AttemptState {
  const existing = ipAttempts.get(key);
  if (!existing) return { count: 0, windowStart: now, blockedUntil: 0 };
  if (existing.blockedUntil <= now && now - existing.windowStart > ATTEMPT_WINDOW_MS) {
    return { count: 0, windowStart: now, blockedUntil: 0 };
  }
  return existing;
}

function setIpState(key: string, state: AttemptState, now: number): void {
  ipAttempts.set(key, state);

  if (ipAttempts.size > IP_MAP_CLEANUP_THRESHOLD) {
    for (const [k, s] of ipAttempts) {
      if (s.blockedUntil <= now && now - s.windowStart > ATTEMPT_WINDOW_MS) {
        ipAttempts.delete(k);
      }
    }
  }
}

function getAttemptsSecret(): string {
  const secret = process.env.PROJECT_ACCESS_SECRET;
  if (!secret) throw new Error('PROJECT_ACCESS_SECRET is required');
  return secret;
}

function toBase64Url(bytes: Uint8Array): string {
  const binary = Array.from(bytes, (b) => String.fromCharCode(b)).join('');
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64Url(value: string): Uint8Array<ArrayBuffer> {
  const padded = value.replace(/-/g, '+').replace(/_/g, '/');
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

async function signState(stateB64: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(getAttemptsSecret()),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(stateB64));
  return toBase64Url(new Uint8Array(sig));
}

async function verifyState(stateB64: string, signature: string): Promise<boolean> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(getAttemptsSecret()),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['verify']
  );
  return crypto.subtle.verify(
    'HMAC',
    key,
    fromBase64Url(signature),
    new TextEncoder().encode(stateB64)
  );
}

async function parseAttemptsCookie(cookieValue: string | undefined): Promise<AttemptState | null> {
  if (!cookieValue) return null;
  const parts = cookieValue.split('.');
  if (parts.length !== 2) return null;

  const [stateB64, signature] = parts;
  if (!(await verifyState(stateB64, signature))) return null;

  try {
    const json = new TextDecoder().decode(fromBase64Url(stateB64));
    return JSON.parse(json) as AttemptState;
  } catch {
    return null;
  }
}

async function serializeAttemptsCookie(state: AttemptState): Promise<string> {
  const stateB64 = toBase64Url(new TextEncoder().encode(JSON.stringify(state)));
  const signature = await signState(stateB64);
  return `${stateB64}.${signature}`;
}

export type RateLimitResult =
  | { allowed: true; delayMs: number; cookie?: string }
  | { allowed: false; retryAfterMs: number; cookie: string };

export async function checkRateLimit(
  projectId: string,
  attemptsCookieValue: string | undefined,
  ip: string
): Promise<RateLimitResult> {
  const now = Date.now();

  const ipKey = `${projectId}:${ip}`;
  const ipState = pruneIpState(ipKey, now);
  if (ipState.blockedUntil > now) {
    const state: AttemptState = { count: MAX_ATTEMPTS, windowStart: now, blockedUntil: ipState.blockedUntil };
    const cookie = await serializeAttemptsCookie(state);
    return { allowed: false, retryAfterMs: ipState.blockedUntil - now, cookie };
  }

  let state = (await parseAttemptsCookie(attemptsCookieValue)) ?? {
    count: 0,
    windowStart: now,
    blockedUntil: 0,
  };

  if (state.blockedUntil > now) {
    const cookie = await serializeAttemptsCookie(state);
    return { allowed: false, retryAfterMs: state.blockedUntil - now, cookie };
  }

  if (now - state.windowStart > ATTEMPT_WINDOW_MS) {
    state = { count: 0, windowStart: now, blockedUntil: 0 };
  }

  if (state.count >= MAX_ATTEMPTS) {
    state.blockedUntil = now + LOCKOUT_MS;
    const cookie = await serializeAttemptsCookie(state);
    return { allowed: false, retryAfterMs: LOCKOUT_MS, cookie };
  }

  const delayMs = Math.max(state.count, ipState.count) * 500;
  return { allowed: true, delayMs };
}

export async function recordFailedAttempt(
  projectId: string,
  attemptsCookieValue: string | undefined,
  ip: string
): Promise<string> {
  const now = Date.now();

  const ipKey = `${projectId}:${ip}`;
  const ipState = pruneIpState(ipKey, now);
  ipState.count += 1;
  if (ipState.count >= MAX_ATTEMPTS) {
    ipState.blockedUntil = now + LOCKOUT_MS;
  }
  setIpState(ipKey, ipState, now);

  let state = (await parseAttemptsCookie(attemptsCookieValue)) ?? {
    count: 0,
    windowStart: now,
    blockedUntil: 0,
  };

  if (now - state.windowStart > ATTEMPT_WINDOW_MS) {
    state = { count: 0, windowStart: now, blockedUntil: 0 };
  }

  state.count += 1;

  if (state.count >= MAX_ATTEMPTS) {
    state.blockedUntil = now + LOCKOUT_MS;
  }

  return serializeAttemptsCookie(state);
}

export function buildAttemptsCookieHeader(projectId: string, value: string): string {
  const isProd = process.env.NODE_ENV === 'production';
  const parts = [
    `${getAttemptsCookieName(projectId)}=${value}`,
    'Path=/',
    'HttpOnly',
    'SameSite=Lax',
    `Max-Age=${Math.ceil(LOCKOUT_MS / 1000)}`,
  ];
  if (isProd) parts.push('Secure');
  return parts.join('; ');
}

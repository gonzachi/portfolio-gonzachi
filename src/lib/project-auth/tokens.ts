import {
  ACCESS_TOKEN_MAX_AGE_SECONDS,
  getAccessCookieName,
  isProtectedProjectId,
  type ProtectedProjectId,
} from './config';

interface AccessTokenPayload {
  projectId: ProtectedProjectId;
  exp: number;
}

function getSecret(): string {
  const secret = process.env.PROJECT_ACCESS_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error('PROJECT_ACCESS_SECRET must be set and at least 32 characters');
  }
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

async function importHmacKey(secret: string): Promise<CryptoKey> {
  const encoder = new TextEncoder();
  return crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify']
  );
}

async function signPayload(payloadB64: string, secret: string): Promise<string> {
  const key = await importHmacKey(secret);
  const encoder = new TextEncoder();
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(payloadB64));
  return toBase64Url(new Uint8Array(signature));
}

async function verifySignature(payloadB64: string, signatureB64: string, secret: string): Promise<boolean> {
  const key = await importHmacKey(secret);
  const encoder = new TextEncoder();
  return crypto.subtle.verify(
    'HMAC',
    key,
    fromBase64Url(signatureB64),
    encoder.encode(payloadB64)
  );
}

export async function createAccessToken(projectId: ProtectedProjectId): Promise<string> {
  const payload: AccessTokenPayload = {
    projectId,
    exp: Math.floor(Date.now() / 1000) + ACCESS_TOKEN_MAX_AGE_SECONDS,
  };
  const payloadB64 = toBase64Url(new TextEncoder().encode(JSON.stringify(payload)));
  const signature = await signPayload(payloadB64, getSecret());
  return `${payloadB64}.${signature}`;
}

export async function verifyAccessToken(
  token: string | undefined,
  expectedProjectId: string
): Promise<boolean> {
  if (!token || !isProtectedProjectId(expectedProjectId)) return false;

  const parts = token.split('.');
  if (parts.length !== 2) return false;

  const [payloadB64, signatureB64] = parts;

  let secret: string;
  try {
    secret = getSecret();
  } catch {
    return false;
  }

  const valid = await verifySignature(payloadB64, signatureB64, secret);
  if (!valid) return false;

  try {
    const payloadJson = new TextDecoder().decode(fromBase64Url(payloadB64));
    const payload = JSON.parse(payloadJson) as AccessTokenPayload;
    if (payload.projectId !== expectedProjectId) return false;
    if (payload.exp < Math.floor(Date.now() / 1000)) return false;
    return true;
  } catch {
    return false;
  }
}

export function buildAccessCookieHeader(projectId: ProtectedProjectId, token: string): string {
  const isProd = process.env.NODE_ENV === 'production';
  const parts = [
    `${getAccessCookieName(projectId)}=${token}`,
    `Path=/project/${projectId}`,
    'HttpOnly',
    'SameSite=Lax',
    `Max-Age=${ACCESS_TOKEN_MAX_AGE_SECONDS}`,
  ];
  if (isProd) parts.push('Secure');
  return parts.join('; ');
}

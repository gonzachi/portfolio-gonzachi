import { NextRequest, NextResponse } from 'next/server';
import {
  getAttemptsCookieName,
  isProtectedProjectId,
} from '@/lib/project-auth/config';
import {
  buildAttemptsCookieHeader,
  checkRateLimit,
  getClientIp,
  recordFailedAttempt,
} from '@/lib/project-auth/rate-limit';
import { buildAccessCookieHeader, createAccessToken } from '@/lib/project-auth/tokens';
import { verifyProjectPassword } from '@/lib/project-auth/verify';

export async function POST(request: NextRequest) {
  let body: { projectId?: string; password?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Contraseña incorrecta' }, { status: 401 });
  }

  const { projectId, password } = body;

  if (!projectId || !password || !isProtectedProjectId(projectId)) {
    return NextResponse.json({ error: 'Contraseña incorrecta' }, { status: 401 });
  }

  const ip = getClientIp(request);
  const attemptsCookie = request.cookies.get(getAttemptsCookieName(projectId))?.value;
  const rateLimit = await checkRateLimit(projectId, attemptsCookie, ip);

  const responseHeaders = new Headers();

  if (rateLimit.cookie) {
    responseHeaders.append('Set-Cookie', buildAttemptsCookieHeader(projectId, rateLimit.cookie));
  }

  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: 'Demasiados intentos. Inténtalo de nuevo más tarde.' },
      { status: 429, headers: responseHeaders }
    );
  }

  if (rateLimit.delayMs > 0) {
    await new Promise((resolve) => setTimeout(resolve, rateLimit.delayMs));
  }

  const valid = await verifyProjectPassword(projectId, password);

  if (!valid) {
    const attemptsCookieValue = await recordFailedAttempt(projectId, attemptsCookie, ip);
    responseHeaders.append(
      'Set-Cookie',
      buildAttemptsCookieHeader(projectId, attemptsCookieValue)
    );
    return NextResponse.json(
      { error: 'Contraseña incorrecta' },
      { status: 401, headers: responseHeaders }
    );
  }

  const token = await createAccessToken(projectId);
  responseHeaders.append('Set-Cookie', buildAccessCookieHeader(projectId, token));

  return NextResponse.json({ ok: true }, { headers: responseHeaders });
}

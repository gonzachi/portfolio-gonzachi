import { NextRequest, NextResponse } from 'next/server';
import { getAccessCookieName, isProtectedProjectId } from '@/lib/project-auth/config';
import { verifyAccessToken } from '@/lib/project-auth/tokens';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const projectMatch = pathname.match(/^\/project\/([^/]+)(?:\/(.*))?$/);
  if (!projectMatch) return NextResponse.next();

  const projectId = projectMatch[1];
  const subPath = projectMatch[2];

  if (!isProtectedProjectId(projectId)) return NextResponse.next();

  const token = request.cookies.get(getAccessCookieName(projectId))?.value;
  const hasAccess = await verifyAccessToken(token, projectId);

  if (subPath === 'gate') {
    if (hasAccess) {
      return NextResponse.redirect(new URL(`/project/${projectId}`, request.url));
    }
    return NextResponse.next();
  }

  if (!hasAccess) {
    return NextResponse.redirect(new URL(`/project/${projectId}/gate`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/project/:id', '/project/:id/:path*'],
};

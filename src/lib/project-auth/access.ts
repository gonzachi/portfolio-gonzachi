import { cookies } from 'next/headers';
import { getAccessCookieName, isProtectedProjectId } from './config';
import { verifyAccessToken } from './tokens';

export async function hasProjectAccess(projectId: string): Promise<boolean> {
  if (!isProtectedProjectId(projectId)) return true;

  const cookieStore = await cookies();
  const token = cookieStore.get(getAccessCookieName(projectId))?.value;
  return verifyAccessToken(token, projectId);
}

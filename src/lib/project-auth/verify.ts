import bcrypt from 'bcryptjs';
import {
  getPasswordHashEnvKey,
  isProtectedProjectId,
  type ProtectedProjectId,
} from './config';

export async function verifyProjectPassword(
  projectId: string,
  password: string
): Promise<boolean> {
  if (!isProtectedProjectId(projectId)) return false;

  const hash = process.env[getPasswordHashEnvKey(projectId as ProtectedProjectId)];
  if (!hash) return false;

  try {
    return await bcrypt.compare(password, hash);
  } catch {
    return false;
  }
}

export const PROTECTED_PROJECT_IDS = [
  'agilidad-inspiracional',
  'orquestadora-de-equipos',
] as const;

export type ProtectedProjectId = (typeof PROTECTED_PROJECT_IDS)[number];

const PASSWORD_ENV_KEYS: Record<ProtectedProjectId, string> = {
  'agilidad-inspiracional': 'PROJECT_PASSWORD_HASH_AGILIDAD_INSPIRACIONAL',
  'orquestadora-de-equipos': 'PROJECT_PASSWORD_HASH_ORQUESTADORA_DE_EQUIPOS',
};

export function isProtectedProjectId(id: string): id is ProtectedProjectId {
  return (PROTECTED_PROJECT_IDS as readonly string[]).includes(id);
}

export function getPasswordHashEnvKey(projectId: ProtectedProjectId): string {
  return PASSWORD_ENV_KEYS[projectId];
}

export function getAccessCookieName(projectId: string): string {
  return `project_access_${projectId}`;
}

export function getAttemptsCookieName(projectId: string): string {
  return `project_auth_attempts_${projectId}`;
}

export const ACCESS_TOKEN_MAX_AGE_SECONDS = 60 * 60 * 24; // 24 hours
export const MAX_ATTEMPTS = 5;
export const ATTEMPT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
export const LOCKOUT_MS = 15 * 60 * 1000; // 15 minutes

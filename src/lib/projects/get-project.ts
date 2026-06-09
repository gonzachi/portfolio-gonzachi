import 'server-only';

import { projects } from '@/data/content';
import { agilidadInspiracionalProtected } from '@/data/protected/agilidad-inspiracional';
import { orquestadoraDeEquiposProtected } from '@/data/protected/orquestadora-de-equipos';
import { isProtectedProjectId } from '@/lib/project-auth/config';

const protectedContentMap: Record<string, Record<string, unknown>> = {
  'agilidad-inspiracional': agilidadInspiracionalProtected,
  'orquestadora-de-equipos': orquestadoraDeEquiposProtected,
};

export function getProjectIndex(id: string): number {
  return projects.findIndex((p) => p.id === id);
}

export function getProjectById(id: string, includeProtected = false) {
  const index = getProjectIndex(id);
  if (index === -1) return null;

  const publicProject = projects[index] as Record<string, unknown>;

  if (!publicProject.requiresAccess) {
    return { project: publicProject, index };
  }

  if (!includeProtected) {
    return { project: publicProject, index };
  }

  const protectedContent = protectedContentMap[id];
  if (!protectedContent) {
    return { project: publicProject, index };
  }

  return {
    project: { ...publicProject, ...protectedContent },
    index,
  };
}

export function getPublicProjectIds(): string[] {
  return projects.map((p) => p.id);
}

export function getStaticProjectParams() {
  return projects
    .filter((p) => !(p as { requiresAccess?: boolean }).requiresAccess)
    .map((p) => ({ id: p.id }));
}

export function projectRequiresAccess(id: string): boolean {
  return isProtectedProjectId(id);
}

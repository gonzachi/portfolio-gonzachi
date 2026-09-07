import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/content';
import { isProtectedProjectId } from '@/lib/project-auth/config';
import ProjectGateForm from './ProjectGateForm';
import styles from './page.module.css';

interface GatePageProps {
  params: Promise<{ id: string }>;
}

const OG_IMAGES: Record<string, string> = {
  'agilidad-inspiracional': '/assets/projects/moda.jpg',
};

// content.ts is Spanish-only — English title/subtitle overrides for the
// gated projects live here, same local-override pattern used elsewhere
// (data/chat.ts's EN_COPY, Projects.tsx's PROJECT_EN).
const EN_COPY: Record<string, { title: string; subtitle: string }> = {
  'agilidad-inspiracional': {
    title: 'Designing the future of fashion creativity with AI.',
    subtitle: "The challenge wasn't generating images. It was helping designers bring ideas to life faster.",
  },
  'orquestadora-de-equipos': {
    title: 'Team-orchestration platform',
    subtitle: 'Corporate tool for building journey content',
  },
};

export async function generateMetadata({ params }: GatePageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!isProtectedProjectId(id) || !project) {
    return {};
  }

  const subtitle =
    (project as { client?: string }).client ||
    (project as { company?: string }).company ||
    (project as { subtitle?: string }).subtitle;

  const title = `${project.title} (Acceso restringido) | Gonzalo Chiavassa`;
  const description = subtitle
    ? `${subtitle} — Este case study contiene información confidencial y requiere contraseña de acceso.`
    : 'Este case study contiene información confidencial y requiere contraseña de acceso.';
  const ogImage = OG_IMAGES[id];

  return {
    title,
    description,
    alternates: {
      canonical: `/project/${id}`,
    },
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `/project/${id}`,
      ...(ogImage ? { images: [{ url: ogImage, width: 1440, height: 747, alt: project.title }] } : {}),
    },
    twitter: {
      card: ogImage ? 'summary_large_image' : 'summary',
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

export default async function ProjectGatePage({ params }: GatePageProps) {
  const { id } = await params;

  if (!isProtectedProjectId(id)) {
    notFound();
  }

  const project = projects.find((p) => p.id === id);
  if (!project) {
    notFound();
  }

  const subtitle =
    (project as { client?: string }).client ||
    (project as { company?: string }).company ||
    (project as { subtitle?: string }).subtitle;
  const en = EN_COPY[id];

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/#trabajos" className={styles.backLink}>
          <span data-lang="es">← Volver a trabajos</span>
          <span data-lang="en">← Back to work</span>
        </Link>
        <p className={styles.label} data-lang="es">Acceso restringido</p>
        <p className={styles.label} data-lang="en">Restricted access</p>
        <h1 className={styles.title}>
          <span data-lang="es">{project.title}</span>
          <span data-lang="en">{en?.title ?? project.title}</span>
        </h1>
        {subtitle && (
          <p className={styles.subtitle}>
            <span data-lang="es">{subtitle}</span>
            <span data-lang="en">{en?.subtitle ?? subtitle}</span>
          </p>
        )}
        <ProjectGateForm projectId={id} />
        <p className={styles.hint} data-lang="es">
          Este caso contiene información confidencial. Si no tienes la contraseña, contacta conmigo para solicitar acceso.
        </p>
        <p className={styles.hint} data-lang="en">
          This case study contains confidential information. If you don't have the password, reach out to request access.
        </p>
      </div>
    </main>
  );
}

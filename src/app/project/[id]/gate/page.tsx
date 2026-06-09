import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/content';
import { isProtectedProjectId } from '@/lib/project-auth/config';
import ProjectGateForm from './ProjectGateForm';
import styles from './page.module.css';

interface GatePageProps {
  params: Promise<{ id: string }>;
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

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/#trabajos" className={styles.backLink}>
          ← Volver a trabajos
        </Link>
        <p className={styles.label}>Acceso restringido</p>
        <h1 className={styles.title}>{project.title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <ProjectGateForm projectId={id} />
        <p className={styles.hint}>
          Este caso contiene información confidencial. Si no tienes la contraseña, contacta conmigo para solicitar acceso.
        </p>
      </div>
    </main>
  );
}

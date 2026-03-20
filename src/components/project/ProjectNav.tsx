import Link from 'next/link';
import styles from './ProjectNav.module.css';

interface ProjectNavProps {
    title: string;
    prevProject?: { id: string; title: string } | null;
    nextProject?: { id: string; title: string } | null;
}

export default function ProjectNav({ title, prevProject, nextProject }: ProjectNavProps) {
    return (
        <nav className={styles.nav} aria-label="Navegación del proyecto">
            <div className={styles.container}>
                <Link href="/#projects" className={styles.back} aria-label="Volver a proyectos">
                    ← Proyectos
                </Link>

                <span className={styles.projectTitle}>{title}</span>

                <div className={styles.arrows}>
                    {prevProject ? (
                        <Link
                            href={`/project/${prevProject.id}`}
                            className={styles.arrowBtn}
                            aria-label={`Proyecto anterior: ${prevProject.title}`}
                        >
                            ←
                        </Link>
                    ) : (
                        <button className={styles.arrowBtn} disabled aria-label="No hay proyecto anterior">
                            ←
                        </button>
                    )}
                    {nextProject ? (
                        <Link
                            href={`/project/${nextProject.id}`}
                            className={styles.arrowBtn}
                            aria-label={`Próximo proyecto: ${nextProject.title}`}
                        >
                            →
                        </Link>
                    ) : (
                        <button className={styles.arrowBtn} disabled aria-label="No hay próximo proyecto">
                            →
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './ProjectNav.module.css';

interface ProjectRef {
    id: string;
    title: string;
    thumbnail?: string;
}

interface ProjectNavProps {
    title: string;
    prevProject?: ProjectRef | null;
    nextProject?: ProjectRef | null;
    showArrows?: boolean;
}

function NavArrow({
    project,
    direction,
}: {
    project: ProjectRef;
    direction: 'prev' | 'next';
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={styles.arrowWrapper}
            onMouseEnter={() => {
                if (window.matchMedia('(hover: hover)').matches) {
                    setHovered(true);
                }
            }}
            onMouseLeave={() => {
                if (window.matchMedia('(hover: hover)').matches) {
                    setHovered(false);
                }
            }}
        >
            <Link
                href={`/project/${project.id}`}
                className={styles.arrowBtn}
                aria-label={direction === 'prev' ? `Proyecto anterior: ${project.title}` : `Próximo proyecto: ${project.title}`}
            >
                {direction === 'prev' ? '←' : '→'}
            </Link>

            {/* Tooltip */}
            <div className={`${styles.tooltip} ${hovered ? styles.tooltipVisible : ''} ${direction === 'prev' ? styles.tooltipLeft : styles.tooltipRight}`}>
                {project.thumbnail && (
                    <div className={styles.tooltipImage}>
                        <Image
                            src={project.thumbnail}
                            alt={project.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="220px"
                        />
                    </div>
                )}
                <div className={styles.tooltipBody}>
                    <span className={styles.tooltipLabel}>
                        {direction === 'prev' ? '← Anterior' : 'Siguiente →'}
                    </span>
                    <span className={styles.tooltipTitle}>{project.title}</span>
                </div>
            </div>
        </div>
    );
}

export default function ProjectNav({ title, prevProject, nextProject, showArrows = false }: ProjectNavProps) {
    return (
        <nav className={styles.nav} aria-label="Navegación del proyecto">
            <div className={styles.container}>
                <Link href="/#trabajos" className={styles.back} aria-label="Volver a trabajos">
                    ← Volver
                </Link>

                {showArrows && (
                    <div className={styles.arrows}>
                        {prevProject ? (
                            <NavArrow project={prevProject} direction="prev" />
                        ) : (
                            <button className={styles.arrowBtn} disabled aria-label="No hay proyecto anterior">←</button>
                        )}
                        {nextProject ? (
                            <NavArrow project={nextProject} direction="next" />
                        ) : (
                            <button className={styles.arrowBtn} disabled aria-label="No hay próximo proyecto">→</button>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
}

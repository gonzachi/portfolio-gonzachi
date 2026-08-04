'use client';

import Link from 'next/link';
import styles from './ProjectNav.module.css';

interface ProjectNavProps {
    title: string;
}

export default function ProjectNav({ title }: ProjectNavProps) {
    return (
        <nav className={styles.nav} aria-label="Navegación del proyecto">
            <div className={styles.container}>
                <Link href="/#trabajos" className={styles.back} aria-label="Volver a trabajos">
                    ← Volver
                </Link>
            </div>
        </nav>
    );
}

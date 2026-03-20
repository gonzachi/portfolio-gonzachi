"use client";

import styles from './ProjectHero.module.css';

interface ProjectHeroProps {
    number: string;
    title: string;
    roles: string[];
    tools?: string[];
    subtitle?: string;
}

export default function ProjectHero({ number, title, roles, tools, subtitle }: ProjectHeroProps) {
    return (
        <section className={styles.hero} aria-label="Introducción del proyecto">
            <span className={styles.number}>{number}</span>
            <h1 className={styles.title}>{title}</h1>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            <div className={styles.badges} role="list" aria-label="Roles">
                {roles.map((role) => (
                    <span key={role} className={styles.badge} role="listitem">{role}</span>
                ))}
            </div>
            
            <div 
                className={styles.scrollArrow} 
                onClick={() => window.scrollBy({ top: window.innerHeight * 0.7, behavior: 'smooth' })}
                role="button"
                tabIndex={0}
                aria-label="Hacer scroll hacia abajo"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M19 12l-7 7-7-7"/>
                </svg>
            </div>
        </section>
    );
}

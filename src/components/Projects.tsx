'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { landingProjects } from '@/data/content';
import { useTheme } from '@/hooks/useTheme';
import styles from './Projects.module.css';

interface LandingProject {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  company?: string;
  role?: string;
  tags?: string[];
  stat?: { value: string; label: string };
  thumbnail?: string;
  expandedImages?: string[];
  requiresAccess?: boolean;
  featured?: boolean;
  image?: string;
  badge?: string;
  comingSoon?: boolean;
}

/* ── Section Label ── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="reveal section-label">
      <span style={{ color: 'var(--color-accent-secondary)' }}>{children}</span>
      <div className="section-label-line" />
    </div>
  );
}

export { SectionLabel };

/* ── Unified Project Card ── */
function ProjectCard({
  project,
  delay,
}: {
  project: LandingProject;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [supportsHover, setSupportsHover] = useState(false);
  const activeProjectIds = ['reduciendo-drop-off-onboarding', 'app-movil-holdo', 'agilidad-inspiracional'];
  const isActive = activeProjectIds.includes(project.id);

  useEffect(() => {
    setSupportsHover(window.matchMedia('(hover: hover)').matches);
  }, []);

  const { theme } = useTheme();

  const allTags: string[] = [
    ...(project.badge ? [project.badge] : []),
    ...(project.tags || []),
  ];

  if (project.comingSoon) {
    return (
      <div className={`reveal reveal-delay-${delay % 4} ${styles.rowComingSoon}`}>
        <div>
          <p className={styles.rowComingSoonTitle}>{project.title}</p>
          <p className={styles.rowComingSoonText}>{project.subtitle}</p>
        </div>
      </div>
    );
  }

  const fusedText = project.description;
  let cardCoverImage = project.thumbnail || project.image;
  if (cardCoverImage && project.id === 'app-movil-holdo' && theme === 'dark') {
    cardCoverImage = '/assets/home/portada-caso-app-holdo-dark.jpg';
  } else if (cardCoverImage && project.id === 'reduciendo-drop-off-onboarding' && theme === 'dark') {
    cardCoverImage = '/assets/home/portada-caso-holdo-ladrillo-dark.jpg';
  }

  const cardClassName = `${styles.card} ${hovered ? styles.cardHovered : ''}`;
  const handleMouseEnter = supportsHover ? () => setHovered(true) : undefined;
  const handleMouseLeave = supportsHover ? () => setHovered(false) : undefined;

  const cardContent = (
    <>
      {/* Optional Thumbnail Image */}
      {cardCoverImage && (
        <div className={styles.cardVisual}>
          <img
            src={cardCoverImage}
            alt={project.title}
            className={styles.cardImage}
          />
        </div>
      )}

      {/* Header: title + company */}
      <div className={styles.cardHeader}>
        <div className={styles.cardHeaderLeft}>
          {project.company && <div className={styles.rowCompany}>{project.company}</div>}
          <h3 className={styles.rowTitle}>{project.title}</h3>
        </div>
      </div>

      {/* Body: fused description */}
      <div className={styles.cardBody}>
        <p className={styles.rowDescription}>{fusedText}</p>
      </div>

      {/* Footer: tags + ver caso */}
      <div className={styles.cardFooter}>
        <div className={styles.cardBadges}>
          {allTags.map((tag, i) => (
            <span
              key={tag}
              className={
                i === 0 && project.badge
                  ? styles.badge
                  : styles.rowTag
              }
            >
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.cardCta}>
          <span className={`${styles.viewCaseBtn} ${isActive ? '' : styles.disabledBtn}`}>
            <span>{isActive ? 'Ver proyecto' : 'En construcción'}</span>
          </span>
        </div>
      </div>
    </>
  );

  return (
    <div className={`reveal reveal-delay-${delay % 4}`}>
      {isActive ? (
        <Link
          href={`/project/${project.id}`}
          className={cardClassName}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {cardContent}
        </Link>
      ) : (
        <div
          className={cardClassName}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {cardContent}
        </div>
      )}
    </div>
  );
}

/* ── Main Projects Section ── */
export default function Projects() {
  return (
    <section id="trabajos" className={styles.section}>
      <div className={styles.container}>
        <SectionLabel>Trabajos</SectionLabel>
        {landingProjects.map((p, i) => (
          <ProjectCard key={p.id} project={p as LandingProject} delay={i} />
        ))}
      </div>
    </section>
  );
}

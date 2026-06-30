'use client';

import { useState, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { landingProjects } from '@/data/content';
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
  onHover,
}: {
  project: LandingProject;
  delay: number;
  onHover: (id: string | null) => void;
}) {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  const activeProjectIds = ['reduciendo-drop-off-onboarding', 'app-movil-holdo'];
  const isActive = activeProjectIds.includes(project.id);

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
  const cardCoverImage = project.thumbnail || project.image;

  const handleClick = () => {
    if (isActive) {
      router.push(`/project/${project.id}`);
    }
  };

  return (
    <div className={`reveal reveal-delay-${delay % 4}`}>
      <div
        className={`${styles.card} ${hovered ? styles.cardHovered : ''}`}
        onMouseEnter={() => {
          if (window.matchMedia('(hover: hover)').matches) {
            setHovered(true);
            onHover(project.id);
          }
        }}
        onMouseLeave={() => {
          if (window.matchMedia('(hover: hover)').matches) {
            setHovered(false);
            onHover(null);
          }
        }}
        onClick={handleClick}
      >
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
          <span className={`${styles.viewCaseBtn} ${isActive ? '' : styles.disabledBtn}`}>
            <span>{isActive ? 'Ver caso →' : 'En construcción'}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Main Projects Section ── */
export default function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const isHoveredProjectActive = hoveredId ? ['reduciendo-drop-off-onboarding', 'app-movil-holdo'].includes(hoveredId) : false;

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    }
  }, []);

  return (
    <>
      <section id="trabajos" className={styles.section} onMouseMove={handleMouseMove}>
        <div className={styles.container}>
          <SectionLabel>Trabajos</SectionLabel>
          {landingProjects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p as LandingProject}
              delay={i}
              onHover={setHoveredId}
            />
          ))}
        </div>
        {/* Custom cursor label */}
        <div
          ref={cursorRef}
          className={`${styles.cardCursorLabel} ${hoveredId !== null ? styles.cardCursorLabelVisible : ''}`}
        >
          <span>{isHoveredProjectActive ? 'ver caso' : 'en construcción'}</span>
        </div>
      </section>
    </>
  );
}

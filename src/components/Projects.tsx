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

function LockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="11" width="16" height="9" rx="1.5" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
}

/* ── Unified Project Card ── */
function ProjectCard({
  project,
  delay,
  variant = 'grid',
}: {
  project: LandingProject;
  delay: number;
  variant?: 'hero' | 'grid';
}) {
  const [hovered, setHovered] = useState(false);
  const [supportsHover, setSupportsHover] = useState(false);
  // A project is clickable unless it's explicitly marked as still coming
  // soon — gated projects are active too, they just resolve to the
  // password gate instead of the case study.
  const isActive = !project.comingSoon;
  const isLocked = Boolean(project.requiresAccess);

  useEffect(() => {
    setSupportsHover(window.matchMedia('(hover: hover)').matches);
  }, []);

  const { theme } = useTheme();

  const allTags: string[] = [...(project.tags || [])];

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

  const isHero = variant === 'hero';
  const cardClassName = `${styles.card} ${isHero ? styles.cardHero : ''} ${hovered ? styles.cardHovered : ''}`;
  const handleMouseEnter = supportsHover ? () => setHovered(true) : undefined;
  const handleMouseLeave = supportsHover ? () => setHovered(false) : undefined;

  const cardContent = (
    <>
      {/* Thumbnail — internal projects without a public screenshot (e.g.
          confidential internal tools) get a placeholder instead of just
          skipping the visual, so the grid doesn't lose its rhythm. */}
      <div className={styles.cardVisual}>
        {project.badge && <span className={styles.newBadge}>{project.badge}</span>}
        {cardCoverImage ? (
          <img src={cardCoverImage} alt={project.title} className={styles.cardImage} />
        ) : (
          <div className={styles.noPreview}>
            <LockIcon className={styles.noPreviewIcon} />
          </div>
        )}
      </div>

      {/* Header: tags (or a lock tag for gated projects) + title */}
      <div className={styles.cardHeader}>
        <div className={styles.cardHeaderLeft}>
          <div className={styles.cardBadges}>
            {isLocked ? (
              <span className={`${styles.rowTag} ${styles.rowTagLocked}`}>
                <LockIcon className={styles.rowTagLockIcon} /> Acceso restringido
              </span>
            ) : (
              allTags.map((tag) => (
                <span key={tag} className={styles.rowTag}>
                  {tag}
                </span>
              ))
            )}
          </div>
          <h3 className={isHero ? styles.heroTitle : styles.rowTitle}>{project.title}</h3>
        </div>
      </div>

      {/* Body: fused description */}
      <div className={styles.cardBody}>
        <p className={isHero ? styles.heroDescription : styles.rowDescription}>{fusedText}</p>
      </div>

      {/* Footer: ver proyecto / solicitar acceso */}
      <div className={styles.cardFooter}>
        <span className={`${styles.viewCaseBtn} ${isActive ? '' : styles.disabledBtn}`}>
          <span>{!isActive ? 'En construcción' : isLocked ? 'Solicitar acceso' : 'Ver proyecto'}</span>
          {isActive && <span className={styles.viewCaseArrow}>→</span>}
        </span>
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
  // The most recent public project gets the featured hero slot — never a
  // gated one, even if list order changes, since a locked project isn't
  // what should greet people first.
  const allProjects = landingProjects as LandingProject[];
  const heroProject = allProjects.find((p) => !p.requiresAccess && !p.comingSoon) ?? allProjects[0];
  const restProjects = allProjects.filter((p) => p.id !== heroProject.id);

  return (
    <section id="trabajos" className={styles.section}>
      <div className={styles.container}>
        <SectionLabel>Trabajos</SectionLabel>
        <div className={styles.hero}>
          <ProjectCard project={heroProject} delay={0} variant="hero" />
        </div>
        <div className={styles.grid}>
          {restProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

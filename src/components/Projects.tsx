'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { landingProjects } from '@/data/content';
import { useTheme } from '@/hooks/useTheme';
import { useLang } from '@/components/project/LangWrapper';
import styles from './Projects.module.css';

// content.ts is Spanish-only — English overrides for the card copy live
// here, keyed by id, same approach as data/chat.ts's EN_COPY.
const PROJECT_EN: Record<string, { title: string; subtitle: string; description: string; role?: string; badge?: string; statLabel?: string }> = {
  'disenar-en-codigo': {
    title: 'Designing product directly in code.',
    subtitle: 'Some call it "Direct Design," "AI First," or just "Vibe coding."',
    description: "Some call it \"Direct Design,\" \"AI First,\" or just \"Vibe coding.\" What's true is that my process got faster. I no longer open Figma to design — it's all in the code, and I'll tell you how I'm doing it.",
    role: 'Product Designer',
    badge: 'New ⚡',
  },
  'reduciendo-drop-off-onboarding': {
    title: 'Making a financial process built for experts accessible.',
    subtitle: 'Reducing the complexity of the investment proposal to boost conversion.',
    description: "Building a portfolio was one of the product's biggest drop-off points. Through behavioral analysis, research and an experience redesign, we turned a long, technical flow into something clearer, more progressive and easier to understand.",
    role: 'UX/UI · Product Designer',
    statLabel: '↑ conversion',
  },
  'app-movil-holdo': {
    title: 'Redesigning an investment experience for mobile.',
    subtitle: 'Mobile app MVP',
    description: '80% of users accessed from mobile, but the platform was desktop-only. I designed the native app MVP: a competitive benchmark of the Chilean fintech market, scope prioritization with the CEO and CTO, and two key flows — portfolio overview and fund deposits.',
    role: 'Product Designer',
    statLabel: 'mobile users',
  },
  'agilidad-inspiracional': {
    title: 'Designing the future of fashion creativity with AI.',
    subtitle: "The challenge wasn't generating images. It was helping designers bring ideas to life faster.",
    description: "The challenge wasn't generating images. It was helping designers bring ideas to life faster. We built something completely new, discovering how we could fit into fashion designers' creative process to boost their productivity.",
    role: 'Product Designer',
  },
  'orquestadora-de-equipos': {
    title: 'Team-orchestration platform',
    subtitle: 'Corporate tool for building journey content',
    description: 'A project focused on orchestrating different teams, streamlining processes that today run manually across spreadsheets, emails and assorted platforms. We took an AI-first approach to how we built it. More on that below.',
  },
};

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
  const { lang } = useLang();
  const en = PROJECT_EN[project.id];
  const title = lang === 'en' ? (en?.title ?? project.title) : project.title;
  const badge = lang === 'en' ? (en?.badge ?? project.badge) : project.badge;

  useEffect(() => {
    setSupportsHover(window.matchMedia('(hover: hover)').matches);
  }, []);

  const { theme } = useTheme();

  const allTags: string[] = [...(project.tags || [])];

  if (project.comingSoon) {
    const subtitle = lang === 'en' ? (en?.subtitle ?? project.subtitle) : project.subtitle;
    return (
      <div className={`reveal reveal-delay-${delay % 4} ${styles.rowComingSoon}`}>
        <div>
          <p className={styles.rowComingSoonTitle}>{title}</p>
          <p className={styles.rowComingSoonText}>{subtitle}</p>
        </div>
      </div>
    );
  }

  const fusedText = lang === 'en' ? (en?.description ?? project.description) : project.description;
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
        {badge && <span className={styles.newBadge}>{badge}</span>}
        {cardCoverImage ? (
          <img src={cardCoverImage} alt={title} className={styles.cardImage} />
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
                <LockIcon className={styles.rowTagLockIcon} /> {lang === 'en' ? 'Restricted access' : 'Acceso restringido'}
              </span>
            ) : (
              allTags.map((tag) => (
                <span key={tag} className={styles.rowTag}>
                  {tag}
                </span>
              ))
            )}
          </div>
          <h3 className={isHero ? styles.heroTitle : styles.rowTitle}>{title}</h3>
        </div>
      </div>

      {/* Body: fused description */}
      <div className={styles.cardBody}>
        <p className={isHero ? styles.heroDescription : styles.rowDescription}>{fusedText}</p>
      </div>

      {/* Footer: ver proyecto / solicitar acceso */}
      <div className={styles.cardFooter}>
        <span className={`${styles.viewCaseBtn} ${isActive ? '' : styles.disabledBtn}`}>
          <span>
            {!isActive
              ? (lang === 'en' ? 'In progress' : 'En construcción')
              : isLocked
                ? (lang === 'en' ? 'Request access' : 'Solicitar acceso')
                : (lang === 'en' ? 'View project' : 'Ver proyecto')}
          </span>
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
          aria-disabled="true"
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
  const { lang } = useLang();
  // The most recent public project gets the featured hero slot — never a
  // gated one, even if list order changes, since a locked project isn't
  // what should greet people first.
  const allProjects = landingProjects as LandingProject[];
  const heroProject = allProjects.find((p) => !p.requiresAccess && !p.comingSoon) ?? allProjects[0];
  const restProjects = allProjects.filter((p) => p.id !== heroProject.id);

  return (
    <section id="trabajos" className={styles.section}>
      <div className={styles.container}>
        <SectionLabel>{lang === 'en' ? 'Works' : 'Trabajos'}</SectionLabel>
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

'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import ProjectHero from './project/ProjectHero';
import StoryTimeline from './project/StoryTimeline';
import ResultsReveal from './project/ResultsReveal';
import SidebarProgress from './project/SidebarProgress';
import ScrollReveal from './ScrollReveal';
import styles from './ProjectSheet.module.css';
import pageStyles from '../app/project/[id]/page.module.css';
import { ProjectData } from '@/data/content';

export default function ProjectSheet({
  project,
  open,
  onClose,
}: {
  project: ProjectData | null;
  open: boolean;
  onClose: () => void;
}) {
  const sheetRef = useRef<HTMLDivElement>(null);

  /* Keep content rendered during exit animation */
  const [rendered, setRendered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setRendered(true);
        if (project) {
          setActiveProject(project);
        }
      }, 0);
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    } else {
      setTimeout(() => setVisible(false), 0);
      const timer = setTimeout(() => {
        setRendered(false);
        setActiveProject(null);
      }, 450);
      return () => clearTimeout(timer);
    }
  }, [open, project]);

  /* Lock body scroll when open */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  /* Close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  /* Scroll to top when opening a new project */
  useEffect(() => {
    if (open && sheetRef.current) {
      const content = sheetRef.current.querySelector(`.${styles.content}`);
      if (content) content.scrollTop = 0;
    }
  }, [open, project]);

  if (!rendered) return null;

  const p = project || activeProject;
  if (!p) return null;

  // Extract typed fields (same logic as project page)
  const subtitle = p.subtitle;
  const tools = p.tools;
  const roleDescription = p.roleDescription;
  const team = p.team;
  const context = p.context;
  const problem = p.problem;
  const resultsReveal = p.resultsReveal;
  const decisions = p.decisions;
  const storySteps = p.storySteps;

  // Build sidebar sections dynamically (same logic as project page, prefixed IDs)
  const sidebarSections: { id: string; label: string }[] = [
    { id: 'sheet-sec-hero', label: 'Introducción' },
    ...(context ? [{ id: 'sheet-sec-context', label: 'Contexto' }] : []),
    ...(problem ? [{ id: 'sheet-sec-problem', label: 'El problema' }] : []),
    ...(resultsReveal ? [{ id: 'sheet-sec-results', label: 'Resultados' }] : []),
    ...(storySteps && storySteps.length > 0 ? [{ id: 'sheet-sec-story', label: decisions ? 'Decisiones' : 'Historia' }] : []),
    ...(p.closing ? [{ id: 'sheet-sec-closing', label: 'El cierre' }] : []),
  ];

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className={`${styles.backdrop} ${visible ? styles.backdropOpen : ''}`}
        onClick={onClose}
      />

      {/* Sheet */}
      <div
        ref={sheetRef}
        className={`${styles.sheet} ${visible ? styles.sheetOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={p.title}
      >
        {/* Header bar with close button */}
        <div className={styles.header}>
          <button onClick={onClose} className={styles.closeBtn} aria-label="Cerrar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Sidebar progress */}
        <SidebarProgress sections={sidebarSections} />

        {/* Scrollable content — same structure as project page */}
        <div className={styles.content}>
          <main className={pageStyles.page}>
            {/* Hero */}
            <div id="sheet-sec-hero">
              <ProjectHero
                number={p.number}
                title={p.title}
                roles={p.roles || []}
                tools={tools}
                subtitle={subtitle}
              />
            </div>

            {/* Context */}
            {context && (
              <div id="sheet-sec-context" className={pageStyles.contextSection}>
                <div className={pageStyles.contextContent}>
                  <ScrollReveal delay={0}>
                    <h2 className={pageStyles.contextTitle}>{context.title}</h2>
                    {context.description.map((paragraph: string, index: number) => (
                      <p key={index} className={pageStyles.contextText}>{paragraph}</p>
                    ))}
                  </ScrollReveal>

                  {context.milestones && context.milestones.length > 0 && (
                    <ScrollReveal delay={0.2}>
                      <div className={pageStyles.milestoneTimeline}>
                        {context.milestones.map((milestone: string, index: number) => (
                          <div key={index} className={pageStyles.milestoneItem}>
                            <div className={pageStyles.milestoneDot} />
                            <span className={pageStyles.milestoneLabel}>{milestone}</span>
                          </div>
                        ))}
                      </div>
                    </ScrollReveal>
                  )}
                </div>
              </div>
            )}

            {/* Problem */}
            {problem && (
              <div id="sheet-sec-problem" className={pageStyles.problemSection}>
                <div className={pageStyles.problemContent}>
                  <div className={pageStyles.problemColumns}>
                    <ScrollReveal delay={0.1} className={pageStyles.problemColLeft}>
                      <blockquote className={pageStyles.problemStatement}>
                        {problem.statement}
                      </blockquote>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2} className={pageStyles.problemColRight}>
                      <h2 className={pageStyles.problemTitle}>{problem.title}</h2>
                      {problem.description.map((paragraph: string, index: number) => (
                        <p key={index} className={pageStyles.problemText}>{paragraph}</p>
                      ))}
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            )}

            {/* Results Reveal */}
            {resultsReveal && (
              <div id="sheet-sec-results">
              <ResultsReveal
                title={resultsReveal.title}
                stats={resultsReveal.stats}
                closingText={resultsReveal.closingText || ""}
                showGrowthCurve={resultsReveal.showGrowthCurve}
              />
              </div>
            )}

            {/* Story Steps / Decisions */}
            {storySteps && storySteps.length > 0 && (
              <div id="sheet-sec-story">
              <StoryTimeline
                sectionTitle={decisions ? decisions.title : "El Desafío Cronológico"}
                intro={decisions?.description}
                steps={storySteps}
              />
              </div>
            )}

            {/* Closing */}
            {p.closing && (
              <div id="sheet-sec-closing" className={pageStyles.closingHero}>
                <ScrollReveal delay={0}>
                  <h2 className={pageStyles.closingLabel}>{p.closing.title}</h2>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <p className={pageStyles.closingStatement}>
                    {(p.closing.message as string).split('\n').map((line: string, i: number) => (
                      <span key={i}>{line}{i === 0 && <br />}</span>
                    ))}
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.4}>
                  <table className={pageStyles.closingTable}>
                    <tbody>
                      <tr>
                        <td className={pageStyles.closingTableLabel}>Rol</td>
                        <td className={pageStyles.closingTableValue}>{roleDescription}</td>
                      </tr>
                      <tr>
                        <td className={pageStyles.closingTableLabel}>Equipo</td>
                        <td className={pageStyles.closingTableValue}>{team}</td>
                      </tr>
                      <tr>
                        <td className={pageStyles.closingTableLabel}>Herramientas</td>
                        <td className={pageStyles.closingTableValue}>{tools?.join(' · ')}</td>
                      </tr>
                      {p.closing.timeline && (
                        <tr>
                          <td className={pageStyles.closingTableLabel}>Timeline</td>
                          <td className={pageStyles.closingTableValue}>{p.closing.timeline}</td>
                        </tr>
                      )}
                      {p.closing.extra && (
                        <tr>
                          <td className={pageStyles.closingTableLabel}>Extra</td>
                          <td className={pageStyles.closingTableValue}>{p.closing.extra}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </ScrollReveal>
              </div>
            )}
          </main>
        </div>
      </div>
    </>,
    document.body
  );
}

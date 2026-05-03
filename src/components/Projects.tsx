'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { landingProjects } from '@/data/content';
import styles from './Projects.module.css';

/* ── Hooks ── */
function useCountUp(target: number, inView: boolean, dur = 1500) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const steps = Math.ceil(dur / 16);
    const inc = target / steps;
    const t = setInterval(() => {
      cur = Math.min(cur + inc, target);
      setVal(Math.round(cur));
      if (cur >= target) clearInterval(t);
    }, 16);
    return () => clearInterval(t);
  }, [inView, target, dur]);
  return val;
}

function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.15) {
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return v;
}

/* ── Stat Counter ── */
function StatCounter({ value, suffix, label, inView }: { value: number; suffix: string; label: string; inView: boolean }) {
  const count = useCountUp(value, inView);
  return (
    <div className={styles.statItem}>
      <div className={styles.statValue}>{count}{suffix}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

/* ── Decisions Accordion (for featured project) ── */
function DecisionsAccordion({ project }: { project: any }) {
  const [open, setOpen] = useState<number | null>(null);
  if (!project.decisions) return null;

  return (
    <div className={styles.decisions}>
      <div className={styles.decisionsLabel}>Decisiones de producto</div>
      {project.decisions.map((d: any, i: number) => (
        <div key={i} className={`${styles.accordion} ${open === i ? styles.accordionOpen : ''}`}>
          <button onClick={(e) => { e.stopPropagation(); setOpen(open === i ? null : i); }} className={styles.accordionBtn}>
            <div>
              <div className={styles.accordionNumber}>{d.number}</div>
              <div className={styles.accordionTitle}>{d.title}</div>
            </div>
            <span className={`${styles.accordionIcon} ${open === i ? styles.accordionIconOpen : ''}`}>+</span>
          </button>
          <div className={styles.accordionBody} style={{ maxHeight: open === i ? 400 : 0 }}>
            <div className={styles.accordionContent}>
              {d.body.split('\n\n').map((para: string, j: number) => (
                <p key={j}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Unified Project Card ── */
function ProjectCard({ project, delay, expanded, onToggle }: {
  project: typeof landingProjects[0];
  delay: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  const p = project as any;
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  if (p.comingSoon) {
    return (
      <div className={`reveal reveal-delay-${delay % 4} ${styles.rowComingSoon}`}>
        <span className={styles.rowNumberInline}>{p.number}</span>
        <div>
          <p className={styles.rowComingSoonTitle}>{p.title}</p>
          <p className={styles.rowComingSoonText}>{p.subtitle}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`reveal reveal-delay-${delay % 4}`} ref={ref}>
      <div
        className={`${styles.card} ${hovered || expanded ? styles.cardActive : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* ── Row header: number left, title + badges right ── */}
        <div className={styles.rowHeader} onClick={onToggle}>
          <span className={styles.rowNumber}>{p.number}</span>
          <div className={styles.rowContent}>
            <h3 className={styles.rowTitle}>{p.title}</h3>
            {p.subtitle && <p className={styles.rowSubtitle}>{p.subtitle}</p>}
            <div className={styles.rowBadges}>
              {p.badge && <span className={styles.badge}>{p.badge}</span>}
              {p.tags?.map((t: string) => (
                <span key={t} className={styles.rowTag}>{t}</span>
              ))}
            </div>
          </div>
          <span className={`${styles.rowToggleIcon} ${expanded ? styles.rowToggleIconOpen : ''}`}>+</span>
        </div>

        {/* ── Expanded content: only description ── */}
        <div className={styles.expandedWrapper} style={{ maxHeight: expanded ? 2000 : 0 }}>
          <div className={styles.expandedInner}>
            {(p.expandedDescription || p.description || '').split('\n\n').map((para: string, i: number) => (
              <p key={i} className={styles.simpleDesc}>{para}</p>
            ))}
            {p.expandedImages && (
              <div className={styles.expandedImages}>
                {p.expandedImages.map((src: string, i: number) => (
                  <div key={i} className={styles.expandedImageItem}>
                    <Image src={src} alt={`${p.title} - ${i + 1}`} width={300} height={500} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
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

/* ── Main Projects Section ── */
export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(landingProjects[0]?.id ?? null);
  const toggle = (id: string) => setOpenId(prev => prev === id ? null : id);

  return (
    <section id="proyectos" className={styles.section}>
      <div className={styles.container}>
        <SectionLabel>Proyectos</SectionLabel>
        {landingProjects.map((p, i) => (
          <ProjectCard
            key={p.id}
            project={p}
            delay={i}
            expanded={openId === p.id}
            onToggle={() => toggle(p.id)}
          />
        ))}
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { useLang } from '@/components/project/LangWrapper';
import styles from './MangoIAComponents.module.css';

const TIMELINE_ITEMS = [
  {
    stage: { en: 'Phase 1', es: 'Fase 1' },
    title: { en: 'Weak models', es: 'Modelos pobres' },
    desc: { en: 'Inconsistent results and early distrust in quality.', es: 'Resultados inconsistentes y desconfianza inicial en la calidad.' },
    status: { en: 'High uncertainty', es: 'Incertidumbre alta' },
  },
  {
    stage: { en: 'Phase 2', es: 'Fase 2' },
    title: { en: 'First MVP', es: 'Primer MVP' },
    desc: { en: 'Guided conversational experience to validate early value.', es: 'Experiencia conversacional guiada para validar valor temprano.' },
    status: { en: 'Validated in production', es: 'Validación en producción' },
  },
  {
    stage: { en: 'Phase 3', es: 'Fase 3' },
    title: { en: 'Better models', es: 'Modelos mejores' },
    desc: { en: 'Continuous integration of leading external models.', es: 'Integración continua de modelos externos líderes de mercado.' },
    status: { en: 'Scalability', es: 'Escalabilidad' },
  },
  {
    stage: { en: 'Phase 4', es: 'Fase 4' },
    title: { en: 'Product', es: 'Producto' },
    desc: { en: 'A mature platform adopted by hundreds of designers at Mango.', es: 'Plataforma madura adoptada por cientos de diseñadores en Mango.' },
    status: { en: 'Consolidated', es: 'Consolidado' },
  },
];

export default function RetoTimeline() {
  const { lang } = useLang();

  return (
    <div className={styles.retoTimelineWrapper}>
      <div className={styles.timelineHeader}>
        <span className={styles.timelineBadge}>{lang === 'en' ? 'Parallel Evolution' : 'Evolución Paralela'}</span>
        <h4 className={styles.timelineHeading}>
          {lang === 'en' ? 'Designing while the technology evolves' : 'Diseñar mientras la tecnología evoluciona'}
        </h4>
      </div>

      <div className={styles.timelineTrackContainer}>
        <div className={styles.timelineTrackLine} />

        <div className={styles.timelineItemsGrid}>
          {TIMELINE_ITEMS.map((item, idx) => (
            <div key={idx} className={styles.timelineItemCard}>
              <div className={styles.timelineNode}>
                <span className={styles.timelineNodePulse} />
              </div>
              <span className={styles.timelineStage}>{item.stage[lang]}</span>
              <h5 className={styles.timelineTitle}>{item.title[lang]}</h5>
              <p className={styles.timelineDesc}>{item.desc[lang]}</p>
              <span className={styles.timelineStatusTag}>{item.status[lang]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

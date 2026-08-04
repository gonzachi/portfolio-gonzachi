'use client';

import React from 'react';
import styles from './MangoIAComponents.module.css';

export default function RetoTimeline() {
  const timelineItems = [
    {
      stage: 'Fase 1',
      title: 'Modelos pobres',
      desc: 'Resultados inconsistentes y desconfianza inicial en la calidad.',
      status: 'Incertidumbre alta',
    },
    {
      stage: 'Fase 2',
      title: 'Primer MVP',
      desc: 'Experiencia conversacional guiada para validar valor temprano.',
      status: 'Validación en producción',
    },
    {
      stage: 'Fase 3',
      title: 'Modelos mejores',
      desc: 'Integración continua de modelos externos líderes de mercado.',
      status: 'Escalabilidad',
    },
    {
      stage: 'Fase 4',
      title: 'Producto',
      desc: 'Plataforma madura adoptada por cientos de diseñadores en Mango.',
      status: 'Consolidado',
    },
  ];

  return (
    <div className={styles.retoTimelineWrapper}>
      <div className={styles.timelineHeader}>
        <span className={styles.timelineBadge}>Evolución Paratela</span>
        <h4 className={styles.timelineHeading}>Diseñar mientras la tecnología evoluciona</h4>
      </div>

      <div className={styles.timelineTrackContainer}>
        <div className={styles.timelineTrackLine} />

        <div className={styles.timelineItemsGrid}>
          {timelineItems.map((item, idx) => (
            <div key={idx} className={styles.timelineItemCard}>
              <div className={styles.timelineNode}>
                <span className={styles.timelineNodePulse} />
              </div>
              <span className={styles.timelineStage}>{item.stage}</span>
              <h5 className={styles.timelineTitle}>{item.title}</h5>
              <p className={styles.timelineDesc}>{item.desc}</p>
              <span className={styles.timelineStatusTag}>{item.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

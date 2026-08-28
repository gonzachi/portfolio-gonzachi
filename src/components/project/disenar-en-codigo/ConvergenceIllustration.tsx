'use client';

import React from 'react';
import styles from './ConvergenceIllustration.module.css';

export default function ConvergenceIllustration() {
  return (
    <div className={styles.container}>
      <div className={styles.headerTitle}>
        <span className={styles.tag}>CONVERGENCIA CONTINUA</span>
        <h3>Un solo flujo unificado de Producto</h3>
      </div>

      <div className={styles.diagramGrid}>
        {/* Design Node */}
        <div className={styles.nodeCard}>
          <div className={styles.nodeHeader}>
            <span className={styles.dotDesign} />
            <span>Diseño de Producto</span>
          </div>
          <p>Toma de decisiones de UX, interacción y flujos con usuarios reales.</p>
        </div>

        {/* Converging Center Stream */}
        <div className={styles.streamCenter}>
          <div className={styles.pulseLine}>
            <span className={styles.pulseParticle} />
          </div>
          <div className={styles.badgeUnified}>
            <span>⚡ Prototipo en Código Valido</span>
          </div>
        </div>

        {/* Development Node */}
        <div className={styles.nodeCard}>
          <div className={styles.nodeHeader}>
            <span className={styles.dotCode} />
            <span>Desarrollo / Producción</span>
          </div>
          <p>Construcción directa usando los mismos componentes reales de la empresa.</p>
        </div>
      </div>

      <div className={styles.summaryBar}>
        <div className={styles.statItem}>
          <span className={styles.statVal}>0</span>
          <span className={styles.statLabel}>Ambigüedad en handoff</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.statItem}>
          <span className={styles.statVal}>100%</span>
          <span className={styles.statLabel}>Fidelidad de comportamiento</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.statItem}>
          <span className={styles.statVal}>Directo</span>
          <span className={styles.statLabel}>Validación con el usuario</span>
        </div>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { useLang } from '@/components/project/LangWrapper';
import styles from './ConvergenceIllustration.module.css';

export default function ConvergenceIllustration() {
  const { lang } = useLang();

  return (
    <div className={styles.container}>
      <div className={styles.headerTitle}>
        <span className={styles.tag}>{lang === 'en' ? 'CONTINUOUS CONVERGENCE' : 'CONVERGENCIA CONTINUA'}</span>
        <h3>{lang === 'en' ? 'One unified Product flow' : 'Un solo flujo unificado de Producto'}</h3>
      </div>

      <div className={styles.diagramGrid}>
        {/* Design Node */}
        <div className={styles.nodeCard}>
          <div className={styles.nodeHeader}>
            <span className={styles.dotDesign} />
            <span>{lang === 'en' ? 'Product Design' : 'Diseño de Producto'}</span>
          </div>
          <p>{lang === 'en' ? 'UX, interaction and flow decisions, made with real users.' : 'Toma de decisiones de UX, interacción y flujos con usuarios reales.'}</p>
        </div>

        {/* Converging Center Stream */}
        <div className={styles.streamCenter}>
          <div className={styles.pulseLine}>
            <span className={styles.pulseParticle} />
          </div>
          <div className={styles.badgeUnified}>
            <span>{lang === 'en' ? '⚡ Valid Code Prototype' : '⚡ Prototipo en Código Valido'}</span>
          </div>
        </div>

        {/* Development Node */}
        <div className={styles.nodeCard}>
          <div className={styles.nodeHeader}>
            <span className={styles.dotCode} />
            <span>{lang === 'en' ? 'Engineering / Production' : 'Desarrollo / Producción'}</span>
          </div>
          <p>{lang === 'en' ? "Built directly using the company's real components." : 'Construcción directa usando los mismos componentes reales de la empresa.'}</p>
        </div>
      </div>

      <div className={styles.summaryBar}>
        <div className={styles.statItem}>
          <span className={styles.statVal}>0</span>
          <span className={styles.statLabel}>{lang === 'en' ? 'Ambiguity in handoff' : 'Ambigüedad en handoff'}</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.statItem}>
          <span className={styles.statVal}>100%</span>
          <span className={styles.statLabel}>{lang === 'en' ? 'Behavioral fidelity' : 'Fidelidad de comportamiento'}</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.statItem}>
          <span className={styles.statVal}>{lang === 'en' ? 'Direct' : 'Directo'}</span>
          <span className={styles.statLabel}>{lang === 'en' ? 'Validation with the user' : 'Validación con el usuario'}</span>
        </div>
      </div>
    </div>
  );
}

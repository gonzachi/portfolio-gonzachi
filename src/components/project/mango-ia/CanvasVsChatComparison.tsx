'use client';

import React from 'react';
import styles from './MangoIAComponents.module.css';

export default function CanvasVsChatComparison() {
  return (
    <div className={styles.comparisonWrapper}>
      {/* Top Visual Comparison */}
      <div className={styles.comparisonVisualGrid}>
        {/* Canvas Option */}
        <div className={`${styles.optionCard} ${styles.discardedOption}`}>
          <div className={styles.optionTagRow}>
            <span className={styles.tagDiscarded}>Descartado para MVP</span>
            <span className={styles.optionLabel}>Propuesta A</span>
          </div>
          <h5 className={styles.optionTitle}>Canvas Libre (Estilo Photoshop)</h5>
          
          {/* Abstract Canvas Graphic */}
          <div className={styles.canvasGraphicBox}>
            <div className={styles.canvasGridPattern} />
            <div className={styles.canvasFloatingNode1}>Tool Panel</div>
            <div className={styles.canvasFloatingNode2}>Layers</div>
            <div className={styles.canvasFloatingNode3}>Freeform Board</div>
          </div>

          <p className={styles.optionSummary}>
            Familiar para perfiles sénior pero con una curva de aprendizaje elevada y un esfuerzo técnico muy alto.
          </p>
        </div>

        {/* VS Indicator */}
        <div className={styles.vsBadge}>VS</div>

        {/* Chat Option */}
        <div className={`${styles.optionCard} ${styles.selectedOption}`}>
          <div className={styles.optionTagRow}>
            <span className={styles.tagSelected}>Decisión Adoptada</span>
            <span className={styles.optionLabel}>Propuesta B</span>
          </div>
          <h5 className={styles.optionTitle}>Experiencia Conversacional Guiada</h5>

          {/* Abstract Chat Graphic */}
          <div className={styles.chatGraphicBox}>
            <div className={styles.chatBubbleUser}>@mango-denim / Vaquero relaxed fit lavado medio</div>
            <div className={styles.chatBubbleAi}>
              <span>Variación generada ⚡</span>
              <div className={styles.miniImgPlaceholder}>[ Vista preliminar ]</div>
            </div>
          </div>

          <p className={styles.optionSummary}>
            Mayor guía, curva de aprendizaje casi nula, iteración ultrarrápida y validación inmediata del valor.
          </p>
        </div>
      </div>

      {/* Bottom Pros & Contras Table */}
      <div className={styles.prosConsTableContainer}>
        <h5 className={styles.tableHeading}>Pros & Contras de la Decisión</h5>
        
        <div className={styles.prosConsGrid}>
          {/* Canvas Pros/Cons */}
          <div className={styles.prosConsColumn}>
            <h6 className={styles.columnTitle}>Canvas Libre</h6>
            <ul className={styles.prosConsList}>
              <li className={styles.proItem}><span>+</span> Máxima libertad compositiva para diseñadores avanzados</li>
              <li className={styles.conItem}><span>−</span> Curva de aprendizaje muy elevada para usuarios generales</li>
              <li className={styles.conItem}><span>−</span> Desarrollo técnico complejo que retrasaba el lanzamiento del MVP</li>
            </ul>
          </div>

          {/* Chat Pros/Cons */}
          <div className={styles.prosConsColumn}>
            <h6 className={styles.columnTitle}>Chat Conversacional Guiado</h6>
            <ul className={styles.prosConsList}>
              <li className={styles.proItem}><span>+</span> Velocidad de aprendizaje inmediata (adopción sin fricción)</li>
              <li className={styles.proItem}><span>+</span> Validación de la propuesta de valor mucho antes en producción</li>
              <li className={styles.conItem}><span>−</span> Menor flexibilidad de manipulación pixel-perfect inicial</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

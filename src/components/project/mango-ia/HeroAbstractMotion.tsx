'use client';

import React from 'react';
import styles from './MangoIAComponents.module.css';

export default function HeroAbstractMotion() {
  const steps = [
    { label: 'Idea', icon: '💡' },
    { label: 'Prompt', icon: '✍️' },
    { label: 'AI', icon: '⚡' },
    { label: 'Imagen', icon: '🖼️' },
    { label: 'Iteración', icon: '🔄' },
  ];

  return (
    <div className={styles.heroAbstractContainer}>
      <div className={styles.abstractGlowBg} />
      
      {/* Dynamic Motion Graphic Canvas */}
      <div className={styles.heroSvgWrapper}>
        <svg
          viewBox="0 0 900 220"
          className={styles.heroSvg}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background fine grid lines */}
          <line x1="50" y1="110" x2="850" y2="110" stroke="rgba(0, 0, 0, 0.08)" strokeWidth="1" strokeDasharray="4 4" />
          
          {/* Animated Connecting Line Flow */}
          <path
            d="M 100 110 C 200 40, 270 180, 370 110 C 470 40, 540 180, 640 110 C 720 50, 770 170, 800 110"
            stroke="rgba(0, 0, 0, 0.25)"
            strokeWidth="1.5"
            className={styles.animatedPathBase}
          />
          <path
            d="M 100 110 C 200 40, 270 180, 370 110 C 470 40, 540 180, 640 110 C 720 50, 770 170, 800 110"
            stroke="#000000"
            strokeWidth="2"
            strokeDasharray="120 400"
            className={styles.animatedPathPulse}
          />

          {/* Loop Return Line for Iteración -> Idea */}
          <path
            d="M 800 110 C 830 200, 700 210, 450 210 C 200 210, 70 200, 100 110"
            stroke="rgba(0, 0, 0, 0.15)"
            strokeWidth="1"
            strokeDasharray="6 6"
            className={styles.animatedLoopPath}
          />
        </svg>

        {/* Floating Node Points */}
        <div className={styles.nodesGrid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.nodeItem}>
              <div className={styles.nodePoint}>
                <span className={styles.nodeRing} />
                <span className={styles.nodeCore} />
              </div>
              <div className={styles.nodeBadge}>
                <span className={styles.nodeIcon}>{step.icon}</span>
                <span className={styles.nodeLabel}>{step.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.fineLinesFooterText}>
        <span>Proceso creativo iterativo impulsado por IA</span>
        <span className={styles.dotSeparator}>•</span>
        <span>Líneas finas & motion continuo</span>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { useLang } from '@/components/project/LangWrapper';
import styles from './MangoIAComponents.module.css';

export default function EngineeringVennDiagram() {
  const { lang } = useLang();

  return (
    <div className={styles.vennWrapper}>
      <div className={styles.vennContainer}>
        {/* SVG Venn Diagram */}
        <svg viewBox="0 0 450 360" className={styles.vennSvg} fill="none">
          {/* Usuarios Circle */}
          <circle
            cx="170"
            cy="150"
            r="110"
            fill="rgba(0, 0, 0, 0.03)"
            stroke="#000000"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className={styles.vennCircle}
          />
          <text x="120" y="110" className={styles.circleLabel}>{lang === 'en' ? 'Users' : 'Usuarios'}</text>
          <text x="120" y="130" className={styles.circleSub}>{lang === 'en' ? 'Fashion Needs' : 'Necesidades de Moda'}</text>

          {/* Negocio Circle */}
          <circle
            cx="280"
            cy="150"
            r="110"
            fill="rgba(0, 0, 0, 0.03)"
            stroke="#000000"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className={styles.vennCircle}
          />
          <text x="330" y="110" className={styles.circleLabel}>{lang === 'en' ? 'Business' : 'Negocio'}</text>
          <text x="330" y="130" className={styles.circleSub}>{lang === 'en' ? 'Strategy & Efficiency' : 'Estrategia & Eficiencia'}</text>

          {/* Ingeniería Circle */}
          <circle
            cx="225"
            cy="235"
            r="110"
            fill="rgba(0, 0, 0, 0.03)"
            stroke="#000000"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className={styles.vennCircle}
          />
          <text x="225" y="300" textAnchor="middle" className={styles.circleLabel}>{lang === 'en' ? 'Engineering' : 'Ingeniería'}</text>
          <text x="225" y="318" textAnchor="middle" className={styles.circleSub}>{lang === 'en' ? 'Capacity & AI Models' : 'Capacidad & Modelos AI'}</text>

          {/* Central Intersection Highlight */}
          <ellipse
            cx="225"
            cy="175"
            rx="45"
            ry="45"
            fill="#000000"
            className={styles.centerNode}
          />
          <text x="225" y="172" textAnchor="middle" fill="#FFFFFF" className={styles.centerTextMain}>
            {lang === 'en' ? 'PRODUCT' : 'PRODUCTO'}
          </text>
          <text x="225" y="186" textAnchor="middle" fill="rgba(255,255,255,0.7)" className={styles.centerTextSub}>
            {lang === 'en' ? 'Real Value' : 'Valor Real'}
          </text>
        </svg>
      </div>

      <div className={styles.vennLegend}>
        <div className={styles.legendItem}>
          <span className={styles.legendDot} />
          <p>
            <strong>{lang === 'en' ? 'Collaboration from Day 1:' : 'Colaboración desde el Día 1:'}</strong>{' '}
            {lang === 'en'
              ? 'Technical capabilities shaped the experience. Designing shoulder to shoulder with engineering let us continuously adapt the roadmap and mitigate risk.'
              : 'Las capacidades técnicas condicionaban la experiencia. Diseñar codo a codo con ingeniería permitió adaptar continuamente el roadmap y mitigar riesgos.'}
          </p>
        </div>
      </div>
    </div>
  );
}

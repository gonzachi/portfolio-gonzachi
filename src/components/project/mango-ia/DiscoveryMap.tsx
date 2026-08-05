'use client';

import React from 'react';
import { useLang } from '@/components/project/LangWrapper';
import styles from './MangoIAComponents.module.css';

const DEPARTMENTS = [
  { name: 'Kids', icon: '🧸', focus: { en: 'Playful formats and prints', es: 'Formatos lúdicos y estampados' } },
  { name: 'Woman', icon: '💃', focus: { en: 'Collection volume and silhouettes', es: 'Volumen de colecciones y siluetas' } },
  { name: 'Man', icon: '🕺', focus: { en: 'Structure, tailoring and fabrics', es: 'Estructuras, sastrería y tejidos' } },
  { name: 'Denim', icon: '👖', focus: { en: 'Washes, finishes and textures', es: 'Lavados, acabados y texturas' } },
  { name: 'Accessories', icon: '👜', focus: { en: 'Details, hardware and materials', es: 'Detalles, herrajes y materiales' } },
];

const INSIGHTS = [
  {
    strongEn: 'Common friction:', strongEs: 'Fricción común:',
    en: 'The difficulty wasn’t generating ideas, but speeding up the initial visual representation.',
    es: 'La dificultad no estaba en generar ideas, sino en acelerar la representación visual inicial.',
  },
  {
    strongEn: 'Workflow diversity:', strongEs: 'Diversidad de flujos:',
    en: 'Each department used different tools (moodboards, Pinterest, Photoshop).',
    es: 'Cada departamento utilizaba herramientas distintas (Moodboards, Pinterest, Photoshop).',
  },
  {
    strongEn: 'Core need:', strongEs: 'Necesidad central:',
    en: 'Reduce the time between the mental concept and a tangible image to share with the team.',
    es: 'Reducir el tiempo entre el concepto mental y la imagen tangible para compartir en equipo.',
  },
];

export default function DiscoveryMap() {
  const { lang } = useLang();

  return (
    <div className={styles.discoveryMapContainer}>
      <div className={styles.mapTitleBlock}>
        <span className={styles.mapBadge}>{lang === 'en' ? 'Department Mapping' : 'Mapeo de Departamentos'}</span>
        <h4 className={styles.mapHeading}>
          {lang === 'en' ? 'Mapping Mango’s creative diversity' : 'Mapeando la diversidad creativa de Mango'}
        </h4>
      </div>

      <div className={styles.mapColumnsLayout}>
        {/* Left Column: Department Nodes */}
        <div className={styles.departmentsColumn}>
          {DEPARTMENTS.map((dept, index) => (
            <div key={index} className={styles.deptCard}>
              <div className={styles.deptIconWrapper}>{dept.icon}</div>
              <div className={styles.deptInfo}>
                <span className={styles.deptName}>{dept.name}</span>
                <span className={styles.deptFocus}>{dept.focus[lang]}</span>
              </div>
              <div className={styles.deptLineOutput} />
            </div>
          ))}
        </div>

        {/* Middle Convergence Node */}
        <div className={styles.convergenceHub}>
          <svg className={styles.convergenceSvg} viewBox="0 0 120 300" fill="none">
            <path d="M 0 30 C 60 30, 60 150, 120 150" stroke="rgba(0, 0, 0, 0.2)" strokeWidth="1.5" />
            <path d="M 0 90 C 60 90, 60 150, 120 150" stroke="rgba(0, 0, 0, 0.2)" strokeWidth="1.5" />
            <path d="M 0 150 L 120 150" stroke="rgba(0, 0, 0, 0.3)" strokeWidth="2" />
            <path d="M 0 210 C 60 210, 60 150, 120 150" stroke="rgba(0, 0, 0, 0.2)" strokeWidth="1.5" />
            <path d="M 0 270 C 60 270, 60 150, 120 150" stroke="rgba(0, 0, 0, 0.2)" strokeWidth="1.5" />
            <circle cx="120" cy="150" r="6" fill="#000000" />
          </svg>
          <span className={styles.convergenceLabel}>{lang === 'en' ? 'Interviews & Research' : 'Entrevistas & Investigación'}</span>
        </div>

        {/* Right Column: Insights Output Card */}
        <div className={styles.insightsOutputColumn}>
          <div className={styles.insightsCard}>
            <div className={styles.insightsCardHeader}>
              <span className={styles.insightsBadge}>{lang === 'en' ? 'Key Finding' : 'Hallazgo Clave'}</span>
              <h5 className={styles.insightsTitle}>{lang === 'en' ? 'Unified Insights' : 'Insights Unificados'}</h5>
            </div>
            <ul className={styles.insightsList}>
              {INSIGHTS.map((item, idx) => (
                <li key={idx}>
                  <strong>{lang === 'en' ? item.strongEn : item.strongEs}</strong> {item[lang]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

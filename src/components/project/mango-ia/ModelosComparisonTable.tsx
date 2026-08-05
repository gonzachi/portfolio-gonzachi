'use client';

import React from 'react';
import { useLang } from '@/components/project/LangWrapper';
import styles from './MangoIAComponents.module.css';

const CRITERIA = [
  {
    criterio: { en: 'Cost & Maintenance', es: 'Coste & Mantenimiento' },
    propios: { en: 'Very high (infrastructure, GPUs, fine-tuning)', es: 'Muy elevado (Infraestructura, GPU, Fine-tuning)' },
    externos: { en: 'Optimised (scalable, usage-based API costs)', es: 'Optimizado (Costes de API escalables por uso)' },
  },
  {
    criterio: { en: 'Speed of Evolution', es: 'Velocidad de Evolución' },
    propios: { en: 'Slow (dependent on internal resources)', es: 'Lenta (Dependiente de recursos internos)' },
    externos: { en: 'Exponential (continuous market updates)', es: 'Exponencial (Actualizaciones continuas de mercado)' },
  },
  {
    criterio: { en: 'Team Focus', es: 'Foco del Equipo' },
    propios: { en: 'Split between model training and ML', es: 'Dividido en entrenamiento de modelos y ML' },
    externos: { en: '100% focused on product experience (UX/UI)', es: '100% centrado en la experiencia de producto (UX/UI)' },
  },
  {
    criterio: { en: 'Time-to-Market for Improvements', es: 'Time-to-Market de Mejoras' },
    propios: { en: 'Months per quality iteration', es: 'Meses para cada iteración de calidad' },
    externos: { en: 'Immediate when integrating new leading providers', es: 'Inmediata al integrar nuevos proveedores líderes' },
  },
];

export default function ModelosComparisonTable() {
  const { lang } = useLang();

  return (
    <div className={styles.tableWrapper}>
      <div className={styles.tableHeaderBlock}>
        <span className={styles.tableTag}>{lang === 'en' ? 'AI Strategy' : 'Estrategia de Inteligencia Artificial'}</span>
        <h5 className={styles.tableTitle}>
          {lang === 'en' ? 'Proprietary Models vs. External Models' : 'Modelos Propios vs. Modelos Externos'}
        </h5>
      </div>

      <div className={styles.responsiveTableContainer}>
        <table className={styles.comparisonTable}>
          <thead>
            <tr>
              <th>{lang === 'en' ? 'Criterion' : 'Criterio'}</th>
              <th className={styles.colPropios}>
                {lang === 'en' ? 'Proprietary Models (in-house training)' : 'Modelos Propios (Entrenamiento interno)'}
              </th>
              <th className={styles.colExternos}>
                {lang === 'en' ? 'External Models (API integration) ★' : 'Modelos Externos (Integración API) ★'}
              </th>
            </tr>
          </thead>
          <tbody>
            {CRITERIA.map((row, idx) => (
              <tr key={idx}>
                <td className={styles.criterionCell}>{row.criterio[lang]}</td>
                <td className={styles.propiosCell}>{row.propios[lang]}</td>
                <td className={`${styles.externosCell} ${styles.winnerCell}`}>
                  <span className={styles.checkIcon}>✓</span>
                  {row.externos[lang]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className={styles.tableFootnote}>
        <strong>{lang === 'en' ? 'Strategic outcome:' : 'Resultado estratégico:'}</strong>{' '}
        {lang === 'en'
          ? 'We chose to integrate leading market models and focus our efforts on building a better product experience for Mango’s designers.'
          : 'Optamos por integrar modelos líderes del mercado y centrar los esfuerzos en construir una mejor experiencia de producto para los diseñadores de Mango.'}
      </p>
    </div>
  );
}

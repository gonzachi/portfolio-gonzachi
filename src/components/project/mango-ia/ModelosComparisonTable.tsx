'use client';

import React from 'react';
import styles from './MangoIAComponents.module.css';

export default function ModelosComparisonTable() {
  const criteria = [
    {
      criterio: 'Coste & Mantenimiento',
      propios: 'Muy elevado (Infraestructura, GPU, Fine-tuning)',
      externos: 'Optimizado (Costes de API escalables por uso)',
      winner: 'externos',
    },
    {
      criterio: 'Velocidad de Evolución',
      propios: 'Lenta (Dependiente de recursos internos)',
      externos: 'Exponencial (Actualizaciones continuas de mercado)',
      winner: 'externos',
    },
    {
      criterio: 'Foco del Equipo',
      propios: 'Dividido en entrenamiento de modelos y ML',
      externos: '100% centrado en la experiencia de producto (UX/UI)',
      winner: 'externos',
    },
    {
      criterio: 'Time-to-Market de Mejoras',
      propios: 'Meses para cada iteración de calidad',
      externos: 'Inmediata al integrar nuevos proveedores líderes',
      winner: 'externos',
    },
  ];

  return (
    <div className={styles.tableWrapper}>
      <div className={styles.tableHeaderBlock}>
        <span className={styles.tableTag}>Estrategia de Inteligencia Artificial</span>
        <h5 className={styles.tableTitle}>Modelos Propios vs. Modelos Externos</h5>
      </div>

      <div className={styles.responsiveTableContainer}>
        <table className={styles.comparisonTable}>
          <thead>
            <tr>
              <th>Criterio</th>
              <th className={styles.colPropios}>Modelos Propios (Entrenamiento interno)</th>
              <th className={styles.colExternos}>Modelos Externos (Integración API) ★</th>
            </tr>
          </thead>
          <tbody>
            {criteria.map((row, idx) => (
              <tr key={idx}>
                <td className={styles.criterionCell}>{row.criterio}</td>
                <td className={styles.propiosCell}>{row.propios}</td>
                <td className={`${styles.externosCell} ${styles.winnerCell}`}>
                  <span className={styles.checkIcon}>✓</span>
                  {row.externos}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className={styles.tableFootnote}>
        <strong>Resultado estratégico:</strong> Optamos por integrar modelos líderes del mercado y centrar los esfuerzos en construir una mejor experiencia de producto para los diseñadores de Mango.
      </p>
    </div>
  );
}

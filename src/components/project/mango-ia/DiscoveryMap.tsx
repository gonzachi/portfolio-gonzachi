'use client';

import React from 'react';
import styles from './MangoIAComponents.module.css';

export default function DiscoveryMap() {
  const departments = [
    { name: 'Kids', icon: '🧸', focus: 'Formatos lúdicos y estampados' },
    { name: 'Woman', icon: '💃', focus: 'Volumen de colecciones y siluetas' },
    { name: 'Man', icon: '🕺', focus: 'Estructuras, sastrería y tejidos' },
    { name: 'Denim', icon: '👖', focus: 'Lavados, acabados y texturas' },
    { name: 'Accessories', icon: '👜', focus: 'Detalles, herrajes y materiales' },
  ];

  return (
    <div className={styles.discoveryMapContainer}>
      <div className={styles.mapTitleBlock}>
        <span className={styles.mapBadge}>Mapeo de Departamentos</span>
        <h4 className={styles.mapHeading}>Mapeando la diversidad creativa de Mango</h4>
      </div>

      <div className={styles.mapColumnsLayout}>
        {/* Left Column: Department Nodes */}
        <div className={styles.departmentsColumn}>
          {departments.map((dept, index) => (
            <div key={index} className={styles.deptCard}>
              <div className={styles.deptIconWrapper}>{dept.icon}</div>
              <div className={styles.deptInfo}>
                <span className={styles.deptName}>{dept.name}</span>
                <span className={styles.deptFocus}>{dept.focus}</span>
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
          <span className={styles.convergenceLabel}>Entrevistas & Investigación</span>
        </div>

        {/* Right Column: Insights Output Card */}
        <div className={styles.insightsOutputColumn}>
          <div className={styles.insightsCard}>
            <div className={styles.insightsCardHeader}>
              <span className={styles.insightsBadge}>Hallazgo Clave</span>
              <h5 className={styles.insightsTitle}>Insights Unificados</h5>
            </div>
            <ul className={styles.insightsList}>
              <li>
                <strong>Fricción común:</strong> La dificultad no estaba en generar ideas, sino en acelerar la representación visual inicial.
              </li>
              <li>
                <strong>Diversidad de flujos:</strong> Cada departamento utilizaba herramientas distintas (Moodboards, Pinterest, Photoshop).
              </li>
              <li>
                <strong>Necesidad central:</strong> Reducir el tiempo entre el concepto mental y la imagen tangible para compartir en equipo.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

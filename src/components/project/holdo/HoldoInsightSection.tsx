'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './HoldoInsightSection.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const DESKTOP_POINTS = [
  'Abrir el ordenador',
  'Acceder a la plataforma',
  'Consultar inversiones',
  'Operar desde un entorno fijo',
];

const MOBILE_POINTS = [
  'Consultar la cartera en cualquier momento',
  'Seguir la evolución de las inversiones',
  'Invertir desde cualquier lugar',
  'Llevar el producto siempre disponible',
];

export default function HoldoInsightSection() {
  return (
    <section className={styles.insightSection}>
      <div className={styles.insightContainer}>
        {/* Split 2-Column Main Layout */}
        <div className={styles.insightSplitLayout}>
          {/* Left Column: Eyebrow, Title & Text Paragraphs */}
          <motion.div
            className={styles.insightLeftCol}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <span className={styles.eyebrow}>03 / EL INSIGHT</span>
            <h2 className={styles.heading}>
              Los usuarios no querían una aplicación. Querían llevar sus inversiones en el bolsillo.
            </h2>

            <div className={styles.bodyDescriptionBlock}>
              <p>
                Durante la investigación apareció un patrón muy claro. Los usuarios no pedían una aplicación móvil simplemente por tener una app. Lo que realmente buscaban era poder consultar el estado de sus inversiones, seguir la evolución de su cartera y operar sin depender de abrir el ordenador.
              </p>
              <p className={styles.highlightText}>
                La necesidad no era tecnológica. Era contextual.
              </p>
              <p>
                Las inversiones habían dejado de ser una actividad que ocurría únicamente frente al escritorio. Los usuarios querían acceder a su dinero cuando lo necesitaran, independientemente del lugar o el momento.
              </p>
              <p>
                Ese descubrimiento cambió completamente la forma de plantear el proyecto. El objetivo dejó de ser adaptar una plataforma desktop. Pasó a ser diseñar una experiencia que acompañara al usuario en su día a día.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Editorial Shift in Usage Context Comparison */}
          <motion.div
            className={styles.insightRightCol}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15, ease: EASE }}
          >
            <div className={styles.contextShiftWrapper}>
              <div className={styles.contextShiftContainer}>
                {/* Desktop Context */}
                <div className={styles.contextCol}>
                  <div className={styles.contextHeader}>
                    <span className={styles.contextBadge}>ORIGEN</span>
                    <h3 className={styles.contextTitle}>Desktop Context</h3>
                  </div>
                  <ul className={styles.pointsList}>
                    {DESKTOP_POINTS.map((pt, idx) => (
                      <li key={idx} className={styles.pointItem}>
                        <span className={styles.bulletDot}>•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Transition Connector */}
                <div className={styles.transitionConnector}>
                  <span className={styles.arrowIcon}>↓</span>
                </div>

                {/* Mobile Context */}
                <div className={styles.contextCol}>
                  <div className={styles.contextHeader}>
                    <span className={styles.contextBadgeActive}>NUEVO CONTEXTO</span>
                    <h3 className={styles.contextTitleActive}>Mobile Context</h3>
                  </div>
                  <ul className={styles.pointsListActive}>
                    {MOBILE_POINTS.map((pt, idx) => (
                      <li key={idx} className={styles.pointItemActive}>
                        <span className={styles.bulletDotActive}>•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Centered Closing Transition Statement */}
        <motion.div
          className={styles.closingTransitionSection}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2, ease: EASE }}
        >
          <p className={styles.transitionText}>
            Este insight también nos obligó a priorizar. No todas las funcionalidades debían llegar a la primera versión de la aplicación.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

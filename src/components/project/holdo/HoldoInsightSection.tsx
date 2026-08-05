'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './HoldoInsightSection.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const DESKTOP_POINTS = [
  { en: 'Open the computer', es: 'Abrir el ordenador' },
  { en: 'Access the platform', es: 'Acceder a la plataforma' },
  { en: 'Check investments', es: 'Consultar inversiones' },
  { en: 'Operate from a fixed environment', es: 'Operar desde un entorno fijo' },
];

const MOBILE_POINTS = [
  { en: 'Check the portfolio at any time', es: 'Consultar la cartera en cualquier momento' },
  { en: 'Follow investments as they evolve', es: 'Seguir la evolución de las inversiones' },
  { en: 'Invest from anywhere', es: 'Invertir desde cualquier lugar' },
  { en: 'Carry the product always available', es: 'Llevar el producto siempre disponible' },
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
              <span data-lang="en">Users didn&apos;t want an app. They wanted to carry their investments in their pocket.</span>
              <span data-lang="es">Los usuarios no querían una aplicación. Querían llevar sus inversiones en el bolsillo.</span>
            </h2>

            <div className={styles.bodyDescriptionBlock}>
              <p>
                <span data-lang="en">A very clear pattern emerged during the research. Users weren&apos;t asking for a mobile app just to have one. What they really wanted was to check the state of their investments, follow their portfolio&apos;s evolution and operate without depending on opening a computer.</span>
                <span data-lang="es">Durante la investigación apareció un patrón muy claro. Los usuarios no pedían una aplicación móvil simplemente por tener una app. Lo que realmente buscaban era poder consultar el estado de sus inversiones, seguir la evolución de su cartera y operar sin depender de abrir el ordenador.</span>
              </p>
              <p className={styles.highlightText}>
                <span data-lang="en">The need wasn&apos;t technological. It was contextual.</span>
                <span data-lang="es">La necesidad no era tecnológica. Era contextual.</span>
              </p>
              <p>
                <span data-lang="en">Investing had stopped being an activity that only happened at a desk. Users wanted access to their money whenever they needed it, regardless of place or time.</span>
                <span data-lang="es">Las inversiones habían dejado de ser una actividad que ocurría únicamente frente al escritorio. Los usuarios querían acceder a su dinero cuando lo necesitaran, independientemente del lugar o el momento.</span>
              </p>
              <p>
                <span data-lang="en">That discovery completely changed how we approached the project. The goal stopped being to adapt a desktop platform. It became designing an experience that could accompany the user through their day-to-day.</span>
                <span data-lang="es">Ese descubrimiento cambió completamente la forma de plantear el proyecto. El objetivo dejó de ser adaptar una plataforma desktop. Pasó a ser diseñar una experiencia que acompañara al usuario en su día a día.</span>
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
                    <span className={styles.contextBadge}>
                      <span data-lang="en">ORIGIN</span>
                      <span data-lang="es">ORIGEN</span>
                    </span>
                    <h3 className={styles.contextTitle}>Desktop Context</h3>
                  </div>
                  <ul className={styles.pointsList}>
                    {DESKTOP_POINTS.map((pt, idx) => (
                      <li key={idx} className={styles.pointItem}>
                        <span className={styles.bulletDot}>•</span>
                        <span>
                          <span data-lang="en">{pt.en}</span>
                          <span data-lang="es">{pt.es}</span>
                        </span>
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
                    <span className={styles.contextBadgeActive}>
                      <span data-lang="en">NEW CONTEXT</span>
                      <span data-lang="es">NUEVO CONTEXTO</span>
                    </span>
                    <h3 className={styles.contextTitleActive}>Mobile Context</h3>
                  </div>
                  <ul className={styles.pointsListActive}>
                    {MOBILE_POINTS.map((pt, idx) => (
                      <li key={idx} className={styles.pointItemActive}>
                        <span className={styles.bulletDotActive}>•</span>
                        <span>
                          <span data-lang="en">{pt.en}</span>
                          <span data-lang="es">{pt.es}</span>
                        </span>
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
            <span data-lang="en">This insight also forced us to prioritise. Not every feature needed to reach the app&apos;s first version.</span>
            <span data-lang="es">Este insight también nos obligó a priorizar. No todas las funcionalidades debían llegar a la primera versión de la aplicación.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

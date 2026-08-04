'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './OnboardingDecisionsSection.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const MANIFESTO_PRINCIPLES = [
  {
    num: '01',
    title: 'Hablar como personas, no como expertos',
    desc: 'Sustituimos lenguaje técnico por explicaciones claras y cercanas. Cada pantalla debía responder una pregunta real del usuario en lugar de limitarse a presentar información financiera.',
    abstractVisual: {
      from: 'Término Técnico',
      to: 'Explicación Clara',
    },
  },
  {
    num: '02',
    title: 'Mostrar solo lo necesario en cada momento',
    desc: 'Eliminamos la sobrecarga de información. En lugar de presentar todos los conceptos desde el inicio, introdujimos el contenido de forma progresiva para reducir la carga cognitiva.',
    abstractVisual: {
      steps: ['01 Paso', '02 Paso', '03 Paso'],
    },
  },
  {
    num: '03',
    title: 'Utilizar ejemplos más fáciles de interpretar',
    desc: 'Reemplazamos simulaciones abstractas difíciles de interpretar por ejemplos basados en información clara y comprensible, ayudando a entender el impacto de sus decisiones sin fricción.',
    abstractVisual: {
      from: 'Simulación Hipotética',
      to: 'Ejemplo Real & Claro',
    },
  },
  {
    num: '04',
    title: 'Guiar antes que evaluar',
    desc: 'Cada paso debía ayudar al usuario a comprender qué estaba haciendo y por qué era importante. El objetivo no era comprobar cuánto sabía sobre inversiones, sino acompañarlo hasta completar su primer portafolio con confianza.',
    abstractVisual: {
      path: ['Evaluación', 'Acompañamiento Guiado'],
    },
  },
];

export default function OnboardingDecisionsSection() {
  return (
    <section className={styles.principlesSection}>
      <div className={styles.principlesContainer}>
        {/* Section Header */}
        <motion.div
          className={styles.headerBlock}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <span className={styles.eyebrow}>04 / PRINCIPIOS DE DISEÑO</span>
          <h2 className={styles.heading}>
            Cada decisión de diseño debía reducir incertidumbre antes que añadir información.
          </h2>
          <div className={styles.bodyDescriptionBlock}>
            <p>
              Comprender el problema cambió completamente nuestra forma de diseñar.
            </p>
            <p>
              Dejamos de preguntarnos qué información necesitábamos mostrar para cumplir con el proceso financiero y empezamos a preguntarnos qué necesitaban entender las personas para avanzar con confianza.
            </p>
            <p className={styles.keyTakeawayText}>
              Estos principios guiaron todas las decisiones del rediseño.
            </p>
          </div>
        </motion.div>

        {/* Main Visual: 4 Manifesto Principles connected by a thin vertical line */}
        <div className={styles.manifestoWrapper}>
          <div className={styles.verticalGuideLine} aria-hidden="true" />

          <div className={styles.principlesList}>
            {MANIFESTO_PRINCIPLES.map((principle, idx) => (
              <motion.div
                key={principle.num}
                className={styles.principleItem}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
                transition={{ duration: 0.65, delay: 0.1 + idx * 0.08, ease: EASE }}
              >
                <div className={styles.principleHeader}>
                  <span className={styles.principleNum}>{principle.num}</span>
                  <h3 className={styles.principleTitle}>{principle.title}</h3>
                </div>

                <p className={styles.principleDesc}>{principle.desc}</p>

                {/* Abstract Line / Node Representation */}
                <div className={styles.abstractVisualBox}>
                  {principle.abstractVisual.from && (
                    <div className={styles.abstractCompareRow}>
                      <span className={styles.abstractFrom}>{principle.abstractVisual.from}</span>
                      <span className={styles.abstractArrow}>→</span>
                      <span className={styles.abstractTo}>{principle.abstractVisual.to}</span>
                    </div>
                  )}

                  {principle.abstractVisual.steps && (
                    <div className={styles.abstractStepsRow}>
                      {principle.abstractVisual.steps.map((step, sIdx) => (
                        <React.Fragment key={step}>
                          <span className={styles.abstractStepChip}>{step}</span>
                          {sIdx < principle.abstractVisual.steps!.length - 1 && (
                            <span className={styles.abstractDot}>•</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  )}

                  {principle.abstractVisual.path && (
                    <div className={styles.abstractPathRow}>
                      <span className={styles.abstractPathFrom}>{principle.abstractVisual.path[0]}</span>
                      <span className={styles.abstractPathArrow}>→</span>
                      <span className={styles.abstractPathTo}>{principle.abstractVisual.path[1]}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>




      </div>
    </section>
  );
}

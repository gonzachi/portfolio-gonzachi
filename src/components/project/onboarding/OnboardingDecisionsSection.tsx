'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './OnboardingDecisionsSection.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const MANIFESTO_PRINCIPLES = [
  {
    num: '01',
    titleEn: 'Speak like people, not like experts',
    titleEs: 'Hablar como personas, no como expertos',
    descEn: 'We replaced technical language with clear, approachable explanations. Every screen had to answer a real user question instead of simply presenting financial information.',
    descEs: 'Sustituimos lenguaje técnico por explicaciones claras y cercanas. Cada pantalla debía responder una pregunta real del usuario en lugar de limitarse a presentar información financiera.',
    abstractVisual: {
      fromEn: 'Technical Term',
      fromEs: 'Término Técnico',
      toEn: 'Clear Explanation',
      toEs: 'Explicación Clara',
    },
  },
  {
    num: '02',
    titleEn: "Show only what's necessary at each moment",
    titleEs: 'Mostrar solo lo necesario en cada momento',
    descEn: 'We removed information overload. Instead of presenting every concept from the start, we introduced content progressively to reduce cognitive load.',
    descEs: 'Eliminamos la sobrecarga de información. En lugar de presentar todos los conceptos desde el inicio, introdujimos el contenido de forma progresiva para reducir la carga cognitiva.',
    abstractVisual: {
      stepsEn: ['Step 01', 'Step 02', 'Step 03'],
      stepsEs: ['01 Paso', '02 Paso', '03 Paso'],
    },
  },
  {
    num: '03',
    titleEn: 'Use examples that are easier to interpret',
    titleEs: 'Utilizar ejemplos más fáciles de interpretar',
    descEn: 'We replaced abstract, hard-to-interpret simulations with examples based on clear, understandable information, helping users grasp the impact of their decisions without friction.',
    descEs: 'Reemplazamos simulaciones abstractas difíciles de interpretar por ejemplos basados en información clara y comprensible, ayudando a entender el impacto de sus decisiones sin fricción.',
    abstractVisual: {
      fromEn: 'Hypothetical Simulation',
      fromEs: 'Simulación Hipotética',
      toEn: 'Real & Clear Example',
      toEs: 'Ejemplo Real & Claro',
    },
  },
  {
    num: '04',
    titleEn: 'Guide before evaluating',
    titleEs: 'Guiar antes que evaluar',
    descEn: "Every step had to help the user understand what they were doing and why it mattered. The goal wasn't to test how much they knew about investing, but to accompany them until they completed their first portfolio with confidence.",
    descEs: 'Cada paso debía ayudar al usuario a comprender qué estaba haciendo y por qué era importante. El objetivo no era comprobar cuánto sabía sobre inversiones, sino acompañarlo hasta completar su primer portafolio con confianza.',
    abstractVisual: {
      pathEn: ['Evaluation', 'Guided Support'],
      pathEs: ['Evaluación', 'Acompañamiento Guiado'],
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
            <span data-lang="en">Every design decision had to reduce uncertainty rather than add information.</span>
            <span data-lang="es">Cada decisión de diseño debía reducir incertidumbre antes que añadir información.</span>
          </h2>
          <div className={styles.bodyDescriptionBlock}>
            <p>
              <span data-lang="en">Understanding the problem completely changed how we designed.</span>
              <span data-lang="es">Comprender el problema cambió completamente nuestra forma de diseñar.</span>
            </p>
            <p>
              <span data-lang="en">We stopped asking what information we needed to show to comply with the financial process, and started asking what people needed to understand in order to move forward with confidence.</span>
              <span data-lang="es">Dejamos de preguntarnos qué información necesitábamos mostrar para cumplir con el proceso financiero y empezamos a preguntarnos qué necesitaban entender las personas para avanzar con confianza.</span>
            </p>
            <p className={styles.keyTakeawayText}>
              <span data-lang="en">These principles guided every decision in the redesign.</span>
              <span data-lang="es">Estos principios guiaron todas las decisiones del rediseño.</span>
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
                  <h3 className={styles.principleTitle}>
                    <span data-lang="en">{principle.titleEn}</span>
                    <span data-lang="es">{principle.titleEs}</span>
                  </h3>
                </div>

                <p className={styles.principleDesc}>
                  <span data-lang="en">{principle.descEn}</span>
                  <span data-lang="es">{principle.descEs}</span>
                </p>

                {/* Abstract Line / Node Representation */}
                <div className={styles.abstractVisualBox}>
                  {principle.abstractVisual.fromEs && (
                    <div className={styles.abstractCompareRow}>
                      <span className={styles.abstractFrom}>
                        <span data-lang="en">{principle.abstractVisual.fromEn}</span>
                        <span data-lang="es">{principle.abstractVisual.fromEs}</span>
                      </span>
                      <span className={styles.abstractArrow}>→</span>
                      <span className={styles.abstractTo}>
                        <span data-lang="en">{principle.abstractVisual.toEn}</span>
                        <span data-lang="es">{principle.abstractVisual.toEs}</span>
                      </span>
                    </div>
                  )}

                  {principle.abstractVisual.stepsEs && (
                    <div className={styles.abstractStepsRow}>
                      {principle.abstractVisual.stepsEs.map((step, sIdx) => (
                        <React.Fragment key={step}>
                          <span className={styles.abstractStepChip}>
                            <span data-lang="en">{principle.abstractVisual.stepsEn![sIdx]}</span>
                            <span data-lang="es">{step}</span>
                          </span>
                          {sIdx < principle.abstractVisual.stepsEs!.length - 1 && (
                            <span className={styles.abstractDot}>•</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  )}

                  {principle.abstractVisual.pathEs && (
                    <div className={styles.abstractPathRow}>
                      <span className={styles.abstractPathFrom}>
                        <span data-lang="en">{principle.abstractVisual.pathEn![0]}</span>
                        <span data-lang="es">{principle.abstractVisual.pathEs[0]}</span>
                      </span>
                      <span className={styles.abstractPathArrow}>→</span>
                      <span className={styles.abstractPathTo}>
                        <span data-lang="en">{principle.abstractVisual.pathEn![1]}</span>
                        <span data-lang="es">{principle.abstractVisual.pathEs[1]}</span>
                      </span>
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

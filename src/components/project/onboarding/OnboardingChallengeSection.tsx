'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './OnboardingChallengeSection.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const JOURNEY_STAGES = [
  { id: '01', titleEn: 'Sign up', titleEs: 'Registro', status: 'normal' },
  { id: '02', titleEn: 'Investor profile', titleEs: 'Perfil inversor', status: 'normal' },
  { id: '03', titleEn: 'Personalisation', titleEs: 'Personalización', status: 'normal' },
  { id: '04', titleEn: 'Investment proposal', titleEs: 'Propuesta de inversión', status: 'drop-off', annotationEn: 'Biggest drop-off point', annotationEs: 'Mayor punto de abandono' },
  { id: '05', titleEn: 'Activation', titleEs: 'Activación', status: 'activated' },
];

export default function OnboardingChallengeSection() {
  return (
    <section className={styles.challengeSection}>
      <div className={styles.challengeContainer}>
        {/* Section Header */}
        <motion.div
          className={styles.headerBlock}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <span className={styles.eyebrow}>01 / EL DESAFÍO</span>
          <h2 className={styles.heading}>
            <span data-lang="en">The product&apos;s biggest drop-off point appeared right when users had to create their first portfolio.</span>
            <span data-lang="es">El mayor punto de abandono del producto aparecía justo cuando los usuarios debían crear su primer portafolio.</span>
          </h2>
          <div className={styles.bodyDescriptionBlock}>
            <p>
              <span data-lang="en">Holdo is a Chilean robo-advisor regulated by the CMF (Comisión para el Mercado Financiero). When someone signed up, they had to complete their investor profile before reaching a personalised portfolio proposal, put together by Harry, Holdo&apos;s AI.</span>
              <span data-lang="es">Holdo es un robo-advisor chileno regulado por la CMF (Comisión para el Mercado Financiero). Cuando alguien se registraba, tenía que completar su perfil de inversor antes de llegar a una propuesta de portafolio personalizada, armada por Harry, la IA de Holdo.</span>
            </p>
            <p>
              <span data-lang="en">The portfolio-creation process was one of the most important moments in the experience. It was the step where a user went from simply signing up to building their first investment strategy.</span>
              <span data-lang="es">El proceso de creación del portafolio era uno de los momentos más importantes de la experiencia. Era el paso donde un usuario pasaba de simplemente registrarse a construir su primera estrategia de inversión.</span>
            </p>
            <p>
              <span data-lang="en">However, PostHog and Hotjar showed a very sharp drop precisely at that moment: the screen presenting the investment proposal made users read through 5 informational tabs before they could accept it.</span>
              <span data-lang="es">Sin embargo, PostHog y Hotjar mostraban una caída muy pronunciada precisamente en ese momento: la pantalla donde se presentaba la propuesta de inversión obligaba a leer 5 tabs informativas antes de poder aceptarla.</span>
            </p>
            <p>
              <span data-lang="en">Before thinking about a new interface, we needed to answer a single question:</span>
              <span data-lang="es">Antes de pensar en una nueva interfaz necesitábamos responder una única pregunta:</span>
            </p>
            <p className={styles.questionText}>
              <span data-lang="en">What was causing so many users to abandon the process right here?</span>
              <span data-lang="es">¿Qué estaba haciendo que tantos usuarios abandonaran el proceso justo aquí?</span>
            </p>
          </div>
        </motion.div>

        {/* Main Visual: Conceptual Conversion Funnel Diagram */}
        <motion.div
          className={styles.funnelVisualWrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15, ease: EASE }}
        >
          <div className={styles.funnelFlowRow}>
            {JOURNEY_STAGES.map((stage, idx) => (
              <React.Fragment key={stage.id}>
                <motion.div
                  className={`${styles.stageCard} ${stage.status === 'drop-off' ? styles.stageDropOff : ''}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1, ease: EASE }}
                >
                  <span className={styles.stageNum}>{stage.id}</span>
                  <h3 className={styles.stageTitle}>
                    <span data-lang="en">{stage.titleEn}</span>
                    <span data-lang="es">{stage.titleEs}</span>
                  </h3>
                  {stage.annotationEs && (
                    <motion.div
                      className={styles.dropOffTag}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.65, ease: EASE }}
                    >
                      <span className={styles.tagDot} />
                      <span>
                        <span data-lang="en">{stage.annotationEn}</span>
                        <span data-lang="es">{stage.annotationEs}</span>
                      </span>
                    </motion.div>
                  )}
                </motion.div>
                {idx < JOURNEY_STAGES.length - 1 && (
                  <div className={styles.stageConnector}>
                    <span className={styles.connectorArrow}>→</span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
}

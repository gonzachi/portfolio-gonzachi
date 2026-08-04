'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './OnboardingChallengeSection.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const JOURNEY_STAGES = [
  { id: '01', title: 'Registro', status: 'normal' },
  { id: '02', title: 'Perfil inversor', status: 'normal' },
  { id: '03', title: 'Personalización', status: 'normal' },
  { id: '04', title: 'Propuesta de inversión', status: 'drop-off', annotation: 'Mayor punto de abandono' },
  { id: '05', title: 'Activación', status: 'activated' },
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
            El mayor punto de abandono del producto aparecía justo cuando los usuarios debían crear su primer portafolio.
          </h2>
          <div className={styles.bodyDescriptionBlock}>
            <p>
              El proceso de creación del portafolio era uno de los momentos más importantes de la experiencia. Era el paso donde un usuario pasaba de simplemente registrarse a construir su primera estrategia de inversión.
            </p>
            <p>
              Sin embargo, los datos mostraban una caída muy pronunciada precisamente en ese momento.
            </p>
            <p>
              Antes de pensar en una nueva interfaz necesitábamos responder una única pregunta:
            </p>
            <p className={styles.questionText}>
              ¿Qué estaba haciendo que tantos usuarios abandonaran el proceso justo aquí?
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
                  <h3 className={styles.stageTitle}>{stage.title}</h3>
                  {stage.annotation && (
                    <motion.div
                      className={styles.dropOffTag}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.65, ease: EASE }}
                    >
                      <span className={styles.tagDot} />
                      <span>{stage.annotation}</span>
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

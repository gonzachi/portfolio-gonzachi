'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './OnboardingResearchSection.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const EVIDENCE_COLUMNS = [
  {
    tool: 'PostHog',
    tag: 'QUÉ DESCUBRIMOS',
    desc: 'Detectamos un abandono muy pronunciado durante la creación del primer portafolio.',
  },
  {
    tool: 'Hotjar',
    tag: 'QUÉ OBSERVAMOS',
    desc: 'Las grabaciones mostraban usuarios que dudaban, permanecían mucho tiempo leyendo la información, retrocedían y finalmente abandonaban el proceso.',
  },
  {
    tool: 'User Research',
    tag: 'QUÉ COMPRENDIMOS',
    desc: 'Las entrevistas revelaban que muchas personas no entendían algunos conceptos financieros ni el propósito de determinadas decisiones que debían tomar.',
  },
];

export default function OnboardingResearchSection() {
  return (
    <section className={styles.researchSection}>
      <div className={styles.researchContainer}>
        {/* Section Header */}
        <motion.div
          className={styles.headerBlock}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <span className={styles.eyebrow}>02 / COMPRENDER EL COMPORTAMIENTO</span>
          <h2 className={styles.heading}>
            Ninguna fuente explicaba el problema por sí sola.
          </h2>
          <div className={styles.bodyDescriptionBlock}>
            <p>
              Los datos nos decían dónde ocurría el abandono, pero no explicaban por qué. La respuesta apareció cuando empezamos a conectar todas las evidencias.
            </p>
            <p>
              Para comprender el problema combinamos distintas fuentes de información: analítica de comportamiento, grabaciones de sesiones y los hallazgos obtenidos por el equipo de User Research.
            </p>
            <p>
              Cada una aportaba una parte de la historia. Solo al analizarlas en conjunto comenzó a aparecer un patrón claro.
            </p>
          </div>
        </motion.div>

        {/* Main Visual: 3 Connected Columns Diagram */}
        <div className={styles.visualFlowContainer}>
          <div className={styles.columnsGrid}>
            {EVIDENCE_COLUMNS.map((col, idx) => (
              <motion.div
                key={col.tool}
                className={styles.evidenceColCard}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + idx * 0.1, ease: EASE }}
              >
                <div className={styles.colHeader}>
                  <span className={styles.toolName}>{col.tool}</span>
                  <span className={styles.stageTag}>{col.tag}</span>
                </div>
                <p className={styles.colDesc}>{col.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Connected Lines to Synthesis */}
          <div className={styles.connectorLinesRow} aria-hidden="true">
            <motion.div
              className={styles.connectingLine}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
            />
          </div>

          {/* Synthesis Box */}
          <motion.div
            className={styles.synthesisCard}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
          >
            <div className={styles.synthesisHeader}>
              <span className={styles.synthesisBadge}>SÍNTESIS</span>
              <h3 className={styles.synthesisTitle}>
                Lo que todas las evidencias tenían en común
              </h3>
            </div>
            <div className={styles.synthesisBody}>
              <p>El problema no era la cantidad de pasos.</p>
              <p>Tampoco era el tiempo necesario para completar el proceso.</p>
              <p className={styles.synthesisHighlight}>
                El patrón se repetía cuando el producto empezaba a comunicarse desde la lógica del experto financiero y dejaba de acompañar a personas que estaban invirtiendo por primera vez.
              </p>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}

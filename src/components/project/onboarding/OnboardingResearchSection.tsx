'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './OnboardingResearchSection.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const EVIDENCE_COLUMNS = [
  {
    tool: 'PostHog',
    tagEn: 'WHAT WE FOUND',
    tagEs: 'QUÉ DESCUBRIMOS',
    descEn: 'We detected a very sharp drop-off during the creation of the first portfolio.',
    descEs: 'Detectamos un abandono muy pronunciado durante la creación del primer portafolio.',
  },
  {
    tool: 'Hotjar',
    tagEn: 'WHAT WE OBSERVED',
    tagEs: 'QUÉ OBSERVAMOS',
    descEn: 'Session recordings showed users hesitating, spending a long time reading the information, going back, and eventually abandoning the process.',
    descEs: 'Las grabaciones mostraban usuarios que dudaban, permanecían mucho tiempo leyendo la información, retrocedían y finalmente abandonaban el proceso.',
  },
  {
    tool: 'User Research',
    tagEn: 'WHAT WE UNDERSTOOD',
    tagEs: 'QUÉ COMPRENDIMOS',
    descEn: "Interviews revealed that many people didn't understand certain financial concepts or the purpose of specific decisions they had to make.",
    descEs: 'Las entrevistas revelaban que muchas personas no entendían algunos conceptos financieros ni el propósito de determinadas decisiones que debían tomar.',
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
            <span data-lang="en">No single source explained the problem on its own.</span>
            <span data-lang="es">Ninguna fuente explicaba el problema por sí sola.</span>
          </h2>
          <div className={styles.bodyDescriptionBlock}>
            <p>
              <span data-lang="en">The data told us where the drop-off happened, but not why. The answer appeared once we started connecting all the evidence.</span>
              <span data-lang="es">Los datos nos decían dónde ocurría el abandono, pero no explicaban por qué. La respuesta apareció cuando empezamos a conectar todas las evidencias.</span>
            </p>
            <p>
              <span data-lang="en">To understand the problem we combined different sources of information: behavioural analytics, session recordings, and the findings from the User Research team.</span>
              <span data-lang="es">Para comprender el problema combinamos distintas fuentes de información: analítica de comportamiento, grabaciones de sesiones y los hallazgos obtenidos por el equipo de User Research.</span>
            </p>
            <p>
              <span data-lang="en">Each one contributed part of the story. Only by analysing them together did a clear pattern start to emerge.</span>
              <span data-lang="es">Cada una aportaba una parte de la historia. Solo al analizarlas en conjunto comenzó a aparecer un patrón claro.</span>
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
                  <span className={styles.stageTag}>
                    <span data-lang="en">{col.tagEn}</span>
                    <span data-lang="es">{col.tagEs}</span>
                  </span>
                </div>
                <p className={styles.colDesc}>
                  <span data-lang="en">{col.descEn}</span>
                  <span data-lang="es">{col.descEs}</span>
                </p>
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
              <span className={styles.synthesisBadge}>
                <span data-lang="en">SYNTHESIS</span>
                <span data-lang="es">SÍNTESIS</span>
              </span>
              <h3 className={styles.synthesisTitle}>
                <span data-lang="en">What all the evidence had in common</span>
                <span data-lang="es">Lo que todas las evidencias tenían en común</span>
              </h3>
            </div>
            <div className={styles.synthesisBody}>
              <p>
                <span data-lang="en">The problem wasn&apos;t the number of steps.</span>
                <span data-lang="es">El problema no era la cantidad de pasos.</span>
              </p>
              <p>
                <span data-lang="en">Nor was it the time needed to complete the process.</span>
                <span data-lang="es">Tampoco era el tiempo necesario para completar el proceso.</span>
              </p>
              <p>
                <span data-lang="en">In interviews, more than one user described the proposal screen as feeling like &ldquo;a mortgage contract&rdquo; — lots of fine print, a strong sense of commitment, even though accepting it didn&apos;t actually commit them to invest.</span>
                <span data-lang="es">En las entrevistas, más de un usuario describió la pantalla de la propuesta como si fuera &ldquo;un contrato hipotecario&rdquo; — mucha letra, mucha sensación de compromiso, aunque aceptar no implicaba ninguna obligación real de invertir.</span>
              </p>
              <p className={styles.synthesisHighlight}>
                <span data-lang="en">The pattern repeated whenever the product started speaking from the financial expert&apos;s logic and stopped accompanying people who were investing for the first time.</span>
                <span data-lang="es">El patrón se repetía cuando el producto empezaba a comunicarse desde la lógica del experto financiero y dejaba de acompañar a personas que estaban invirtiendo por primera vez.</span>
              </p>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}

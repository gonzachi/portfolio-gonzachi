'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './OnboardingInsightToSolutionSection.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const BLOCKS = [
  {
    num: '01',
    insightEn: "Users didn't understand the language used during portfolio creation.",
    insightEs: 'Los usuarios no entendían el lenguaje utilizado durante la creación del portafolio.',
    principioEn: 'Speak like people, not like experts.',
    principioEs: 'Hablar como personas, no como expertos.',
    decisionEn: 'Rewrite the content using everyday language and remove unnecessary financial terminology.',
    decisionEs: 'Reescribir los contenidos utilizando lenguaje cotidiano y eliminar terminología financiera innecesaria.',
    resultadoLabelEn: 'CLEAR COMMUNICATION OVERHAUL',
    resultadoLabelEs: 'RECORTE DE COMUNICACIÓN CLARA',
    resultadoDescEn: 'Headlines written as direct questions and accessible language.',
    resultadoDescEs: 'Titulares en formato pregunta directa y lenguaje accesible.',
  },
  {
    num: '02',
    insightEn: 'The amount of information created uncertainty before the user understood the context.',
    insightEs: 'La cantidad de información generaba incertidumbre antes de que el usuario comprendiera el contexto.',
    principioEn: "Show only what's necessary at each moment.",
    principioEs: 'Mostrar solo lo necesario en cada momento.',
    decisionEn: 'Split the information into small progressive steps, showing only what helped the user move forward.',
    decisionEs: 'Dividir la información en pequeños pasos progresivos, mostrando únicamente aquello que ayudaba a avanzar.',
    resultadoLabelEn: 'PROGRESSIVE HIERARCHY',
    resultadoLabelEs: 'JERARQUÍA PROGRESIVA',
    resultadoDescEn: 'Atomic steps with low cognitive load.',
    resultadoDescEs: 'Pasos atómicos de baja carga cognitiva.',
  },
  {
    num: '03',
    insightEn: 'Hypothetical scenarios made financial concepts harder to understand.',
    insightEs: 'Los escenarios hipotéticos dificultaban la comprensión de conceptos financieros.',
    principioEn: 'Explain through examples that are easier to interpret.',
    principioEs: 'Explicar mediante ejemplos más fáciles de interpretar.',
    decisionEn: 'Replace abstract explanations with information that was much closer and more understandable for first-time investors.',
    decisionEs: 'Sustituir explicaciones abstractas por información mucho más cercana y comprensible para personas que invertían por primera vez.',
    resultadoLabelEn: 'UNDERSTANDABLE EXAMPLES',
    resultadoLabelEs: 'EJEMPLOS COMPRENSIBLES',
    resultadoDescEn: 'Contextual data replacing complex simulations.',
    resultadoDescEs: 'Datos contextuales en sustitución de simulaciones complejas.',
  },
  {
    num: '04',
    insightEn: "Many people didn't know what would happen after each decision.",
    insightEs: 'Muchas personas no sabían qué ocurría después de cada decisión.',
    principioEn: 'Guide before evaluating.',
    principioEs: 'Guiar antes que evaluar.',
    decisionEn: 'Add context, progress and support throughout the whole journey.',
    decisionEs: 'Añadir contexto, progreso y acompañamiento durante todo el recorrido.',
    resultadoLabelEn: 'CONTINUOUS SUPPORT',
    resultadoLabelEs: 'ACOMPAÑAMIENTO CONTINUO',
    resultadoDescEn: 'Progress indicators and value context at every choice.',
    resultadoDescEs: 'Indicadores de avance y contexto de valor en cada elección.',
  },
];

export default function OnboardingInsightToSolutionSection() {
  return (
    <section className={styles.bridgeSection}>
      <div className={styles.bridgeContainer}>
        {/* Section Header */}
        <motion.div
          className={styles.headerBlock}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <span className={styles.eyebrow}>05 / DEL INSIGHT A LA SOLUCIÓN</span>
          <h2 className={styles.heading}>
            <span data-lang="en">Every design decision was born from a problem we first had to understand.</span>
            <span data-lang="es">Cada decisión de diseño nace de un problema que primero fue necesario comprender.</span>
          </h2>
          <div className={styles.bodyDescriptionBlock}>
            <p>
              <span data-lang="en">Once we identified the real source of the drop-off, every decision in the redesign stopped responding to visual preferences and started responding to a specific user need.</span>
              <span data-lang="es">Una vez identificado el verdadero origen del abandono, cada decisión del rediseño dejó de responder a preferencias visuales y pasó a responder a una necesidad concreta del usuario.</span>
            </p>
            <p className={styles.keyTakeawayText}>
              <span data-lang="en">The goal was no longer to simplify the interface. It was to remove uncertainty at every step of the journey.</span>
              <span data-lang="es">El objetivo ya no era simplificar la interfaz. Era eliminar incertidumbre en cada paso del recorrido.</span>
            </p>
          </div>
        </motion.div>

        {/* Vertical Flow of 4 Connected Blocks */}
        <div className={styles.blocksList}>
          {BLOCKS.map((block, idx) => (
            <motion.div
              key={block.num}
              className={styles.blockItem}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + idx * 0.08, ease: EASE }}
            >
              <div className={styles.blockNumBadge}>{block.num}</div>

              <div className={styles.chainRow}>
                {/* 1. Insight */}
                <div className={`${styles.chainStep} ${styles.insightStep}`}>
                  <span className={styles.stepTag}>INSIGHT</span>
                  <p className={styles.stepText}>
                    <span data-lang="en">{block.insightEn}</span>
                    <span data-lang="es">{block.insightEs}</span>
                  </p>
                </div>

                <div className={styles.chainArrow}>↓</div>

                {/* 2. Principio */}
                <div className={`${styles.chainStep} ${styles.principioStep}`}>
                  <span className={styles.stepTag}>
                    <span data-lang="en">PRINCIPLE</span>
                    <span data-lang="es">PRINCIPIO</span>
                  </span>
                  <p className={styles.stepText}>
                    <span data-lang="en">{block.principioEn}</span>
                    <span data-lang="es">{block.principioEs}</span>
                  </p>
                </div>

                <div className={styles.chainArrow}>↓</div>

                {/* 3. Decisión */}
                <div className={`${styles.chainStep} ${styles.decisionStep}`}>
                  <span className={styles.stepTag}>
                    <span data-lang="en">DECISION</span>
                    <span data-lang="es">DECISIÓN</span>
                  </span>
                  <p className={styles.stepText}>
                    <span data-lang="en">{block.decisionEn}</span>
                    <span data-lang="es">{block.decisionEs}</span>
                  </p>
                </div>

                <div className={styles.chainArrow}>↓</div>

                {/* 4. Resultado */}
                <div className={`${styles.chainStep} ${styles.resultadoStep}`}>
                  <span className={styles.stepTagActive}>
                    <span data-lang="en">RESULT</span>
                    <span data-lang="es">RESULTADO</span>
                  </span>
                  <span className={styles.resultLabel}>
                    <span data-lang="en">{block.resultadoLabelEn}</span>
                    <span data-lang="es">{block.resultadoLabelEs}</span>
                  </span>
                  <p className={styles.resultDesc}>
                    <span data-lang="en">{block.resultadoDescEn}</span>
                    <span data-lang="es">{block.resultadoDescEs}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Quote (Dramatic Centerpiece) */}
        <motion.div
          className={styles.highlightQuoteSection}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
        >
          <blockquote className={styles.editorialHighlightQuote}>
            <span data-lang="en">&ldquo;We didn&apos;t design new screens. We designed new ways to understand a complex process.&rdquo;</span>
            <span data-lang="es">&ldquo;No diseñamos nuevas pantallas. Diseñamos nuevas formas de entender un proceso complejo.&rdquo;</span>
          </blockquote>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          className={styles.closingStatementBlock}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.45, ease: EASE }}
        >
          <p className={styles.closingText}>
            <span data-lang="en">With these decisions defined, we started building the new portfolio-creation flow.</span>
            <span data-lang="es">Con estas decisiones definidas, comenzamos a construir el nuevo flujo de creación de portafolios.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

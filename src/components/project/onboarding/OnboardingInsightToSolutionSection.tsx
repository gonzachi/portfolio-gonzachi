'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './OnboardingInsightToSolutionSection.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const BLOCKS = [
  {
    num: '01',
    insight: 'Los usuarios no entendían el lenguaje utilizado durante la creación del portafolio.',
    principio: 'Hablar como personas, no como expertos.',
    decision: 'Reescribir los contenidos utilizando lenguaje cotidiano y eliminar terminología financiera innecesaria.',
    resultadoLabel: 'RECORTE DE COMUNICACIÓN CLARA',
    resultadoDesc: 'Titulares en formato pregunta directa y lenguaje accesible.',
  },
  {
    num: '02',
    insight: 'La cantidad de información generaba incertidumbre antes de que el usuario comprendiera el contexto.',
    principio: 'Mostrar solo lo necesario en cada momento.',
    decision: 'Dividir la información en pequeños pasos progresivos, mostrando únicamente aquello que ayudaba a avanzar.',
    resultadoLabel: 'JERARQUÍA PROGRESIVA',
    resultadoDesc: 'Pasos atómicos de baja carga cognitiva.',
  },
  {
    num: '03',
    insight: 'Los escenarios hipotéticos dificultaban la comprensión de conceptos financieros.',
    principio: 'Explicar mediante ejemplos más fáciles de interpretar.',
    decision: 'Sustituir explicaciones abstractas por información mucho más cercana y comprensible para personas que invertían por primera vez.',
    resultadoLabel: 'EJEMPLOS COMPRENSIBLES',
    resultadoDesc: 'Datos contextuales en sustitución de simulaciones complejas.',
  },
  {
    num: '04',
    insight: 'Muchas personas no sabían qué ocurría después de cada decisión.',
    principio: 'Guiar antes que evaluar.',
    decision: 'Añadir contexto, progreso y acompañamiento durante todo el recorrido.',
    resultadoLabel: 'ACOMPAÑAMIENTO CONTINUO',
    resultadoDesc: 'Indicadores de avance y contexto de valor en cada elección.',
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
            Cada decisión de diseño nace de un problema que primero fue necesario comprender.
          </h2>
          <div className={styles.bodyDescriptionBlock}>
            <p>
              Una vez identificado el verdadero origen del abandono, cada decisión del rediseño dejó de responder a preferencias visuales y pasó a responder a una necesidad concreta del usuario.
            </p>
            <p className={styles.keyTakeawayText}>
              El objetivo ya no era simplificar la interfaz. Era eliminar incertidumbre en cada paso del recorrido.
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
                  <p className={styles.stepText}>{block.insight}</p>
                </div>

                <div className={styles.chainArrow}>↓</div>

                {/* 2. Principio */}
                <div className={`${styles.chainStep} ${styles.principioStep}`}>
                  <span className={styles.stepTag}>PRINCIPIO</span>
                  <p className={styles.stepText}>{block.principio}</p>
                </div>

                <div className={styles.chainArrow}>↓</div>

                {/* 3. Decisión */}
                <div className={`${styles.chainStep} ${styles.decisionStep}`}>
                  <span className={styles.stepTag}>DECISIÓN</span>
                  <p className={styles.stepText}>{block.decision}</p>
                </div>

                <div className={styles.chainArrow}>↓</div>

                {/* 4. Resultado */}
                <div className={`${styles.chainStep} ${styles.resultadoStep}`}>
                  <span className={styles.stepTagActive}>RESULTADO</span>
                  <span className={styles.resultLabel}>{block.resultadoLabel}</span>
                  <p className={styles.resultDesc}>{block.resultadoDesc}</p>
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
            &ldquo;No diseñamos nuevas pantallas. Diseñamos nuevas formas de entender un proceso complejo.&rdquo;
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
            Con estas decisiones definidas, comenzamos a construir el nuevo flujo de creación de portafolios.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

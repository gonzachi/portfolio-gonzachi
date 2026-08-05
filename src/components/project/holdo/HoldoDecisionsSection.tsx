'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './HoldoDecisionsSection.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const MANIFESTO_CHAPTERS = [
  {
    num: '01',
    keyword: 'MANIFESTO · 01',
    titleEn: 'Prioritise before displaying',
    titleEs: 'Priorizar antes que mostrar',
    descEn: 'Deciding what information should always be visible and what should appear on demand. The Home was the biggest prioritisation exercise.',
    descEs: 'Decidir qué información debe estar siempre visible y qué debe aparecer bajo demanda. La Home fue el mayor ejercicio de priorización.',
    comparison: {
      leftEn: 'Desktop: All information visible',
      leftEs: 'Desktop: Toda la información visible',
      rightEn: 'Mobile: Key info + breakdowns',
      rightEs: 'Mobile: Información clave + desgloses',
    },
  },
  {
    num: '02',
    keyword: 'MANIFESTO · 02',
    titleEn: 'Keep it familiar',
    titleEs: 'Mantener la familiaridad',
    descEn: "Preserving the product's core logic while adapting navigation and hierarchy to native mobile patterns.",
    descEs: 'Conservar la lógica principal del producto adaptando la navegación y la jerarquía a patrones nativos de dispositivos móviles.',
    comparison: {
      leftEn: 'Original Logic Preserved',
      leftEs: 'Lógica Original Preservada',
      rightEn: 'Native Mobile Navigation',
      rightEs: 'Navegación Nativa Mobile',
    },
  },
  {
    num: '03',
    keyword: 'MANIFESTO · 03',
    titleEn: 'Design for quick moments',
    titleEs: 'Diseñar para momentos rápidos',
    descEn: 'Optimising the experience for brief portfolio-checking sessions and executing operations in just a few steps.',
    descEs: 'Optimizar la experiencia para sesiones breves de consulta de cartera y ejecución de operaciones en pocos pasos.',
    comparison: {
      leftEn: 'Desktop: Exploration sessions',
      leftEs: 'Desktop: Sesiones de exploración',
      rightEn: 'Mobile: On-the-go operations',
      rightEs: 'Mobile: Operativa en movimiento',
    },
  },
  {
    num: '04',
    keyword: 'MANIFESTO · 04',
    titleEn: 'Launch what mattered most, first',
    titleEs: 'Lanzar primero lo que más valor aportaba',
    descEn: 'Prioritising the investment flow in the first version to deliver maximum immediate value to users and business.',
    descEs: 'Priorizar el flujo de inversión en la primera versión para aportar máximo valor inmediato a usuarios y negocio.',
    comparison: {
      leftEn: 'MVP: Invest & Check',
      leftEs: 'MVP: Invertir & Consultar',
      rightEn: 'Responsive: Secondary tasks',
      rightEs: 'Responsive: Gestiones secundarias',
    },
  },
];

export default function HoldoDecisionsSection() {
  return (
    <section className={styles.principlesSection}>
      <div className={styles.principlesContainer}>
        {/* Section Header */}
        <motion.div
          className={styles.headerCentered}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <span className={styles.eyebrow}>04 / PRINCIPIOS DE DISEÑO</span>
          <h2 className={styles.heading}>
            <span data-lang="en">Every design decision aimed to make the product clearer, without making it less powerful.</span>
            <span data-lang="es">Cada decisión de diseño buscaba hacer el producto más claro, sin hacerlo menos potente.</span>
          </h2>
        </motion.div>

        {/* Intro Text Block */}
        <motion.div
          className={styles.bodyIntroBlock}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
        >
          <p>
            <span data-lang="en">The goal was never to move the desktop platform to mobile screen by screen.</span>
            <span data-lang="es">El objetivo nunca fue trasladar la plataforma desktop al móvil pantalla por pantalla.</span>
          </p>
          <p className={styles.highlightIntro}>
            <span data-lang="en">These were the four principles that guided the redesign manifesto.</span>
            <span data-lang="es">Estos fueron los cuatro principios que guiaron el manifiesto de rediseño.</span>
          </p>
        </motion.div>

        {/* 4 Standalone Manifesto Chapters */}
        <div className={styles.manifestoChaptersList}>
          {MANIFESTO_CHAPTERS.map((chapter, idx) => (
            <motion.div
              key={chapter.num}
              className={styles.chapterScreenItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.15, ease: EASE }}
            >
              <div className={styles.chapterHeader}>
                <span className={styles.chapterTag}>{chapter.keyword}</span>
                <h3 className={styles.chapterTitle}>
                  <span data-lang="en">{chapter.titleEn}</span>
                  <span data-lang="es">{chapter.titleEs}</span>
                </h3>
                <p className={styles.chapterDesc}>
                  <span data-lang="en">{chapter.descEn}</span>
                  <span data-lang="es">{chapter.descEs}</span>
                </p>
              </div>

              {/* Small Visual Comparison Diagram */}
              <div className={styles.chapterDiagram}>
                <div className={styles.diagramSideLeft}>
                  <span data-lang="en">{chapter.comparison.leftEn}</span>
                  <span data-lang="es">{chapter.comparison.leftEs}</span>
                </div>
                <span className={styles.diagramArrow}>→</span>
                <div className={styles.diagramSideRight}>
                  <span data-lang="en">{chapter.comparison.rightEn}</span>
                  <span data-lang="es">{chapter.comparison.rightEs}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Quote */}
        <motion.div
          className={styles.highlightQuoteSection}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
        >
          <blockquote className={styles.editorialQuote}>
            <span data-lang="en">&ldquo;Designing for mobile meant deciding what deserved to occupy every pixel of the screen.&rdquo;</span>
            <span data-lang="es">&ldquo;Diseñar para mobile significó decidir qué merecía ocupar cada píxel de la pantalla.&rdquo;</span>
          </blockquote>
        </motion.div>


      </div>
    </section>
  );
}

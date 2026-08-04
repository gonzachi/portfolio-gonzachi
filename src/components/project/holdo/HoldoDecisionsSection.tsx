'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './HoldoDecisionsSection.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const MANIFESTO_CHAPTERS = [
  {
    num: '01',
    keyword: 'MANIFESTO · 01',
    title: 'Priorizar antes que mostrar',
    desc: 'Decidir qué información debe estar siempre visible y qué debe aparecer bajo demanda. La Home fue el mayor ejercicio de priorización.',
    comparison: {
      left: 'Desktop: Toda la información visible',
      right: 'Mobile: Información clave + desgloses',
    },
  },
  {
    num: '02',
    keyword: 'MANIFESTO · 02',
    title: 'Mantener la familiaridad',
    desc: 'Conservar la lógica principal del producto adaptando la navegación y la jerarquía a patrones nativos de dispositivos móviles.',
    comparison: {
      left: 'Lógica Original Preservada',
      right: 'Navegación Nativa Mobile',
    },
  },
  {
    num: '03',
    keyword: 'MANIFESTO · 03',
    title: 'Diseñar para momentos rápidos',
    desc: 'Optimizar la experiencia para sesiones breves de consulta de cartera y ejecución de operaciones en pocos pasos.',
    comparison: {
      left: 'Desktop: Sesiones de exploración',
      right: 'Mobile: Operativa en movimiento',
    },
  },
  {
    num: '04',
    keyword: 'MANIFESTO · 04',
    title: 'Lanzar primero lo que más valor aportaba',
    desc: 'Priorizar el flujo de inversión en la primera versión para aportar máximo valor inmediato a usuarios y negocio.',
    comparison: {
      left: 'MVP: Invertir & Consultar',
      right: 'Responsive: Gestiones secundarias',
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
            Cada decisión de diseño buscaba hacer el producto más claro, sin hacerlo menos potente.
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
            El objetivo nunca fue trasladar la plataforma desktop al móvil pantalla por pantalla.
          </p>
          <p className={styles.highlightIntro}>
            Estos fueron los cuatro principios que guiaron el manifiesto de rediseño.
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
                <h3 className={styles.chapterTitle}>{chapter.title}</h3>
                <p className={styles.chapterDesc}>{chapter.desc}</p>
              </div>

              {/* Small Visual Comparison Diagram */}
              <div className={styles.chapterDiagram}>
                <div className={styles.diagramSideLeft}>
                  <span>{chapter.comparison.left}</span>
                </div>
                <span className={styles.diagramArrow}>→</span>
                <div className={styles.diagramSideRight}>
                  <span>{chapter.comparison.right}</span>
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
            &ldquo;Diseñar para mobile significó decidir qué merecía ocupar cada píxel de la pantalla.&rdquo;
          </blockquote>
        </motion.div>


      </div>
    </section>
  );
}

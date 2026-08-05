'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './HoldoReflectionsSection.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const THREE_LEARNINGS = [
  {
    num: '01',
    titleEn: 'Trimming the MVP scope was hard to align with every stakeholder',
    titleEs: 'Reducir el alcance del MVP fue difícil de alinear con todos los stakeholders',
    descEn: 'But that call let us get to market in record time.',
    descEs: 'Pero esa decisión nos permitió salir al mercado en tiempo récord.',
  },
  {
    num: '02',
    titleEn: 'Users preferred a fast, focused app over a slow, full mobile clone',
    titleEs: 'Los usuarios preferían una app rápida y enfocada, no un clon móvil completo y lento',
    descEn: 'We confirmed it by validating the friends & family rollout against real engagement data.',
    descEs: 'Lo confirmamos validando el uso "friends & family" con datos reales de engagement.',
  },
  {
    num: '03',
    titleEn: 'Redesigning a whole channel means knowing what to leave out',
    titleEs: 'Rediseñar un canal completo exige saber qué dejar fuera',
    descEn: "Functional minimalism sped up the mobile app's launch.",
    descEs: 'El minimalismo funcional aceleró el lanzamiento de la app móvil.',
  },
];

export default function HoldoReflectionsSection() {
  return (
    <section className={styles.reflectionsSection}>
      <div className={styles.reflectionsContainer}>
        {/* Section Header */}
        <motion.div
          className={styles.headerCentered}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <span className={styles.eyebrow}>07 / REFLEXIONES</span>
          <h2 className={styles.heading}>
            <span data-lang="en">Designing for mobile isn&apos;t about reducing screens. It&apos;s about redefining priorities.</span>
            <span data-lang="es">Diseñar para mobile no consiste en reducir pantallas. Consiste en redefinir prioridades.</span>
          </h2>
        </motion.div>

        {/* 3 Core Learnings */}
        <div className={styles.principlesVerticalWrapper}>
          <div className={styles.principlesList}>
            {THREE_LEARNINGS.map((learning, idx) => (
              <motion.div
                key={learning.num}
                className={styles.principleRow}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.15 + idx * 0.08, ease: EASE }}
              >
                <span className={styles.principleNum}>{learning.num}</span>
                <div className={styles.principleContent}>
                  <h4 className={styles.principleTitle}>
                    <span data-lang="en">{learning.titleEn}</span>
                    <span data-lang="es">{learning.titleEs}</span>
                  </h4>
                  <p className={styles.principleDesc}>
                    <span data-lang="en">{learning.descEn}</span>
                    <span data-lang="es">{learning.descEs}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Memorable Closing Quote */}
        <motion.div
          className={styles.highlightQuoteSection}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
        >
          <blockquote className={styles.editorialQuote}>
            <span data-lang="en">&ldquo;This project reinforced an idea that still guides how I work: the best products aren&apos;t the ones that do the most things, but the ones that help people do them with more clarity and confidence.&rdquo;</span>
            <span data-lang="es">&ldquo;Este proyecto reforzó una idea que sigue guiando mi forma de trabajar: los mejores productos no son los que hacen más cosas, sino los que ayudan a las personas a hacerlas con mayor claridad y confianza.&rdquo;</span>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

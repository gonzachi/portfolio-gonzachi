'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './HoldoReflectionsSection.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const THREE_LEARNINGS = [
  {
    num: '01',
    title: 'La simplicidad es una decisión.',
    desc: 'Simplificar no consiste en quitar información, sino en decidir cuál es realmente importante.',
  },
  {
    num: '02',
    title: 'Priorizar también es diseñar.',
    desc: 'No todas las funcionalidades deben llegar al mismo tiempo. Diseñar implica decidir qué esperar.',
  },
  {
    num: '03',
    title: 'La confianza se construye pantalla a pantalla.',
    desc: 'Especialmente en productos financieros, la claridad y la previsibilidad son tan importantes como la funcionalidad.',
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
            Diseñar para mobile no consiste en reducir pantallas. Consiste en redefinir prioridades.
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
                  <h4 className={styles.principleTitle}>{learning.title}</h4>
                  <p className={styles.principleDesc}>{learning.desc}</p>
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
            &ldquo;Este proyecto reforzó una idea que sigue guiando mi forma de trabajar: los mejores productos no son los que hacen más cosas, sino los que ayudan a las personas a hacerlas con mayor claridad y confianza.&rdquo;
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

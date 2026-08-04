'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './OnboardingReflectionsSection.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const THREE_LEARNINGS = [
  {
    num: '01',
    title: 'Diseñar también es traducir',
    desc: 'Un buen producto adapta su lenguaje al contexto y al conocimiento de quien lo utiliza.',
  },
  {
    num: '02',
    title: 'La claridad reduce fricción',
    desc: 'Muchas veces el problema no es la complejidad del proceso, sino cómo se explica.',
  },
  {
    num: '03',
    title: 'Comprender antes de intervenir',
    desc: 'Los datos muestran dónde ocurre un problema. La investigación ayuda a descubrir por qué.',
  },
];

export default function OnboardingReflectionsSection() {
  return (
    <section className={styles.reflectionsSection}>
      <div className={styles.reflectionsContainer}>
        {/* Section Header */}
        <motion.div
          className={styles.headerBlock}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <span className={styles.eyebrow}>07 / REFLEXIÓN</span>
          <h2 className={styles.heading}>
            Entender qué necesita comprender el usuario para seguir avanzando con confianza.
          </h2>
          <div className={styles.bodyDescriptionBlock}>
            <p>
              Diseñar una mejor experiencia nunca consistió en eliminar pasos. Consistió en eliminar dudas.
            </p>
            <p>
              Este proyecto cambió mi forma de entender el diseño de productos complejos. Descubrí que la mayor parte de la fricción no provenía de la interfaz, sino de la distancia entre el lenguaje del producto y el conocimiento de las personas que lo utilizaban.
            </p>
            <p className={styles.keyTakeawayText}>
              Antes de simplificar una pantalla, primero hay que entender qué necesita comprender el usuario para avanzar con seguridad. Ese principio sigue guiando hoy mi forma de diseñar productos digitales.
            </p>
          </div>
        </motion.div>

        {/* Three Learnings Grid */}
        <div className={styles.learningsWrapper}>
          <div className={styles.learningsGrid}>
            {THREE_LEARNINGS.map((item, idx) => (
              <motion.div
                key={item.num}
                className={styles.learningCard}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + idx * 0.08, ease: EASE }}
              >
                <span className={styles.cardNum}>{item.num}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

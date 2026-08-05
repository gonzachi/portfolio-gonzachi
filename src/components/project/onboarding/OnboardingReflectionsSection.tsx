'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './OnboardingReflectionsSection.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const THREE_LEARNINGS = [
  {
    num: '01',
    titleEn: 'Designing in a regulated environment means designing within real constraints',
    titleEs: 'Diseñar en un entorno regulado es diseñar dentro de constraints reales',
    descEn: "The solution wasn't removing information — it was finding the right place for it in the flow.",
    descEs: 'La solución no era eliminar información, sino encontrarle el lugar correcto en el flujo.',
  },
  {
    num: '02',
    titleEn: 'Trust is built with clarity, not exhaustiveness',
    titleEs: 'La confianza se construye con claridad, no con exhaustividad',
    descEn: 'Showing less, at the right moment, creates more confidence than showing everything at once.',
    descEs: 'Mostrar menos, en el momento justo, genera más seguridad que mostrar todo de golpe.',
  },
  {
    num: '03',
    titleEn: 'Working with the CTO, the CEO and the finance expert changed how I worked',
    titleEs: 'Trabajar con el CTO, el CEO y el experto en finanzas cambió mi forma de trabajar',
    descEn: 'It taught me to separate what was a real requirement from what was just inertia from the old design.',
    descEs: 'Me enseñó a separar qué era un requisito real de qué era inercia del diseño anterior.',
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
            <span data-lang="en">Understanding what the user needs to grasp in order to keep moving forward with confidence.</span>
            <span data-lang="es">Entender qué necesita comprender el usuario para seguir avanzando con confianza.</span>
          </h2>
          <div className={styles.bodyDescriptionBlock}>
            <p>
              <span data-lang="en">Designing a better experience was never about removing steps. It was about removing doubts.</span>
              <span data-lang="es">Diseñar una mejor experiencia nunca consistió en eliminar pasos. Consistió en eliminar dudas.</span>
            </p>
            <p>
              <span data-lang="en">This project changed how I understand designing complex products. I discovered that most of the friction didn&apos;t come from the interface, but from the gap between the product&apos;s language and the knowledge of the people using it.</span>
              <span data-lang="es">Este proyecto cambió mi forma de entender el diseño de productos complejos. Descubrí que la mayor parte de la fricción no provenía de la interfaz, sino de la distancia entre el lenguaje del producto y el conocimiento de las personas que lo utilizaban.</span>
            </p>
            <p className={styles.keyTakeawayText}>
              <span data-lang="en">Before simplifying a screen, you first need to understand what the user needs to grasp in order to move forward with confidence. That principle still guides how I design digital products today.</span>
              <span data-lang="es">Antes de simplificar una pantalla, primero hay que entender qué necesita comprender el usuario para avanzar con seguridad. Ese principio sigue guiando hoy mi forma de diseñar productos digitales.</span>
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
                <h3 className={styles.cardTitle}>
                  <span data-lang="en">{item.titleEn}</span>
                  <span data-lang="es">{item.titleEs}</span>
                </h3>
                <p className={styles.cardDesc}>
                  <span data-lang="en">{item.descEn}</span>
                  <span data-lang="es">{item.descEs}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

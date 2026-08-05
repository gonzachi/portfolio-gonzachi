'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './HoldoImpactSection.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const IMPACT_FLOW_BLOCKS = [
  {
    num: '01',
    titleEn: 'Mobile access',
    titleEs: 'Acceso móvil',
    descEn: 'Access to investments at any time and place without depending on a computer.',
    descEs: 'Acceso a las inversiones en cualquier momento y lugar sin depender de un ordenador.',
  },
  {
    num: '02',
    titleEn: 'Quick check-ins',
    titleEs: 'Consulta rápida',
    descEn: 'Checking portfolio status and daily movements in under three seconds.',
    descEs: 'Verificación del estado de la cartera y movimientos diarios en menos de tres segundos.',
  },
  {
    num: '03',
    titleEn: 'Simplified investing',
    titleEs: 'Inversión simplificada',
    descEn: 'An optimised operational flow for making deposits and investments with zero friction.',
    descEs: 'Flujo operativo optimizado para realizar depósitos e inversiones con cero fricción.',
  },
  {
    num: '04',
    titleEn: 'A product built to grow',
    titleEs: 'Producto preparado para crecer',
    descEn: 'A scalable mobile architecture that lays the groundwork for the future roadmap.',
    descEs: 'Arquitectura mobile escalable que sienta las bases para el roadmap futuro.',
  },
];

export default function HoldoImpactSection() {
  return (
    <section className={styles.impactSection}>
      <div className={styles.impactContainer}>
        {/* Section Header */}
        <motion.div
          className={styles.headerCentered}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <span className={styles.eyebrow}>06 / IMPACTO</span>
          <h2 className={styles.heading}>
            <span data-lang="en">An experience designed to accompany users wherever they actually needed it.</span>
            <span data-lang="es">Una experiencia diseñada para acompañar a los usuarios donde realmente la necesitaban.</span>
          </h2>
        </motion.div>

        {/* Real Result */}
        <motion.div
          className={styles.bodyIntroBlock}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          <p>
            <span data-lang="en">The app saw fast adoption among the existing user base: most people with an active account downloaded it and started using it as their regular channel for checking and operating their portfolio. For a first-launch MVP, that behaviour was the most direct validation that the channel solved a real need.</span>
            <span data-lang="es">La app tuvo una adopción rápida entre la base de usuarios existente: la mayoría de quienes tenían cuenta activa la descargó y empezó a usarla como su canal habitual de consulta y operación. Para un MVP de primer lanzamiento, esa señal de comportamiento fue la validación más directa de que el canal resolvía una necesidad real.</span>
          </p>
        </motion.div>

        {/* 4 Connected Impact Blocks */}
        <motion.div
          className={styles.impactGridWrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15, ease: EASE }}
        >
          <div className={styles.impactGrid}>
            {IMPACT_FLOW_BLOCKS.map((block, idx) => (
              <motion.div
                key={block.num}
                className={styles.impactCard}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.2 + idx * 0.08, ease: EASE }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.cardNum}>{block.num}</span>
                  <h4 className={styles.cardTitle}>
                    <span data-lang="en">{block.titleEn}</span>
                    <span data-lang="es">{block.titleEs}</span>
                  </h4>
                </div>
                <p className={styles.cardDesc}>
                  <span data-lang="en">{block.descEn}</span>
                  <span data-lang="es">{block.descEs}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>



        {/* Closing Quote Section */}
        <motion.div
          className={styles.highlightQuoteSection}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
        >
          <blockquote className={styles.editorialQuote}>
            <span data-lang="en">&ldquo;The best mobile experience isn&apos;t about showing less information. It&apos;s about showing the right information at the right time.&rdquo;</span>
            <span data-lang="es">&ldquo;La mejor experiencia mobile no consiste en mostrar menos información. Consiste en mostrar la información adecuada en el momento adecuado.&rdquo;</span>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

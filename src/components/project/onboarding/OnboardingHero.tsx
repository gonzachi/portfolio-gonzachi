'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './OnboardingHero.module.css';
import HeroTransformAnimation from './HeroTransformAnimation';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function OnboardingHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        {/* Left Column: Headline + Body */}
        <div className={styles.heroLeftCol}>
          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
          >
            Haciendo accesible un proceso financiero diseñado para expertos.
          </motion.h1>

          <motion.div
            className={styles.subheadlineBlock}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: EASE }}
          >
            <p>
              El proceso de creación de portafolios concentraba uno de los mayores puntos de abandono del producto. A partir del análisis de comportamiento, investigación y rediseño de la experiencia, transformamos un recorrido largo y técnico en una experiencia más clara, progresiva y comprensible, sin perder el rigor que requería el negocio.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Editorial Transform Animation */}
        <motion.div
          className={styles.heroRightCol}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.5, ease: EASE }}
        >
          <HeroTransformAnimation />
        </motion.div>
      </div>

      {/* Scroll Indicator Button */}
      <div className={styles.scrollIndicator}>
        <span>SCROLL</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}

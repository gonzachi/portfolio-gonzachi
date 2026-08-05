'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './HoldoHero.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function HoldoHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        {/* Left Column: Editorial Headline & Subtitle */}
        <div className={styles.heroLeftCol}>


          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
          >
            <span data-lang="en">Redesigning an investment experience for the mobile world.</span>
            <span data-lang="es">Rediseñando una experiencia de inversión para el mundo mobile.</span>
          </motion.h1>

          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: EASE }}
          >
            <span data-lang="en">Here&apos;s how we transformed a desktop-first experience into an intuitive mobile app, keeping the product&apos;s complexity intact without compromising the user experience.</span>
            <span data-lang="es">Te muestro cómo transformamos una experiencia pensada para desktop en una aplicación móvil intuitiva, manteniendo la complejidad del producto sin comprometer la experiencia del usuario.</span>
          </motion.p>
        </div>

        {/* Right Column: Conceptual Background Vector + Smartphone Mockup */}
        <div className={styles.heroRightCol}>
          {/* Conceptual SVG Composition: Fine Lines & Nodes Evoking Desktop → Mobile */}
          <div className={styles.svgBackgroundWrapper} aria-hidden="true">
            <svg
              viewBox="0 0 500 460"
              width="100%"
              height="100%"
              fill="none"
              style={{ display: 'block', overflow: 'visible' }}
            >
              {/* Desktop Window Wireframe Outline (Left Background) */}
              <motion.rect
                x="20"
                y="60"
                width="280"
                height="190"
                rx="6"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeOpacity="0.12"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.1, ease: EASE }}
              />
              {/* Desktop Header bar line */}
              <motion.line
                x1="20"
                y1="84"
                x2="300"
                y2="84"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeOpacity="0.1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              />
              {/* Desktop Dots */}
              <motion.circle cx="36" cy="72" r="2.5" fill="currentColor" opacity="0.15" />
              <motion.circle cx="46" cy="72" r="2.5" fill="currentColor" opacity="0.15" />
              <motion.circle cx="56" cy="72" r="2.5" fill="currentColor" opacity="0.15" />

              {/* Connecting Fine Transition Lines from Desktop to Mobile */}
              <motion.path
                d="M 240 110 C 310 110, 310 180, 360 180"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeOpacity="0.18"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
              />
              <motion.path
                d="M 270 150 C 320 150, 320 220, 370 220"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeOpacity="0.15"
                strokeDasharray="3 3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.4, ease: EASE }}
              />
              <motion.path
                d="M 220 190 C 290 190, 330 270, 380 270"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeOpacity="0.12"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
              />

              {/* Transition Node Dots */}
              <motion.circle
                cx="310"
                cy="110"
                r="3"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeOpacity="0.25"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              />
              <motion.circle
                cx="320"
                cy="150"
                r="2"
                fill="currentColor"
                opacity="0.2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              />
              <motion.circle
                cx="330"
                cy="270"
                r="2.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeOpacity="0.2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              />
            </svg>
          </div>

          {/* Smartphone Mockup */}
          <motion.div
            className={styles.phoneWrapper}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.75, delay: 0.25, ease: EASE },
              y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.75 },
            }}
          >
            <div className={styles.phoneDevice}>
              {/* Top Notch / Dynamic Island */}
              <div className={styles.phoneNotch} />
              
              {/* Screen Container */}
              <div className={styles.phoneScreen}>
                <Image
                  src="/assets/projects/app-holdo/holdo-app-home-hero.jpg"
                  alt="Pantalla principal de la aplicación móvil de Holdo"
                  fill
                  priority
                  unoptimized
                  className={styles.phoneImage}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <span>SCROLL</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}

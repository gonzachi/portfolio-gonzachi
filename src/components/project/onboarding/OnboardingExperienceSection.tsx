'use client';

import React from 'react';
import { motion } from 'framer-motion';
import InteractiveWireframe from '@/components/project/InteractiveWireframe';
import styles from './OnboardingExperienceSection.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function OnboardingExperienceSection() {
  return (
    <section className={styles.experienceSection}>
      <div className={styles.experienceContainer}>
        {/* Section Header */}
        <motion.div
          className={styles.headerBlock}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <span className={styles.eyebrow}>05 / EL REDISEÑO</span>
          <h2 className={styles.heading}>
            <span data-lang="en">The goal was to make it understandable to anyone.</span>
            <span data-lang="es">El objetivo era conseguir que cualquier persona pudiera entenderlo.</span>
          </h2>
          <div className={styles.bodyDescriptionBlock}>
            <p>
              <span data-lang="en">The redesign didn&apos;t start by reorganising components. It started by rethinking how the product accompanied people while they created their first portfolio.</span>
              <span data-lang="es">El rediseño no comenzó reorganizando componentes. Comenzó replanteando la forma en que el producto acompañaba a las personas durante la creación de su primer portafolio.</span>
            </p>
            <p className={styles.keyTakeawayText}>
              <span data-lang="en">Every screen was simplified to reduce uncertainty, explain only what was necessary, and guide the user step by step.</span>
              <span data-lang="es">Cada pantalla fue simplificada para reducir incertidumbre, explicar únicamente lo necesario y guiar al usuario paso a paso.</span>
            </p>
          </div>
        </motion.div>

        {/* Main Visual: Interactive Wireframe Design */}
        <motion.div
          className={styles.wireframeFlowWrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15, ease: EASE }}
        >
          <div className={styles.interactiveWireframeWrapper}>
            <InteractiveWireframe />
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          className={styles.closingStatementBlock}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.25, ease: EASE }}
        >
          <p className={styles.closingText}>
            <span data-lang="en">The result wasn&apos;t simply a cleaner flow. It was an experience that accompanied the user instead of testing them.</span>
            <span data-lang="es">El resultado no fue simplemente un flujo más limpio. Fue una experiencia que acompañaba al usuario en lugar de ponerlo a prueba.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

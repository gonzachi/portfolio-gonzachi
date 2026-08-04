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
            El objetivo era conseguir que cualquier persona pudiera entenderlo.
          </h2>
          <div className={styles.bodyDescriptionBlock}>
            <p>
              El rediseño no comenzó reorganizando componentes. Comenzó replanteando la forma en que el producto acompañaba a las personas durante la creación de su primer portafolio.
            </p>
            <p className={styles.keyTakeawayText}>
              Cada pantalla fue simplificada para reducir incertidumbre, explicar únicamente lo necesario y guiar al usuario paso a paso.
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
            El resultado no fue simplemente un flujo más limpio. Fue una experiencia que acompañaba al usuario en lugar de ponerlo a prueba.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

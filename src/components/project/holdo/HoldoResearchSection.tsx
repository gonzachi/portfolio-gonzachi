'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './HoldoResearchSection.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function HoldoResearchSection() {
  return (
    <section className={styles.researchSection}>
      <div className={styles.researchContainer}>
        {/* Split 2-Column Layout: Left Title & Paragraphs / Right Desktop Screenshot */}
        <div className={styles.researchSplitLayout}>
          {/* Left Column: Eyebrow, Title & Paragraphs */}
          <motion.div
            className={styles.researchLeftCol}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <span className={styles.eyebrow}>02 / COMPRENDER EL PRODUCTO</span>
            <h2 className={styles.heading}>
              <span data-lang="en">Before designing an app, we needed to understand the product that already existed.</span>
              <span data-lang="es">Antes de diseñar una aplicación, necesitábamos entender el producto que ya existía.</span>
            </h2>
            <div className={styles.bodyDescriptionBlock}>
              <p>
                <span data-lang="en">Holdo already had a consolidated desktop platform. Before designing the mobile experience, we analysed user behaviour and the friction points of the responsive environment.</span>
                <span data-lang="es">Holdo ya contaba con una plataforma consolidada en desktop. Antes de diseñar la experiencia mobile, analizamos el comportamiento de los usuarios y las fricciones del entorno responsive.</span>
              </p>
              <p>
                <span data-lang="en">I analysed behavioural data in PostHog and Hotjar, and complemented it with a competitive benchmark of the Chilean and regional fintech market. Together with the CEO and CTO, we used that data to define what would make it into the MVP scope.</span>
                <span data-lang="es">Analicé el comportamiento de los usuarios en PostHog y Hotjar, y complementé ese análisis con un benchmark competitivo del mercado fintech chileno y regional. Junto al CEO y al CTO, usamos esos datos para definir qué iba a entrar en el alcance del MVP.</span>
              </p>
              <p>
                <span data-lang="en">The goal wasn&apos;t to move every feature onto the phone, but to identify what delivered real value on mobile and what needed to be simplified.</span>
                <span data-lang="es">El objetivo no era trasladar toda la funcionalidad al teléfono, sino identificar qué aportaba valor real en movilidad y qué debía simplificarse.</span>
              </p>
            </div>
          </motion.div>

          {/* Right Column: Large Cropped Desktop App Screenshot */}
          <motion.div
            className={styles.researchRightCol}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15, ease: EASE }}
          >
            <div className={styles.desktopCropFrame}>
              <div className={styles.windowHeader}>
                <div className={styles.windowDots}>
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.windowAddressBar}>holdo.cl · versión desktop</div>
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src="/assets/projects/app-holdo/OB-holdo-webapp-15.jpg"
                  alt="Plataforma Desktop de Holdo"
                  width={1400}
                  height={875}
                  unoptimized
                  priority
                  className={styles.desktopImage}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

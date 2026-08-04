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
              Antes de diseñar una aplicación, necesitábamos entender el producto que ya existía.
            </h2>
            <div className={styles.bodyDescriptionBlock}>
              <p>
                Holdo ya contaba con una plataforma consolidada en desktop. Antes de diseñar la experiencia mobile, analizamos el comportamiento de los usuarios y las fricciones del entorno responsive.
              </p>
              <p>
                El objetivo no era trasladar toda la funcionalidad al teléfono, sino identificar qué aportaba valor real en movilidad y qué debía simplificarse.
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

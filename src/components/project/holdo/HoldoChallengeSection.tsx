'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './HoldoChallengeSection.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];



export default function HoldoChallengeSection() {
  return (
    <section className={styles.challengeSection}>
      <div className={styles.challengeContainer}>
        {/* Split 2-Column Layout: Left Content / Right Column Empty */}
        <div className={styles.challengeSplitLayout}>
          <motion.div
            className={styles.challengeLeftCol}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <span className={styles.eyebrow}>01 / EL RETO</span>
            <h2 className={styles.heading}>
              El producto había crecido. La experiencia no.
            </h2>
            <div className={styles.bodyDescriptionBlock}>
              <p>
                Aunque la plataforma podía utilizarse desde el navegador del teléfono, la experiencia responsive ya no estaba a la altura del producto. Navegar, invertir o consultar información desde el móvil resultaba incómodo.
              </p>
              <p>
                El desafío no consistía en adaptar pantallas a un tamaño menor. Se trataba de replantear la experiencia para mobile, aprovechando las capacidades de una aplicación nativa sin perder la lógica y confianza que los usuarios ya conocían.
              </p>
            </div>
          </motion.div>

          {/* Right Column Left Empty for Generous Editorial Whitespace */}
          <div className={styles.challengeRightCol} aria-hidden="true" />
        </div>




      </div>
    </section>
  );
}

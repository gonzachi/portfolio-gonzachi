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
              <span data-lang="en">The product had grown. The experience hadn&apos;t.</span>
              <span data-lang="es">El producto había crecido. La experiencia no.</span>
            </h2>
            <div className={styles.bodyDescriptionBlock}>
              <p>
                <span data-lang="en">80% of Holdo&apos;s users were already accessing the platform recurrently from their phones — but the platform was still built for desktop.</span>
                <span data-lang="es">El 80% de los usuarios de Holdo ya accedía de forma recurrente desde el celular — pero la plataforma seguía pensada para desktop.</span>
              </p>
              <p>
                <span data-lang="en">Although the platform could be used from a phone&apos;s browser, the responsive experience no longer matched the product. Navigating, investing or checking information from mobile felt uncomfortable.</span>
                <span data-lang="es">Aunque la plataforma podía utilizarse desde el navegador del teléfono, la experiencia responsive ya no estaba a la altura del producto. Navegar, invertir o consultar información desde el móvil resultaba incómodo.</span>
              </p>
              <p>
                <span data-lang="en">The challenge wasn&apos;t about shrinking screens to fit a smaller size. It was about rethinking the experience for mobile, taking advantage of what a native app could offer without losing the logic and trust users already knew.</span>
                <span data-lang="es">El desafío no consistía en adaptar pantallas a un tamaño menor. Se trataba de replantear la experiencia para mobile, aprovechando las capacidades de una aplicación nativa sin perder la lógica y confianza que los usuarios ya conocían.</span>
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

'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './HoldoExperienceSection.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const SCREEN_CARDS = [
  {
    id: '0',
    img: '/assets/projects/app-holdo/app-holdo-0.png',
    titleEn: 'Home / Dashboard',
    titleEs: 'Home / Dashboard',
    descEn: "The home screen shows the consolidated balance and the status of each investment goal. The number takes centre stage in the dark header so the most-checked information is available with no prior action — opening the app is already enough.",
    descEs: 'El home muestra el balance consolidado y el estado de cada meta de inversión. El número ocupa el primer plano del header oscuro para que la información más consultada esté disponible sin ninguna acción previa — abrir la app ya es suficiente.',
    alt: 'Home / Dashboard de la app móvil de Holdo',
  },
  {
    id: '1',
    img: '/assets/projects/app-holdo/app-holdo-1.png',
    titleEn: 'Portfolio detail',
    titleEs: 'Detalle de portafolio',
    descEn: "The account view breaks down each asset with its daily change and weight in the portfolio. We kept the same header structure to create consistency between screens, and grouped recent movements at the bottom so they wouldn't visually compete with investment data.",
    descEs: 'La vista de cuenta desglosa cada activo con su variación del día y su peso en el portafolio. Mantuvimos la misma estructura de header para crear consistencia entre pantallas, y agrupamos los movimientos recientes al final para no competir visualmente con los datos de inversión.',
    alt: 'Detalle de portafolio de Holdo',
  },
  {
    id: '2',
    img: '/assets/projects/app-holdo/app-holdo-2.png',
    titleEn: 'Balance breakdown',
    titleEs: 'Balance desglosado',
    descEn: 'The total balance is broken down into three states: invested, in transit and unassigned. This distinction mattered to Holdo because money in transit is a frequent source of confusion in financial products — making it visible and labelling it explicitly reduces the need for support.',
    descEs: 'El balance total se desglosa en tres estados: invertido, en tránsito y sin asignar. Esta distinción era importante para Holdo porque el dinero en tránsito genera confusión frecuente en productos financieros — hacerlo visible y etiquetarlo explícitamente reduce la necesidad de soporte.',
    alt: 'Balance desglosado en Holdo',
  },
  {
    id: '3',
    img: '/assets/projects/app-holdo/app-holdo-3.png',
    titleEn: 'Deposit confirmation',
    titleEs: 'Confirmación de depósito',
    descEn: 'Money in transit has its own confirmation screen, with the amount and destination account front and centre. The decision was to treat this state as a closing moment for the deposit flow, not as an error or a warning — the tone and the green reinforce that everything is in order.',
    descEs: 'El estado de dinero en tránsito tiene su propia pantalla de confirmación, con el monto y la cuenta destino en el centro. La decisión fue tratar este estado como un momento de cierre del flujo de depósito, no como un error ni una advertencia — el tono y el verde refuerzan que todo está en orden.',
    alt: 'Confirmación de depósito en Holdo',
  },
];

export default function HoldoExperienceSection() {
  return (
    <section className={styles.experienceSection}>
      <div className={styles.experienceContainer}>
        {/* Section Header */}
        <motion.div
          className={styles.headerCentered}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <span className={styles.eyebrow}>05 / DISEÑANDO LA EXPERIENCIA</span>
          <h2 className={styles.heading}>
            <span data-lang="en">Every screen had to simplify a decision, not just display information.</span>
            <span data-lang="es">Cada pantalla debía simplificar una decisión, no solo mostrar información.</span>
          </h2>
        </motion.div>

        {/* Intro Paragraph */}
        <motion.div
          className={styles.bodyIntroBlock}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
        >
          <p>
            <span data-lang="en">With the design principles defined, we transformed a desktop-first platform into an experience specifically designed for mobile devices.</span>
            <span data-lang="es">Con los principios de diseño definidos, transformamos una plataforma pensada para desktop en una experiencia específicamente diseñada para dispositivos móviles.</span>
          </p>
        </motion.div>

        {/* 4 Screen Cards Grid (0, 1, 2, 3) */}
        <motion.div
          className={styles.screensGrid}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2, ease: EASE }}
        >
          {SCREEN_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              className={styles.screenCard}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx, ease: EASE }}
            >
              <div className={styles.screenImageWrapper}>
                <Image
                  src={card.img}
                  alt={card.alt}
                  width={340}
                  height={680}
                  unoptimized
                  className={styles.screenImage}
                />
              </div>
              <div className={styles.screenContent}>
                <h3 className={styles.screenTitle}>
                  <span data-lang="en">{card.titleEn}</span>
                  <span data-lang="es">{card.titleEs}</span>
                </h3>
                <p className={styles.screenDesc}>
                  <span data-lang="en">{card.descEn}</span>
                  <span data-lang="es">{card.descEs}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

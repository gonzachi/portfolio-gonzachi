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
    title: 'Home / Dashboard',
    desc: 'El home muestra el balance consolidado y el estado de cada meta de inversión. El número ocupa el primer plano del header oscuro para que la información más consultada esté disponible sin ninguna acción previa — abrir la app ya es suficiente.',
    alt: 'Home / Dashboard de la app móvil de Holdo',
  },
  {
    id: '1',
    img: '/assets/projects/app-holdo/app-holdo-1.png',
    title: 'Detalle de portafolio',
    desc: 'La vista de cuenta desglosa cada activo con su variación del día y su peso en el portafolio. Mantuvimos la misma estructura de header para crear consistencia entre pantallas, y agrupamos los movimientos recientes al final para no competir visualmente con los datos de inversión.',
    alt: 'Detalle de portafolio de Holdo',
  },
  {
    id: '2',
    img: '/assets/projects/app-holdo/app-holdo-2.png',
    title: 'Balance desglosado',
    desc: 'El balance total se desglosa en tres estados: invertido, en tránsito y sin asignar. Esta distinción era importante para Holdo porque el dinero en tránsito genera confusión frecuente en productos financieros — hacerlo visible y etiquetarlo explícitamente reduce la necesidad de soporte.',
    alt: 'Balance desglosado en Holdo',
  },
  {
    id: '3',
    img: '/assets/projects/app-holdo/app-holdo-3.png',
    title: 'Confirmación de depósito',
    desc: 'El estado de dinero en tránsito tiene su propia pantalla de confirmación, con el monto y la cuenta destino en el centro. La decisión fue tratar este estado como un momento de cierre del flujo de depósito, no como un error ni una advertencia — el tono y el verde refuerzan que todo está en orden.',
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
            Cada pantalla debía simplificar una decisión, no solo mostrar información.
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
            Con los principios de diseño definidos, transformamos una plataforma pensada para desktop en una experiencia específicamente diseñada para dispositivos móviles.
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
                <h3 className={styles.screenTitle}>{card.title}</h3>
                <p className={styles.screenDesc}>{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

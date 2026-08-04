'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ViewportCarousel from '@/components/project/ViewportCarousel';
import styles from './OnboardingImpactSection.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const ONBOARDING_SLIDES = [
  { src: '/assets/projects/ladrillo/Output__selectTemplate--desktop- 1.jpg', alt: 'Diseño final de la propuesta de inversión completa' },
];

const IMPACT_BLOCKS = [
  {
    num: '01',
    title: 'Experiencia más clara',
    desc: 'El proceso pasó de presentar información a acompañar al usuario durante cada decisión.',
  },
  {
    num: '02',
    title: 'Componentes reutilizados',
    desc: 'Parte de los patrones de interacción y comunicación fueron reutilizados en otros espacios del producto, incluida la landing comercial.',
  },
  {
    num: '03',
    title: 'Nueva forma de comunicar',
    desc: 'El proyecto consolidó un lenguaje más cercano, progresivo y comprensible para personas con poca experiencia en inversión.',
  },
  {
    num: '04',
    title: 'Base para futuras iteraciones',
    desc: 'El rediseño estableció principios de comunicación que facilitaron la evolución del producto más allá de esta primera versión.',
  },
];

export default function OnboardingImpactSection() {
  return (
    <section className={styles.impactSection}>
      <div className={styles.impactContainer}>
        {/* Section Header */}
        <motion.div
          className={styles.headerBlock}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <span className={styles.eyebrow}>06 / IMPACTO</span>
          <h2 className={styles.heading}>
            El proyecto no terminó con un nuevo flujo.
          </h2>
          <div className={styles.bodyDescriptionBlock}>
            <p>
              Aunque no puedo compartir métricas de conversión, el rediseño permitió establecer una nueva base para la creación de portafolios.
            </p>
            <p className={styles.keyTakeawayText}>
              Muchas de las decisiones tomadas durante este proyecto trascendieron el propio flujo y comenzaron a utilizarse en otros puntos del producto.
            </p>
          </div>
        </motion.div>

        {/* Viewport Carousel Showcase: Final Design */}
        <motion.div
          className={styles.viewportShowcaseWrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15, ease: EASE }}
        >
          <ViewportCarousel
            urlLabel="holdo.cl / onboarding"
            slides={ONBOARDING_SLIDES}
            height={680}
          />
        </motion.div>

        {/* Main Visual: 4 Connected Impact Blocks Grid */}
        <div className={styles.impactGridWrapper}>
          <div className={styles.impactGrid}>
            {IMPACT_BLOCKS.map((block, idx) => (
              <motion.div
                key={block.num}
                className={styles.impactCard}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + idx * 0.08, ease: EASE }}
              >
                <span className={styles.cardNum}>{block.num}</span>
                <h3 className={styles.cardTitle}>{block.title}</h3>
                <p className={styles.cardDesc}>{block.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>



        {/* Closing Statement */}
        <motion.div
          className={styles.closingStatementBlock}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.45, ease: EASE }}
        >
          <p className={styles.closingText}>
            Este proyecto reforzó una idea que hoy sigue guiando mi forma de diseñar: la claridad también es una funcionalidad.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

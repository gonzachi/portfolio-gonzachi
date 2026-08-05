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
    titleEn: 'A clearer experience',
    titleEs: 'Experiencia más clara',
    descEn: 'The process went from presenting information to accompanying the user through every decision.',
    descEs: 'El proceso pasó de presentar información a acompañar al usuario durante cada decisión.',
  },
  {
    num: '02',
    titleEn: 'Reused components',
    titleEs: 'Componentes reutilizados',
    descEn: 'Some of the interaction and communication patterns were reused in other parts of the product, including the marketing landing page.',
    descEs: 'Parte de los patrones de interacción y comunicación fueron reutilizados en otros espacios del producto, incluida la landing comercial.',
  },
  {
    num: '03',
    titleEn: 'A new way of communicating',
    titleEs: 'Nueva forma de comunicar',
    descEn: 'The project consolidated a more approachable, progressive and understandable language for people with little investing experience.',
    descEs: 'El proyecto consolidó un lenguaje más cercano, progresivo y comprensible para personas con poca experiencia en inversión.',
  },
  {
    num: '04',
    titleEn: 'A foundation for future iterations',
    titleEs: 'Base para futuras iteraciones',
    descEn: 'The redesign established communication principles that made it easier for the product to evolve beyond this first version.',
    descEs: 'El rediseño estableció principios de comunicación que facilitaron la evolución del producto más allá de esta primera versión.',
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
            <span data-lang="en">The project didn&apos;t end with a new flow.</span>
            <span data-lang="es">El proyecto no terminó con un nuevo flujo.</span>
          </h2>
          <div className={styles.bodyDescriptionBlock}>
            <p>
              <span data-lang="en">I left Holdo while the redesign was still in the implementation phase, so I don&apos;t have final impact metrics. What I can confirm is that the project was validated internally and moved forward into production.</span>
              <span data-lang="es">Me fui de Holdo cuando el rediseño todavía estaba en fase de implementación, así que no tengo métricas finales de impacto. Lo que sí puedo confirmar es que el proyecto fue validado internamente y avanzó a producción.</span>
            </p>
            <p className={styles.keyTakeawayText}>
              <span data-lang="en">Many of the decisions made during this project went beyond the flow itself and started being used in other parts of the product.</span>
              <span data-lang="es">Muchas de las decisiones tomadas durante este proyecto trascendieron el propio flujo y comenzaron a utilizarse en otros puntos del producto.</span>
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
                <h3 className={styles.cardTitle}>
                  <span data-lang="en">{block.titleEn}</span>
                  <span data-lang="es">{block.titleEs}</span>
                </h3>
                <p className={styles.cardDesc}>
                  <span data-lang="en">{block.descEn}</span>
                  <span data-lang="es">{block.descEs}</span>
                </p>
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
            <span data-lang="en">This project reinforced an idea that still guides how I design today: clarity is a feature too.</span>
            <span data-lang="es">Este proyecto reforzó una idea que hoy sigue guiando mi forma de diseñar: la claridad también es una funcionalidad.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

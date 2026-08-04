'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './HoldoImpactSection.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const IMPACT_FLOW_BLOCKS = [
  {
    num: '01',
    title: 'Acceso móvil',
    desc: 'Acceso a las inversiones en cualquier momento y lugar sin depender de un ordenador.',
  },
  {
    num: '02',
    title: 'Consulta rápida',
    desc: 'Verificación del estado de la cartera y movimientos diarios en menos de tres segundos.',
  },
  {
    num: '03',
    title: 'Inversión simplificada',
    desc: 'Flujo operativo optimizado para realizar depósitos e inversiones con cero fricción.',
  },
  {
    num: '04',
    title: 'Producto preparado para crecer',
    desc: 'Arquitectura mobile escalable que sienta las bases para el roadmap futuro.',
  },
];

export default function HoldoImpactSection() {
  return (
    <section className={styles.impactSection}>
      <div className={styles.impactContainer}>
        {/* Section Header */}
        <motion.div
          className={styles.headerCentered}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <span className={styles.eyebrow}>06 / IMPACTO</span>
          <h2 className={styles.heading}>
            Una experiencia diseñada para acompañar a los usuarios donde realmente la necesitaban.
          </h2>
        </motion.div>

        {/* 4 Connected Impact Blocks */}
        <motion.div
          className={styles.impactGridWrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15, ease: EASE }}
        >
          <div className={styles.impactGrid}>
            {IMPACT_FLOW_BLOCKS.map((block, idx) => (
              <motion.div
                key={block.num}
                className={styles.impactCard}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.2 + idx * 0.08, ease: EASE }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.cardNum}>{block.num}</span>
                  <h4 className={styles.cardTitle}>{block.title}</h4>
                </div>
                <p className={styles.cardDesc}>{block.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>



        {/* Closing Quote Section */}
        <motion.div
          className={styles.highlightQuoteSection}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
        >
          <blockquote className={styles.editorialQuote}>
            &ldquo;La mejor experiencia mobile no consiste en mostrar menos información. Consiste en mostrar la información adecuada en el momento adecuado.&rdquo;
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

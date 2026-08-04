'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './HoldoExecutiveSummary.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const TABLE_ROWS = [
  { key: 'Proyecto', val: 'Aplicación móvil de inversión para una fintech regulada.', isTitle: true },
  { key: 'Descripción', val: 'Rediseño de una plataforma de inversión originalmente diseñada para desktop, transformándola en una experiencia mobile-first pensada para ofrecer mayor simplicidad, confianza y usabilidad.' },
  { key: 'Rol', val: 'Product Designer' },
  { key: 'Timeline', val: '3 meses (2023)' },
  { key: 'Equipo', val: 'Product Manager · Product Designer · Engineering · Negocio' },
  { key: 'Usuarios', val: 'Inversores particulares' },
  { key: 'Estado', val: 'Lanzado' },
];

const SCOPE_CHIPS = [
  'User Research',
  'UX Strategy',
  'Mobile Design',
  'Information Architecture',
  'Wireframing',
  'Prototyping',
  'Usability Testing',
  'UI Design',
  'Design System',
  'Handoff',
];

export default function HoldoExecutiveSummary() {
  return (
    <section className={styles.execSection}>
      <div className={styles.execContainer}>
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <span className={styles.execEyebrow}>00 / EXECUTIVE SUMMARY</span>
        </motion.div>

        {/* Editorial Table (Identical to Mango) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          <div className={styles.execTableWrapper}>
            {TABLE_ROWS.map((row, idx) => (
              <div key={idx} className={styles.execTableRow}>
                <span className={styles.execTableKey}>{row.key}</span>
                <span className={row.isTitle ? styles.execTableTitleVal : styles.execTableVal}>
                  {row.val}
                </span>
              </div>
            ))}

            {/* Scope Chips Row at bottom of table */}
            <div className={styles.execTableTagsRow}>
              {SCOPE_CHIPS.map((chip, idx) => (
                <motion.span
                  key={chip}
                  className={styles.execChip}
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + idx * 0.035, ease: EASE }}
                >
                  {chip}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

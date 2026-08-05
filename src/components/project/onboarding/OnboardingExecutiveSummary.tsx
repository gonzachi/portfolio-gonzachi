'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './OnboardingExecutiveSummary.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const TABLE_ROWS = [
  { keyEn: 'Project', keyEs: 'Proyecto', valEn: 'Making a financial process designed for experts accessible to everyone', valEs: 'Haciendo accesible un proceso financiero diseñado para expertos', isTitle: true },
  { keyEn: 'Description', keyEs: 'Descripción', valEn: "Redesign of Holdo's activation experience and first investment-portfolio creation flow. Turning a technical process into a guided, understandable, frictionless journey.", valEs: 'Rediseño de la experiencia de activación y creación del primer portafolio de inversión en Holdo. Transformación de un proceso técnico en un recorrido guiado, comprensible y libre de fricciones.' },
  { keyEn: 'Role', keyEs: 'Rol', valEn: 'Product Designer', valEs: 'Product Designer' },
  { keyEn: 'Timeline', keyEs: 'Timeline', valEn: '2 months (2023)', valEs: '2 meses (2023)' },
  { keyEn: 'Team', keyEs: 'Equipo', valEn: 'Product Manager · Product Designer · Research · Finance · Frontend', valEs: 'Product Manager · Product Designer · Research · Finanzas · Frontend' },
  { keyEn: 'Users', keyEs: 'Usuarios', valEn: 'Individual investors in the activation phase', valEs: 'Inversores particulares en fase de activación' },
  { keyEn: 'Status', keyEs: 'Estado', valEn: 'Launched', valEs: 'Lanzado' },
];

const SCOPE_CHIPS = [
  'Behavioral Analytics',
  'User Research Synthesis',
  'UX Strategy',
  'Information Architecture',
  'Wireframing',
  'Interaction Design',
  'Prototyping',
  'Stakeholder Alignment',
  'Design System',
  'Engineering Handoff',
];

export default function OnboardingExecutiveSummary() {
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

        {/* Editorial Table (Identical to Mango & Holdo Mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          <div className={styles.execTableWrapper}>
            {TABLE_ROWS.map((row, idx) => (
              <div key={idx} className={styles.execTableRow}>
                <span className={styles.execTableKey}>
                  <span data-lang="en">{row.keyEn}</span>
                  <span data-lang="es">{row.keyEs}</span>
                </span>
                <span className={row.isTitle ? styles.execTableTitleVal : styles.execTableVal}>
                  <span data-lang="en">{row.valEn}</span>
                  <span data-lang="es">{row.valEs}</span>
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

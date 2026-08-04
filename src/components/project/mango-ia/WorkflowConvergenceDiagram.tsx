'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/components/project/LangWrapper';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const PHASES = [
  {
    num: '01',
    label:   { en: 'Research',      es: 'Investigación' },
    methods: [
      { en: 'User Interviews',       es: 'Entrevistas con usuarios' },
      { en: 'Workflow Walkthroughs', es: 'Shadowing de flujo de trabajo' },
      { en: 'Process Observation',   es: 'Observación de procesos' },
    ],
    isInsight: false,
  },
  {
    num: '02',
    label:   { en: 'Synthesis',     es: 'Síntesis' },
    methods: [
      { en: 'Journey Mapping',       es: 'Journey Mapping' },
      { en: 'Affinity Mapping',      es: 'Affinity Mapping' },
      { en: 'Pain Points & Opportunities', es: 'Puntos de dolor y oportunidades' },
    ],
    isInsight: false,
  },
  {
    num: '03',
    label:   { en: 'Insight',       es: 'Hallazgo' },
    insight: {
      en: 'One shared pattern emerged across all departments.',
      es: 'Un patrón compartido emergió en todos los departamentos.',
    },
    methods: [],
    isInsight: true,
  },
];

export default function WorkflowConvergenceDiagram() {
  const { lang } = useLang();

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0' }}>
      {PHASES.map((phase, idx) => {
        const baseDelay = idx * 0.3;

        return (
          <div key={phase.num} style={{ display: 'flex', flexDirection: 'column' }}>
            {/* ── PHASE CARD ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: baseDelay, ease: EASE }}
              style={{
                border: phase.isInsight ? '1px solid currentColor' : '1px solid rgba(0,0,0,0.1)',
                padding: '1.25rem 1.4rem',
                background: phase.isInsight ? 'currentColor' : 'rgba(0,0,0,0.015)',
                position: 'relative',
              }}
            >
              {/* Eyebrow */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  opacity: phase.isInsight ? 0.55 : 0.38,
                  marginBottom: '0.5rem',
                  color: phase.isInsight ? 'var(--color-bg-primary, #ffffff)' : 'currentColor',
                }}
              >
                {phase.num} / {phase.label[lang]}
              </div>

              {/* Insight text OR method list */}
              {phase.isInsight ? (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: baseDelay + 0.2, ease: EASE }}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    lineHeight: 1.4,
                    letterSpacing: '-0.02em',
                    margin: 0,
                    color: 'var(--color-bg-primary, #ffffff)',
                  }}
                >
                  {phase.insight![lang]}
                </motion.p>
              ) : (
                <ul
                  style={{
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem',
                  }}
                >
                  {phase.methods.map((method, mIdx) => (
                    <motion.li
                      key={mIdx}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: baseDelay + 0.15 + mIdx * 0.08,
                        ease: EASE,
                      }}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.88rem',
                        lineHeight: 1.5,
                        color: 'currentColor',
                        opacity: 0.7,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      {/* Bullet dot */}
                      <span
                        style={{
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          backgroundColor: 'currentColor',
                          opacity: 0.45,
                          flexShrink: 0,
                        }}
                      />
                      {method[lang]}
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>

            {/* ── CONNECTOR ARROW between phases ── */}
            {idx < PHASES.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: baseDelay + 0.35, ease: EASE }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transformOrigin: 'top',
                  padding: '0',
                }}
              >
                {/* Vertical line */}
                <div
                  style={{
                    width: '1px',
                    height: '28px',
                    backgroundColor: 'currentColor',
                    opacity: 0.2,
                  }}
                />
                {/* Arrow head */}
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: '4px solid transparent',
                    borderRight: '4px solid transparent',
                    borderTop: '5px solid currentColor',
                    opacity: 0.25,
                  }}
                />
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}

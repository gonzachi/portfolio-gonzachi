'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import styles from './ProcessTimeline.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const BEFORE_STEPS = [
  { label: 'Discovery', sub: 'Entender problema y usuarios' },
  { label: 'Figma', sub: 'Maqueta estática' },
  { label: 'Prototipo', sub: 'Cartón piedra' },
  { label: 'Iterar', sub: 'Testear y validar' },
  { label: 'Especificaciones', sub: 'Poco claras' },
  { label: 'Handoff', sub: 'A desarrollo' },
  { label: 'Validar', sub: 'Lo que se construyó' },
];

const AFTER_STEPS = [
  { label: 'Discovery', sub: 'Entender problema y usuarios' },
  { label: 'Código', sub: 'Diseño, prototipo e iteración, todo junto' },
  { label: 'Validar', sub: 'Más rápido' },
];

export default function ProcessTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-120px' });
  const [merged, setMerged] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setMerged((m) => !m);
    }, 2600);
    return () => clearInterval(interval);
  }, [isInView]);

  const steps = merged ? AFTER_STEPS : BEFORE_STEPS;

  return (
    <div ref={ref} className={styles.wrapper}>
      <div className={styles.labelRow}>
        <AnimatePresence mode="wait">
          <motion.span
            key={merged ? 'ahora' : 'antes'}
            className={styles.phaseLabel}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.3 }}
          >
            {merged ? 'Ahora' : 'Antes'}
          </motion.span>
        </AnimatePresence>
      </div>

      <motion.div
        className={styles.track}
        layout
        animate={{ maxWidth: merged ? '52%' : '100%' }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <AnimatePresence mode="popLayout">
          {steps.map((step) => (
            <motion.div
              key={step.label}
              layout
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.5, ease: EASE }}
              className={`${styles.step} ${merged && step.label === 'Código' ? styles.stepHighlight : ''}`}
            >
              <span className={styles.stepLabel}>{step.label}</span>
              <span className={styles.stepSub}>{step.sub}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.p
          key={merged ? 'ahora-caption' : 'antes-caption'}
          className={styles.caption}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {merged
            ? 'Figma, prototipo, iteración, especificaciones y handoff se unifican en escribir código directamente. Discovery se mantiene igual, y validar también se vuelve más rápido.'
            : 'Así se veía, paso a paso, el proceso completo.'}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

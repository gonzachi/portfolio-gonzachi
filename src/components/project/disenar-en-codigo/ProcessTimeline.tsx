'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useLang } from '@/components/project/LangWrapper';
import styles from './ProcessTimeline.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const BEFORE_STEPS_ES = [
  { id: 'discovery', label: 'Discovery', sub: 'Entender problema y usuarios' },
  { id: 'figma', label: 'Figma', sub: 'Maqueta estática' },
  { id: 'prototype', label: 'Prototipo', sub: 'Cartón piedra' },
  { id: 'iterate', label: 'Iterar', sub: 'Testear y validar' },
  { id: 'specs', label: 'Especificaciones', sub: 'Poco claras' },
  { id: 'handoff', label: 'Handoff', sub: 'A desarrollo' },
  { id: 'validate', label: 'Validar', sub: 'Lo que se construyó' },
];

const AFTER_STEPS_ES = [
  { id: 'discovery', label: 'Discovery', sub: 'Entender problema y usuarios' },
  { id: 'code', label: 'Código', sub: 'Diseño, prototipo e iteración, todo junto' },
  { id: 'validate', label: 'Validar', sub: 'Más rápido' },
];

const BEFORE_STEPS_EN = [
  { id: 'discovery', label: 'Discovery', sub: 'Understand the problem and users' },
  { id: 'figma', label: 'Figma', sub: 'Static mockup' },
  { id: 'prototype', label: 'Prototype', sub: 'Cardboard cutout' },
  { id: 'iterate', label: 'Iterate', sub: 'Test and validate' },
  { id: 'specs', label: 'Specs', sub: 'Not always clear' },
  { id: 'handoff', label: 'Handoff', sub: 'To engineering' },
  { id: 'validate', label: 'Validate', sub: 'What got built' },
];

const AFTER_STEPS_EN = [
  { id: 'discovery', label: 'Discovery', sub: 'Understand the problem and users' },
  { id: 'code', label: 'Code', sub: 'Design, prototyping and iteration, all at once' },
  { id: 'validate', label: 'Validate', sub: 'Faster' },
];

export default function ProcessTimeline() {
  const { lang } = useLang();
  const BEFORE_STEPS = lang === 'en' ? BEFORE_STEPS_EN : BEFORE_STEPS_ES;
  const AFTER_STEPS = lang === 'en' ? AFTER_STEPS_EN : AFTER_STEPS_ES;
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
            {lang === 'en' ? (merged ? 'Now' : 'Before') : (merged ? 'Ahora' : 'Antes')}
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
              key={step.id}
              layout
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.5, ease: EASE }}
              className={`${styles.step} ${merged && step.id === 'code' ? styles.stepHighlight : ''}`}
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
          {lang === 'en'
            ? (merged
                ? 'Figma, prototyping, iteration, specs and handoff all collapse into writing code directly. Discovery stays the same, and validating gets faster too.'
                : "This is what the full process used to look like, step by step.")
            : (merged
                ? 'Figma, prototipo, iteración, especificaciones y handoff se unifican en escribir código directamente. Discovery se mantiene igual, y validar también se vuelve más rápido.'
                : 'Así se veía, paso a paso, el proceso completo.')}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

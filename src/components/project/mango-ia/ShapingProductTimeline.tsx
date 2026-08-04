'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/components/project/LangWrapper';

const DECISIONS = [
  {
    id: '01',
    title:    { en: 'Freedom or Guidance?',            es: '¿Libertad o Guía?' },
    shortLabel: { en: 'Guidance',                      es: 'Guía' },
    question: {
      en: 'Should we build a completely free canvas or guide designers through a structured experience?',
      es: '¿Debíamos construir un lienzo completamente libre o guiar a los diseñadores a través de una experiencia estructurada?',
    },
    alternatives: {
      en: 'Free-form canvas vs. Guided conversational interface',
      es: 'Lienzo libre vs. Interfaz conversacional guiada',
    },
    decision: {
      en: 'We prioritised a guided conversational experience.',
      es: 'Priorizamos una experiencia conversacional guiada.',
    },
    why: {
      en: 'It reduced technical complexity, lowered the learning curve and allowed us to validate the MVP much faster.',
      es: 'Reducía la complejidad técnica, bajaba la curva de aprendizaje y nos permitía validar el MVP mucho más rápido.',
    },
  },
  {
    id: '02',
    title:    { en: 'One AI Model or Many?',           es: '¿Un Modelo de IA o Varios?' },
    shortLabel: { en: 'Models',                        es: 'Modelos' },
    question: {
      en: 'Should users interact with a single AI model or should the platform choose the best model depending on the task?',
      es: '¿Debían los usuarios interactuar con un único modelo de IA o debía la plataforma elegir el mejor modelo según la tarea?',
    },
    alternatives: null,
    decision: {
      en: 'We designed the product around tasks instead of models.',
      es: 'Diseñamos el producto en torno a tareas, no a modelos.',
    },
    why: {
      en: 'Designers cared about results, not about which model generated them.',
      es: 'A los diseñadores les importaban los resultados, no qué modelo los generaba.',
    },
  },
  {
    id: '03',
    title:    { en: 'Prompts or Workflows?',           es: '¿Prompts o Flujos de Trabajo?' },
    shortLabel: { en: 'Workflows',                     es: 'Flujos' },
    question: {
      en: 'Should users start from an empty prompt or from predefined creative workflows?',
      es: '¿Debían los usuarios empezar desde un prompt en blanco o desde flujos de trabajo creativos predefinidos?',
    },
    alternatives: null,
    decision: {
      en: 'We introduced workflows designed around real creative tasks.',
      es: 'Introducimos flujos de trabajo diseñados alrededor de tareas creativas reales.',
    },
    why: {
      en: 'Designers think in objectives—not prompts. Structuring common tasks reduced friction and accelerated adoption.',
      es: 'Los diseñadores piensan en objetivos, no en prompts. Estructurar las tareas habituales redujo la fricción y aceleró la adopción.',
    },
  },
  {
    id: '04',
    title:    { en: 'Wait or Evolve?',                 es: '¿Esperar o Evolucionar?' },
    shortLabel: { en: 'Iteration',                     es: 'Iteración' },
    question: {
      en: 'Should we wait until generative AI reached the expected quality or launch early and evolve alongside the technology?',
      es: '¿Debíamos esperar a que la IA generativa alcanzara la calidad esperada o lanzar pronto y evolucionar junto con la tecnología?',
    },
    alternatives: null,
    decision: {
      en: 'We embraced continuous iteration.',
      es: 'Apostamos por la iteración continua.',
    },
    why: {
      en: 'The technology was improving every month. Shipping early allowed us to learn faster while the models matured.',
      es: 'La tecnología mejoraba cada mes. Lanzar pronto nos permitió aprender más rápido mientras los modelos maduraban.',
    },
  },
  {
    id: '05',
    title:    { en: 'Regenerate or Edit?',             es: '¿Regenerar o Editar?' },
    shortLabel: { en: 'Editing',                       es: 'Edición' },
    question: {
      en: 'Should users regenerate entire images every time, or edit only the parts they wanted to change?',
      es: '¿Debían los usuarios regenerar imágenes enteras cada vez, o editar solo las partes que querían cambiar?',
    },
    alternatives: null,
    decision: {
      en: 'We incorporated localized editing tools such as brush-based image editing.',
      es: 'Incorporamos herramientas de edición localizada como la edición de imagen por pincel.',
    },
    why: {
      en: 'Designers rarely wanted to start over. They wanted to iterate on existing ideas while preserving everything that already worked.',
      es: 'Los diseñadores raramente querían empezar de cero. Querían iterar sobre ideas existentes conservando todo lo que ya funcionaba.',
    },
  },
];

export default function ShapingProductTimeline() {
  const { lang } = useLang();
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = DECISIONS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : DECISIONS.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < DECISIONS.length - 1 ? prev + 1 : 0));
  };

  return (
    <div style={{ width: '100%', maxWidth: '860px', margin: '0 auto', color: 'currentColor' }}>
      {/* ── SEGMENTED NAVIGATION TABS ── */}
      <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', overflowX: 'auto', paddingBottom: '0.25rem' }}>
        {DECISIONS.map((item, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              style={{
                flex: 1,
                minWidth: '120px',
                padding: '0.65rem 0.85rem',
                border: '1px solid',
                borderColor: isActive ? 'var(--color-text-primary, currentColor)' : 'rgba(var(--fg-rgb, 0,0,0), 0.15)',
                background: isActive ? 'var(--color-text-primary, #ffffff)' : 'transparent',
                color: isActive ? 'var(--color-bg-primary, #121212)' : 'currentColor',
                opacity: isActive ? 1 : 0.65,
                borderRadius: '0',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: isActive ? 700 : 500,
                letterSpacing: '0.06em',
                textAlign: 'left',
              }}
            >
              <span style={{ opacity: 1, fontWeight: isActive ? 700 : 600 }}>{item.id}</span>
              <span style={{ opacity: isActive ? 1 : 0.75, fontWeight: isActive ? 600 : 500 }}>
                {item.shortLabel[lang]}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── MAIN EXECUTIVE DECISION CARD ── */}
      <div style={{ border: '1px solid rgba(0,0,0,0.1)', background: 'rgba(0,0,0,0.012)', boxSizing: 'border-box', position: 'relative' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ padding: '2rem 2.25rem' }}
          >
            {/* Header Eyebrow & Title */}
            <div style={{ marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', gap: '0.5rem' }}>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    opacity: 0.45,
                    display: 'block',
                    marginBottom: '0.35rem',
                  }}
                >
                  {lang === 'es' ? `DECISIÓN ${activeItem.id} DE 05` : `DECISION ${activeItem.id} OF 05`}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.85rem',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                    margin: 0,
                  }}
                >
                  {activeItem.title[lang]}
                </h3>
              </div>

              {/* Progress Indicator Pills */}
              <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                {DECISIONS.map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: i === activeIndex ? '18px' : '6px',
                      height: '4px',
                      backgroundColor: 'currentColor',
                      opacity: i === activeIndex ? 0.9 : 0.2,
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Split Content Matrix */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
              {/* Left Column: Context & Dilemma */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      opacity: 0.4,
                      display: 'block',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {lang === 'es' ? 'El Dilema' : 'The Dilemma'}
                  </span>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.98rem', lineHeight: 1.6, opacity: 0.75, margin: 0 }}>
                    {activeItem.question[lang]}
                  </p>
                </div>

                {activeItem.alternatives && (
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        opacity: 0.4,
                        display: 'block',
                        marginBottom: '0.4rem',
                      }}
                    >
                      {lang === 'es' ? 'Opciones Evaluadas' : 'Evaluated Options'}
                    </span>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        padding: '0.5rem 0.75rem',
                        border: '1px solid rgba(0,0,0,0.08)',
                        background: 'rgba(0,0,0,0.02)',
                        opacity: 0.7,
                        lineHeight: 1.4,
                      }}
                    >
                      {activeItem.alternatives[lang]}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Decision & Business Rationale */}
              <div
                style={{
                  padding: '1.5rem',
                  borderLeft: '2px solid currentColor',
                  background: 'rgba(0,0,0,0.025)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.1rem',
                  justifyContent: 'center',
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      display: 'block',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {lang === 'es' ? 'Decisión de Producto' : 'Product Decision'}
                  </span>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, lineHeight: 1.4, margin: 0 }}>
                    {activeItem.decision[lang]}
                  </p>
                </div>

                <div style={{ height: '1px', width: '100%', background: 'currentColor', opacity: 0.08 }} />

                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      opacity: 0.5,
                      display: 'block',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {lang === 'es' ? 'Por qué / Justificación' : 'Why / Rationale'}
                  </span>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.55, opacity: 0.8, margin: 0 }}>
                    {activeItem.why[lang]}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Footer Navigation Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.85rem 2.25rem', borderTop: '1px solid rgba(0,0,0,0.08)', background: 'rgba(0,0,0,0.01)' }}>
          <button
            onClick={handlePrev}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              color: 'currentColor',
              opacity: 0.65,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: 0,
            }}
          >
            {lang === 'es' ? '← Anterior' : '← Previous'}
          </button>

          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', opacity: 0.4, letterSpacing: '0.1em' }}>
            {activeIndex + 1} / {DECISIONS.length}
          </span>

          <button
            onClick={handleNext}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              color: 'currentColor',
              opacity: 0.65,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: 0,
            }}
          >
            {lang === 'es' ? 'Siguiente →' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  );
}

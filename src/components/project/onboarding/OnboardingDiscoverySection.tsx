'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './OnboardingDiscoverySection.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const EXPERTS_ITEMS = [
  'Lenguaje técnico.',
  'Escenarios hipotéticos.',
  'Mucha información desde el inicio.',
  'Decisiones complejas sin contexto.',
  'El usuario debía adaptarse al producto.',
];

const PEOPLE_ITEMS = [
  'Lenguaje cotidiano.',
  'Datos reales.',
  'Información progresiva.',
  'Decisiones guiadas.',
  'El producto se adapta al usuario.',
];

const SCREENS = [
  {
    label: 'Propuesta',
    src: '/assets/projects/ladrillo/Portfolio/propuesta.jpg',
    alt: 'Pantalla Propuesta – flujo anterior',
  },
  {
    label: 'Estrategia de inversión',
    src: '/assets/projects/ladrillo/Portfolio/estrategia de inversion.jpg',
    alt: 'Pantalla Estrategia de inversión – flujo anterior',
  },
  {
    label: 'Composición',
    src: '/assets/projects/ladrillo/Portfolio/Composición.jpg',
    alt: 'Pantalla Composición – flujo anterior',
  },
  {
    label: 'Comparación histórica',
    src: '/assets/projects/ladrillo/Portfolio/Comparación histórica.jpg',
    alt: 'Pantalla Comparación histórica – flujo anterior',
  },
  {
    label: 'Riesgo',
    src: '/assets/projects/ladrillo/Portfolio/Riesgo Legal.jpg',
    alt: 'Pantalla Riesgo – flujo anterior',
  },
];

export default function OnboardingDiscoverySection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const openModal = useCallback(() => {
    setCurrent(0);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => setModalOpen(false), []);

  const prev = useCallback(() =>
    setCurrent(c => (c - 1 + SCREENS.length) % SCREENS.length), []);

  const next = useCallback(() =>
    setCurrent(c => (c + 1) % SCREENS.length), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!modalOpen) return;
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modalOpen, prev, next, closeModal]);
  return (
    <section className={styles.discoverySection}>
      <div className={styles.discoveryContainer}>
        {/* Top 2-Column Horizontal Split */}
        <div className={styles.twoColumnGrid}>
          {/* Left Column: Eyebrow, Heading, Narrative Body */}
          <motion.div
            className={styles.leftCol}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className={styles.eyebrow}>03 / EL DESCUBRIMIENTO</span>
            <h2 className={styles.heading}>
              Necesitábamos cambiar la forma en que el producto explicaba decisiones complejas.
            </h2>
            <div className={styles.bodyDescriptionBlock}>
              <p>
                Reducir el abandono empezó mucho antes del último botón. Empezó cuando dejamos de hablar como expertos y empezamos a hablar como usuarios.
              </p>
              <p>
                Todas las evidencias apuntaban a la misma conclusión: el problema no era la cantidad de pasos ni la duración del proceso, sino la forma en que se comunicaban los conceptos clave.
              </p>
              <p>
                Descubrimos que el recorrido estaba diseñado desde la perspectiva del negocio y de los expertos financieros. Sin embargo, para una persona que estaba creando su primer portafolio, ese lenguaje generaba incertidumbre, dudas y abandono.
              </p>
              <p className={styles.keyTakeawayText}>
                Comprendimos que el reto no consistía únicamente en simplificar la interfaz. El verdadero reto era traducir un proceso pensado para expertos en una experiencia comprensible para cualquier persona.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Pensado para expertos VS Pensado para personas */}
          <motion.div
            className={styles.rightCol}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15, ease: EASE }}
          >
            <div className={styles.comparisonContainer}>
              {/* Left inside comparison: Experts */}
              <div className={styles.expertsCol}>
                <div className={styles.colBadge}>PERSPECTIVA INICIAL</div>
                <h3 className={styles.colTitle}>Pensado para expertos</h3>
                <ul className={styles.pointsList}>
                  {EXPERTS_ITEMS.map((item, idx) => (
                    <li key={idx} className={styles.pointItem}>
                      <span className={styles.bulletDash}>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {/* Ver flujo anterior */}
                <button
                  className={styles.prevFlowBtn}
                  onClick={openModal}
                  aria-label="Ver el flujo anterior de onboarding"
                >
                  <span className={styles.prevFlowBtnIcon} aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="2.5" width="14" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.25"/>
                      <circle cx="3.5" cy="5" r="0.75" fill="currentColor"/>
                      <circle cx="5.75" cy="5" r="0.75" fill="currentColor"/>
                      <circle cx="8" cy="5" r="0.75" fill="currentColor"/>
                      <line x1="1" y1="7" x2="15" y2="7" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                  </span>
                  Ver flujo anterior
                </button>
              </div>

              {/* Middle Arrow Connector */}
              <div className={styles.connectorCol} aria-hidden="true">
                <span className={styles.transitionArrow}>↓</span>
              </div>

              {/* Right inside comparison: People */}
              <div className={styles.peopleCol}>
                <div className={styles.colBadgeActive}>NUEVA PERSPECTIVA</div>
                <h3 className={styles.colTitleActive}>Pensado para personas</h3>
                <ul className={styles.pointsListActive}>
                  {PEOPLE_ITEMS.map((item, idx) => (
                    <li key={idx} className={styles.pointItemActive}>
                      <span className={styles.bulletDotActive}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Centered Highlight Quote */}
        <motion.div
          className={styles.highlightQuoteSection}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
        >
          <blockquote className={styles.editorialHighlightQuote}>
            &ldquo;El producto hablaba correctamente. Simplemente estaba hablándole a la persona equivocada.&rdquo;
          </blockquote>
        </motion.div>

        {/* Full-Width Centered Closing Statement */}
        <motion.div
          className={styles.closingStatementBlock}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.4, ease: EASE }}
        >
          <p className={styles.closingText}>
            A partir de ese momento dejamos de preguntarnos qué información debíamos mostrar y empezamos a preguntarnos qué necesitaban entender las personas para seguir avanzando.
          </p>
        </motion.div>
      </div>

      {/* ── MODAL: Flujo anterior ── */}
      {mounted && modalOpen && createPortal(
        <AnimatePresence>
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={closeModal}
            aria-modal="true"
            role="dialog"
            aria-label="Flujo anterior de onboarding"
          >
            <motion.div
              className={styles.modalBox}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={styles.modalHeader}>
                <span className={styles.modalLabel}>FLUJO ANTERIOR</span>
                <button
                  className={styles.modalClose}
                  onClick={closeModal}
                  aria-label="Cerrar modal"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <line x1="3" y1="3" x2="15" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="15" y1="3" x2="3" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Browser Chrome */}
              <div className={styles.browserChrome}>
                <div className={styles.browserBar}>
                  <div className={styles.browserDots}>
                    <span className={styles.dot} style={{ background: '#FF5F57' }} />
                    <span className={styles.dot} style={{ background: '#FEBC2E' }} />
                    <span className={styles.dot} style={{ background: '#28C840' }} />
                  </div>
                  <div className={styles.browserUrl}>
                    <span>holdo.com / onboarding / propuesta</span>
                  </div>
                </div>

                {/* Screen Viewer */}
                <div className={styles.screenViewer}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current}
                      className={styles.screenSlide}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -18 }}
                      transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <Image
                        src={SCREENS[current].src}
                        alt={SCREENS[current].alt}
                        width={1200}
                        height={900}
                        className={styles.screenImage}
                        priority
                        unoptimized
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Prev Arrow */}
                  <button
                    className={`${styles.navArrow} ${styles.navArrowLeft}`}
                    onClick={prev}
                    aria-label="Pantalla anterior"
                    disabled={SCREENS.length <= 1}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  {/* Next Arrow */}
                  <button
                    className={`${styles.navArrow} ${styles.navArrowRight}`}
                    onClick={next}
                    aria-label="Siguiente pantalla"
                    disabled={SCREENS.length <= 1}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Bottom Nav: Tabs + Counter */}
              <div className={styles.modalFooter}>
                <div className={styles.tabRow}>
                  {SCREENS.map((s, i) => (
                    <button
                      key={s.label}
                      className={`${styles.tabBtn} ${i === current ? styles.tabBtnActive : ''}`}
                      onClick={() => setCurrent(i)}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
                <span className={styles.modalCounter}>
                  {current + 1} / {SCREENS.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}

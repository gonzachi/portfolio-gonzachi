'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/components/project/LangWrapper';
import styles from './OnboardingDiscoverySection.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const EXPERTS_ITEMS = [
  { en: 'Technical language.', es: 'Lenguaje técnico.' },
  { en: 'Hypothetical scenarios.', es: 'Escenarios hipotéticos.' },
  { en: 'A lot of information from the start.', es: 'Mucha información desde el inicio.' },
  { en: 'Complex decisions with no context.', es: 'Decisiones complejas sin contexto.' },
  { en: 'The user had to adapt to the product.', es: 'El usuario debía adaptarse al producto.' },
];

const PEOPLE_ITEMS = [
  { en: 'Everyday language.', es: 'Lenguaje cotidiano.' },
  { en: 'Real data.', es: 'Datos reales.' },
  { en: 'Progressive information.', es: 'Información progresiva.' },
  { en: 'Guided decisions.', es: 'Decisiones guiadas.' },
  { en: 'The product adapts to the user.', es: 'El producto se adapta al usuario.' },
];

const SCREENS = [
  {
    label: 'Propuesta',
    labelEn: 'Proposal',
    src: '/assets/projects/ladrillo/Portfolio/propuesta.jpg',
    alt: 'Pantalla Propuesta – flujo anterior',
  },
  {
    label: 'Estrategia de inversión',
    labelEn: 'Investment strategy',
    src: '/assets/projects/ladrillo/Portfolio/estrategia de inversion.jpg',
    alt: 'Pantalla Estrategia de inversión – flujo anterior',
  },
  {
    label: 'Composición',
    labelEn: 'Composition',
    src: '/assets/projects/ladrillo/Portfolio/Composición.jpg',
    alt: 'Pantalla Composición – flujo anterior',
  },
  {
    label: 'Comparación histórica',
    labelEn: 'Historical comparison',
    src: '/assets/projects/ladrillo/Portfolio/Comparación histórica.jpg',
    alt: 'Pantalla Comparación histórica – flujo anterior',
  },
  {
    label: 'Riesgo',
    labelEn: 'Risk',
    src: '/assets/projects/ladrillo/Portfolio/Riesgo Legal.jpg',
    alt: 'Pantalla Riesgo – flujo anterior',
  },
];

export default function OnboardingDiscoverySection() {
  const { lang } = useLang();
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
              <span data-lang="en">We needed to change how the product explained complex decisions.</span>
              <span data-lang="es">Necesitábamos cambiar la forma en que el producto explicaba decisiones complejas.</span>
            </h2>
            <div className={styles.bodyDescriptionBlock}>
              <p>
                <span data-lang="en">Reducing drop-off started long before the final button. It started when we stopped speaking like experts and started speaking like users.</span>
                <span data-lang="es">Reducir el abandono empezó mucho antes del último botón. Empezó cuando dejamos de hablar como expertos y empezamos a hablar como usuarios.</span>
              </p>
              <p>
                <span data-lang="en">All the evidence pointed to the same conclusion: the problem wasn&apos;t the number of steps or how long the process took, but how the key concepts were communicated.</span>
                <span data-lang="es">Todas las evidencias apuntaban a la misma conclusión: el problema no era la cantidad de pasos ni la duración del proceso, sino la forma en que se comunicaban los conceptos clave.</span>
              </p>
              <p>
                <span data-lang="en">We discovered that the journey had been designed from the perspective of the business and financial experts. But for someone creating their first portfolio, that language created uncertainty, doubt and drop-off.</span>
                <span data-lang="es">Descubrimos que el recorrido estaba diseñado desde la perspectiva del negocio y de los expertos financieros. Sin embargo, para una persona que estaba creando su primer portafolio, ese lenguaje generaba incertidumbre, dudas y abandono.</span>
              </p>
              <p>
                <span data-lang="en">I led this redesign together with Holdo&apos;s finance and AI specialist. The challenge wasn&apos;t just simplifying the UI — it was figuring out what information was regulatorily required, what was actually useful for the user, and what was only there out of inertia. That distinction wasn&apos;t something design could resolve on its own.</span>
                <span data-lang="es">Lideré este rediseño junto al experto en finanzas e IA de Holdo. El desafío no era solo simplificar la UI — era determinar qué información era regulatoriamente necesaria, qué era útil para el usuario y qué simplemente estaba ahí por inercia. Esa distinción no la podía resolver el diseño solo.</span>
              </p>
              <p className={styles.keyTakeawayText}>
                <span data-lang="en">We understood the challenge wasn&apos;t just about simplifying the interface. The real challenge was translating a process built for experts into an experience anyone could understand.</span>
                <span data-lang="es">Comprendimos que el reto no consistía únicamente en simplificar la interfaz. El verdadero reto era traducir un proceso pensado para expertos en una experiencia comprensible para cualquier persona.</span>
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
                <div className={styles.colBadge}>
                  <span data-lang="en">INITIAL PERSPECTIVE</span>
                  <span data-lang="es">PERSPECTIVA INICIAL</span>
                </div>
                <h3 className={styles.colTitle}>
                  <span data-lang="en">Designed for experts</span>
                  <span data-lang="es">Pensado para expertos</span>
                </h3>
                <ul className={styles.pointsList}>
                  {EXPERTS_ITEMS.map((item, idx) => (
                    <li key={idx} className={styles.pointItem}>
                      <span className={styles.bulletDash}>—</span>
                      <span>
                        <span data-lang="en">{item.en}</span>
                        <span data-lang="es">{item.es}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                {/* Ver flujo anterior */}
                <button
                  className={styles.prevFlowBtn}
                  onClick={openModal}
                  aria-label={lang === 'en' ? 'View the previous onboarding flow' : 'Ver el flujo anterior de onboarding'}
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
                  <span data-lang="en">View previous flow</span>
                  <span data-lang="es">Ver flujo anterior</span>
                </button>
              </div>

              {/* Middle Arrow Connector */}
              <div className={styles.connectorCol} aria-hidden="true">
                <span className={styles.transitionArrow}>↓</span>
              </div>

              {/* Right inside comparison: People */}
              <div className={styles.peopleCol}>
                <div className={styles.colBadgeActive}>
                  <span data-lang="en">NEW PERSPECTIVE</span>
                  <span data-lang="es">NUEVA PERSPECTIVA</span>
                </div>
                <h3 className={styles.colTitleActive}>
                  <span data-lang="en">Designed for people</span>
                  <span data-lang="es">Pensado para personas</span>
                </h3>
                <ul className={styles.pointsListActive}>
                  {PEOPLE_ITEMS.map((item, idx) => (
                    <li key={idx} className={styles.pointItemActive}>
                      <span className={styles.bulletDotActive}>•</span>
                      <span>
                        <span data-lang="en">{item.en}</span>
                        <span data-lang="es">{item.es}</span>
                      </span>
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
            <span data-lang="en">&ldquo;The product was speaking correctly. It was just speaking to the wrong person.&rdquo;</span>
            <span data-lang="es">&ldquo;El producto hablaba correctamente. Simplemente estaba hablándole a la persona equivocada.&rdquo;</span>
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
            <span data-lang="en">From that moment on, we stopped asking what information we needed to show and started asking what people needed to understand in order to keep moving forward.</span>
            <span data-lang="es">A partir de ese momento dejamos de preguntarnos qué información debíamos mostrar y empezamos a preguntarnos qué necesitaban entender las personas para seguir avanzando.</span>
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
            aria-label={lang === 'en' ? 'Previous onboarding flow' : 'Flujo anterior de onboarding'}
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
                <span className={styles.modalLabel}>{lang === 'en' ? 'PREVIOUS FLOW' : 'FLUJO ANTERIOR'}</span>
                <button
                  className={styles.modalClose}
                  onClick={closeModal}
                  aria-label={lang === 'en' ? 'Close modal' : 'Cerrar modal'}
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
                    aria-label={lang === 'en' ? 'Previous screen' : 'Pantalla anterior'}
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
                    aria-label={lang === 'en' ? 'Next screen' : 'Siguiente pantalla'}
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
                      {lang === 'en' ? s.labelEn : s.label}
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

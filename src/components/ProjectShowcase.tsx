'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './ProjectShowcase.module.css';

interface ProjectShowcaseProps {
  projectIndex: number;
  totalProjects: number;
  title: string;
  textPanels: string[][];
  textPanelHighlights?: string[][];
  steps?: string[];
  stepImages?: { src: string; alt: string }[];

}

function renderWithHighlights(text: string, highlights: string[] = []) {
  let parts: (string | React.ReactElement)[] = [text];
  highlights.forEach((phrase) => {
    parts = parts.flatMap((part, pi) => {
      if (typeof part !== 'string') return [part];
      const segments = part.split(phrase);
      return segments.reduce<(string | React.ReactElement)[]>((acc, seg, i) => {
        if (i < segments.length - 1) {
          acc.push(seg);
          acc.push(<mark key={`${phrase}-${pi}-${i}`} className={styles.highlight}>{phrase}</mark>);
        } else {
          acc.push(seg);
        }
        return acc;
      }, []);
    });
  });
  return <>{parts}</>;
}

import React from 'react';

export default function ProjectShowcase({
  projectIndex,
  totalProjects,
  title,
  textPanels,
  textPanelHighlights,
  steps = [],
  stepImages = [],
}: ProjectShowcaseProps) {
  const [activePanel, setActivePanel] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  const scrollToPanel = (panelIndex: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const scrollable = carousel.offsetHeight - window.innerHeight;
    const target = carousel.offsetTop + (panelIndex / textPanels.length) * scrollable;
    window.scrollTo({ top: target, behavior: 'smooth' });
  };

  const scrollToStep = (stepIndex: number) => {
    const section = stepsRef.current;
    if (!section) return;
    const scrollable = section.offsetHeight - window.innerHeight;
    const target = section.offsetTop + (stepIndex / steps.length) * scrollable;
    window.scrollTo({ top: target, behavior: 'smooth' });
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      // Carousel scroll → advance panel
      const cRect = carousel.getBoundingClientRect();
      const cScrollable = carousel.offsetHeight - window.innerHeight;
      if (cScrollable > 0) {
        const cProgress = Math.max(0, Math.min(1, -cRect.top / cScrollable));
        const panel = Math.min(textPanels.length - 1, Math.floor(cProgress * textPanels.length));
        setActivePanel(panel);
      }

      // Steps scroll → advance step
      const steps_section = stepsRef.current;
      if (steps_section) {
        const sRect = steps_section.getBoundingClientRect();
        const sScrollable = steps_section.offsetHeight - window.innerHeight;
        if (sScrollable > 0) {
          const sProgress = Math.max(0, Math.min(1, -sRect.top / sScrollable));
          const step = Math.min(steps.length - 1, Math.floor(sProgress * steps.length));
          setActiveStep(step);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [textPanels.length, steps.length]);

  return (
    <div className={styles.showcase}>
      {/* ── Text Carousel ── */}
      <div ref={carouselRef} className={styles.carouselOuter}>
      <div className={styles.carousel}>
        <div className={styles.container}>
          <span className={styles.label}>
            PROYECTO {projectIndex} DE {totalProjects}
          </span>
          <h2 className={styles.title}>{title}</h2>

          <div className={styles.panelsWrapper}>
            {textPanels.map((panel, i) => (
              <div
                key={i}
                className={`${styles.panel} ${
                  i === activePanel ? styles.panelActive : ''
                }`}
              >
                {panel.map((text, j) => (
                  <p key={j}>{renderWithHighlights(text, textPanelHighlights?.[i])}</p>
                ))}
              </div>
            ))}
          </div>

          <div className={styles.arrows}>
            {activePanel > 0 && (
              <button
                className={styles.arrowBtn}
                onClick={() => scrollToPanel(activePanel - 1)}
                aria-label="Panel anterior"
              >
                &#8249;
              </button>
            )}
            {activePanel < textPanels.length - 1 && (
              <button
                className={styles.arrowBtn}
                onClick={() => scrollToPanel(activePanel + 1)}
                aria-label="Siguiente panel"
              >
                &#8250;
              </button>
            )}
          </div>
        </div>
      </div>
      </div>

      {/* ── Scroll-driven Steps ── */}
      {stepImages.length > 0 ? (
        <div ref={stepsRef} className={styles.stepsOuter}>
          <div className={styles.stepsSticky}>
            <div className={styles.phoneCol}>
              <div className={styles.imageFrame}>
                {stepImages.map((img, i) => (
                  <Image
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    fill
                    className={`${styles.phoneScreen} ${
                      i === activeStep ? styles.phoneScreenActive : ''
                    }`}
                    sizes="(max-width: 768px) 80vw, 480px"
                    priority={i === 0}
                  />
                ))}
              </div>
            </div>

            <div className={styles.stepsCol}>
              <div className={styles.stepDots}>
                {steps.map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.stepDot} ${
                      i === activeStep ? styles.stepDotActive : ''
                    }`}
                    onClick={() => scrollToStep(i)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <div className={styles.stepTextArea}>
                {steps.map((text, i) => (
                  <p
                    key={i}
                    className={`${styles.stepText} ${
                      i === activeStep ? styles.stepTextActive : ''
                    }`}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : steps.length > 0 ? (
        <div ref={stepsRef} className={styles.stepsOuterNoImages}>
          <div className={styles.stepsStickyNoImages}>
            <div className={styles.stepDots}>
              {steps.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.stepDot} ${
                    i === activeStep ? styles.stepDotActive : ''
                  }`}
                  onClick={() => scrollToStep(i)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <div className={styles.stepTextArea}>
              {steps.map((text, i) => (
                <p
                  key={i}
                  className={`${styles.stepText} ${
                    i === activeStep ? styles.stepTextActive : ''
                  }`}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

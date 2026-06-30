'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import styles from './IntroModal.module.css';

let hasShownIntro = false;

export default function IntroModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(!hasShownIntro);
  const [isDismissed, setIsDismissed] = useState(false);
  const [blink, setBlink] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const closedRef = useRef(false);

  // Timer state references
  const remainingRef = useRef(8000);
  const startTimeRef = useRef(0);
  const autoCloseTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleClose = useCallback(() => {
    if (closedRef.current) return;
    closedRef.current = true;

    hasShownIntro = true;
    setIsDismissed(true);

    setTimeout(() => {
      setIsRendered(false);
    }, 950);
  }, []);

  const startTimer = useCallback((duration: number) => {
    startTimeRef.current = Date.now();
    autoCloseTimerRef.current = setTimeout(() => {
      handleClose();
    }, duration);
  }, [handleClose]);

  const pauseTimer = useCallback(() => {
    if (autoCloseTimerRef.current) {
      clearTimeout(autoCloseTimerRef.current);
      autoCloseTimerRef.current = null;
      const elapsed = Date.now() - startTimeRef.current;
      remainingRef.current = Math.max(0, remainingRef.current - elapsed);
    }
  }, []);

  const togglePause = useCallback(() => {
    if (isPaused) {
      setIsPaused(false);
      startTimer(remainingRef.current);
    } else {
      setIsPaused(true);
      pauseTimer();
    }
  }, [isPaused, startTimer, pauseTimer]);

  // Manage body scroll locking reactively
  useEffect(() => {
    if (hasShownIntro) return;
    if (isRendered && !isDismissed) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isRendered, isDismissed]);

  useEffect(() => {
    if (hasShownIntro) return;
    setIsRendered(true);

    const entranceTimer = setTimeout(() => setIsOpen(true), 100);

    // Initial start of the timer
    startTimer(8000);

    const blinkTimer = setInterval(() => {
      setBlink((b) => !b);
    }, 530);

    return () => {
      clearTimeout(entranceTimer);
      if (autoCloseTimerRef.current) {
        clearTimeout(autoCloseTimerRef.current);
      }
      clearInterval(blinkTimer);
    };
  }, [handleClose, startTimer]);

  if (!isRendered) return null;

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.overlayActive : ''} ${
        isDismissed ? styles.overlayDismissed : ''
      }`}
    >
      {/* Close X button */}
      <button onClick={handleClose} className={styles.closeButton} aria-label="Cerrar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div className={styles.modal}>
        {/* Profile Info Header */}
        <div className={styles.profileHeader}>
          <div className={styles.profileAvatarWrapper}>
            <img
              src="/profile.jpg"
              alt="Gonzalo Chiavassa"
              className={styles.profileAvatar}
            />
          </div>
          <h3 className={styles.profileName}>Gonzalo Chiavassa</h3>
          <span className={styles.profileRole}>Product Designer</span>
        </div>

        {/* Title: Hola, welcome */}
        <h1 className={styles.heading}>
          <span className={styles.hello}>Hola, </span>
          <span className={styles.welcome}>
            welcome
            <span className={styles.cursor} style={{ opacity: blink ? 1 : 0 }}>|</span>
          </span>
        </h1>

        <p className={styles.description}>
          Este portfolio está construido con diferentes herramientas de IA que fui testeando.
        </p>

        <span className={styles.toolsLabel}>Herramientas utilizadas</span>
        <div className={styles.toolsRow}>
          {[
            { name: 'Claude', logo: '/assets/home/tools/claude.jpg' },
            { name: 'Copilot', logo: '/assets/home/tools/copilot.jpg' },
            { name: 'Antigravity', logo: '/assets/home/tools/antigravity.jpg' },
            { name: 'Figma', logo: '/assets/home/tools/figma.jpg' },
          ].map((tool) => (
            <div key={tool.name} className={styles.toolWrapper} title={tool.name}>
              <img src={tool.logo} alt={tool.name} className={styles.toolLogo} />
            </div>
          ))}
        </div>

        <button onClick={handleClose} className={styles.ctaButton}>
          Ver portfolio
        </button>

        {/* Countdown Progress Bar + Pause button under the CTA button */}
        {!isDismissed && (
          <div className={styles.timerRow}>
            <div className={styles.progressContainer}>
              <div
                className={styles.progressBar}
                style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
              />
            </div>
            <button
              type="button"
              className={styles.pauseButton}
              onClick={togglePause}
              aria-label={isPaused ? 'Reanudar' : 'Pausar'}
            >
              {isPaused ? (
                /* Play Icon */
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              ) : (
                /* Pause Icon */
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './DisenarEnCodigoHero.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const CODE_LINES = [
  { indent: 0, tokens: [{ t: 'keyword', v: 'const ' }, { t: 'var', v: 'prototype' }, { t: 'op', v: ' = ' }, { t: 'fn', v: 'buildWithCode' }, { t: 'plain', v: '({' }] },
  { indent: 1, tokens: [{ t: 'key', v: 'designSystem' }, { t: 'op', v: ': ' }, { t: 'str', v: '"Mango DS"' }, { t: 'plain', v: ',' }] },
  { indent: 1, tokens: [{ t: 'key', v: 'interactive' }, { t: 'op', v: ': ' }, { t: 'bool', v: 'true' }, { t: 'plain', v: ',' }] },
  { indent: 1, tokens: [{ t: 'key', v: 'testedBy' }, { t: 'op', v: ': ' }, { t: 'str', v: '"Real Users"' }, { t: 'plain', v: ',' }] },
  { indent: 1, tokens: [{ t: 'key', v: 'responsive' }, { t: 'op', v: ': ' }, { t: 'bool', v: 'true' }] },
  { indent: 0, tokens: [{ t: 'plain', v: '});' }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ t: 'comment', v: '// → Prototipo funcional en URL real' }] },
  { indent: 0, tokens: [{ t: 'comment', v: '//    Sin maquetas estáticas.' }] },
];

function tokenColor(type: string) {
  switch (type) {
    case 'keyword': return '#569cd6';
    case 'var': return '#9cdcfe';
    case 'fn': return '#dcdcaa';
    case 'str': return '#ce9178';
    case 'bool': return '#569cd6';
    case 'key': return '#9cdcfe';
    case 'op': return '#d4d4d4';
    case 'comment': return '#6a9955';
    default: return '#d4d4d4';
  }
}

export default function DisenarEnCodigoHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        {/* Left Column: Headline + Body (same pattern as OnboardingHero / HoldoHero) */}
        <div className={styles.heroLeftCol}>
          <motion.span
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            Metodología de trabajo
          </motion.span>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
          >
            Diseñar producto directo en código.
          </motion.h1>

          <motion.div
            className={styles.subheadlineBlock}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: EASE }}
          >
            <p>
              Algunos lo llaman <em>&ldquo;Direct Design&rdquo;</em>, <em>&ldquo;AI First&rdquo;</em> o solo <em>&ldquo;Vibe coding&rdquo;</em>.
              Lo cierto es que mi proceso se aceleró. <strong>Ya no abro Figma para diseñar</strong>,
              todo está en el código y te cuento cómo lo estoy haciendo.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Code Editor (project-specific visual) */}
        <motion.div
          className={styles.heroRightCol}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.5, ease: EASE }}
        >
          <div className={styles.editorWindow}>
            {/* Title Bar */}
            <div className={styles.editorTitleBar}>
              <div className={styles.editorDots}>
                <span className={styles.dotRed} />
                <span className={styles.dotYellow} />
                <span className={styles.dotGreen} />
              </div>
              <span className={styles.editorFilename}>prototype.ts</span>
              <div />
            </div>

            {/* Code Area */}
            <div className={styles.editorBody}>
              <div className={styles.lineNumbers}>
                {CODE_LINES.map((_, i) => (
                  <span key={i}>{i + 1}</span>
                ))}
              </div>
              <div className={styles.codeArea}>
                {CODE_LINES.map((line, i) => (
                  <motion.div
                    key={i}
                    className={styles.codeLine}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + i * 0.08, ease: EASE }}
                  >
                    <span style={{ paddingLeft: `${line.indent * 1.5}rem` }}>
                      {line.tokens.map((token, j) => (
                        <span key={j} style={{ color: tokenColor(token.t) }}>{token.v}</span>
                      ))}
                      {i === CODE_LINES.length - 1 && (
                        <span className={styles.cursor}>|</span>
                      )}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Status Bar */}
            <div className={styles.editorStatusBar}>
              <span className={styles.statusDot} /> TypeScript · Mango Design System
              <span className={styles.statusRight}>✓ 0 errors</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator (same as OnboardingHero / HoldoHero) */}
      <div className={styles.scrollIndicator}>
        <span>SCROLL</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}

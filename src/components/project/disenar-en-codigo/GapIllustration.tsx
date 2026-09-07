'use client';

import React from 'react';
import { useLang } from '@/components/project/LangWrapper';
import styles from './GapIllustration.module.css';

export default function GapIllustration() {
  const { lang } = useLang();

  return (
    <div className={styles.container}>
      {/* Left Box: Figma */}
      <div className={styles.sideBox}>
        <div className={styles.boxHeader}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
            <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
            <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
            <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v7H8.5A3.5 3.5 0 0 1 5 19.5z" />
            <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
          </svg>
          <span>{lang === 'en' ? 'Figma (Static Mockup)' : 'Figma (Maqueta Estática)'}</span>
        </div>
        <div className={styles.figmaCanvas}>
          <div className={styles.figmaFrame}>
            <div className={styles.figmaHeader} />
            <div className={styles.figmaContent} />
            <div className={styles.figmaButton}>Frame 102 (click)</div>
          </div>
          <div className={styles.annotationTag}>
            <span>{lang === 'en' ? '💬 "On click, it should animate smoothly and open the modal"' : '💬 "Al hacer click, debería animarse suave y desplegar el modal"'}</span>
          </div>
        </div>
      </div>

      {/* Middle Gap */}
      <div className={styles.gapMiddle}>
        <div className={styles.dashedLine} />
        <div className={styles.gapBadge}>
          <span className={styles.warningIcon}>⚠️</span>
          <span>{lang === 'en' ? 'Handoff Gap' : 'Brecha de Handoff'}</span>
          <span className={styles.gapSubtext}>{lang === 'en' ? 'Lost context and real interaction' : 'Pérdida de contexto e interacción real'}</span>
        </div>
        <svg className={styles.arrowSvg} viewBox="0 0 100 20">
          <path d="M0 10 L90 10 M80 3 L95 10 L80 17" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className={styles.arrowPath} />
        </svg>
      </div>

      {/* Right Box: Code */}
      <div className={styles.sideBox}>
        <div className={styles.boxHeader}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6EC1E4" strokeWidth="2">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          <span>{lang === 'en' ? 'Engineering (Interpretation)' : 'Desarrollo (Interpretación)'}</span>
        </div>
        <div className={styles.codeEditorMock}>
          <div className={styles.codeLine}><code>const handleOpen = () =&gt; &#123;</code></div>
          <div className={styles.codeLineIndent}><code>{lang === 'en' ? '// TODO: What was the exact animation again?' : '// TODO: ¿Cómo era la animación exacta?'}</code></div>
          <div className={styles.codeLineIndent}><code>setIsOpen(true);</code></div>
          <div className={styles.codeLine}><code>&#125;;</code></div>
          <div className={styles.devQuestion}>
            <span>{lang === 'en' ? '❓ "Re-interpreting the spec in production"' : '❓ "Re-interpretando especificidad en producción"'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

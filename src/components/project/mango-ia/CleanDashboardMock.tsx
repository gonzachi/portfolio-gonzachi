'use client';

import React from 'react';
import { useLang } from '@/components/project/LangWrapper';
import styles from './MangoIAComponents.module.css';

export default function CleanDashboardMock() {
  const { lang } = useLang();
  const isEn = lang === 'en';

  return (
    <div className={styles.dashMockContainer}>
      {/* Top Header Bar */}
      <div className={styles.dashHeaderBar}>
        <div className={styles.dashBrandGroup}>
          <span className={styles.dashMangoBadge}>MANGO</span>
          <span className={styles.dashDivider}>/</span>
          <span className={styles.dashAppTitle}>{isEn ? 'AI Creative Platform' : 'Plataforma Creativa IA'}</span>
        </div>
        <div className={styles.dashMetaRight}>
          <span className={styles.dashStatusDot} />
          <span className={styles.dashStatusText}>{isEn ? 'In production · Internal access' : 'Producto en producción · Acceso interno'}</span>
        </div>
      </div>

      {/* Main Workspace Frame */}
      <div className={styles.dashBodyFrame}>
        {/* Left Sidebar: Kit Creativo */}
        <div className={styles.dashSidebar}>
          <span className={styles.sidebarSectionTitle}>{isEn ? 'Creative Kit' : 'Kit Creativo'}</span>

          <div className={styles.presetGroup}>
            <span className={styles.presetLabel}>{isEn ? '@saved prompts' : '@prompts guardados'}</span>
            <div className={styles.presetChip}>#oversized-tailoring</div>
            <div className={styles.presetChip}>#denim-vintage-wash</div>
            <div className={styles.presetChip}>#poplin-print-dress</div>
          </div>

          <div className={styles.presetGroup}>
            <span className={styles.presetLabel}>{isEn ? '@color palettes' : '@paletas de color'}</span>
            <div className={styles.colorPaletteRow}>
              <span style={{ backgroundColor: '#1A2E2B' }} />
              <span style={{ backgroundColor: '#D4C4B5' }} />
              <span style={{ backgroundColor: '#8B4A3E' }} />
              <span style={{ backgroundColor: '#F4F1EA' }} />
            </div>
          </div>

          <div className={styles.presetGroup}>
            <span className={styles.presetLabel}>{isEn ? '@departments' : '@departamentos'}</span>
            <span className={styles.deptActiveTag}>Woman · Denim · Tailoring</span>
          </div>
        </div>

        {/* Center Active Workspace */}
        <div className={styles.dashMainCanvas}>
          {/* Prompt Bar */}
          <div className={styles.dashPromptBar}>
            <span className={styles.promptIcon}>✨</span>
            <span className={styles.promptText}>
              {isEn
                ? '@mango-tailoring Structured virgin wool blazer, camel tone, neutral studio light --ar 4:5'
                : '@mango-tailoring Blazer estructurado lana virgen, tono camel, luz de estudio neutra --ar 4:5'}
            </span>
            <button className={styles.promptSubmitBtn}>{isEn ? 'Generate' : 'Generar'}</button>
          </div>

          {/* Canvas Preview Box */}
          <div className={styles.dashCanvasView}>
            <div className={styles.canvasArtPlaceholder}>
              <div className={styles.abstractGarmentLine1} />
              <div className={styles.abstractGarmentLine2} />
              <span className={styles.canvasTag}>{isEn ? 'Iteration v4.2 · Tailoring' : 'Iteración v4.2 · Sastrería'}</span>
            </div>

            {/* Quick Actions Bar */}
            <div className={styles.quickActionsBar}>
              <button className={styles.actionBtn}>{isEn ? 'Remove Background' : 'Quitar Fondo'}</button>
              <button className={styles.actionBtn}>{isEn ? 'Upscale 4K' : 'Escalar 4K'}</button>
              <button className={styles.actionBtn}>{isEn ? 'Variation @Denim' : 'Variación @Denim'}</button>
              <button className={styles.actionBtnPrimary}>{isEn ? 'Export to Moodboard' : 'Exportar a Moodboard'}</button>
            </div>
          </div>
        </div>

        {/* Right Panel: Iteration History */}
        <div className={styles.dashRightPanel}>
          <span className={styles.sidebarSectionTitle}>{isEn ? 'Iteration History' : 'Historial de Iteraciones'}</span>

          <div className={styles.historyThumbList}>
            <div className={styles.historyThumbItem}>
              <div className={styles.miniThumb} />
              <div className={styles.historyMeta}>
                <span>{isEn ? 'v4.2 — Final' : 'v4.2 — Final'}</span>
                <small>{isEn ? '2 min ago' : 'Hace 2 min'}</small>
              </div>
            </div>
            <div className={styles.historyThumbItem}>
              <div className={styles.miniThumb} />
              <div className={styles.historyMeta}>
                <span>{isEn ? 'v4.1 — Lapel tweak' : 'v4.1 — Ajuste solapa'}</span>
                <small>{isEn ? '12 min ago' : 'Hace 12 min'}</small>
              </div>
            </div>
            <div className={styles.historyThumbItem}>
              <div className={styles.miniThumb} />
              <div className={styles.historyMeta}>
                <span>{isEn ? 'v4.0 — Initial sketch' : 'v4.0 — Boceto inicial'}</span>
                <small>{isEn ? '35 min ago' : 'Hace 35 min'}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

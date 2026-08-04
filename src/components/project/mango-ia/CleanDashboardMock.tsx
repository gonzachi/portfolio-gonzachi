'use client';

import React from 'react';
import styles from './MangoIAComponents.module.css';

export default function CleanDashboardMock() {
  return (
    <div className={styles.dashMockContainer}>
      {/* Top Header Bar */}
      <div className={styles.dashHeaderBar}>
        <div className={styles.dashBrandGroup}>
          <span className={styles.dashMangoBadge}>MANGO</span>
          <span className={styles.dashDivider}>/</span>
          <span className={styles.dashAppTitle}>Plataforma Creativa IA</span>
        </div>
        <div className={styles.dashMetaRight}>
          <span className={styles.dashStatusDot} />
          <span className={styles.dashStatusText}>Producto en producción · Acceso interno</span>
        </div>
      </div>

      {/* Main Workspace Frame */}
      <div className={styles.dashBodyFrame}>
        {/* Left Sidebar: Kit Creativo */}
        <div className={styles.dashSidebar}>
          <span className={styles.sidebarSectionTitle}>Kit Creativo</span>
          
          <div className={styles.presetGroup}>
            <span className={styles.presetLabel}>@prompts guardados</span>
            <div className={styles.presetChip}>#sastrería-oversized</div>
            <div className={styles.presetChip}>#denim-vintage-wash</div>
            <div className={styles.presetChip}>#vestido-popelín-estampado</div>
          </div>

          <div className={styles.presetGroup}>
            <span className={styles.presetLabel}>@paletas de color</span>
            <div className={styles.colorPaletteRow}>
              <span style={{ backgroundColor: '#1A2E2B' }} />
              <span style={{ backgroundColor: '#D4C4B5' }} />
              <span style={{ backgroundColor: '#8B4A3E' }} />
              <span style={{ backgroundColor: '#F4F1EA' }} />
            </div>
          </div>

          <div className={styles.presetGroup}>
            <span className={styles.presetLabel}>@departamentos</span>
            <span className={styles.deptActiveTag}>Woman · Denim · Tailoring</span>
          </div>
        </div>

        {/* Center Active Workspace */}
        <div className={styles.dashMainCanvas}>
          {/* Prompt Bar */}
          <div className={styles.dashPromptBar}>
            <span className={styles.promptIcon}>✨</span>
            <span className={styles.promptText}>
              @mango-tailoring Blazer estructurado lana virgen, tono camel, luz de estudio neutra --ar 4:5
            </span>
            <button className={styles.promptSubmitBtn}>Generar</button>
          </div>

          {/* Canvas Preview Box */}
          <div className={styles.dashCanvasView}>
            <div className={styles.canvasArtPlaceholder}>
              <div className={styles.abstractGarmentLine1} />
              <div className={styles.abstractGarmentLine2} />
              <span className={styles.canvasTag}>Iteración v4.2 · Sastrería</span>
            </div>
            
            {/* Quick Actions Bar */}
            <div className={styles.quickActionsBar}>
              <button className={styles.actionBtn}>Quitar Fondo</button>
              <button className={styles.actionBtn}>Escalar 4K</button>
              <button className={styles.actionBtn}>Variación @Denim</button>
              <button className={styles.actionBtnPrimary}>Exportar a Moodboard</button>
            </div>
          </div>
        </div>

        {/* Right Panel: Iteration History */}
        <div className={styles.dashRightPanel}>
          <span className={styles.sidebarSectionTitle}>Historial de Iteraciones</span>
          
          <div className={styles.historyThumbList}>
            <div className={styles.historyThumbItem}>
              <div className={styles.miniThumb} />
              <div className={styles.historyMeta}>
                <span>v4.2 — Final</span>
                <small>Hace 2 min</small>
              </div>
            </div>
            <div className={styles.historyThumbItem}>
              <div className={styles.miniThumb} />
              <div className={styles.historyMeta}>
                <span>v4.1 — Ajuste solapa</span>
                <small>Hace 12 min</small>
              </div>
            </div>
            <div className={styles.historyThumbItem}>
              <div className={styles.miniThumb} />
              <div className={styles.historyMeta}>
                <span>v4.0 — Boceto inicial</span>
                <small>Hace 35 min</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

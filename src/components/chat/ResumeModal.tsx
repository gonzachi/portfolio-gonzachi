'use client';

import { useEffect } from 'react';
import { resumePath } from '@/data/chat';
import { useLang, type Lang } from '@/components/project/LangWrapper';
import styles from './ResumeModal.module.css';

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

const COPY: Record<Lang, { ariaPreview: string; title: string; download: string; close: string }> = {
  en: { ariaPreview: 'Resume preview', title: 'Resume', download: 'Download', close: 'Close' },
  es: { ariaPreview: 'Vista previa del CV', title: 'CV', download: 'Descargar', close: 'Cerrar' },
};

export default function ResumeModal({ open, onClose }: ResumeModalProps) {
  const { lang } = useLang();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.content}
        role="dialog"
        aria-modal="true"
        aria-label={COPY[lang].ariaPreview}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <span className={styles.title}>{COPY[lang].title}</span>
          <div className={styles.actions}>
            <a href={resumePath} download className={styles.download}>
              {COPY[lang].download}
            </a>
            <button type="button" className={styles.close} onClick={onClose} aria-label={COPY[lang].close}>
              ×
            </button>
          </div>
        </div>
        <iframe src={resumePath} className={styles.frame} title="Gonzalo Chiavassa resume" />
      </div>
    </div>
  );
}

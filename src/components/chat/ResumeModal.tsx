'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { resumePath } from '@/data/chat';
import { useLang, type Lang } from '@/components/project/LangWrapper';
import styles from './ResumeModal.module.css';

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

const COPY: Record<Lang, { ariaPreview: string; title: string; download: string; open: string; close: string; fallback: string }> = {
  en: {
    ariaPreview: 'Resume preview',
    title: 'Resume',
    download: 'Download',
    open: 'Open in new tab',
    close: 'Close',
    fallback: "Your browser can't preview PDFs here.",
  },
  es: {
    ariaPreview: 'Vista previa del CV',
    title: 'CV',
    download: 'Descargar',
    open: 'Abrir en pestaña nueva',
    close: 'Cerrar',
    fallback: 'Tu navegador no puede previsualizar PDFs acá.',
  },
};

export default function ResumeModal({ open, onClose }: ResumeModalProps) {
  const { lang } = useLang();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  const copy = COPY[lang];
  // Portaled to <body>: ancestors with backdrop-filter (the site header) would
  // otherwise become the containing block for position: fixed and clip the modal.
  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.content}
        role="dialog"
        aria-modal="true"
        aria-label={copy.ariaPreview}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <span className={styles.title}>{copy.title}</span>
          <div className={styles.actions}>
            <a href={resumePath} target="_blank" rel="noopener noreferrer" className={styles.secondary}>
              {copy.open}
            </a>
            <a href={resumePath} download className={styles.download}>
              {copy.download}
            </a>
            <button ref={closeRef} type="button" className={styles.close} onClick={onClose} aria-label={copy.close}>
              ×
            </button>
          </div>
        </div>
        <div className={styles.body}>
          <object
            data={`${resumePath}#toolbar=0&navpanes=0&view=FitH`}
            type="application/pdf"
            className={styles.frame}
            aria-label="Gonzalo Chiavassa resume"
          >
            <div className={styles.fallback}>
              <p>{copy.fallback}</p>
              <a href={resumePath} download className={styles.download}>
                {copy.download}
              </a>
            </div>
          </object>
        </div>
      </div>
    </div>,
    document.body
  );
}

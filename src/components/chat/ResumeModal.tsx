'use client';

import { useEffect } from 'react';
import { resumePath } from '@/data/chat';
import styles from './ResumeModal.module.css';

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ResumeModal({ open, onClose }: ResumeModalProps) {
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
        aria-label="Resume preview"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <span className={styles.title}>Resume</span>
          <div className={styles.actions}>
            <a href={resumePath} download className={styles.download}>
              Download
            </a>
            <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
              ×
            </button>
          </div>
        </div>
        <iframe src={resumePath} className={styles.frame} title="Gonzalo Chiavassa resume" />
      </div>
    </div>
  );
}

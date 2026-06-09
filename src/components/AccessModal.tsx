'use client';

import { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './AccessModal.module.css';

interface AccessModalProps {
  /** The project id to authenticate against */
  projectId: string;
  /** Display title shown inside the modal */
  projectTitle: string;
  /** Optional subtitle (company, type, etc.) */
  projectSubtitle?: string;
  /** Whether the modal is open */
  open: boolean;
  /** Callback to close the modal */
  onClose: () => void;
}

export default function AccessModal({
  projectId,
  projectTitle,
  projectSubtitle,
  open,
  onClose,
}: AccessModalProps) {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (open) {
      setPassword('');
      setError('');
      // Small delay to let the CSS transition start before focusing
      const t = setTimeout(() => inputRef.current?.focus(), 120);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !loading) onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, loading, onClose]);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      // Only close if clicking the overlay itself, not the container
      if (e.target === e.currentTarget && !loading) onClose();
    },
    [loading, onClose]
  );

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/project-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId, password }),
      });

      if (res.ok) {
        // Cookie is set — navigate directly to the project
        onClose();
        router.push(`/project/${projectId}`);
        return;
      }

      const data = await res.json().catch(() => ({}));
      setError(data.error || 'Contraseña incorrecta');
    } catch {
      setError('No se pudo verificar el acceso. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
      setPassword('');
    }
  }

  return (
    <div
      className={`${styles.overlay} ${open ? styles.open : ''}`}
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
      aria-label={`Acceso restringido — ${projectTitle}`}
    >
      <div className={styles.container}>
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Cerrar"
          disabled={loading}
          type="button"
        >
          ✕
        </button>

        <p className={styles.label}>Acceso restringido</p>
        <h2 className={styles.title}>{projectTitle}</h2>
        {projectSubtitle && <p className={styles.subtitle}>{projectSubtitle}</p>}

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.fieldLabel} htmlFor="modal-project-password">
            Contraseña
          </label>
          <input
            ref={inputRef}
            id="modal-project-password"
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            disabled={loading}
            placeholder="Introduce la contraseña"
          />
          {error && (
            <p className={styles.error} role="alert">
              {error}
            </p>
          )}
          <button
            className={styles.submitBtn}
            type="submit"
            disabled={loading || !password}
          >
            {loading ? 'Verificando…' : 'Acceder al caso'}
          </button>
        </form>

        <p className={styles.hint}>
          Este caso contiene información confidencial. Si no tienes la
          contraseña, contacta conmigo para solicitar acceso.
        </p>
      </div>
    </div>
  );
}

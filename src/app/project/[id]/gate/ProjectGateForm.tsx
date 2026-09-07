'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLang } from '@/components/project/LangWrapper';
import styles from './page.module.css';

// The API returns fixed Spanish error strings — map the known ones to an
// English translation client-side rather than changing the API contract.
const ERROR_TRANSLATIONS: Record<string, string> = {
  'Contraseña incorrecta': 'Incorrect password',
  'Demasiados intentos. Inténtalo de nuevo más tarde.': 'Too many attempts. Please try again later.',
};

export default function ProjectGateForm({ projectId }: { projectId: string }) {
  const router = useRouter();
  const { lang } = useLang();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const localizedError = lang === 'en' ? (ERROR_TRANSLATIONS[error] ?? error) : error;

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
        router.push(`/project/${projectId}`);
        router.refresh();
        return;
      }

      const data = await res.json().catch(() => ({}));
      setError(data.error || 'Contraseña incorrecta');
    } catch {
      setError(lang === 'en' ? "Couldn't verify access. Please try again." : 'No se pudo verificar el acceso. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
      setPassword('');
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.fieldLabel} htmlFor="project-password">
        {lang === 'en' ? 'Password' : 'Contraseña'}
      </label>
      <input
        id="project-password"
        className={styles.input}
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
        required
        disabled={loading}
        placeholder={lang === 'en' ? 'Enter the password' : 'Introduce la contraseña'}
      />
      {error && <p className={styles.error} role="alert">{localizedError}</p>}
      <button className={styles.submitBtn} type="submit" disabled={loading || !password}>
        {loading ? (lang === 'en' ? 'Verifying…' : 'Verificando…') : (lang === 'en' ? 'Access the case study' : 'Acceder al caso')}
      </button>
    </form>
  );
}

'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function ProjectGateForm({ projectId }: { projectId: string }) {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
      setError('No se pudo verificar el acceso. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
      setPassword('');
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.fieldLabel} htmlFor="project-password">
        Contraseña
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
        placeholder="Introduce la contraseña"
      />
      {error && <p className={styles.error} role="alert">{error}</p>}
      <button className={styles.submitBtn} type="submit" disabled={loading || !password}>
        {loading ? 'Verificando…' : 'Acceder al caso'}
      </button>
    </form>
  );
}

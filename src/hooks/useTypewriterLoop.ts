'use client';

import { useEffect, useState } from 'react';

interface Options {
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
}

/** Types each string in `items` forward, pauses, deletes it, then moves to the next — forever. */
export function useTypewriterLoop(items: string[], options: Options = {}) {
  const { typeSpeed = 45, deleteSpeed = 25, pause = 1400 } = options;
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const t = setTimeout(() => setText(items[0] ?? ''), 0);
      return () => clearTimeout(t);
    }

    const current = items[index % items.length] ?? '';

    if (!deleting) {
      if (text.length < current.length) {
        const t = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (text.length > 0) {
      const t = setTimeout(() => setText(text.slice(0, -1)), deleteSpeed);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setIndex((i) => (i + 1) % items.length);
      setDeleting(false);
    }, 0);
    return () => clearTimeout(t);
  }, [text, deleting, index, items, typeSpeed, deleteSpeed, pause]);

  return text;
}

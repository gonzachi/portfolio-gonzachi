'use client';

import { useEffect, useState } from 'react';

/** Reveals `text` progressively, character by character. Resets whenever `text` changes. */
export function useTypewriter(text: string, speed = 16) {
  const [output, setOutput] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      const timeout = setTimeout(() => {
        setOutput(text);
        setDone(true);
      }, 0);
      return () => clearTimeout(timeout);
    }

    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setOutput(text.slice(0, index));
      if (index >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return { output, done };
}

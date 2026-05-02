'use client';

import { useEffect } from 'react';

export default function ScrollRevealInit() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    // Observe all .reveal elements
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

    // Re-observe on DOM changes (for dynamic content)
    const mo = new MutationObserver(() => {
      document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      obs.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}

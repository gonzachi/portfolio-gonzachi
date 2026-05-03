'use client';

import { useEffect, useRef } from 'react';

export default function CursorBlob() {
  const blobRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const smooth = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    pos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    smooth.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const tick = () => {
      smooth.current.x = lerp(smooth.current.x, pos.current.x, 0.07);
      smooth.current.y = lerp(smooth.current.y, pos.current.y, 0.07);
      if (blobRef.current) {
        blobRef.current.style.transform = `translate(${smooth.current.x - 380}px, ${smooth.current.y - 380}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      <div
        ref={blobRef}
        className="cursor-blob"
        style={{
          position: 'absolute',
          width: 760,
          height: 760,
          borderRadius: '50%',
          willChange: 'transform',
        }}
      />
    </div>
  );
}

'use client';

import React, { useEffect, useRef } from 'react';
import { useLang } from '@/components/project/LangWrapper';
import styles from './NodeParticleCanvas.module.css';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  type: 'design' | 'code';
}

export default function NodeParticleCanvas() {
  const { lang } = useLang();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 700);
    let height = (canvas.height = 240);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 240;
    };

    window.addEventListener('resize', handleResize);

    const nodes: Node[] = [];
    const count = 28;

    for (let i = 0; i < count; i++) {
      const isDesign = i % 2 === 0;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 2,
        color: isDesign ? '#A67C52' : '#5B7A99',
        type: isDesign ? 'design' : 'code',
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Background is always dark and flat, regardless of site theme
      ctx.fillStyle = '#14161B';
      ctx.fillRect(0, 0, width, height);

      // Update node positions and draw lines
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.35;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);

            if (node.type !== other.type) {
              // Connecting design & code
              const lineGrad = ctx.createLinearGradient(node.x, node.y, other.x, other.y);
              lineGrad.addColorStop(0, node.color);
              lineGrad.addColorStop(1, other.color);
              ctx.strokeStyle = lineGrad;
            } else {
              ctx.strokeStyle = node.color;
            }

            ctx.globalAlpha = alpha;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      // Draw node points
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.overlay}>
        <div className={styles.legendItem}>
          <span className={styles.dotDesign} />
          <span>{lang === 'en' ? 'Design Thinking' : 'Pensamiento de Diseño'}</span>
        </div>
        <div className={styles.connectionLabel}>{lang === 'en' ? '⚡ AI assisting the convergence' : '⚡ IA asistiendo la convergencia'}</div>
        <div className={styles.legendItem}>
          <span className={styles.dotCode} />
          <span>{lang === 'en' ? 'Code Execution' : 'Ejecución en Código'}</span>
        </div>
      </div>
    </div>
  );
}

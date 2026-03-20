'use client';

import { useEffect, useRef } from 'react';

export default function HeroAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const cv = canvasRef.current;
        if (!cv) return;
        const ctx = cv.getContext('2d');
        if (!ctx) return;

        cv.width = 500;
        cv.height = 500;
        const S = 500, CX = 250, CY = 250;
        const TOTAL = 15000;
        let t0: number | null = null;
        let animId: number;

        function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }
        function clamp(t: number) { return Math.max(0, Math.min(1, t)); }
        function ph(t: number, a: number, b: number) { return clamp((t - a) / (b - a)); }
        function easeInOut(t: number) { return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; }
        function easeOut(t: number) { return 1 - Math.pow(1 - t, 3); }
        function rnd(a: number, b: number) { return a + Math.random() * (b - a); }

        const FINAL = [
            { x: 145, y: CY, r: 14 },
            { x: 215, y: CY, r: 11 },
            { x: 285, y: CY, r: 13 },
            { x: 355, y: CY, r: 15 },
        ];

        const NODE_COLOR = '#6EC1E4';

        const particles: {
            ni: number; x: number; y: number; sx: number; sy: number;
            vx: number; vy: number; r: number; delay: number;
        }[] = [];

        FINAL.forEach((fd, ni) => {
            const count = 9;
            for (let i = 0; i < count; i++) {
                const ang = rnd(0, Math.PI * 2);
                const d = rnd(55, 190);
                particles.push({
                    ni,
                    x: CX + Math.cos(ang) * d,
                    y: CY + Math.sin(ang) * d,
                    sx: CX + Math.cos(ang) * d,
                    sy: CY + Math.sin(ang) * d,
                    vx: rnd(-0.22, 0.22),
                    vy: rnd(-0.22, 0.22),
                    r: rnd(1.8, fd.r * 0.7),
                    delay: rnd(0, 0.12),
                });
            }
        });

        const PA = 0, PB = 0.18, PC = 0.58, PD = 0.74, PE = 0.87, PF = 1.0;

        function render(ts: number) {
            if (!t0) t0 = ts;
            const t = ((ts - t0) % TOTAL) / TOTAL;

            ctx!.fillStyle = '#181A1F';
            ctx!.fillRect(0, 0, S, S);

            const lineA = t < PD ? 0 : t < PE ? easeOut(ph(t, PD, PE)) : t < PF ? 1 - easeInOut(ph(t, PE, PF)) : 0;
            if (lineA > 0.01) {
                ctx!.save();
                ctx!.globalAlpha = lineA * 0.3;
                ctx!.strokeStyle = NODE_COLOR;
                ctx!.lineWidth = 0.8;
                ctx!.beginPath();
                ctx!.moveTo(FINAL[0].x, CY);
                ctx!.lineTo(FINAL[3].x, CY);
                ctx!.stroke();
                ctx!.restore();
            }

            FINAL.forEach((fd, ni) => {
                const group = particles.filter(p => p.ni === ni);

                if (t < PB) {
                    group.forEach(p => {
                        p.x += p.vx; p.y += p.vy;
                        if (p.x < 15 || p.x > 485) p.vx *= -1;
                        if (p.y < 15 || p.y > 485) p.vy *= -1;
                        ctx!.save();
                        ctx!.globalAlpha = lerp(0.2, 0.42, ph(t, PA, PB));
                        ctx!.fillStyle = '#c8d4e8';
                        ctx!.beginPath();
                        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                        ctx!.fill();
                        ctx!.restore();
                    });
                } else if (t < PC) {
                    group.forEach(p => {
                        const d = Math.max(0, ph(t, PB + p.delay, PC));
                        const lt = easeInOut(d);
                        const x = lerp(p.x, fd.x, lt);
                        const y = lerp(p.y, fd.y, lt);
                        ctx!.save();
                        ctx!.globalAlpha = lerp(0.42, 0.7, lt);
                        ctx!.fillStyle = '#c8d4e8';
                        ctx!.beginPath();
                        ctx!.arc(x, y, p.r, 0, Math.PI * 2);
                        ctx!.fill();
                        ctx!.restore();
                    });
                } else if (t < PD) {
                    const lt = easeOut(ph(t, PC, PD));
                    group.forEach(p => {
                        ctx!.save();
                        ctx!.globalAlpha = lerp(0.7, 0, lt);
                        ctx!.fillStyle = '#c8d4e8';
                        ctx!.beginPath();
                        ctx!.arc(fd.x, fd.y, p.r, 0, Math.PI * 2);
                        ctx!.fill();
                        ctx!.restore();
                    });
                    const pulse = Math.sin(ts / 900 + ni * 1.5) * 0.5 + 0.5;
                    ctx!.save();
                    ctx!.globalAlpha = lt * 0.1 * (0.5 + pulse * 0.5);
                    ctx!.beginPath();
                    ctx!.arc(fd.x, fd.y, fd.r + 5 + pulse * 3, 0, Math.PI * 2);
                    ctx!.fillStyle = NODE_COLOR;
                    ctx!.fill();
                    ctx!.restore();
                    ctx!.save();
                    ctx!.globalAlpha = lt;
                    ctx!.fillStyle = NODE_COLOR;
                    ctx!.beginPath();
                    ctx!.arc(fd.x, fd.y, fd.r, 0, Math.PI * 2);
                    ctx!.fill();
                    ctx!.restore();
                } else {
                    const pulse = Math.sin(ts / 950 + ni * 1.6) * 0.5 + 0.5;
                    const fa = t < PE ? 1 : 1 - easeInOut(ph(t, PE, PF)) * 0.15;
                    ctx!.save();
                    ctx!.globalAlpha = fa * 0.09 * (0.4 + pulse * 0.6);
                    ctx!.beginPath();
                    ctx!.arc(fd.x, fd.y, fd.r + 5 + pulse * 4, 0, Math.PI * 2);
                    ctx!.fillStyle = NODE_COLOR;
                    ctx!.fill();
                    ctx!.restore();
                    ctx!.save();
                    ctx!.globalAlpha = fa;
                    ctx!.fillStyle = NODE_COLOR;
                    ctx!.beginPath();
                    ctx!.arc(fd.x, fd.y, fd.r, 0, Math.PI * 2);
                    ctx!.fill();
                    ctx!.restore();
                }
            });

            animId = requestAnimationFrame(render);
        }
        animId = requestAnimationFrame(render);

        return () => cancelAnimationFrame(animId);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ width: '100%', height: '100%', display: 'block' }}
        />
    );
}

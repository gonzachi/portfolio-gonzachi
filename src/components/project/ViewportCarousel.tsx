'use client';

import { useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import styles from './ViewportCarousel.module.css';

interface Slide {
    src: string;
    alt: string;
}

interface ViewportCarouselProps {
    label: string;
    urlLabel: string;
    slides: Slide[];
    height?: number;
}

export default function ViewportCarousel({
    label,
    urlLabel,
    slides,
    height = 720,
}: ViewportCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [current, setCurrent] = useState(0);

    const goTo = useCallback((index: number) => {
        const el = scrollRef.current;
        if (!el) return;
        const target = Math.max(0, Math.min(index, slides.length - 1));
        el.scrollTo({ left: el.clientWidth * target, behavior: 'smooth' });
        setCurrent(target);
    }, [slides.length]);

    const prev = () => goTo(current - 1);
    const next = () => goTo(current + 1);

    return (
        <div className={styles.viewportSection}>
            <div className={styles.viewportLabel}>{label}</div>
            <div className={styles.viewportBrowser}>
                {/* Browser bar */}
                <div className={styles.viewportBar}>
                    <div className={styles.viewportDots}>
                        <span /><span /><span />
                    </div>
                    <div className={styles.viewportUrl}>{urlLabel}</div>
                    {/* Nav group: arrows + counter */}
                    <div className={styles.barNav}>
                        <button
                            className={styles.barArrow}
                            onClick={prev}
                            disabled={current === 0}
                            aria-label="Imagen anterior"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </button>
                        <span className={styles.slideCounter}>{current + 1} / {slides.length}</span>
                        <button
                            className={styles.barArrow}
                            onClick={next}
                            disabled={current === slides.length - 1}
                            aria-label="Imagen siguiente"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Scroll area */}
                <div className={styles.carouselWrapper} style={{ height }}>
                    <div className={styles.scrollH} ref={scrollRef}>
                        {slides.map((img, i) => (
                            <div key={i} className={styles.scrollHItem}>
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={1200}
                                    height={900}
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                    priority={false}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots */}
                <div className={styles.dots}>
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                            onClick={() => goTo(i)}
                            aria-label={`Ir a imagen ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

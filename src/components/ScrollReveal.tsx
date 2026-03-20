"use client";

import { useEffect, useRef, useState, ReactNode } from 'react';
import styles from './ScrollReveal.module.css';

interface ScrollRevealProps {
    children: ReactNode;
    direction?: 'up' | 'none'; // where it slides from
    delay?: number; // delay in seconds (e.g. 0.2)
    threshold?: number; // how much needs to be visible (0 to 1)
    className?: string; // extra classes
}

export default function ScrollReveal({ 
    children, 
    direction = 'up', 
    delay = 0,
    threshold = 0.1,
    className = ''
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(el); // only animate once
            }
        }, { threshold });

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    const baseClass = direction === 'up' ? styles.hiddenUp : styles.hiddenNone;
    const activeClass = isVisible ? styles.visible : '';

    return (
        <div 
            ref={ref} 
            className={`${styles.wrapper} ${baseClass} ${activeClass} ${className}`}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
}

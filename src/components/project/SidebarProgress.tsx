'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './SidebarProgress.module.css';

interface SidebarProgressProps {
    sections: { id: string; label: string }[];
}

export default function SidebarProgress({ sections }: SidebarProgressProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const observersRef = useRef<IntersectionObserver[]>([]);

    useEffect(() => {
        // Clean up previous observers
        observersRef.current.forEach((obs) => obs.disconnect());
        observersRef.current = [];

        const sectionEls = sections
            .map(({ id }) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        if (sectionEls.length === 0) return;

        // Track which sections are intersecting
        const visible = new Array(sectionEls.length).fill(false);

        sectionEls.forEach((el, index) => {
            const obs = new IntersectionObserver(
                ([entry]) => {
                    visible[index] = entry.isIntersecting;
                    // Set active to the first currently visible section
                    const first = visible.findIndex(Boolean);
                    if (first !== -1) setActiveIndex(first);
                },
                { threshold: 0.2, rootMargin: '-10% 0px -10% 0px' }
            );
            obs.observe(el);
            observersRef.current.push(obs);
        });

        return () => {
            observersRef.current.forEach((obs) => obs.disconnect());
        };
    }, [sections]);

    // Only render if page has those sections
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div className={styles.sidebar} aria-hidden="true">
            {sections.map((section, i) => (
                <button
                    key={section.id}
                    className={`${styles.line} ${i === activeIndex ? styles.active : ''}`}
                    onClick={() => {
                        document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    title={section.label}
                />
            ))}
        </div>
    );
}

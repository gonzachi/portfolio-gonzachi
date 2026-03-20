'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ScrollSectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    delay?: number;
}

export default function ScrollSection({ children, className = '', id, delay = 0 }: ScrollSectionProps) {
    const { ref, isVisible } = useScrollReveal<HTMLElement>();

    return (
        <section
            ref={ref}
            id={id}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
            }}
        >
            {children}
        </section>
    );
}

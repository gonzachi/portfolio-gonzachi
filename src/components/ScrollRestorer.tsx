'use client';

import { useEffect } from 'react';

/**
 * Restores the portfolio scroll position saved before navigating to a project.
 * Reads from sessionStorage and scrolls to the saved Y position on mount.
 */
export default function ScrollRestorer() {
    useEffect(() => {
        const savedY = sessionStorage.getItem('portfolioScrollY');
        if (savedY) {
            // Small timeout ensures the page is fully rendered before scrolling
            const y = parseInt(savedY, 10);
            setTimeout(() => {
                window.scrollTo({ top: y, behavior: 'instant' });
            }, 50);
            sessionStorage.removeItem('portfolioScrollY');
        }
    }, []);

    return null;
}

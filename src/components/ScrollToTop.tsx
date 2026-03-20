'use client';

import { useEffect } from 'react';

/**
 * Forces the page to scroll to the top on mount.
 * Used on project pages to ensure they always start at the top.
 */
export default function ScrollToTop() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    return null;
}

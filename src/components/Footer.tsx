'use client';

import { useLang } from '@/components/project/LangWrapper';
import styles from './Footer.module.css';

export default function Footer() {
    const { lang } = useLang();

    return (
        <footer className={styles.footer}>
            <div className={styles.credit}>
                © {new Date().getFullYear()} Gonzalo Chiavassa —{' '}
                {lang === 'en' ? 'Designed and built with Claude Code.' : 'Diseñado y desarrollado con Claude Code.'}
            </div>
        </footer>
    );
}

'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
    const [lang, setLang] = useState<'ES' | 'EN'>('ES');

    const toggleLang = () => {
        setLang(prev => (prev === 'ES' ? 'EN' : 'ES'));
        // TODO: hook into next-intl when i18n is configured (GON-12)
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a href="/" className={styles.logo}>
                    <Image
                        src="/assets/home/logo_gonzachi.png"
                        alt="Gonzachi Logo"
                        width={180}
                        height={45}
                        className={styles.logoImage}
                        priority
                    />
                </a>

                <button
                    className={styles.langToggle}
                    onClick={toggleLang}
                    aria-label="Cambiar idioma"
                >
                    <span className={lang === 'ES' ? styles.langActive : styles.langInactive}>ES</span>
                    <span className={styles.langDivider}>/</span>
                    <span className={lang === 'EN' ? styles.langActive : styles.langInactive}>EN</span>
                </button>
            </div>
        </header>
    );
}

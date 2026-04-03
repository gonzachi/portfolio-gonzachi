import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a href="/" className={styles.logo}>
                    <span className={styles.logoText}>Gonzalo Chiavassa <span className={styles.logoSub}>| Portfolio</span></span>
                </a>
            </div>
        </header>
    );
}

import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.credit}>
                © {new Date().getFullYear()} Gonzalo Chiavassa — Diseñado y desarrollado con Claude Code.
            </div>
        </footer>
    );
}

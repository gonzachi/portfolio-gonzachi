import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <span className={styles.logoText}>Gonzalo Chiavassa</span>
                </div>
                <p className={styles.credit}>
                    Portfolio creado íntegramente con IA en{' '}
                    <a href="https://antigravity.ai" target="_blank" rel="noopener noreferrer">Antigravity</a>
                    . Desplegado en{' '}
                    <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</a>
                    .
                </p>
                <p className={styles.copyright}>
                    Todos los derechos reservados © {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
}

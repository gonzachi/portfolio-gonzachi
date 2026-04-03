import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.credit}>
                Portfolio creado íntegramente con{' '}
                <span className={styles.aiHighlight}>Inteligencia Artificial</span>
                {' '}en{' '}
                <a href="https://antigravity.ai" target="_blank" rel="noopener noreferrer">Antigravity</a>
                {' '}· Desplegado en{' '}
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</a>
                {' '}· © {new Date().getFullYear()} · Todos los derechos reservados
            </p>
        </footer>
    );
}

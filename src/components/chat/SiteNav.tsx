import Link from 'next/link';
import styles from './SiteNav.module.css';

export default function SiteNav() {
  return (
    <header className={styles.nav}>
      <Link href="/" className={styles.brand}>
        Gonzalo Chiavassa
      </Link>
      <nav className={styles.links}>
        <Link href="/perfil" className={styles.link}>Perfil</Link>
        <Link href="/proyectos" className={styles.link}>Proyectos</Link>
      </nav>
    </header>
  );
}

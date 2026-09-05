import Image from 'next/image';
import Link from 'next/link';
import styles from './SiteNav.module.css';

function HomeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12l9-9 9 9" />
      <path d="M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10" />
    </svg>
  );
}

function WorksIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function AboutIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

const links = [
  { href: '/', label: 'Home', Icon: HomeIcon },
  { href: '/proyectos', label: 'Works', Icon: WorksIcon },
  { href: '/perfil', label: 'About', Icon: AboutIcon },
  { href: '/cv/Gonzalo Chiavassa, Product Designer - CV.pdf', label: 'Resume', Icon: ResumeIcon, download: true },
];

export default function SiteNav() {
  return (
    <header className={styles.nav}>
      <Link href="/" className={styles.brand}>
        <Image
          src="/profile.jpg"
          alt="Gonzalo Chiavassa"
          width={26}
          height={26}
          className={styles.avatar}
        />
        Gonzalo Chiavassa
      </Link>
      <nav className={styles.links}>
        {links.map(({ href, label, Icon, download }) =>
          download ? (
            <a key={href} href={href} download className={styles.link}>
              <Icon />
              <span>{label}</span>
            </a>
          ) : (
            <Link key={href} href={href} className={styles.link}>
              <Icon />
              <span>{label}</span>
            </Link>
          )
        )}
      </nav>
    </header>
  );
}

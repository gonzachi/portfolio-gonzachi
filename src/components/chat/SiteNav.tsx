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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

const links = [
  { href: '/', label: 'Home', Icon: HomeIcon },
  { href: '/proyectos', label: 'Works', Icon: WorksIcon },
  { href: '/perfil', label: 'About', Icon: AboutIcon },
  { href: '/cv/Gonzalo Chiavassa, Product Designer - CV.pdf', label: 'Resume', Icon: ResumeIcon, download: true },
];

interface SiteNavProps {
  /** Extra controls rendered after the nav links (e.g. a per-page LangToggle). */
  actions?: React.ReactNode;
}

export default function SiteNav({ actions }: SiteNavProps) {
  return (
    <header className={styles.nav}>
      {/* Plain <a>, not <Link> — clicking Home while already on "/" should
          reset the chat back to its empty state, and a same-route Link
          navigation is a no-op that leaves the conversation as-is. */}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/" className={styles.brand}>
        <Image
          src="/profile.jpg"
          alt="Gonzalo Chiavassa"
          width={26}
          height={26}
          className={styles.avatar}
        />
        Gonzalo Chiavassa
      </a>
      <div className={styles.right}>
        <nav className={styles.links}>
          {links.map(({ href, label, Icon, download }) =>
            download || href === '/' ? (
              <a key={href} href={href} download={download} className={styles.link}>
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
        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
    </header>
  );
}

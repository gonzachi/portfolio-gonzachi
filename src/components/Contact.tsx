import { personalInfo } from '@/data/content';
import styles from './Contact.module.css';

const links = [
  { href: `mailto:${personalInfo.email}`, label: personalInfo.email, primary: true },
  { href: personalInfo.linkedin, label: 'LinkedIn ↗', primary: false },
  { href: personalInfo.behance, label: 'Behance ↗', primary: false },
];

export default function Contact() {
  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.container}>
        <div className="reveal section-label">
          <span>Contacto</span>
          <div className="section-label-line" />
        </div>
        <h2 className={`reveal reveal-delay-1 ${styles.title}`}>Hablemos.</h2>
        <div className={`reveal reveal-delay-2 ${styles.links}`}>
          {links.map(({ href, label, primary }) => (
            <a
              key={href}
              href={href}
              {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}
              className={primary ? styles.linkPrimary : styles.linkOutline}
            >
              {label}
            </a>
          ))}
        </div>
        <p className={`reveal reveal-delay-3 ${styles.copyright}`}>
          © {new Date().getFullYear()} Gonzalo Chiavassa — Diseñado con intención.
        </p>
      </div>
    </section>
  );
}

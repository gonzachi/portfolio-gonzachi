'use client';

import styles from './PersonalProjects.module.css';
import { SectionLabel } from './Projects';
import { useLang } from '@/components/project/LangWrapper';

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

interface PersonalProjectCard {
  id: string;
  emoji?: string;
  title: string | { es: string; en: string };
  type: { es: string; en: string };
  description: { es: string; en: string };
  comingSoon: boolean;
  link?: string;
  image?: string;
}

const cards: PersonalProjectCard[] = [
  {
    id: 'reservadisimo',
    title: 'Reservadísimo',
    type: { es: 'Desarrollo de producto · Figma', en: 'Product development · Figma' },
    description: {
      es: 'App de reservas con QR y firma digital para bares durante la pandemia. Alcanzó el MVP con alta intención de adopción. Desarrollado en pandemia.',
      en: 'Reservation app with QR check-in and digital signatures for bars during the pandemic. Reached MVP with strong adoption intent. Built during the pandemic.',
    },
    comingSoon: false,
    link: 'https://www.behance.net/gallery/107614515/Reservadisimo-App-de-turnos',
    image: '/assets/home/portada-1.jpg',
  },
  {
    id: 'portfolio',
    emoji: '✦',
    title: { es: 'Este portfolio', en: 'This portfolio' },
    type: { es: 'Web · Next.js · IA', en: 'Web · Next.js · AI' },
    description: {
      es: 'Este portfolio está construido íntegramente con Inteligencia Artificial, con diferentes herramientas para testear (Claude Code, Antigravity, Cursor). Desplegado en Vercel. El diseño lo fui construyendo mientras lo desarrollaba.',
      en: 'This portfolio is built entirely with AI, testing different tools along the way (Claude Code, Antigravity, Cursor). Deployed on Vercel — the design evolved as I built it.',
    },
    comingSoon: false,
    image: '/assets/home/portada-4.jpg',
  },
  {
    id: 'finanzas-conjuntas',
    emoji: '💸',
    title: 'Finanzas Conjuntas',
    type: { es: 'PWA · Next.js · IA', en: 'PWA · Next.js · AI' },
    description: {
      es: 'Creé una webapp 100% utilizando Google Stitch para el diseño + Claude Code para desarrollar + Supabase como base de datos + Vercel para desplegar. La app viene a reemplazar mi excel de gestión de gastos compartidos en pareja.',
      en: 'A webapp built 100% with Google Stitch for design + Claude Code for development + Supabase as the database + Vercel for deployment. It replaces the spreadsheet my partner and I used for shared expenses.',
    },
    comingSoon: true,
    image: '/assets/home/portada-3.jpg',
  },
];

export default function PersonalProjects() {
  const { lang } = useLang();

  return (
    <section className={styles.section} id="side-projects">
      <div className={styles.container}>
        <SectionLabel>Side projects</SectionLabel>
      </div>

      <ul className={styles.track}>
        {cards.map((card) => {
          const hasLink = 'link' in card && card.link;
          const title = typeof card.title === 'string' ? card.title : card.title[lang];
          const type = card.type[lang];
          const description = card.description[lang];
          const tags = type.split(' · ');
          const isCurrent = card.id === 'portfolio';
          const isInert = card.comingSoon || isCurrent;

          const CardContent = (
            <>
              <div className={styles.cardVisual}>
                {card.image ? (
                  <img
                    src={card.image}
                    alt={title}
                    className={styles.cardImage}
                  />
                ) : (
                  <span className={styles.cardEmoji}>{card.emoji}</span>
                )}
              </div>
              <div className={styles.cardHeader}>
                <div className={styles.cardBadges}>
                  {tags.map((tag) => (
                    <span key={tag} className={styles.rowTag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className={styles.rowTitle}>{title}</h3>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.rowDescription}>{description}</p>
              </div>
              <div className={styles.cardFooter}>
                <span className={`${styles.viewCaseBtn} ${isInert ? styles.disabledBtn : ''}`}>
                  {card.comingSoon ? (
                    <span>{lang === 'en' ? 'In progress' : 'En construcción'}</span>
                  ) : isCurrent ? (
                    <span>{lang === 'en' ? 'Current project' : 'Proyecto actual'}</span>
                  ) : card.id === 'reservadisimo' ? (
                    <>
                      <span>{lang === 'en' ? 'View on Behance' : 'Ver en Behance'}</span>
                      <ExternalLinkIcon className={styles.viewCaseArrow} />
                    </>
                  ) : (
                    <>
                      <span>{lang === 'en' ? 'View project' : 'Ver proyecto'}</span>
                      <span className={styles.viewCaseArrow}>→</span>
                    </>
                  )}
                </span>
              </div>
            </>
          );

          return (
            <li
              key={card.id}
              className={`${styles.card} ${card.comingSoon ? styles.comingSoonCard : ''} ${
                hasLink ? styles.cardLink : ''
              }`}
            >
              {hasLink && card.link ? (
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardLinkWrapper}
                >
                  {CardContent}
                </a>
              ) : (
                CardContent
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

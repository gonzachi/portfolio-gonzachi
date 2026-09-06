'use client';

import styles from './PersonalProjects.module.css';
import { SectionLabel } from './Projects';

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
  title: string;
  type: string;
  description: string;
  comingSoon: boolean;
  link?: string;
  image?: string;
}

const cards: PersonalProjectCard[] = [
  {
    id: 'reservadisimo',
    title: 'Reservadísimo',
    type: 'Desarrollo de producto · Figma',
    description: 'App de reservas con QR y firma digital para bares durante la pandemia. Alcanzó el MVP con alta intención de adopción. Desarrollado en pandemia.',
    comingSoon: false,
    link: 'https://www.behance.net/gallery/107614515/Reservadisimo-App-de-turnos',
    image: '/assets/home/portada-1.jpg',
  },
  {
    id: 'portfolio',
    emoji: '✦',
    title: 'Este portfolio',
    type: 'Web · Next.js · IA',
    description: 'Este portfolio está construido íntegramente con Inteligencia Artificial, con diferentes herramientas para testear (Claude Code, Antigravity, Cursor). Desplegado en Vercel. El diseño lo fui construyendo mientras lo desarrollaba.',
    comingSoon: false,
    image: '/assets/home/portada-4.jpg',
  },
  {
    id: 'finanzas-conjuntas',
    emoji: '💸',
    title: 'Finanzas Conjuntas',
    type: 'PWA · Next.js · IA',
    description: 'Creé una webapp 100% utilizando Google Stitch para el diseño + Claude Code para desarrollar + Supabase como base de datos + Vercel para desplegar. La app viene a reemplazar mi excel de gestión de gastos compartidos en pareja.',
    comingSoon: true,
    image: '/assets/home/portada-3.jpg',
  },
];

export default function PersonalProjects() {
  return (
    <section className={styles.section} id="side-projects">
      <div className={styles.container}>
        <SectionLabel>Side projects</SectionLabel>
      </div>

      <ul className={styles.track}>
        {cards.map((card) => {
          const hasLink = 'link' in card && card.link;
          const tags = card.type.split(' · ');
          const isCurrent = card.id === 'portfolio';
          const isInert = card.comingSoon || isCurrent;

          const CardContent = (
            <>
              <div className={styles.cardVisual}>
                {card.image ? (
                  <img
                    src={card.image}
                    alt={card.title}
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
                <h3 className={styles.rowTitle}>{card.title}</h3>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.rowDescription}>{card.description}</p>
              </div>
              <div className={styles.cardFooter}>
                <span className={`${styles.viewCaseBtn} ${isInert ? styles.disabledBtn : ''}`}>
                  {card.comingSoon ? (
                    <span>En construcción</span>
                  ) : isCurrent ? (
                    <span>Proyecto actual</span>
                  ) : card.id === 'reservadisimo' ? (
                    <>
                      <span>Ver en Behance</span>
                      <ExternalLinkIcon className={styles.viewCaseArrow} />
                    </>
                  ) : (
                    <>
                      <span>Ver proyecto</span>
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

'use client';

import styles from './PersonalProjects.module.css';

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ opacity: 0.6 }}
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
}

const cards: PersonalProjectCard[] = [
  {
    id: 'reservadisimo',
    title: 'Reservadísimo',
    type: 'App Mobile · Figma',
    description: 'App de reservas con QR y firma digital para bares durante la pandemia. Alcanzó el MVP con alta intención de adopción.',
    comingSoon: false,
    link: 'https://www.behance.net/gallery/107614515/Reservadisimo-App-de-turnos',
  },
  {
    id: 'finanzas-conjuntas',
    emoji: '💸',
    title: 'Finanzas Conjuntas',
    type: 'PWA · Next.js · IA',
    description: 'App para gestionar gastos compartidos en pareja o grupo. Registro de gastos, balance automático y liquidación con un toque.',
    comingSoon: true,
  },
  {
    id: 'english-pwa',
    emoji: '🇬🇧',
    title: 'Aprende inglés',
    type: 'PWA · Next.js · IA',
    description: 'PWA para practicar inglés con ejercicios generados por IA adaptados al nivel del usuario. Vocabulario, frases y corrección en tiempo real.',
    comingSoon: true,
  },
  {
    id: 'portfolio',
    emoji: '✦',
    title: 'Este portfolio',
    type: 'Web · Next.js · IA',
    description: 'Portfolio diseñado y construido íntegramente con Inteligencia Artificial en Antigravity. Desde el diseño hasta el deploy en Vercel.',
    comingSoon: false,
  },
];

export default function PersonalProjects() {
  return (
    <section className={styles.section} id="side-projects">
      <div className={styles.container}>
        <div className="reveal section-label">
          <span>Side project</span>
          <div className="section-label-line" />
        </div>
      </div>

      <ul className={styles.track}>
        {cards.map((card) => {
          const hasLink = 'link' in card && card.link;
          const CardContent = (
            <>
              <div className={styles.cardVisual}>
                {hasLink ? (
                  <ExternalLinkIcon />
                ) : (
                  <span className={styles.cardEmoji}>{card.emoji}</span>
                )}
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardType}>{card.type}</span>
                  {card.comingSoon && (
                    <span className={styles.comingSoonBadge}>Desarrollo próximamente</span>
                  )}
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
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

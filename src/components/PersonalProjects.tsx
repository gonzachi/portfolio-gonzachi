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
                {card.image ? (
                  <img
                    src={card.image}
                    alt={card.title}
                    className={styles.cardImage}
                  />
                ) : hasLink ? (
                  <ExternalLinkIcon />
                ) : (
                  <span className={styles.cardEmoji}>{card.emoji}</span>
                )}
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardType}>{card.type}</span>
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
                <div className={styles.cardCtaContainer}>
                  <span className={`${styles.ctaButton} ${
                    card.comingSoon 
                      ? styles.ctaButtonComingSoon 
                      : (card.id === 'portfolio' ? styles.ctaButtonCurrent : styles.ctaButtonActive)
                  }`}>
                    {card.comingSoon ? (
                      'En construcción'
                    ) : card.id === 'reservadisimo' ? (
                      <span className={styles.ctaButtonWithIcon}>
                        <span>Ver en Behance</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={styles.ctaIcon}
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </span>
                    ) : card.id === 'portfolio' ? (
                      'Proyecto actual'
                    ) : (
                      'Ver proyecto'
                    )}
                  </span>
                </div>
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

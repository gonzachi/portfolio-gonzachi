'use client';

import styles from './PersonalProjects.module.css';

const cards = [
  {
    id: 'finanzas-conjuntas',
    emoji: '💸',
    title: 'Finanzas Conjuntas',
    type: 'PWA · Next.js · IA',
    description: 'App para gestionar gastos compartidos en pareja o grupo. Registro de gastos, balance automático y liquidación con un toque.',
  },
  {
    id: 'english-pwa',
    emoji: '🇬🇧',
    title: 'Aprende inglés',
    type: 'PWA · Next.js · IA',
    description: 'PWA para practicar inglés con ejercicios generados por IA adaptados al nivel del usuario. Vocabulario, frases y corrección en tiempo real.',
  },
  {
    id: 'portfolio',
    emoji: '✦',
    title: 'Este portfolio',
    type: 'Web · Next.js · IA',
    description: 'Portfolio diseñado y construido íntegramente con Inteligencia Artificial en Antigravity. Desde el diseño hasta el deploy en Vercel.',
  },
];

export default function PersonalProjects() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Proyectos</h2>
          <h2 className={styles.titleAccent}>personales con IA</h2>
        </div>
      </div>

      <ul className={styles.track}>
        {cards.map((card) => (
          <li key={card.id} className={styles.card}>
            <div className={styles.cardVisual}>
              <span className={styles.cardEmoji}>{card.emoji}</span>
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardType}>{card.type}</span>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

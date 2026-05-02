import styles from './Behance.module.css';

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
    description: 'Portfolio diseñado y construido íntegramente con Inteligencia Artificial. Desde el diseño hasta el deploy en Vercel.',
  },
];

export default function Behance() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className="reveal section-label">
          <span>Proyectos personales con IA</span>
          <div className="section-label-line" />
        </div>
        <div className={`${styles.grid} behance-grid`}>
          {cards.map((card, i) => (
            <div
              key={card.id}
              className={`reveal reveal-delay-${i} ${styles.card}`}
            >
              <span className={styles.cardEmoji}>{card.emoji}</span>
              <span className={styles.cardType}>{card.type}</span>
              <div className={styles.cardTitle}>{card.title}</div>
              <p className={styles.cardDesc}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

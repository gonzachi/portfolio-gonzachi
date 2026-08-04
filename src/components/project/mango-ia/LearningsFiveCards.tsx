'use client';

import React from 'react';
import styles from './MangoIAComponents.module.css';

export default function LearningsFiveCards() {
  const cards = [
    {
      num: '01',
      title: 'Discovery',
      subtitle: 'Entender antes de diseñar',
      desc: 'El trabajo del diseñador no empieza en las pantallas, sino reduciendo incertidumbre y comprendiendo el problema real.',
    },
    {
      num: '02',
      title: 'Priorización',
      subtitle: 'Criterio en la incertidumbre',
      desc: 'Saber qué construir y qué descartar cuando las posibilidades son infinitas y los recursos limitados.',
    },
    {
      num: '03',
      title: 'Experimentación',
      subtitle: 'Aprender rápido',
      desc: 'Con tecnologías emergentes muchas respuestas no existen previamente; hay que probar e iterar con hipótesis claras.',
    },
    {
      num: '04',
      title: 'Colaboración',
      subtitle: 'Alineación constante',
      desc: 'Construir en constante diálogo con usuarios, ingeniería y negocio para adaptar el producto al contexto real.',
    },
    {
      num: '05',
      title: 'Impacto',
      subtitle: 'Valor tangible',
      desc: 'La IA aporta valor cuando resuelve tareas muy concretas que agilizan de verdad el día a día de los equipos.',
    },
  ];

  return (
    <div className={styles.learningsGridContainer}>
      {cards.map((card, idx) => (
        <div key={idx} className={styles.learningCardItem}>
          <div className={styles.cardTopRow}>
            <span className={styles.cardNumBadge}>{card.num}</span>
            <span className={styles.cardSubTitle}>{card.subtitle}</span>
          </div>
          <h5 className={styles.learningCardTitle}>{card.title}</h5>
          <p className={styles.learningCardDesc}>{card.desc}</p>
        </div>
      ))}
    </div>
  );
}

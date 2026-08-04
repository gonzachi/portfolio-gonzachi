'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Carousel() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);

    const handleDragStart = (clientX: number) => {
        setIsDragging(true);
        setStartX(clientX);
        setDragOffset(0);
    };

    const handleDragMove = (clientX: number) => {
        if (!isDragging) return;
        const delta = clientX - startX;
        
        if ((activeSlide === 0 && delta > 0) || (activeSlide === 1 && delta < 0)) {
            setDragOffset(delta * 0.4);
        } else {
            setDragOffset(delta);
        }
    };

    const handleDragEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);

        if (dragOffset < -75) {
            setActiveSlide(1);
        } else if (dragOffset > 75) {
            setActiveSlide(0);
        }
        setDragOffset(0);
    };

    return (
        <div className={styles.carouselContainer}>
            <div 
                className={styles.carouselSlides}
                style={{ cursor: isDragging ? 'grabbing' : 'grab', userSelect: isDragging ? 'none' : 'auto' }}
                onMouseDown={(e) => handleDragStart(e.clientX)}
                onMouseMove={(e) => handleDragMove(e.clientX)}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
                onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
                onTouchEnd={handleDragEnd}
            >
                <div 
                    className={styles.carouselTrack} 
                    style={{ 
                        transform: `translateX(calc(12.5% - ${activeSlide * 79}% + ${dragOffset}px))`,
                        transition: isDragging ? 'none' : 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)'
                    }}
                >
                    <div className={`${styles.carouselSlideCard} ${activeSlide === 0 ? styles.slideCardActive : ''}`}>
                        <h4 className={styles.columnTitle}>Decisión 1: Vibe coding con IA para el frontend</h4>
                        <p className={styles.bodyText}>
                            En lugar de esperar la asignación de una célula de desarrollo convencional, decidimos construir el frontend mediante vibe coding impulsado por Inteligencia Artificial.
                        </p>
                        <p className={styles.bodyText}>
                            Esto eliminó las fricciones de handoff tradicionales y nos permitió probar prototipos funcionales directamente con usuarios finales desde las primeras etapas.
                        </p>
                        <p className={styles.bodyText}>
                            El aprendizaje clave fue que la IA actúa como un multiplicador real de velocidad cuando la visión de producto y la arquitectura de UX están bien definidas desde el inicio.
                        </p>
                    </div>

                    <div className={`${styles.carouselSlideCard} ${activeSlide === 1 ? styles.slideCardActive : ''}`}>
                        <h4 className={styles.columnTitle}>Decisión 2: Integración modular mediante APIs</h4>
                        <p className={styles.bodyText}>
                            Evaluamos la posibilidad de migrar todos los datos a una nueva plataforma unificada, pero la fricción para los +5 equipos involucrados habría sido inasumible.
                        </p>
                        <p className={styles.bodyText}>
                            Decidimos crear una capa orquestadora desacoplada que consume las APIs de las herramientas que cada equipo ya utilizaba en su día a día.
                        </p>
                        <p className={styles.bodyText}>
                            De esta forma, logramos centralizar la ideación y construcción de journeys sin interrumpir los flujos de trabajo operativos existentes.
                        </p>
                    </div>
                </div>
            </div>

            {/* Carousel Controls */}
            <div className={styles.carouselNavigation}>
                <button 
                    onClick={() => setActiveSlide(activeSlide === 0 ? 1 : 0)} 
                    className={styles.carouselArrow}
                    aria-label="Anterior"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>

                <div className={styles.carouselDots}>
                    <button 
                        onClick={() => setActiveSlide(0)} 
                        className={`${styles.carouselDot} ${activeSlide === 0 ? styles.carouselDotActive : ''}`}
                        aria-label="Diapositiva 1"
                    />
                    <button 
                        onClick={() => setActiveSlide(1)} 
                        className={`${styles.carouselDot} ${activeSlide === 1 ? styles.carouselDotActive : ''}`}
                        aria-label="Diapositiva 2"
                    />
                </div>

                <button 
                    onClick={() => setActiveSlide(activeSlide === 0 ? 1 : 0)} 
                    className={styles.carouselArrow}
                    aria-label="Siguiente"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

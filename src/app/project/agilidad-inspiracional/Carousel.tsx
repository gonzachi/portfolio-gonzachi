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
        
        // Add rubber-banding resistance if dragging out of bounds
        if ((activeSlide === 0 && delta > 0) || (activeSlide === 1 && delta < 0)) {
            setDragOffset(delta * 0.4); // 40% movement speed outside boundaries
        } else {
            setDragOffset(delta);
        }
    };

    const handleDragEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);

        // If drag exceeds 75px threshold, switch slides
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
                        <h4 className={styles.columnTitle}>Decisión técnica: entrenar modelos propios</h4>
                        <p className={styles.bodyText}>
                            Ya avanzado el Discovery, mientras iterábamos sobre el MVP, decidimos entrenar nuestros propios modelos en lugar de integrar modelos ya existentes. Esto implicaba configurar y seleccionar muchos parámetros — algo que nos costó mucha lógica y tiempo de desarrollo.
                        </p>
                        <p className={styles.bodyText}>
                            Parte de esa complejidad la logramos reducir desde UX, simplificando cómo el usuario interactuaba con esos parámetros. Pero el problema de fondo no estaba ahí: cuando testeamos con usuarios reales en un PoC, la calidad de las imágenes generadas y la velocidad de respuesta no estaban a la altura de lo que necesitábamos.
                        </p>
                        <p className={styles.bodyText}>
                            Ese resultado nos llevó a descartar el entrenamiento propio y pivotear hacia la integración de modelos ya existentes en el mercado. No fue tiempo perdido: el PoC nos sirvió para entender en profundidad cómo se comportaban los usuarios frente a una plataforma real, algo que después aplicamos con mejor criterio al integrar los modelos externos.
                        </p>
                    </div>

                    <div className={`${styles.carouselSlideCard} ${activeSlide === 1 ? styles.slideCardActive : ''}`}>
                        <h4 className={styles.columnTitle}>Malas decisiones de UX/UI: el canvas de libertad total</h4>
                        <p className={styles.bodyText}>
                            La primera propuesta fue un canvas donde el usuario tuviera libertad absoluta, acercándose más a plataformas habituales como Photoshop. La idea tenía sentido: los diseñadores ya vivían en ese tipo de herramientas, y queríamos que se sintieran en casa.
                        </p>
                        <p className={styles.bodyText}>
                            Pero nos dimos cuenta de dos problemas. Primero, ese nivel de libertad solo era útil para usuarios avanzados — no para todos los perfiles que íbamos a tener dentro de la plataforma. Segundo, el esfuerzo técnico que requería era demasiado alto para lo que necesitábamos validar en un MVP.
                        </p>
                        <p className={styles.bodyText}>
                            Ese pivot nos llevó directamente al formato conversacional que terminó siendo la base de la plataforma: menos libertad, pero más accesible desde el día uno para cualquier perfil de usuario.
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

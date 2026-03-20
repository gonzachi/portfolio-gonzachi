'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './page.module.css';

/* ── Scroll reveal hook (inline for self-contained replica) ── */
function useReveal<T extends HTMLElement>(opts?: { threshold?: number }) {
    const ref = useRef<T>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setVisible(true); return; }
        const el = ref.current; if (!el) return;
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold: opts?.threshold ?? 0.12, rootMargin: '0px 0px -40px 0px' });
        obs.observe(el);
        return () => obs.disconnect();
    }, [opts?.threshold]);
    return { ref, visible };
}

/* ── Reveal wrapper ── */
function Reveal({ children, className = '', delay = 0, as: Tag = 'section' }: { children: React.ReactNode; className?: string; delay?: number; as?: React.ElementType }) {
    const { ref, visible } = useReveal<HTMLElement>();
    return (
        <Tag ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(50px)', transition: `opacity 0.9s cubic-bezier(.16,1,.3,1) ${delay}ms, transform 0.9s cubic-bezier(.16,1,.3,1) ${delay}ms` }}>
            {children}
        </Tag>
    );
}

/* ── Parallax hook ── */
function useParallax(speed = 0.3) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const el = ref.current; if (!el) return;
        const handler = () => { el.style.transform = `translateY(${window.scrollY * speed}px)`; };
        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, [speed]);
    return ref;
}

/* ── Highlights data ── */
const highlightTabs = [
    {
        name: 'Colores y diseño',
        cards: [
            { full: true, label: 'Plata, rosa nube, cítrico e índigo.\nCuatro colores alucinantes. Un diseño resistente.', text: '', gradient: 'linear-gradient(135deg, #86868b 0%, #c9c9cf 50%, #5e5ce6 100%)' },
            { full: false, label: 'Aluminio reciclado ultrarresistente.', text: 'Hasta un 60% de materiales reciclados en peso.', gradient: 'linear-gradient(135deg, #3a3a3c 0%, #636366 100%)' },
        ],
    },
    {
        name: 'Rendimiento',
        cards: [
            { full: true, label: 'Velocidad de sobra\npara tus tareas diarias.', text: '', gradient: 'linear-gradient(135deg, #1c1c1e 0%, #2c2c2e 50%, #ff6b35 100%)' },
            { full: false, label: 'Chip A18 Pro.', text: 'CPU de 5 núcleos. GPU de 5 núcleos.', gradient: 'linear-gradient(135deg, #2c2c2e 0%, #48484a 100%)' },
            { full: false, label: '16 horas de autonomía.', text: 'No pares, no pares, no pares.', gradient: 'linear-gradient(135deg, #1a2a1a 0%, #2d4a2d 100%)' },
        ],
    },
    {
        name: 'Pantalla',
        cards: [
            { full: true, label: 'Pantalla Liquid Retina de 13 pulgadas.', text: 'Alucina en mil millones de colores.', gradient: 'linear-gradient(135deg, #0a1628 0%, #1a3a5c 50%, #2997ff 100%)' },
            { full: false, label: '500 nits de brillo.', text: 'Resolución brutal y colores intensos.', gradient: 'linear-gradient(135deg, #1d1d1f 0%, #2a3040 100%)' },
            { full: false, label: 'Tecnología True Tone.', text: 'Se adapta a la luz ambiental.', gradient: 'linear-gradient(135deg, #2a2520 0%, #4a4035 100%)' },
        ],
    },
    {
        name: 'Inteligencia artificial',
        cards: [
            { full: true, label: 'Potencia para la IA,\ncon Apple Intelligence integrado.', text: 'Una genialidad tras otra.', gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #5856d6 100%)' },
            { full: false, label: 'ChatGPT compatible.', text: 'Tus herramientas de IA favoritas, a toda velocidad.', gradient: 'linear-gradient(135deg, #1d1d1f 0%, #2d2d3f 100%)' },
            { full: false, label: 'Herramientas de Escritura.', text: 'Reescribe, corrige y resume en un instante.', gradient: 'linear-gradient(135deg, #1a2a1a 0%, #2d3a2d 100%)' },
        ],
    },
    {
        name: 'macOS',
        cards: [
            { full: true, label: 'macOS. Compatible con tus apps de siempre.', text: 'Fácil y divertido como nunca.', gradient: 'linear-gradient(135deg, #1d1d1f 0%, #2d2d2f 50%, #ff9f0a 100%)' },
            { full: false, label: 'Se conecta con tu iPhone.', text: 'Las prestaciones se multiplican.', gradient: 'linear-gradient(135deg, #1d2a1d 0%, #2d3a2d 100%)' },
            { full: false, label: 'Apps nativas increíbles.', text: 'Safari, Keynote, FaceTime y muchas más.', gradient: 'linear-gradient(135deg, #2a1d2a 0%, #3a2d3a 100%)' },
        ],
    },
];

const galleryItems = [
    { title: 'Colores', text: 'Cuatro tonos alucinantes que lo hacen brillar por fuera y por dentro hasta la última tecla.', gradient: 'linear-gradient(145deg, #86868b, #c9c9cf)' },
    { title: 'Diseño duradero', text: 'Carcasa de aluminio reciclado ultrarresistente con hasta un 60% de materiales reciclados.', gradient: 'linear-gradient(145deg, #3a3a3c, #636366)' },
    { title: 'Pantalla', text: 'Liquid Retina de 13" con brillo de 500 nits. Resolución brutal y colores intensos.', gradient: 'linear-gradient(145deg, #0a1628, #2997ff)' },
    { title: 'Teclado y trackpad', text: 'Magic Keyboard: comodidad y precisión. Trackpad Multi‑Touch para tocar, pellizcar y deslizar.', gradient: 'linear-gradient(145deg, #2a2a2c, #48484a)' },
    { title: 'Touch ID', text: 'Desbloquea el MacBook, inicia sesión en apps y descarga apps con solo un dedo.', gradient: 'linear-gradient(145deg, #1a2a1a, #2d4a2d)' },
    { title: 'Cámara', text: 'FaceTime HD a 1080p. Te van a ver de cine en las videollamadas.', gradient: 'linear-gradient(145deg, #2a1a2a, #4a2d4a)' },
    { title: 'Micros y altavoces', text: 'Dos altavoces laterales con sonido envolvente y dos micros con beamforming.', gradient: 'linear-gradient(145deg, #1d1d2d, #3d3d4d)' },
    { title: 'Conexiones', text: 'Dos USB‑C y toma de auriculares. Conecta, transfiere y carga sin despeinarte.', gradient: 'linear-gradient(145deg, #2d2a1a, #4a4530)' },
];

/* ── Main Component ── */
export default function AppleReplicaPage() {
    const [activeTab, setActiveTab] = useState(0);
    const parallaxRef = useParallax(0.25);
    const galleryRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateScrollButtons = useCallback(() => {
        const el = galleryRef.current; if (!el) return;
        setCanScrollLeft(el.scrollLeft > 10);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    }, []);

    useEffect(() => {
        const el = galleryRef.current; if (!el) return;
        el.addEventListener('scroll', updateScrollButtons, { passive: true });
        updateScrollButtons();
        return () => el.removeEventListener('scroll', updateScrollButtons);
    }, [updateScrollButtons]);

    const scrollGallery = (dir: 'left' | 'right') => {
        const el = galleryRef.current; if (!el) return;
        const amount = el.clientWidth * 0.6;
        el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
    };

    return (
        <div className={styles.page}>

            {/* ===== 1. HERO ===== */}
            <section className={styles.hero}>
                <div ref={parallaxRef} className={styles.heroContent}>
                    <span className={styles.heroLabel}>MacBook Neo</span>
                    <h1 className={styles.heroTitle}>Hola, Neo.</h1>
                    <p className={styles.heroSubtitle}>
                        Colores alucinantes, diseño resistente en aluminio, Liquid&nbsp;Retina de&nbsp;13″,
                        autonomía para un día entero.
                    </p>
                    <button className={styles.heroCta}>
                        Reservar
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className={styles.heroImage} role="img" aria-label="MacBook Neo product shot" />
            </section>

            {/* ===== 2. HIGHLIGHTS with interactive tabs ===== */}
            <Reveal className={styles.highlights}>
                <h2 className={styles.highlightsTitle}>Lo principal.</h2>
                <nav className={styles.highlightsNav} aria-label="Categorías de características">
                    {highlightTabs.map((tab, i) => (
                        <button
                            key={tab.name}
                            className={`${styles.highlightsNavItem} ${i === activeTab ? styles.highlightsNavItemActive : ''}`}
                            onClick={() => setActiveTab(i)}
                            aria-selected={i === activeTab}
                            role="tab"
                        >
                            {tab.name}
                        </button>
                    ))}
                </nav>

                <div className={styles.highlightsGrid} key={activeTab}>
                    {highlightTabs[activeTab].cards.map((card, i) => (
                        <Reveal key={`${activeTab}-${i}`} className={card.full ? styles.highlightCardFull : styles.highlightCard} as="div" delay={i * 100}>
                            <p className={styles.highlightLabel}>{card.label}</p>
                            {card.text && <p className={styles.highlightText}>{card.text}</p>}
                            <div className={styles.highlightImage} style={{ background: card.gradient }} role="img" aria-label={card.label} />
                        </Reveal>
                    ))}
                </div>
            </Reveal>

            {/* ===== 3. STORY — Rendimiento ===== */}
            <Reveal className={styles.storySectionDark}>
                <p className={styles.storyLabel}>Rendimiento</p>
                <h2 className={styles.storyTitle}>Productividad<br />todos los días.</h2>
                <p className={styles.storySubtitle}>
                    Responder emails, hacer videollamadas, navegar por internet, organizar el
                    horario de clase o compartir fotos. Con el MacBook Neo tu lista de tareas no
                    dura ni un asalto.
                </p>
                <div className={styles.storyMedia} style={{ background: 'linear-gradient(135deg, #1c1c1e, #2c2c2e 50%, #ff6b35)' }} role="img" aria-label="MacBook Neo rendimiento" />
            </Reveal>

            {/* ===== 4. CAPTION GALLERY — Scroll horizontal con botones ===== */}
            <Reveal className={styles.captionGallery}>
                <div className={styles.captionGalleryHeader}>
                    <div>
                        <p className={styles.storyLabel}>Más de cerca</p>
                        <h2 className={styles.highlightsTitle}>Diseñado al detalle.</h2>
                    </div>
                    <div className={styles.galleryControls}>
                        <button className={styles.galleryBtn} onClick={() => scrollGallery('left')} disabled={!canScrollLeft} aria-label="Anterior">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>
                        <button className={styles.galleryBtn} onClick={() => scrollGallery('right')} disabled={!canScrollRight} aria-label="Siguiente">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>
                    </div>
                </div>

                <div ref={galleryRef} className={styles.captionGalleryScroll} role="list" aria-label="Galería de características">
                    {galleryItems.map((item, i) => (
                        <div key={i} className={styles.captionCard} role="listitem">
                            <div className={styles.captionCardMedia} style={{ background: item.gradient }} role="img" aria-label={item.title} />
                            <div className={styles.captionCardContent}>
                                <h3 className={styles.captionCardTitle}>{item.title}</h3>
                                <p className={styles.captionCardText}>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Reveal>

            {/* ===== 5. QUOTE ===== */}
            <Reveal className={styles.quote}>
                <p className={styles.quoteText}>
                    &ldquo;macOS es el sistema operativo que hace que un Mac sea un Mac.
                    Es tan potente como intuitivo, algo que ya te sonará si tienes un iPhone.&rdquo;
                </p>
            </Reveal>

            {/* ===== 6. STORY — Pantalla, cámara y audio ===== */}
            <Reveal className={styles.storySectionLight}>
                <p className={styles.storyLabel}>Pantalla, cámara y audio</p>
                <h2 className={styles.storyTitle}>Que comience<br />el espectáculo.</h2>
                <p className={styles.storySubtitle}>
                    Las fotos y los vídeos tienen un contraste y un detalle alucinantes, el texto
                    se ve supernítido y los dos altavoces laterales te meten de lleno en todo lo que escuchas.
                </p>
                <div className={styles.storyMedia} style={{ background: 'linear-gradient(135deg, #0a1628, #1a3a5c 50%, #2997ff)' }} role="img" aria-label="Pantalla del MacBook Neo" />
            </Reveal>

            {/* ===== 7. FEATURE ROW ===== */}
            <Reveal className={styles.featureRow}>
                <div className={styles.featureRowGrid}>
                    {[
                        { icon: '🖥', label: 'Liquid Retina', text: '13 pulgadas con mil millones de colores.' },
                        { icon: '📷', label: 'FaceTime HD', text: 'Cámara a 1080p. Tu mejor cara siempre.' },
                        { icon: '🔊', label: 'Audio espacial', text: 'Dos altavoces con Dolby Atmos.' },
                    ].map((item, i) => (
                        <Reveal key={i} className={styles.featureItem} as="div" delay={i * 150}>
                            <div className={styles.featureIcon} aria-hidden="true">
                                <span style={{ fontSize: '24px' }}>{item.icon}</span>
                            </div>
                            <p className={styles.featureLabel}>{item.label}</p>
                            <p className={styles.featureText}>{item.text}</p>
                        </Reveal>
                    ))}
                </div>
            </Reveal>

            {/* ===== 8. STORY — IA ===== */}
            <Reveal className={styles.storySectionDark}>
                <p className={styles.storyLabel}>Inteligencia artificial</p>
                <h2 className={styles.storyTitle}>Tu clase de magia.</h2>
                <p className={styles.storySubtitle}>
                    Las apps y herramientas de IA que más usas, como ChatGPT y Canva, se llevan
                    genial con el MacBook&nbsp;Neo. Experimenta con ellas para quitarte trabajo de encima.
                </p>
                <div className={styles.storyMedia} style={{ background: 'linear-gradient(135deg, #1a1a2e, #16213e 50%, #5856d6)' }} role="img" aria-label="IA en MacBook Neo" />
            </Reveal>

            {/* ===== 9. SPECS ===== */}
            <Reveal className={styles.specsSection}>
                <h2 className={styles.highlightsTitle} style={{ marginBottom: 48 }}>Especificaciones.</h2>
                <div className={styles.specsGrid}>
                    {[
                        { label: 'Chip', value: 'A18 Pro', desc: 'CPU de 5 núcleos, GPU de 5 núcleos' },
                        { label: 'Pantalla', value: '13"', desc: 'Liquid Retina, 500 nits, mil millones de colores' },
                        { label: 'Autonomía', value: '16 h', desc: 'Hasta 16 horas de uso' },
                        { label: 'Almacenamiento', value: '256 GB', desc: 'SSD, configurable hasta 512 GB' },
                        { label: 'Memoria', value: '8 GB', desc: 'Memoria unificada' },
                        { label: 'Peso', value: '1,24 kg', desc: 'Ultraligero y portátil' },
                        { label: 'Carga', value: 'USB-C', desc: 'Carga rápida con MagSafe' },
                        { label: 'Conectividad', value: 'Wi-Fi 7', desc: 'Bluetooth 5.3' },
                    ].map((spec, i) => (
                        <Reveal key={i} className={styles.specItem} as="div" delay={i * 60}>
                            <span className={styles.specLabel}>{spec.label}</span>
                            <span className={styles.specValue}>{spec.value}</span>
                            <span className={styles.specDesc}>{spec.desc}</span>
                        </Reveal>
                    ))}
                </div>
            </Reveal>

        </div>
    );
}

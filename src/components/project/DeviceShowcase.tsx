'use client';

import { useEffect, useRef, useCallback } from 'react';
import styles from './DeviceShowcase.module.css';

interface DeviceContent {
    icon: string;
    label: string;
    imageSequence?: string[]; // Array of image URLs for scrubbing
    longImage?: string;       // Single tall image URL for scrolling
}

interface DeviceShowcaseProps {
    label?: string;
    title: string;
    description: string;
    phoneContent?: DeviceContent;
    laptopContent?: DeviceContent;
}

export default function DeviceShowcase({
    label,
    title,
    description,
    phoneContent = {
        icon: '📱',
        label: 'Búsqueda manual de referencias',
        // Example placeholders, user will need to provide actual images
        // imageSequence: ['/img1.jpg', '/img2.jpg', '/img3.jpg'],
        // longImage: '/long-feed.jpg'
    },
    laptopContent = {
        icon: '✨',
        label: 'Plataforma IA generativa'
    },
}: DeviceShowcaseProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const phoneRef = useRef<HTMLDivElement>(null);
    const laptopRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<HTMLDivElement>(null);
    const rafId = useRef<number>(0);
    const phoneScreenRef = useRef<HTMLDivElement>(null);
    const laptopScreenRef = useRef<HTMLDivElement>(null);

    // Easing function
    const ease = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

    const animate = useCallback(() => {
        const wrapper = wrapperRef.current;
        const phone = phoneRef.current;
        const laptop = laptopRef.current;
        const glow = glowRef.current;
        const text = textRef.current;
        const particles = particlesRef.current;
        if (!wrapper || !phone || !laptop || !glow || !text || !particles) return;

        const rect = wrapper.getBoundingClientRect();
        const scrollHeight = rect.height - window.innerHeight;
        const rawProgress = clamp(-rect.top / scrollHeight, 0, 1);

        // Responsive multiplier: scale offsets to viewport width
        const vw = window.innerWidth;
        const isMobile = vw <= 600;
        const scale = Math.min(vw / 1200, 1); // 1.0 at 1200px+, 0.3 at 375px

        /* ===========================================
           PHASE 1: 0–0.25 → Phone centred, glow pulse
           =========================================== */
        const p1 = clamp(rawProgress / 0.25, 0, 1);
        const phoneScale1 = 0.8 + 0.2 * ease(p1);
        const glowOpacity = Math.sin(p1 * Math.PI) * 0.8;
        const glowScale = 1 + p1 * 0.5;

        /* ===========================================
           PHASE 2: 0.25–0.55 → Phone shrinks + moves,
                                laptop slides in
           =========================================== */
        const p2 = clamp((rawProgress - 0.25) / 0.3, 0, 1);
        const ep2 = ease(p2);

        // Phone: centre → right side (scaled)
        const phoneX = ep2 * (isMobile ? 20 : 280 * scale);
        const phoneY = ep2 * (isMobile ? 40 : 30);
        const phoneScale2 = phoneScale1 * (1 - ep2 * 0.25);
        const phoneScale = rawProgress < 0.25 ? phoneScale1 : phoneScale2;
        const phoneTx = rawProgress < 0.25 ? 0 : phoneX;
        const phoneTy = rawProgress < 0.25 ? 0 : phoneY;

        // Laptop: from left off-screen → centre (scaled)
        const laptopStartX = isMobile ? -vw : -600 * scale;
        const laptopTravelX = isMobile ? vw * 0.95 : 460 * scale;
        const laptopX = laptopStartX + ep2 * laptopTravelX;
        const laptopOpacity = ep2;
        const laptopScale = 0.7 + ep2 * 0.2;

        /* ===========================================
           PHASE 3: 0.55–0.75 → Devices settle, scale up
           =========================================== */
        const p3 = clamp((rawProgress - 0.55) / 0.2, 0, 1);
        const ep3 = ease(p3);

        const settleX = isMobile ? 3 : 20 * scale;
        const finalPhoneX = phoneTx + ep3 * settleX;
        const finalPhoneScale = phoneScale * (1 + ep3 * 0.05);
        const finalLaptopX = laptopX + ep3 * (rawProgress > 0.55 ? -(settleX) : 0);
        const finalLaptopScale = laptopScale + ep3 * 0.1;

        /* ===========================================
           PHASE 4: 0.75–1.0 → Text reveals
           =========================================== */
        const p4 = clamp((rawProgress - 0.75) / 0.25, 0, 1);
        const ep4 = ease(p4);
        const textOpacity = ep4;
        const textY = -40 * (1 - ep4);

        // Apply transforms
        phone.style.transform = `translate(${finalPhoneX}px, ${phoneTy}px) scale(${finalPhoneScale})`;
        phone.style.opacity = '1';

        laptop.style.transform = `translate(${finalLaptopX}px, 0) scale(${finalLaptopScale})`;
        laptop.style.opacity = String(laptopOpacity);

        glow.style.opacity = String(glowOpacity);
        glow.style.transform = `scale(${glowScale})`;

        text.style.opacity = String(textOpacity);
        text.style.transform = `translateY(${textY}px)`;

        /* ===========================================
           INTERNAL CONTENT SCRUBBING
           =========================================== */
        // We use the full rawProgress (0 to 1) to animate internal screen content

        if (phoneScreenRef.current) {
            if (phoneContent.longImage) {
                // Scroll a long image vertically
                const maxScroll = 100; // percent to scroll (e.g., 0 to -100%)
                const yPos = -(rawProgress * maxScroll);
                phoneScreenRef.current.style.backgroundPositionY = `${yPos}%`;
            } else if (phoneContent.imageSequence && phoneContent.imageSequence.length > 0) {
                // Scrub through an image sequence
                const totalFrames = phoneContent.imageSequence.length;
                const currentFrameIndex = Math.min(
                    Math.floor(rawProgress * totalFrames),
                    totalFrames - 1
                );
                phoneScreenRef.current.style.backgroundImage = `url(${phoneContent.imageSequence[currentFrameIndex]})`;
                phoneScreenRef.current.style.backgroundSize = 'cover';
                phoneScreenRef.current.style.backgroundPosition = 'center';
            }
        }

        if (laptopScreenRef.current) {
            // Same logic can be applied to laptop if needed
            if (laptopContent.longImage) {
                const maxScroll = 100;
                const yPos = -(rawProgress * maxScroll);
                laptopScreenRef.current.style.backgroundPositionY = `${yPos}%`;
            } else if (laptopContent.imageSequence && laptopContent.imageSequence.length > 0) {
                const totalFrames = laptopContent.imageSequence.length;
                const currentFrameIndex = Math.min(
                    Math.floor(rawProgress * totalFrames),
                    totalFrames - 1
                );
                laptopScreenRef.current.style.backgroundImage = `url(${laptopContent.imageSequence[currentFrameIndex]})`;
                laptopScreenRef.current.style.backgroundSize = 'cover';
                laptopScreenRef.current.style.backgroundPosition = 'center';
            }
        }

        // Particles
        const particleEls = particles.children;
        for (let i = 0; i < particleEls.length; i++) {
            const el = particleEls[i] as HTMLElement;
            const seed = (i + 1) * 0.17;
            const pProgress = clamp((rawProgress - 0.2 - seed * 0.3) / 0.4, 0, 1);
            const pOpacity = Math.sin(pProgress * Math.PI) * 0.6;
            const pX = Math.sin(seed * 20) * 200 * pProgress;
            const pY = Math.cos(seed * 15) * 150 * pProgress - 100 * pProgress;
            el.style.opacity = String(pOpacity);
            el.style.transform = `translate(${pX}px, ${pY}px)`;
        }
    }, []);

    useEffect(() => {
        const onScroll = () => {
            cancelAnimationFrame(rafId.current);
            rafId.current = requestAnimationFrame(animate);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        animate(); // Initial state
        return () => {
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(rafId.current);
        };
    }, [animate]);

    // Generate deterministic particle positions
    const particlePositions = Array.from({ length: 12 }, (_, i) => ({
        top: `${20 + Math.sin(i * 2.5) * 30}%`,
        left: `${30 + Math.cos(i * 1.8) * 30}%`,
    }));

    return (
        <div className={styles.wrapper} ref={wrapperRef}>
            <div className={styles.sticky}>
                <div className={styles.scene}>
                    {/* Particles */}
                    <div className={styles.particles} ref={particlesRef}>
                        {particlePositions.map((pos, i) => (
                            <div
                                key={i}
                                className={styles.particle}
                                style={{ top: pos.top, left: pos.left }}
                            />
                        ))}
                    </div>

                    {/* Phone */}
                    <div className={styles.phone} ref={phoneRef}>
                        <div className={styles.phoneNotch} />
                        <div
                            className={styles.phoneScreen}
                            ref={phoneScreenRef}
                            style={{
                                backgroundImage: phoneContent.longImage ? `url(${phoneContent.longImage})` : undefined,
                                backgroundSize: phoneContent.longImage ? '100% auto' : undefined,
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            <div className={styles.phoneGlow} ref={glowRef} />
                            {(!phoneContent.imageSequence && !phoneContent.longImage) && (
                                <div className={styles.phoneScreenContent}>
                                    <span className={styles.phoneIcon}>{phoneContent.icon}</span>
                                    <span className={styles.phoneLabel}>{phoneContent.label}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Laptop */}
                    <div className={styles.laptop} ref={laptopRef} style={{ opacity: 0 }}>
                        <div className={styles.laptopLid}>
                            <div
                                className={styles.laptopScreen}
                                ref={laptopScreenRef}
                                style={{
                                    backgroundImage: laptopContent.longImage ? `url(${laptopContent.longImage})` : undefined,
                                    backgroundSize: laptopContent.longImage ? '100% auto' : undefined,
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                                <div className={styles.laptopToolbar}>
                                    <div className={styles.toolbarDot} />
                                    <div className={styles.toolbarDot} />
                                    <div className={styles.toolbarDot} />
                                </div>
                                {(!laptopContent.imageSequence && !laptopContent.longImage) && (
                                    <div className={styles.laptopScreenContent}>
                                        <span className={styles.laptopIcon}>{laptopContent.icon}</span>
                                        <span className={styles.laptopLabel}>{laptopContent.label}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={styles.laptopBase} />
                    </div>

                    {/* Text overlay */}
                    <div className={styles.textOverlay} ref={textRef} style={{ opacity: 0 }}>
                        {label && <p className={styles.showcaseLabel}>{label}</p>}
                        <h2 className={styles.showcaseTitle}>{title}</h2>
                        <p className={styles.showcaseDescription}>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

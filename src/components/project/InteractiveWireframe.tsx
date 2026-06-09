'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import styles from '@/app/project/[id]/page.module.css';

interface Pin {
    id: number;
    top: string;
    left: string;
    badge: string;
    title: string;
    desc: string;
    desktopLeft: string;
    desktopRight: string;
    svgLeft: string;
    svgWidth: string;
    svgDirection: 'left' | 'right';
}

const pinsData: Pin[] = [
    {
        id: 1,
        top: '8%',
        left: '55%',
        badge: 'Llamada de atención de UX',
        title: 'Disclaimer temprano',
        desc: 'Incorporamos un mensaje claro al inicio indicando que aceptar la propuesta no implicaba ningún compromiso de inversión. Un detalle pequeño que eliminaba la principal fricción psicológica del paso.',
        desktopLeft: 'calc(100% + 20px)',
        desktopRight: 'auto',
        svgLeft: '55%',
        svgWidth: 'calc(45% + 20px)',
        svgDirection: 'right',
    },
    {
        id: 2,
        top: '22%',
        left: '50%',
        badge: 'Llamada de atención de UX',
        title: 'Rendimiento histórico contextualizado',
        desc: 'Añadimos un gráfico interactivo que mostraba la rentabilidad pasada de un portfolio similar a 12, 36 y 60 meses, dándole al usuario una referencia concreta en lugar de proyecciones abstractas.',
        desktopLeft: 'auto',
        desktopRight: 'calc(100% + 20px)',
        svgLeft: '-20px',
        svgWidth: 'calc(50% + 20px)',
        svgDirection: 'left',
    },
    {
        id: 3,
        top: '35.5%',
        left: '65%',
        badge: 'Llamada de atención de UX',
        title: 'Simulador "viaje en el tiempo"',
        desc: 'Introdujimos una sección interactiva donde el usuario podía ver cuánto dinero tendría hoy si hubiera invertido una cantidad determinada hace 12, 36 o 60 meses. Traducir rendimiento a dinero real fue uno de los cambios más significativos en términos de comprensión.',
        desktopLeft: 'calc(100% + 20px)',
        desktopRight: 'auto',
        svgLeft: '65%',
        svgWidth: 'calc(35% + 20px)',
        svgDirection: 'right',
    },
    {
        id: 4,
        top: '48%',
        left: '60%',
        badge: 'Llamada de atención de UX',
        title: 'Composición del portfolio con marcas conocidas',
        desc: 'Mostramos el desglose del portfolio en porcentajes junto con las empresas reales que lo conformaban (Apple, Microsoft, entre otras). Conectar la inversión con marcas familiares generó asociación inmediata y transmitió confianza.',
        desktopLeft: 'auto',
        desktopRight: 'calc(100% + 20px)',
        svgLeft: '-20px',
        svgWidth: 'calc(60% + 20px)',
        svgDirection: 'left',
    },
    {
        id: 5,
        top: '59%',
        left: '55%',
        badge: 'Llamada de atención de UX',
        title: 'Posicionamiento del perfil',
        desc: 'Incluimos una visualización que ubicaba el portfolio del usuario dentro de un espectro de perfiles similares, reforzando que la propuesta había sido personalizada por la IA y no era genérica. Complementamos esto con un video explicativo breve.',
        desktopLeft: 'calc(100% + 20px)',
        desktopRight: 'auto',
        svgLeft: '55%',
        svgWidth: 'calc(45% + 20px)',
        svgDirection: 'right',
    },
    {
        id: 6,
        top: '71%',
        left: '45%',
        badge: 'Llamada de atención de UX',
        title: 'Beneficios de la IA',
        desc: 'Dedicamos una sección concisa a explicar el valor diferencial de Harry, la IA de Holdo, en la construcción del portfolio.',
        desktopLeft: 'auto',
        desktopRight: 'calc(100% + 20px)',
        svgLeft: '-20px',
        svgWidth: 'calc(45% + 20px)',
        svgDirection: 'left',
    },
    {
        id: 7,
        top: '80%',
        left: '60%',
        badge: 'Llamada de atención de UX',
        title: 'Letra chica reformateada',
        desc: 'La información regulatoria obligatoria no desapareció, sino que fue redistribuida al final del flujo en párrafos cortos con títulos, haciéndola legible sin que bloqueara el camino hacia la decisión.',
        desktopLeft: 'calc(100% + 20px)',
        desktopRight: 'auto',
        svgLeft: '60%',
        svgWidth: 'calc(40% + 20px)',
        svgDirection: 'right',
    },
];

export default function InteractiveWireframe() {
    const [selectedPinId, setSelectedPinId] = useState<number | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (selectedPinId !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedPinId]);

    const activePin = pinsData.find((p) => p.id === selectedPinId);

    return (
        <div className={styles.wireframeContainer}>
            <Image
                src="/assets/projects/ladrillo/ladrillo-lofi/lofi-ladrillo.png"
                alt="Wireframe de baja fidelidad de la propuesta de inversión de Holdo"
                width={1140}
                height={2820}
                style={{ width: '100%', height: 'auto', display: 'block', border: '1px solid #d5d3ce' }}
                priority={false}
            />

            {/* Desktop Pins (Hidden on Mobile) */}
            {pinsData.map((pin) => (
                <div key={pin.id} className={styles.pinContainer} style={{ top: pin.top, left: 0, width: '100%', height: 0 }}>
                    <div className={styles.pinCard} style={{ position: 'absolute', left: pin.desktopLeft, right: pin.desktopRight, top: 0, transform: 'translateY(-50%)' }}>
                        <div className={styles.pinBadge}>{pin.badge}</div>
                        <h4 className={styles.pinTitle}>{pin.title}</h4>
                        <p className={styles.pinDesc}>{pin.desc}</p>
                    </div>
                    <svg style={{ position: 'absolute', left: pin.svgDirection === 'right' ? pin.svgLeft : '-20px', top: 0, width: pin.svgWidth, height: '16px', transform: 'translateY(-50%)', overflow: 'visible' }}>
                        {/* Hit areas */}
                        <circle cx={pin.svgDirection === 'right' ? '0' : '100%'} cy="8" r="24" className={styles.pinHitArea} />
                        <line x1="0" y1="8" x2="100%" y2="8" className={styles.pinLineHitArea} strokeWidth="16" />

                        <circle cx={pin.svgDirection === 'right' ? '0' : '100%'} cy="8" r="7" className={styles.pinDotOuter} strokeWidth="1" fill="none" />
                        <circle cx={pin.svgDirection === 'right' ? '0' : '100%'} cy="8" r="3.5" className={styles.pinDotInner} />
                        <line x1="0" y1="8" x2="100%" y2="8" className={styles.pinLine} strokeWidth="1" strokeDasharray="1 1" />
                    </svg>
                </div>
            ))}

            {/* Mobile Pins (Hidden on Desktop) */}
            {pinsData.map((pin) => (
                <button
                    key={pin.id}
                    className={styles.mobilePin}
                    style={{ top: pin.top, left: pin.left }}
                    onClick={() => setSelectedPinId(pin.id)}
                    aria-label={`Ver detalle de pin ${pin.id}: ${pin.title}`}
                >
                    {pin.id}
                </button>
            ))}

            {/* Mobile Bottom Sheet */}
            {mounted && selectedPinId !== null && activePin && createPortal(
                <>
                    <div className={styles.bottomSheetBackdrop} onClick={() => setSelectedPinId(null)} />
                    <div className={styles.bottomSheet} role="dialog" aria-modal="true">
                        <div className={styles.bottomSheetHeader}>
                            <div className={styles.bottomSheetBadge}>{activePin.badge}</div>
                            <button className={styles.bottomSheetClose} onClick={() => setSelectedPinId(null)} aria-label="Cerrar detalle">
                                &times;
                            </button>
                        </div>
                        <h4 className={styles.bottomSheetTitle}>{activePin.title}</h4>
                        <p className={styles.bottomSheetDesc}>{activePin.desc}</p>
                    </div>
                </>,
                document.body
            )}
        </div>
    );
}

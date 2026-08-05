import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/content';
import ProjectNav from '@/components/project/ProjectNav';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollReveal from '@/components/ScrollReveal';
import Contact from '@/components/Contact';
import CaseStudyFooter from '@/components/project/CaseStudyFooter';
import ScrollRevealInit from '@/components/ScrollRevealInit';
import LangWrapper from '@/components/project/LangWrapper';
import LangToggle from '@/components/project/LangToggle';
import FigmaVideoPlayer from '@/components/project/FigmaVideoPlayer';
import CardsCarousel from '@/components/project/CardsCarousel';
import HoldoHero from '@/components/project/holdo/HoldoHero';
import HoldoExecutiveSummary from '@/components/project/holdo/HoldoExecutiveSummary';
import HoldoChallengeSection from '@/components/project/holdo/HoldoChallengeSection';
import HoldoResearchSection from '@/components/project/holdo/HoldoResearchSection';
import HoldoInsightSection from '@/components/project/holdo/HoldoInsightSection';
import HoldoDecisionsSection from '@/components/project/holdo/HoldoDecisionsSection';
import HoldoExperienceSection from '@/components/project/holdo/HoldoExperienceSection';
import HoldoImpactSection from '@/components/project/holdo/HoldoImpactSection';
import HoldoReflectionsSection from '@/components/project/holdo/HoldoReflectionsSection';
import styles from './page.module.css';

const TITLE = 'Rediseño de la app móvil de inversión de Holdo | Gonzalo Chiavassa';
const DESCRIPTION =
  'Cómo diseñé el MVP nativo de Holdo cuando el 80% de los usuarios ya accedía desde el celular a una plataforma pensada solo para desktop: research, benchmark competitivo y un scope acotado a los dos flujos de mayor valor.';
const OG_IMAGE = '/assets/home/portada-caso-app-holdo.jpg';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: '/project/app-movil-holdo',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    url: '/project/app-movil-holdo',
    images: [
      {
        url: OG_IMAGE,
        width: 1250,
        height: 400,
        alt: 'Rediseño de la app móvil de inversión de Holdo — case study de Gonzalo Chiavassa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

function getHighlightIcon(iconType: string) {
    switch (iconType) {
        case 'users':
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            );
        case 'data':
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
                </svg>
            );
        case 'priority':
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                </svg>
            );
        case 'design':
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
            );
        case 'test':
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
            );
        case 'owner':
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
            );
        case 'trend':
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
            );
        case 'mobile':
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
            );
        case 'benchmark':
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
            );
        case 'eye':
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            );
        case 'scissors':
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="6" r="3" />
                    <circle cx="6" cy="18" r="3" />
                    <line x1="20" y1="4" x2="8.12" y2="15.88" />
                    <line x1="14.47" y1="14.48" x2="20" y2="20" />
                    <line x1="8.12" y1="8.12" x2="12" y2="12" />
                </svg>
            );
        case 'user-plus':
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <line x1="20" y1="8" x2="20" y2="14" />
                    <line x1="23" y1="11" x2="17" y2="11" />
                </svg>
            );
        default:
            return null;
    }
}

export default function ProjectPage() {
    const project = projects.find((p) => p.id === 'app-movil-holdo') as any;
    if (!project) return null;

    const projectIndex = projects.findIndex((p) => p.id === 'app-movil-holdo');
    const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
    const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

    // Custom highlights representing the timeline phases
    const highlights = [
        { title: 'Research', description: 'Definición de comportamiento del usuario analizando PostHog, Hotjar e historial.', icon: 'data' },
        { title: 'Ideación', description: 'Conceptualización y sketches de la interfaz orientada a flujos móviles prioritarios.', icon: 'users' },
        { title: 'Prototipo', description: 'Diseño de la interfaz nativa en Figma y prototipos de alta fidelidad.', icon: 'design' },
        { title: 'Iteración', description: 'Alineación de stakeholders y refinamiento de la propuesta de interfaz.', icon: 'priority' },
        { title: 'MVP', description: 'Definición del scope técnico acotado y pruebas Friends & Family.', icon: 'test' }
    ];

    const thumbnails: Record<string, string> = {
        'agilidad-inspiracional': '/assets/projects/moda.jpg',
        'app-movil-holdo': '/assets/home/portada-caso-app-holdo.jpg',
        'reduciendo-drop-off-onboarding': '/assets/home/portada-caso-holdo-ladrillo-light.jpg',
        'club-fidelizacion-referidos': '',
    };

    const projectSnapshot = [
        { label: 'Empresa', value: 'Holdo' },
        { label: 'Rol', value: 'Product Designer' },
        { label: 'Industria', value: 'Fintech' },
        { label: 'Usuarios', value: 'Inversores particulares' },
        { label: 'Proyecto', value: 'Rediseño Desktop → Mobile' },
        { label: 'Estado', value: 'Lanzado' },
    ];

    return (
        <LangWrapper storageKey="holdo-app-lang">
            <ScrollToTop />
            <ScrollRevealInit />

            {/* TOP HEADER */}
            <header className={styles.topHeader}>
                <div className={styles.headerContainer}>
                    <Link href="/" className={styles.brandContainer} aria-label="Volver al inicio">
                        <div className={styles.avatarWrapper}>
                            <Image
                                src="/profile.jpg"
                                alt="Gonzalo Chiavassa"
                                width={56}
                                height={56}
                                className={styles.avatar}
                                priority
                            />
                        </div>
                        <div className={styles.brand}>
                            <span className={styles.logo}>Gonzalo Chiavassa</span>
                            <span className={styles.role}>Product Designer</span>
                        </div>
                    </Link>
                    {/* Language Toggle */}
                    <LangToggle />
                </div>
            </header>

            {/* EXECUTIVE HERO SECTION */}
            <HoldoHero />

            {/* 00 / EXECUTIVE SUMMARY */}
            <HoldoExecutiveSummary />

            {/* 01 / EL RETO */}
            <HoldoChallengeSection />

            {/* 02 / COMPRENDER EL COMPORTAMIENTO DE LOS USUARIOS */}
            <HoldoResearchSection />

            {/* 03 / EL INSIGHT */}
            <HoldoInsightSection />

            {/* 04 / DECISIONES DE PRODUCTO */}
            <HoldoDecisionsSection />

            {/* 05 / DISEÑANDO LA EXPERIENCIA */}
            <HoldoExperienceSection />

            {/* 06 / IMPACTO */}
            <HoldoImpactSection />

            {/* 07 / REFLEXIONES */}
            <HoldoReflectionsSection />

            {/* CASE STUDY FOOTER */}
            <CaseStudyFooter />
        </LangWrapper>
    );
}

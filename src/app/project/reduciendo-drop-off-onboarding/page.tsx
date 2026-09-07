import type { Metadata } from 'next';
import SiteNav from '@/components/chat/SiteNav';
import ScrollToTop from '@/components/ScrollToTop';
import CaseStudyFooter from '@/components/project/CaseStudyFooter';
import OnboardingHero from '@/components/project/onboarding/OnboardingHero';
import OnboardingExecutiveSummary from '@/components/project/onboarding/OnboardingExecutiveSummary';
import OnboardingChallengeSection from '@/components/project/onboarding/OnboardingChallengeSection';
import OnboardingResearchSection from '@/components/project/onboarding/OnboardingResearchSection';
import OnboardingDiscoverySection from '@/components/project/onboarding/OnboardingDiscoverySection';
import OnboardingDecisionsSection from '@/components/project/onboarding/OnboardingDecisionsSection';
import OnboardingExperienceSection from '@/components/project/onboarding/OnboardingExperienceSection';
import OnboardingImpactSection from '@/components/project/onboarding/OnboardingImpactSection';
import OnboardingReflectionsSection from '@/components/project/onboarding/OnboardingReflectionsSection';

const TITLE = 'Rediseño del onboarding de inversión en Holdo | Gonzalo Chiavassa';
const DESCRIPTION =
  'Cómo identificamos el mayor punto de abandono del onboarding de Holdo (la propuesta de inversión) con PostHog y research cualitativo, y lo rediseñamos para que fuera comprensible sin perder rigor financiero.';
const OG_IMAGE = '/assets/home/portada-caso-holdo-ladrillo-light.jpg';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: '/project/reduciendo-drop-off-onboarding',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    url: '/project/reduciendo-drop-off-onboarding',
    images: [
      {
        url: OG_IMAGE,
        width: 1250,
        height: 400,
        alt: 'Rediseño del onboarding de inversión de Holdo — case study de Gonzalo Chiavassa',
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

export default function ProjectPage() {
  return (
    <>
      <ScrollToTop />

      <SiteNav />

      {/* 00 / HERO */}
      <OnboardingHero />

      {/* 00 / EXECUTIVE SUMMARY */}
      <OnboardingExecutiveSummary />

      {/* 01 / EL DESAFÍO */}
      <OnboardingChallengeSection />

      {/* 02 / COMPRENDER EL COMPORTAMIENTO */}
      <OnboardingResearchSection />

      {/* 03 / EL DESCUBRIMIENTO */}
      <OnboardingDiscoverySection />

      {/* 04 / PRINCIPIOS DE DISEÑO */}
      <OnboardingDecisionsSection />

      {/* 05 / EL REDISEÑO */}
      <OnboardingExperienceSection />

      {/* 06 / IMPACTO */}
      <OnboardingImpactSection />

      {/* 07 / REFLEXIÓN */}
      <OnboardingReflectionsSection />

      {/* CASE STUDY FOOTER */}
      <CaseStudyFooter />
    </>
  );
}

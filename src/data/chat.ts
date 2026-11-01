import { landingProjects } from './content';
import type { Lang } from '@/components/project/LangWrapper';

export interface ChatProjectCard {
  id: string;
  title: string;
  subtitle: string;
  thumbnail?: string;
}

export interface ChatSuggestion {
  /** Topic id the engine answers when the suggestion is clicked. */
  id: string;
  /** Shown on the button and posted as the user's turn. */
  label: string;
}

export interface ChatAnswer {
  text: string;
  linkLabel?: string;
  linkHref?: string;
  links?: { label: string; href: string }[];
  projects?: ChatProjectCard[];
  /** Renders a button that opens the CV as an in-page modal, alongside any linkHref/links. */
  openResume?: boolean;
  /** Contextual follow-ups shown under the latest assistant message. */
  suggestions?: ChatSuggestion[];
}

export const resumePath = '/cv/Gonzalo Chiavassa, Product Designer - CV.pdf';

const LATEST_PROJECT_IDS = ['disenar-en-codigo', 'reduciendo-drop-off-onboarding', 'app-movil-holdo'];

// The shared project data (content.ts) is in Spanish and also feeds the
// (Spanish) /proyectos page, so we keep English-only overrides local to
// this chat view instead of translating the shared copy.
const EN_COPY: Record<string, { title: string; subtitle: string }> = {
  'disenar-en-codigo': {
    title: 'Designing product directly in code.',
    subtitle: "Some call it \"Direct Design,\" \"AI First,\" or just \"Vibe coding.\"",
  },
  'reduciendo-drop-off-onboarding': {
    title: 'Making a financial process built for experts accessible.',
    subtitle: 'Reducing the complexity of the investment proposal to boost conversion.',
  },
  'app-movil-holdo': {
    title: 'Redesigning an investment experience for mobile.',
    subtitle: 'Mobile app MVP',
  },
};

function buildLatestProjects(lang: Lang): ChatProjectCard[] {
  return LATEST_PROJECT_IDS
    .map((id) => landingProjects.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .map((p) => ({
      id: p.id,
      title: lang === 'en' ? (EN_COPY[p.id]?.title ?? p.title) : p.title,
      subtitle: lang === 'en' ? (EN_COPY[p.id]?.subtitle ?? p.subtitle) : p.subtitle,
      thumbnail: 'thumbnail' in p ? p.thumbnail : undefined,
    }));
}

export const latestProjectsByLang: Record<Lang, ChatProjectCard[]> = {
  en: buildLatestProjects('en'),
  es: buildLatestProjects('es'),
};

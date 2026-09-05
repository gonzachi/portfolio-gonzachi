import { personalInfo, landingProjects, landingExperiences } from './content';

export interface ChatProjectCard {
  id: string;
  title: string;
  subtitle: string;
  thumbnail?: string;
}

export interface ChatAnswer {
  text: string;
  linkLabel?: string;
  linkHref?: string;
  projects?: ChatProjectCard[];
}

export interface ChatPrompt {
  id: string;
  label: string;
  answer: ChatAnswer;
}

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

const latestProjects: ChatProjectCard[] = LATEST_PROJECT_IDS
  .map((id) => landingProjects.find((p) => p.id === id))
  .filter((p): p is NonNullable<typeof p> => Boolean(p))
  .map((p) => ({
    id: p.id,
    title: EN_COPY[p.id]?.title ?? p.title,
    subtitle: EN_COPY[p.id]?.subtitle ?? p.subtitle,
    thumbnail: 'thumbnail' in p ? p.thumbnail : undefined,
  }));

const currentRole = landingExperiences[0];

export const chatPrompts: ChatPrompt[] = [
  {
    id: 'proyectos',
    label: 'My latest projects',
    answer: {
      text: "Here are some of the projects I've been working on lately:",
      linkLabel: 'See all projects',
      linkHref: '/proyectos',
      projects: latestProjects,
    },
  },
  {
    id: 'quien-sos',
    label: 'Who are you?',
    answer: {
      text: "I'm Gonzalo Chiavassa, a Product Designer with an ownership mindset and an end-to-end product vision. I have over 8 years of experience, currently building corporate products focused on improving internal teams' productivity.",
      linkLabel: 'Learn more on my profile',
      linkHref: '/perfil',
    },
  },
  {
    id: 'experiencia',
    label: "What's your experience?",
    answer: {
      text: `I have over 8 years of experience in product design. I'm currently ${currentRole.role} at ${currentRole.company}.`,
      linkLabel: 'See my full journey',
      linkHref: '/perfil#experiencia',
    },
  },
  {
    id: 'contacto',
    label: 'How can I reach you?',
    answer: {
      text: `You can email me directly at ${personalInfo.email}, or find me on LinkedIn and Behance.`,
      linkLabel: 'Send an email',
      linkHref: `mailto:${personalInfo.email}`,
    },
  },
];

export const chatFallback: ChatAnswer = {
  text: `Thanks for the question! This is an interactive demo, not a real AI chat, so I can't answer just anything. For more information, email me directly at ${personalInfo.email}.`,
  linkLabel: 'Send an email',
  linkHref: `mailto:${personalInfo.email}`,
};

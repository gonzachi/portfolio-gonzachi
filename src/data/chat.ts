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
  links?: { label: string; href: string }[];
  projects?: ChatProjectCard[];
  /** Follow-up button shown under the message — clicking it posts `userLabel`
   *  as a new user turn and answers it with `answer`. */
  cta?: { label: string; userLabel: string; answer: ChatAnswer };
  /** Renders a button that opens the CV as an in-page modal, alongside any linkHref/links. */
  openResume?: boolean;
}

export const resumePath = '/cv/Gonzalo Chiavassa, Product Designer - CV.pdf';

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

export const latestProjects: ChatProjectCard[] = LATEST_PROJECT_IDS
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
    id: 'ai-workflow',
    label: 'How do you use AI in your work?',
    answer: {
      text: "I use AI strategically to speed up prototyping, validate hypotheses and iterate faster. It's changed my process so much that I now design product directly in code instead of stopping at Figma.",
      linkLabel: 'See how I design in code',
      linkHref: '/project/disenar-en-codigo',
    },
  },
  {
    id: 'ubicacion',
    label: 'Where are you based?',
    answer: {
      text: "I'm from Córdoba, Argentina, and I've been living in Barcelona for the past 2 years.",
      linkLabel: 'More about me',
      linkHref: '/perfil',
    },
  },
  {
    id: 'ahora',
    label: 'What are you working on right now?',
    answer: {
      text: "Right now at Mango I'm building a team-orchestration platform, replacing manual, spreadsheet-and-email-driven journey content processes with a proper internal tool, built with an AI-first approach.",
      linkLabel: 'See the case study',
      linkHref: '/project/orquestadora-de-equipos',
    },
  },
  {
    id: 'resume',
    label: 'Can I see your resume?',
    answer: {
      text: "Sure, here's my resume — you can preview it right here or download the PDF.",
      linkLabel: 'Download PDF',
      linkHref: resumePath,
      openResume: true,
    },
  },
  {
    id: 'contacto',
    label: 'How can I reach you?',
    answer: {
      text: `You can email me directly at ${personalInfo.email}, or find me on LinkedIn and Behance.`,
      links: [
        { label: 'Send an email', href: `mailto:${personalInfo.email}` },
        { label: 'LinkedIn', href: personalInfo.linkedin },
        { label: 'Behance', href: personalInfo.behance },
      ],
    },
  },
];

export const chatFallback: ChatAnswer = {
  text: `Thanks for the question! This is an interactive demo, not a real AI chat, so I can't answer just anything. For more information, email me directly at ${personalInfo.email}.`,
  linkLabel: 'Send an email',
  linkHref: `mailto:${personalInfo.email}`,
};

export const chatGreeting: ChatAnswer = {
  text: `Hola, ${personalInfo.landingBio[0]}`,
  cta: {
    label: '¿Quieres saber más?',
    userLabel: 'Sí, quiero saber más',
    answer: {
      text: 'A lo largo de mi carrera profesional he trabajado en contextos muy distintos: fintech (startup regulada en Chile), agencias, freelance y ahora corporate. De cada uno me llevo algo, pero el hilo común siempre fue el mismo: entender qué necesita el usuario, qué necesita el negocio, y construir el producto que conecta ambas cosas.\n\nA continuación te comparto una serie de trabajos en los que me he involucrado.',
      projects: latestProjects,
    },
  },
};

export const chatNoMatch: ChatAnswer = {
  text: `Sorry, I'm not an LLM — I don't have that in my memory. You can get more information by reaching out at ${personalInfo.email}.`,
  linkLabel: 'Send an email',
  linkHref: `mailto:${personalInfo.email}`,
};

// Used when semantic search decides the person wants a browsable overview
// of the work ("what projects have you worked on?") rather than an answer
// about one specific thing — same shape, and same project list, as the
// "My latest projects" chip above.
export const chatProjectsOverview: ChatAnswer = {
  text: "Here are some of the projects I've been working on lately:",
  linkLabel: 'See all projects',
  linkHref: '/proyectos',
  projects: latestProjects,
};

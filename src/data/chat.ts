import { personalInfo, landingProjects, landingExperiences } from './content';
import type { Lang } from '@/components/project/LangWrapper';

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

const currentRole = landingExperiences[0];

const chatPromptsEn: ChatPrompt[] = [
  {
    id: 'proyectos',
    label: 'My latest projects',
    answer: {
      text: "Here are some of the projects I've been working on lately:",
      linkLabel: 'See all projects',
      linkHref: '/proyectos',
      projects: latestProjectsByLang.en,
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

const chatPromptsEs: ChatPrompt[] = [
  {
    id: 'proyectos',
    label: 'Mis últimos proyectos',
    answer: {
      text: 'Estos son algunos de los proyectos en los que estuve trabajando últimamente:',
      linkLabel: 'Ver todos los proyectos',
      linkHref: '/proyectos',
      projects: latestProjectsByLang.es,
    },
  },
  {
    id: 'quien-sos',
    label: '¿Quién sos?',
    answer: {
      text: 'Soy Gonzalo Chiavassa, Product Designer con mentalidad de ownership y visión de producto end-to-end. Tengo más de 8 años de experiencia y actualmente construyo productos corporativos enfocados en mejorar la productividad de los equipos internos.',
      linkLabel: 'Conocé más en mi perfil',
      linkHref: '/perfil',
    },
  },
  {
    id: 'experiencia',
    label: '¿Cuál es tu experiencia?',
    answer: {
      text: `Tengo más de 8 años de experiencia en product design. Actualmente soy ${currentRole.role} en ${currentRole.company}.`,
      linkLabel: 'Ver toda mi trayectoria',
      linkHref: '/perfil#experiencia',
    },
  },
  {
    id: 'ai-workflow',
    label: '¿Cómo usás la IA en tu trabajo?',
    answer: {
      text: 'Uso la IA de forma estratégica para acelerar el prototipado, validar hipótesis e iterar más rápido. Cambió tanto mi proceso que ahora diseño producto directamente en código en lugar de quedarme en Figma.',
      linkLabel: 'Mirá cómo diseño en código',
      linkHref: '/project/disenar-en-codigo',
    },
  },
  {
    id: 'ubicacion',
    label: '¿Dónde vivís?',
    answer: {
      text: 'Soy de Córdoba, Argentina, y vivo en Barcelona hace 2 años.',
      linkLabel: 'Más sobre mí',
      linkHref: '/perfil',
    },
  },
  {
    id: 'ahora',
    label: '¿En qué estás trabajando ahora?',
    answer: {
      text: 'Ahora mismo en Mango estoy construyendo una plataforma de orquestación de equipos, reemplazando procesos manuales basados en planillas y emails por una herramienta interna real, construida con un enfoque AI-first.',
      linkLabel: 'Ver el caso de estudio',
      linkHref: '/project/orquestadora-de-equipos',
    },
  },
  {
    id: 'resume',
    label: '¿Puedo ver tu CV?',
    answer: {
      text: 'Claro, acá está mi CV — podés previsualizarlo acá mismo o descargar el PDF.',
      linkLabel: 'Descargar PDF',
      linkHref: resumePath,
      openResume: true,
    },
  },
  {
    id: 'contacto',
    label: '¿Cómo puedo contactarte?',
    answer: {
      text: `Podés escribirme directamente a ${personalInfo.email}, o encontrarme en LinkedIn y Behance.`,
      links: [
        { label: 'Enviar un email', href: `mailto:${personalInfo.email}` },
        { label: 'LinkedIn', href: personalInfo.linkedin },
        { label: 'Behance', href: personalInfo.behance },
      ],
    },
  },
];

export const chatPromptsByLang: Record<Lang, ChatPrompt[]> = {
  en: chatPromptsEn,
  es: chatPromptsEs,
};

export const chatFallbackByLang: Record<Lang, ChatAnswer> = {
  en: {
    text: `Thanks for the question! This is an interactive demo, not a real AI chat, so I can't answer just anything. For more information, email me directly at ${personalInfo.email}.`,
    linkLabel: 'Send an email',
    linkHref: `mailto:${personalInfo.email}`,
  },
  es: {
    text: `¡Gracias por la pregunta! Esto es una demo interactiva, no un chat de IA real, así que no puedo responder cualquier cosa. Para más información, escribime directamente a ${personalInfo.email}.`,
    linkLabel: 'Enviar un email',
    linkHref: `mailto:${personalInfo.email}`,
  },
};

export const chatGreetingByLang: Record<Lang, ChatAnswer> = {
  en: {
    text: `Hi, I'm Gonzalo Chiavassa, a Product Designer with an ownership mindset and an end-to-end product vision. I have over 8 years of experience, currently building corporate products focused on improving internal teams' productivity.`,
    cta: {
      label: 'Want to know more?',
      userLabel: 'Yes, I want to know more',
      answer: {
        text: "Throughout my career I've worked in very different contexts: fintech (a regulated startup in Chile), agencies, freelance, and now corporate. I take something from each of them, but the common thread has always been the same: understanding what the user needs, what the business needs, and building the product that connects both.\n\nHere's a selection of the work I've been involved in.",
        projects: latestProjectsByLang.en,
      },
    },
  },
  es: {
    text: `Hola, ${personalInfo.landingBio[0]}`,
    cta: {
      label: '¿Quieres saber más?',
      userLabel: 'Sí, quiero saber más',
      answer: {
        text: 'A lo largo de mi carrera profesional he trabajado en contextos muy distintos: fintech (startup regulada en Chile), agencias, freelance y ahora corporate. De cada uno me llevo algo, pero el hilo común siempre fue el mismo: entender qué necesita el usuario, qué necesita el negocio, y construir el producto que conecta ambas cosas.\n\nA continuación te comparto una serie de trabajos en los que me he involucrado.',
        projects: latestProjectsByLang.es,
      },
    },
  },
};

export const chatNoMatchByLang: Record<Lang, ChatAnswer> = {
  en: {
    text: `Sorry, I'm not an LLM — I don't have that in my memory. You can get more information by reaching out at ${personalInfo.email}.`,
    linkLabel: 'Send an email',
    linkHref: `mailto:${personalInfo.email}`,
  },
  es: {
    text: `Perdón, no soy un LLM — no tengo eso en mi memoria. Podés conseguir más información escribiéndome a ${personalInfo.email}.`,
    linkLabel: 'Enviar un email',
    linkHref: `mailto:${personalInfo.email}`,
  },
};

// Used when semantic search decides the person wants a browsable overview
// of the work ("what projects have you worked on?") rather than an answer
// about one specific thing — same shape, and same project list, as the
// "My latest projects" chip above. The underlying search runs on
// English-only embeddings, so this pseudo-chunk match only ever fires for
// English queries — but we key it by lang anyway so it renders correctly
// if the visitor has since switched the UI language.
export const chatProjectsOverviewByLang: Record<Lang, ChatAnswer> = {
  en: {
    text: "Here are some of the projects I've been working on lately:",
    linkLabel: 'See all projects',
    linkHref: '/proyectos',
    projects: latestProjectsByLang.en,
  },
  es: {
    text: 'Estos son algunos de los proyectos en los que estuve trabajando últimamente:',
    linkLabel: 'Ver todos los proyectos',
    linkHref: '/proyectos',
    projects: latestProjectsByLang.es,
  },
};

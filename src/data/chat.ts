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

const latestProjects: ChatProjectCard[] = LATEST_PROJECT_IDS
  .map((id) => landingProjects.find((p) => p.id === id))
  .filter((p): p is NonNullable<typeof p> => Boolean(p))
  .map((p) => ({
    id: p.id,
    title: p.title,
    subtitle: p.subtitle,
    thumbnail: 'thumbnail' in p ? p.thumbnail : undefined,
  }));

const currentRole = landingExperiences[0];

export const chatPrompts: ChatPrompt[] = [
  {
    id: 'proyectos',
    label: 'Mis últimos proyectos',
    answer: {
      text: 'Estos son algunos de los proyectos en los que estuve trabajando últimamente:',
      linkLabel: 'Ver todos los proyectos',
      linkHref: '/proyectos',
      projects: latestProjects,
    },
  },
  {
    id: 'quien-sos',
    label: '¿Quién sos?',
    answer: {
      text: personalInfo.landingBio[0],
      linkLabel: 'Conocé más en mi perfil',
      linkHref: '/perfil',
    },
  },
  {
    id: 'experiencia',
    label: '¿Cuál es tu experiencia?',
    answer: {
      text: `Tengo más de 8 años de experiencia en diseño de producto. Actualmente soy ${currentRole.role} en ${currentRole.company}.`,
      linkLabel: 'Ver toda mi trayectoria',
      linkHref: '/perfil#experiencia',
    },
  },
  {
    id: 'contacto',
    label: '¿Cómo te contacto?',
    answer: {
      text: `Podés escribirme directamente a ${personalInfo.email}, o encontrarme en LinkedIn y Behance.`,
      linkLabel: 'Escribir un email',
      linkHref: `mailto:${personalInfo.email}`,
    },
  },
];

export const chatFallback: ChatAnswer = {
  text: `¡Gracias por tu pregunta! Esto es una demo interactiva, no un chat con IA real, así que no puedo responder cualquier cosa. Para más información, escribime directamente a ${personalInfo.email}.`,
  linkLabel: 'Escribir un email',
  linkHref: `mailto:${personalInfo.email}`,
};

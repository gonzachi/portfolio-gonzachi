import 'server-only';

export const orquestadoraDeEquiposProtected = {
  discovery: {
    title: "Discovery inicial",
    description: [
      "Llevamos a cabo un discovery profundo mapeando los flujos de más de 5 equipos internos que participaban en la ideación, creación y distribución de contenido para journeys de clientes.",
      "Detectamos que la información vivía fragmentada en hojas de cálculo, hilos de correo electrónico y herramientas aisladas. Cada equipo utilizaba criterios y formatos propios, lo que provocaba cuellos de botella y trabajo duplicado.",
      "Entrevistamos a los referentes de cada área para definir los requisitos del MVP: necesitábamos una plataforma centralizada que funcionara como orquestador, permitiendo idear, construir y validar journeys de punta a punta antes de escalar a campañas."
    ],
    images: []
  },
  problem: {
    title: "Principales desafíos",
    statement: "5 equipos trabajando en silos con procesos manuales y burocracia.",
    description: [
      "El principal reto no era solo técnico, sino operacional y cultural: unificar criterios entre más de 5 equipos con diferentes dinámicas de trabajo sin generar overhead burocrático.",
      "Para lograrlo, planteamos un modelo de equipo extremadamente reducido por diseño: un referente de producto a cargo del liderazgo y del frontend mediante vibe coding con IA, un desarrollador backend y la integración con las APIs que los equipos ya utilizaban en sus plataformas existentes."
    ]
  },
  solutionText: [
    "Diseñamos y construimos una plataforma interna que actúa como la capa orquestadora de contenido y journeys.",
    "Mediante un enfoque conversacional y visual alimentado por IA, los usuarios de los distintos equipos pueden idear estructuras de comunicación, parametrizar reglas de negocio y generar contenido alineado a las guías de marca.",
    "El frontend fue construido de manera ágil iterando directamente con IA (vibe coding), lo que nos permitió validar hipótesis de interfaz y flujos con usuarios reales en tiempo récord."
  ],
  challengesText: [
    "Coordinar e integrar APIs de más de 5 plataformas existentes sin interrumpir la operación diaria de los equipos.",
    "Mantener la disciplina de un equipo ultra reducido: evitar el scope creep y resistir la tentación de sumar overhead cuando la tentación habitual es crear estructuras complejas.",
    "Demonstrar que el desarrollo impulsado por IA (vibe coding) permite entregar software de calidad corporativa con una fracción del tiempo y los recursos tradicionales."
  ],
  resultsReveal: {
    title: "Impacto principal",
    stats: [
      { highlight: "+5", detail: "equipos internos unificados en una sola plataforma", icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm8 4v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" },
      { highlight: "-80%", detail: "reducción en tiempos de ideación y orquestación de journeys", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
      { highlight: "100%", detail: "desarrollo de frontend impulsado por AI First / Vibe Coding", icon: "M13 10V3L4 14h7v7l9-11h-7z" }
    ],
    paragraphsBefore: [
      "El proyecto demostró que es posible cuestionar cómo se construye producto dentro de una corporación: menos recursos, más autonomía e IA como palanca real de ejecución.",
      "La adopción inicial por parte de los equipos piloto confirmó la drástica reducción de la fricción operativa al crear e iterar contenido."
    ],
    paragraphsAfter: [
      "La plataforma continúa evolucionando con visión de escalar la orquestación de journeys simples hacia campañas multicanal completas."
    ],
    footerText: "Métricas validadas con el equipo de producto y backend a partir de los tiempos de preparación e integración de campañas.",
    footerTextShort: "Mapeo de flujos · Telemetría interna · Pruebas con equipos"
  },
  description: [
    "Me propusieron liderar un proyecto desafiante: <b>unificar criterios entre más de 5 equipos para construir una plataforma interna que orqueste la ideación y creación de contenido de journeys</b>, con visión de escalar a campañas.",
    "El equipo era reducido por diseño: yo como referente de producto y desarrollador del frontend mediante vibe coding con IA, un desarrollador backend, y distintos equipos proveyendo las APIs de las plataformas que ya usaban. Sin overhead, sin burocracia.",
    "Un proyecto que cuestiona cómo se construye producto hoy: menos recursos, más autonomía, IA como palanca real de ejecución."
  ],
  contextImage: "",
  roleDescription: [
    "En este proyecto asumí un rol híbrido de alto impacto (Product Owner + Developer Frontend AI First):"
  ],
  highlights: [
    {
      icon: "owner",
      title: "Product Ownership",
      description: "Liderazgo de producto, definición de roadmap y alineación de visión estratégica entre más de 5 equipos corporativos."
    },
    {
      icon: "design",
      title: "UX/UI Design",
      description: "Diseño de la arquitectura de información, flujos de trabajo y prototipado visual de la plataforma orquestadora."
    },
    {
      icon: "priority",
      title: "Vibe Coding / Frontend Dev",
      description: "Desarrollo y construcción directa del frontend utilizando Inteligencia Artificial para acelerar la entrega de software."
    },
    {
      icon: "users",
      title: "Discovery inter-equipos",
      description: "Facilitación de sesiones con referentes de cada área para mapear necesidades y consensuar las APIs requeridas."
    },
    {
      icon: "data",
      title: "Integración de APIs",
      description: "Coordinación técnica con los equipos proveedores de datos para conectar los microservicios existentes."
    },
    {
      icon: "test",
      title: "Validación & Iteración",
      description: "Pruebas de usuario e iteraciones continuas con los equipos operativos para optimizar la experiencia."
    }
  ],
  storySteps: [
    {
      number: "Decisión 1",
      title: "Vibe coding con IA para el frontend en lugar de un equipo dev convencional",
      description: "En lugar de esperar la asignación de una célula de desarrollo completa con múltiples frontends, asumí el desarrollo del frontend utilizando vibe coding e IA. Esto eliminó tiempos de handoff y permitió iterar las pantallas en vivo durante las sesiones con los equipos.",
      illustrationTitle: "Velocidad de ejecución",
      illustrationText: "Menos burocracia, prototipado funcional en tiempo real."
    },
    {
      number: "Decisión 2",
      title: "Arquitectura basada en APIs desacopladas de sistemas existentes",
      description: "Decidimos no construir un monolito ni rehacer las herramientas que los equipos ya usaban. La orquestadora consume las APIs existentes como microservicios, actuando como una capa inteligente de unión.",
      illustrationTitle: "Integración sin fricción",
      illustrationText: "Aprovechar la infraestructura actual sin forzar migraciones masivas."
    },
    {
      number: "Decisión 3",
      title: "Evolución modular: de journeys acotados a campañas globales",
      description: "Para entregar valor rápido sin empantanarnos en un alcance infinito, acotamos el MVP a la orquestación de contenido para journeys específicos, sentando las bases para escalar posteriormente a campañas complejas.",
      illustrationTitle: "Enfoque progresivo",
      illustrationText: "Validar valor en el MVP antes de expandir el scope."
    }
  ],
  results: {
    intro: "El proyecto representa una nueva forma de construir software en entornos corporativos.",
    cards: [
      { icon: "🚀", label: "Eficiencia", title: "Lanzamiento ágil", description: "Desarrollo del frontend y prototipos funcionales en semanas mediante AI First." },
      { icon: "🤝", label: "Alineación", title: "+5 Equipos coordinados", description: "Unificación de criterios de contenido en una interfaz centralizada." },
      { icon: "💡", label: "Metodología", title: "Ownership real", description: "Demostración práctica de cómo la IA empodera al diseñador de producto para construir soluciones end-to-end." }
    ]
  },
  images: [],
  team: "1 Product Owner / Front · 1 Backend · APIs de +5 equipos",
  tools: ["Figma", "Next.js", "AI First", "Miro"],
  closing: {
    title: "El cierre",
    timeline: "2026 → presente",
    extra: "Desarrollado con mentalidad AI First y Vibe Coding para potenciar la productividad."
  },
  showcaseTitle: "Plataforma orquestadora de equipos para Mango",
  heroImage: "/assets/projects/moda.jpg"
};

// English translation of the same (already externally-shareable) case
// study copy above — kept alongside it rather than in a separate file so
// the two stay easy to compare and keep in sync.
export const orquestadoraDeEquiposProtectedEn = {
  title: "Team-orchestration platform",
  discovery: {
    title: "Initial discovery",
    description: [
      "We ran a deep discovery process, mapping the workflows of more than 5 internal teams involved in ideating, creating and distributing content for customer journeys.",
      "We found that information lived scattered across spreadsheets, email threads and disconnected tools. Each team used its own criteria and formats, which created bottlenecks and duplicated work.",
      "We interviewed stakeholders from each area to define the MVP requirements: we needed a centralized platform that could act as an orchestrator, letting teams ideate, build and validate journeys end-to-end before scaling to full campaigns."
    ],
    images: []
  },
  problem: {
    title: "Main challenges",
    statement: "5 teams working in silos, with manual processes and bureaucracy.",
    description: [
      "The main challenge wasn't just technical — it was operational and cultural: aligning criteria across more than 5 teams with different working dynamics, without adding bureaucratic overhead.",
      "To pull it off, we designed a deliberately tiny team: a product lead handling both leadership and the frontend through AI-driven vibe coding, one backend developer, and integrations with the APIs the teams already used in their existing platforms."
    ]
  },
  solutionText: [
    "We designed and built an internal platform that acts as the orchestration layer for content and journeys.",
    "Through an AI-powered conversational and visual approach, users across the different teams can ideate communication structures, configure business rules, and generate content aligned with brand guidelines.",
    "The frontend was built by iterating directly with AI (vibe coding), which let us validate interface and flow hypotheses with real users in record time."
  ],
  challengesText: [
    "Coordinating and integrating APIs from more than 5 existing platforms without disrupting the teams' day-to-day operations.",
    "Keeping the discipline of an ultra-lean team: avoiding scope creep and resisting the usual temptation to add overhead by building complex structures.",
    "Demonstrating that AI-driven development (vibe coding) can deliver corporate-grade software in a fraction of the traditional time and resources."
  ],
  resultsReveal: {
    title: "Main impact",
    stats: [
      { highlight: "+5", detail: "internal teams unified on a single platform", icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm8 4v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" },
      { highlight: "-80%", detail: "reduction in journey ideation and orchestration time", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
      { highlight: "100%", detail: "of the frontend built with an AI First / Vibe Coding approach", icon: "M13 10V3L4 14h7v7l9-11h-7z" }
    ],
    paragraphsBefore: [
      "The project proved it's possible to rethink how product gets built inside a corporation: fewer resources, more autonomy, and AI as a real execution lever.",
      "Early adoption by the pilot teams confirmed a drastic drop in the operational friction of creating and iterating on content."
    ],
    paragraphsAfter: [
      "The platform keeps evolving, with the goal of scaling from orchestrating simple journeys to full multichannel campaigns."
    ],
    footerText: "Metrics validated with the product and backend teams based on campaign preparation and integration times.",
    footerTextShort: "Flow mapping · Internal telemetry · Team testing"
  },
  description: [
    "I was asked to lead a challenging project: <b>aligning criteria across more than 5 teams to build an internal platform that orchestrates the ideation and creation of journey content</b>, with an eye toward scaling to full campaigns.",
    "The team was small by design: me as the product lead and frontend developer through AI-driven vibe coding, one backend developer, and different teams providing the APIs for the platforms they already used. No overhead, no bureaucracy.",
    "A project that challenges how product gets built today: fewer resources, more autonomy, AI as a real execution lever."
  ],
  contextImage: "",
  roleDescription: [
    "On this project I took on a high-impact hybrid role (Product Owner + AI-First Frontend Developer):"
  ],
  highlights: [
    {
      icon: "owner",
      title: "Product Ownership",
      description: "Product leadership, roadmap definition, and aligning strategic vision across more than 5 corporate teams."
    },
    {
      icon: "design",
      title: "UX/UI Design",
      description: "Designing the information architecture, workflows, and visual prototyping of the orchestration platform."
    },
    {
      icon: "priority",
      title: "Vibe Coding / Frontend Dev",
      description: "Building the frontend directly using AI to speed up software delivery."
    },
    {
      icon: "users",
      title: "Cross-team discovery",
      description: "Facilitating sessions with stakeholders from each area to map needs and agree on the required APIs."
    },
    {
      icon: "data",
      title: "API Integration",
      description: "Technical coordination with the data-providing teams to connect existing microservices."
    },
    {
      icon: "test",
      title: "Validation & Iteration",
      description: "User testing and continuous iteration with the operating teams to optimize the experience."
    }
  ],
  storySteps: [
    {
      number: "Decision 1",
      title: "AI-driven vibe coding for the frontend instead of a conventional dev team",
      description: "Instead of waiting for a full development squad with multiple frontend engineers to be assigned, I took on the frontend build myself using vibe coding and AI. This eliminated handoff time and let us iterate on screens live during sessions with the teams.",
      illustrationTitle: "Execution speed",
      illustrationText: "Less bureaucracy, real-time functional prototyping."
    },
    {
      number: "Decision 2",
      title: "An architecture built on APIs decoupled from existing systems",
      description: "We decided not to build a monolith or rebuild the tools teams already used. The orchestrator consumes existing APIs as microservices, acting as an intelligent connective layer.",
      illustrationTitle: "Frictionless integration",
      illustrationText: "Leveraging existing infrastructure without forcing massive migrations."
    },
    {
      number: "Decision 3",
      title: "Modular evolution: from scoped journeys to global campaigns",
      description: "To deliver value quickly without getting bogged down in unlimited scope, we limited the MVP to orchestrating content for specific journeys, laying the groundwork to later scale to full campaigns.",
      illustrationTitle: "A progressive approach",
      illustrationText: "Validating value in the MVP before expanding scope."
    }
  ],
  results: {
    intro: "The project represents a new way of building software in corporate environments.",
    cards: [
      { icon: "🚀", label: "Efficiency", title: "Agile launch", description: "Frontend development and working prototypes shipped in weeks with an AI First approach." },
      { icon: "🤝", label: "Alignment", title: "+5 teams coordinated", description: "Unified content criteria in a centralized interface." },
      { icon: "💡", label: "Methodology", title: "Real ownership", description: "A practical demonstration of how AI empowers a product designer to build end-to-end solutions." }
    ]
  },
  images: [],
  team: "1 Product Owner / Frontend · 1 Backend · APIs from 5+ teams",
  tools: ["Figma", "Next.js", "AI First", "Miro"],
  closing: {
    title: "The wrap-up",
    timeline: "2026 → present",
    extra: "Built with an AI First, Vibe Coding mindset to boost productivity."
  },
  showcaseTitle: "Team-orchestration platform for Mango",
  heroImage: "/assets/projects/moda.jpg"
};

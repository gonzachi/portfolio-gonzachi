export const personalInfo = {
  name: "Gonzalo Chiavassa",
  roles: ["Product Designer", "Product Maker (AI First)", "Ownership Mindset", "Product Manager"],
  bio: [
    {
      text: "¡Qué bueno que quieras conocerme más! Te cuento, mi formación ha comenzado con el Diseño Gráfico, y luego fue mutando. Hace poco he terminado mi Máster en Digital Product Management, algo que me entusiasma mucho para ir ganando cada más relevancia en la toma de decisiones de un producto digital.",
      bold: []
    },
    {
      text: "Esto va cambiando muy rápido, pero soy de los que utiliza la IA de forma estratégica para acelerar pruebas de concepto, validar hipótesis y mejorar productos de forma continua. Creo que la IA es un aliado estratégico para probar, equivocarse y mejorar rápido y barato.",
      bold: []
    },
    {
      text: "A su vez, gracias a la inteligencia artificial, encontré una puerta para probar procesos, flujos y formas de trabajar nuevos, gracias a esto estoy incorporando conocimientos de desarrollo que antes para mi eran desconocidos. Hoy entiendo de Github, algo por arriba de Next.js, de conceptos como PR, commit e incluso clonar un repo y crear una nueva rama para hacer mejoras.",
      bold: []
    },
    {
      text: "No quisiera tener que encasillarme en un único rubro ni en un único tipo de empresa. Me gusta tener autonomía, tener toma de decisión. Me estoy formando en inglés para mejorar mi comunicación. De la mano con esto, me estoy formando en habilidades blandas, para poder comunicarme efectivamente.",
      bold: []
    },
    {
      text: "Soy de Córdoba, Argentina. Vivo hace 2 años en Barcelona. Me gusta la naturaleza, siempre me parece un planazo. Me gusta el running, me estoy entrenando para la media maratón de Barcelona. Me gusta cocinar, asados, mate y medialunas. Y también soy un argentino que no le gusta el fútbol.",
      bold: []
    },
    {
      text: "Será un placer conocernos más.",
      bold: []
    }
  ],
  landingBio: [
    "Soy Gonzalo Chiavassa, Product Designer con mindset de ownership. Me gusta resolver problemas end-to-end, y en estos tiempos que corren, la IA me está abriendo muchas puertas.",
    "En coherencia con mis formaciones, actualmente busco evolucionar hacia el rol de Product Manager, aplicando mi capacidad para conectar las necesidades del usuario con los objetivos técnicos y de negocio.",
    "Tengo más de 8 años de experiencia en diseño de producto y otros tantos en comunicación digital."
  ],
  heroBio: [
    "Soy Gonzalo Chiavassa, Product Designer con mindset de ownership y visión de producto end-to-end. <b>Actualmente trabajo en Mango</b>, construyendo productos corporativos orientados a <b>mejorar la productividad de los equipos internos</b>.",
    "A lo largo de mi carrera profesional he trabajado en contextos muy distintos: fintech (startup regulada en Chile), agencias, freelance y ahora corporate. De cada uno me llevo algo, pero el hilo común siempre fue el mismo: entender qué necesita el usuario, qué necesita el negocio, y <b>construir el producto que conecta ambas cosas</b>.",
    "A continuación te comparto una serie de trabajos en los que me he involucrado, otros side project y si quieres, al final te cuento más <a href=\"#sobre-mi\">sobre mi</a> y sobre mi experiencia."
  ],
  bioHighlights: [
    "mindset de ownership",
    "evolucionar hacia el rol de Product Manager",
    "más de 8 años de experiencia"
  ],
  email: "gonzalo.chiavassa@gmail.com",
  linkedin: "https://www.linkedin.com/in/gonzalochiavassa/",
  behance: "https://www.behance.net/gonzachi"
};

export const experiences = [
  {
    id: "mango",
    company: "Mango",
    logo: "/assets/home/logo-mango.jpg",
    location: "Presencial | Barcelona, España",
    role: "Product designer",
    period: "jun. 2024 - actualidad",
    description: "Diseño soluciones digitales innovadoras para los equipos internos de Mango, con un enfoque actual en el desarrollo de productos que integran Inteligencia Artificial, creando experiencias centradas en el usuario. Aporto valor en todas las etapas del diseño, desde el discovery con diferentes stakeholders hasta la realización de pruebas con usuarios, pasando por la etapa de handoff con el equipo de desarrollo, asegurando que cada solución sea efectiva y funcional."
  },
  {
    id: "holdo",
    company: "Holdo",
    logo: "/assets/home/logo-holdo.jpg",
    location: "Remoto | Santiago de Chile, Chile",
    role: "Product designer",
    period: "jun. 2022 - jun. 2024",
    description: "Me incorporé al equipo de esta startup (Robo-advisor) en pleno desarrollo. Aún en etapa de pre-lanzamiento, realizamos mejoras constantes y nuevos flujos de la plataforma de acuerdo a las necesidades de los usuarios y del negocio. Me encuentro en paralelo elaborando el flujo completo de la app mobile."
  },
  {
    id: "freelance",
    company: "gonzachi.com",
    logo: "/assets/home/gonzachi_com_logo.jpeg",
    location: "Freelance | Córdoba, Argentina",
    role: "Freelance UX/UI Designer",
    period: "ene. 2019 - actualidad",
    description: "Participé en diferentes proyectos, principalmente, como diseñador ui. Formando parte de las instancias de planning, según la metodología utilizada. Realicé entregas de soluciones end-to-end a clientes, planteando problema, solución y entregando un sitio web responsive en WordPress."
  },
  {
    id: "quo",
    company: "QUO Estrategia",
    logo: "/assets/home/quo_estrategia_y_comunicacin_logo.jpeg",
    location: "Presencial | Córdoba, Argentina",
    role: "Lead Graphic Design",
    period: "feb. 2016 - jul. 2022",
    description: "Comencé como diseñador gráfico y fui abriendo camino hasta llegar ser líder del área de diseño. En paralelo, conformé el área de UX/UI para brindar una nueva solución de negocio que necesitaban clientes actuales y nuevos."
  }
];

export interface TimelineStep {
  number: string;
  title: string;
  description: string;
  bullets?: string[];
  emoji?: string;
  illustrationLabel?: string;
  illustrationTitle?: string;
  illustrationText?: string;
}

export interface ProjectData {
  id: string;
  requiresAccess?: boolean;
  number: string;
  title: string;
  type: string;
  subtitle?: string;
  year?: string;
  role?: string;
  client?: string;
  badge?: string;
  roles?: string[];
  tools?: string[];
  timeline?: string[];
  metrics?: { value: string; label: string }[];
  roleDescription?: string;
  challenge?: string;
  team?: string;
  description: string[];
  startingPoint?: string[];
  storySteps?: TimelineStep[];
  decisions?: { title: string; description?: string };
  context?: {
    title: string;
    description: string[];
    milestones?: string[];
  };
  problem?: {
    title: string;
    statement?: string;
    description: string[];
  };
  findings?: string[];
  solutionText?: string[];
  challengesText?: string[];
  video?: string;
  images?: { src: string; alt: string; caption?: string }[];
  showcaseTitle?: string;
  resultsReveal?: {
    title: string;
    stats: { highlight: string; detail: string; icon?: string }[];
    closingText?: string;
    paragraphsBefore?: string[];
    paragraphsAfter?: string[];
    footerText?: string;
    footerTextShort?: string;
    showGrowthCurve?: boolean;
  };
  closing?: {
    title: string;
    message: string;
    timeline?: string;
    extra?: string;
  };
  heroImage?: string;
  isComingSoon?: boolean;
}

export const projects = [
  {
    id: "agilidad-inspiracional",
    requiresAccess: true,
    number: "",
    title: "Plataforma interna de generación de imágenes con IA",
    type: "Product Design · Mango · 2024",
    subtitle: "Plataforma interna de generación de imágenes con IA · Mango · Desde junio 2024",
    year: "2024",
    role: "Product Designer",
    client: "Mango",
    badge: "Más reciente ✨",
    roles: [],
    description: [],
  },
  {
    id: "orquestadora-de-equipos",
    requiresAccess: true,
    number: "",
    title: "Plataforma orquestadora de equipos",
    type: "Coming Soon",
    year: "2025",
    role: "Product Owner / Dev",
    client: "Interno",
    isComingSoon: true,
    roles: ["UX Designer", "UI Designer"],
    subtitle: "En construcción",
    description: [],
  },
  {
    id: "app-movil-holdo",
    number: "",
    title: "App móvil MVP",
    type: "Product Design",
    year: "2023",
    role: "Product Designer",
    client: "Holdo",
    roles: ["UX/UI Designer"],
    subtitle: "Diseñé la app mobile de una plataforma de inversión donde el 80% de los usuarios ya accedían desde el celular.",
    tools: ["Figma", "PostHog", "Clarity"],
    timeline: ["Research", "Ideación", "Prototipo", "Iteración", "MVP"],
    metrics: [
      { value: "80%", label: "usuarios acceden desde mobile" },
      { value: "MVP", label: "lanzado como friends & family" },
      { value: "3", label: "flujos principales" }
    ],
    roleDescription: "Diseñé el flujo completo de la app mobile: desde acceso, consulta de cuentas hasta inversión. Participé en múltiples iteraciones con el equipo de producto.",
    challenge: "La plataforma responsive no estaba optimizada para mobile. Necesitábamos crear un nuevo canal nativo que entregara una experiencia robusta sin replicar toda la plataforma desktop.",
    team: "Product Designer · Product Manager · 2 Frontend · Backend",
    description: [
      "Holdo es una fintech chilena regulada por la CMF. Su plataforma de inversión nació como producto desktop, pero el 80% de los usuarios accedía desde el móvil. La experiencia no estaba pensada para ese contexto, y la decisión fue construir una app nativa que superara lo que ofrecían competidores tradicionales como los bancos.",
      "Como Product Designer, fui responsable del diseño completo de la app, trabajando directamente con el equipo de desarrollo. Participé en la definición del alcance del MVP junto al CEO, analizando datos de comportamiento en Hotjar, Analytics y Postlog para proponer qué funcionalidades priorizar y qué dejar fuera. También realicé un benchmark competitivo del mercado fintech chileno y regional para informar las decisiones de diseño.",
      "El MVP se enfocó en dos flujos: consulta de portafolio — la acción más frecuente según los datos — y depósito de fondos, una prioridad de negocio para reducir la fricción a la hora de invertir. Funcionalidades como creación de cuenta de usuario, creación de cuenta de inversión o rebalanceos quedaron fuera deliberadamente, disponibles solo en la web.",
      "La mayoría de los usuarios con cuenta se descargaron la app y comenzaron a usarla activamente."
    ],
    context: {
      title: "Contexto — El comportamiento",
      description: [
        "Holdo es una fintech chilena regulada por la CMF. Su plataforma de inversión nació como producto desktop, pero a los pocos meses del lanzamiento los datos nos indicaban que el 80% de los usuarios accedían de forma recurrente a través de sus teléfonos móviles.",
        "La experiencia móvil adaptativa de la web era muy limitada y no estaba optimizada para ofrecer respuestas inmediatas en el contexto dinámico en el que se utiliza un teléfono inteligente."
      ]
    },
    problem: {
      title: "El problema",
      statement: "El 80% accede en mobile, pero la experiencia solo brilla en desktop.",
      description: [
        "Los usuarios querían inmediatez. Revisar su saldo del día, hacer depósitos rápidos o seguir sus metas no podía requerir abrir la computadora ni lidiar con un sitio web responsive lento y con sobrecarga de información.",
        "Necesitábamos diseñar un canal de comunicación y operación nativo, ligero pero robusto, que entregara una experiencia mobile a la altura del producto financiero."
      ]
    },
    findings: [
      "El análisis de comportamiento en Hotjar, Clarity y PostHog reveló que el 80% de las visitas provenían de dispositivos móviles, pero la experiencia mobile responsive actual presentaba altas tasas de abandono en el onboarding.",
      "Los usuarios demandaban inmediatez y facilidad para revisar sus saldos y estados de cuenta en el día a día."
    ],
    solutionText: [
      "Diseñamos y lanzamos un MVP nativo mobile enfocado exclusivamente en los dos flujos de mayor volumen y valor de negocio: la consulta en tiempo real del portafolio de inversión y el depósito simplificado de fondos.",
      "Decidimos postergar las funcionalidades administrativas complejas (como creación de cuentas o rebalanceos) redirigiéndolas a la plataforma web para optimizar los tiempos de desarrollo."
    ],
    challengesText: [
      "Reducir el alcance del MVP fue una decisión difícil de alinear con todos los stakeholders, pero nos permitió salir al mercado en tiempo récord.",
      "Validar el uso 'friends & family' con datos reales de engagement demostró que los usuarios preferían una app rápida y enfocada antes que un clon móvil completo pero lento."
    ],
    video: "/assets/projects/app-holdo/app_mobile_1.mp4",
    images: [
      { src: "/assets/projects/app-holdo/Mask-group.png", alt: "App Mobile Screen 1", caption: "" },
      { src: "/assets/projects/app-holdo/Mask-group-1.png", alt: "App Mobile Screen 2", caption: "" },
      { src: "/assets/projects/app-holdo/Mask-group-2.png", alt: "App Mobile Screen 3", caption: "" },
      { src: "/assets/projects/app-holdo/Mask-group-3.png", alt: "App Mobile Screen 4", caption: "" }
    ],
    showcaseTitle: "App móvil MVP en holdo.cl",
    resultsReveal: {
      title: "Los números",
      stats: [
        { highlight: "Usuarios mobile.", detail: "80% de los accesos totales.", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
        { highlight: "Fase de pruebas.", detail: "Lanzado a Friends & Family.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
        { highlight: "MVP enfocado.", detail: "3 flujos clave de operación.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }
      ],
      closingText: "La mayoría de los usuarios activos descargaron la app móvil desde las primeras semanas de su publicación en beta cerrado.",
      footerText: "Métricas validadas a través del stack de analytics implementado: PostHog y Clarity para la navegación y feedback cualitativo en tiendas."
    },
    closing: {
      title: "El cierre",
      message: "Rediseñar un canal completo exige saber qué dejar fuera.\nEl minimalismo funcional aceleró el lanzamiento de la app móvil.",
      timeline: "Marzo 2023 → Septiembre 2023"
    },
    heroImage: "/assets/projects/app-holdo-1.png"
  },
  {
    id: "reduciendo-drop-off-onboarding",
    number: "",
    title: "Reduciendo el drop-off rate en la fase final del onboarding",
    type: "UX/UI Designer · Product Designer",
    year: "2023",
    role: "UX/UI & Product Designer",
    client: "Holdo",
    roles: ["UX/UI Designer", "Product Designer"],
    subtitle: "Reducir la complejidad de la propuesta de inversión para aumentar la conversión.",
    tools: ["Figma", "PostHog", "Clarity"],
    timeline: ["Análisis de datos", "Hipótesis", "Priorización", "Diseño", "QA"],
    roleDescription: "Lideré el análisis UX junto al equipo de finanzas para priorizar la información clave. Diseñé un estilo más narrativo y escaneable, y entregué el pitch al equipo de desarrollo.",
    challenge: "Los usuarios abandonaban el onboarding porque la información era abrumadora y confusa. Necesitábamos simplificar sin perder datos críticos para la decisión de inversión.",
    team: "UX/UI Designer · Product Manager · Research · Finanzas · Frontend",
    description: [
      "Holdo es una fintech / robo-advisor chilena regulada por la CMF (Comisión para el Mercado Financiero Chileno). Holdo comenzó siendo una plataforma 100% desktop y dentro de su flujo de onboarding, cuando el usuario creaba una cuenta tenía que configurar su perfil y su portfolio de inversión.",
      "Para esta configuración existían una serie de parámetros que el usuario completaría y en base a eso le mostraríamos una propuesta de inversión o dicho de otra manera un portfolio de inversión personalizado que se lo propondría Harry (la IA de Holdo). ¿Te imaginas cuál era el problema? Te lo cuento…"
    ],
    problem: {
      title: "El problema",
      description: [
        "Durante el proceso de onboarding, un alto porcentaje de usuarios abandonaba el proceso justo en el último paso donde se les presentaba la propuesta de inversión (el portafolio de inversión en base a su perfil). Este es un paso clave, aceptar no implicaba una obligación de inversión pero si era un paso necesario para que el usuario pudiera acceder a la plataforma de Holdo.",
        "Estos datos los hemos extraído de las plataformas como PostHog y Clarity.",
        "A continuación te muestro como era el diseño al momento de detectar el problema: 5 tabs informativas por donde el usuario debía navegar y leer para entender en dónde pondría su dinero."
      ]
    },
    findings: [
      "Con esta problemática detectada comenzamos a realizar una investigación cualitativas a través de entrevistas con usuarios reales y descubrimos un punto de dolor en común: la información que mostrábamos en el portafolio era excesiva y resultaba muy compleja de entender. Causaba miedo. Parecía un contrato hipotecario y en realidad no los comprometía a nada. Era sobre información.",
      "Con ese insight sobre la mesa, iniciamos un proceso para redefinir el diseño del portafolio, un trabajo exhaustivo junto a nuestro experto en finanzas e IA. El desafío no era solo simplificar la UI — era determinar qué información era regulatoriamente necesaria, qué era útil para el usuario y qué simplemente estaba ahí por inercia. Esa distinción no la podía resolver el diseño solo."
    ],
    solutionText: [
      "Rediseñamos la propuesta de inversión desde cero, transformando lo que era un bloque denso de información técnica en una narrativa visual escaneable y progresiva. El principio rector fue simple: el usuario necesitaba entender antes de confiar, y para eso la información tenía que fluir, no abrumar.",
      "Estas fueron las decisiones clave:"
    ],
    challengesText: [
      "Diseñar en un entorno regulado te obliga a ser creativo dentro de constraints reales — la solución no era eliminar información sino encontrarle el lugar correcto en el flujo.",
      "Aprendí que en productos financieros la confianza se construye con claridad, no con exhaustividad. Mostrar menos, en el momento justo, genera más seguridad que mostrar todo de golpe.",
      "Trabajar directamente con el CTO, CEO y el experto en finanzas me enseñó a separar qué era un requisito real de qué era inercia del diseño anterior."
    ],
    video: "/assets/projects/ladrillo/new_ladrillo.mp4",
    images: [
      { src: "/assets/projects/ladrillo/Mask-group-1-1.jpg", alt: "Rendimiento histórico del portafolio", caption: "Buscamos mostrar de forma clara cuánto rindió el portafolio seleccionado en el pasado (ya que no se puede predecir el futuro). A su vez, agregamos un \"viaje en el tiempo\" que permitirá al usuario ver un número más realista de cuánto tendría si hubiera invertido X dinero." },
      { src: "/assets/projects/ladrillo/Mask-group-2-1.jpg", alt: "Empresas del ETF", caption: "Decidimos darle más importancia a las empresas que componen los ETF en los cuáles se invierte. Esto permite que el usuario esté más familiarizado con el portfolio y se interese más en invertir." },
      { src: "/assets/projects/ladrillo/Mask-group-3-1.jpg", alt: "Video IA", caption: "Con los datos recabados, decidimos darle mayor importancia a lo que nuestra Inteligencia Artificial había construido, por eso agregamos un pequeño video que introduce al usuario en el tema." },
      { src: "/assets/projects/ladrillo/Mask-group-4.jpg", alt: "CTA ampliado", caption: "Por supuesto, ampliamos el llamado a la acción al finalizar el scroll del portafolio seleccionado. Con esto buscamos que los usuarios conviertan de forma más simple y rápida." }
    ],
    showcaseTitle: "Mejora de propuesta de inversión en holdo.cl",
    resultsReveal: {
      title: "Los números",
      closingText: "Al momento de mi salida de Holdo, el rediseño estaba en fase de implementación, por lo que no cuento con métricas finales de impacto. Sin embargo, el proyecto fue validado internamente y avanzó a producción."
    },
    closing: {
      title: "El cierre",
      timeline: "Noviembre 2023 → Diciembre 2023"
    },
    heroImage: "/assets/projects/ladrillo-1.jpg"
  },
  {
    id: "holdo-website-mobile-first",
    number: "",
    title: "Website mobile-first",
    type: "Web responsive",
    year: "2022",
    role: "UX/UI & WebFlow",
    client: "Holdo",
    roles: ["UX/UI Designer", "WebFlow"],
    subtitle: "Rediseñé y desarrollé el sitio web de Holdo en WebFlow, desde la ideación hasta la implementación mobile first.",
    tools: ["Figma", "WebFlow", "Google Analytics"],
    timeline: ["Benchmarking", "Ideación", "Style Guide", "Desarrollo", "Optimización"],
    metrics: [
      { value: "1→6", label: "de 1 página a sitio completo" },
      { value: "✓", label: "mobile first implementado" },
      { value: "1", label: "design system creado" }
    ],
    roleDescription: "Diseñé y desarrollé el sitio completo en WebFlow de principio a fin. Creé el Style Guide basado en el Design System, definí sitemap y arquitectura de información.",
    challenge: "El sitio original era una sola página que no explicaba bien el producto. Necesitábamos crear un sitio completo, escalable y mantenible por cualquier miembro del equipo.",
    team: "UX/UI Designer · Product Manager · Marketing",
    description: [
      "Uno de los primeros proyectos al llegar a Holdo. De mi lado no contaba con conocimientos de esta plataforma, pero sí de WordPress, así que fue una etapa de adaptación y aprendizaje para poder desarrollar el sitio de principio (ideación en Figma) hasta el final (desarrollar en WebFlow).",
      "El sitio web se encontraba desde un principio desarrollado en WebFlow, solamente era una página, la cuál no explicaba bien lo que se ofrecía. Desde allí comenzamos a realizar benchmarking de nuestros competidores y a entrevistar al equipo gerencial para poder priorizar aquella información de relevancia que debíamos contarle a nuestros usuarios.",
      "Decidimos sentar unas bases sólidas para que se pueda continuar y modificar por parte de cualquier miembro del equipo: creamos un Style Guide, basado en nuestro Design System, con reglas claras para continuar con el trabajo. A su vez, dejamos escrito el sitemap y la AI para comprender su estructura.",
      "El sitio web está en constante cambio y crecimiento, como toda startup, por eso hacemos un monitoreo constante con diferentes herramientas que nos brindan información del comportamiento de los usuarios, con esta información tomamos decisiones para realizar optimizaciones, una de ellas y la más reciente es definir que el sitio será mobile first."
    ],
    context: {
      title: "Contexto — La transición",
      description: [
        "Cuando me incorporé al equipo de Holdo, el sitio web principal era una landing page de una sola página y estructura rígida, que no reflejaba adecuadamente la propuesta de valor pedagógica de la empresa ni sus ventajas frente a la banca tradicional.",
        "El equipo requería un sitio corporativo multi-página dinámico y fácil de modificar por marketing, sin depender constantemente de desarrollo."
      ]
    },
    problem: {
      title: "El problema",
      statement: "Una landing que no explica el producto no genera clientes.",
      description: [
        "El producto era complejo y requería educar al usuario antes de pedirle que creara una cuenta. Una sola sección de preguntas frecuentes resultaba insuficiente.",
        "Necesitábamos sentar unas bases de diseño e información sólidas, con un sistema de diseño estructurado, que permitiera el crecimiento continuo del sitio web."
      ]
    },
    findings: [
      "El sitio web original constaba de una sola página estática que no explicaba claramente el modelo de asesoría de Holdo ni su respaldo regulatorio.",
      "El benchmarking competitivo y las sesiones con el equipo directivo revelaron que el sitio web era nuestro principal canal de credibilidad y educación al usuario."
    ],
    solutionText: [
      "Diseñamos un sitemap estructurado de 6 páginas y desarrollamos el sitio completo sobre Webflow. Creamos una guía de estilos y componentes reutilizables vinculada al Design System principal.",
      "Esto permitió que el equipo de marketing pudiera realizar modificaciones autónomamente. Finalmente, optimizamos toda la navegación para que fuera completamente mobile-first."
    ],
    challengesText: [
      "Adaptarse a Webflow con un enfoque riguroso de diseño mobile-first y modular nos enseñó la importancia de la autonomía en los equipos de marketing.",
      "Construir cimientos sólidos con un Style Guide centralizado ahorra cientos de horas de diseño en startups de rápido crecimiento."
    ],
    video: "/assets/projects/web-holdo-nueva.mp4",
    resultsReveal: {
      title: "Los números",
      stats: [
        { highlight: "Sitio escalado.", detail: "De 1 a 6 páginas de información.", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
        { highlight: "Mobile first.", detail: "Optimización total para celulares.", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
        { highlight: "Autonomía.", detail: "1 guía de estilos en WebFlow.", icon: "M4 5a1 1 0 01.707-.293l12 12a1 1 0 01-.707 1.707l-12-12A1 1 0 014 5z" }
      ],
      closingText: "La migración y reestructuración del sitio web permitió a marketing lanzar campañas autónomas con páginas de destino dedicadas.",
      footerText: "Auditoría web realizada internamente para evaluar la velocidad de carga e indexación en Google."
    },
    closing: {
      title: "El cierre",
      message: "Un sitio web corporativo es un ente vivo.\nLa flexibilidad en las herramientas agiliza los ciclos de producto.",
      timeline: "Julio 2022 → Octubre 2022"
    },
    heroImage: "/assets/projects/holdo-web-1.jpg"
  },
  {
    id: "reservadisimo",
    number: "",
    title: "Reservadísimo - Un negocio personal",
    type: "App Mobile",
    year: "2020",
    role: "UX/UI Designer",
    client: "Proyecto Personal",
    roles: ["UX/UI Designer"],
    subtitle: "Diseñé una app de reservas con QR y firma digital para bares durante la pandemia. Alcanzó el MVP con alta intención de adopción.",
    tools: ["Figma", "Marvel"],
    timeline: ["Problema", "Ideación", "Prototipo", "Test con bares", "MVP"],
    metrics: [
      { value: "MVP", label: "desarrollado end-to-end" },
      { value: "↑", label: "alta intención de adopción" },
      { value: "QR", label: "validación sin contacto" }
    ],
    roleDescription: "Diseñé el producto completo de principio a fin: research, user flows, prototipos, testing con bares reales y presentaciones comerciales.",
    challenge: "Durante la pandemia, las reservas en bares eran caóticas (WhatsApp, teléfono, RRSS). Necesitábamos un sistema autónomo que además gestionara declaraciones juradas y protocolos sanitarios.",
    team: "Proyecto personal · UX/UI · Desarrollo",
    description: [
      "Debido a la pandemia por el COVID-19, muchos rubros tuvieron que cerrar sus puertas. Con el paso del tiempo, bajo protocolos estrictos, algunos pudieron volver a abrir.",
      "Estos protocolos incluye, entre otras cosas, la necesidad de generar turnos para los clientes y completar una declaración jurada.",
      "En ese momento las reservas en los bares se resolvían por WhatsApp, redes sociales o telefónicamente.",
      "El usuario tenía que buscar la forma de contacto, comercio por comercio, consultar disponibilidad y reservar. Al llegar, se le hacía completar la declaración jurada en papel y luego ingresar al bar.",
      "Nuestra propuesta incluye el desarrollo de un sistema para gestionar la reserva de turnos on-line, de forma autónoma y sin la necesidad de intervención de personas. Donde el usuario pueda en una misma app encontrar cualquier bar y reservar.",
      "Como valor agregado, anexar la posibilidad de completar y firmar la declaración jurada y para validar el turno debería realizar la compra de algún producto del comercio o voucher.",
      "Un proyecto personal muy ambicioso que llego a desarrollarse hasta el MVP, ya que por razones de tiempo y perspectivas personales, era emprender en esto a futuro y no fue la idea.",
      "Como dato adicional, se llevaron a cabo presentaciones a bares y la plataforma obtuvo resultados positivos con una alta tasa de intención de incorporación."
    ],
    context: {
      title: "Contexto — La crisis",
      description: [
        "Durante la crisis del COVID-19 en 2020, las medidas de distanciamiento social y de control de aforo forzaron a los comercios gastronómicos a reinventarse rápidamente bajo protocolos sanitarios obligatorios.",
        "Entre estos protocolos se incluía la recolección de declaraciones juradas sanitarias a cada ingresante y el agendamiento previo de visitas."
      ]
    },
    problem: {
      title: "El problema",
      statement: "Reservas caóticas por chat y declaraciones juradas en papel físico.",
      description: [
        "El proceso de reserva se resolvía artesanalmente por WhatsApp, Instagram o llamadas. Al llegar, los clientes hacían fila y debían rellenar y firmar una planilla en papel físico con la misma lapicera, un vector de contagio evidente.",
        "Faltaba una solución unificada que digitalizara el flujo de acceso, quitando la carga administrativa al personal del bar."
      ]
    },
    findings: [
      "Durante la pandemia, la reapertura de bares exigía un estricto control de aforo y declaraciones juradas sanitarias.",
      "Las soluciones del momento eran manuales, lentas y fragmentadas (WhatsApp, papel, planillas), lo que generaba fricción al ingreso de los locales y sobrecargaba al personal de atención."
    ],
    solutionText: [
      "Diseñamos una aplicación móvil y un sistema de gestión de turnos end-to-end. Los usuarios podían buscar bares con disponibilidad en su área, reservar una mesa, completar y firmar digitalmente la declaración jurada requerida.",
      "Para validar el turno, el usuario recibía un código QR dinámico que el bar escaneaba en la entrada sin contacto físico."
    ],
    challengesText: [
      "El desarrollo y diseño de un producto personal durante una crisis sanitaria nos enseñó la importancia de la adaptabilidad.",
      "Validar el prototipo con dueños de bares reales nos dio una valiosa perspectiva de ventas y nos mostró que la simplicidad operativa para el negocio es tan crítica como la experiencia del usuario final."
    ],
    video: "/assets/projects/proto-reservadisimo.mp4",
    images: [
      { src: "/images/project4-1.png", alt: "User Flow", caption: "Pensamos y desarrollamos como sería el recorrido de nuestros usuarios dentro de la app. Buscamos simplificar los pasos para que puedan obtener una reserva de forma práctica y rápida." },
      { src: "/images/project4-2.png", alt: "Firma digital", caption: "La declaración jurada se puede firmar desde la app. A su vez, los datos se completan la primera vez y luego se autorellenan con la misma información para agilizar los tiempos." },
      { src: "/images/project4-3.png", alt: "QR Code", caption: "Desde el comercio, escanea el código QR que el bar tiene en su ingreso para poder ingresar directamente haciendo march con tu turno de la app. Sin contacto." },
      { src: "/images/project4-4.png", alt: "Pantallas Figma", caption: "Pantallas de figma de la app." }
    ],
    showcaseTitle: "Reservadísimo - App de turnos y protocolos",
    resultsReveal: {
      title: "Los números",
      stats: [
        { highlight: "Fase prototipo.", detail: "Desarrollado end-to-end.", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
        { highlight: "Interés comercial.", detail: "Alta intención de incorporación en locales.", icon: "M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" },
        { highlight: "Ingreso sin contacto.", detail: "Validación por código QR.", icon: "M12 4v1m6 11h2m-6 0h-2v4m0-16v.01M4 12H2m10 4h.01M4 16h16M4 20h16" }
      ],
      closingText: "El prototipo funcional de Reservadísimo obtuvo excelentes valoraciones cualitativas en simulaciones de entrada reales en Córdoba.",
      footerText: "Proyecto diseñado de forma personal; validado con 5 dueños de establecimientos nocturnos locales."
    },
    closing: {
      title: "El cierre",
      message: "Emprender en tiempos de crisis acelera la validación.\nIdentificar el vector de valor concreto es la clave para la adopción.",
      timeline: "Junio 2020 → Octubre 2020"
    },
    heroImage: "/images/project4-4.png"
  }
];

export const landingExperiences = [
  {
    role: "Senior Product Designer",
    company: "Mango",
    period: "jun. 2024 - actualidad",
    companyInfo: {
      logo: "/assets/home/logo-mango.jpg",
      url: "mango.com",
      founded: "1984",
      description: "Mango es una multinacional de moda fundada en Barcelona. Diseña, fabrica y comercializa prendas y accesorios para hombre y mujer con presencia en más de 110 países."
    }
  },
  {
    role: "Product Designer",
    company: "Holdo",
    period: "jun. 2022 - jun. 2024",
    companyInfo: {
      logo: "/assets/home/logo-holdo.jpg",
      url: "holdo.cl",
      founded: "2021",
      description: "Holdo es la primera plataforma chilena que te entrega una asesoría profesional con inteligencia artificial. Nuestra misión es llevar a las personas las inversiones de alto nivel, con un proceso de registro simple y 100% digital.\n\nOfrecemos productos personalizados, gracias a nuestra inteligencia artificial, que nos permite generar estrategias adaptadas a las necesidades de nuestros clientes, además con ajustes periódicos. Nuestro enfoque es crear una experiencia de inversión de primer nivel y con costos transparentes.\n\nEstamos inscritos en la Comisión para el Mercado Financiero (CMF) y en proceso de regulación. Además, estamos respaldados por la Administradora General de Fondos Toesca y transamos a través de Interactive Brokers."
    }
  },
  {
    role: "Freelance Product Designer",
    company: "gonzachi.com",
    period: "ene. 2019 - ago. 2022",
    companyInfo: {
      logo: "/assets/home/gonzachi_com_logo.jpeg",
      url: "gonzachi.com",
      founded: "2019",
      description: "Proyecto personal de diseño UX/UI. Proyectos end-to-end para clientes diversos: desde el discovery hasta la entrega de sitios responsive en WordPress."
    }
  },
  {
    role: "Lead Graphic Designer",
    company: "Quo",
    period: "feb. 2020 - jul. 2022",
    companyInfo: {
      logo: "/assets/home/quo_estrategia_y_comunicacin_logo.jpeg",
      url: "quoeyc.com",
      founded: "2010",
      description: "Nos especializamos en la comunicación de líderes, gobiernos y ONGs, ofreciendo una amplia gama de servicios de comunicación política que contemplan el desarrollo de estrategias, la gestión de campañas electorales y la creación de contenido digital.\n\nSomos un equipo de profesionales altamente capacitados, experimentados y profundamente comprometidos con la excelencia en cada paso que damos. En QUO, no nos conformamos: nos atrevemos a innovar y utilizar las últimas tendencias y herramientas de comunicación para brindar soluciones efectivas y de vanguardia a nuestros clientes."
    }
  },
  {
    role: "Graphic Designer & Web Designer",
    company: "Quo",
    period: "feb. 2018 - feb. 2020",
    companyInfo: {
      logo: "/assets/home/quo_estrategia_y_comunicacin_logo.jpeg",
      url: "quoeyc.com",
      founded: "2010",
      description: "Nos especializamos en la comunicación de líderes, gobiernos y ONGs, ofreciendo una amplia gama de servicios de comunicación política que contemplan el desarrollo de estrategias, la gestión de campañas electorales y la creación de contenido digital.\n\nSomos un equipo de profesionales altamente capacitados, experimentados y profundamente comprometidos con la excelencia en cada paso que damos. En QUO, no nos conformamos: nos atrevemos a innovar y utilizar las últimas tendencias y herramientas de comunicación para brindar soluciones efectivas y de vanguardia a nuestros clientes."
    }
  },
];

export const behanceProjects = [
  {
    title: "Proclub App",
    subtitle: "Propuesta UX/UI",
    image: "/images/behance-proclub.webp",
    link: "https://www.behance.net/gallery/120076233/Proclub-app-Propuesta-UXUI"
  },
  {
    title: "Payoneer Case Study",
    subtitle: "UX/UI Case Study",
    image: "/images/behance-payoneer.webp",
    link: "https://www.behance.net/gallery/114698225/UXUI-Case-Study-Payoneer"
  },
  {
    title: "Comodinshop E-commerce",
    subtitle: "UX/UI Design",
    image: "/images/behance-comodin.webp",
    link: "https://www.behance.net/gallery/81411145/Comodinshop-UX-UI-design-e-commerce"
  }
];

/* Landing projects — simplified for the home page design */
export const landingProjects = [
  {
    id: "reduciendo-drop-off-onboarding",
    number: "01",
    title: "Reduciendo el drop-off rate en la fase final del onboarding",
    subtitle: "Reducir la complejidad de la propuesta de inversión para aumentar la conversión.",
    company: "Holdo · 2023",
    description: "Un gran número de usuarios abandonaba el proceso de inversión llegando al final. Investigamos el motivo, hablamos con usuarios, entendimos el problema. Descubre el proceso y la solución realizada.",
    role: "UX/UI · Product Designer",
    tags: ["Fintech", "UX Research", "Data-Informed Design", "Onboarding Optimization", "Conversion", "Information Architecture"],
    stat: { value: "↓ info", label: "↑ conversión" },
    thumbnail: "/assets/projects/ladrillo-1.jpg",
    expandedImages: [
      "/assets/projects/ladrillo/Mask-group-1-1.jpg",
      "/assets/projects/ladrillo/Mask-group-2-1.jpg",
      "/assets/projects/ladrillo/Mask-group-3-1.jpg",
    ],
  },
  {
    id: "agilidad-inspiracional",
    requiresAccess: true,
    number: "02",
    featured: true,
    title: "Plataforma creativa interna",
    subtitle: "Plataforma de IA generativa de imágenes para equipos creativos.",
    company: "Mango · 2024 → presente",
    description: "Un producto que nace gracias a la aparición de la Inteligencia Artificial. Construimos algo totalmente innovador, descubriendo cómo podemos introducirnos en el proceso de diseñadores de moda para optimizar la productividad.",
    role: "Product Designer",
    tags: ["AI", "GenAI", "Product Design", "Internal Tools", "Fashion Tech"],
    image: "/assets/projects/moda.jpg",
  },
  {
    id: "orquestadora-de-equipos",
    requiresAccess: true,
    number: "03",
    title: "Plataforma orquestadora de equipos",
    subtitle: "Herramienta corporativa para la creación de contenido de journeys",
    description: "Un proyecto dedicado a orquestar diferentes equipos, optimizando procesos que actualmente se hacen manualmente, con excel, mails y diferentes plataformas. Innovamos en el proceso de desarrollo tomando una actitud AI First. Te cuento más.",
    tags: ["Product Ownership", "Discovery", "Internal Tools"],
  },
  {
    id: "app-movil-holdo",
    number: "04",
    title: "Aplicación fintech-roboadvisor",
    subtitle: "MVP de aplicación móvil",
    company: "Holdo · 2023",
    description: "El 80% de los usuarios accedía desde mobile, pero la plataforma era desktop. Diseñé el MVP de la app nativa: benchmark competitivo del mercado fintech chileno, priorización de alcance con el CEO y CTO, y dos flujos clave — consulta de portafolio y depósito de fondos.",
    expandedDescription: "Holdo nació en 2021 como una plataforma de inversiones destinada a personas con gran patrimonio, pensada exclusivamente para desktop. Tras el lanzamiento, los datos mostraron que el 80% de los usuarios accedía desde el móvil, con una experiencia muy limitada para ese contexto. La decisión fue construir una app móvil que superara lo que ofrecían competidores tradicionales como los bancos. Como Product Designer, fui responsable del diseño completo de la app, trabajando directamente con el CEO, CTO y el equipo de desarrollo. Participé en la definición del alcance del MVP, combinando un benchmark del mercado fintech chileno y regional con datos de comportamiento en Hotjar, Analytics y PostHog para decidir qué funcionalidades priorizar.",
    role: "Product Designer",
    tags: ["Fintech", "Mobile App", "MVP Definition", "Data-Informed Design", "Competitive Analysis", "Product Design"],
    stat: { value: "80%", label: "usuarios en mobile" },
    thumbnail: "/assets/projects/app-holdo-1.png",
    expandedImages: [
      "/assets/projects/app-holdo/Mask-group.png",
      "/assets/projects/app-holdo/Mask-group-1.png",
      "/assets/projects/app-holdo/Mask-group-2.png",
    ],
  },
  {
    id: "holdo-website-mobile-first",
    number: "05",
    title: "Website mobile-first",
    subtitle: "Rediseñé y desarrollé el sitio web de Holdo en WebFlow, desde la ideación hasta la implementación mobile first.",
    company: "Holdo · 2022",
    description: "Uno de los primeros proyectos al llegar a Holdo. De mi lado no contaba con conocimientos de esta plataforma, pero sí de WordPress, así que fue una etapa de adaptación y aprendizaje para poder desarrollar el sitio de principio (ideación en Figma) hasta el final (desarrollar en WebFlow).",
    expandedDescription: "El sitio web se encontraba desde un principio desarrollado en WebFlow, solamente era una página, la cuál no explicaba bien lo que se ofrecía. Desde allí comenzamos a realizar benchmarking de nuestros competidores y a entrevistar al equipo gerencial para poder priorizar aquella información de relevancia que debíamos contarle a nuestros usuarios.\n\nDecidimos sentar unas bases sólidas para que se pueda continuar y modificar por parte de cualquier miembro del equipo: creamos un Style Guide, basado en nuestro Design System, con reglas claras para continuar con el trabajo. A su vez, dejamos escrito el sitemap y la AI para comprender su estructura.\n\nEl sitio web está en constante cambio y crecimiento, como toda startup, por eso hacemos un monitoreo constante con diferentes herramientas que nos brindan información del comportamiento de los usuarios, con esta información tomamos decisiones para realizar optimizaciones, una de ellas y la más reciente es definir que el sitio será mobile first.",
    role: "UX/UI Designer · WebFlow",
    tags: ["WebFlow", "UX/UI Design", "Style Guide", "Mobile First", "Benchmarking", "Information Architecture"],
    stat: { value: "1→6", label: "páginas del sitio" },
    video: "/assets/projects/web-holdo-nueva.mp4",
  },
];

export const education = [
  {
    id: "nuclio",
    title: "Master en Digital Product Management",
    institution: "Nuclio Digital School",
    period: "2025–2026",
    logo: "/assets/home/nuclio-digital-school-squarelogo-1646726789081.png",
    institutionInfo: {
      url: "nuclio.school",
      description: "Escuela de negocios digitales con sede en Barcelona, especializada en programas de postgrado en tecnología, producto y data."
    }
  },
  {
    id: "siglo21",
    title: "Licenciado en Diseño Gráfico",
    institution: "Universidad Siglo 21",
    period: "2012-2017",
    logo: "/assets/home/lasiglo21_logo.jpeg",
    institutionInfo: {
      url: "21.edu.ar",
      description: "Universidad privada argentina con sede en Córdoba. Referente en educación a distancia y presencial con más de 60.000 alumnos."
    }
  },
  {
    id: "coder-ux-avanzado",
    title: "Diseño UX/UI Avanzado",
    institution: "Coderhouse",
    period: "2020-2021",
    logo: "/assets/home/coderhouse_logo-150x150.jpeg",
    institutionInfo: {
      url: "coderhouse.com",
      description: "Plataforma de educación online en tecnología y diseño con clases en vivo y proyectos prácticos. Presente en toda Latinoamérica."
    }
  },
  {
    id: "coder-pm",
    title: "Product Manager",
    institution: "Coderhouse",
    period: "2020-2020",
    logo: "/assets/home/coderhouse_logo-150x150.jpeg",
    institutionInfo: {
      url: "coderhouse.com",
      description: "Plataforma de educación online en tecnología y diseño con clases en vivo y proyectos prácticos. Presente en toda Latinoamérica."
    }
  },
  {
    id: "coder-ux",
    title: "Diseño UX/UI",
    institution: "Coderhouse",
    period: "2019-2020",
    logo: "/assets/home/coderhouse_logo-150x150.jpeg",
    institutionInfo: {
      url: "coderhouse.com",
      description: "Plataforma de educación online en tecnología y diseño con clases en vivo y proyectos prácticos. Presente en toda Latinoamérica."
    }
  },
  {
    id: "udemy",
    title: "UX: Máster en Diseño web y Experiencia de Usuario",
    institution: "Udemy",
    period: "sept. 2019",
    logo: "/assets/home/udemy_logo.jpeg",
    institutionInfo: {
      url: "udemy.com",
      description: "Plataforma global de aprendizaje online con más de 200.000 cursos en tecnología, diseño, negocios y desarrollo personal."
    }
  }
];

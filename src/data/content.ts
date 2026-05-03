export const personalInfo = {
  name: "Gonzalo Chiavassa",
  roles: ["Product Designer", "Product Maker (AI First)", "Ownership Mindset", "Product Manager"],
  bio: [
    "Soy Gonzalo Chiavassa, Product Designer en Mango con más de 8 años de experiencia en diseño de producto.",
    "Mi trayectoria pasó por freelance, agencia y empresa de producto — cada etapa me dio una capa distinta: la autonomía de llevar proyectos completos de principio a fin, la velocidad de trabajar en entornos exigentes y la profundidad de construir productos a largo plazo con equipos multidisciplinares.",
    "Hoy trabajo en la intersección entre diseño, producto e inteligencia artificial. Me interesan los problemas sin manual de instrucciones: los que requieren investigar, decidir con información incompleta y construir desde cero. Especialmente cuando hay ownership real de por medio.",
    "Este portfolio recoge proyectos donde el diseño fue el punto de partida, pero las decisiones de producto fueron el trabajo."
  ],
  landingBio: [
    "Soy Gonzalo Chiavassa, Product Designer con mindset de ownership. Me gusta resolver problemas end-to-end, y en estos tiempos que corren, la IA me está abriendo muchas puertas.",
    "En coherencia con mis formaciones, actualmente busco evolucionar hacia el rol de Product Manager, aplicando mi capacidad para conectar las necesidades del usuario con los objetivos técnicos y de negocio.",
    "Tengo más de 8 años de experiencia en diseño de producto y otros tantos en comunicación digital."
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

export const projects = [
  {
    id: "agilidad-inspiracional",
    number: "",
    title: "Plataforma interna de generación de imágenes con IA",
    type: "Product Design · Mango · 2024",
    subtitle: "Plataforma interna de generación de imágenes con IA · Mango · Desde junio 2024",
    context: {
      title: "Contexto — La apuesta",
      description: [
        "Junio de 2024. La IA generativa de imágenes existía, pero ninguna solución servía para un flujo de trabajo de moda. Los modelos open source daban resultados inconsistentes, las herramientas comerciales no ofrecían el control que necesitaban los equipos creativos y entrenar modelos propios era una apuesta sin garantías.",
        "No había demanda interna. Había una hipótesis estratégica: si la tecnología podía generar imágenes realistas de ropa, podíamos comprimir horas del proceso creativo antes de que el mercado lo resolviera. Arrancamos con un equipo de data entrenando modelos propios. Esa fue la primera apuesta — y la primera que tuvimos que soltar."
      ],
      milestones: []
    },
    problem: {
      title: "El problema",
      statement: "El diseñador sabe lo que quiere. El problema es mostrarlo.",
      description: [
        "Los equipos de diseño de moda no tenían un problema de inspiración — tenían un problema de comunicación visual. Las referencias existían, pero la idea final vivía en la cabeza del diseñador. Para hacerla tangible había que pasar por Photoshop, collage manual, montajes que llevaban horas y nunca terminaban de transmitir la intención real.",
        "La oportunidad era comprimir ese salto: de la idea a la imagen. Que un diseñador pudiera mezclar referencias, visualizar una prenda sobre una modelo real y mostrar exactamente lo que tiene en mente — antes de enviar nada al proveedor."
      ]
    },
    resultsReveal: {
      title: "Los números",
      stats: [
        { highlight: "Diseñada para 1 departamento.", detail: "Hoy la usan +10.", icon: "M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z" },
        { highlight: "Empezó con 10 usuarios invitados.", detail: "Hoy tiene 300 activos al mes.", icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm8 4v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" },
        { highlight: "40K imágenes generadas al mes.", detail: "Antes, cada una era Photoshop o collage manual.", icon: "M12 2l2.09 6.26L20.18 10l-6.09 1.74L12 18l-2.09-6.26L3.82 10l6.09-1.74L12 2z" }
      ],
      closingText: "No hubo rollout forzado ni push desde arriba. La adopción fue progresiva — alguien veía un resultado, preguntaba con qué se había hecho, y pedía acceso.",
      footerText: "Los datos vienen de un stack de medición que definí e implementé: Google Analytics, Hotjar, Product Fruits y un dashboard personalizado con IA que diseñé y desplegué para dar visibilidad desde el equipo hasta el CTO.",
    },
    decisions: {
      title: "Decisiones",
    },
    badge: "Más reciente ✨",
    roles: [],
    description: [
      "Mango apostó por explorar la IA generativa de imágenes antes de que el mercado lo adoptara. En el discovery con los equipos de diseño de moda detectamos un cuello de botella concreto: los diseñadores pasaban horas buscando referencias visuales en competidores, editoriales y redes antes de empezar a diseñar. La oportunidad no era reemplazar el diseño, sino acelerar esa primera fase de inspiración.",
      "Como Product Designer con ownership del backlog, trabajé con un equipo de 6 personas. La decisión de producto más relevante fue un pivote temprano: el equipo de data quería entrenar modelos propios, pero el feedback de usuarios no justificaba la fricción. Como equipo, decidimos dejar los modelos propios e integrar los mejores del mercado (OpenAI, Google), construyendo la mejor experiencia por encima. Las funcionalidades se fueron añadiendo iterativamente desde sesiones de discovery con usuarios reales.",
      "Hoy la plataforma tiene 300 usuarios únicos activos al mes, genera más de 40K imágenes mensuales y se usa en más de 10 departamentos — habiendo arrancado con solo 10 usuarios invitados."
    ],
    highlights: [
      { title: "De referencias abstractas a conceptos visuales en segundos", description: "Los diseñadores podían tardar horas buscando y creando moodboards. Con la plataforma, generan variaciones realistas al instante.", emoji: "⚡" },
      { title: "Discovery con equipos de diseño de moda", description: "Investigamos los flujos reales de trabajo para detectar dónde la IA podía generar mayor impacto.", emoji: "🔍" },
      { title: "Iteración continua con feedback real", description: "Organizamos formaciones y sesiones con usuarios para mejorar tanto la herramienta como la adopción.", emoji: "🔄" },
      { title: "De 0 a 1: construyendo sin precedentes", description: "Cuando empezamos, la IA generativa apenas existía. Diseñamos un producto sin referencias previas en el mercado.", emoji: "🚀" },
      { title: "Adopción creciente en toda la organización", description: "Lo que comenzó como un piloto con un equipo se expandió a múltiples áreas de la compañía.", emoji: "📈" }
    ],
    storySteps: [
      {
        number: "Decisión 1",
        title: "Soltar la apuesta técnica cuando el usuario no la validaba",
        description: "Arrancamos entrenando modelos propios con el equipo de data. Era la apuesta más ambiciosa — y la más cara. Pero los resultados no llegaban, y para mejorarlos había que forzar el flujo de usuario de formas que no tenían sentido: más pasos, más fricción, más tiempo para obtener imágenes que seguían sin convencer.\n\nEl feedback era claro. La decisión fue dejar los modelos propios e integrar los mejores del mercado. Nunca íbamos a competir con Google o OpenAI en capacidad de entrenamiento — pero sí podíamos construir la mejor experiencia encima de sus modelos.\n\nFue una decisión incómoda porque el equipo de data había invertido meses. Pero el producto no es el modelo. El producto es lo que el usuario puede hacer con él.",
        illustrationTitle: "La tensión",
        illustrationText: "El equipo de data quería entrenar modelos propios. Era la apuesta técnica más ambiciosa. Pero los resultados no llegaban, y para obtenerlos había que forzar el flujo de usuario de formas que no tenían sentido."
      },
      {
        number: "Decisión 2",
        title: "Construir lo que desbloqueaba, no lo que parecía más completo",
        description: "Cuando la plataforma empezó a tener usuarios reales, las peticiones se multiplicaron. Paleta de colores personalizada, estilos guardados, virtual try-on, quitar fondo, inpainting, upscaler — todo surgió del discovery, todo tenía sentido. El problema era el orden.\n\nCon un equipo de seis personas no podíamos construir todo a la vez, y cada feature tenía un coste de integración distinto. El criterio fue siempre el mismo: ¿esto desbloquea un flujo que hoy el usuario no puede completar, o solo mejora uno que ya funciona? Lo que desbloqueaba entraba primero. Lo que mejoraba, esperaba.\n\nParece obvio escrito así. En la práctica significó decir que no a cosas que los usuarios pedían explícitamente.",
        illustrationTitle: "Cada funcionalidad salió del discovery"
      },
      {
        number: "Decisión 3",
        title: "Diseñar para dos perfiles sin partir la plataforma en dos",
        description: "A medida que crecía la base de usuarios apareció una tensión: los expertos querían libertad total para iterar y ajustar parámetros. Los nuevos querían resultados rápidos sin entender cómo funciona la IA.\n\nLa solución fácil era elegir un perfil y optimizar para él. La decisión fue no elegir — pero tampoco hacer una interfaz llena de toggles y opciones. Diseñamos dos modos dentro de la misma plataforma: un modo conversacional con control total para el usuario experto, y Acciones Rápidas — flujos guiados paso a paso con prompts predefinidos — para quien necesita un resultado concreto sin fricción.",
        illustrationTitle: "Misma plataforma, dos experiencias.",
        illustrationText: "La decisión de diseño más importante del proyecto porque definió la arquitectura de toda la interacción."
      }
    ],
    results: {
      intro: "Lo que empezó como un experimento es hoy una herramienta de referencia interna en Mango.",
      cards: [
        { icon: "📊", label: "Adopción", title: "Crecimiento constante", description: "Múltiples equipos de diseño utilizan la plataforma de forma habitual, expandiéndose a nuevas áreas de la compañía." },
        { icon: "⏱️", label: "Impacto", title: "Reducción drástica de tiempos", description: "El tiempo de creación de conceptos visuales se redujo significativamente, liberando a los diseñadores para tareas de mayor valor." },
        { icon: "🏗️", label: "Producto", title: "De 0 a 1 con éxito", description: "Una plataforma estable que ha superado la fase experimental y se ha convertido en herramienta de referencia interna." }
      ]
    },
    images: [],
    roadmap: {
      intro: "Como el producto ya está encaminado, mi foco ha vuelto al Product Design de alta fidelidad, pero la visión de producto sigue clara:",
      items: [
        { icon: "🎯", title: "Iteración técnica", description: "Refinar los modelos para que el realismo sea indistinguible de una fotografía de producto." },
        { icon: "📐", title: "Escalabilidad", description: "Extender la herramienta a más departamentos creativos dentro de la compañía." },
      ]
    },
    roleDescription: "Product Designer con ownership de backlog",
    team: "2 frontend · 2 backend · Data/ML · Product Owner",
    tools: ["Figma", "PostHog", "OpenAI", "Gemini", "Google Analytics", "Hotjar", "Product Fruits", "Dashboard IA propio"],
    closing: {
      title: "El cierre",
      message: "El trabajo más valioso de producto no es diseñar interfaces.\nEs tomar decisiones cuando no hay información suficiente.",
      timeline: "Junio 2024 → presente",
      extra: "Diseñé y desplegué el dashboard de métricas con IA (queries provistas por backend)"
    },
    showcaseTitle: "Plataforma interna de generación de imágenes con IA para Mango",
    textPanels: [
      [
        "Este proyecto nace de una pregunta estratégica: ¿en qué parte del proceso de trabajo de los diseñadores de moda podríamos introducir la IA generativa de imágenes? No era un problema que los diseñadores tuvieran en ese momento — era una visión a futuro.",
        "Después de una serie de discoverys con diferentes equipos, llegamos a una conclusión: por el nivel de control que ofrecían los modelos de IA en ese momento, el foco tenía que ser optimizar cómo los diseñadores comunicaban sus ideas creativas."
      ],
      [
        "La visión de producto iba más allá: sabíamos que los modelos iban a mejorar y que eventualmente podríamos atacar etapas del proceso que requerían mayor precisión.",
        "A partir de ahí fuimos construyendo la plataforma de forma iterativa — testeando con los equipos, midiendo uso real y ajustando en base a lo que funcionaba y lo que no."
      ],
      [
        "Hoy, con esta herramienta, los diseñadores redujeron significativamente las horas que destinaban a comunicar la idea final que solo vivía en su cabeza. Redujimos las iteraciones con proveedores — ahora cuentan con resultados digitales y solicitan solo las prendas puntuales que necesitan producir.",
        "Superamos los 300 usuarios únicos activos al mes, que generan más de 40.000 imágenes mensuales. La plataforma se expandió a más de 10 departamentos — algo que estaba en la visión desde el inicio, no fue casualidad."
      ]
    ],
    textPanelHighlights: [
      ["pregunta estratégica", "visión a futuro"],
      ["La visión de producto iba más allá", "construyendo la plataforma de forma iterativa"],
      ["300 usuarios únicos activos al mes", "40.000 imágenes mensuales", "más de 10 departamentos"]
    ],
  },
  {
    id: "proyecto-nuevo",
    number: "#2",
    title: "Plataforma orquestadora de equipos",
    type: "Coming Soon",
    roles: ["UX Designer", "UI Designer"],
    subtitle: "En construcción",
    tools: [],
    timeline: [],
    metrics: [],
    roleDescription: "Pronto habrá más detalles.",
    challenge: "",
    team: "",
    description: ["Pronto publicaré por aquí los detalles de este nuevo proyecto en el que estuve sumando valor."],
    video: ""
  },
  {
    id: "project-1",
    number: "#3",
    title: "App móvil MVP",
    type: "Product Design",
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
    video: "/assets/projects/app-holdo/app_mobile_1.mp4",
    images: [
      { src: "/assets/projects/app-holdo/Mask-group.png", alt: "App Mobile Screen 1", caption: "" },
      { src: "/assets/projects/app-holdo/Mask-group-1.png", alt: "App Mobile Screen 2", caption: "" },
      { src: "/assets/projects/app-holdo/Mask-group-2.png", alt: "App Mobile Screen 3", caption: "" },
      { src: "/assets/projects/app-holdo/Mask-group-3.png", alt: "App Mobile Screen 4", caption: "" }
    ],
    showcaseTitle: "App móvil MVP en holdo.cl",
    textPanels: [
      [
        "Holdo nace en el 2021. En aquel momento su plataforma de inversión se comenzó a idear como un producto desktop.",
        "Los datos recolectados a los pocos meses del lanzamiento nos indicaban que el 80% de los usuarios accedía desde el móvil. La experiencia no estaba pensada para ese contexto, y la decisión fue construir una app móvil que superara ampliamente lo que ofrecían competidores tradicionales como los bancos."
      ],
      [
        "Como Product Designer, fui responsable del diseño completo de la app, trabajando directamente con el equipo de desarrollo.",
        "Participé en la definición del alcance del MVP junto al CEO & CTO, analizando datos de comportamiento en Hotjar, Analytics y PostHog para proponer qué funcionalidades priorizar y qué dejar fuera.",
        "También realicé un benchmark competitivo del mercado fintech chileno y regional para informar las decisiones de diseño."
      ]
    ],
    textPanelHighlights: [
      ["el 80% de los usuarios accedía desde el móvil."],
      ["definición del alcance", "qué funcionalidades priorizar y qué dejar fuera"]
    ],
    steps: [
      "El MVP se enfocó en dos flujos: consulta de portafolio — la acción más frecuente según los datos —",
      "y depósito de fondos, una prioridad de negocio para reducir la fricción a la hora de invertir.",
      "Funcionalidades como creación de cuenta de usuario, creación de cuenta de inversión o rebalanceos quedaron fuera, facilitando la re-dirección a la web y optimizando estos flujos a responsive.",
      "La mayoría de los usuarios con cuenta se descargaron la app y comenzaron a usarla activamente."
    ],
    note: "Lo que estás viendo se trata de un prototipo armado en Figma"
  },
  {
    id: "project-2",
    number: "#4",
    title: "Rediseño basado en datos",
    type: "UX/UI Designer · Product Designer",
    roles: ["UX/UI Designer", "Product Designer"],
    subtitle: "Reducir la complejidad de la propuesta de inversión para aumentar la conversión.",
    tools: ["Figma", "PostHog", "Clarity"],
    timeline: ["Análisis de datos", "Hipótesis", "Priorización", "Diseño", "QA"],
    metrics: [
      { value: "↓", label: "información reducida" },
      { value: "↑", label: "conversiones mejoradas" },
      { value: "5", label: "pantallas rediseñadas" }
    ],
    roleDescription: "Lideré el análisis UX junto al equipo de finanzas para priorizar la información clave. Diseñé un estilo más narrativo y escaneable, y entregué el pitch al equipo de desarrollo.",
    challenge: "Los usuarios abandonaban el onboarding porque la información era abrumadora y confusa. Necesitábamos simplificar sin perder datos críticos para la decisión de inversión.",
    team: "UX/UI Designer · Product Manager · Research · Finanzas · Frontend",
    description: [
      "Los datos de Clarity y PostHog mostraban que los usuarios abandonaban el onboarding antes de completarlo, y las entrevistas de research lo confirmaron: la información era abrumadora y no había jerarquía clara. Desde producto y UX, trabajamos junto al equipo de expertos en finanzas para identificar qué información era realmente imprescindible, reduciendo significativamente el volumen sin perder nada crítico. Rediseñamos la propuesta con un enfoque más narrativo, fácil de leer y escanear, priorizando los datos de mayor relevancia para el usuario y orientado a aumentar las conversiones."
    ],
    video: "/assets/projects/ladrillo/new_ladrillo.mp4",
    images: [
      { src: "/assets/projects/ladrillo/Mask-group-1-1.jpg", alt: "Rendimiento histórico del portafolio", caption: "Buscamos mostrar de forma clara cuánto rindió el portafolio seleccionado en el pasado (ya que no se puede predecir el futuro). A su vez, agregamos un \"viaje en el tiempo\" que permitirá al usuario ver un número más realista de cuánto tendría si hubiera invertido X dinero." },
      { src: "/assets/projects/ladrillo/Mask-group-2-1.jpg", alt: "Empresas del ETF", caption: "Decidimos darle más importancia a las empresas que componen los ETF en los cuáles se invierte. Esto permite que el usuario esté más familiarizado con el portfolio y se interese más en invertir." },
      { src: "/assets/projects/ladrillo/Mask-group-3-1.jpg", alt: "Video IA", caption: "Con los datos recabados, decidimos darle mayor importancia a lo que nuestra Inteligencia Artificial había construido, por eso agregamos un pequeño video que introduce al usuario en el tema." },
      { src: "/assets/projects/ladrillo/Mask-group-4.jpg", alt: "CTA ampliado", caption: "Por supuesto, ampliamos el llamado a la acción al finalizar el scroll del portafolio seleccionado. Con esto buscamos que los usuarios conviertan de forma más simple y rápida." }
    ],
    showcaseTitle: "Mejora de propuesta de inversión en holdo.cl",
    textPanels: [
      [
        "Los datos de Clarity y PostHog lo dejaban claro: los usuarios abandonaban el onboarding antes de completarlo. Las entrevistas de research confirmaron la hipótesis — la información era abrumadora, confusa, y no terminaban de leerla.",
        "El problema no era la cantidad de información per se. Era que toda parecía igual de importante. El usuario no sabía qué mirar primero."
      ],
      [
        "Desde producto y UX, hicimos un análisis junto al equipo de expertos en finanzas para priorizar qué información era realmente imprescindible. El resultado: podíamos reducir significativamente el volumen sin perder nada crítico.",
        "Le dimos un estilo más narrativo — fácil de leer, fácil de escanear — haciendo foco en los datos de mayor relevancia para el usuario y que permitieran aumentar las conversiones."
      ]
    ],
    textPanelHighlights: [
      ["abandonaban el onboarding", "la información era abrumadora"],
      ["qué información era realmente imprescindible", "reducir significativamente el volumen"]
    ],
    steps: [
      "Rendimiento histórico presentado de forma clara, con un 'viaje en el tiempo' para que el usuario vea cuánto hubiera ganado invirtiendo una cantidad determinada.",
      "Mayor protagonismo para las empresas que componen los ETF — para que el usuario se familiarice con el portfolio y se interese más en invertir.",
      "Más peso a lo que la IA había construido: un pequeño video que introduce al usuario en el tema antes de presentar el portfolio completo.",
      "CTA ampliado al finalizar el scroll — para que los usuarios conviertan de forma más simple y rápida."
    ]
  },
  {
    id: "project-3",
    number: "#5",
    title: "Un website a la altura de las circunstancias",
    type: "Web responsive",
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
    video: "/videos/web-holdo.mp4"
  },
  {
    id: "project-4",
    number: "#6",
    title: "Reservadísimo - Un negocio personal",
    type: "App Mobile",
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
    video: "/videos/reservadisimo.mp4",
    images: [
      { src: "/images/project4-1.png", alt: "User Flow", caption: "Pensamos y desarrollamos como sería el recorrido de nuestros usuarios dentro de la app. Buscamos simplificar los pasos para que puedan obtener una reserva de forma práctica y rápida." },
      { src: "/images/project4-2.png", alt: "Firma digital", caption: "La declaración jurada se puede firmar desde la app. A su vez, los datos se completan la primera vez y luego se autorellenan con la misma información para agilizar los tiempos." },
      { src: "/images/project4-3.png", alt: "QR Code", caption: "Desde el comercio, escanea el código QR que el bar tiene en su ingreso para poder ingresar directamente haciendo march con tu turno de la app. Sin contacto." },
      { src: "/images/project4-4.png", alt: "Pantallas Figma", caption: "Pantallas de figma de la app." }
    ],
    note: "Lo que estás viendo se trata de un prototipo armado en Figma",
    behanceLink: "https://www.behance.net/gallery/107614515/Reservadisimo-App-de-turnos"
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
    id: "agilidad-inspiracional",
    number: "01",
    featured: true,
    title: "Plataforma creativa interna",
    subtitle: "Integramos los mejores modelos de IA para la generación de imágenes.",
    company: "Mango · 2024 → presente",
    description: "Diseñé la plataforma de IA generativa de imágenes para los equipos creativos de Mango. De 0 a 1: discovery, arquitectura de producto, decisiones de pivote, medición con stack propio.",
    stats: [
      { value: 300, suffix: "", label: "usuarios activos/mes" },
      { value: 40, suffix: "K", label: "imágenes/mes" },
      { value: 10, suffix: "+", label: "departamentos" },
    ],
    role: "Product Designer · Ownership de backlog",
    team: "2 frontend · 2 backend · Data/ML · Product Owner",
    tools: ["Figma", "PostHog", "OpenAI", "Gemini", "Google Analytics", "Hotjar", "Product Fruits"],
    tags: ["AI", "GenAI", "Product Design", "Discovery", "Internal Tools", "UX Research", "Adoption Strategy", "Fashion Tech"],
    decisions: [
      {
        number: "Decisión 1",
        title: "Soltar la apuesta técnica cuando el usuario no la validaba",
        body: "Arrancamos entrenando modelos propios con el equipo de data. Era la apuesta más ambiciosa — y la más cara. Pero los resultados no llegaban, y para mejorarlos había que forzar el flujo de usuario de formas que no tenían sentido: más pasos, más fricción, más tiempo para obtener imágenes que seguían sin convencer.\n\nEl feedback era claro. La decisión fue dejar los modelos propios e integrar los mejores del mercado. Nunca íbamos a competir con Google o OpenAI en capacidad de entrenamiento — pero sí podíamos construir la mejor experiencia encima de sus modelos.\n\nFue una decisión incómoda porque el equipo de data había invertido meses. Pero el producto no es el modelo. El producto es lo que el usuario puede hacer con él.",
      },
      {
        number: "Decisión 2",
        title: "Construir lo que desbloqueaba, no lo que parecía más completo",
        body: "Cuando la plataforma empezó a tener usuarios reales, las peticiones se multiplicaron. Paleta de colores personalizada, estilos guardados, virtual try-on, quitar fondo, inpainting, upscaler — todo surgía del discovery, todo tenía sentido. El problema era el orden.\n\nCon un equipo de seis personas no podíamos construir todo a la vez. El criterio fue siempre el mismo: ¿esto desbloquea un flujo que hoy el usuario no puede completar, o solo mejora uno que ya funciona? Lo que desbloqueaba entraba primero. Lo que mejoraba, esperaba.\n\nParece obvio escrito así. En la práctica significó decir que no a cosas que los usuarios pedían explícitamente.",
      },
      {
        number: "Decisión 3",
        title: "Diseñar para dos perfiles sin partir la plataforma en dos",
        body: "A medida que crecía la base de usuarios apareció una tensión: los expertos querían libertad total para iterar y ajustar parámetros. Los nuevos querían resultados rápidos sin entender cómo funciona la IA.\n\nLa solución fácil era elegir un perfil y optimizar para él. La decisión fue no elegir — pero tampoco hacer una interfaz llena de toggles y opciones. Diseñamos dos modos dentro de la misma plataforma: un modo conversacional con control total para el usuario experto, y Acciones Rápidas — flujos guiados paso a paso con prompts predefinidos — para quien necesita un resultado concreto sin fricción.",
      },
    ],
    closing: "El trabajo más valioso de producto no es diseñar interfaces. Es tomar decisiones cuando no hay información suficiente.",
    timeline: "Junio 2024 → presente",
    image: "/assets/projects/moda.jpg",
    expandedDescription: "Me sumé a este proyecto desde el inicio, cuando la decisión de introducir IA en el proceso de diseño de moda ya estaba tomada pero no se sabía dónde ni cómo. Lideré una etapa de discovery exhaustiva con perfiles creativos, donde documentamos el ciclo de vida completo de un producto y testeamos diferentes puntos de intervención de la IA. Construimos una plataforma de generación de imágenes pensada para este proceso pero diseñada para ser escalable a cualquier departamento. Medimos el éxito a través de la adopción —usuarios únicos diarios, volumen de imágenes generadas y penetración por departamento—, complementado con feedback cualitativo directo con usuarios, lo que nos permitió trazar estrategias para expandirla a toda la compañía.",
  },
  {
    id: "proyecto-nuevo",
    number: "02",
    comingSoon: true,
    title: "Plataforma orquestadora de equipos",
    subtitle: "En construcción",
  },
  {
    id: "app-holdo",
    number: "03",
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
    id: "onboarding-holdo",
    number: "04",
    title: "Rediseño basado en datos",
    subtitle: "Reducir la complejidad de la propuesta de inversión para aumentar la conversión.",
    company: "Holdo · 2023",
    description: "Los datos de Clarity y PostHog mostraban que los usuarios abandonaban el onboarding antes de completarlo, y las entrevistas de research lo confirmaron: la información era abrumadora y no había jerarquía clara. Desde producto y UX, trabajamos junto al equipo de expertos en finanzas para identificar qué información era realmente imprescindible, reduciendo significativamente el volumen sin perder nada crítico. Rediseñamos la propuesta con un enfoque más narrativo, fácil de leer y escanear, priorizando los datos de mayor relevancia para el usuario y orientado a aumentar las conversiones.",
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
    id: "web-holdo",
    number: "05",
    comingSoon: true,
    title: "Un website a la altura",
    subtitle: "En construcción",
    company: "Holdo · 2022",
  },
  {
    id: "reservadisimo",
    number: "06",
    comingSoon: true,
    title: "Reservadísimo",
    subtitle: "En construcción",
    company: "Proyecto personal · 2020",
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

import 'server-only';

export const agilidadInspiracionalProtected = {
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
  findings: [
    "Durante la fase de discovery y entrevistas con los equipos de diseño de moda detectamos un cuello de botella crítico: los diseñadores no tenían un problema para inspirarse, sino para plasmar e iterar visualmente sus conceptos de forma ágil.",
    "El equipo de data inicialmente propuso entrenar modelos de IA propios. Sin embargo, al realizar pruebas rápidas y discovery continuo con los usuarios, determinamos que la fricción y el tiempo de entrenamiento no compensaban el valor para el negocio en esa etapa del producto. La adopción dependía de la inmediatez."
  ],
  solutionText: [
    "Decidimos pivotar la estrategia técnica: en lugar de competir entrenando modelos desde cero, integramos vía API los motores líderes de la industria (OpenAI, Google) y concentramos nuestro esfuerzo en diseñar la mejor interfaz y experiencia para el flujo creativo.",
    "Creamos dos modos diferenciados dentro de la plataforma: un modo conversacional con control granular para los diseñadores expertos y 'Acciones Rápidas' basadas en plantillas prediseñadas para los usuarios que requerían resultados inmediatos sin fricción."
  ],
  challengesText: [
    "El aprendizaje principal de este proyecto fue el valor de soltar hipótesis técnicas complejas cuando el feedback del usuario real indica lo contrario. Priorizar lo que desbloquea el flujo del usuario sobre la sofisticación del modelo de datos fue clave para lograr una adopción masiva en toda la organización."
  ],
  resultsReveal: {
    title: "Los números",
    stats: [
      { highlight: "Diseñada para 1 departamento.", detail: "Hoy la usan +10.", icon: "M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z" },
      { highlight: "Empezó con 10 usuarios invitados.", detail: "Hoy tiene 300 activos al mes.", icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm8 4v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" },
      { highlight: "40K imágenes generadas al mes.", detail: "Antes, cada una era Photoshop o collage manual.", icon: "M12 2l2.09 6.26L20.18 10l-6.09 1.74L12 18l-2.09-6.26L3.82 10l6.09-1.74L12 2z" }
    ],
    closingText: "No hubo rollout forzado ni push desde arriba. La adopción fue progresiva — alguien veía un resultado, preguntaba con qué se había hecho, y pedía acceso.",
    footerText: "Los datos vienen de un stack de medición que definí e implementé: Google Analytics, Hotjar, Product Fruits y un dashboard personalizado con IA que diseñé y desplegué para dar visibilidad desde el equipo hasta el CTO.",
    footerTextShort: "Google Analytics · Hotjar · Product Fruits · Dashboard personalizado con IA"
  },
  decisions: {
    title: "Decisiones",
  },
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
  heroImage: "/assets/projects/moda.jpg"
};

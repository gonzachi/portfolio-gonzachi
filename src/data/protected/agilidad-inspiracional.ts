import 'server-only';

export const agilidadInspiracionalProtected = {
  discovery: {
    title: "Discovery inicial",
    description: [
      "Entre todos los hallazgos e insights detectados, decidimos llevar a cabo una sesión con hard-users de diseño + equipo técnico para poder definir el alcance y las especificaciones de la plataforma, al menos para un MVP.",
      "Los diseñadores no tenían un problema para inspirarse, sino para plasmar e iterar visualmente sus conceptos de forma ágil. A su vez, cada diseñador tiene un proceso de diseño y creatividad diferente — teníamos que ofrecer una experiencia adaptable.",
      "Los modelos que integraríamos en el momento para recibir feedback no estaban a la altura de la calidad que buscábamos. Iban a llegar, pero faltaba tiempo.",
      "Con todo esto, comenzamos a construir una plataforma bajo una metodología ágil basada en el discovery continuo, buscando entregar valor por más pequeño que fuera a corto plazo, en cada sprint."
    ],
    images: [
      "/assets/projects/moda/discovery-imagen-1.jpg",
      "/assets/projects/moda/discovery-imagen-2.jpg"
    ]
  },
  problem: {
    title: "Principales desafíos",
    statement: "El diseñador sabe lo que quiere. El problema es mostrarlo.",
    description: [
      "Los equipos de diseño de moda no tenían un problema de inspiración — tenían un problema de comunicación visual. Las referencias existían, pero la idea final vivía en la cabeza del diseñador. Para hacerla tangible había que pasar por Photoshop, collage manual, montajes que llevaban horas y nunca terminaban de transmitir la intención real.",
      "La oportunidad era comprimir ese salto: de la idea a la imagen. Que un diseñador pudiera mezclar referencias, visualizar una prenda sobre una modelo real y mostrar exactamente lo que tiene en mente — antes de enviar nada al proveedor."
    ]
  },
  solutionText: [
    "La plataforma comenzó siendo muy pequeña y luego la fuimos escalando a medida que validábamos y entregábamos valor a los diseñadores.",
    "La solución se trata de una plataforma conversacional, donde los usuarios pueden generar contenido a partir de imágenes de referencia de forma ágil, e iterar con pequeños prompts.",
    "A medida que avanzamos, fuimos añadiendo funcionalidades para agilizar su proceso de trabajo. Algunos ejemplos son las herramientas para, con un solo click, quitar fondo o escalar una imagen; o el Kit Creativo, que permite invocar con un \"@\" prompts guardados, paletas de colores o estilos guardados.",
    "Con estas funcionalidades buscamos entregar valor y agilizar el trabajo de los diseñadores para que puedan ser más productivos."
  ],
  challengesText: [
    "Uno de los desafíos más grandes fue moderar el feedback. Los diseñadores querían muchas cosas, y no podíamos entregar todo — había pedidos que ni siquiera eran responsabilidad nuestra, o que dependían de factores externos, como que la IA todavía no daba los resultados que necesitaban. Ahí el trabajo era escucharlos, empatizar, y a la vez ir redirigiendo la conversación hacia el feedback que sí nos servía para avanzar.",
    "También me tocó priorizar tareas sin ser PO y sin tener un PO presente de forma constante, lo cual no siempre fue fácil: había que tomar decisiones de producto sin tener siempre a quién consultar en el momento.",
    "A esto se sumó coordinar con el equipo de Data, que centralizaba información de los modelos y que muchas veces hacía que las cosas nos salieran más costosas de lo esperado. Y por otro lado, estaba el desafío de simplemente conseguir tiempo de los hard-users — tenían su propio trabajo a tope, y conseguir sus sesiones de feedback no siempre era simple.",
    "Por último, un aprendizaje importante fue el de bajar o alinear las expectativas de mi manager y otros superiores con lo que realmente estábamos pudiendo construir en cada sprint — gestionar esa distancia entre lo que se esperaba y lo que el contexto (modelos, recursos, tiempos) nos permitía entregar."
  ],
  resultsReveal: {
    title: "Impacto principal",
    stats: [
      { highlight: "+200", detail: "usuarios activos actuales (de los inicios con 10)", icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm8 4v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" },
      { highlight: "+50", detail: "departamentos integrados (empezando por un único departamento)", icon: "M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z" },
      { highlight: "+30.000", detail: "generaciones mensuales en la plataforma", icon: "M12 2l2.09 6.26L20.18 10l-6.09 1.74L12 18l-2.09-6.26L3.82 10l6.09-1.74L12 2z" }
    ],
    paragraphsBefore: [
      "Con un MVP bien logrado y resultados positivos por parte de nuestros hard-users, comenzamos a realizar pequeñas cápsulas de video para comunicar la nueva plataforma y sus funcionalidades. También se hicieron sesiones de demostración con equipos de otros departamentos para mostrar las fortalezas de la plataforma.",
      "Si bien estas acciones fueron útiles, la adopción fue progresiva — alguien veía un resultado, preguntaba con qué se había hecho, y pedía acceso."
    ],
    paragraphsAfter: [
      "Podríamos plantear que el mérito no es exclusivo de la plataforma, porque los modelos de IA cada vez son mejores y eso también fomenta la adopción. Pero en este caso los usuarios tienen acceso a cualquier plataforma del mercado, y hoy eligen usar la plataforma de la casa."
    ],
    footerText: "Los datos vienen de un stack de medición que definí e implementé: Google Analytics, Hotjar, Product Fruits y un dashboard personalizado con IA que diseñé y desplegué para dar visibilidad desde el equipo hasta el CTO.",
    footerTextShort: "Google Analytics · Hotjar · Product Fruits · Dashboard personalizado con IA"
  },
  decisions: {
    title: "Decisiones",
  },
  description: [
    "En este resumen intentaré explicar una parte del proyecto en el que estuve involucrado: <b>la construcción de una plataforma desde cero, desde el discovery hasta la primera salida a producción.</b>",
    "Para ello vale la pena situarnos en Junio de 2024. La IA generativa de imágenes existía — de hecho algunos usuarios ya comenzaban a utilizarla — pero no era algo muy accesible: plataformas como Midjourney eran poco intuitivas, y se temía por el riesgo a la privacidad de los datos. Es aquí donde apostamos por crear nuestra propia plataforma de IA generativa."
  ],
  contextImage: "/assets/projects/moda/line-time-v2.png",
  roleDescription: [
    "En los papeles mi rol aquí es de Product Designer, pero me gusta enlistar y destacar algunas tareas en las que estuve involucrado:"
  ],
  highlights: [
    {
      icon: "users",
      title: "Discovery con usuarios",
      description: "En la primera etapa de Discovery trabajé a la par de una compañera para llevar a cabo las sesiones"
    },
    {
      icon: "data",
      title: "Discovery técnico/data",
      description: "Entender como funciona la IA y los modelos fue algo complejo. Fueron varias sesiones con el líder del área de IA generativa para entender su postura, limitaciones y hacia donde podían ir."
    },
    {
      icon: "priority",
      title: "Priorización",
      description: "Basados en los pain points e insights obtenidos, moderé junto a mi manager las sesiones de priorización para plantear estratégicamente hacia dónde iría el producto, teniendo en cuenta limitaciones técnicas y necesidades de los usuarios."
    },
    {
      icon: "design",
      title: "UX/UI",
      description: "Comencé con el diseño del flujo y pantallas para estructurar y darle forma a la plataforma."
    },
    {
      icon: "test",
      title: "UX/UI research",
      description: "Testear con usuarios los principales flujos."
    },
    {
      icon: "owner",
      title: "Product Owner",
      description: "formalmente no era el Product Owner del proyecto — esa figura existía, pero tenía otros proyectos en paralelo y no podía estar muy encima del día a día. En la práctica, terminé asumiendo buena parte de esas responsabilidades: armé el roadmap con estimaciones y prioricé el backlog durante gran parte del desarrollo."
    }
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
  team: "2 frontend · 2 backend · Data/ML · Product Owner",
  tools: ["Figma", "Miro"],
  closing: {
    title: "El cierre",
    timeline: "Junio 2024 → presente",
    extra: "Diseñé y desplegué el dashboard de métricas con IA (queries provistas por backend)"
  },
  showcaseTitle: "Plataforma de generación de imágenes con inteligencia artificial para Mango",
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

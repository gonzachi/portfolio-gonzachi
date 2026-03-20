export const personalInfo = {
  name: "Gonzalo Chiavassa",
  roles: ["Product Designer", "Product Maker (AI First)", "Ownership Mindset", "Product Manager"],
  bio: [
    "Soy Gonzalo Chiavassa, Product Designer en Mango con más de 8 años de experiencia en diseño de producto.",
    "Mi trayectoria pasó por freelance, agencia y empresa de producto — cada etapa me dio una capa distinta: la autonomía de llevar proyectos completos de principio a fin, la velocidad de trabajar en entornos exigentes y la profundidad de construir productos a largo plazo con equipos multidisciplinares.",
    "Hoy trabajo en la intersección entre diseño, producto e inteligencia artificial. Me interesan los problemas sin manual de instrucciones: los que requieren investigar, decidir con información incompleta y construir desde cero. Especialmente cuando hay ownership real de por medio.",
    "Este portfolio recoge proyectos donde el diseño fue el punto de partida, pero las decisiones de producto fueron el trabajo."
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
    title: "De la referencia abstracta a la imagen real. En segundos.",
    type: "Plataforma interna",
    subtitle: "Plataforma interna de generación de imágenes con Inteligencia Artificial | @Mango · Inicio de proyecto: Jun 2024",
    context: {
      title: "Contexto — La apuesta",
      description: [
        "Junio de 2024. La IA generativa de imágenes era todavía territorio sin mapear. Midjourney existía pero era poco controlable para uso profesional. DALL·E 3 acababa de salir. Los modelos open source requerían setup técnico y daban resultados inconsistentes.",
        "No había ninguna solución lista para integrarse en un flujo de trabajo de moda. Y tampoco había un problema que los usuarios nos estuvieran gritando. Había una hipótesis estratégica: si la tecnología podía generar imágenes realistas de ropa, podíamos cortar horas del proceso creativo antes de que el mercado lo descubriera.",
        "Arrancamos con un equipo de data dispuesto a entrenar modelos propios. Esa fue la primera apuesta."
      ],
      milestones: [
        "Jun 2024 — inicio",
        "Pivote temprano",
        "2025 — mainstream"
      ]
    },
    problem: {
      title: "El problema",
      statement: "Horas buscando la imagen perfecta para explicar una idea.",
      description: [
        "En el discovery con los equipos de diseño de moda detectamos el cuello de botella: la fase de inspiración. Antes de diseñar cualquier pieza, los diseñadores pasaban horas buscando referencias en competidores, editoriales y redes.",
        "El trabajo era invisible, tedioso y bloqueante. La oportunidad no era reemplazar el diseño final — era acelerar ese primer paso."
      ]
    },
    resultsReveal: {
      title: "Resultados — Los números",
      stats: [
        { value: "300", label: "usuarios únicos en 30 días" },
        { value: "40K", label: "imágenes generadas al mes" },
        { value: "10+", label: "departamentos activos" }
      ],
      closingText: "Arrancamos con 10 usuarios a los que tuvimos que invitar. Nadie pedía la herramienta porque nadie imaginaba que podía existir. La adopción fue orgánica, impulsada por resultados, y creció más allá del departamento para el que fue diseñada.",
      footerText: "Los datos vienen de un stack de medición que definí e implementé: Google Analytics, Hotjar, Product Fruits y un dashboard personalizado con IA que diseñé y desplegué para dar visibilidad desde el equipo hasta el CTO.",
    },
    decisions: {
      title: "Decisiones",
      description: "El mayor desafío no fue el diseño. Fue tomar decisiones de producto cuando la tecnología era impredecible y el equipo tenía sus propias convicciones técnicas."
    },
    badge: "Más reciente ✨",
    roles: [],
    tools: ["Figma", "Gemini", "OpenAI", "PostHog"],
    timeline: ["Discovery", "Prototipo", "Testing", "Lanzamiento", "Iteración"],
    metrics: [
      { value: "1.5", label: "años de desarrollo" },
      { value: "0→1", label: "producto desde cero" },
      { value: "6", label: "personas en el equipo" }
    ],
    roleDescription: "Participé en la priorización del backlog, balanceando necesidades de usuario, experiencia de uso y objetivos de negocio. En los momentos donde no contábamos con un PO dedicado, asumí esa responsabilidad.",
    challenge: "Cuando empezamos, la IA generativa apenas existía. No había un problema claro que resolver, sino una oportunidad por descubrir: optimizar los flujos creativos internos.",
    team: "2 Frontend · 2 Backend · Data/ML · PO",
    description: [
      "Este proyecto nació hace un año y medio, cuando la inteligencia artificial generativa todavía no era mainstream. Desde Mango, detectamos una oportunidad: desarrollar desde cero una plataforma interna de generación de imágenes con IA.",
      "Comenzamos con los equipos de diseño de moda, realizando discovery para entender su flujo de trabajo. No partimos de un problema evidente, sino de una hipótesis: podíamos ayudarlos a optimizar tareas rutinarias y transmitir ideas creativas de forma más ágil.",
      "Al inicio la IA no daba los resultados esperados. Pero con cada funcionalidad nueva, los resultados mejoraban. Planificamos formaciones y jornadas con usuarios para impulsar la adopción y recoger feedback real.",
      "Hoy la plataforma es utilizada por cada vez más equipos y la adopción sigue creciendo. Lo que comenzó como un piloto se convirtió en una herramienta de referencia interna."
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
        title: "El pivote",
        description: "Escuchar al usuario por encima de la preferencia técnica\nEl feedback era claro: los resultados no justificaban la fricción. La decisión fue dejar de entrenar modelos propios e integrar los mejores modelos existentes del mercado. Nunca íbamos a competir con Google o OpenAI en capacidad de entrenamiento — pero sí podíamos construir la mejor experiencia encima de sus modelos.",
        illustrationTitle: "La tensión",
        illustrationText: "El equipo de data quería entrenar modelos propios. Era la apuesta técnica más ambiciosa. Pero los resultados no llegaban, y para obtenerlos había que forzar el flujo de usuario de formas que no tenían sentido."
      },
      {
        number: "Decisión 2",
        title: "Construir desde el feedback, no desde supuestos",
        description: "Paleta de colores personalizada, estilos guardados, prompts reutilizables, virtual try-on, eliminación de fondo, inpainting, upscaler. Ninguna de estas herramientas estaba en el roadmap inicial — surgieron de sesiones con usuarios reales usando la plataforma.",
        illustrationTitle: "Cada funcionalidad salió del discovery"
      },
      {
        number: "Decisión 3",
        title: "Diseñar para dos tipos de usuario",
        description: "A medida que crecía la base de usuarios, apareció una tensión nueva: los usuarios expertos querían libertad total, los nuevos querían resultados rápidos sin pensar tanto. La respuesta fue no elegir entre uno y otro.",
        bullets: [
          "**Modo conversacional**: El usuario tiene control total. Describe libremente, itera, ajusta parámetros. Para quienes ya saben lo que quieren y cómo pedirlo.",
          "**Acciones rápidas**: Flujos guiados paso a paso, con prompts predefinidos y parámetros simples. Para obtener resultados concretos sin fricción ni conocimiento previo de la IA."
        ],
        illustrationTitle: "Misma plataforma, dos experiencias.",
        illustrationText: "La decisión de diseño más importante del proyecto."
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
    images: [
      { src: "/assets/projects/moda/img-project-moda.jpg", alt: "Agilidad Inspiracional en la moda" }
    ],
    roadmap: {
      intro: "Como el producto ya está encaminado, mi foco ha vuelto al Product Design de alta fidelidad, pero la visión de producto sigue clara:",
      items: [
        { icon: "🎯", title: "Iteración técnica", description: "Refinar los modelos para que el realismo sea indistinguible de una fotografía de producto." },
        { icon: "📐", title: "Escalabilidad", description: "Extender la herramienta a más departamentos creativos dentro de la compañía." },
      ]
    },
    roleDescription: "Product Designer con ownership de backlog",
    team: "6 personas",
    tools: ["Figma", "PostHog", "OpenAI", "Gemini", "Google Analytics", "Hotjar", "Product Fruits", "Dashboard IA propio"],
    closing: {
      title: "El cierre",
      message: "El trabajo más valioso de producto no es diseñar interfaces.\nEs tomar decisiones cuando no hay información suficiente."
    }
  },
  {
    id: "proyecto-nuevo",
    number: "#2",
    title: "Próximamente un nuevo proyecto",
    type: "Coming Soon",
    roles: ["UX Designer", "UI Designer"],
    subtitle: "Aquí sumaré otro proyecto reciente muy pronto.",
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
    title: "Nuevo canal para nuestros usuarios",
    type: "App Mobile",
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
      "Este proyecto comienza como una necesidad de negocio y producto, pensando a futuro en los usuarios.",
      "Como datos duros, sabemos que el 80% de nuestros usuarios ingresan a la plataforma desde su dispositivo celular. Nuestra plataforma es responsive, pero no está 100% optimizada, y se optó por entregar al usuario una mejor experiencia con una solución mobile más robusta y así tener un nuevo canal de comunicación con los clientes.",
      "Se decidió en equipo que lanzaremos un MVP friends&family y luego un MVP a los usuarios en general, donde la app mobile sea solo de consulta. Las limitaciones se deben al tiempo de desarrollo. Con el pasar del tiempo, la idea es que la app siga creciendo hasta igualar a la plataforma desktop.",
      "En el proceso de diseño tuvimos muchas iteraciones, hasta obtener el resultado final. El usuario podrá acceder a la plataforma, revisar sus cuentas de inversiones y realizar una inversión.",
      "Actualmente nos encontramos esperando el lanzamiento MVP a los usuarios para comenzar a obtener información de relevancia para realizar las iteraciones pertinentes."
    ],
    video: "/videos/app-mobile-1.mp4",
    images: [
      { src: "/images/project1-1.png", alt: "App Mobile Screen 1" },
      { src: "/images/project1-2.png", alt: "App Mobile Screen 2" },
      { src: "/images/project1-3.png", alt: "App Mobile Screen 3" },
      { src: "/images/project1-4.png", alt: "App Mobile Screen 4" }
    ],
    note: "Lo que estás viendo se trata de un prototipo armado en Figma"
  },
  {
    id: "project-2",
    number: "#4",
    title: "Mejora de propuesta de inversión",
    type: "UX/UI Designer",
    roles: ["UX/UI Designer", "Product Designer"],
    subtitle: "Rediseñé el onboarding de inversión reduciendo la complejidad informativa para aumentar conversiones.",
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
      "Este proyecto nace de los input recolectados por el comportamiento de los usuarios en la etapa de onboarding del producto. La información fue recolectada desde plataformas de datos como Clarity y PostHog y por entrevistas por parte del equipo de research a usuarios que quedaron sin terminar el proceso de onboarding.",
      "Gran parte de las hipótesis se centraban en que los usuarios no comprendían la gran cantidad de información que se brindaba, les resultaba abrumador, confuso, no terminaban de leer todo y por consiguiente no continuaban el proceso.",
      "Desde producto y UX, hicimos un análisis junto al equipo de expertos en finanzas dónde priorizamos aquella información imprescindible y de valor para el usuario, lo que nos dio como resultado la posibilidad de reducir toda la información que contiene el portafolio seleccionado por el usuario.",
      "A su vez, desde UX y UI, le dimos un estilo más narrativo, para que sea sencillo de leer e incluso sencillo de escanear a simple vista, haciendo foco en datos de gran relevancia para el usuario y que permitan aumentar las conversiones por parte de negocio.",
      "Para finalizar este proceso, enviamos al equipo de desarrollo en formato de pitch todos los requisitos y pantallas diseñadas para que se lleven a cabo. Luego, en equipo realizamos QA para optimizar resultados."
    ],
    video: "/videos/new-ladrillo.mp4",
    images: [
      { src: "/images/project2-1.jpg", alt: "Rendimiento histórico del portafolio", caption: "Buscamos mostrar de forma clara cuánto rindió el portafolio seleccionado en el pasado (ya que no se puede predecir el futuro). A su vez, agregamos un \"viaje en el tiempo\" que permitirá al usuario ver un número más realista de cuánto tendría si hubiera invertido X dinero." },
      { src: "/images/project2-2.jpg", alt: "Empresas del ETF", caption: "Decidimos darle más importancia a las empresas que componen los ETF en los cuáles se invierte. Esto permite que el usuario esté más familiarizado con el portfolio y se interese más en invertir." },
      { src: "/images/project2-3.jpg", alt: "Video IA", caption: "Con los datos recabados, decidimos darle mayor importancia a lo que nuestra Inteligencia Artificial había construido, por eso agregamos un pequeño video que introduce al usuario en el tema." },
      { src: "/images/project2-4.jpg", alt: "CTA ampliado", caption: "Por supuesto, ampliamos el llamado a la acción al finalizar el scroll del portafolio seleccionado. Con esto buscamos que los usuarios conviertan de forma más simple y rápida." }
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

export const behanceProjects = [
  {
    title: "Proclub App",
    image: "/images/behance-proclub.webp",
    link: "https://www.behance.net/gallery/120076233/Proclub-app-Propuesta-UXUI"
  },
  {
    title: "Payoneer Case Study",
    image: "/images/behance-payoneer.webp",
    link: "https://www.behance.net/gallery/114698225/UXUI-Case-Study-Payoneer"
  },
  {
    title: "Comodinshop E-commerce",
    image: "/images/behance-comodin.webp",
    link: "https://www.behance.net/gallery/81411145/Comodinshop-UX-UI-design-e-commerce"
  }
];

export const education = [
  {
    id: "nuclio",
    title: "Master en Digital Product Management",
    institution: "Nuclio Digital School",
    period: "2025–2026",
    logo: "/assets/home/nuclio-digital-school-squarelogo-1646726789081.png"
  },
  {
    id: "siglo21",
    title: "Licenciado en Diseño Gráfico",
    institution: "Universidad Siglo 21",
    period: "2012-2017",
    logo: "/assets/home/lasiglo21_logo.jpeg"
  },
  {
    id: "coder-ux-avanzado",
    title: "Diseño UX/UI Avanzado",
    institution: "Coderhouse",
    period: "2020-2021",
    logo: "/assets/home/coderhouse_logo-150x150.jpeg"
  },
  {
    id: "coder-pm",
    title: "Product Manager",
    institution: "Coderhouse",
    period: "2020-2020",
    logo: "/assets/home/coderhouse_logo-150x150.jpeg"
  },
  {
    id: "coder-ux",
    title: "Diseño UX/UI",
    institution: "Coderhouse",
    period: "2019-2020",
    logo: "/assets/home/coderhouse_logo-150x150.jpeg"
  },
  {
    id: "udemy",
    title: "UX: Máster en Diseño web y Experiencia de Usuario",
    institution: "Udemy",
    period: "sept. 2019",
    logo: "/assets/home/udemy_logo.jpeg"
  }
];

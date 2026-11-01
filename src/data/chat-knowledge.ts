import { personalInfo } from './content';
import { resumePath } from './chat';

// Everything the chat "knows". Each topic is one thing a recruiter or
// collaborator is likely to ask, with the triggers that route a free-text
// question to it (src/lib/chat/engine.ts scores them), the answer in both
// languages, and the follow-ups that naturally come next.
//
// Facts here come from src/data/content.ts and the case studies — if a
// question needs something the site doesn't say (salary, visa, notice
// period...), the answer says so and points to email instead of guessing.

export type L = { en: string; es: string };
const l = (en: string, es: string): L => ({ en, es });

export interface TopicAnswer {
  text: L | L[];
  link?: { label: L; href: string };
  links?: { label: L; href: string }[];
  projects?: boolean;
  openResume?: boolean;
}

export interface Topic {
  id: string;
  /** What the visitor "says" — doubles as the chip / suggestion button label. */
  label: L;
  /** Regexes run against normalized text (lowercase, no accents/punctuation). */
  strong: RegExp[];
  weak?: RegExp[];
  /** Social topics (greetings, thanks) only answer when no content topic matched. */
  social?: boolean;
  answer: TopicAnswer;
  /** Substantive question (personal, career, flagship work): the answer closes by inviting a real conversation. */
  invite?: boolean;
  /** Deeper follow-up, served on "tell me more" or a repeated question. */
  more?: TopicAnswer;
  /** Topic ids that naturally follow, in priority order. */
  suggest: string[];
}

const email = personalInfo.email;

export const topics: Topic[] = [
  // ─────────────── Social ───────────────
  {
    id: 'greeting',
    label: l('Hi!', '¡Hola!'),
    social: true,
    strong: [
      /^(hola+|holis+|holi|buenas|buen dia|buenos dias|buenas tardes|buenas noches|que tal|hi+|hey+|hello+|hiya|howdy|good (morning|afternoon|evening))\b/,
    ],
    answer: {
      text: [
        l(
          "Hey, welcome! I'm Gon. Ask me anything a recruiter or a future teammate would want to know: my experience, the projects I'm proudest of, how I work with AI.",
          '¡Hola, bienvenido/a! Soy Gon. Preguntame lo que quiera saber un reclutador o un futuro compañero de equipo: mi experiencia, los proyectos de los que más orgulloso estoy, cómo trabajo con IA.'
        ),
        l(
          "Hi again! Anything specific you'd like to dig into? Projects, experience, how I use AI... or just tell me what you're looking for.",
          '¡Hola de nuevo! ¿Hay algo puntual que quieras profundizar? Proyectos, experiencia, cómo uso la IA... o contame qué estás buscando.'
        ),
      ],
    },
    suggest: ['who', 'projects', 'strengths'],
  },
  {
    id: 'smalltalk',
    label: l('How are you?', '¿Cómo estás?'),
    social: true,
    strong: [/\b(how are you|how is it going|hows it going|how are things|whats up|wassup|que onda|como te va|como estas|como andas|como va|todo bien|que tal estas)\b/],
    answer: {
      text: l(
        "Doing great, thanks for asking! Excited to talk about my work. What would you like to know?",
        '¡Muy bien, gracias por preguntar! Con ganas de charlar sobre mi trabajo. ¿Qué te gustaría saber?'
      ),
    },
    suggest: ['who', 'projects', 'strengths'],
  },
  {
    id: 'thanks',
    label: l('Thanks!', '¡Gracias!'),
    social: true,
    strong: [
      /\b(gracias|muchas gracias|thanks|thank you|thx|ty|genial|perfecto|excelente|buenisimo|great|awesome|nice|cool|lovely|amazing|brilliant|impresionante|impressive)\b/,
      /^(ok|okay|vale|dale|listo|entiendo|entendido|got it|i see|ah ok|ahh|aha|bien|bueno)$/,
    ],
    answer: {
      text: [
        l(
          "Glad it helps! If you want to go deeper on anything, just ask — or we can take it to a real conversation.",
          '¡Me alegra que sirva! Si querés profundizar en algo, preguntame — o lo llevamos a una charla de verdad.'
        ),
        l(
          "Anytime! If something caught your eye, I'm happy to expand on it.",
          '¡Cuando quieras! Si algo te llamó la atención, con gusto lo amplío.'
        ),
      ],
    },
    suggest: ['projects', 'resume', 'contact'],
  },
  {
    id: 'bye',
    label: l('Bye!', '¡Chau!'),
    social: true,
    strong: [/\b(chau|chao|adios|bye|goodbye|hasta luego|hasta pronto|nos vemos|see you|talk soon|cya)\b/],
    answer: {
      text: l(
        `Thanks for stopping by! If you'd like to continue the conversation, write to me at ${email}.`,
        `¡Gracias por pasar! Si querés seguir la conversación, escribime a ${email}.`
      ),
      link: { label: l('Send an email', 'Enviar un email'), href: `mailto:${email}` },
    },
    suggest: [],
  },

  // ─────────────── About me ───────────────
  {
    id: 'who',
    label: l('Who are you?', '¿Quién sos?'),
    strong: [
      /\b(who are you|who is gon|who is gonzalo|quien sos|quien eres|quien es gon|quien es gonzalo)\b/,
      /\b(tell me about (yourself|you)|about you|introduce yourself|presentate|hablame de vos|contame de vos|cuentame de ti|cuentame sobre ti|sobre ti|sobre vos)\b/,
      /^(what do you do( for a living)?|a que te dedicas|que haces( de tu vida)?)$/,
      /\b(elevator pitch|your profile|tu perfil|resumen de vos)\b/,
    ],
    answer: {
      text: l(
        "I'm Gonzalo Chiavassa, a Product Designer with an ownership mindset and an end-to-end view of product. I have 8+ years of experience, and today I build internal products at Mango. I'm originally from Córdoba, Argentina, and now I'm growing toward a Product Manager role.",
        'Soy Gonzalo Chiavassa, Product Designer con mentalidad de ownership y visión de producto end-to-end. Tengo más de 8 años de experiencia y hoy construyo productos internos en Mango. Soy de Córdoba, Argentina, y estoy evolucionando hacia un rol de Product Manager.'
      ),
      link: { label: l('Learn more on my profile', 'Conocé más en mi perfil'), href: '/perfil' },
    },
    more: {
      text: l(
        "What defines me is wanting to understand the whole picture: what the user needs, what the business needs and what's technically possible, and building the product that connects the three. I've done it in a regulated fintech, in agencies, as a freelancer and now in a global fashion company.",
        'Lo que me define es querer entender el panorama completo: qué necesita el usuario, qué necesita el negocio y qué es técnicamente posible, y construir el producto que conecta las tres cosas. Lo hice en una fintech regulada, en agencias, como freelance y ahora en una empresa global de moda.'
      ),
    },
    suggest: ['experience', 'strengths', 'pm'],
  },
  {
    id: 'experience',
    label: l("What's your experience?", '¿Cuál es tu experiencia?'),
    strong: [
      /\b(trayectoria|career|carrera|background|work history|historial|cv summary)\b/,
      /\b(years of experience|anos de experiencia|cuantos anos|how many years|how long have you)\b/,
      /\b(where (did|do) you work|where have you worked|donde trabajaste|donde trabajas|en que empresas|which companies|what companies|companies you)\b/,
      /\b(previous (jobs|roles|companies)|trabajos anteriores|empleos anteriores|past roles)\b/,
    ],
    weak: [/\b(experience|experiencia|trabaj\w*|worked|working|empresas|companies|jobs?)\b/],
    invite: true,
    answer: {
      text: l(
        "I have 8+ years across very different contexts: a regulated fintech in Chile (Holdo), freelance work (gonzachi.com), an agency where I led the design team (QUO) and now a global fashion company (Mango), where I'm Senior Product Designer. The common thread is always the same: understand what users and the business need, and build the product that connects both.",
        'Tengo más de 8 años en contextos muy distintos: una fintech regulada en Chile (Holdo), freelance (gonzachi.com), una agencia donde lideré el equipo de diseño (QUO) y ahora una empresa global de moda (Mango), donde soy Senior Product Designer. El hilo común siempre fue el mismo: entender qué necesitan los usuarios y el negocio, y construir el producto que conecta ambas cosas.'
      ),
      link: { label: l('See my full journey', 'Ver toda mi trayectoria'), href: '/perfil#experiencia' },
    },
    more: {
      text: l(
        'Quick timeline: I started in graphic design at QUO in 2016 (and ended up leading the design team), moved into UX/UI as a freelancer in 2019, joined Holdo in 2022 as Product Designer, and since June 2024 I\'m at Mango. Basically graphic design → UX/UI → product.',
        'Línea de tiempo rápida: empecé en diseño gráfico en QUO en 2016 (y terminé liderando el equipo de diseño), pasé a UX/UI como freelance en 2019, entré a Holdo en 2022 como Product Designer y desde junio de 2024 estoy en Mango. Básicamente: diseño gráfico → UX/UI → producto.'
      ),
    },
    suggest: ['mango', 'holdo', 'strengths'],
  },
  {
    id: 'strengths',
    label: l('Why should we hire you?', '¿Por qué deberíamos contratarte?'),
    strong: [
      /\b(why (should|would) (we|i) (hire|pick|choose)|why you|why hire|por que (deberiamos|deberia|tendriamos que) (contratarte|contratarlo|elegirte)|por que contratarte|por que contratarlo)\b/,
      /\b(strengths?|fortalezas?|puntos fuertes|best (skills|qualities)|mejores cualidades)\b/,
      /\b(what makes you (different|unique|special)|que te diferencia|que te hace (diferente|unico)|value (do )?you (bring|add)|valor (que )?aportas|que aportas|what can you bring|what do you bring)\b/,
      /\b(superpower|superpoder|selling point|good at|bueno en que|en que sos bueno)\b/,
    ],
    invite: true,
    answer: {
      text: l(
        "Three things. Ownership: I like owning a problem from discovery to QA. Range: I connect user needs, business goals and technical constraints, and I can prototype in code, not just in Figma. And adaptability: I've worked in fintech, fashion, agencies and startups, so I ramp up fast in new domains.",
        'Tres cosas. Ownership: me gusta hacerme cargo de un problema desde el discovery hasta el QA. Rango: conecto necesidades del usuario, objetivos de negocio y restricciones técnicas, y puedo prototipar en código, no solo en Figma. Y adaptabilidad: trabajé en fintech, moda, agencias y startups, así que aprendo rápido dominios nuevos.'
      ),
    },
    more: {
      text: l(
        "A concrete example: at Mango I started as a designer on a generative AI platform, ended up covering the Product Owner role when the team didn't have one, and now I'm prototyping directly in code with the real design system. I tend to grow into whatever the product needs.",
        'Un ejemplo concreto: en Mango arranqué como diseñador en una plataforma de IA generativa, terminé cubriendo el rol de Product Owner cuando el equipo no tenía uno y ahora prototipo directo en código con el design system real. Suelo crecer hacia lo que el producto necesita.'
      ),
    },
    suggest: ['impact', 'pm', 'projects'],
  },
  {
    id: 'weakness',
    label: l('What are your weaknesses?', '¿Cuáles son tus puntos débiles?'),
    strong: [
      /\b(weakness(es)?|debilidad(es)?|puntos? (debil(es)?|flacos?)|defectos?|flaquezas?|areas? (to|de) (improve|mejora)|what (do you|would you) (need|want) to improve|que (te|tenes que|queres) mejorar|worst at|malo en)\b/,
      /\b(what are you (still )?learning|que estas aprendiendo|growth areas?)\b/,
    ],
    invite: true,
    answer: {
      text: l(
        "Honestly: English. It's my second language, and I'm actively training it, along with soft skills to communicate more effectively. I'd rather be upfront about it than have you find out later.",
        'Con honestidad: el inglés. Es mi segundo idioma y lo estoy entrenando activamente, junto con habilidades blandas para comunicarme mejor. Prefiero decírtelo de entrada a que lo descubras después.'
      ),
    },
    suggest: ['pm', 'languages', 'strengths'],
  },
  {
    id: 'impact',
    label: l("What's your biggest achievement?", '¿Cuál fue tu mayor logro?'),
    strong: [
      /\b(achievements?|logros?|accomplishments?|proud(est)? of|orgulloso|orgullo|biggest (win|impact|success)|mayor exito|mayor impacto)\b/,
      /\b(impact|impacto|results?|resultados?|metrics?|metricas?|kpis?|numbers|numeros|success stor(y|ies)|casos? de exito|moved the needle)\b/,
    ],
    invite: true,
    answer: {
      text: l(
        "A few I'm proud of. At Holdo, the mobile app MVP: most active users adopted it as their go-to channel. At Mango, taking a generative AI platform for fashion designers from zero to a tool a growing number of teams use. And lately, changing my own way of working to design directly in code.",
        'Algunos de los que más me enorgullecen. En Holdo, el MVP de la app móvil: la mayoría de los usuarios activos la adoptó como su canal habitual. En Mango, llevar una plataforma de IA generativa para diseñadores de moda de cero a una herramienta que usan cada vez más equipos. Y últimamente, cambiar mi propia forma de trabajar para diseñar directo en código.'
      ),
      link: { label: l('Browse the case studies', 'Ver los casos de estudio'), href: '/proyectos' },
    },
    more: {
      text: l(
        "I try to be careful with numbers: the onboarding redesign went to production, but I left Holdo before the final metrics, so I don't claim impact I can't back up. What I can tell you is the problem, the decisions and why we made them — that's what the case studies show.",
        'Intento ser cuidadoso con los números: el rediseño del onboarding llegó a producción, pero dejé Holdo antes de tener las métricas finales, así que no afirmo impacto que no pueda respaldar. Lo que sí puedo contarte es el problema, las decisiones y por qué las tomamos — eso es lo que muestran los casos.'
      ),
    },
    suggest: ['mobile-app', 'fashion-ai', 'onboarding'],
  },
  {
    id: 'pm',
    label: l('Why move into Product Management?', '¿Por qué querés pasar a Product Management?'),
    strong: [
      /\b(product manager|product management|product owner|\bpm\b|\bpo\b|gestion de producto|gerente de producto)\b/,
      /\b(career (goals?|path|change)|next step|proximo paso|hacia donde (vas|queres)|where do you see yourself|donde te ves|objetivos? profesional(es)?|aspiraciones?)\b/,
      /\b(master|máster|nuclio)\b/,
    ],
    invite: true,
    answer: {
      text: l(
        "I want to be closer to the decisions: what we build and why. I just finished a Master in Digital Product Management (Nuclio, Barcelona), I took a Product Manager course at Coderhouse, and at Mango I've already acted as Product Owner. My design background helps me connect user needs with business and technical goals.",
        'Quiero estar más cerca de las decisiones: qué construimos y por qué. Terminé hace poco el Máster en Digital Product Management (Nuclio, Barcelona), hice un curso de Product Manager en Coderhouse y en Mango ya actué como Product Owner. Mi background en diseño me ayuda a conectar necesidades del usuario con objetivos técnicos y de negocio.'
      ),
      link: { label: l('See my education', 'Ver mi formación'), href: '/perfil#formacion' },
    },
    more: {
      text: l(
        "In practice, as PO of the team-orchestration platform I prioritize the backlog with engineering, talk to stakeholders across 5+ teams and prototype the front end myself. It's the best preview of how I'd work as a PM.",
        'En la práctica, como PO de la plataforma de orquestación de equipos priorizo el backlog con ingeniería, hablo con stakeholders de más de 5 equipos y prototipo el front yo mismo. Es la mejor muestra de cómo trabajaría como PM.'
      ),
    },
    suggest: ['orchestrator', 'education', 'collaboration'],
  },
  {
    id: 'education',
    label: l('Where did you study?', '¿Dónde estudiaste?'),
    strong: [
      /\b(education|educacion|formacion|estudios?|studies|studied|estudiaste|estudiar|study|degree|titulo|licenciatura|universidad|university|college|bachelor|courses?|cursos?|certifications?|certificados?|certificaciones)\b/,
    ],
    answer: {
      text: l(
        "I have a degree in Graphic Design (Universidad Siglo 21, 2012-2017), then UX/UI and Product Manager courses at Coderhouse and a UX master's on Udemy. Most recently, a Master in Digital Product Management at Nuclio Digital School in Barcelona (2025-2026).",
        'Soy Licenciado en Diseño Gráfico (Universidad Siglo 21, 2012-2017), después hice cursos de UX/UI y Product Manager en Coderhouse y un máster de UX en Udemy. Lo más reciente: el Máster en Digital Product Management en Nuclio Digital School, en Barcelona (2025-2026).'
      ),
      link: { label: l('See my education', 'Ver mi formación'), href: '/perfil#formacion' },
    },
    suggest: ['pm', 'languages', 'experience'],
  },
  {
    id: 'languages',
    label: l('What languages do you speak?', '¿Qué idiomas hablás?'),
    strong: [
      /\b(languages?|idiomas?|english|ingles|spanish|espanol|castellano|catalan|portugues|portuguese|bilingue|bilingual|fluent|fluido|habl\w+ (ingles|espanol|english)|speak (english|spanish|catalan))\b/,
    ],
    answer: {
      text: l(
        "Spanish is my native language (I'm Argentine). I'm actively training my English to communicate better in international teams — I'd rather you judge it live than take my word for it. Happy to run a conversation in either.",
        'El español es mi lengua nativa (soy argentino). Estoy entrenando activamente mi inglés para comunicarme mejor en equipos internacionales; prefiero que lo juzgues en vivo antes que creerme. Con gusto hacemos una charla en cualquiera de los dos.'
      ),
    },
    suggest: ['location', 'logistics', 'contact'],
  },
  {
    id: 'location',
    label: l('Where are you based?', '¿Dónde vivís?'),
    strong: [
      /\b(where (are you|do you) (based|live|from)|donde vivis|donde vives|donde estas|donde estas viviendo|de donde sos|de donde eres|location|ubicacion|do you live|donde vivis|ciudad|city|country|pais|nationality|nacionalidad)\b/,
    ],
    weak: [/\b(barcelona|cordoba|argentin\w*|spain|espana|live in|vivis en|vivis)\b/],
    answer: {
      text: l(
        "I'm from Córdoba, Argentina, and I've been living in Barcelona for the past 2 years. I currently work on-site at Mango's offices here.",
        'Soy de Córdoba, Argentina, y vivo en Barcelona hace 2 años. Actualmente trabajo de forma presencial en las oficinas de Mango acá.'
      ),
      link: { label: l('More about me', 'Más sobre mí'), href: '/perfil' },
    },
    suggest: ['logistics', 'hobbies', 'languages'],
  },
  {
    id: 'logistics',
    label: l('What about salary, availability or visa?', '¿Y sueldo, disponibilidad o visa?'),
    strong: [
      /\b(salary|salario|sueldo|compensation|compensacion|pretension(es)?|expectativas? salarial(es)?|your rate|hourly rate|tarifa|cobras?|cobrar|how much (do you|would you)|cuanto (cobras|cobrarias|queres ganar|ganas)|paga)\b/,
      /\b(visa|work permit|permiso de trabajo|permiso de residencia|work authori[sz]ation|autorizacion de trabajo|residencia|residency|sponsor\w*|nie|citizenship|ciudadania|passport|pasaporte)\b/,
      /\b(relocat\w*|reubicar\w*|mudar\w*|mudarte|trasladar\w*|willing to move|dispuesto a mudarte)\b/,
      /\b(remote\w*|remoto|hybrid|hibrido|on[- ]?site|presencial|work from home|teletrabajo|home office)\b/,
      /\b(availab\w*|disponib\w*|start date|fecha de inicio|when can you start|cuando podes empezar|notice period|preaviso|aviso previo|contract type|tipo de contrato|full[- ]?time|part[- ]?time|jornada)\b/,
    ],
    answer: {
      text: l(
        `Those are details I'd rather talk through directly, since they depend on the role. What I can tell you: I'm based in Barcelona and currently work on-site at Mango. For salary, availability or work authorization, email me at ${email} and I'll reply personally.`,
        `Esos son detalles que prefiero charlar directamente, porque dependen del rol. Lo que sí te puedo decir: vivo en Barcelona y hoy trabajo de forma presencial en Mango. Para sueldo, disponibilidad o autorización de trabajo, escribime a ${email} y te respondo personalmente.`
      ),
      link: { label: l('Send an email', 'Enviar un email'), href: `mailto:${email}` },
    },
    suggest: ['job-search', 'contact', 'resume'],
  },
  {
    id: 'job-search',
    label: l('Are you open to new opportunities?', '¿Estás abierto a nuevas oportunidades?'),
    strong: [
      /\b(looking for (a )?(new )?(job|role|opportunit\w*|position|work)|open to (work|opportunit\w*|offers?|new)|buscando (trabajo|empleo|oportunidad\w*)|abierto a (propuestas|oportunidades|ofertas)|oportunidades?|opportunit\w*|job search|busqueda laboral|cambiar de trabajo|change jobs?|interested in (a )?(new )?(role|job))\b/,
      /\b(recruiter|reclutador\w*|recruiting|talent (acquisition|partner|team)|sourcer|headhunter|soy de rrhh|hr (manager|team)|an? opening|opening for|we have an? (role|opening|position)|hiring|we are hiring|tenemos una (vacante|posicion|oferta)|job offer|oferta laboral|vacante|position (open|available)|we have a role|te queremos ofrecer|te quiero ofrecer)\b/,
    ],
    answer: {
      text: l(
        `Thanks for reaching out! I'm focused on evolving toward a Product Manager role, applying everything I've learned in product design. If you have something where that fits, I'd love to hear about it — write to me at ${email} and tell me about the role.`,
        `¡Gracias por escribir! Estoy enfocado en evolucionar hacia un rol de Product Manager, aplicando todo lo que aprendí en diseño de producto. Si tenés algo donde eso encaje, me encantaría escucharlo: escribime a ${email} y contame sobre el rol.`
      ),
      link: { label: l('Send an email', 'Enviar un email'), href: `mailto:${email}` },
    },
    suggest: ['pm', 'resume', 'logistics'],
  },
  {
    id: 'hobbies',
    label: l('What do you do outside of work?', '¿Qué hacés fuera del trabajo?'),
    strong: [
      /\b(hobbies|hobby|outside (of )?work|free time|spare time|for fun|fun fact|tiempo libre|fuera del trabajo|pasatiempos?|pasa tiempos|que haces cuando no trabajas|que te gusta hacer|interests|intereses|about you as a person|sobre vos como persona)\b/,
      /\b(do you run|you run|corres|salis a correr|running|correr|marathon|maraton|media maraton|sports?|deportes?|gym|gimnasio|cook\w*|cocin\w*|asado|mate|medialunas?|favou?rite food|comida favorita|football|futbol|soccer|nature|naturaleza|music|musica|travel\w*|viajar|viajes)\b/,
    ],
    answer: {
      text: l(
        "Outside of work I run (I'm training for the Barcelona half marathon), I cook, and I love being in nature. Asado, mate and medialunas are non-negotiable. And yes, I'm an Argentine who doesn't care about football.",
        'Fuera del trabajo salgo a correr (me estoy entrenando para la media maratón de Barcelona), cocino y me encanta estar en la naturaleza. Asado, mate y medialunas son innegociables. Y sí, soy un argentino al que no le gusta el fútbol.'
      ),
    },
    suggest: ['location', 'who', 'projects'],
  },

  // ─────────────── Work & projects ───────────────
  {
    id: 'projects',
    label: l('My latest projects', 'Mis últimos proyectos'),
    strong: [
      /\b(projects?|proyectos?|portfolio|portafolio|case stud(y|ies)|casos? de estudio|casos|show me (your )?work|mostrame (tu|tus) trabajos?|what have you (built|made|done|designed)|que has (hecho|disenado|construido)|que hiciste|que disenaste|que construiste|best work|mejor trabajo|portfolio examples?)\b/,
    ],
    answer: {
      text: l(
        "Here are some of the projects I've been working on lately. Pick any of them, or ask me about one and I'll tell you the story behind it.",
        'Estos son algunos de los proyectos en los que estuve trabajando últimamente. Elegí el que quieras, o preguntame por alguno y te cuento la historia detrás.'
      ),
      link: { label: l('See all projects', 'Ver todos los proyectos'), href: '/proyectos' },
      projects: true,
    },
    suggest: ['design-in-code', 'onboarding', 'fashion-ai'],
  },
  {
    id: 'now',
    label: l('What are you working on right now?', '¿En qué estás trabajando ahora?'),
    strong: [
      /\b(right now|ahora mismo|currently|actualmente|at the moment|en este momento|these days|estos dias|lately|ultimamente|current (role|job|work|project)|trabajo actual|que estas haciendo|what are you (doing|working on|building)|en que estas)\b/,
    ],
    answer: {
      text: l(
        "Right now at Mango I'm building a team-orchestration platform, replacing manual, spreadsheet-and-email-driven journey content processes with a proper internal tool, built with an AI-first approach. I'm acting as Product Owner and prototyping the front end myself.",
        'Ahora mismo en Mango estoy construyendo una plataforma de orquestación de equipos, reemplazando procesos manuales basados en planillas y emails por una herramienta interna real, con un enfoque AI-first. Hago de Product Owner y prototipo el front yo mismo.'
      ),
      link: { label: l('See the case study', 'Ver el caso de estudio'), href: '/project/orquestadora-de-equipos' },
    },
    suggest: ['design-in-code', 'mango', 'pm'],
  },
  {
    id: 'mango',
    label: l('What do you do at Mango?', '¿Qué hacés en Mango?'),
    strong: [/\b(mango|fashion|moda|retail)\b/],
    invite: true,
    answer: {
      text: l(
        "At Mango I'm Senior Product Designer on internal products. The biggest one is a generative AI platform for fashion designers: discovery, MVP definition, research and prototyping with product and engineering. More recently I've taken a PO/front-end role on a team-orchestration platform and been exploring designing directly in code.",
        'En Mango soy Senior Product Designer en productos internos. El más grande es una plataforma de IA generativa para diseñadores de moda: discovery, definición del MVP, research y prototipado junto a producto e ingeniería. Más recientemente tomé un rol de PO/front en una plataforma de orquestación de equipos y vengo explorando el diseño directo en código.'
      ),
      link: { label: l('See my projects', 'Ver mis proyectos'), href: '/proyectos' },
    },
    more: {
      text: l(
        "Mango is a global fashion company based in Barcelona, so my users are internal teams (designers, content, etc.). Success isn't downloads, it's time saved and adoption. Two of those case studies are confidential and password-protected — email me and I'll share access.",
        'Mango es una empresa global de moda con base en Barcelona, así que mis usuarios son equipos internos (diseño, contenido, etc.). El éxito no son las descargas sino el tiempo ahorrado y la adopción. Dos de esos casos son confidenciales y están protegidos con contraseña: escribime y te paso el acceso.'
      ),
      link: { label: l('Request access', 'Pedir acceso'), href: `mailto:${email}` },
    },
    suggest: ['fashion-ai', 'orchestrator', 'design-in-code'],
  },
  {
    id: 'holdo',
    label: l('Tell me about Holdo and fintech', 'Contame sobre Holdo y fintech'),
    strong: [
      /\b(holdo|fintech|robo[- ]?advisor|inversion(es)?|investments?|investing|banking|banca|finance|finanzas|financial|financiero|chile|regulated|regulada|regulado|cmf)\b/,
    ],
    invite: true,
    answer: {
      text: l(
        "Holdo is a Chilean fintech (a robo-advisor regulated by the CMF) where I was Product Designer from June 2022 to June 2024. I designed the mobile app MVP, redesigned the investment-proposal step of onboarding to reduce drop-off, and rebuilt the website in Webflow. It taught me to design with real regulatory constraints.",
        'Holdo es una fintech chilena (un robo-advisor regulado por la CMF) donde fui Product Designer de junio 2022 a junio 2024. Diseñé el MVP de la app móvil, rediseñé el paso de propuesta de inversión del onboarding para reducir el abandono y reconstruí el sitio web en Webflow. Me enseñó a diseñar con restricciones regulatorias reales.'
      ),
    },
    more: {
      text: l(
        'The biggest lesson from fintech: trust is built with clarity, not exhaustiveness. Showing less, at the right moment, makes people feel safer than showing everything at once. I worked directly with the CEO, the CTO and a finance expert to separate real requirements from design inertia.',
        'La mayor lección de fintech: la confianza se construye con claridad, no con exhaustividad. Mostrar menos, en el momento justo, genera más seguridad que mostrar todo de golpe. Trabajé directo con el CEO, el CTO y un experto en finanzas para separar requisitos reales de inercia del diseño anterior.'
      ),
    },
    suggest: ['onboarding', 'mobile-app', 'website'],
  },
  {
    id: 'onboarding',
    label: l('How did you reduce onboarding drop-off?', '¿Cómo redujiste el abandono del onboarding?'),
    strong: [
      /\b(onboarding|drop[- ]?off|abandono|conversion|conversiones|propuesta de inversion|investment proposal|portfolio redesign|rediseno del portafolio|funnel|embudo)\b/,
    ],
    answer: {
      text: l(
        'Users were abandoning the last onboarding step, where we showed the investment proposal: 5 dense tabs that felt like a mortgage contract. Using PostHog/Clarity data and user interviews, I worked with a finance expert to decide what was regulatory, useful, or just inertia, and redesigned it as a scannable, narrative flow. It went to production; I left before final metrics, so I won\'t quote numbers I can\'t back.',
        'Los usuarios abandonaban el último paso del onboarding, donde mostrábamos la propuesta de inversión: 5 tabs densas que parecían un contrato hipotecario. Con datos de PostHog/Clarity y entrevistas a usuarios, trabajé con un experto en finanzas para decidir qué era regulatorio, qué era útil y qué era pura inercia, y lo rediseñé como un flujo narrativo y escaneable. Llegó a producción; me fui antes de tener métricas finales, así que no voy a citar números que no pueda respaldar.'
      ),
      link: { label: l('Read the full case study', 'Leer el caso completo'), href: '/project/reduciendo-drop-off-onboarding' },
    },
    suggest: ['research', 'mobile-app', 'process'],
  },
  {
    id: 'mobile-app',
    label: l('Tell me about the Holdo mobile app', 'Contame sobre la app móvil de Holdo'),
    strong: [/\b(mobile app|app movil|aplicacion movil|app mobile|mobile mvp|mvp|native app|app nativa|mobile first|mobile)\b/],
    answer: {
      text: l(
        "80% of Holdo's users were already on their phones, but the product was desktop-first. I designed the app MVP: benchmarked the Chilean fintech market, scoped it with the CEO and CTO, and deliberately limited it to two core flows (checking your portfolio and depositing funds). It launched to friends & family, and most active users made it their usual channel.",
        'El 80% de los usuarios de Holdo ya estaba en el celular, pero el producto era desktop. Diseñé el MVP de la app: benchmark del mercado fintech chileno, definición del alcance con el CEO y el CTO, y lo limité a propósito a dos flujos centrales (consultar el portafolio y depositar fondos). Salió a friends & family y la mayoría de los usuarios activos la adoptó como su canal habitual.'
      ),
      link: { label: l('Read the full case study', 'Leer el caso completo'), href: '/project/app-movil-holdo' },
    },
    more: {
      text: l(
        'The hardest decision was cutting scope: aligning every stakeholder on leaving features out was tough, but it let us ship faster and with better quality on what mattered. Knowing what to leave out is most of the job.',
        'La decisión más difícil fue recortar el alcance: alinear a todos los stakeholders en dejar funcionalidades afuera costó, pero nos permitió salir antes y con mejor calidad en lo importante. Saber qué dejar afuera es gran parte del trabajo.'
      ),
    },
    suggest: ['onboarding', 'failure', 'process'],
  },
  {
    id: 'website',
    label: l('Tell me about the Holdo website', 'Contame sobre el sitio web de Holdo'),
    strong: [/\b(webflow|wordpress|website|sitio web|sitio|landing|pagina web|web design|diseno web|style guide|guia de estilos)\b/],
    answer: {
      text: l(
        "One of my first projects at Holdo. The site was a single page that didn't explain the product, so I benchmarked competitors, interviewed leadership, designed a 6-page sitemap and built it in Webflow with a Style Guide tied to the design system. The result: marketing could launch campaigns without waiting on dev.",
        'Uno de mis primeros proyectos en Holdo. El sitio era una sola página que no explicaba el producto, así que hice benchmark de competidores, entrevisté al equipo directivo, diseñé un sitemap de 6 páginas y lo construí en Webflow con una guía de estilos conectada al design system. Resultado: marketing pudo lanzar campañas sin esperar a desarrollo.'
      ),
      link: { label: l('Browse the case studies', 'Ver los casos de estudio'), href: '/proyectos' },
    },
    suggest: ['design-systems', 'holdo', 'tools'],
  },
  {
    id: 'hype',
    label: l('Tell me about Hype, your app', 'Contame sobre Hype, tu app'),
    strong: [
      /\b(hype|gethyperun|hyperun|running app|app de running|app para runners|app de correr|runners?|launched (an? )?app|lanzaste (una )?app|your (own )?app|tu (propia )?app|app propia|personal projects?|side projects?|proyectos? personal(es)?|proyecto propio|built with ai|hecho con ia)\b/,
    ],
    invite: true,
    answer: {
      text: l(
        "Hype is an app I launched as a personal project, built 100% with AI. It's for runners who like to feel supported by their friends and family: you run, they cheer for you. It's my way of taking the AI-first approach all the way from idea to a live product.",
        'Hype es una app que lancé como proyecto personal, hecha 100% con IA. Es para runners a los que les gusta sentirse acompañados por sus amigos y familiares: vos corrés, ellos te alientan. Es mi forma de llevar el enfoque AI-first de punta a punta, de la idea a un producto en producción.'
      ),
      link: { label: l('Check out Hype', 'Conocé Hype'), href: 'https://gethyperun.app/' },
    },
    suggest: ['ai', 'design-in-code', 'hobbies'],
  },
  {
    id: 'reservadisimo',
    label: l('Tell me about Reservadísimo', 'Contame sobre Reservadísimo'),
    strong: [/\b(reservadisimo|pandemic|pandemia|covid|startup of your own|emprend\w*|entrepreneur\w*|bares?|bars?|qr)\b/],
    answer: {
      text: l(
        "Reservadísimo was a personal project in 2020. During the pandemic, bars handled reservations over WhatsApp and paper health forms. I designed and took to MVP an app with table booking, digital signature and QR entry, validated with 5 bar owners who showed strong intent to adopt. I decided not to pursue it as a business, but I learned that simplicity for the business matters as much as for the end user.",
        'Reservadísimo fue un proyecto personal de 2020. En plena pandemia, los bares gestionaban reservas por WhatsApp y declaraciones juradas en papel. Diseñé y llevé a MVP una app con reserva de mesas, firma digital e ingreso con QR, validada con 5 dueños de bares que mostraron alta intención de adopción. Decidí no seguir con eso como negocio, pero aprendí que la simplicidad para el negocio importa tanto como para el usuario final.'
      ),
    },
    suggest: ['failure', 'process', 'projects'],
  },
  {
    id: 'fashion-ai',
    label: l('Tell me about the generative AI platform', 'Contame sobre la plataforma de IA generativa'),
    strong: [/\b(generative|generativa|genai|gen ai|(ai|ia) (project|platform|plataforma|proyecto)|proyecto de ia|plataforma de ia|fashion designers?|fashion ai|disenadores de moda|agilidad|inspiracional|images? generation|generacion de imagenes|creative process|proceso creativo)\b/],
    answer: {
      text: l(
        "A generative AI platform to accelerate the creative process of fashion designers at Mango. The challenge wasn't generating images, it was helping designers turn ideas into something tangible faster. I was involved in discovery, MVP definition, UX strategy, research and ongoing evolution alongside product and engineering. The full case study is confidential, so it's password-protected.",
        'Una plataforma de IA generativa para acelerar el proceso creativo de los diseñadores de moda en Mango. El reto no era generar imágenes sino ayudar a los diseñadores a materializar ideas más rápido. Participé en discovery, definición del MVP, UX strategy, research y evolución continua junto a producto e ingeniería. El caso completo es confidencial, por eso está protegido con contraseña.'
      ),
      link: { label: l('Request access', 'Pedir acceso'), href: '/project/agilidad-inspiracional' },
    },
    suggest: ['ai', 'research', 'collaboration'],
  },
  {
    id: 'orchestrator',
    label: l('Tell me about the orchestration platform', 'Contame sobre la plataforma orquestadora'),
    strong: [/\b(orquestador\w*|orchestrat\w*|journeys?|team[- ]orchestration|internal tool|herramienta interna|spreadsheets?|planillas?|excel)\b/],
    answer: {
      text: l(
        'A corporate internal platform to orchestrate journey-content creation across 5+ Mango teams, who today work manually with spreadsheets, emails and different tools. I built it with an AI-first attitude, as a hybrid of Product Owner and front-end developer (vibe coding), working with one backend engineer. The case study is confidential and password-protected.',
        'Una plataforma corporativa interna para orquestar la creación de contenido de journeys entre más de 5 equipos de Mango, que hoy trabajan de forma manual con planillas, mails y herramientas distintas. La construí con una actitud AI-first, en un rol híbrido de Product Owner y desarrollador front-end (vibe coding), junto a una persona de backend. El caso es confidencial y está protegido con contraseña.'
      ),
      link: { label: l('Request access', 'Pedir acceso'), href: '/project/orquestadora-de-equipos' },
    },
    suggest: ['design-in-code', 'pm', 'coding'],
  },
  {
    id: 'design-in-code',
    label: l('How do you design directly in code?', '¿Cómo diseñás directo en código?'),
    strong: [
      /\b(design(ing)? (directly )?in code|disenar (producto )?(directo )?en codigo|disenas en codigo|direct design|vibe ?cod\w*|figma|prototyp\w*|prototip\w*)\b/,
    ],
    invite: true,
    answer: {
      text: l(
        "I stopped simulating the interface and started building it, using Mango's real design system with AI-assisted coding tools. Prototypes are live URLs that users test with real data, so what I hand to dev is already validated: less ambiguity, fewer handoff rounds. It's still early to give a hard number on time saved.",
        'Dejé de simular la interfaz y empecé a construirla, con el design system real de Mango y herramientas de código asistido por IA. Los prototipos son URLs vivas que los usuarios prueban con datos reales, así que lo que le entrego a desarrollo ya viene validado: menos ambigüedad y menos rondas de ajustes. Todavía es pronto para dar un número cerrado de tiempo ahorrado.'
      ),
      link: { label: l('See how I design in code', 'Mirá cómo diseño en código'), href: '/project/disenar-en-codigo' },
    },
    suggest: ['ai', 'coding', 'collaboration'],
  },

  // ─────────────── How I work ───────────────
  {
    id: 'ai',
    label: l('How do you use AI in your work?', '¿Cómo usás la IA en tu trabajo?'),
    strong: [
      /\b(ai|a\.i\.|ia|artificial intelligence|inteligencia artificial|llms?|chatgpt|gpt|claude|copilot|cursor|gemini|machine learning|ai[- ]first|ai workflow)\b/,
    ],
    invite: true,
    answer: {
      text: l(
        "I use AI strategically: to speed up proofs of concept, validate hypotheses and iterate cheaply. It changed my process so much that I now prototype directly in code instead of stopping at Figma, and at Mango I work on products that integrate generative AI. For me it's a strategic ally to try, fail and improve fast.",
        'Uso la IA de forma estratégica: para acelerar pruebas de concepto, validar hipótesis e iterar barato. Cambió tanto mi proceso que ahora prototipo directo en código en lugar de quedarme en Figma, y en Mango trabajo en productos que integran IA generativa. Para mí es un aliado estratégico para probar, equivocarse y mejorar rápido.'
      ),
      link: { label: l('See how I design in code', 'Mirá cómo diseño en código'), href: '/project/disenar-en-codigo' },
    },
    suggest: ['fashion-ai', 'hype', 'design-in-code'],
  },
  {
    id: 'coding',
    label: l('Do you know how to code?', '¿Sabés programar?'),
    strong: [
      /\b(cod(e|ing|ear)|programm?\w*|programar|programas|developer|desarrollador|front[- ]?end|next\.?js|react|github|git|technical skills|habilidades tecnicas|tech(nical)? background)\b/,
    ],
    answer: {
      text: l(
        "In a practical way, yes. Thanks to AI-assisted tools I work with GitHub (branches, commits, PRs) and prototype in Next.js using Mango's design system. I'm not a replacement for engineers; I use it to hand over validated, working prototypes instead of static mockups, and to speak their language better.",
        'De forma práctica, sí. Gracias a las herramientas de código asistido por IA trabajo con GitHub (ramas, commits, PRs) y prototipo en Next.js con el design system de Mango. No reemplazo a los ingenieros: lo uso para entregar prototipos funcionales y validados en lugar de mockups estáticos, y para hablar mejor su idioma.'
      ),
    },
    suggest: ['design-in-code', 'collaboration', 'tools'],
  },
  {
    id: 'tools',
    label: l('What tools do you use?', '¿Qué herramientas usás?'),
    strong: [/\b(tools?|herramientas?|tech stack|stack|software|apps? do you use|que usas|que programas usas|miro|posthog|clarity|hotjar|analytics|marvel)\b/],
    answer: {
      text: l(
        'Day to day: Figma and Miro for design and ideation, and Next.js with AI coding tools (like Claude Code) for prototypes. For data and research: PostHog, Microsoft Clarity, Hotjar and Google Analytics. In the past I also used Webflow, WordPress and Marvel.',
        'Día a día: Figma y Miro para diseño e ideación, y Next.js con herramientas de código asistido por IA (como Claude Code) para prototipos. Para datos e investigación: PostHog, Microsoft Clarity, Hotjar y Google Analytics. En el pasado también usé Webflow, WordPress y Marvel.'
      ),
    },
    suggest: ['coding', 'research', 'design-systems'],
  },
  {
    id: 'process',
    label: l("What's your design process?", '¿Cuál es tu proceso de diseño?'),
    strong: [
      /\b(process|proceso|methodolog\w*|metodolog\w*|workflow|flujo de trabajo|framework|double diamond|design thinking|agile|agil\w*|scrum)\b/,
    ],
    weak: [/\b(how do you (work|approach|design|start)|como trabajas|como encaras|como abordas|approach)\b/],
    answer: {
      text: l(
        'It starts with data and people: behavior analytics plus interviews to find the real problem. Then hypotheses, prioritizing with stakeholders (product, engineering, sometimes finance or the CEO), design, and lately a working prototype in code tested with users before handoff. I close with QA alongside dev.',
        'Arranca con datos y personas: analítica de comportamiento más entrevistas para encontrar el problema real. Después hipótesis, priorización con stakeholders (producto, ingeniería, a veces finanzas o el CEO), diseño y, últimamente, un prototipo funcional en código testeado con usuarios antes del handoff. Cierro con QA junto a desarrollo.'
      ),
    },
    suggest: ['research', 'collaboration', 'design-in-code'],
  },
  {
    id: 'research',
    label: l('How do you do user research?', '¿Cómo hacés research con usuarios?'),
    strong: [
      /\b(research|investigacion|user (testing|tests?|interviews?)|usability|usabilidad|interviews?|entrevistas?|discovery|data[- ]driven|datos|testing|validat\w*|validar|validacion|hypothes[ie]s|hipotesis|benchmark\w*)\b/,
    ],
    answer: {
      text: l(
        'I mix quantitative and qualitative. PostHog, Clarity and Hotjar show me where people struggle; interviews and prototype tests tell me why. At Holdo, interviews revealed the investment proposal "felt like a mortgage contract", an insight no dashboard would have shown. I also benchmark competitors before making scope decisions.',
        'Mezclo cuantitativo y cualitativo. PostHog, Clarity y Hotjar me muestran dónde se traban las personas; las entrevistas y los tests con prototipos me dicen por qué. En Holdo, las entrevistas revelaron que la propuesta de inversión "parecía un contrato hipotecario", un insight que ningún dashboard habría mostrado. También hago benchmark de competidores antes de decidir el alcance.'
      ),
    },
    suggest: ['onboarding', 'process', 'tools'],
  },
  {
    id: 'collaboration',
    label: l('How do you work with developers and PMs?', '¿Cómo trabajás con devs y PMs?'),
    strong: [
      /\b(collaborat\w*|colabor\w*|teamwork|trabajo en equipo|team player|stakeholders?|developers?|desarrolladores?|devs?|engineers?|ingenieros?|handoff|hand[- ]off|cross[- ]functional|multidisciplinar\w*|communicat\w*|comunicacion|feedback|work with (others|people|teams?))\b/,
    ],
    answer: {
      text: l(
        "Closely, and from discovery on. I've worked directly with CEOs, CTOs, PMs, engineers and domain experts like finance. I used to hand off with a detailed pitch and then do QA together; now I try to hand over a validated, working prototype so there's less to interpret. At Mango I've also covered the PO role when the team didn't have one.",
        'De cerca y desde el discovery. Trabajé directo con CEOs, CTOs, PMs, ingenieros y expertos de dominio como finanzas. Antes hacía handoff con un pitch detallado y después QA en conjunto; ahora intento entregar un prototipo funcional y validado para que haya menos que interpretar. En Mango también cubrí el rol de PO cuando el equipo no tenía uno.'
      ),
    },
    suggest: ['leadership', 'design-systems', 'process'],
  },
  {
    id: 'design-systems',
    label: l('Do you have experience with design systems?', '¿Tenés experiencia con design systems?'),
    strong: [/\b(design systems?|sistemas? de diseno|components?|componentes?|ui kit|component library|biblioteca de componentes|tokens?)\b/],
    answer: {
      text: l(
        'Yes, from both sides. At Holdo I created a Style Guide tied to the design system for the Webflow site, so anyone on the team could extend it. At Mango I now work with the real design system in code, so what I design is made of the actual components, not a redrawn copy.',
        'Sí, de los dos lados. En Holdo creé una guía de estilos conectada al design system para el sitio en Webflow, para que cualquiera del equipo pudiera extenderlo. En Mango trabajo con el design system real en código, así que lo que diseño está hecho con los componentes reales y no con una copia redibujada.'
      ),
    },
    suggest: ['design-in-code', 'website', 'collaboration'],
  },
  {
    id: 'leadership',
    label: l('Do you have leadership experience?', '¿Tenés experiencia liderando equipos?'),
    strong: [/\b(management style|estilo de liderazgo|leadership style|leadership|liderazgo|lead(ing|er)?|liderar|liderando|lider|manag(e|ed|ing) (a )?team|gestionar equipos?|team lead|mentor\w*|manage people|gestion de personas|people management|senior)\b/],
    invite: true,
    answer: {
      text: l(
        "Yes, at QUO, a communication agency, I started as a graphic designer in 2016 and grew into leading the design team. At Mango I align stakeholders across teams and act as PO when needed. For details on team size and scope, ask me directly.",
        'Sí, en QUO, una agencia de comunicación, empecé como diseñador gráfico en 2016 y crecí hasta liderar el equipo de diseño. En Mango alineo stakeholders entre equipos y actúo como PO cuando hace falta. Para detalles de tamaño de equipo y alcance, preguntame directamente.'
      ),
    },
    suggest: ['pm', 'collaboration', 'experience'],
  },
  {
    id: 'failure',
    label: l('Tell me about a challenge or failure', 'Contame de un error o desafío'),
    strong: [
      /\b(fail\w*|fracaso|fracasaste|mistakes?|errores?|error|challenges?|desafios?|dificultad\w*|difficult\w*|hardest|mas dificil|lesson\w*|aprendizajes?|aprendiste|learned from|conflict|setbacks?|went wrong|salio mal)\b/,
    ],
    invite: true,
    answer: {
      text: l(
        "A real one: Reservadísimo, my 2020 side project. I took it to MVP and bar owners were interested, but I decided not to turn it into a business, and I learned the hard way that business simplicity matters as much as the user's. Professionally, the toughest call was cutting the scope of Holdo's mobile MVP: hard to align, but it let us launch faster.",
        'Uno real: Reservadísimo, mi proyecto personal de 2020. Lo llevé a MVP y los dueños de bares mostraron interés, pero decidí no convertirlo en negocio, y aprendí de la manera difícil que la simplicidad para el negocio importa tanto como para el usuario. Profesionalmente, lo más duro fue recortar el alcance del MVP móvil de Holdo: costó alinear, pero nos permitió salir antes.'
      ),
    },
    suggest: ['reservadisimo', 'mobile-app', 'weakness'],
  },

  {
    id: 'why-left',
    label: l('Why did you leave Holdo?', '¿Por qué dejaste Holdo?'),
    strong: [
      /\b(why (did|do) you (leave|left|quit)|why are you (leaving|looking)|why (change|switch)|reason for leaving|por que (dejaste|te fuiste|renunciaste|dejas|te vas|queres irte|queres cambiar)|motivo (de|para) (irte|dejar))\b/,
    ],
    invite: true,
    answer: {
      text: l(
        "I left Holdo because I moved to Barcelona and started looking for a job here. That's how I ended up at Mango in June 2024, working on generative AI products inside a global company. What I'm after next is a step toward product management, where I can influence what we build and why.",
        'Dejé Holdo porque me vine a vivir a Barcelona y empecé a buscar trabajo acá. Así llegué a Mango en junio de 2024, a trabajar en productos de IA generativa dentro de una empresa global. Lo que busco ahora es un paso hacia product management, donde pueda influir en qué construimos y por qué.'
      ),
    },
    suggest: ['holdo', 'pm', 'job-search'],
  },
  {
    id: 'motivation',
    label: l('What motivates you?', '¿Qué te motiva?'),
    strong: [
      /\b(motivat\w*|motiva|passion\w*|pasion|what drives you|que te impulsa|que te mueve|love (most )?about|like (most )?about|enjoy (most )?about|lo que mas te gusta|que es lo que mas te gusta|favou?rite part|parte favorita|enjoy)\b/,
    ],
    invite: true,
    answer: {
      text: l(
        "Owning a problem end to end, and the unknown: new tasks where I have to dig into a domain until I get it right. I also value autonomy and decision-making, and using AI to try things, fail and improve fast and cheap.",
        'Hacerme cargo de un problema de punta a punta, y lo desconocido: tareas nuevas donde tengo que investigar un dominio hasta dar con la solución. También valoro la autonomía y la toma de decisiones, y usar la IA para probar, equivocarme y mejorar rápido y barato.'
      ),
    },
    suggest: ['strengths', 'ai', 'pm'],
  },
  {
    id: 'confidential',
    label: l('Is your Mango work confidential?', '¿Tu trabajo en Mango es confidencial?'),
    strong: [
      /\b(confidential\w*|confidencial\w*|password|contrasena|clave|nda|protected|protegid\w*|restricted|restringid\w*|access|acceso|private|privad\w*|locked|candado)\b/,
    ],
    answer: {
      text: l(
        `Yes, the generative AI platform and the team-orchestration platform contain confidential information, so their case studies are password-protected. Email me at ${email} and I'll share access.`,
        `Sí, la plataforma de IA generativa y la plataforma de orquestación contienen información confidencial, por eso sus casos están protegidos con contraseña. Escribime a ${email} y te paso el acceso.`
      ),
      link: { label: l('Request access', 'Pedir acceso'), href: `mailto:${email}` },
    },
    suggest: ['fashion-ai', 'orchestrator', 'contact'],
  },
  {
    id: 'site',
    label: l('How was this site built?', '¿Cómo se armó este sitio?'),
    strong: [
      /\b((this|your|tu|este) (site|website|sitio( web)?|portfolio|portafolio|page|pagina|web)|tech stack of this|how (was|did you) (this|build this)|como (armaste|hiciste|construiste) (este|esto|tu))\b/,
    ],
    answer: {
      text: l(
        "This portfolio is a project of mine, built with Next.js and React, the same stack I use to prototype at Mango. The chat you're talking to is part of it, which is a nice way to show how I think about product and interaction.",
        'Este portfolio es un proyecto mío, hecho con Next.js y React, el mismo stack que uso para prototipar en Mango. El chat con el que estás hablando es parte de eso, y es una linda forma de mostrar cómo pienso producto e interacción.'
      ),
      link: { label: l('See how I design in code', 'Mirá cómo diseño en código'), href: '/project/disenar-en-codigo' },
    },
    suggest: ['design-in-code', 'coding', 'tools'],
  },
  {
    id: 'offtopic',
    label: l('Tell me a joke', 'Contame un chiste'),
    strong: [
      /\b(jokes?|chistes?|poems?|poemas?|poesia|weather|clima|recipes?|recetas?|system prompt|ignore (all |your )?(the )?(previous|prior|above) (instructions|prompts?)|ignora (las |tus )?instrucciones|tell me a story|contame un cuento|horoscope|horoscopo|bitcoin|crypto|capital of|traduci|translate (this|the)|write (me )?(a|an) (poem|essay|script|code|story)|escribime (un|una) (poema|ensayo|cuento|codigo))\b/,
    ],
    answer: {
      text: [
        l(
          "Ha, fair try! I'm only good at talking about my work though. Ask me about my projects, how I use AI, or what I'm like to work with.",
          'Jaja, buen intento. Pero solo sirvo para hablar de mi trabajo. Preguntame por mis proyectos, cómo uso la IA o cómo soy para trabajar en equipo.'
        ),
        l(
          "That one's not in my skill set. I stick to my own turf: career, projects and how I work. Want to start with one of those?",
          'Eso no está en mi repertorio. Me quedo en lo mío: carrera, proyectos y cómo trabajo. ¿Arrancamos por alguno de esos?'
        ),
      ],
    },
    suggest: ['projects', 'strengths', 'ai'],
  },

  // ─────────────── Actions ───────────────
  {
    id: 'resume',
    label: l('Can I see your resume?', '¿Puedo ver tu CV?'),
    strong: [/\b(resume|cv|curriculum|curriculum vitae|hoja de vida|pdf|download|descargar)\b/],
    answer: {
      text: l(
        "Sure, here's my resume. You can preview it right here or download the PDF.",
        'Claro, acá está mi CV. Podés previsualizarlo acá mismo o descargar el PDF.'
      ),
      link: { label: l('Download PDF', 'Descargar PDF'), href: resumePath },
      openResume: true,
    },
    suggest: ['contact', 'projects', 'job-search'],
  },
  {
    id: 'contact',
    label: l('How can I reach you?', '¿Cómo puedo contactarte?'),
    strong: [
      /\b(contact\w*|get in touch|reach (you|out)|email|e-mail|mail|correo|linkedin|behance|telefono|phone|whatsapp|llamar|talk to you|hablar con vos|hablar contigo|schedule (a )?(call|meeting|interview)|book a (call|meeting)|agendar (una )?(llamada|reunion|entrevista)|hop on a call|can we (talk|chat|meet)|podemos (hablar|charlar|reunirnos))\b/,
    ],
    answer: {
      text: l(
        `You can email me directly at ${email}, or find me on LinkedIn and Behance..`,
        `Podés escribirme directamente a ${email}, o encontrarme en LinkedIn y Behance..`
      ),
      links: [
        { label: l('Send an email', 'Enviar un email'), href: `mailto:${email}` },
        { label: l('LinkedIn', 'LinkedIn'), href: personalInfo.linkedin },
        { label: l('Behance', 'Behance'), href: personalInfo.behance },
      ],
    },
    suggest: ['resume', 'projects'],
  },
  {
    id: 'chat-meta',
    label: l('Are you an AI?', '¿Sos una IA?'),
    strong: [
      /\b(are you (an? )?(ai|bot|robot|real|human|person|chatgpt|llm)|sos (una? )?(ia|bot|robot|real|humano|persona)|eres (una? )?(ia|bot|robot|real|humano|persona)|es esto (una )?(ia|bot)|is this (an? )?(ai|bot|real)|who (built|made|created) (this|you)|quien (te )?(hizo|creo|construyo|armo)|how does this (chat|work)|como funciona (este|esto)|chatbot|real person|persona real|am i talking to)\b/,
    ],
    answer: {
      text: l(
        `Good question! I'm a digital version of Gon: a chat Gon put together to answer the things recruiters and collaborators usually ask. I'm not a live LLM, so when something is beyond what I know, the real Gon is one email away: ${email}.`,
        `¡Buena pregunta! Soy una versión digital de Gon: un chat que Gon armó para responder lo que suelen preguntar reclutadores y colaboradores. No soy un LLM en vivo, así que cuando algo excede lo que sé, el Gon real está a un email: ${email}.`
      ),
      link: { label: l('Send an email', 'Enviar un email'), href: `mailto:${email}` },
    },
    suggest: ['who', 'projects', 'contact'],
  },
];

export const topicById: Record<string, Topic> = Object.fromEntries(topics.map((t) => [t.id, t]));

/** Backfill for follow-up suggestions when a topic's own `suggest` list runs dry. */
export const DEFAULT_SUGGESTIONS = ['projects', 'strengths', 'pm', 'ai', 'process', 'mango', 'resume', 'contact'];

export const fallbackAnswers: L[] = [
  l(
    "That one's outside what I can answer well here, and I'd rather not guess. I can talk about my experience, the projects I've worked on, how I use AI or how I work with teams — or you can ask the real Gon directly.",
    'Eso se escapa de lo que puedo responder bien por acá, y prefiero no inventar. Puedo hablarte de mi experiencia, los proyectos en los que trabajé, cómo uso la IA o cómo trabajo con equipos — o preguntale directamente al Gon real.'
  ),
  l(
    "I don't have a good answer for that one. Try asking about my work, my approach or my background — and for anything else, I'm at " + email + '.',
    'No tengo una buena respuesta para eso. Probá preguntarme por mi trabajo, mi forma de encarar producto o mi background — y para cualquier otra cosa, estoy en ' + email + '.'
  ),
  l(
    "Hmm, I can't help with that one. I'm better at questions about my career, projects and how I work. If you'd rather ask me something else in person, email works too.",
    'Mmm, con eso no te puedo ayudar. Soy mejor respondiendo sobre mi carrera, mis proyectos y cómo trabajo. Si preferís preguntarme otra cosa en persona, el email también sirve.'
  ),
];

export const skillCheckAnswers: L[] = [
  l(
    `I haven't covered that one specifically here, and I'd rather not oversell it. If it matters for the role, ask me directly at ${email}, or tell me what you need and I'll point you to the closest work.`,
    `Eso puntual no lo cubrí acá, y prefiero no vender de más. Si es importante para el rol, preguntame directamente en ${email}, o contame qué necesitás y te marco el trabajo más cercano.`
  ),
];

export const noMoreAnswers: L[] = [
  l(
    "That's the short version on that one — I'd be happy to go into detail live. Want to explore something else?",
    'Esa es la versión corta sobre eso — con gusto lo profundizo en una charla. ¿Exploramos otra cosa?'
  ),
];

export const openingAnswer: L = l(
  "Sure! Where would you like to start? I can walk you through my background, my projects or how I work.",
  '¡Claro! ¿Por dónde querés empezar? Puedo contarte mi background, mis proyectos o cómo trabajo.'
);

export const repeatLeadIn: L = l('Happy to repeat it:', 'Te lo repito con gusto:');

// Closing lines for personal or deep answers, and the nudge after a long chat.
// Both point to the real person, so they carry the email.
export const inviteLines: L[] = [
  l(
    `Either way, it'd be great to talk more. My email is ${email} — let's set something up.`,
    `De todas formas, sería bueno que pudiéramos conversar más. Mi mail es ${email}, coordinemos.`
  ),
  l(
    `This one is better over a proper conversation. Write me at ${email} and we'll find a time.`,
    `Esto da para charlarlo con más calma. Escribime a ${email} y coordinamos un rato.`
  ),
  l(
    `I'd love to go deeper on this live. Drop me a line at ${email} and let's talk.`,
    `Me encantaría profundizar esto en vivo. Escribime a ${email} y hablamos.`
  ),
];

export const longChatLines: L[] = [
  l(
    `If this is useful, the fastest way to keep going is email: ${email}. Happy to set up a call.`,
    `Si esto te sirve, lo más rápido para seguir es por mail: ${email}. Con gusto coordinamos una llamada.`
  ),
  l(
    `Since we've covered quite a bit, it'd be great to continue in a real conversation. Email me at ${email} and let's set something up.`,
    `Ya que venimos charlando bastante, sería bueno seguir en una conversación de verdad. Escribime a ${email} y coordinamos.`
  ),
  l(
    `We've covered a lot already! If you want to keep going, the best next step is a proper chat: ${email}.`,
    `¡Ya cubrimos un montón! Si querés seguir, lo mejor es una charla de verdad: ${email}.`
  ),
];

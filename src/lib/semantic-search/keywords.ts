// Lightweight keyword extraction shared by the offline embedding script and
// the in-browser search worker. Used to compute a small lexical-overlap
// signal that complements cosine similarity — MiniLM's embedding space alone
// doesn't leave a reliable gap between on-topic and off-topic short queries
// (an unrelated question can score as high as a relevant one), so overlap on
// real content words pulls genuine matches ahead of that noise floor.
const STOPWORDS = new Set([
  // Spanish
  'a', 'al', 'algo', 'ante', 'bajo', 'cabe', 'con', 'contra', 'de', 'del', 'desde', 'donde',
  'durante', 'ella', 'ellas', 'ellos', 'en', 'entre', 'era', 'erais', 'eramos', 'eran', 'eres',
  'esa', 'esas', 'ese', 'eso', 'esos', 'esta', 'estas', 'este', 'esto', 'estos', 'fue', 'fueron',
  'hay', 'la', 'las', 'le', 'les', 'lo', 'los', 'mas', 'me', 'mi', 'mis', 'mucho', 'muy', 'nada',
  'ni', 'no', 'nos', 'nosotros', 'nuestra', 'nuestras', 'nuestro', 'nuestros', 'otra', 'otras',
  'otro', 'otros', 'para', 'pero', 'poco', 'por', 'porque', 'que', 'quien', 'quienes', 'se',
  'ser', 'si', 'sin', 'sobre', 'son', 'su', 'sus', 'tambien', 'te', 'ti', 'tu', 'tus', 'un',
  'una', 'uno', 'unos', 'vosotros', 'vuestra', 'vuestro', 'ya', 'yo', 'como', 'cual', 'cuales',
  'cuando', 'hiciste', 'hacer', 'sobre', 'cuentame', 'contame', 'podrias', 'puedes',
  // English
  'what', 'which', 'where', 'when', 'who', 'whom', 'how', 'the', 'and', 'for', 'are', 'was',
  'were', 'have', 'has', 'did', 'does', 'do', 'you', 'your', 'about', 'with', 'this', 'that',
  'these', 'those', 'from', 'into', 'can', 'could', 'would', 'should', 'tell', 'me',
]);

// The chat UI is in English but the case study copy is in Spanish, and
// MiniLM's cross-lingual alignment is weak enough that an English question
// about Spanish-only content can score well below the match threshold with
// zero keyword overlap (verified empirically \u2014 see config.ts). This small,
// hand-picked glossary of the domain terms that actually show up in the
// content lets a term in either language pull in its counterpart, without
// needing a bigger multilingual model or a translation API call.
const GLOSSARY: Record<string, string[]> = {
  moda: ['fashion'],
  fashion: ['moda'],
  disenadores: ['designers'],
  designers: ['disenadores', 'diseno'],
  diseno: ['design'],
  design: ['diseno'],
  disenar: ['designing', 'design'],
  designing: ['disenar'],
  generativa: ['generative'],
  generative: ['generativa'],
  inteligencia: ['intelligence'],
  intelligence: ['inteligencia'],
  plataforma: ['platform'],
  platform: ['plataforma'],
  inversion: ['investment', 'investing'],
  investment: ['inversion'],
  investing: ['inversion'],
  movil: ['mobile'],
  mobile: ['movil'],
  aplicacion: ['application'],
  application: ['aplicacion'],
  codigo: ['code'],
  code: ['codigo'],
  prototipo: ['prototype'],
  prototype: ['prototipo'],
  equipos: ['teams'],
  teams: ['equipos'],
  usuarios: ['users'],
  users: ['usuarios'],
  resultados: ['results'],
  results: ['resultados'],
  proceso: ['process'],
  process: ['proceso'],
  producto: ['product'],
  product: ['producto'],
  experiencia: ['experience'],
  experience: ['experiencia'],
  negocio: ['business'],
  business: ['negocio'],
  clientes: ['clients', 'customers'],
  clients: ['clientes'],
  customers: ['clientes'],
  portafolio: ['portfolio'],
  portfolio: ['portafolio'],
  regulada: ['regulated'],
  regulated: ['regulada'],
  mercado: ['market'],
  market: ['mercado'],
  decisiones: ['decisions'],
  decisions: ['decisiones'],
  banca: ['banking'],
  banking: ['banca'],
  trabaje: ['work', 'worked'],
  trabajado: ['worked', 'work'],
  trabajar: ['work'],
  trabajaste: ['worked', 'work'],
  trabajos: ['work', 'jobs'],
  work: ['trabaje', 'trabajado', 'trabajar'],
  worked: ['trabaje', 'trabajado', 'trabajaste'],
  working: ['trabajando'],
  trabajando: ['working'],
  empresa: ['company'],
  empresas: ['companies', 'company'],
  company: ['empresa'],
  companies: ['empresas'],
  estudie: ['studied', 'study'],
  estudiaste: ['studied', 'study'],
  estudios: ['studies', 'education'],
  formacion: ['education'],
  education: ['formacion'],
  study: ['estudios', 'estudiaste'],
  studied: ['estudiaste'],
  contacto: ['contact'],
  contact: ['contacto'],
};

function stripAccents(value: string): string {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

/** Normalizes text and returns its unique, meaningful (non-stopword, length >= 4) words. */
export function extractKeywords(text: string): string[] {
  const normalized = stripAccents(text.toLowerCase()).replace(/[^a-z0-9\s]/g, ' ');
  const words = normalized.split(/\s+/).filter(Boolean);
  const base = words.filter((w) => w.length >= 4 && !STOPWORDS.has(w));

  const expanded = new Set(base);
  for (const word of base) {
    for (const translation of GLOSSARY[word] ?? []) {
      expanded.add(translation);
    }
  }
  return Array.from(expanded);
}

/** Number of keywords `a` has in common with `b`. */
export function keywordOverlap(a: string[], b: string[]): number {
  const setB = new Set(b);
  let count = 0;
  for (const word of a) {
    if (setB.has(word)) count += 1;
  }
  return count;
}

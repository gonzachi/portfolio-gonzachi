// Cheap, deterministic pre-filter for greetings/small talk — runs before any
// embedding work so "hola" or "hey" never triggers a model load or a search.
// "Who are you?" / "¿Quién sos?" are deliberately NOT here — they're real
// questions with a real answer now that profile facts are indexed (see
// generate-embeddings.mjs's buildProfileChunks), so they should hit search
// and get the actual bio, not the generic greeting/suggestions message.
const GREETING_PATTERNS: RegExp[] = [
  /^(hola+|holis+|buenas|buenos dias|buenas tardes|buenas noches|que tal|como estas|como andas|como va|todo bien)$/,
  /^(hi+|hey+|hello+|yo|sup|whats up|good morning|good afternoon|good evening|how are you|howdy)$/,
  /^(gracias|muchas gracias|ok|okay|vale|dale|genial|perfecto|cool|nice|bien|listo)$/,
];

function stripAccents(value: string): string {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function normalize(input: string): string {
  return stripAccents(input.trim().toLowerCase()).replace(/[¡!¿?.,;:]/g, '').replace(/\s+/g, ' ');
}

/** True for greetings, small talk, or inputs too short/generic to carry a real question. */
export function isGreetingOrGeneric(input: string): boolean {
  const normalized = normalize(input);
  if (normalized.length < 3) return true;
  if (GREETING_PATTERNS.some((pattern) => pattern.test(normalized))) return true;

  const words = normalized.split(' ').filter(Boolean);
  if (words.length === 1 && words[0].length < 4) return true;

  return false;
}

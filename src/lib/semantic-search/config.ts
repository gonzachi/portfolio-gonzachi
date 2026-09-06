// Shared between the offline embedding script (scripts/generate-embeddings.mjs)
// and the in-browser search worker — keep both in sync if you change these.
export const SEMANTIC_SEARCH_MODEL_ID = 'Xenova/all-MiniLM-L6-v2';
export const EMBEDDINGS_URL = '/data/case-study-embeddings.json';

/** How many matching chunks to show for a query. */
export const TOP_K = 3;

/**
 * Ranking score = cosineSimilarity + keywordOverlapCount * KEYWORD_OVERLAP_WEIGHT.
 * Calibrated against a 30-query battery of on-topic vs. off-topic
 * Spanish/English questions, including adversarial ones sharing a
 * "¿Cuál es tu ___?" / "What's your ___?" template with the short FAQ-alias
 * phrasings used for profile facts (see generate-embeddings.mjs). 0.6
 * passes 29/30. The one known miss: "¿cuál es tu comida favorita?" and the
 * genuine "cómo redujeron el drop-off en el onboarding?" score identically
 * (0.641) against this content — short, generic Spanish questions can land
 * arbitrarily close to unrelated short alias phrasings purely on sentence
 * shape, and no single threshold separates that specific pair. Re-check
 * this if the content, the alias phrasings, or the query language mix
 * changes a lot.
 */
export const MATCH_THRESHOLD = 0.6;
export const KEYWORD_OVERLAP_WEIGHT = 0.15;

// Runs entirely in a dedicated Web Worker so loading the model and running
// inference never blocks the main thread / UI. No network calls beyond
// fetching the model weights (cached by the browser after the first load)
// and the static embeddings JSON shipped with the site — no API, no key.
import { pipeline, type FeatureExtractionPipeline } from '@huggingface/transformers';
import { extractKeywords, keywordOverlap } from '@/lib/semantic-search/keywords';
import {
  SEMANTIC_SEARCH_MODEL_ID,
  EMBEDDINGS_URL,
  TOP_K,
  KEYWORD_OVERLAP_WEIGHT,
} from '@/lib/semantic-search/config';

interface Chunk {
  id: string;
  projectId: string;
  projectTitle: string;
  projectSubtitle: string | null;
  section: string;
  sectionLabel: string;
  text: string;
  keywords: string[];
  url: string;
  restricted: boolean;
  embedding: number[];
}

interface EmbeddingsFile {
  model: string;
  dimensions: number;
  chunks: Chunk[];
}

export interface SearchMatch {
  projectId: string;
  projectTitle: string;
  projectSubtitle: string | null;
  section: string;
  sectionLabel: string;
  text: string;
  url: string;
  restricted: boolean;
  score: number;
}

export type RequestMessage = { type: 'search'; id: number; query: string };

export type ResponseMessage =
  | { type: 'status'; status: 'loading-model' | 'ready' }
  | { type: 'result'; id: number; matches: SearchMatch[] }
  | { type: 'error'; id: number; message: string };

// Typed narrowly instead of pulling in the "webworker" lib globally — this
// project's tsconfig also includes "dom" for the rest of the app, and the
// two lib files declare incompatible globals (e.g. `self`) when combined.
declare const self: {
  onmessage: ((event: MessageEvent<RequestMessage>) => void) | null;
  postMessage: (message: ResponseMessage) => void;
  location: { origin: string };
};

let extractorPromise: Promise<FeatureExtractionPipeline> | null = null;
let chunksPromise: Promise<Chunk[]> | null = null;

function loadExtractor() {
  if (!extractorPromise) {
    // Same quantized weights used to build the static embeddings (see
    // scripts/generate-embeddings.mjs) — keeps query vectors and stored
    // chunk vectors in the same numeric space.
    extractorPromise = pipeline('feature-extraction', SEMANTIC_SEARCH_MODEL_ID, { dtype: 'q8' });
  }
  return extractorPromise;
}

function loadChunks() {
  if (!chunksPromise) {
    // Next bundles this worker to a blob: URL, so a root-relative fetch
    // can't resolve against it (blob URLs carry no path to resolve
    // against) — resolve against the page's origin explicitly instead.
    const url = new URL(EMBEDDINGS_URL, self.location.origin).toString();
    chunksPromise = fetch(url)
      .then((res) => res.json() as Promise<EmbeddingsFile>)
      .then((data) => data.chunks);
  }
  return chunksPromise;
}

function cosineSimilarity(a: number[], b: number[]): number {
  let sum = 0;
  for (let i = 0; i < a.length; i += 1) sum += a[i] * b[i];
  return sum;
}

self.onmessage = async (event: MessageEvent<RequestMessage>) => {
  const { type, id, query } = event.data;
  if (type !== 'search') return;

  try {
    const alreadyLoaded = extractorPromise !== null && chunksPromise !== null;
    if (!alreadyLoaded) {
      self.postMessage({ type: 'status', status: 'loading-model' } satisfies ResponseMessage);
    }

    const [extractor, chunks] = await Promise.all([loadExtractor(), loadChunks()]);
    self.postMessage({ type: 'status', status: 'ready' } satisfies ResponseMessage);

    const output = await extractor(query, { pooling: 'mean', normalize: true });
    const queryVector: number[] = Array.from(output.data as ArrayLike<number>);
    const queryKeywords = extractKeywords(query);

    const scored = chunks.map((chunk) => {
      const score =
        cosineSimilarity(queryVector, chunk.embedding) +
        keywordOverlap(queryKeywords, chunk.keywords) * KEYWORD_OVERLAP_WEIGHT;
      return {
        projectId: chunk.projectId,
        projectTitle: chunk.projectTitle,
        projectSubtitle: chunk.projectSubtitle,
        section: chunk.section,
        sectionLabel: chunk.sectionLabel,
        text: chunk.text,
        url: chunk.url,
        restricted: chunk.restricted,
        score,
      };
    });

    // Some content (profile facts) is indexed as several "alias" chunks
    // that share the same displayed text/section — each embeds a different
    // question phrasing for better recall (see generate-embeddings.mjs) but
    // only the best-scoring alias should actually show up as a result.
    const bestPerSection = new Map<string, SearchMatch>();
    for (const match of scored) {
      const key = `${match.projectId}::${match.section}`;
      const existing = bestPerSection.get(key);
      if (!existing || match.score > existing.score) bestPerSection.set(key, match);
    }

    const matches: SearchMatch[] = Array.from(bestPerSection.values())
      .sort((a, b) => b.score - a.score)
      .slice(0, TOP_K);

    self.postMessage({ type: 'result', id, matches } satisfies ResponseMessage);
  } catch (err) {
    self.postMessage({
      type: 'error',
      id,
      message: err instanceof Error ? err.message : String(err),
    } satisfies ResponseMessage);
  }
};

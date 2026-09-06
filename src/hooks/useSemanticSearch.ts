'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { RequestMessage, ResponseMessage, SearchMatch } from '@/workers/semantic-search.worker';

type Status = 'idle' | 'loading-model' | 'ready' | 'searching';

interface PendingRequest {
  resolve: (matches: SearchMatch[]) => void;
  reject: (err: Error) => void;
}

/**
 * Runs semantic search against the case-study embeddings inside a Web
 * Worker, so the model download + inference never blocks the UI thread.
 * The worker (and the ~25MB model it loads) is created lazily, on the first
 * call to `search`, not on mount — most visitors never open the search box.
 */
export function useSemanticSearch() {
  const workerRef = useRef<Worker | null>(null);
  const pendingRef = useRef<Map<number, PendingRequest>>(new Map());
  const requestIdRef = useRef(0);
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
    return () => {
      workerRef.current?.terminate();
      workerRef.current = null;
    };
  }, []);

  const getWorker = useCallback(() => {
    if (!workerRef.current) {
      const worker = new Worker(new URL('../workers/semantic-search.worker.ts', import.meta.url), {
        type: 'module',
      });
      worker.onmessage = (event: MessageEvent<ResponseMessage>) => {
        const data = event.data;
        if (data.type === 'status') {
          setStatus(data.status === 'loading-model' ? 'loading-model' : 'ready');
          return;
        }
        const pending = pendingRef.current.get(data.id);
        if (!pending) return;
        pendingRef.current.delete(data.id);
        setStatus('ready');
        if (data.type === 'result') {
          pending.resolve(data.matches);
        } else if (data.type === 'error') {
          pending.reject(new Error(data.message));
        }
      };
      workerRef.current = worker;
    }
    return workerRef.current;
  }, []);

  const search = useCallback(
    (query: string): Promise<SearchMatch[]> => {
      const worker = getWorker();
      const id = requestIdRef.current++;
      setStatus((current) => (current === 'idle' ? 'loading-model' : 'searching'));

      return new Promise((resolve, reject) => {
        pendingRef.current.set(id, { resolve, reject });
        worker.postMessage({ type: 'search', id, query } satisfies RequestMessage);
      });
    },
    [getWorker]
  );

  return { search, status };
}

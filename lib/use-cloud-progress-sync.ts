'use client';

import { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import {
  createDefaultProgressSnapshot,
  sanitizeProgressSnapshot,
  toProgressSnapshot,
  type ProgressSnapshot,
} from './progress';
import { useRoadmapStore } from './store';

const SAVE_DELAY_MS = 600;

interface ProgressResponse {
  progress: unknown | null;
}

export function useCloudProgressSync() {
  const { user, isLoaded } = useUser();
  const hydrated = useRoadmapStore((state) => state.hydrated);
  const syncStatus = useRoadmapStore((state) => state.cloudSyncStatus);
  const userId = user?.id;

  useEffect(() => {
    const store = useRoadmapStore;

    if (!isLoaded || !hydrated) return;

    if (!userId) {
      const state = store.getState();
      if (state.syncOwnerId !== null) {
        state.replaceProgress(createDefaultProgressSnapshot());
        state.setSyncOwnerId(null);
      }
      store.getState().setCloudSyncStatus('idle');
      return;
    }

    let cancelled = false;
    let ready = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let lastSerialized = '';
    let saveQueue = Promise.resolve();
    const abortController = new AbortController();

    const save = async (progress: ProgressSnapshot) => {
      if (cancelled) return;

      try {
        const response = await fetch('/api/progress', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(progress),
          signal: abortController.signal,
        });

        if (!response.ok) throw new Error('Cloud save failed.');
        if (!cancelled) store.getState().setCloudSyncStatus('synced');
      } catch {
        if (!cancelled) store.getState().setCloudSyncStatus('offline');
      }
    };

    const queueSave = (progress: ProgressSnapshot) => {
      store.getState().setCloudSyncStatus('syncing');
      saveQueue = saveQueue.then(() => save(progress));
    };

    const unsubscribe = store.subscribe((state) => {
      if (!ready) return;

      const progress = toProgressSnapshot(state);
      const serialized = JSON.stringify(progress);
      if (serialized === lastSerialized) return;

      lastSerialized = serialized;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => queueSave(progress), SAVE_DELAY_MS);
    });

    const initialize = async () => {
      store.getState().setCloudSyncStatus('loading');

      try {
        const response = await fetch('/api/progress', {
          cache: 'no-store',
          signal: abortController.signal,
        });
        if (!response.ok) throw new Error('Cloud load failed.');

        const data = (await response.json()) as ProgressResponse;
        const state = store.getState();
        const hasCloudProgress = data.progress !== null;
        const progress = hasCloudProgress
          ? sanitizeProgressSnapshot(data.progress)
          : state.syncOwnerId === null || state.syncOwnerId === userId
            ? toProgressSnapshot(state)
            : createDefaultProgressSnapshot();

        state.replaceProgress(progress);
        state.setSyncOwnerId(userId);
        lastSerialized = JSON.stringify(progress);
        ready = true;

        if (hasCloudProgress) {
          store.getState().setCloudSyncStatus('synced');
        } else {
          queueSave(progress);
        }
      } catch {
        const state = store.getState();
        if (state.syncOwnerId !== null && state.syncOwnerId !== userId) {
          state.replaceProgress(createDefaultProgressSnapshot());
        }
        state.setSyncOwnerId(userId);
        lastSerialized = JSON.stringify(toProgressSnapshot(store.getState()));
        ready = true;
        store.getState().setCloudSyncStatus('offline');
      }
    };

    void initialize();

    return () => {
      cancelled = true;
      abortController.abort();
      if (timer) clearTimeout(timer);
      unsubscribe();
    };
  }, [hydrated, isLoaded, userId]);

  return syncStatus;
}

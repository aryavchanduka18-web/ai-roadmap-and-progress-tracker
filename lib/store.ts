'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Status, StatusMap, StatusFilter, ViewMode } from './types';
import { allSubtopicIds } from './roadmap-data';
import { todayKey } from './utils';
import { toast } from './toast-store';
import { subtopicById } from './selectors';

const SCHEMA_VERSION = 1;
const STORAGE_KEY = 'ai-roadmap-tracker-v1';

interface RoadmapState {
  schemaVersion: number;
  statuses: StatusMap;
  lastCompletionDate: string | null;
  streak: number;
  longestStreak: number;
  sidebarCollapsed: boolean;
  dailyCompletions: Record<string, number>;
  startDate: string;
  searchQuery: string;
  statusFilter: StatusFilter;
  viewMode: ViewMode;
  selectedWeek: number;
  hydrated: boolean;
  authModalOpen: boolean;
  authModalMode: 'sign-in' | 'sign-up';

  cycleStatus: (subtopicId: string) => void;
  setStatus: (subtopicId: string, status: Status) => void;
  setMany: (ids: string[], status: Status) => void;
  setSidebarCollapsed: (v: boolean) => void;
  setSearchQuery: (q: string) => void;
  setStatusFilter: (f: StatusFilter) => void;
  setViewMode: (v: ViewMode) => void;
  setSelectedWeek: (w: number) => void;
  resetAll: () => void;
  setStartDate: (d: string) => void;
  openAuthModal: (mode?: 'sign-in' | 'sign-up') => void;
  closeAuthModal: () => void;
  _setHydrated: () => void;
}

const nextStatus = (s: Status): Status =>
  s === 'not-started' ? 'in-progress' : s === 'in-progress' ? 'completed' : 'not-started';

function applyCompletion(state: RoadmapState, prev: Status, next: Status): Partial<RoadmapState> {
  if (next !== 'completed' || prev === 'completed') return {};
  const today = todayKey();
  const dailyCompletions = { ...state.dailyCompletions, [today]: (state.dailyCompletions[today] ?? 0) + 1 };

  let streak = state.streak;
  let longestStreak = state.longestStreak;
  if (state.lastCompletionDate !== today) {
    if (state.lastCompletionDate) {
      const last = new Date(state.lastCompletionDate);
      const now = new Date(today);
      const ms = now.getTime() - last.getTime();
      const days = Math.round(ms / (24 * 60 * 60 * 1000));
      streak = days === 1 ? state.streak + 1 : 1;
    } else {
      streak = 1;
    }
    if (streak > longestStreak) longestStreak = streak;
  }
  return {
    lastCompletionDate: today,
    dailyCompletions,
    streak,
    longestStreak,
  };
}

export const useRoadmapStore = create<RoadmapState>()(
  persist(
    (set, get) => ({
      schemaVersion: SCHEMA_VERSION,
      statuses: {},
      lastCompletionDate: null,
      streak: 0,
      longestStreak: 0,
      sidebarCollapsed: false,
      dailyCompletions: {},
      startDate: todayKey(),
      searchQuery: '',
      statusFilter: 'all',
      viewMode: 'roadmap',
      selectedWeek: 1,
      hydrated: false,
      authModalOpen: false,
      authModalMode: 'sign-in',

      openAuthModal: (mode = 'sign-in') => set({ authModalOpen: true, authModalMode: mode }),
      closeAuthModal: () => set({ authModalOpen: false }),

      cycleStatus: (id) => {
        const prev: Status = get().statuses[id] ?? 'not-started';
        const next = nextStatus(prev);
        set((state) => ({
          statuses: { ...state.statuses, [id]: next },
          ...applyCompletion(state, prev, next),
        }));
        if (next === 'completed' && prev !== 'completed') {
          toast(subtopicById(id)?.title ?? 'Task completed');
        }
      },
      setStatus: (id, status) => {
        const prev: Status = get().statuses[id] ?? 'not-started';
        set((state) => ({
          statuses: { ...state.statuses, [id]: status },
          ...applyCompletion(state, prev, status),
        }));
        if (status === 'completed' && prev !== 'completed') {
          toast(subtopicById(id)?.title ?? 'Task completed');
        }
      },
      setMany: (ids, status) => {
        const prevMap = get().statuses;
        set((state) => {
          const next: StatusMap = { ...state.statuses };
          let extra: Partial<RoadmapState> = {};
          for (const id of ids) {
            const prev: Status = next[id] ?? 'not-started';
            next[id] = status;
            if (status === 'completed' && prev !== 'completed') {
              extra = applyCompletion({ ...state, ...extra, statuses: next } as RoadmapState, prev, status);
            }
          }
          return { statuses: next, ...extra };
        });
        if (status === 'completed') {
          const n = ids.filter((id) => (prevMap[id] ?? 'not-started') !== 'completed').length;
          if (n > 0) toast(`${n} task${n === 1 ? '' : 's'} completed`, n * 50);
        }
      },
      setSidebarCollapsed: (v) => set({ sidebarCollapsed: v }),
      setSearchQuery: (q) => set({ searchQuery: q }),
      setStatusFilter: (f) => set({ statusFilter: f }),
      setViewMode: (v) => set({ viewMode: v }),
      setSelectedWeek: (w) => set({ selectedWeek: w }),
      setStartDate: (d) => set({ startDate: d }),
      resetAll: () =>
        set({
          statuses: {},
          lastCompletionDate: null,
          streak: 0,
          longestStreak: 0,
          dailyCompletions: {},
          searchQuery: '',
          statusFilter: 'all',
          selectedWeek: 1,
        }),
      _setHydrated: () => set({ hydrated: true }),
    }),
    {
      name: STORAGE_KEY,
      storage: createJSONStorage(() => {
        if (typeof window === 'undefined') {
          // SSR-safe noop storage
          return {
            getItem: () => null,
            setItem: () => undefined,
            removeItem: () => undefined,
          };
        }
        return window.localStorage;
      }),
      version: SCHEMA_VERSION,
      partialize: (s) => ({
        schemaVersion: s.schemaVersion,
        statuses: s.statuses,
        lastCompletionDate: s.lastCompletionDate,
        streak: s.streak,
        longestStreak: s.longestStreak,
        sidebarCollapsed: s.sidebarCollapsed,
        dailyCompletions: s.dailyCompletions,
        startDate: s.startDate,
        selectedWeek: s.selectedWeek,
      }),
      onRehydrateStorage: () => (state, error) => {
        if (error) return; // fallback to defaults silently
        if (state) state._setHydrated();
      },
      merge: (persisted, current) => {
        const p = (persisted ?? {}) as Partial<RoadmapState>;
        // Guard against malformed localStorage
        const safeStatuses: StatusMap = {};
        if (p.statuses && typeof p.statuses === 'object') {
          const known = new Set(allSubtopicIds);
          for (const [k, v] of Object.entries(p.statuses)) {
            if (known.has(k) && (v === 'not-started' || v === 'in-progress' || v === 'completed')) {
              safeStatuses[k] = v;
            }
          }
        }
        return {
          ...current,
          ...p,
          statuses: safeStatuses,
          dailyCompletions: p.dailyCompletions ?? {},
        };
      },
    }
  )
);

export { STORAGE_KEY, SCHEMA_VERSION };

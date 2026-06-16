'use client';

import { create } from 'zustand';

export interface ToastItem {
  id: number;
  title: string;
  xp: number;
}

interface ToastState {
  toasts: ToastItem[];
  dismiss: (id: number) => void;
  _push: (t: Omit<ToastItem, 'id'>) => void;
}

let _id = 0;

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],
  dismiss: (id) => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),
  _push: (t) =>
    set((s) => {
      const id = ++_id;
      // Auto-dismiss after 2.6s (browser only — guarded for SSR safety).
      if (typeof window !== 'undefined') {
        window.setTimeout(() => useToastStore.getState().dismiss(id), 2600);
      }
      // Cap the stack so rapid completions (e.g. "complete week") don't flood.
      return { toasts: [...s.toasts, { ...t, id }].slice(-3) };
    }),
}));

// Imperative helper so non-React callers (the roadmap store) can fire a toast.
export function toast(title: string, xp = 50): void {
  useToastStore.getState()._push({ title, xp });
}

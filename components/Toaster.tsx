'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useToastStore } from '@/lib/toast-store';

// Completion toasts. Mounted once at the app root (app/page.tsx). Fires for
// every task that transitions into "completed" — see lib/store.ts.
// Spring physics + reduced-motion fallback per the animation guidelines.
export function Toaster() {
  const toasts = useToastStore((s) => s.toasts);
  const dismiss = useToastStore((s) => s.dismiss);
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[60] flex w-[min(92vw,320px)] flex-col gap-2">
      <AnimatePresence initial={false}>
        {toasts.map((t) => (
          <motion.button
            key={t.id}
            layout
            type="button"
            onClick={() => dismiss(t.id)}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.96 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
            transition={
              reduce ? { duration: 0.15 } : { type: 'spring', stiffness: 500, damping: 34, mass: 0.7 }
            }
            className="pointer-events-auto flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/95 px-4 py-3 text-left shadow-xl shadow-black/40 backdrop-blur"
          >
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
              <Check className="h-4 w-4" strokeWidth={3} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-medium text-zinc-100">{t.title}</span>
              <span className="block text-xs font-semibold text-brand-400">+{t.xp} XP</span>
            </span>
          </motion.button>
        ))}
      </AnimatePresence>
    </div>
  );
}

'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { AlertTriangle, X } from 'lucide-react';
import { useRoadmapStore } from '@/lib/store';
import { Button } from './ui/Button';

interface Props {
  open: boolean;
  onClose: () => void;
}

export function ResetModal({ open, onClose }: Props) {
  const resetAll = useRoadmapStore((s) => s.resetAll);

  const confirm = () => {
    resetAll();
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="w-full max-w-sm overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start gap-3 p-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-rose-500/15 text-rose-400">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-zinc-100">Reset all progress?</div>
                <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                  Are you sure? This cannot be undone. All subtopic statuses, streaks, and daily completion history will be cleared.
                </p>
              </div>
              <button onClick={onClose} className="text-zinc-500 hover:text-zinc-200">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex items-center justify-end gap-2 border-t border-zinc-800 bg-zinc-950/50 px-4 py-3">
              <Button variant="secondary" onClick={onClose}>
                Cancel
              </Button>
              <Button variant="danger" onClick={confirm}>
                Yes, reset everything
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

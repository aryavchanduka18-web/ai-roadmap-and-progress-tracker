'use client';

import { motion } from 'framer-motion';
import { Check, Minus } from 'lucide-react';
import type { Status } from '@/lib/types';
import { cn } from '@/lib/utils';

interface CheckboxProps {
  status: Status;
  onCycle: () => void;
  size?: 'sm' | 'md';
  ariaLabel?: string;
}

export function Checkbox({ status, onCycle, size = 'md', ariaLabel = 'Toggle status' }: CheckboxProps) {
  const dim = size === 'sm' ? 'h-4 w-4' : 'h-5 w-5';
  const isCompleted = status === 'completed';
  const isInProgress = status === 'in-progress';

  return (
    <motion.button
      type="button"
      aria-label={ariaLabel}
      onClick={onCycle}
      whileTap={{ scale: 0.85 }}
      transition={{ type: 'spring', stiffness: 500, damping: 25 }}
      className={cn(
        'inline-flex flex-shrink-0 items-center justify-center rounded-[6px] border transition-colors duration-150',
        dim,
        isCompleted && 'border-brand-500 bg-brand-500',
        isInProgress && 'border-brand-500/70 bg-brand-500/10',
        !isCompleted && !isInProgress && 'border-zinc-700 bg-zinc-900 hover:border-zinc-500'
      )}
    >
      {isCompleted && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.15 }}
          className="text-zinc-950"
        >
          <Check className={size === 'sm' ? 'h-3 w-3' : 'h-3.5 w-3.5'} strokeWidth={3} />
        </motion.span>
      )}
      {isInProgress && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.15 }}
          className="text-brand-400"
        >
          <Minus className={size === 'sm' ? 'h-3 w-3' : 'h-3.5 w-3.5'} strokeWidth={3.5} />
        </motion.span>
      )}
    </motion.button>
  );
}

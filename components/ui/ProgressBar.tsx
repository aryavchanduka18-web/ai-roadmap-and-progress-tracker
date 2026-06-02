'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number; // 0..100
  className?: string;
  trackClassName?: string;
  fillClassName?: string;
}

export function ProgressBar({ value, className, trackClassName, fillClassName }: ProgressBarProps) {
  const v = Math.max(0, Math.min(100, value));
  return (
    <div className={cn('w-full', className)}>
      <div className={cn('h-1.5 w-full overflow-hidden rounded-full bg-zinc-800', trackClassName)}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${v}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className={cn('h-full rounded-full bg-brand-500', fillClassName)}
        />
      </div>
    </div>
  );
}

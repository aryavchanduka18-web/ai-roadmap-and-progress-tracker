'use client';

import type { Priority, Status } from '@/lib/types';
import { cn } from '@/lib/utils';

const priorityClasses: Record<Priority, string> = {
  'must-know': 'border-brand-500/40 bg-brand-500/15 text-brand-300',
  'nice-to-have': 'border-zinc-700 bg-zinc-800/60 text-zinc-300',
  skip: 'border-zinc-800 bg-zinc-900 text-zinc-500 line-through',
  revisit: 'border-amber-500/30 bg-amber-500/15 text-amber-300',
};

const priorityLabels: Record<Priority, string> = {
  'must-know': 'MUST-KNOW',
  'nice-to-have': 'NICE-TO-HAVE',
  skip: 'SKIP',
  revisit: 'REVISIT',
};

const statusClasses: Record<Status, string> = {
  completed: 'border-emerald-500/30 bg-emerald-500/15 text-emerald-300',
  'in-progress': 'border-amber-500/30 bg-amber-500/15 text-amber-300',
  'not-started': 'border-zinc-700 bg-zinc-800/60 text-zinc-400',
};

const statusLabels: Record<Status, string> = {
  completed: 'Completed',
  'in-progress': 'In Progress',
  'not-started': 'Not Started',
};

export function PriorityBadge({ priority, className }: { priority: Priority; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border px-1.5 py-0.5 text-[10px] font-semibold tracking-wide',
        priorityClasses[priority],
        className
      )}
    >
      {priorityLabels[priority]}
    </span>
  );
}

export function StatusBadge({ status, className }: { status: Status; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-medium',
        statusClasses[status],
        className
      )}
    >
      {statusLabels[status]}
    </span>
  );
}

export function HoursPill({ hours }: { hours?: number }) {
  if (hours == null) return null;
  return (
    <span className="inline-flex items-center rounded-md border border-zinc-800 bg-zinc-900 px-1.5 py-0.5 text-[10px] font-medium text-zinc-400">
      {hours}h
    </span>
  );
}

'use client';

import { memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useUser } from '@clerk/nextjs';
import { Youtube, FileText, BookOpen, BookMarked, GraduationCap, ExternalLink } from 'lucide-react';
import type { Resource, Subtopic } from '@/lib/types';
import { useRoadmapStore } from '@/lib/store';
import { Checkbox } from './ui/Checkbox';
import { HoursPill, PriorityBadge, StatusBadge } from './ui/Badge';
import { Tooltip } from './ui/Tooltip';

interface Props {
  subtopic: Subtopic;
  index: string;
}

const RESOURCE_ICON: Record<Resource['type'], React.ComponentType<{ className?: string }>> = {
  youtube: Youtube,
  article: FileText,
  doc: FileText,
  book: BookMarked,
  course: GraduationCap,
};

const RESOURCE_TINT: Record<Resource['type'], string> = {
  youtube: 'text-red-400 hover:text-red-300',
  article: 'text-zinc-400 hover:text-zinc-200',
  doc: 'text-sky-400 hover:text-sky-300',
  book: 'text-amber-400 hover:text-amber-300',
  course: 'text-emerald-400 hover:text-emerald-300',
};

function SubtopicRowBase({ subtopic, index }: Props) {
  const { isSignedIn } = useUser();
  const status = useRoadmapStore((s) => s.statuses[subtopic.id] ?? 'not-started');
  const cycle = useRoadmapStore((s) => s.cycleStatus);
  const openAuthModal = useRoadmapStore((s) => s.openAuthModal);
  const onCycle = useCallback(() => {
    if (isSignedIn) {
      cycle(subtopic.id);
    } else {
      openAuthModal('sign-in');
    }
  }, [cycle, subtopic.id, isSignedIn, openAuthModal]);

  return (
    <motion.div
      layout
      className="group flex items-start gap-3 rounded-lg border border-transparent px-2 py-2 transition hover:border-zinc-800 hover:bg-zinc-900/40"
    >
      <div className="pt-0.5">
        <Checkbox status={status} onCycle={onCycle} ariaLabel={`Toggle ${subtopic.title}`} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span className="text-[11px] font-medium text-zinc-500">{index}</span>
          <span className="text-sm text-zinc-100">{subtopic.title}</span>
        </div>
        <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
          <HoursPill hours={subtopic.hours} />
          <PriorityBadge priority={subtopic.priority} />
          {subtopic.resources.map((r, i) => {
            if (!r.url) {
              return (
                <Tooltip key={i} content={r.label}>
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded text-zinc-500">
                    <BookOpen className="h-3 w-3" />
                  </span>
                </Tooltip>
              );
            }
            const Icon = RESOURCE_ICON[r.type];
            return (
              <Tooltip key={i} content={r.label}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={`inline-flex h-5 items-center gap-1 rounded px-1 transition ${RESOURCE_TINT[r.type]}`}
                  aria-label={r.label}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <ExternalLink className="h-2.5 w-2.5 opacity-0 transition group-hover:opacity-100" />
                </a>
              </Tooltip>
            );
          })}
        </div>
      </div>
      <div className="hidden flex-shrink-0 sm:block">
        <StatusBadge status={status} />
      </div>
    </motion.div>
  );
}

export const SubtopicRow = memo(SubtopicRowBase);

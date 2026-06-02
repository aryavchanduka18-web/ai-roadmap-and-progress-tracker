'use client';

import { memo, useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Folder } from 'lucide-react';
import type { Phase, StatusFilter } from '@/lib/types';
import { useRoadmapStore } from '@/lib/store';
import { summarizePhase } from '@/lib/selectors';
import { ProgressBar } from './ui/ProgressBar';
import { TopicGroup } from './TopicGroup';

interface Props {
  phase: Phase;
  defaultExpanded?: boolean;
  search: string;
  filter: StatusFilter;
}

function PhaseCardBase({ phase, defaultExpanded = false, search, filter }: Props) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const statuses = useRoadmapStore((s) => s.statuses);
  const summary = useMemo(() => summarizePhase(statuses, phase), [statuses, phase]);

  // Auto-expand when search has matches in this phase
  useEffect(() => {
    if (!search.trim()) return;
    const q = search.trim().toLowerCase();
    const hit = phase.topics.some(
      (t) => t.title.toLowerCase().includes(q) || t.subtopics.some((s) => s.title.toLowerCase().includes(q))
    );
    if (hit) setExpanded(true);
  }, [search, phase]);

  return (
    <motion.div layout className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 transition hover:border-zinc-700">
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex w-full items-center gap-3 p-4 text-left"
      >
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-500/15 text-brand-400">
          <Folder className="h-4 w-4" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold tracking-tight text-zinc-100">
              {phase.number}. {phase.title}
            </span>
            <span className="rounded-md border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-[10px] font-medium text-zinc-400">
              {phase.weekRange}
            </span>
          </div>
          {phase.description && <p className="mt-0.5 text-[11px] text-zinc-500 line-clamp-1">{phase.description}</p>}
          <div className="mt-2 flex items-center gap-3">
            <ProgressBar value={summary.percent} className="max-w-[260px] flex-1" />
            <span className="text-[11px] text-zinc-400">{summary.completed} / {summary.total}</span>
            <span className="text-[11px] font-medium text-brand-400">{summary.percent}%</span>
          </div>
        </div>
        <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }} className="text-zinc-500">
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="space-y-3 border-t border-zinc-800 bg-zinc-950/30 p-4">
              {phase.topics.map((t, i) => (
                <TopicGroup
                  key={t.id}
                  topic={t}
                  topicIndex={phase.number * 100 + (i + 1)}
                  search={search}
                  filter={filter}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export const PhaseCard = memo(PhaseCardBase);

'use client';

import { memo, useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Folder } from 'lucide-react';
import { useRoadmapStore } from '@/lib/store';
import { summarizePhase } from '@/lib/selectors';
import type { FilteredPhase } from '@/lib/search';
import { ProgressBar } from './ui/ProgressBar';
import { Highlight } from './ui/Highlight';
import { TopicGroup } from './TopicGroup';

interface Props {
  filtered: FilteredPhase;
  tokens: string[];
  defaultExpanded?: boolean;
}

function PhaseCardBase({ filtered, tokens, defaultExpanded = false }: Props) {
  const phase = filtered.phase;
  const [expanded, setExpanded] = useState(defaultExpanded);
  const statuses = useRoadmapStore((s) => s.statuses);
  const revealId = useRoadmapStore((s) => s.revealId);
  const summary = useMemo(() => summarizePhase(statuses, phase), [statuses, phase]);

  // Auto-expand when a search is active (only matching phases reach this component).
  useEffect(() => {
    if (tokens.length) setExpanded(true);
  }, [tokens]);

  // Auto-expand when a dropdown result inside this phase is being revealed.
  useEffect(() => {
    if (revealId && phase.topics.some((t) => t.subtopics.some((s) => s.id === revealId))) {
      setExpanded(true);
    }
  }, [revealId, phase]);

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
              {phase.number}. <Highlight text={phase.title} tokens={tokens} />
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
              {filtered.topics.map((ft) => (
                <TopicGroup
                  key={ft.topic.id}
                  filtered={ft}
                  tokens={tokens}
                  topicIndex={phase.number * 100 + (phase.topics.indexOf(ft.topic) + 1)}
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

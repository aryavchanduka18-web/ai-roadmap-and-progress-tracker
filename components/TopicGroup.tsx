'use client';

import { useCallback } from 'react';
import { CheckCheck, CircleSlash } from 'lucide-react';
import { useUser } from '@clerk/nextjs';
import { useRoadmapStore } from '@/lib/store';
import { summarizeTopic } from '@/lib/selectors';
import type { FilteredTopic } from '@/lib/search';
import { SubtopicRow } from './SubtopicRow';
import { ProgressBar } from './ui/ProgressBar';
import { Highlight } from './ui/Highlight';

interface Props {
  filtered: FilteredTopic;
  tokens: string[];
  topicIndex: number; // 1-based
}

export function TopicGroup({ filtered, tokens, topicIndex }: Props) {
  const { isSignedIn } = useUser();
  const statuses = useRoadmapStore((s) => s.statuses);
  const setMany = useRoadmapStore((s) => s.setMany);

  const topic = filtered.topic;
  const filteredSubs = filtered.subtopics;

  const summary = summarizeTopic(statuses, topic);

  const markAll = useCallback(
    (target: 'completed' | 'not-started') => {
      setMany(topic.subtopics.map((s) => s.id), target);
    },
    [setMany, topic.subtopics]
  );

  if (filteredSubs.length === 0) return null;

  return (
    <div className="rounded-lg border border-zinc-800/70 bg-zinc-950/40">
      <div className="flex flex-wrap items-center gap-3 border-b border-zinc-800/70 px-3 py-2.5">
        <div className="min-w-0 flex-1">
          <div className="text-sm font-medium text-zinc-100">
            <Highlight text={topic.title} tokens={tokens} />
          </div>
          <div className="mt-1 flex items-center gap-2 text-[11px] text-zinc-500">
            <span>{summary.completed} / {summary.total}</span>
            <span className="text-zinc-700">·</span>
            <span>{summary.percent}%</span>
          </div>
        </div>
        <div className="w-32">
          <ProgressBar value={summary.percent} />
        </div>
        {isSignedIn && (
          <div className="flex items-center gap-1">
            <button
              onClick={() => markAll('completed')}
              className="inline-flex items-center gap-1 rounded-md border border-zinc-800 bg-zinc-900 px-2 py-1 text-[10px] font-medium text-zinc-300 transition hover:border-emerald-500/40 hover:text-emerald-300"
              title="Mark all complete"
            >
              <CheckCheck className="h-3 w-3" /> All
            </button>
            <button
              onClick={() => markAll('not-started')}
              className="inline-flex items-center gap-1 rounded-md border border-zinc-800 bg-zinc-900 px-2 py-1 text-[10px] font-medium text-zinc-300 transition hover:border-zinc-600 hover:text-zinc-100"
              title="Mark all incomplete"
            >
              <CircleSlash className="h-3 w-3" /> Clear
            </button>
          </div>
        )}
      </div>
      <div className="space-y-0.5 p-2">
        {filteredSubs.map((sub) => (
          <SubtopicRow
            key={sub.id}
            subtopic={sub}
            tokens={tokens}
            index={`${topicIndex}.${topic.subtopics.findIndex((s) => s.id === sub.id) + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

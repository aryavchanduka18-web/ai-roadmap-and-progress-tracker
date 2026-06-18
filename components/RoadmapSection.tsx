'use client';

import { useMemo } from 'react';
import { Search, SearchX } from 'lucide-react';
import { useRoadmapStore } from '@/lib/store';
import { filterRoadmap, tokenize } from '@/lib/search';
import { PhaseCard } from './PhaseCard';

export function RoadmapSection() {
  const search = useRoadmapStore((s) => s.searchQuery);
  const filter = useRoadmapStore((s) => s.statusFilter);
  const statuses = useRoadmapStore((s) => s.statuses);
  const viewMode = useRoadmapStore((s) => s.viewMode);
  const selectedWeek = useRoadmapStore((s) => s.selectedWeek);

  const tokens = useMemo(() => tokenize(search), [search]);
  const result = useMemo(
    () => filterRoadmap(search, filter, statuses, viewMode, selectedWeek),
    [search, filter, statuses, viewMode, selectedWeek]
  );

  if (result.phases.length === 0) {
    return (
      <div className="space-y-4">
        <SectionHeading title="Roadmap Topics" count={0} search={search} />
        <EmptyState
          icon={search ? SearchX : Search}
          title={search ? 'No topics match your search' : 'No subtopics match your filter'}
          subtitle={search ? `Try clearing "${search}" or adjusting filters.` : 'Try switching the status filter to "All".'}
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <SectionHeading title="Roadmap Topics" count={result.subtopicCount} search={search} />
      <div className="space-y-3">
        {result.phases.map((fp) => (
          <PhaseCard
            key={fp.phase.id}
            filtered={fp}
            tokens={tokens}
            defaultExpanded={fp.phase.number === 1}
          />
        ))}
      </div>
    </div>
  );
}

function SectionHeading({ title, count, search }: { title: string; count: number; search: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <h2 className="text-lg font-semibold tracking-tight text-zinc-100">{title}</h2>
      {search.trim() && (
        <span className="text-xs text-zinc-400">
          {count} result{count === 1 ? '' : 's'} for{' '}
          <span className="text-zinc-200">“{search.trim()}”</span>
        </span>
      )}
    </div>
  );
}

function EmptyState({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-800 bg-zinc-900/30 px-6 py-12 text-center">
      <Icon className="mb-3 h-8 w-8 text-zinc-500" />
      <div className="text-sm font-medium text-zinc-200">{title}</div>
      <div className="mt-1 text-xs text-zinc-500">{subtitle}</div>
    </div>
  );
}

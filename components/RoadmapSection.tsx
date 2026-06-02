'use client';

import { useMemo } from 'react';
import { Search, SearchX } from 'lucide-react';
import { useRoadmapStore } from '@/lib/store';
import { roadmap } from '@/lib/roadmap-data';
import { PhaseCard } from './PhaseCard';

export function RoadmapSection() {
  const search = useRoadmapStore((s) => s.searchQuery);
  const filter = useRoadmapStore((s) => s.statusFilter);
  const statuses = useRoadmapStore((s) => s.statuses);
  const viewMode = useRoadmapStore((s) => s.viewMode);
  const selectedWeek = useRoadmapStore((s) => s.selectedWeek);

  const visiblePhases = useMemo(() => {
    const q = search.trim().toLowerCase();
    return roadmap.filter((phase) => {
      const phaseTopics = phase.topics.filter((t) => {
        // Week view: only the topic for selected week
        if (viewMode === 'week' && !t.subtopics.some((s) => s.weekNumber === selectedWeek)) return false;
        const visibleSubs = t.subtopics.filter((sub) => {
          if (q && !sub.title.toLowerCase().includes(q) && !t.title.toLowerCase().includes(q)) return false;
          if (filter !== 'all') {
            const s = statuses[sub.id] ?? 'not-started';
            if (s !== filter) return false;
          }
          return true;
        });
        return visibleSubs.length > 0;
      });
      return phaseTopics.length > 0;
    });
  }, [search, filter, statuses, viewMode, selectedWeek]);

  if (visiblePhases.length === 0) {
    return (
      <div className="space-y-4">
        <SectionHeading title="Roadmap Topics" />
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
      <SectionHeading title="Roadmap Topics" />
      <div className="space-y-3">
        {visiblePhases.map((p) => (
          <PhaseCard key={p.id} phase={p} defaultExpanded={p.number === 1} search={search} filter={filter} />
        ))}
      </div>
    </div>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="flex items-baseline justify-between">
      <h2 className="text-lg font-semibold tracking-tight text-zinc-100">{title}</h2>
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

'use client';

import { useMemo } from 'react';
import { Clock, CornerDownLeft, SearchX } from 'lucide-react';
import { useRoadmapStore } from '@/lib/store';
import { filterRoadmap, tokenize } from '@/lib/search';
import { Highlight } from './ui/Highlight';

// Live "command palette" style finder that drops under the search bar. Searches
// the whole roadmap (every week, all statuses) across titles + resource labels
// via the shared filterRoadmap engine, so it stays in sync with the main list.
export function SearchDropdown({ onClose }: { onClose: () => void }) {
  const search = useRoadmapStore((s) => s.searchQuery);
  const statuses = useRoadmapStore((s) => s.statuses);
  const selectedWeek = useRoadmapStore((s) => s.selectedWeek);
  const setSelectedWeek = useRoadmapStore((s) => s.setSelectedWeek);
  const reveal = useRoadmapStore((s) => s.reveal);

  const tokens = useMemo(() => tokenize(search), [search]);
  // 'all' + 'roadmap' so the finder ignores the current status filter / week
  // view and can surface anything; navigation then jumps to the right place.
  const result = useMemo(
    () => filterRoadmap(search, 'all', statuses, 'roadmap', selectedWeek),
    [search, statuses, selectedWeek]
  );

  if (!tokens.length) return null;

  const onSelect = (subId: string, weekNumber: number) => {
    setSelectedWeek(weekNumber);
    reveal(subId); // SubtopicRow scrolls to + pulses this row
    onClose();
    requestAnimationFrame(() => {
      document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  if (result.subtopicCount === 0) {
    return (
      <div className="absolute left-0 right-0 top-full z-50 mt-2 flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-400 shadow-2xl">
        <SearchX className="h-4 w-4 text-zinc-500" />
        No matches for “{search.trim()}”.
      </div>
    );
  }

  return (
    <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-[70vh] overflow-y-auto rounded-lg border border-zinc-800 bg-zinc-900 shadow-2xl">
      <div className="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-900/95 px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-zinc-500 backdrop-blur">
        {result.subtopicCount} result{result.subtopicCount === 1 ? '' : 's'} for “{search.trim()}”
      </div>
      {result.phases.map((fp) => (
        <div key={fp.phase.id} className="py-1">
          <div className="px-3 pt-2 pb-1 text-[11px] font-semibold text-brand-400">
            Phase {fp.phase.number}: <Highlight text={fp.phase.title} tokens={tokens} />
          </div>
          {fp.topics.map((ft) => (
            <div key={ft.topic.id} className="px-1.5">
              <div className="px-1.5 pt-1 text-[10px] uppercase tracking-wider text-zinc-600">
                <Highlight text={ft.topic.title} tokens={tokens} />
              </div>
              {ft.subtopics.map((sub) => (
                <button
                  key={sub.id}
                  type="button"
                  onMouseDown={(e) => e.preventDefault()} // keep input focus until click fires
                  onClick={() => onSelect(sub.id, sub.weekNumber)}
                  className="group flex w-full items-center justify-between gap-3 rounded-md px-2 py-2 text-left transition hover:bg-zinc-800"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm text-zinc-100">
                      <Highlight text={sub.title} tokens={tokens} />
                    </span>
                    <span className="mt-0.5 flex items-center gap-2 text-[10px] text-zinc-500">
                      <span>Week {sub.weekNumber}</span>
                      {sub.hours ? (
                        <span className="inline-flex items-center gap-0.5">
                          <Clock className="h-2.5 w-2.5" />~{sub.hours}h
                        </span>
                      ) : null}
                      {sub.resources.length > 0 ? (
                        <span>
                          {sub.resources.length} resource{sub.resources.length === 1 ? '' : 's'}
                        </span>
                      ) : null}
                    </span>
                  </span>
                  <CornerDownLeft className="h-3.5 w-3.5 flex-shrink-0 text-zinc-600 opacity-0 transition group-hover:opacity-100" />
                </button>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

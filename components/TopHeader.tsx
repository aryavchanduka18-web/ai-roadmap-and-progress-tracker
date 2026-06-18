'use client';

import { useEffect, useRef, useState } from 'react';
import { Search, Filter, Map, CalendarRange, X } from 'lucide-react';
import { useRoadmapStore } from '@/lib/store';
import type { StatusFilter, ViewMode } from '@/lib/types';
import { cn } from '@/lib/utils';
import { SearchDropdown } from './SearchDropdown';

export function TopHeader() {
  const search = useRoadmapStore((s) => s.searchQuery);
  const setSearch = useRoadmapStore((s) => s.setSearchQuery);
  const filter = useRoadmapStore((s) => s.statusFilter);
  const setFilter = useRoadmapStore((s) => s.setStatusFilter);
  const viewMode = useRoadmapStore((s) => s.viewMode);
  const setViewMode = useRoadmapStore((s) => s.setViewMode);

  const [open, setOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close the dropdown on outside click or Escape.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-800 bg-zinc-950/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-3 px-4 py-3 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-4">
        <div className="flex items-center gap-3 pl-12 lg:pl-0">
          <h1 className="text-base font-semibold tracking-tight text-zinc-100 lg:text-lg">
            AI Roadmap Progress Tracker
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div ref={searchRef} className="relative">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setOpen(true);
              }}
              onFocus={() => setOpen(true)}
              placeholder="Search topics, resources…"
              className="h-9 w-56 rounded-md border border-zinc-800 bg-zinc-900 pl-8 pr-7 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-brand-500 sm:w-72"
            />
            {search && (
              <button
                onClick={() => {
                  setSearch('');
                  setOpen(false);
                }}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-0.5 text-zinc-500 hover:text-zinc-200"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
            {open && <SearchDropdown onClose={() => setOpen(false)} />}
          </div>
          <div className="relative">
            <Filter className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as StatusFilter)}
              className="h-9 rounded-md border border-zinc-800 bg-zinc-900 pl-8 pr-7 text-sm text-zinc-100 outline-none focus:border-brand-500"
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="in-progress">In Progress</option>
              <option value="not-started">Not Started</option>
            </select>
          </div>
          <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
        </div>
      </div>
    </header>
  );
}

function ViewToggle({ viewMode, setViewMode }: { viewMode: ViewMode; setViewMode: (v: ViewMode) => void }) {
  return (
    <div className="inline-flex rounded-md border border-zinc-800 bg-zinc-900 p-0.5">
      <button
        onClick={() => setViewMode('roadmap')}
        className={cn(
          'inline-flex items-center gap-1.5 rounded px-2.5 py-1.5 text-xs font-medium transition',
          viewMode === 'roadmap' ? 'bg-zinc-800 text-zinc-100' : 'text-zinc-400 hover:text-zinc-100'
        )}
      >
        <Map className="h-3.5 w-3.5" />
        Roadmap View
      </button>
      <button
        onClick={() => setViewMode('week')}
        className={cn(
          'inline-flex items-center gap-1.5 rounded px-2.5 py-1.5 text-xs font-medium transition',
          viewMode === 'week' ? 'bg-zinc-800 text-zinc-100' : 'text-zinc-400 hover:text-zinc-100'
        )}
      >
        <CalendarRange className="h-3.5 w-3.5" />
        Week View
      </button>
    </div>
  );
}

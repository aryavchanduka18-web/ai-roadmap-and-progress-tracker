'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Map,
  BarChart3,
  CalendarDays,
  ChevronLeft,
  Rocket,
  Menu,
  X,
} from 'lucide-react';
import { useRoadmapStore } from '@/lib/store';
import { cn } from '@/lib/utils';
import { StreakWidget } from './StreakWidget';
import { ProfilePill } from './ProfilePill';

interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV: NavItem[] = [
  { href: '#dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '#roadmap', label: 'Roadmap', icon: Map },
  { href: '#weekly', label: 'Weekly Progress', icon: CalendarDays },
  { href: '#analytics', label: 'Analytics', icon: BarChart3 },
];

interface SidebarProps {
  onSignInClick: () => void;
}

export function Sidebar({ onSignInClick }: SidebarProps) {
  const collapsed = useRoadmapStore((s) => s.sidebarCollapsed);
  const setCollapsed = useRoadmapStore((s) => s.setSidebarCollapsed);
  const [mobileOpen, setMobileOpen] = useState(false);
  const width = collapsed ? 64 : 240;

  const sidebarBody = (mobile: boolean) => (
    <div
      className={cn(
        'flex h-full flex-col border-r border-zinc-800 bg-zinc-900/70 backdrop-blur',
        mobile && 'w-[240px]'
      )}
    >
      <div className="flex items-center justify-between px-3 py-4">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-amber-400 text-zinc-950">
            <Rocket className="h-4 w-4" strokeWidth={2.5} />
          </div>
          {(!collapsed || mobile) && (
            <div className="min-w-0">
              <div className="text-sm font-semibold tracking-tight text-zinc-100">AI Roadmap</div>
              <div className="text-[10px] uppercase tracking-wider text-zinc-500">Progress Tracker</div>
            </div>
          )}
        </div>
        {!mobile && (
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden h-7 w-7 items-center justify-center rounded-md text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 lg:inline-flex"
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <motion.span animate={{ rotate: collapsed ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronLeft className="h-4 w-4" />
            </motion.span>
          </button>
        )}
        {mobile && (
          <button onClick={() => setMobileOpen(false)} className="rounded-md p-1 text-zinc-400 hover:bg-zinc-800">
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto px-2 py-2">
        {NAV.map(({ href, label, icon: Icon }) => (
          <a
            key={href}
            href={href}
            onClick={() => mobile && setMobileOpen(false)}
            className={cn(
              'group flex items-center gap-3 rounded-md px-2.5 py-2 text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-zinc-100',
              collapsed && !mobile && 'justify-center'
            )}
          >
            <Icon className="h-4 w-4 flex-shrink-0 group-hover:text-brand-400" />
            {(!collapsed || mobile) && <span className="truncate">{label}</span>}
          </a>
        ))}
      </nav>
      <div className={cn('space-y-3 px-3 pb-3 pt-2', collapsed && !mobile && 'px-2')}>
        <StreakWidget collapsed={collapsed && !mobile} />
      </div>
      <div className={cn('border-t border-zinc-800 px-2 py-2', collapsed && !mobile && 'px-1.5')}>
        <ProfilePill collapsed={collapsed && !mobile} onSignInClick={onSignInClick} />
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed left-3 top-3 z-40 inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 text-zinc-300 lg:hidden"
        aria-label="Open sidebar"
      >
        <Menu className="h-4 w-4" />
      </button>

      {/* Desktop sidebar */}
      <motion.aside
        initial={false}
        animate={{ width }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="hidden flex-shrink-0 lg:sticky lg:top-0 lg:block lg:h-screen"
        style={{ width }}
      >
        {sidebarBody(false)}
      </motion.aside>

      {/* Mobile overlay drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: -260 }}
              animate={{ x: 0 }}
              exit={{ x: -260 }}
              transition={{ type: 'spring', stiffness: 280, damping: 30 }}
              className="fixed inset-y-0 left-0 z-50 lg:hidden"
            >
              {sidebarBody(true)}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

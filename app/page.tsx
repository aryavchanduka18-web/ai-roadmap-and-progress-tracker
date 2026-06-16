'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import { Sidebar } from '@/components/Sidebar';
import { TopHeader } from '@/components/TopHeader';
import { StatsCards } from '@/components/StatsCards';
import { RoadmapSection } from '@/components/RoadmapSection';
import { AnalyticsSection } from '@/components/AnalyticsSection';
import { RightPanel } from '@/components/RightPanel';
import { ResetModal } from '@/components/ResetModal';
import { AuthModal } from '@/components/AuthModal';
import { DashboardHero } from '@/components/DashboardHero';
import { Toaster } from '@/components/Toaster';
import { useRoadmapStore } from '@/lib/store';
import { currentWeekFromStart } from '@/lib/utils';
import { Settings as SettingsIcon, Rocket, Sparkles, Lock } from 'lucide-react';

// Phase metadata used to render the "Browse by phase" strip.
// Keeps the homepage linked to the 5 phase detail pages so Google
// discovers them via crawl (even if it finds them in the sitemap first).
const PHASE_LINKS = [
  { slug: 'phase-1-math-foundations',            label: 'Phase 1', title: 'Math Foundations',              weeks: 'Wks 1–8' },
  { slug: 'phase-2-deep-learning-pytorch',        label: 'Phase 2', title: 'Deep Learning & PyTorch',       weeks: 'Wks 9–16' },
  { slug: 'phase-3-applied-llm-engineering',      label: 'Phase 3', title: 'Applied LLM Engineering',       weeks: 'Wks 17–24' },
  { slug: 'phase-4-ml-system-design-interview',   label: 'Phase 4', title: 'ML System Design & Interview',  weeks: 'Wks 25–32' },
  { slug: 'phase-5-specialization',               label: 'Phase 5', title: 'Specialization',                weeks: 'Wks 33–40' },
];

export default function Page() {
  const [mounted, setMounted] = useState(false);
  const [resetOpen, setResetOpen] = useState(false);
  const { isSignedIn, isLoaded } = useUser();
  const startDate = useRoadmapStore((s) => s.startDate);
  const setSelectedWeek = useRoadmapStore((s) => s.setSelectedWeek);
  const hydrated = useRoadmapStore((s) => s.hydrated);
  const authModalOpen = useRoadmapStore((s) => s.authModalOpen);
  const authModalMode = useRoadmapStore((s) => s.authModalMode);
  const openAuthModal = useRoadmapStore((s) => s.openAuthModal);
  const closeAuthModal = useRoadmapStore((s) => s.closeAuthModal);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      const wk = currentWeekFromStart(startDate);
      setSelectedWeek(wk);
    }
  }, [hydrated, startDate, setSelectedWeek]);

  // SEO FIX: Never return a loading spinner — Googlebot must see the full
  // roadmap on the very first HTML response. We render SignedOutLayout by
  // default (it contains the h1 + all 40 weeks of content) and only swap to
  // SignedInLayout once Clerk has confirmed the session AND the store is
  // hydrated. This eliminates the "Loading…" placeholder that was blocking
  // all organic indexing.
  const showSignedIn = mounted && isLoaded && !!isSignedIn;

  return (
    <div className="flex min-h-screen bg-zinc-950">
      <Sidebar onSignInClick={() => openAuthModal('sign-in')} />
      <main className="flex-1 min-w-0">
        <TopHeader />
        <div className="mx-auto w-full max-w-[1600px] px-4 py-6 lg:px-8 lg:py-8">
          {showSignedIn ? (
            <SignedInLayout onReset={() => setResetOpen(true)} />
          ) : (
            <SignedOutLayout onSignUp={() => openAuthModal('sign-up')} />
          )}
        </div>
      </main>
      <ResetModal open={resetOpen} onClose={() => setResetOpen(false)} />
      <AuthModal open={authModalOpen} onClose={closeAuthModal} initialMode={authModalMode} />
      <Toaster />
    </div>
  );
}

function SignedInLayout({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      <div className="flex-1 min-w-0 space-y-8">
        <DashboardHero />
        <section id="dashboard" className="scroll-mt-24">
          <StatsCards />
        </section>
        <section id="roadmap" className="scroll-mt-24">
          <RoadmapSection />
        </section>
        <section id="analytics" className="scroll-mt-24">
          <AnalyticsSection />
        </section>
        <section id="settings" className="scroll-mt-24">
          <SettingsSection onReset={onReset} />
        </section>
      </div>
      <aside id="weekly" className="w-full lg:w-[340px] lg:flex-shrink-0 scroll-mt-24">
        <RightPanel onResetClick={onReset} />
      </aside>
    </div>
  );
}

function SignedOutLayout({ onSignUp }: { onSignUp: () => void }) {
  return (
    <div className="space-y-8">
      <PublicHero onSignUp={onSignUp} />
      {/* Phase navigation strip — internal links Google uses to discover phase pages */}
      <PhasesStrip />
      <section id="roadmap" className="scroll-mt-24">
        <RoadmapSection />
      </section>
      <PublicCallout onSignUp={onSignUp} />
    </div>
  );
}

function PhasesStrip() {
  return (
    <nav aria-label="Browse by phase">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-600">
        Browse by phase
      </p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
        {PHASE_LINKS.map((p) => (
          <Link
            key={p.slug}
            href={`/roadmap/${p.slug}`}
            className="group rounded-xl border border-zinc-800 bg-zinc-900/50 px-3 py-3 transition hover:border-zinc-700 hover:bg-zinc-900"
          >
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-brand-500">
              {p.label}
            </span>
            <span className="mt-0.5 block text-xs font-medium text-zinc-300 group-hover:text-zinc-100 leading-snug">
              {p.title}
            </span>
            <span className="mt-1 block text-[10px] text-zinc-600">{p.weeks}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

function PublicHero({ onSignUp }: { onSignUp: () => void }) {
  return (
    <section id="dashboard" className="scroll-mt-24">
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 p-6 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-10 h-48 w-48 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="relative max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-2.5 py-1 text-[11px] font-medium text-brand-300">
            <Sparkles className="h-3 w-3" /> 10-month plan · 40 weeks · 5 portfolio projects
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-100 lg:text-4xl">
            The complete AI Engineer roadmap
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400 lg:text-base">
            A free, opinionated 10-month learning path from foundations to a job-ready AI Engineer.
            Math, classical ML, deep learning, transformers from scratch, RAG, fine-tuning, agents,
            ML system design, and interview prep — broken into day-by-day tasks with hand-picked resources.
            Browse the whole plan below. Sign in to track your progress, streak, and analytics.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              onClick={onSignUp}
              className="inline-flex items-center gap-2 rounded-md bg-brand-500 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-brand-400"
            >
              <Rocket className="h-3.5 w-3.5" strokeWidth={2.5} />
              Sign up free to track progress
            </button>
            <a
              href="#roadmap"
              className="inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:border-zinc-700"
            >
              Browse the roadmap
            </a>
          </div>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-xs text-zinc-500 sm:grid-cols-3">
            <li>· LLMs (40%)</li>
            <li>· Backend / MLOps (27%)</li>
            <li>· ML foundations (20%)</li>
            <li>· Interview prep (14%)</li>
            <li>· NLP (5%)</li>
            <li>· Computer vision (4%)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function PublicCallout({ onSignUp }: { onSignUp: () => void }) {
  return (
    <section id="weekly" className="scroll-mt-24">
      <div className="flex flex-col items-start gap-4 rounded-xl border border-brand-500/20 bg-brand-500/5 p-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-500/20 text-brand-400">
            <Lock className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-100">Track your progress privately</h3>
            <p className="mt-1 max-w-xl text-xs leading-relaxed text-zinc-400">
              Create a free account to check off daily tasks, build a streak, view analytics, and
              see weekly progress with a circular ring. Your progress is stored privately to your account.
            </p>
          </div>
        </div>
        <button
          onClick={onSignUp}
          className="inline-flex items-center gap-2 rounded-md bg-brand-500 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-brand-400"
        >
          <Rocket className="h-3.5 w-3.5" strokeWidth={2.5} />
          Sign up free
        </button>
      </div>
    </section>
  );
}

function SettingsSection({ onReset }: { onReset: () => void }) {
  const startDate = useRoadmapStore((s) => s.startDate);
  const setStartDate = useRoadmapStore((s) => s.setStartDate);
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
      <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-zinc-100">
        <SettingsIcon className="h-4 w-4 text-brand-500" />
        Settings
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1 block text-zinc-400">Roadmap start date</span>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-brand-500"
          />
          <span className="mt-1 block text-xs text-zinc-500">Week 1 begins on this date.</span>
        </label>
        <div className="flex items-end">
          <button
            onClick={onReset}
            className="rounded-md border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-sm font-medium text-rose-300 transition hover:bg-rose-500/20"
          >
            Reset all progress…
          </button>
        </div>
      </div>
    </div>
  );
}

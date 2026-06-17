// Server Component — fully SSR'd, no 'use client'.
// Googlebot sees 100% of the content on the first HTML response.
// Each URL targets high-intent AI learning search queries that the
// single-page homepage can never rank for on its own.

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { roadmap } from '@/lib/roadmap-data';
import { ChevronLeft, ChevronRight, Clock, BookOpen, Rocket, ArrowLeft } from 'lucide-react';

const SITE_URL = 'https://ai-roadmap--tracker.vercel.app';

// ─── slug → phase mapping ──────────────────────────────────────────────────
// Slugs are keyword-rich and target specific search queries.
// IMPORTANT: if you add a 6th phase, add its entry here AND in sitemap.ts.
const PHASES = [
  {
    slug: 'phase-1-math-foundations',
    phaseId: 'phase-1',
    keyTerms: 'linear algebra, calculus, probability, Python ML toolchain, classical ML',
  },
  {
    slug: 'phase-2-deep-learning-pytorch',
    phaseId: 'phase-2',
    keyTerms: 'neural networks, PyTorch, GPT from scratch, CNNs, NLP, transformers',
  },
  {
    slug: 'phase-3-applied-llm-engineering',
    phaseId: 'phase-3',
    keyTerms: 'prompt engineering, RAG, LoRA fine-tuning, AI agents, LangChain, production LLMs',
  },
  {
    slug: 'phase-4-ml-system-design-interview',
    phaseId: 'phase-4',
    keyTerms: 'ML system design, DSA for ML engineers, coding interviews, ML breadth',
  },
  {
    slug: 'phase-5-specialization',
    phaseId: 'phase-5',
    keyTerms: 'AI specialization, computer vision, NLP, internship preparation, MS applications',
  },
] as const;

type Slug = (typeof PHASES)[number]['slug'];

// ─── Static generation ─────────────────────────────────────────────────────
export function generateStaticParams() {
  return PHASES.map(({ slug }) => ({ slug }));
}

// ─── Per-page SEO metadata ─────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const entry = PHASES.find((p) => p.slug === params.slug);
  if (!entry) return {};
  const phase = roadmap.find((p) => p.id === entry.phaseId);
  if (!phase) return {};

  // Don't include "AI Engineer Roadmap" here — layout.tsx template appends
  // " · AI Engineer Roadmap" automatically via the title template.
  const title = `Phase ${phase.number}: ${phase.title}`;
  const description =
    `${phase.description} ${phase.weekRange} of the free 10-month AI Engineer roadmap. ` +
    `Covers ${entry.keyTerms}. Includes ${phase.topics.length} weeks of daily tasks with curated resources.`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/roadmap/${params.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/roadmap/${params.slug}`,
      siteName: 'AI Engineer Roadmap',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

// ─── Page component ────────────────────────────────────────────────────────
export default function PhasePage({ params }: { params: { slug: string } }) {
  const entryIndex = PHASES.findIndex((p) => p.slug === params.slug);
  if (entryIndex === -1) notFound();

  const entry = PHASES[entryIndex];
  const phase = roadmap.find((p) => p.id === entry.phaseId);
  if (!phase) notFound();

  const prevEntry = entryIndex > 0 ? PHASES[entryIndex - 1] : null;
  const nextEntry = entryIndex < PHASES.length - 1 ? PHASES[entryIndex + 1] : null;
  const prevPhase = prevEntry ? roadmap.find((p) => p.id === prevEntry.phaseId) : null;
  const nextPhase = nextEntry ? roadmap.find((p) => p.id === nextEntry.phaseId) : null;

  const totalHours = phase.topics.length * 14; // 14 h/week per roadmap spec

  // JSON-LD Course schema — tells Google this is a structured educational course
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `Phase ${phase.number}: ${phase.title} | AI Engineer Roadmap`,
    description: `${phase.description} ${phase.weekRange}.`,
    provider: {
      '@type': 'Person',
      name: 'Aryav Chanduka',
      url: SITE_URL,
    },
    url: `${SITE_URL}/roadmap/${params.slug}`,
    isAccessibleForFree: true,
    educationalLevel: phase.number === 1 ? 'Beginner' : phase.number <= 3 ? 'Intermediate' : 'Advanced',
    inLanguage: 'en-US',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: `P${phase.topics.length}W`,
    },
    // Each week title becomes a "teaches" entry — search engines index these
    teaches: phase.topics.map((t) => t.title.replace(/^Week \d+[\s—–-]+/, '')),
  };

  // Phase color accent per phase number for visual variety
  const phaseColors: Record<number, string> = {
    1: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
    2: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
    3: 'text-brand-300 bg-brand-500/10 border-brand-500/30',
    4: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    5: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
  };
  const accentClass = phaseColors[phase.number] ?? phaseColors[3];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="mx-auto max-w-4xl px-4 py-10 lg:px-8">

        {/* ── Back link ──────────────────────────────────────────────── */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          The Complete AI Engineer Roadmap
        </Link>

        {/* ── Breadcrumb (also helps Google) ─────────────────────────── */}
        <nav aria-label="breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-zinc-600">
          <Link href="/" className="hover:text-zinc-400 transition-colors">Home</Link>
          <span>›</span>
          <Link href="/" className="hover:text-zinc-400 transition-colors">Roadmap</Link>
          <span>›</span>
          <span className="text-zinc-400">Phase {phase.number}</span>
        </nav>

        {/* ── Phase header ───────────────────────────────────────────── */}
        <header className="mb-12">
          <div
            className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${accentClass}`}
          >
            Phase {phase.number} of 5
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 lg:text-4xl">
            {phase.title}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
            {phase.description}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-brand-500" />
              {phase.weekRange}
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4 text-brand-500" />
              ~{totalHours} hours · {phase.topics.length} weeks
            </span>
          </div>

          {/* CTA */}
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-md bg-brand-500 px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-brand-400 transition"
            >
              <Rocket className="h-3.5 w-3.5" strokeWidth={2.5} />
              Track your progress — free
            </Link>
            <Link
              href="/#roadmap"
              className="inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 hover:border-zinc-700 transition"
            >
              Browse all 40 weeks
            </Link>
          </div>
        </header>

        {/* ── All phases navigation strip ────────────────────────────── */}
        <section aria-label="All phases" className="mb-12">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-600">
            All 5 Phases
          </h2>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-5">
            {PHASES.map((p, i) => {
              const ph = roadmap.find((r) => r.id === p.phaseId)!;
              const isCurrent = p.slug === params.slug;
              return (
                <Link
                  key={p.slug}
                  href={`/roadmap/${p.slug}`}
                  className={`rounded-lg border px-3 py-2.5 text-xs font-medium transition ${
                    isCurrent
                      ? 'border-brand-500/50 bg-brand-500/10 text-brand-300'
                      : 'border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                  }`}
                >
                  <span className="block text-[10px] text-zinc-600 mb-0.5">Phase {ph.number}</span>
                  {ph.title}
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── Week-by-week schedule ──────────────────────────────────── */}
        <section className="mb-12">
          <h2 className="mb-5 text-xl font-semibold text-zinc-100">
            Week-by-Week Schedule
          </h2>
          <div className="space-y-3">
            {phase.topics.map((topic) => {
              // Show first 4 daily tasks as a preview (strip "Mon — " prefix)
              const preview = topic.subtopics
                .slice(0, 4)
                .map((s) => s.title.replace(/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun|Day\s*\d+)\s*[—–-]+\s*/, ''))
                .join(' · ');

              return (
                <article
                  key={topic.id}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3.5"
                >
                  <h3 className="text-sm font-semibold text-zinc-100">{topic.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                    {preview}
                    {topic.subtopics.length > 4 ? ' · …' : ''}
                  </p>
                  <p className="mt-1.5 text-[10px] text-zinc-700">
                    {topic.subtopics.length} daily tasks
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* ── Key topics covered ────────────────────────────────────── */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-semibold text-zinc-100">Topics Covered</h2>
          <p className="mb-4 text-sm text-zinc-500">
            Every subtopic below is a separate daily task in the roadmap, with hand-picked
            resources (YouTube videos, docs, papers) for each.
          </p>
          <ul className="grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2 text-sm text-zinc-400">
            {phase.topics.flatMap((t) =>
              t.subtopics.map((s) => (
                <li key={s.id} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500/60" />
                  {s.title.replace(/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun|Day\s*\d+)\s*[—–-]+\s*/, '')}
                </li>
              ))
            )}
          </ul>
        </section>

        {/* ── Prev / Next navigation ─────────────────────────────────── */}
        <nav
          aria-label="Phase navigation"
          className="flex items-start justify-between border-t border-zinc-800 pt-8"
        >
          {prevEntry && prevPhase ? (
            <Link
              href={`/roadmap/${prevEntry.slug}`}
              className="group flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              <div>
                <div className="text-xs text-zinc-600">Previous</div>
                <div>
                  Phase {prevPhase.number}: {prevPhase.title}
                </div>
              </div>
            </Link>
          ) : (
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Full roadmap
            </Link>
          )}

          {nextEntry && nextPhase ? (
            <Link
              href={`/roadmap/${nextEntry.slug}`}
              className="group flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors text-right"
            >
              <div>
                <div className="text-xs text-zinc-600">Next</div>
                <div>
                  Phase {nextPhase.number}: {nextPhase.title}
                </div>
              </div>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ) : (
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              View full roadmap
              <ChevronRight className="h-4 w-4" />
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}

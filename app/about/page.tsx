import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Code2, GraduationCap } from 'lucide-react';

const SITE_URL = 'https://ai-roadmap--tracker.vercel.app';

export const metadata: Metadata = {
  title: 'About',
  description:
    'The AI Engineer Roadmap is a free 10-month curriculum built by Aryav Chanduka, a B.Tech CSE AI/ML student at Manipal University Jaipur, to structure his own path to becoming an AI Engineer.',
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: 'About · AI Engineer Roadmap',
    description:
      'Free 10-month AI Engineer curriculum built by Aryav Chanduka, B.Tech CSE AI/ML student at MUJ.',
    url: `${SITE_URL}/about`,
    siteName: 'AI Engineer Roadmap',
    type: 'profile',
  },
};

export default function AboutPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: `${SITE_URL}/about`,
    name: 'About — AI Engineer Roadmap',
    description:
      'Built by Aryav Chanduka, a B.Tech CSE AI/ML student at Manipal University Jaipur.',
    author: {
      '@type': 'Person',
      name: 'Aryav Chanduka',
      email: 'aryavchanduka18@gmail.com',
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Manipal University Jaipur',
      },
      knowsAbout: [
        'Machine Learning',
        'Deep Learning',
        'PyTorch',
        'Large Language Models',
        'Python',
        'AI Engineering',
      ],
    },
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="mx-auto max-w-2xl px-4 py-12 lg:px-8">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to roadmap
        </Link>

        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100">
            About this roadmap
          </h1>
          <p className="mt-3 text-base leading-relaxed text-zinc-400">
            A free, opinionated 10-month curriculum for becoming a job-ready AI Engineer — built in
            public by a CS student doing the same journey.
          </p>
        </header>

        <section className="mb-10 space-y-4">
          <h2 className="text-lg font-semibold text-zinc-100">Why I built this</h2>
          <p className="text-sm leading-relaxed text-zinc-400">
            I&apos;m <strong className="text-zinc-200">Aryav Chanduka</strong>, a third-year B.Tech
            CSE (AI/ML) student at Manipal University Jaipur. When I started planning how to go from
            &quot;knows Python&quot; to &quot;AI Engineer who can build and deploy real systems,&quot; I
            couldn&apos;t find a single curriculum that covered the full stack — math, classical ML,
            deep learning, transformers, RAG, fine-tuning, agents, MLOps, system design, and
            interview prep — in the right order, with the right resources.
          </p>
          <p className="text-sm leading-relaxed text-zinc-400">
            So I built one. 40 weeks. 5 phases. Day-by-day tasks with hand-picked resources (mostly
            Karpathy, fast.ai, Stanford CS229/CS224N, and the original papers). Then I built this
            tracker so I could check off tasks, see my streak, and stay accountable.
          </p>
          <p className="text-sm leading-relaxed text-zinc-400">
            It&apos;s free. It&apos;s open. If you&apos;re also trying to become an AI Engineer, use it.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-5 text-lg font-semibold text-zinc-100">The curriculum at a glance</h2>
          <div className="space-y-3">
            {[
              { icon: GraduationCap, label: 'Phase 1 — Weeks 1–8',   text: 'Math foundations: linear algebra, calculus, probability, Python ML toolchain, classical ML' },
              { icon: Code2,          label: 'Phase 2 — Weeks 9–16',  text: "Deep learning with PyTorch: neural nets from scratch, CNNs, NLP, transformers (Karpathy's GPT)" },
              { icon: BookOpen,       label: 'Phase 3 — Weeks 17–24', text: 'Applied LLM engineering: prompt engineering, RAG, LoRA fine-tuning, AI agents, production serving' },
              { icon: Code2,          label: 'Phase 4 — Weeks 25–32', text: 'ML system design and interview prep: DSA, coding patterns, ML breadth, system design cases' },
              { icon: GraduationCap, label: 'Phase 5 — Weeks 33–40', text: 'Specialization: computer vision, advanced NLP, internship/MS application prep, portfolio projects' },
            ].map(({ icon: Icon, label, text }) => (
              <div key={label} className="flex gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                <Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                <div>
                  <p className="text-xs font-semibold text-zinc-300">{label}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold text-zinc-100">Contact</h2>
          <p className="text-sm text-zinc-400">
            Questions, feedback, or corrections:{' '}
            <a
              href="mailto:aryavchanduka18@gmail.com"
              className="text-brand-400 hover:text-brand-300 transition-colors"
            >
              aryavchanduka18@gmail.com
            </a>
          </p>
        </section>

        <nav className="border-t border-zinc-800 pt-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-600">
            Explore the roadmap
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { href: '/',                                              label: 'Full roadmap' },
              { href: '/roadmap/phase-1-math-foundations',             label: 'Phase 1: Math' },
              { href: '/roadmap/phase-2-deep-learning-pytorch',        label: 'Phase 2: Deep Learning' },
              { href: '/roadmap/phase-3-applied-llm-engineering',      label: 'Phase 3: LLMs' },
              { href: '/roadmap/phase-4-ml-system-design-interview',   label: 'Phase 4: System Design' },
              { href: '/roadmap/phase-5-specialization',               label: 'Phase 5: Specialization' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-400 transition hover:border-zinc-700 hover:text-zinc-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}

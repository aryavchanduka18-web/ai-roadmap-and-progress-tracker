import type { MetadataRoute } from 'next';

const SITE_URL = 'https://ai-roadmap--tracker.vercel.app';

// Phase page slugs — must match generateStaticParams in app/roadmap/[slug]/page.tsx
const PHASE_SLUGS = [
  'phase-1-math-foundations',
  'phase-2-deep-learning-pytorch',
  'phase-3-applied-llm-engineering',
  'phase-4-ml-system-design-interview',
  'phase-5-specialization',
];

const PHASE_UPDATED = '2026-06-17';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: PHASE_UPDATED,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    ...PHASE_SLUGS.map((slug) => ({
      url: `${SITE_URL}/roadmap/${slug}`,
      lastModified: PHASE_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}

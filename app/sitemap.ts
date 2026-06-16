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

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: '2026-06-09',
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...PHASE_SLUGS.map((slug) => ({
      url: `${SITE_URL}/roadmap/${slug}`,
      lastModified: '2026-06-09',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}

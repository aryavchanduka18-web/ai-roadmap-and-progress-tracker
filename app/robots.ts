import type { MetadataRoute } from 'next';

const SITE_URL = 'https://ai-roadmap--tracker.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all normal search engine crawlers (Google, Bing, DuckDuckGo, etc.)
      {
        userAgent: '*',
        allow: '/',
      },
      // Block AI training scrapers — they consume bandwidth without contributing
      // to organic search traffic. Add/remove bots from this list as needed.
      {
        userAgent: ['GPTBot', 'CCBot', 'anthropic-ai', 'Claude-Web', 'Bytespider'],
        disallow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

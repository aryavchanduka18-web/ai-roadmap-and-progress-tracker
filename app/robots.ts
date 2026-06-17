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
      // Block mass-scraping bots with no search/citation benefit.
      // GPTBot (ChatGPT), anthropic-ai (Claude), OAI-SearchBot are intentionally
      // allowed so the site appears in AI-powered search — critical for a site
      // targeting AI engineers who use these tools daily.
      {
        userAgent: ['CCBot', 'Bytespider'],
        disallow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

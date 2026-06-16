import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import './globals.css';

// Load Inter via next/font so it is served from Vercel's CDN instead of an
// external rsms.me request. This shaves ~300 ms off LCP (no extra DNS + TCP
// round-trip) and eliminates the render-blocking external stylesheet.
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const SITE_URL = 'https://ai-roadmap--tracker.vercel.app';
// "Free 10-Month" in the title directly matches the queries people type —
// "free AI engineer roadmap" and "10 month AI learning path".
const SITE_TITLE = 'AI Engineer Roadmap — Free 10-Month Learning Path';
const SITE_DESCRIPTION =
  'Free 10-month AI Engineer roadmap with 40 weeks of daily tasks: math foundations, classical ML, PyTorch, transformers from scratch, RAG, fine-tuning, agents, ML system design and interview prep. Track your progress, streak, and analytics privately.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s · AI Engineer Roadmap',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'AI Engineer roadmap',
    'ML Engineer roadmap',
    'AI learning path',
    'deep learning roadmap',
    'transformers from scratch',
    'RAG tutorial',
    'fine-tuning LoRA',
    'AI/ML interview prep',
    'Karpathy zero to hero',
    'MAANG AI engineer',
  ],
  authors: [{ name: 'Aryav Chanduka' }],
  creator: 'Aryav Chanduka',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'AI Engineer Roadmap',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: '#f97316',
          colorBackground: '#09090b',
          colorInputBackground: '#18181b',
          colorInputText: '#fafafa',
          colorText: '#fafafa',
          colorTextSecondary: '#a1a1aa',
          colorNeutral: '#fafafa',
          borderRadius: '0.5rem',
          fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
        },
        elements: {
          card: 'bg-zinc-900 border border-zinc-800 shadow-2xl',
          headerTitle: 'text-zinc-100',
          headerSubtitle: 'text-zinc-400',
          socialButtonsBlockButton:
            'border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-100',
          formButtonPrimary:
            'bg-brand-500 hover:bg-brand-400 text-zinc-950 font-medium',
          footerActionLink: 'text-brand-400 hover:text-brand-300',
          formFieldInput:
            'bg-zinc-950 border-zinc-800 text-zinc-100 focus:border-brand-500',
          dividerLine: 'bg-zinc-800',
          dividerText: 'text-zinc-500',
          identityPreviewEditButton: 'text-brand-400',
          formFieldLabel: 'text-zinc-300',
        },
      }}
    >
      {/* inter.variable injects --font-inter CSS variable used by tailwind.config.ts */}
      <html lang="en" className={`dark scroll-smooth ${inter.variable}`}>
        <head />
        <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased font-sans">
          <script
            type="application/ld+json"
            // JSON-LD structured data — tells Google this site is an
            // educational learning resource. Improves rich-result eligibility.
            dangerouslySetInnerHTML={{
              __html: JSON.stringify([
                {
                  '@context': 'https://schema.org',
                  '@type': 'WebSite',
                  url: SITE_URL,
                  name: 'AI Engineer Roadmap',
                  description: SITE_DESCRIPTION,
                  inLanguage: 'en-US',
                },
                {
                  '@context': 'https://schema.org',
                  '@type': 'LearningResource',
                  name: 'The Complete AI Engineer Roadmap',
                  description: SITE_DESCRIPTION,
                  url: SITE_URL,
                  learningResourceType: 'Roadmap',
                  educationalLevel: 'Beginner to Advanced',
                  inLanguage: 'en-US',
                  isAccessibleForFree: true,
                  timeRequired: 'P10M',
                  teaches: [
                    'Linear algebra for machine learning',
                    'Calculus and probability for ML',
                    'Python ML toolchain (NumPy, Pandas, scikit-learn)',
                    'Classical machine learning',
                    'Deep learning fundamentals',
                    'PyTorch',
                    'Computer vision and CNNs',
                    'Natural language processing',
                    'Transformer architecture',
                    'Large language models (LLMs)',
                    'Retrieval-augmented generation (RAG)',
                    'Fine-tuning with LoRA and QLoRA',
                    'AI agents and tool use',
                    'MLOps and production LLM serving',
                    'ML system design',
                    'Coding interview preparation (DSA)',
                  ],
                  creator: {
                    '@type': 'Person',
                    name: 'Aryav Chanduka',
                  },
                  provider: {
                    '@type': 'Person',
                    name: 'Aryav Chanduka',
                  },
                  audience: {
                    '@type': 'EducationalAudience',
                    educationalRole: 'student',
                  },
                },
                // Person schema — establishes Aryav as a real author (E-E-A-T signal)
                {
                  '@context': 'https://schema.org',
                  '@type': 'Person',
                  name: 'Aryav Chanduka',
                  url: SITE_URL,
                  description: 'B.Tech CSE AI/ML student building AI learning tools',
                  knowsAbout: [
                    'Machine Learning',
                    'Deep Learning',
                    'Artificial Intelligence',
                    'Python',
                    'PyTorch',
                  ],
                },
                // SoftwareApplication schema — tells Google this is a free web app
                {
                  '@context': 'https://schema.org',
                  '@type': 'SoftwareApplication',
                  name: 'AI Engineer Roadmap Progress Tracker',
                  applicationCategory: 'EducationApplication',
                  operatingSystem: 'Web',
                  offers: {
                    '@type': 'Offer',
                    price: '0',
                    priceCurrency: 'USD',
                  },
                  url: SITE_URL,
                  description:
                    'Track your progress through a free 10-month AI Engineer roadmap with 40 weeks of daily tasks.',
                },
              ]),
            }}
          />
          {children}

          {/* ── Google Analytics 4 (G-7CERB9ZTHC) ───────────────────────────
              strategy="afterInteractive" means these scripts load AFTER the
              page is interactive — they never block rendering or hurt LCP.   */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-7CERB9ZTHC"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7CERB9ZTHC');
            `}
          </Script>
        </body>
      </html>
    </ClerkProvider>
  );
}

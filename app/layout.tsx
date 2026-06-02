import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import './globals.css';

const SITE_URL = 'https://ai-roadmap--tracker.vercel.app';
const SITE_TITLE = 'AI Engineer Roadmap · Progress Tracker';
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
      <html lang="en" className="dark scroll-smooth">
        <head>
          <link rel="preconnect" href="https://rsms.me/" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </head>
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
              ]),
            }}
          />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

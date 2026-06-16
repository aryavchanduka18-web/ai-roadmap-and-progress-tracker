# AI Roadmap & Progress Tracker

A self-hosted, single-page dashboard for tracking a 10-month / 40-week AI Engineer learning roadmap. Built as a daily learning OS — sign in, click checkboxes, watch the streak grow.

**Live:** **[https://ai-roadmap--tracker.vercel.app](https://ai-roadmap--tracker.vercel.app)**

![License](https://img.shields.io/badge/license-MIT-blue) ![Next.js](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6) ![Tailwind](https://img.shields.io/badge/Tailwind-3-38bdf8) ![Clerk](https://img.shields.io/badge/Auth-Clerk-6c47ff) ![Vercel](https://img.shields.io/badge/Deployed-Vercel-000)

---

## Why this project exists

I'm a second-year CSE student following a 40-week, day-by-day plan to become a job-ready AI Engineer (math foundations → classical ML → PyTorch → transformers → RAG → fine-tuning → agents → ML system design → interview prep). Existing trackers were either generic todo lists or paid courseware. So I built one that:

1. Bakes the 40-week roadmap directly into the code as typed data — no setup required.
2. Tracks per-subtopic status with a 3-state cycling checkbox (`not-started → in-progress → completed`).
3. Computes streak, weekly progress, and per-phase analytics in real time.
4. Stores all progress in the browser — no backend database to host or pay for.
5. Has authentication so each user's progress stays separate, but is otherwise fully public-readable.

If you want a personal learning dashboard you can fork and adapt to *your* roadmap (DSA, design, whatever), this is a clean starting point.

---

## Features

- **40-week roadmap** as typed data — 5 phases · 40 week-topics · ~276 daily subtopics, each with hours, priority, and resource links to YouTube / docs / arXiv / Coursera.
- **3-state checkbox** with Framer Motion micro-animations cycling not-started → in-progress → completed → empty.
- **Streak system** — increments on first daily completion, resets on inactive day, tracks longest separately.
- **Weekly progress panel** with circular ring (Recharts) and per-week subtopic list.
- **Analytics** — line chart (daily completions, last 30 days) + bar chart (per-phase completion %).
- **Search + status filter + view toggle** (Roadmap / Week View).
- **Public landing + auth-gated tracking** — anyone can browse the roadmap; signing in unlocks progress tracking.
- **Sidebar with ChatGPT-style profile pill** — collapses to a single avatar, expands to name + dropdown.
- **Export / Reset / Quick Actions** — download progress as JSON, mark whole weeks complete, reset everything with confirmation.
- **Polished SEO** — auto-generated Open Graph image, JSON-LD schema, sitemap, robots.txt, rich metadata.
- **Hardened headers** — `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `Strict-Transport-Security`.

---

## Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 14 (App Router) | RSC, file-based routing, edge-friendly |
| Language | TypeScript (strict, no `any`) | Catch bugs at compile time |
| Styling | Tailwind CSS | Utility-first, no custom CSS |
| Animation | Framer Motion | Spring physics, AnimatePresence |
| State | Zustand + `persist` | Tiny, fast, no Context drilling |
| Persistence | Browser `localStorage` | No backend; each user owns their data |
| Charts | Recharts | Dark-theme friendly, accessible |
| Icons | lucide-react | SVG, themable, no emoji |
| Auth | Clerk | Email/password + signup/logout, no DB |
| Hosting | Vercel (Hobby tier) | Free, edge-deployed |

Everything is free-tier — Vercel Hobby + Clerk free (10k MAU). No paid APIs.

---

## Quick start

### Prerequisites

- Node.js 18+ or 20 LTS
- A free [Clerk](https://clerk.com) account (takes 1 minute)

### Setup

```bash
git clone https://github.com/aryavchanduka18-web/ai-roadmap-and-progress-tracker.git
cd ai-roadmap-and-progress-tracker
npm install
```

Copy the env template and fill it with your own Clerk keys:

```bash
cp .env.example .env.local
```

Edit `.env.local` and replace the placeholder values with your real keys from [https://dashboard.clerk.com](https://dashboard.clerk.com) → your app → API Keys.

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

Run locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Deploy to Vercel

```bash
npm install -g vercel
vercel login
vercel
```

Add the two Clerk env vars in the Vercel dashboard (Settings → Environments → Production & Preview), then `vercel --prod`.

---

## Project structure

```
app/
  layout.tsx              Root layout + ClerkProvider + JSON-LD
  page.tsx                Single dashboard page (auth-aware)
  globals.css             Tailwind layers + Recharts dark tweaks
  robots.ts               Generates /robots.txt
  sitemap.ts              Generates /sitemap.xml
  opengraph-image.tsx     Generates /opengraph-image (1200×630 PNG)
components/
  Sidebar.tsx             Collapsible sidebar + mobile drawer
  TopHeader.tsx           Sticky header (search, filter, view toggle)
  StatsCards.tsx          5 animated stat cards
  RoadmapSection.tsx      Phase list with empty states
  PhaseCard.tsx           Expandable phase row (memoized)
  TopicGroup.tsx          Week-as-topic block
  SubtopicRow.tsx         3-state checkbox row (memoized)
  AnalyticsSection.tsx    Line + bar charts + 4 tiles
  RightPanel.tsx          Sticky weekly panel
  WeeklyProgressCard.tsx  Circular ring + week's tasks
  UpcomingTopicsCard.tsx  Next 5 incomplete
  QuickActionsCard.tsx    Complete/Clear/Export/Reset
  StreakWidget.tsx        Streak + 7-day bars + rotating quote
  CircularProgress.tsx    Reusable SVG ring with gradient
  ResetModal.tsx          Destructive confirmation dialog
  AuthModal.tsx           Sign-in/sign-up popup
  ProfilePill.tsx         ChatGPT-style profile pill
  ui/
    Button.tsx            5 variants × 2 sizes
    Checkbox.tsx          3-state cycling (Framer Motion)
    ProgressBar.tsx       Animated horizontal bar
    Badge.tsx             Priority / Status / Hours pills
    Tooltip.tsx           Hover/focus tooltip
lib/
  roadmap-data.ts         40-week roadmap (typed data)
  types.ts                Shared TypeScript types
  store.ts                Zustand store + persist middleware
  selectors.ts            Pure summarizers
  utils.ts                cn(), date helpers, downloadJson()
middleware.ts             Clerk middleware (pass-through)
next.config.js            Next.js config + security headers
tailwind.config.ts        Brand colors (orange-500), Inter font
tsconfig.json             Strict mode, paths: "@/*"
vercel.json               Framework declaration
PRIVACY.md                Privacy policy
LICENSE                   MIT
```

---

## Customizing the roadmap

The entire 40-week roadmap lives in [`lib/roadmap-data.ts`](./lib/roadmap-data.ts). Edit that file to add, remove, or change phases / weeks / subtopics. Each subtopic has:

```ts
{
  id: 'w17-thu',                       // stable kebab-case key (used in localStorage)
  title: 'Thu — Structured output: JSON mode, function calling',
  hours: 1.5,
  priority: 'must-know',               // 'must-know' | 'nice-to-have' | 'skip' | 'revisit'
  weekNumber: 17,                      // 1..40
  resources: [
    { type: 'doc', label: '…', url: 'https://…' }
  ]
}
```

Keep the `id` strings stable across edits — they're the keys in `localStorage`, so changing them resets that subtopic's status for existing users.

---

## Data + privacy

Per-user progress is stored entirely in **browser `localStorage`** under the key `ai-roadmap-tracker-v1`. No backend database. Each user's progress stays on their device.

Authentication (email + password) is handled by [Clerk](https://clerk.com); we never see or store your password.

Full details in [PRIVACY.md](./PRIVACY.md).

---

## Scripts

```bash
npm run dev         # local dev (http://localhost:3000)
npm run build       # production build
npm run start       # serve the production build
npm run typecheck   # strict TypeScript check
npm run lint        # next lint
vercel              # preview deploy
vercel --prod       # production deploy
```

---

## Roadmap source

The 40-week curriculum included as data is a personal, curated AI Engineer learning path inspired by:

- Andrej Karpathy's [Neural Networks: Zero to Hero](https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ)
- Andrew Ng's [Machine Learning Specialization](https://www.coursera.org/specializations/machine-learning-introduction) + [Deep Learning Specialization](https://www.coursera.org/specializations/deep-learning)
- Stanford [CS231n](https://cs231n.stanford.edu/) (CNNs) and [CS224n](https://web.stanford.edu/class/cs224n/) (NLP)
- HuggingFace [NLP Course](https://huggingface.co/learn/nlp-course)
- StatQuest with Josh Starmer
- Sebastian Raschka's [Magazine](https://magazine.sebastianraschka.com/)
- Aminian & Xu's *Machine Learning System Design Interview*

Credit and links are baked into individual subtopic resources in `lib/roadmap-data.ts`.

---

## License

[MIT](./LICENSE) — feel free to fork, copy, learn from, and adapt for your own roadmap.

---

## Maintainer

Built by [Aryav Chanduka](https://github.com/aryavchanduka18-web). Questions / feedback / bug reports welcome via GitHub Issues.

# Privacy Policy

**Last updated:** June 2, 2026
**Site:** https://ai-roadmap--tracker.vercel.app
**Maintained by:** Aryav Chanduka — aryavchanduka18@gmail.com

This is a personal, free dashboard. We collect as little as possible, and you can delete your account and progress yourself.

## What we collect

**If you create an account:** Sign-in is handled by [Clerk](https://clerk.com). Clerk stores your email address, a hashed password (we never see it), and standard authentication metadata (last sign-in IP, user agent) on their servers. Clerk's data handling is governed by their own [privacy policy](https://clerk.com/legal/privacy).

**Your roadmap progress** (which subtopics you've checked off, streak count, daily completion history, and roadmap start date) is stored under your Clerk user ID in an Upstash Redis database so it follows your account across browsers and devices. A local browser copy is retained under the key `ai-roadmap-tracker-v1` as an offline fallback.

**We do not collect:** analytics, tracking cookies, ad identifiers, device fingerprints, or anything else.

## What we do with it

Email + password is used solely to let you sign in. Your account-scoped progress is read and written by the dashboard to render checkboxes, charts, and the streak widget across your devices.

## Where data lives

- **Authentication data** (email, hashed password, session): on Clerk's infrastructure (AWS, regions per [Clerk's docs](https://clerk.com/docs)).
- **Site hosting**: Vercel's global edge network.
- **Your progress data**: Upstash Redis, keyed by your Clerk user ID, plus a browser `localStorage` fallback.

## Your rights

You can delete your account at any time:

1. **From the app**: profile menu (bottom-left of the sidebar) → *Account settings* → *Delete account*. This removes your Clerk account permanently.
2. **Progress data**: use the *Reset Progress* button in the dashboard's Quick Actions card. This clears the synced progress snapshot. You may also clear your browser's site data for this domain via DevTools → Application → Storage → Clear site data.
3. **By email**: write to aryavchanduka18@gmail.com with the email address you used to sign up and ask for deletion. Reply guaranteed within 30 days.

## Third parties

The only data processors involved are:

| Processor | Purpose | Privacy link |
|---|---|---|
| Clerk | Authentication (email, password, sessions) | https://clerk.com/legal/privacy |
| Vercel | Hosting, edge functions, CDN | https://vercel.com/legal/privacy-policy |
| Upstash | Account-scoped roadmap progress storage | https://upstash.com/trust/privacy.pdf |

Google Search Console verification is set up so the site can be indexed by Google — Google receives nothing beyond what its crawler reads from public pages.

## Children

This site is not directed at children under 13. Please do not create an account if you are under 13.

## Changes

If this policy changes materially, the "Last updated" date at the top will be updated. Material changes will also be announced in the GitHub repository's commit history.

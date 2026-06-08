import { clerkMiddleware } from '@clerk/nextjs/server';

// Pass-through Clerk proxy so server-side hooks (auth(), currentUser())
// are available throughout the app. Page-level <SignedIn>/<SignedOut> gates
// the dashboard inline, which avoids the need for separate /sign-in and
// /sign-up route segments.
export default clerkMiddleware(() => {}, {
  contentSecurityPolicy: {
    directives: {
      'font-src': ['https://rsms.me'],
      'style-src': ['https://rsms.me'],
    },
  },
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
    '/__clerk/(.*)',
  ],
};

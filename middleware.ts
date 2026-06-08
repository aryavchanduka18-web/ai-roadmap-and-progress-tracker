import { clerkMiddleware } from '@clerk/nextjs/server';

// Pass-through Clerk middleware so server-side hooks (auth(), currentUser())
// are available throughout the app. Page-level <SignedIn>/<SignedOut> gates
// the dashboard inline, which avoids the need for separate /sign-in and
// /sign-up route segments.
export default clerkMiddleware();

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};

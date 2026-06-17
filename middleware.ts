import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Only API routes require auth. All content pages are public — auth is
// handled client-side via ClerkProvider + useUser(). Explicit public-route
// configuration prevents Clerk from redirecting unauthenticated requests
// (including Googlebot) to a sign-in page, which caused the recurring
// "Page fetch: Failed: Redirect error" in Google Search Console.
const isProtectedRoute = createRouteMatcher(['/api/(.*)', '/trpc/(.*)']);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};

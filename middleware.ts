import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/auth(.*)",
  "/(.*)",
  "/events(.*)",
  "/resources(.*)",
  "/projects(.*)",
  "/privacy(.*)",
]);

const isOnboardingRoute = createRouteMatcher(["/onboarding"]);

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware((auth, request) => {
  const { userId, sessionClaims, redirectToSignIn } = auth();

  // For users not logged in and trying to accessing onboarding, redirect to sign-in
  if (!userId && isOnboardingRoute(request)) {
    return NextResponse.redirect(new URL("/auth/sign-in", request.url));
  }

  // For users not logged in and trying to access admin routes, redirect to sign-in
  if (!userId && isAdminRoute(request)) {
    return NextResponse.redirect(new URL("/auth/sign-in", request.url));
  }

  // For non-admin users visiting /admin, redirect back to home
  if (
    userId &&
    sessionClaims.metadata.role !== "ADMIN" &&
    isAdminRoute(request)
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // For users visiting /onboarding, don't try to redirect
  if (userId && isOnboardingRoute(request)) {
    return NextResponse.next();
  }

  // If the user isn't signed in and the route is private, redirect to sign-in
  if (!userId && !isPublicRoute(request))
    return redirectToSignIn({ returnBackUrl: request.url });

  // Catch users who do not have `onboardingComplete: true` in their publicMetadata
  // Redirect them to the /onboading route to complete onboarding
  if (userId && !sessionClaims?.metadata?.onboardingComplete) {
    const onboardingUrl = new URL("/onboarding", request.url);
    return NextResponse.redirect(onboardingUrl);
  }

  // If the user is logged in and the route is protected, let them view.
  if (userId && !isPublicRoute(request)) return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

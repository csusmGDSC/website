export {};

// Server-side user roles extracted from the user object for use
declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      onboardingComplete?: boolean;
      role?: "USER" | "ADMIN";
    };
  }
}

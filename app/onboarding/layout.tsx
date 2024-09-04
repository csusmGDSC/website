import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

/**
 * A layout component that conditionally redirects to the root page if the user's onboarding is complete.
 *
 * @param {React.ReactNode} children - The child components to be rendered within the layout.
 * @return {JSX.Element} The rendered layout or a redirect to the root page
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (auth().sessionClaims?.metadata.onboardingComplete === true) {
    redirect("/");
  }

  return <>{children}</>;
}

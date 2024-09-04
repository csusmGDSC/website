import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/main/header";
import Footer from "@/components/main/footer";
import { cn } from "@/lib/utils";

import { ClerkProvider } from "@clerk/nextjs";
import GDSCTeamContextProvider from "@/context/gdsc-team-context";
import GDSCEventsContextProvider from "@/context/gdsc-events-context";
import { Toaster } from "@/components/ui/sonner";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Google Developer Student Club @ CSUSM",
  description:
    "Google Developer Student Club at California State University, San Marcos. Visit upcoming events, project developments, and interview preperation sessions.",
};

/**
 * A root layout component that wraps the entire application.
 *
 * @param {Readonly<{ children: React.ReactNode }>} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to be rendered.
 * @return {JSX.Element} The root layout element.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#4285F4",
        },
      }}
    >
      <GDSCTeamContextProvider>
        <GDSCEventsContextProvider>
          <html lang="en">
            <body
              className={cn(
                "min-h-screen bg-background font-sans antialiased overflow-x-hidden",
                fontSans.variable
              )}
            >
              <div className="h-full justify-between flex flex-col">
                <div>
                  <Header />
                  {children}
                  <Toaster />
                </div>

                <Footer />
              </div>
            </body>
          </html>
        </GDSCEventsContextProvider>
      </GDSCTeamContextProvider>
    </ClerkProvider>
  );
}

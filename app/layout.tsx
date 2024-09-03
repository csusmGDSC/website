import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/main/header";
import Footer from "@/components/main/footer";
import { cn } from "@/lib/utils";

import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";
import GDSCTeamContextProvider from "@/context/gdsc-team-context";
import GDSCEventsContextProvider from "@/context/gdsc-events-context";

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
              <ThemeProvider
                defaultTheme="system"
                attribute="class"
                enableSystem
              >
                <Header />
                {children}
                <Footer />
              </ThemeProvider>
            </body>
          </html>
        </GDSCEventsContextProvider>
      </GDSCTeamContextProvider>
    </ClerkProvider>
  );
}

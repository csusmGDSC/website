import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { AppSidebar } from "@/components/app-sidebar";
import Container from "@/components/ui/container";
import { SidebarLayout, SidebarTrigger } from "@/components/ui/sidebar";

/**
 * A layout component that wraps the admin's main content.
 * It checks for admin role and redirects to the root page if not authorized.
 * It also handles the sidebar's state using cookies.
 *
 * @param {React.ReactNode} children - The main content of the application
 * @return {JSX.Element} The layout component with the main content and sidebar
 */
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (auth().sessionClaims?.metadata.role !== "ADMIN") {
    redirect("/");
  }
  const { cookies } = await import("next/headers");
  return (
    <Container>
      <SidebarLayout
        defaultOpen={cookies().get("sidebar:state")?.value === "true"}
      >
        <AppSidebar />
        <main className="flex flex-1 flex-col p-2 transition-all duration-300 ease-in-out bg-background xl:[[data-sidebar=open]_&]:pr-[--sidebar-width]">
          <div className="relative h-full rounded-md p-2">
            <SidebarTrigger className="absolute top-0 left-0" />
            <>{children}</>
          </div>
        </main>
      </SidebarLayout>
    </Container>
  );
}

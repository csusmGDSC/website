import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ROLE CAN ONLY BE CHANGED INSIDE CLERK ADMIN, CONTACT MAINTAINER FOR MORE INFO
  if (auth().sessionClaims?.metadata.role !== "ADMIN") {
    redirect("/");
  }

  return <>{children}</>;
}

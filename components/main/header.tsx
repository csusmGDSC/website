"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth, useClerk } from "@clerk/nextjs";
import UserButton from "./user-button";

// TO-DO: Keep links in different place
const links = [
  {
    name: "Home",
    ref: "/",
  },
  {
    name: "Events",
    ref: "/events",
  },
  {
    name: "Projects",
    ref: "/projects",
  },
  {
    name: "Interview",
    ref: "/interview",
  },
  {
    name: "Resources",
    ref: "/resources",
  },
  // {
  //   name: "Admin",
  //   ref: "/admin",
  // },
] as const;

const Header = () => {
  const pathname = usePathname();
  const clerk = useClerk();
  const auth = useAuth();

  return (
    <header className="w-full h-[4.5rem] border-b border-b-border items-center flex flex-col fixed top-0 z-[999] bg-background">
      <div className="h-full flex flex-row justify-between items-center custom-max-width">
        {/* GDSC logo, Click on it should bring back to root page*/}
        <Link href="/">
          <Image
            src="/images/gdsc/gdsc-csusm title light.png"
            alt="navbar-logo"
            className="hidden md:block w-auto h-auto"
            width="355"
            height="24"
          />
        </Link>

        {/* Navigation links */}
        <nav className="m-auto md:m-0 md:ml-auto h-full flex items-center gap-6">
          <ul className="flex flex-row space-x-6 h-full">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  className={cn(
                    "text-foreground/70 h-full flex items-center border-b-4 text-sm hover:cursor-pointer hover:text-foreground transition",
                    pathname === link.ref ? "border-blue" : "border-background"
                  )}
                  href={link.ref}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          {auth.isSignedIn ? (
            <UserButton />
          ) : (
            <p
              onClick={() => clerk.openSignIn()}
              className="text-foreground/70 h-full flex items-center border-b-4 border-background text-sm hover:cursor-pointer hover:text-foreground transition"
            >
              Sign In
            </p>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
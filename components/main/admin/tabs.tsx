"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

const adminLinks = [
  {
    name: "Overview",
    ref: "/admin",
  },
  {
    name: "Events",
    ref: "/admin/events",
  },
  {
    name: "Projects",
    ref: "/admin/projects",
  },
  {
    name: "Members",
    ref: "/admin/members",
  },
  {
    name: "Resources",
    ref: "/admin/resources",
  },
];

const Tabs = () => {
  const pathname = usePathname();

  return (
    <div className="h-14 mt-24 -mb-20 w-full flex flex-col items-center">
      <span className="h-full custom-max-width flex justify-center sm:justify-start">
        <nav className="flex items-center h-full px-6 border border-border rounded-md w-fit">
          <ul className="flex gap-8 h-full">
            {adminLinks.map((link, index) => (
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
        </nav>
      </span>
    </div>
  );
};

export default Tabs;

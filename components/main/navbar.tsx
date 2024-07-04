"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

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
  {
    name: "Admin",
    ref: "/admin",
  },
  // TO-DO: Add user authentication to log in
  // {
  //   name: "Log in",
  //   ref: "#",
  // },
] as const;

const Navbar = () => {
  const [currentLink, setCurrentLink] = useState<string>("Home");

  return (
    <nav className="w-full h-[4.5rem] border-b border-b-neutral-200 items-center flex flex-col fixed top-0 z-[999] bg-white">
      <div className="h-full flex flex-row justify-between items-center custom-max-width">
        {/* GDSC logo, Click on it should bring back to root page*/}
        <Link href="/" onClick={() => setCurrentLink("Home")}>
          <Image
            src="/images/gdsc/gdsc-csusm title light.png"
            alt="navbar-logo"
            className="hidden md:block"
            width="355"
            height="24"
          />
        </Link>

        {/* Navigation links */}
        <div className="m-auto md:m-0 md:ml-auto h-full">
          <ul className="flex flex-row space-x-6 h-full">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  className={cn(
                    "text-neutral-600 h-full flex items-center border-b-4 text-sm hover:cursor-pointer hover:text-black transition",
                    currentLink === link.name ? "border-blue" : "border-white"
                  )}
                  // When a link is clicked, change active link
                  // Note: Does not reset on new page, since the navbar is the globally used across all pages
                  onClick={() => setCurrentLink(link.name)}
                  href={link.ref}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

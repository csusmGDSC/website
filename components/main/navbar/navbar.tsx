"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./navbar.module.css";
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
  // TO-DO: Add user authentication to log in
  // {
  //   name: "Log in",
  //   ref: "#",
  // },
] as const;

const Navbar = () => {
  const [currentLink, setCurrentLink] = useState<string>("Home");

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* GDSC logo, Click on it should bring back to root page*/}
        <Link href="/" onClick={() => setCurrentLink("Home")}>
          <Image
            src="/images/gdsc/gdsc-csusm title light.png"
            alt="navbar-logo"
            className={styles.logo}
            width="355"
            height="24"
          />
        </Link>

        {/* Navigation links */}
        <div className={styles.navLinksContainer}>
          <ul className={styles.navLinks}>
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  className={cn(
                    styles.navLink,
                    currentLink === link.name
                      ? styles.activeLink
                      : styles.inactiveLink
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

"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./navbar.module.css";

// TO-DO: Keep links in different place
const links = ["Home", "Events", "Projects", "Resources", "Log in"];

const Navbar = () => {
  const [currentLink, setCurrentLink] = useState<string>("Home");

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* GDSC logo */}
        <Image
          src="/images/gdsc/gdsc-csusm title light.png"
          alt="navbar-logo"
          className={styles.logo}
          width="355"
          height="24"
        />

        {/* Navigation links */}
        <div className={styles.navLinksContainer}>
          <ul className={styles.navLinks}>
            {links.map((link, index) => (
              <li key={index}>
                <div
                  className={cn(
                    styles.navLink,
                    currentLink === link
                      ? styles.activeLink
                      : styles.inactiveLink
                  )}
                  // When a link is clicked, change active link
                  // Note: Does not reset on new page, since the navbar is global
                  onClick={() => setCurrentLink(link)}
                >
                  {link}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

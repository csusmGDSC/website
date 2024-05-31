"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./Navbar.module.css";

const links = ["Home", "Events", "Projects", "Resources", "Log in"];

const Navbar = () => {
  const [currentLink, setCurrentLink] = useState<string>("Home");

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <Image
          src="/images/gdsc/gdsc-csusm title light.png"
          alt="navbar-logo"
          className={styles.logo}
          width="355"
          height="24"
        />

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
                  onClick={() => setCurrentLink(link)}
                >
                  {link}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

const links = ["Home", "Events", "Projects", "Resources", "Log in"];

const Navbar = () => {
  const [currentLink, setCurrentLink] = useState<string>("Home");

  return (
    <header className="w-full h-[4.5rem] border-b border-b-neutral-200 items-center flex flex-col">
      <div className="h-full md:max-w-[90%] xl:max-w-[60%] w-full flex flex-row justify-between items-center">
        <Image
          src="/images/gdsc/gdsc-csusm title light.png"
          alt="navbar-logo"
          className="hidden md:block"
          width="355"
          height="24"
        />

        <div className="m-auto md:m-0 md:ml-auto h-full">
          <ul className="flex flex-row space-x-6 h-full">
            {links.map((link, index) => (
              <li key={index}>
                <div
                  className={cn(
                    "text-neutral-600 h-full flex items-center border-b-4 text-sm hover:cursor-pointer hover:text-black transition",
                    currentLink === link ? "border-blue" : "border-white"
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

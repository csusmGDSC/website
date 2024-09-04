"use client";

import * as React from "react";
import { ChevronsUpDown, Plus } from "lucide-react";
import Image from "next/image";

/**
 * Renders a component representing a team.
 *
 * @return {JSX.Element} The rendered team component.
 */
export function Team() {
  return (
    <div className="w-full rounded-md">
      <div className="flex items-center gap-1.5 overflow-hidden px-2 py-1.5 text-left text-sm transition-all">
        <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-primary text-primary-foreground">
          <Image
            src="/images/gdsc/gdsc-1.png"
            width={20}
            height={20}
            alt="gdsc-logo"
          ></Image>
        </div>
        <div className="line-clamp-1 flex-1 pr-2 font-medium">GDSC</div>
      </div>
    </div>
  );
}

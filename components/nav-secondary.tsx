"use client";

import Link from "next/link";
import { type LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

import { cn } from "@/lib/utils";

/**
 * A secondary navigation component that renders a list of items with icons and links.
 *
 * @param {object} className - Additional class names to apply to the navigation component.
 * @param {object[]} items - An array of navigation items, each containing a title, URL, and icon.
 * @return {JSX.Element|null} The rendered navigation component, or null if no items are provided.
 */
export function NavSecondary({
  className,
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon | IconType;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
} & React.ComponentProps<"ul">) {
  if (!items?.length) {
    return null;
  }

  return (
    <ul className={cn("grid gap-0.5", className)}>
      {items.map((item) => (
        <li key={item.title}>
          <Link
            href={item.url}
            className="flex h-7 items-center gap-2.5 overflow-hidden rounded-md px-1.5 text-xs ring-ring transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2"
          >
            <item.icon className="h-4 w-4 shrink-0 translate-x-0.5 text-muted-foreground" />
            <div className="line-clamp-1 grow overflow-hidden pr-6 font-medium text-muted-foreground">
              {item.title}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

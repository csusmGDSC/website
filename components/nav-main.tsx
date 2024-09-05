"use client";

import Link from "next/link";
import { ChevronRight, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

/**
 * A navigation component that renders a list of items with collapsible sub-items.
 *
 * @param {object} props - The component props.
 * @param {string} props.className - The CSS class name to apply to the component.
 * @param {object[]} props.items - The list of navigation items.
 * @param {string} props.items[].title - The title of the navigation item.
 * @param {string} props.items[].url - The URL of the navigation item.
 * @param {LucideIcon} props.items[].icon - The icon of the navigation item.
 * @param {boolean} [props.items[].isActive] - Whether the navigation item is active.
 * @param {object[]} [props.items[].items] - The list of sub-items.
 * @param {string} props.items[].items[].title - The title of the sub-item.
 * @param {string} props.items[].items[].url - The URL of the sub-item.
 * @return {JSX.Element} The rendered navigation component.
 */
export function NavMain({
  className,
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
} & React.ComponentProps<"ul">) {
  return (
    <ul className={cn("grid gap-0.5", className)}>
      {items.map((item) => (
        <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
          <li>
            <div className="relative flex items-center">
              <Link
                href={item.url}
                className="min-w-8 flex h-8 flex-1 items-center gap-2 overflow-hidden rounded-md px-1.5 text-sm font-medium outline-none ring-ring transition-all hover:bg-accent hover:text-accent-foreground focus-visible:ring-2"
              >
                <item.icon className="h-4 w-4 shrink-0" />
                <div className="flex flex-1 overflow-hidden">
                  <div className="line-clamp-1 pr-6">{item.title}</div>
                </div>
              </Link>
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="absolute right-1 h-6 w-6 rounded-md p-0 ring-ring transition-all focus-visible:ring-2 data-[state=open]:rotate-90"
                >
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="px-4 py-0.5">
              <ul className="grid border-l px-2">
                {item.items?.map((subItem) => (
                  <li key={subItem.title}>
                    <Link
                      href={subItem.url}
                      className="min-w-8 flex h-8 items-center gap-2 overflow-hidden rounded-md px-2 text-sm font-medium text-muted-foreground ring-ring transition-all hover:bg-accent hover:text-accent-foreground focus-visible:ring-2"
                    >
                      <div className="line-clamp-1">{subItem.title}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </li>
        </Collapsible>
      ))}
    </ul>
  );
}

"use client";

import {
  BookOpen,
  Code2,
  Frame,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import { StorageCard } from "@/components/storage-card";
import { Team } from "@/components/team";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
} from "@/components/ui/sidebar";
import { MdOutlineInfo, MdOutlinePrivacyTip } from "react-icons/md";
const data = {
  navMain: [
    {
      title: "Overview",
      url: "/new-admin",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Events",
          url: "/new-admin/events",
          description: "View all GDSC events",
        },
        {
          title: "Users",
          url: "/new-admin/users",
          description: "View all GDSC users",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "API",
      url: "#",
      icon: Code2,
      items: [
        {
          title: "Developer API",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
      ],
    },
  ],

  navSecondary: [
    {
      title: "Terms of Service",
      url: "#",
      icon: MdOutlineInfo,
    },
    {
      title: "Privacy Policy",
      url: "#",
      icon: MdOutlinePrivacyTip,
    },
  ],
  projects: [
    {
      name: "Routify",
      url: "#",
      icon: Frame,
    },
  ],
};

export function AppSidebar() {
  return (
    <Sidebar className="pt-20">
      <SidebarHeader>
        <Team />
      </SidebarHeader>
      <SidebarContent>
        <SidebarItem>
          <SidebarLabel>Platform</SidebarLabel>
          <NavMain items={data.navMain} />
        </SidebarItem>
        <SidebarItem>
          <SidebarLabel>Projects</SidebarLabel>
          <NavProjects projects={data.projects} />
        </SidebarItem>
        <SidebarItem className="mt-auto">
          <SidebarLabel>Help</SidebarLabel>
          <NavSecondary items={data.navSecondary} />
        </SidebarItem>
        <SidebarItem>
          <StorageCard />
        </SidebarItem>
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}

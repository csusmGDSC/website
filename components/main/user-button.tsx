"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useClerk, useUser } from "@clerk/nextjs";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, Settings } from "lucide-react";
import { GrUserAdmin } from "react-icons/gr";
import { MdManageHistory } from "react-icons/md";
import { useRouter } from "next/navigation";

const UserButton = () => {
  const user = useUser();
  const clerk = useClerk();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full rounded-full outline-none ring-ring hover:bg-accent focus-visible:ring-2 data-[state=open]:bg-accent">
        <Avatar className="h-9 w-9 rounded-full border">
          <AvatarImage
            src={user.user?.imageUrl}
            alt={user.user?.fullName || "User"}
            className="animate-in fade-in-50 zoom-in-90"
          />
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-56 z-[99999]"
        align="end"
        side="top"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm transition-all">
            <Avatar className="h-7 w-7 rounded-md">
              <AvatarImage
                src={user.user?.imageUrl}
                alt={user.user?.fullName || "User"}
              />
            </Avatar>
            <div className="grid flex-1">
              <div className="font-medium">{user.user?.fullName}</div>
              <div className="overflow-hidden text-xs text-muted-foreground">
                <div className="line-clamp-1">
                  {user.user?.emailAddresses[0]?.emailAddress}
                </div>
              </div>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="gap-2"
            onClick={() => clerk.openUserProfile()}
          >
            <MdManageHistory className="h-4 w-4 text-muted-foreground" />
            Manage Account
          </DropdownMenuItem>
          {user.user?.publicMetadata?.role === "ADMIN" && (
            <DropdownMenuItem
              className="gap-2"
              onClick={() => router.push("/admin")}
            >
              <GrUserAdmin className="h-4 w-4 text-muted-foreground" />
              Admin
            </DropdownMenuItem>
          )}
          <DropdownMenuItem className="gap-2">
            <Settings className="h-4 w-4 text-muted-foreground" />
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2" onClick={() => clerk.signOut()}>
          <LogOut className="h-4 w-4 text-muted-foreground" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;

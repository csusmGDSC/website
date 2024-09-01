"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import DataTableColumnHeader from "../table-sorting-button";
import { GDSCUser } from "@/types/gdsc-user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserTableColumns: ColumnDef<GDSCUser>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "image",
    header: "Image",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <Avatar>
          <AvatarImage src={row.getValue("image")} />
          <AvatarFallback>
            {(row.getValue("fullName") as string)[0]}
          </AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: "fullName",
    enableHiding: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => (
      <p className="text-xs font-semibold">{row.getValue("fullName")}</p>
    ),
  },
  {
    accessorKey: "email",
    enableHiding: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => (
      <p className="text-xs font-semibold">{row.getValue("email")}</p>
    ),
  },
  {
    accessorKey: "role",
    enableHiding: false,
    header: "Role",
    cell: ({ row }) => (
      <p className="text-xs font-semibold">{row.getValue("role")}</p>
    ),
  },
  {
    accessorKey: "position",
    enableHiding: false,
    header: "Position",
    cell: ({ row }) => (
      <p className="text-xs font-semibold">{row.getValue("position")}</p>
    ),
  },
  {
    accessorKey: "branch",
    enableHiding: false,
    header: "Branch",
    cell: ({ row }) => {
      const branch = row.getValue("branch") as GDSCUser["branch"];

      const branchColors: Record<GDSCUser["branch"], string> = {
        project: "bg-red/20",
        interview: "bg-yellow/20",
        marketing: "bg-blue/20",
        other: "bg-primary-foreground/20",
      };

      return (
        <div
          className={cn(
            "p-1 border border-border rounded-lg text-center",
            branchColors[branch]
          )}
        >
          <p className="font-semibold text-xs">{branch}</p>
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

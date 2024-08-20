"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CSUSM_ROOM, GDSCEvent } from "@/types/gdsc-event";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/shadcn/dropdown-menu";
import { Button } from "@/components/ui/shadcn/button";
import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import DataTableColumnHeader from "../table-sorting-button";
import Link from "next/link";

export const EventTableColumns: ColumnDef<GDSCEvent>[] = [
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
    accessorKey: "name",
    enableHiding: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => (
      <p className="text-xs font-semibold">{row.getValue("name")}</p>
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    enableHiding: false,
    cell: ({ row }) => {
      if (!row.getValue("date")) return null;
      const date = new Date(row.getValue("date"));
      return <p className="text-xs">{date.toLocaleDateString()}</p>;
    },
  },
  {
    accessorKey: "time",
    header: "Time",
    enableHiding: false,
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"));
      const duration = row.getValue("duration") as number;

      // Add the duration to the start date in milliseconds
      const endDate = new Date(date.getTime() + duration * 60000);

      // Format time without seconds (eg. 00:00:00 (default) -> 00:00)
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
      };

      const startTime = date.toLocaleTimeString(undefined, options);
      const endTime = endDate.toLocaleTimeString(undefined, options);

      return (
        <p className="text-xs">
          {startTime} - {endTime}
        </p>
      );
    },
  },
  {
    accessorKey: "duration",
    header: "Duration",
    enableHiding: true,
  },
  {
    accessorKey: "room",
    header: "Room",
    enableHiding: false,
    cell: ({ row }) => {
      const room = row.getValue("room") as CSUSM_ROOM;
      return (
        <p className="text-xs font-semibold">
          {room?.building} {room?.room}
        </p>
      );
    },
  },
  {
    accessorKey: "type",
    enableHiding: false,
    header: "Type",
    cell: ({ row }) => {
      const type = row.getValue("type") as GDSCEvent["type"];

      const typeColors: Record<Exclude<GDSCEvent["type"], null>, string> = {
        challenge: "bg-red/20",
        competition: "bg-yellow/20",
        workshop: "bg-blue/20",
        other: "bg-primary-foreground/20",
        virtual: "bg-green/20",
      };

      return (
        <div
          className={cn(
            "p-1 border border-border rounded-lg text-center",
            type && typeColors[type]
          )}
        >
          <p className="font-semibold text-xs">{type}</p>
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
            <DropdownMenuItem>
              <Link href="/events/123" target="_blank">
                Go to Page
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

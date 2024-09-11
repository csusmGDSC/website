"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import DataTableColumnHeader from "../table-sorting-button";
import Link from "next/link";

import { GDSCEvent } from "@prisma/client";

import { deleteEventById } from "@/actions/event";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { formatDate } from "date-fns";

export const EventTableColumns: ColumnDef<GDSCEvent>[] = [
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
      const startTime = row.original.startTime;
      const endTime = row.original.endTime;

      return (
        <p className="text-xs">
          {startTime} - {endTime}
        </p>
      );
    },
  },
  {
    accessorKey: "room",
    header: "Room",
    enableHiding: false,
    cell: ({ row }) => {
      return <p className="text-xs font-semibold">{row?.getValue("room")}</p>;
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
    cell: ({ row, table }) => {
      return (
        <AlertDialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href={`/events/${row.original.id}`} target="_blank">
                  Go to Page
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  navigator.clipboard.writeText(row.getValue("id"))
                }
                className="hover:cursor-pointer"
              >
                Copy event ID
              </DropdownMenuItem>
              {/* <DropdownMenuItem className="hover:cursor-pointer">
                Edit
              </DropdownMenuItem> */}
              <DropdownMenuSeparator />
              <AlertDialogTrigger asChild>
                <DropdownMenuItem
                  onSelect={(e) => e.preventDefault()}
                  className="hover:cursor-pointer"
                >
                  Delete
                </DropdownMenuItem>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>{row.getValue("name")}</AlertDialogHeader>
                <AlertDialogDescription>
                  Are you sure you want to delete this event? This action cannot
                  be undone.
                </AlertDialogDescription>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => {
                      deleteEventById(row.original.id);

                      // TODO: Find a better way to remove the row from the table
                      window.location.reload();
                    }}
                    className="bg-destructive text-white font-semibold hover:bg-destructive/80"
                  >
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </DropdownMenuContent>
          </DropdownMenu>
        </AlertDialog>
      );
    },
  },
];

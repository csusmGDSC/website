"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/shadcn/table";
import Container from "../ui/container";
import Avatar from "../ui/avatar";
import {
  ColumnDef,
  flexRender,
  ColumnFiltersState,
  getFilteredRowModel,
  SortingState,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  Column,
  Table as TanStackTable,
} from "@tanstack/react-table";
import { Button } from "../ui/shadcn/button";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
  MdEdit,
  MdDelete,
} from "react-icons/md";
import { Input } from "@/components/ui/shadcn/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/shadcn/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/shadcn/dropdown-menu";
import { PiCaretUpDownBold } from "react-icons/pi";
import { cn } from "@/lib/utils";
import { IoIosAdd, IoMdAdd } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import TitleHeader from "../ui/title-header";

const people = [
  { name: "Alice Johnson", contests_attended: 5, total_points: 150 },
  { name: "Bob Smith", contests_attended: 8, total_points: 210 },
  { name: "Carol White", contests_attended: 12, total_points: 320 },
  { name: "David Brown", contests_attended: 3, total_points: 70 },
  { name: "Eve Davis", contests_attended: 9, total_points: 270 },
  { name: "Frank Wilson", contests_attended: 7, total_points: 200 },
];

type Person = {
  name: string;
  total_points: number;
  contests_attended: number;
};

const columns: ColumnDef<Person>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Participant" />
    ),
    cell: ({ row }) => {
      const person = people.find((obj) => obj.name === row.getValue("name"));
      const contestsAttended = person?.contests_attended ?? "none";

      return (
        <span className="flex flex-row items-center gap-10">
          <p className="font-semibold text-foreground/60 pl-2">
            {row.index + 1}
          </p>
          <span className="flex items-center gap-2">
            <span className="shadow-lg rounded-full">
              <Avatar size={30} />
            </span>
            <span>
              <p>{row.getValue("name")}</p>
              <p>{contestsAttended} contests attended</p>
            </span>
          </span>
        </span>
      );
    },
    size: 800,
    maxSize: 1000,
  },
  {
    accessorKey: "total_points",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Total Points"
        className="justify-end"
      />
    ),
    cell: ({ row }) => (
      <p className="text-right pr-4 font-semibold text-foreground/60">
        {row.getValue("total_points")}
      </p>
    ),
    size: 50,
    maxSize: 100,
  },
];

/**
 * A Shadcn-ui styled table combined with React-TanStack Table functionality.
 * @returns Void
 */
const AdminInterface = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const table = useReactTable({
    data: people,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <section className="flex flex-col items-center w-full">
      <Container>
        <TitleHeader heading="Users" />
        {/* TABLE ACTIONS ROW */}
        <div className="flex flex-col sm:flex-row items-center py-4 justify-between">
          <span className="flex items-center gap-4 text-blue">
            <Button variant="outline" className="hover:text-blue/80">
              <IoMdAdd size={20} />
            </Button>
            <Button variant="outline" className="hover:text-blue/80">
              <MdEdit size={20} />
            </Button>
            <Button variant="outline" className="hover:text-red">
              <MdDelete size={20} />
            </Button>
          </span>
          <span className="relative w-[20rem]">
            <Input
              placeholder="Filter name..."
              value={
                (table.getColumn("name")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("name")?.setFilterValue(event.target.value)
              }
              className="max-w-xs"
            />
            <FaSearch className="absolute right-4 top-1 translate-y-1/2 text-blue" />
          </span>
        </div>

        {/* TABLE */}
        <div className=" shadow-md rounded-md border border-border">
          <Table>
            {/* TABLE HEADER */}
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>

            {/* TABLE BODY */}
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <DateTablePagination table={table} />
      </Container>
    </section>
  );
};

export default AdminInterface;

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-3 h-8 data-[state=open]:bg-accent"
          >
            <span>{title}</span>
            {column.getIsSorted() === "desc" ? (
              <ArrowDownIcon className="ml-2 h-4 w-4" />
            ) : column.getIsSorted() === "asc" ? (
              <ArrowUpIcon className="ml-2 h-4 w-4" />
            ) : (
              <PiCaretUpDownBold className="ml-2 h-4 w-4" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <ArrowUpIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <ArrowDownIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Desc
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

interface DataTablePaginationProps<TData> {
  table: TanStackTable<TData>;
}

function DateTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  return (
    <div className="flex items-center justify-end px-2 mt-4">
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <MdOutlineKeyboardDoubleArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <MdOutlineKeyboardDoubleArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

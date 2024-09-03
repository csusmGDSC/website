"use client";

import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { LuRefreshCw } from "react-icons/lu";

import {
  TableActionButton,
  TableActionButtonProps,
} from "../table-action-button";
import { DataTable } from "../data-table";
import { UserTableColumns } from "./users-column-def";
import { useGDSCTeam } from "@/hooks/use-gdsc-team";

const UsersTable = () => {
  const { team, loading, triggerRefresh } = useGDSCTeam();

  return (
    <Container className="-mt-20">
      <div>
        <UsersTableActions refresh={() => triggerRefresh()} />
        <DataTable columns={UserTableColumns} data={team} loading={loading} />
      </div>
    </Container>
  );
};

export default UsersTable;

/**
 * A component that renders the actions for the events table, including a list of buttons and a filter input.
 *
 * @return {JSX.Element} The JSX element representing the events table actions.
 */
const UsersTableActions = ({ refresh }: { refresh: () => void }) => {
  const ButtonActions: TableActionButtonProps[] = [
    {
      action: "Refresh",
      icon: LuRefreshCw,
      className: "hover:text-blue/80",
      id: "refresh",
      onClick: () => {
        refresh();
      },
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center py-4 justify-between">
      <span className="flex items-center gap-4 text-blue">
        {ButtonActions.map((action) => (
          <TableActionButton key={action.action} {...action} />
        ))}
      </span>
      <span className="relative w-[20rem]">
        <Input placeholder="Filter name..." className="max-w-xs" />
        <FaSearch className="absolute right-4 top-1 translate-y-1/2 text-blue" />
      </span>
    </div>
  );
};

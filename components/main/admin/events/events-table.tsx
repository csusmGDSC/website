"use client";

import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { LuRefreshCw } from "react-icons/lu";

import {
  TableActionButton,
  TableActionButtonProps,
} from "../table-action-button";
import { DataTable } from "../data-table";
import { EventTableColumns } from "./events-column-def";
import { useRouter } from "next/navigation";
import { GDSCEvent } from "@prisma/client";
import { getEvents } from "@/actions/event";

const EventsTable = () => {
  const [events, setEvents] = useState<GDSCEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchEvents = async () => {
    setLoading(true);
    const eventData: GDSCEvent[] = JSON.parse(await getEvents());
    setEvents(eventData);
    setLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <Container className="-mt-20">
      <div>
        <EventsTableActions refresh={() => fetchEvents()} />
        <DataTable
          columns={EventTableColumns}
          data={events}
          loading={loading}
        />
      </div>
    </Container>
  );
};

export default EventsTable;

/**
 * A component that renders the actions for the events table, including a list of buttons and a filter input.
 *
 * @return {JSX.Element} The JSX element representing the events table actions.
 */
const EventsTableActions = ({ refresh }: { refresh: () => void }) => {
  const router = useRouter();

  const ButtonActions: TableActionButtonProps[] = [
    {
      action: "Add",
      icon: IoMdAdd,
      className: "hover:text-blue/80",
      id: "add",
      onClick: () => router.push("/new-admin/events/create-event"),
    },
    {
      action: "Refresh",
      icon: LuRefreshCw,
      className: "hover:text-blue/80",
      id: "refresh",
      onClick: () => refresh(),
    },
    {
      action: "Delete",
      icon: MdDelete,
      className: "hover:text-red",
      id: "delete",
      onClick: () => {},
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
        <Input placeholder="Filter events..." className="max-w-xs" />
        <FaSearch className="absolute right-4 top-1 translate-y-1/2 text-blue" />
      </span>
    </div>
  );
};
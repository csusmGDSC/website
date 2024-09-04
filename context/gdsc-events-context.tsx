"use client";

import { getEvents } from "@/actions/event";
import { GDSCEvent } from "@prisma/client";

import React, { useEffect, useState, createContext } from "react";

interface GDSCEventsContextProviderProps {
  children: React.ReactNode;
}

interface GDSCEventsContextType {
  events: GDSCEvent[];
  loading: boolean;
  triggerRefresh: () => void;
}

export const GDSCEventsContext = createContext<GDSCEventsContextType | null>(
  null
);

/**
 * Provides a context for the GDSC team, fetching the team data on mount and making it available to child components.
 *
 * @param {GDSCEventsContextProviderProps} children - The child components to render within the context.
 * @return {JSX.Element} The context provider element.
 */
export default function GDSCEventsContextProvider({
  children,
}: GDSCEventsContextProviderProps) {
  const [events, setEvents] = useState<GDSCEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const triggerRefresh = () => {
    fetchEvents();
  };

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const eventData: GDSCEvent[] = JSON.parse((await getEvents()) ?? "[]");
      setEvents(eventData ?? []);
    } catch (error) {
      console.log("ERROR GETTING EVENTS: ", error);
      setEvents([]);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <GDSCEventsContext.Provider value={{ events, loading, triggerRefresh }}>
      {children}
    </GDSCEventsContext.Provider>
  );
}

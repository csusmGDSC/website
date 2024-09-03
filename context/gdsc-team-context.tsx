"use client";

import { getUsers } from "@/actions/users";
import { GDSCUser } from "@/types/gdsc-user";
import React, { useEffect, useState, createContext } from "react";

interface GDSCTeamContextProviderProps {
  children: React.ReactNode;
}

interface GDSCTeamContextType {
  team: GDSCUser[];
  loading: boolean;
  triggerRefresh: () => void;
}

export const GDSCTeamContext = createContext<GDSCTeamContextType | null>(null);

/**
 * Provides a context for the GDSC team, fetching the team data on mount and making it available to child components.
 *
 * @param {GDSCTeamContextProviderProps} children - The child components to render within the context.
 * @return {JSX.Element} The context provider element.
 */
export default function GDSCTeamContextProvider({
  children,
}: GDSCTeamContextProviderProps) {
  const [team, setTeam] = useState<GDSCUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const triggerRefresh = () => {
    fetchTeam();
  };

  const fetchTeam = async () => {
    setLoading(true);
    const teamData: GDSCUser[] = await getUsers();
    setTeam(teamData);
    setLoading(false);
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  return (
    <GDSCTeamContext.Provider value={{ team, loading, triggerRefresh }}>
      {children}
    </GDSCTeamContext.Provider>
  );
}

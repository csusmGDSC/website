"use client";

import { GDSCTeamContext } from "@/context/gdsc-team-context";
import { useContext } from "react";

/**
 * Retrieves the GDSC team context.
 *
 * This hook must be used within a GDSCTeamProvider.
 *
 * @return {GDSCTeamContextType | null} The GDSC team context, or null if not available.
 */
export function useGDSCTeam() {
  const context = useContext(GDSCTeamContext);

  if (context === null) {
    throw new Error("useGDSCTeam must be used within a GDSCTeamProvider");
  }

  return context;
}

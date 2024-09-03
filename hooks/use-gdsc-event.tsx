"use client";

import { GDSCEventsContext } from "@/context/gdsc-events-context";
import { useContext } from "react";

/**
 * Custom hook that provides access to the GDSCEventsContext.
 *
 * @return {GDSCEventsContextType} The GDSCEventsContext object.
 * @throws {Error} If used outside of a GDSCEventsProvider.
 */
export function useGDSCEvents() {
  const context = useContext(GDSCEventsContext);

  if (context === null) {
    throw new Error("useGDSCEvents must be used within a GDSCEventsProvider");
  }

  return context;
}

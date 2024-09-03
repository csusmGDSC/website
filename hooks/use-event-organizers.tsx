"use client";

import { getUserById } from "@/actions/users";
import { GDSCUser } from "@/types/gdsc-user";
import { useEffect, useState } from "react";

/**
 * A custom React hook to fetch event organizers based on the provided organizer IDs.
 *
 * @param {string[]} organizerIds - An array of IDs of the event organizers to fetch
 * @return {{ organizers: GDSCUser[] | null }} - An object containing the fetched organizers
 */
export function useEventOrganizers(organizerIds: string[]) {
  const [organizers, setOrganizers] = useState<GDSCUser[] | null>(null);

  useEffect(() => {
    const fetchOrganizers = async () => {
      const organizersData: GDSCUser[] = [];

      for (const id of organizerIds) {
        const user = await getUserById(id);
        if (user) {
          organizersData.push(user);
        }
      }

      setOrganizers(organizersData);
    };
    fetchOrganizers();
  }, [organizerIds]);

  return { organizers };
}

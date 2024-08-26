"use server";

/**
 * This file contains db actions for the event table
 */

import { GDSCEvent } from "@prisma/client";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function getEvents(): Promise<GDSCEvent[]> {
  return db.gDSCEvent.findMany();
}

export async function getEvent(id: GDSCEvent["id"]): Promise<GDSCEvent | null> {
  return db.gDSCEvent.findUnique({ where: { id } });
}

export async function createEvent(values: any) {
  const user = auth();

  if (user.sessionClaims?.metadata.role !== "ADMIN") {
    return { error: "Unauthorized. Only admins can create events."}
  }

  
}

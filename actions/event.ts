"use server";

/**
 * This file contains db actions for the event table
 */

import { GDSCEvent as GDSCEventPrisma } from "@prisma/client";
import { EVENT_TYPES } from "@/types/gdsc-event";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { EventSchema } from "@/schemas";
import * as z from "zod";

/**
 * Retrieves a list of events from the database and converts them to JSON for client components.
 *
 * @return {GDSCEventPrisma[]} An array of events
 */
export async function getEvents(): Promise<string> {
  try {
    const events = await db.gDSCEvent.findMany();
    return JSON.stringify(events);
  } catch (error) {
    console.log("ERROR GETTING EVENTS: ", error);
    return JSON.stringify([]);
  }
}

/**
 * Retrieves a list of events from the database without converting them to JSON for server components
 *
 * @return {GDSCEventPrisma[]} An array of events
 */
export async function getEventsWithoutJSON(): Promise<GDSCEventPrisma[]> {
  try {
    return await db.gDSCEvent.findMany();
  } catch (error) {
    console.log("ERROR GETTING EVENTS: ", error);
    return [];
  }
}

/**
 * Retrieves a single event from the database by its ID.
 *
 * @param {string} id - The ID of the event to retrieve
 * @return {GDSCEventPrisma | null} The event with the specified ID, or null if the ID is invalid
 */
export async function getEventById(
  id: string
): Promise<GDSCEventPrisma | null> {
  // Check if the id is a valid ObjectId
  const objectIdRegex = /^[a-fA-F0-9]{24}$/;

  if (!objectIdRegex.test(id)) {
    return null;
  }

  try {
    return db.gDSCEvent.findUnique({ where: { id } });
  } catch (error) {
    console.log("ERROR GETTING EVENT: ", error);
    return null;
  }
}

/**
 * Deletes an event from the database by its ID.
 *
 * @param {string} id - The ID of the event to delete
 * @return {boolean} True if the event was deleted, False if the ID is invalid
 */
export async function deleteEventById(id: string) {
  // Check if the id is a valid ObjectId
  const objectIdRegex = /^[a-fA-F0-9]{24}$/;

  if (!objectIdRegex.test(id)) {
    return false;
  }

  try {
    db.gDSCEvent.delete({ where: { id } }).then(() => {
      return true;
    });
  } catch (error) {
    console.log("ERROR DELETING EVENT: ", error);
    return false;
  }
}

export async function addAttendeeToEvent(userId: string, eventId: string) {
  const event = await getEventById(eventId);

  // Invalid eventId
  if (!event) {
    return { error: "Invalid event Id" };
  }

  let attendees = [...(event?.attendeeIds || [])];

  // If user already added to event, return null
  if (attendees.includes(userId)) {
    return { error: "User already in event" };
  }

  attendees.push(userId);

  try {
    await db.gDSCEvent.update({
      where: { id: eventId },
      data: { attendeeIds: attendees },
    });
  } catch (error) {
    console.log("ERROR ADDING ATTENDEE: ", error);
    return { error: "Error adding attendee" };
  }

  return { message: "User added to event!" };
}

export async function removeAttendeeFromEvent(userId: string, eventId: string) {
  const event = await getEventById(eventId);

  // Invalid eventId
  if (!event) {
    return { error: "Invalid event Id" };
  }

  let attendees = [...(event?.attendeeIds || [])];

  // User not in event yet, return error
  if (!attendees.includes(userId)) {
    return { error: "User not in event" };
  }

  attendees = attendees.filter((id) => id !== userId);

  try {
    await db.gDSCEvent.update({
      where: { id: eventId },
      data: { attendeeIds: attendees },
    });
  } catch (error) {
    console.log("ERROR REMOVING ATTENDEE: ", error);
    return { error: "Error removing attendee" };
  }

  return { message: "User removed from event!" };
}

/**
 * Creates a new event in the database.
 *
 * @param {FormData} values - A FormData object containing the event details.
 * @return {object} An object with a message or error property indicating the result of the operation.
 */
export async function createEvent(values: FormData) {
  const user = auth();

  if (!user || !user.userId) {
    return { error: "Unauthorized. Please login to create an event." };
  }

  if (user.sessionClaims?.metadata.role !== "ADMIN") {
    return { error: "Unauthorized. Only admins can create events." };
  }

  // Getting the parsed values from the form to validate it.
  // For those confused, we always validate the schema client AND server side
  const parsedValues: z.infer<typeof EventSchema> = {
    eventName: values.get("eventName") as string,
    type: values.get("type") as (typeof EVENT_TYPES)[number],
    room: values.get("room") as string,
    startTime: values.get("startTime") as string,
    endTime: values.get("endTime") as string,
    date: new Date(values.get("date") as string),
    location: values.get("location") as string,
    description: values.get("description") as string,
    githubRepo: values.get("githubRepo") as string,
    slidesURL: values.get("slidesURL") as string,
    organizerIds: JSON.parse(values.get("organizerIds") as any) as string[],
  };

  // Validate the parsed values, all used values after should be from validatedFields except for images
  const validatedFields = EventSchema.safeParse(parsedValues);
  if (!validatedFields.success) {
    console.log(
      "ERROR OCCURED IN CREATING EVENT: ",
      validatedFields.error.errors[0].message
    );
    return { error: validatedFields.error.errors[0].message };
  }

  const createdAtDate = new Date();

  // Using partial to ignore ID since it will be auto generated by mongoDB
  const newGDSCEvent: Required<Partial<Omit<GDSCEventPrisma, "id">>> = {
    name: validatedFields.data.eventName,
    type: validatedFields.data.type || "other",
    room: validatedFields.data.room,
    tags: validatedFields.data.tags || [],
    startTime: validatedFields.data.startTime,
    endTime: validatedFields.data.endTime,
    imageSrc: values.get("imageSrc") as string,
    extraImageSrcs: JSON.parse(values.get("extraImageSrcs") as any) as string[],
    date: validatedFields.data.date,
    location:
      validatedFields.data.location || "California State University San Marcos",
    githubRepo: validatedFields.data.githubRepo || null,
    slidesURL: validatedFields.data.slidesURL || null,
    description: validatedFields.data.description,
    about: validatedFields.data.about?.body || null,
    attendeeIds: validatedFields.data.organizerIds,
    organizerIds: validatedFields.data.organizerIds,
    usersAttendedIds: [],
    updatedAt: createdAtDate,
    createdAt: createdAtDate,
    createdBy: user.userId as string,
  };

  try {
    const createdEvent = await db.gDSCEvent.create({
      data: newGDSCEvent,
    });

    return { message: "Event successfully created", eventId: createdEvent.id };
  } catch (error) {
    console.log("ERROR CREATING EVENT: ", error);
    return { error: "Error creating event" };
  }
}

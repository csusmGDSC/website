import * as z from "zod";

// CONSTANTS
import { GDSC_BRANCHES, GDSC_POSITIONS } from "@/types/gdsc-user";
import { EVENT_TYPES, ROOM_TYPES } from "@/types/gdsc-event";

export const SHORT_BIO_MAX_LENGTH = 200;
export const DESCRIPTION_MAX_LENGTH = 200;
export const ABOUT_MAX_LENGTH = 3000;

/**
 * Zod Schema for onboarding user form.
 */
export const OnboardingSchema = z
  .object({
    firstName: z.string().min(2).max(30),
    lastName: z.string().min(2).max(30),
    shortBio: z.string().min(0).max(SHORT_BIO_MAX_LENGTH).optional(),
    position: z.enum(GDSC_POSITIONS).nullable(),
    branch: z.enum(GDSC_BRANCHES).nullable(),
    website: z.string().url().optional().or(z.literal("")), // OPTIONAL URL: https://github.com/colinhacks/zod/discussions/1254
    github: z.string().url().optional().or(z.literal("")),
    linkedin: z.string().url().optional().or(z.literal("")),
    instagram: z.string().url().optional().or(z.literal("")),
    twitter: z.string().url().optional().or(z.literal("")),
    discord: z.string().optional(),
    graduationYear: z.number().optional(),
  })
  .refine((data) => data.position !== null, {
    message: "Position is required.",
    path: ["position"],
  })
  .refine((data) => data.branch !== null, {
    message: "Branch is required.",
    path: ["branch"],
  });

/**
 * Zod Schema for GDSC event form.
 */
export const EventSchema = z
  .object({
    eventName: z.string().min(2).max(100),
    room: z.string(),
    tags: z.array(z.string()).optional(),
    startTime: z.string(),
    endTime: z.string(),
    type: z.enum(EVENT_TYPES).nullable(),
    location: z.string().optional(),
    date: z.date(),
    githubRepo: z.string().url().optional().or(z.literal("")),
    slidesURL: z.string().url().optional().or(z.literal("")),
    imageSrc: z.instanceof(File).optional(),
    description: z.string().min(2).max(DESCRIPTION_MAX_LENGTH),
    about: z
      .object({
        body: z.string().max(ABOUT_MAX_LENGTH).optional(),
        images: z.array(z.instanceof(File)).optional(),
      })
      .optional(),
    organizerIds: z.array(z.string()),
  })
  .refine((data) => data.type !== null, {
    message: "Event type is required.",
    path: ["type"],
  })
  .refine(
    (data) => {
      const time12HourPattern = /^(0?[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM)$/i;

      return (
        time12HourPattern.test(data.startTime) &&
        time12HourPattern.test(data.endTime)
      );
    },
    {
      message: "Start and end time must be in the format 'HH:MM AM/PM'.",
      path: ["startTime", "endTime"],
    }
  );

export type EventFormValues = z.infer<typeof EventSchema>;

/**
 * Interface representing a GDSC Event.
 *
 * @interface GDSCEvent
 * @property {string} id - The unique identifier of the event.
 * @property {string} name - The name of the event.
 * @property {CSUSM_ROOM} [room] - The room where the event is taking place.
 * @property {string[]} [tags] - The tags associated with the event.
 * @property {number} [duration] - The duration of the event in minutes.
 * @property {(typeof EVENT_TYPES)[number]} type - The type of the event.
 * @property {string} [location] - The location of the event.
 * @property {Date | null} date - The date of the event.
 * @property {string} [githubRepo] - The GitHub repository associated with the event.
 * @property {string} [slidesURL] - The URL of the slides associated with the event.
 * @property {File | null} [imageSrc] - The image associated with the event.
 * @property {File[]} [extraImageSrcs] - The extra images associated with the event.
 * @property {string} description - The description of the event.
 * @property {string} [about] - The about text of the event.
 * @property {string[]} [attendeeIds] - The IDs of the attendees of the event.
 * @property {string[]} organizerIds - The IDs of the organizers of the event.
 * @property {string[]} [usersAttendedIds] - The IDs of the users that attended the event.
 * @property {Date} createdAt - The date when the event was created.
 * @property {Date} updatedAt - The date when the event was last updated.
 * @property {string} [createdBy] - The ID of the user who created the event.
 */
export interface GDSCEvent {
  id: string;
  name: string;
  room?: string;
  tags?: string[];
  startTime: string; // "HH:MM AM/PM"
  endTime: string; // "HH:MM AM/PM"
  type: (typeof EVENT_TYPES)[number];
  location?: string;
  date: Date | null;
  githubRepo?: string;
  slidesURL?: string;
  imageSrc?: File | null;
  virtualURL?: string;
  extraImageSrcs?: File[] | null;
  description: string;
  about?: string;
  attendeeIds?: string[];
  organizerIds: string[];
  usersAttendedIds?: string[];
  createdAt: Date;
  updatedAt: Date;
  createdBy?: string;
}

// TO:DO MIGRATE STRING INPUT TO CSUSM_ROOM TYPE.
/**
 * Interface representing a room in California State University San Marcos.
 * @interface CSUSM_ROOM
 * @property {string} building - The building where the room is located.
 * @property {number} room - The room number.
 * @property {"lecture" | "classroom" | "auditorium" | "other"} type - The type of the room.
 * @property {number} capacity - The maximum capacity of the room.
 */
export interface CSUSM_ROOM {
  building: string;
  room: number;
  type: (typeof ROOM_TYPES)[number];
  capacity: number;
}

export const EVENT_TYPES = [
  "virtual",
  "workshop",
  "competition",
  "challenge",
  "other",
] as const;
export const ROOM_TYPES = [
  "lecture",
  "classroom",
  "auditorium",
  "other",
] as const;

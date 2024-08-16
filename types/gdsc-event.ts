/**
 * Interface representing an event.
 * @interface GDSCEvent
 * @property {string} id - The unique identifier of the event.
 * @property {string} name - The name of the event.
 * @property {string} room - The room where the event is held.
 * @property {string} location - The location of the event.
 * @property {Date} date - The date of the event.
 * @property {string} githubRepo - The GitHub repository URL of the event.
 * @property {string} slidesURL - The URL of the event's slides.
 * @property {string} imageSrc - The URL of the event's image.
 * @property {string[]} extraImageSrcs - An array of URLs of extra images associated with the event.
 * @property {string} description - A brief description of the event.
 * @property {string} about - Information about the event.
 * @property {number[]} attendeeIds - An array of attendee IDs.
 * @property {number[]} organizerIds - An array of organizer IDs.
 * @property {string[]} tags - An array of tags associated with the event.
 * @property {"online" | "in-person" | "hybrid"} type - The type of event.
 * @property {number} duration - The duration of the event in minutes.
 */
export interface GDSCEvent {
  id: string;
  name: string;
  room: string;
  tags: string[];
  duration: number;
  type: "virtual" | "workshop" | "competition" | "challenge" | "other";
  location: string;
  date: Date;
  githubRepo: string;
  slidesURL: string;
  imageSrc: string;
  extraImageSrcs: string[];
  description: string;
  about: string;
  attendeeIds: number[];
  organizerIds: number[];
}
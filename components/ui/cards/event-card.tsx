import { cn, convertToReadableDate } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Tag from "../helpers/tag";
import { FaExternalLinkAlt } from "react-icons/fa";

interface EventProps {
  tags?: string[];
  title?: string;
  description?: string;
  eventPageURL?: URL;
  date?: Date;
  imageSrc?: string;
}

/**
 * Component that shows an event card
 * @param {string[]} tags Filter tags of the event
 * @param {string} title Name of the event
 * @param {string} description Information relating to the event
 * @param {string} eventPageURL URL or path to event page
 * @param {Date} date Date object representing day the event starts
 * @param {string} imageSrc URL or path to image source (View NextJS documentation if using URL)
 */
const EventCard: React.FC<EventProps> = ({
  tags,
  title,
  description,
  eventPageURL,
  date,
  imageSrc = "/images/google/card-background-template.jpg",
}) => {
  return (
    <div className="rounded-lg border border-[#CFCFCF] w-[250px] overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
      <EventImage imageSrc={imageSrc} />
      <div
        className={cn(
          "w-full h-[260px] p-4 flex flex-col",
          imageSrc ? "border-t border-[#CFCFCF]" : "border-none"
        )}
      >
        <EventTags tags={tags} />
        <EventInfo title={title} description={description} />
        <EventDetails eventPageURL={eventPageURL} date={date} />
      </div>
    </div>
  );
};
export default EventCard;

/**
 * Sub-component that shows image of event
 * @param {string} imageSrc URL or path to image source (View NextJS documentation if using URL)
 */
const EventImage: React.FC<EventProps> = ({ imageSrc }) => {
  if (!imageSrc) return null;
  return (
    <div className="w-full overflow-hidden h-[180px]">
      <Image
        src={imageSrc}
        alt={"event-image"}
        width="1920"
        height="1080"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

/**
 * Sub-component that displays tags of the event
 * @param {string[]} tags Filter tags of the event
 */
const EventTags: React.FC<EventProps> = ({ tags }) => {
  if (!tags) return null;
  return (
    <div className="flex flex-row items-center gap-1 mb-2">
      {tags.map((tag, index) => (
        <Tag key={index} text={tag} color="green" />
      ))}
    </div>
  );
};

/**
 * Sub-component that displays information about the event
 * @param {string} title Name of the event
 * @param {string} description Information relating to the event
 */
const EventInfo: React.FC<EventProps> = ({ title, description }) => {
  return (
    <div className="space-y-2">
      <h1 className="text-lg font-bold text-[#3F3F3F]">{title}</h1>
      <p className="text-sm text-[#3F3F3F]">{description}</p>
    </div>
  );
};

/**
 * Sub-component that gives more details on event as well as the day
 * @param {string} eventPageURL URL or path to event page
 * @param {Date} date Date object representing day the event starts
 */
const EventDetails: React.FC<EventProps> = ({ eventPageURL, date }) => {
  return (
    <div className="flex flex-row items-center justify-between mt-auto">
      <Tag text="View Details" icon={FaExternalLinkAlt} color="blue" />
      {date && (
        <p>
          {convertToReadableDate(
            date.getMonth(),
            date.getDate(),
            date.getFullYear()
          )}
        </p>
      )}
    </div>
  );
};

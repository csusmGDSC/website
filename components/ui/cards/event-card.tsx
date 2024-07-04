import { cn, convertToReadableDate } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "../shadcn/button";

interface EventProps {
  title?: string;
  description?: string;
  eventPageURL?: URL;
  date?: Date;
  imageSrc?: string;
  className?: string;
}

/**
 * Component that shows an event card
 * @param {string} title Name of the event
 * @param {string} description Information relating to the event
 * @param {string} eventPageURL URL or path to event page
 * @param {Date} date Date object representing day the event starts
 * @param {string} imageSrc URL or path to image source (View NextJS documentation if using URL)
 * @param {string} className Additional CSS classes to extend to the card
 */
const EventCard: React.FC<EventProps> = ({
  title,
  description,
  eventPageURL,
  date,
  imageSrc,
  className,
}) => {
  return (
    <div
      className={cn(
        "rounded-lg border w-full overflow-hidden [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] hover:shadow-lg transition-all",
        className
      )}
    >
      <EventImage imageSrc={imageSrc} />
      <div
        className={cn(
          "w-full p-4 flex flex-col justify-between min-h-[200px] custom-dark-background",
          imageSrc ? "border-t border-border" : "border-none",
          "w-full p-4 flex flex-col justify-between min-h-[200px] custom-dark-background",
          imageSrc ? "border-t border-border" : "border-none"
        )}
      >
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
 * Sub-component that displays information about the event
 * @param {string} title Name of the event
 * @param {string} description Information relating to the event
 */
const EventInfo: React.FC<EventProps> = ({ title, description }) => {
  return (
    <div className="space-y-2 line-clamp-6">
      <h1 className="font-bold text-foreground/60">{title}</h1>
      <p className="text-xs text-foreground/60">{description}</p>
      <h1 className="font-bold text-foreground/60">{title}</h1>
      <p className="text-xs text-foreground/60">{description}</p>
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
    <div className="flex flex-row items-center justify-between">
      <Button
        className={cn(
          "px-3 rounded-lg truncate gap-2 text-center max-w-fit text-[10px] font-semibold text-white flex flex-row items-center bg-blue hover:bg-blue/80"
        )}
      >
        View Details <FaExternalLinkAlt size={10} />
      </Button>
      {date && (
        <p className="text-sm">
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

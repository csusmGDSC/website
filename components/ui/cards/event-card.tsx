"use client";

import { cn, convertToReadableDate } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "../shadcn/button";
import { BentoCard } from "../magicui/bento-grid";
import Link from "next/link";

interface EventProps {
  title?: string;
  description?: string;
  eventPageURL?: string;
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
        "rounded-xl custom-box-shadow w-full overflow-hidden",
        className
      )}
    >
      <EventImage imageSrc={imageSrc || "/images/gdsc/short logo light.png"} />
      <div
        className={cn(
          "w-full p-4 flex flex-col justify-between min-h-[200px] dark:bg-primary-foreground"
        )}
      >
        <EventInfo
          title={title}
          description={description}
          eventPageURL={eventPageURL}
        />
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
    <div className="w-full overflow-hidden h-[170px] border-b border-border">
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
      <h1 className="font-bold text-foreground/80">{title}</h1>
      <p className="text-xs text-foreground/80">{description}</p>
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
      <Link href={eventPageURL || "/"}>
        <Button
          className={cn(
            "px-3 rounded-lg truncate gap-2 text-center max-w-fit text-[10px] font-semibold text-white flex flex-row items-center bg-blue hover:bg-blue/80"
          )}
        >
          View Details <FaExternalLinkAlt size={10} />
        </Button>
      </Link>
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

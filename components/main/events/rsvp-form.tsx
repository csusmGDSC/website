"use client";

import { Button } from "@/components/ui/button";
import { GDSCEvent } from "@prisma/client";
import { formatDate } from "date-fns";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { MdAccessTime, MdCalendarToday, MdPerson } from "react-icons/md";
import { RSVPButton } from "./rsvp-button";

interface RSVPFormProps {
  event: GDSCEvent;
}

export const RSVPForm = ({ event }: RSVPFormProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [attendeeCount, setAttendeeCount] = useState<number>(
    event.attendeeIds.length
  );

  return (
    <div>
      <div className="w-full sm:w-[18rem] rounded-xl custom-box-shadow flex flex-col p-4 gap-3 sticky top-32 dark:bg-primary-foreground">
        <h1 className="text-3xl font-semibold text-primary">RSVP</h1>
        <div>
          <span className="flex items-center gap-2">
            <MdCalendarToday />

            <p className="text-primary/80">
              {formatDate(event.date || new Date(), "PPP")}
            </p>
          </span>
          <span className="flex items-center gap-2">
            <MdAccessTime />

            <p className="text-primary/80">
              {event.startTime} - {event.endTime}
            </p>
          </span>
        </div>

        {event.githubRepo && (
          <Link
            href={event?.githubRepo || ""}
            target="_blank"
            className="w-full"
          >
            <Button
              variant="outline"
              className="w-full gap-2 font-semibold text-primary/90"
            >
              <FaGithub /> Source Code
            </Button>
          </Link>
        )}
        {event.slidesURL && (
          <Link
            href={event?.slidesURL || ""}
            target="_blank"
            className="w-full"
          >
            <Button
              variant="outline"
              className="w-full font-semibold text-primary/90"
            >
              Slides
            </Button>
          </Link>
        )}
        <RSVPButton event={event} loading={loading} setLoading={setLoading} setAttendeeCount={setAttendeeCount}/>
        <div className="flex gap-2 my-4 text-primary/70 justify-center items-center">
          <MdPerson size={30} />
          <p>Attendees: {attendeeCount}</p>
        </div>
      </div>
    </div>
  );
};

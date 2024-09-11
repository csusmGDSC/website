"use client";

import { addAttendeeToEvent, removeAttendeeFromEvent } from "@/actions/event";
import { Button } from "@/components/ui/button";
import { useClerk, useUser } from "@clerk/nextjs";
import { GDSCEvent } from "@prisma/client";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { formatDate } from "date-fns";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { toast } from "sonner";

interface RSVPButtonProps {
  event: GDSCEvent;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setAttendeeCount: Dispatch<SetStateAction<number>>;
}

export const RSVPButton = ({
  event,
  loading,
  setLoading,
  setAttendeeCount,
}: RSVPButtonProps) => {
  const user = useUser();
  const clerk = useClerk();

  const [isAttending, setIsAttending] = useState(false);

  useEffect(() => {
    const attending = event.attendeeIds.includes(user?.user?.id || "");
    setIsAttending(attending);
  }, [user, event.attendeeIds]);

  const rsvpToEvent = async () => {
    if (!user || !user.user) {
      clerk.openSignIn();
      return;
    }

    setLoading(true);

    try {
      const res = await addAttendeeToEvent(user.user.id, event.id);

      if (res.error) {
        toast.error(res.error);
      }

      if (res.message) {
        toast.success("Successfully signed up for event!");
        setIsAttending(true);
        setAttendeeCount((prev) => (prev += 1));
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const unRsvpToEvent = async () => {
    if (!user || !user.user) {
      clerk.openSignIn();
      return;
    }

    const userIsOrganizer = event.organizerIds.includes(user.user.id);

    if (userIsOrganizer) {
      toast.error("Can't sign out as organizer!");
      return;
    }

    setLoading(true);

    try {
      const res = await removeAttendeeFromEvent(user.user.id, event.id);

      if (res.error) {
        toast.error(res.error);
      }

      if (res.message) {
        toast.success("Successfully signed out event!");
        setIsAttending(false);
        setAttendeeCount((prev) => (prev -= 1));
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <>
      {isAttending ? (
        <div className="flex flex-col items-center gap-2">
          <div className="bg-green w-full font-medium text-white p-2 rounded-md text-center">
            Applied
          </div>
          <Button
            variant="outline"
            disabled={loading}
            className="w-full"
            onClick={unRsvpToEvent}
          >
            Cancel
          </Button>
          <AddToCalendarButton
            name="Add to calendar"
            options={[
              "Apple",
              "Outlook.com",
              "Google",
              "Microsoft365",
              "MicrosoftTeams",
            ]}
            location={event.room || "Virtual"}
            startDate={formatDate(event.date || new Date(), "yyyy-mm-dd")}
            endDate={formatDate(event.date || new Date(), "yyyy-mm-dd")}
            startTime={event.startTime.split(" ")[0]}
            endTime={event.endTime.split(" ")[0]}
            timeZone="America/Los_Angeles"
            buttonStyle="text"
          />
        </div>
      ) : (
        <Button
          disabled={loading}
          onClick={rsvpToEvent}
          className="bg-blue w-full font-medium hover:bg-blue/80"
        >
          RSVP
        </Button>
      )}
    </>
  );
};

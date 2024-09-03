"use client";

import { addAttendeeToEvent, removeAttendeeFromEvent } from "@/actions/event";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { GDSCEvent } from "@prisma/client";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { formatDate } from "date-fns";
import React, { Dispatch, SetStateAction, useState } from "react";
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

  if (!user || !user.user) return null;

  // The user is not immediately available on mount, which causes the button to always show 
  // RSVP mode, even if user is already in event. Moving the state below the condition fixes this.
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isAttending, setIsAttending] = useState(
    event.attendeeIds.includes(user.user.id)
  );

  const rsvpToEvent = async () => {
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

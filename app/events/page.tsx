"use server";

import PastEvents from "@/components/main/events/past-events";
import UpcomingEvents from "@/components/main/events/upcoming-events";
import PageHeader from "@/components/ui/page-header";
import { testEvents } from "@/constants/test/example-events";
import React from "react";
import { getEventsWithoutJSON } from "@/actions/event";

export default async function Events() {
  const events = await getEventsWithoutJSON();
  const today = new Date();

  const upcoming = events.filter((event) => {
    return new Date(event.date ?? new Date()) >= today;
  });

  const past = events.filter((event) => {
    return new Date(event.date ?? new Date()) < today;
  });

  return (
    <main className="w-full mt-[4.5rem]">
      {/* PAGE HEADER */}
      <PageHeader
        title="Events"
        subTitle="Check out upcoming and past events, along with interview prep sessions"
        backgroundImageSrc="/images/background-2.jpeg"
      />

      {/* PAGE CONTENT */}
      <div className="w-full flex-center-col">
        <div className="custom-max-width flex flex-col gap-10">
          <UpcomingEvents events={upcoming} />
          <PastEvents events={past} />
        </div>
      </div>
    </main>
  );
}

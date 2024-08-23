import CardGrid from "@/components/ui/cards/card-grid";
import ContentCard from "@/components/ui/cards/content-card";
import TitleHeader from "@/components/ui/title-header";
import { testEvents } from "@/constants/test/example-events";
import { convertToReadableDate } from "@/lib/utils";
import React from "react";

const UpcomingEvents = () => {
  return (
    <section>
      <TitleHeader heading="Upcoming Events" />
      <CardGrid placeholder="There are no upcoming events at the moment.">
        {/* TODO: ADD UPCOMING EVENTS */}
      </CardGrid>
    </section>
  );
};

export default UpcomingEvents;

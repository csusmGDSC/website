import CardGrid from "@/components/ui/cards/card-grid";
import ContentCard from "@/components/ui/cards/content-card";
import TitleHeader from "@/components/ui/title-header";
import { GDSCEvent } from "@prisma/client";
import { formatDate } from "date-fns";
import React from "react";

interface UpcomingEventsProps {
  events: GDSCEvent[];
}

const UpcomingEvents = ({ events }: UpcomingEventsProps) => {
  return (
    <section>
      <TitleHeader heading="Upcoming Events" />
      <CardGrid placeholder="There are no upcoming events at the moment.">
        {events &&
          events.length &&
          events?.map((e, index) => (
            <ContentCard
              title={e.name}
              description={e.description}
              date={e.date ? formatDate(new Date(e.date), "PPP") : undefined}
              key={index}
              imageSrc={
                e.imageSrc
                  ? `https://utfs.io/f/${e.imageSrc}`
                  : "/images/stock/reflections.jpg"
              }
              className="sm:!w-[calc(50%-1rem)] md:!w-[calc(33.333%-1rem)]"
              websiteUrl={`/events/${e.id}`}
              tags={e.tags}
              type="event"
              eventType={e.type}
            />
          ))}
      </CardGrid>
    </section>
  );
};

export default UpcomingEvents;

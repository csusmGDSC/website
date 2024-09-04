import CardGrid from "@/components/ui/cards/card-grid";
import ContentCard from "@/components/ui/cards/content-card";
import TitleHeader from "@/components/ui/title-header";
import { convertToReadableDate } from "@/lib/utils";
import { GDSCEvent } from "@prisma/client";
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
              date={
                e.date
                  ? convertToReadableDate(
                      e.date.getMonth(),
                      e.date.getDate(),
                      e.date.getFullYear()
                    )
                  : undefined
              }
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
            />
          ))}
      </CardGrid>
    </section>
  );
};

export default UpcomingEvents;

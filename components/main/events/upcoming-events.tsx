import CardGrid from "@/components/ui/cards/card-grid";
import EventCard from "@/components/ui/cards/event-card";
import TitleHeader from "@/components/ui/title-header";
import React from "react";

const UpcomingEvents = () => {
  const eventCardWidths =
    "sm:!w-[calc(50%-1rem)] md:!w-[calc(33.333%-1rem)] 2xl:!w-[calc(25%-1rem)]";

  return (
    <section>
      <TitleHeader heading="Upcoming Events" />
      <CardGrid placeholder="There are no upcoming events at the moment.">
        {exampleEvents.map((e, index) => (
          <EventCard
            title={e.title}
            description={e.description}
            date={e.date}
            key={index}
            className={eventCardWidths}
            eventPageURL="/events/100"
          />
        ))}
      </CardGrid>
    </section>
  );
};

export default UpcomingEvents;

// TO-DO: Move static data somewhere else
const exampleEvents = [
  {
    title: "REACT",
    description: "Learn how to develop the basics of react-based applications.",
    date: new Date(2024, 7, 31, 10, 30, 0),
  },
  {
    title: "HTML",
    description: "Learn how to develop the basics of HTML.",
    date: new Date(2024, 8, 11, 15, 30, 0),
  },
  {
    title: "CSS",
    description: "Learn how to develop the basics of CSS.",
    date: new Date(2024, 9, 12, 11, 30, 0),
  },
  {
    title: "JavaScript",
    description: "Learn how to develop the basics of JavaScript.",
    date: new Date(2024, 10, 20, 14, 0, 0),
  },
];

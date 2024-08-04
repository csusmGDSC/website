import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/shadcn/carousel";
import Container from "@/components/ui/container";
import EventCard from "@/components/ui/cards/event-card";
import React from "react";

/**
 * Component that shows upcoming events for the user
 */
const NearbyEvents = () => {
  return (
    <Container
      heading="Nearby Events"
      subheading="Check out upcoming workshops and sessions"
      className="items-center justify-center px-16 md:px-0 mt-10 custom-max-width relative"
    >
      {/* Interactive horizontal scroll for the event cards */}
      <Carousel className="bg-background">
        <CarouselContent className="py-1">
          {exampleEvents.map((eventItem, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-1/2 md:basis-1/3 2xl:basis-1/4 flex flex-col items-center"
            >
              <EventCard
                title={eventItem.title}
                description={eventItem.description}
                date={eventItem.date}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation buttons */}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
};

export default NearbyEvents;

// TO-DO: Move static data else-where
const exampleEvents = [
  {
    tags: ["WEB", "DEV"],
    title: "REACT",
    description: "Learn how to develop the basics of react-based applications.",
    date: new Date(2024, 7, 31, 10, 30, 0),
  },
  {
    tags: ["WEB", "DEV", "HTML"],
    title: "HTML",
    description: "Learn how to develop the basics of HTML.",
    date: new Date(2024, 8, 11, 15, 30, 0),
  },
  {
    tags: ["WEB", "CSS"],
    title: "CSS",
    description: "Learn how to develop the basics of CSS.",
    date: new Date(2024, 9, 12, 11, 30, 0),
  },
  {
    tags: ["WEB", "JAVASCRIPT"],
    title: "JavaScript",
    description: "Learn how to develop the basics of JavaScript.",
    date: new Date(2024, 10, 20, 14, 0, 0),
  },
  // {
  //   tags: ["WEB", "DEV", "NODE"],
  //   title: "Node.js",
  //   description: "Learn how to develop the basics of Node.js applications.",
  //   date: new Date(2024, 11, 5, 9, 30, 0),
  // },
];

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
              className="sm:basis-1/2 md:basis-1/3 xl:basis-[25%] flex flex-col items-center"
            >
              <EventCard
                title={eventItem.title}
                description={eventItem.description}
                date={eventItem.date}
                imageSrc="/images/react-background.png"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation buttons */}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Background Circles */}
      <div className="absolute top-24 -right-20 -z-20 rounded-full w-[6rem] h-[6rem] bg-red" />
      <div className="absolute top-32 -right-20 -z-20 rounded-full w-[12rem] h-[12rem] bg-yellow" />
      <div className="absolute top-24 -left-20 -z-20 rounded-full w-[14rem] h-[14rem] bg-green" />
      <div className="absolute top-24 -left-20 -z-20 rounded-full w-[6rem] h-[6rem] bg-blue" />
    </Container>
  );
};

export default NearbyEvents;

// TO-DO: Move static data else-where
const exampleEvents = [
  {
    tags: ["WEB", "DEV"],
    title: "Build the web: REACT",
    description: "Learn how to develop the basics of react-based applications.",
    date: new Date(2024, 7, 31, 10, 30, 0),
  },
  {
    tags: ["WEB", "DEV", "HTML"],
    title: "Build the web: HTML",
    description: "Learn how to develop the basics of HTML.",
    date: new Date(2024, 8, 11, 15, 30, 0),
  },
  {
    tags: ["WEB", "CSS"],
    title: "Build the web: CSS",
    description: "Learn how to develop the basics of CSS.",
    date: new Date(2024, 9, 12, 11, 30, 0),
  },
  {
    tags: ["WEB", "JAVASCRIPT"],
    title: "Build the web: JavaScript",
    description: "Learn how to develop the basics of JavaScript.",
    date: new Date(2024, 10, 20, 14, 0, 0),
  },
  {
    tags: ["WEB", "DEV", "NODE"],
    title: "Build the web: Node.js",
    description: "Learn how to develop the basics of Node.js applications.",
    date: new Date(2024, 11, 5, 9, 30, 0),
  },
  {
    tags: ["WEB", "DEV", "VUE"],
    title: "Build the web: Vue.js",
    description: "Learn how to develop the basics of Vue.js applications.",
    date: new Date(2024, 12, 10, 13, 0, 0),
  },
  {
    tags: ["WEB", "DEV", "ANGULAR"],
    title: "Build the web: Angular",
    description: "Learn how to develop the basics of Angular applications.",
    date: new Date(2025, 1, 15, 16, 30, 0),
  },
  {
    tags: ["WEB", "DEV", "PYTHON"],
    title: "Build the web: Python",
    description: "Learn how to develop the basics of Python web applications.",
    date: new Date(2025, 2, 22, 10, 0, 0),
  },
  {
    tags: ["WEB", "DEV", "PHP"],
    title: "Build the web: PHP",
    description: "Learn how to develop the basics of PHP web development.",
    date: new Date(2025, 3, 30, 14, 30, 0),
  },
];

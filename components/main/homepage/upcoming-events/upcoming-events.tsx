import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/helpers/carousel";
import Container from "@/components/ui/helpers/container";
import EventCard from "@/components/ui/cards/event-card";
import React from "react";
import styles from "./upcoming-events.module.css";

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

/**
 * Component that shows upcoming events for the user
 */
const UpcomingEvents = () => {
  return (
    <Container
      heading="Upcoming Events"
      subheading="Check out upcoming workshops and sessions"
      className={styles.container}
    >
      {/* Interactive horizontal scroll for the event cards */}
      <Carousel>
        <CarouselContent>
          {exampleEvents.map((eventItem, index) => (
            <CarouselItem key={index} className={styles.carouselItem}>
              <EventCard
                tags={eventItem.tags}
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

export default UpcomingEvents;

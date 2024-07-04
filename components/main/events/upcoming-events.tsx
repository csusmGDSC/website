import CardGrid from "@/components/ui/cards/card-grid";
import EventCard from "@/components/ui/cards/event-card";
import TitleHeader from "@/components/ui/title-header";
import React from "react";

const UpcomingEvents = () => {
  const eventCardWidths = "sm:!w-[calc(50%-1rem)] md:!w-[calc(33.333%-1rem)]";

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
    title: "Build the web: REACT",
    description: "Learn how to develop the basics of react-based applications.",
    date: new Date(2024, 7, 31, 10, 30, 0),
  },
  {
    title: "Build the web: HTML",
    description: "Learn how to develop the basics of HTML.",
    date: new Date(2024, 8, 11, 15, 30, 0),
  },
  {
    title: "Build the web: CSS",
    description: "Learn how to develop the basics of CSS.",
    date: new Date(2024, 9, 12, 11, 30, 0),
  },
  {
    title: "Build the web: JavaScript",
    description: "Learn how to develop the basics of JavaScript.",
    date: new Date(2024, 10, 20, 14, 0, 0),
  },
  {
    title: "Build the web: Node.js",
    description: "Learn how to develop the basics of Node.js applications.",
    date: new Date(2024, 11, 5, 9, 30, 0),
  },
  {
    title: "Build the web: Vue.js",
    description: "Learn how to develop the basics of Vue.js applications.",
    date: new Date(2024, 12, 10, 13, 0, 0),
  },
  {
    title: "Build the web: Angular",
    description:
      "Learn how to develop the basics of Angular applications. sadfasdfk hjsabdfsadbfjhas dbfkjhsbfkj hasdbfhjskabfhjasfbhajsdf sdfasdf asfdasdfasdfasdf asedfa sdf adsdas adsada dasdsadasda sasdasdasd asdasda asdasd",
    date: new Date(2025, 1, 15, 16, 30, 0),
  },
  {
    title: "Build the web: Python",
    description: "Learn how to develop the basics of Python web applications.",
    date: new Date(2025, 2, 22, 10, 0, 0),
  },
  {
    title: "Build the web: PHP",
    description: "Learn how to develop the basics of PHP web development.",
    date: new Date(2025, 3, 30, 14, 30, 0),
  },
];

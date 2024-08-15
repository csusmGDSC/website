import CardGrid from "@/components/ui/cards/card-grid";
import EventCard from "@/components/ui/cards/event-card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/shadcn/tabs";
import TitleHeader from "@/components/ui/title-header";
import { TabsContent } from "@radix-ui/react-tabs";
import React from "react";

const PastEvents = () => {
  return (
    <section>
      <TitleHeader heading="Past Events" />
      <Tabs defaultValue="2024">
        <TabsList>
          <TabsTrigger value="2024">2024</TabsTrigger>
          <TabsTrigger value="2023">2023</TabsTrigger>
          <TabsTrigger value="2022">2022</TabsTrigger>
        </TabsList>
        <TabsContent value="2024" className="mt-6">
          <CardGrid placeholder="There are no past events yet.">
            {exampleEvents.map((e, index) => (
              <EventCard
                title={e.title}
                description={e.description}
                date={e.date}
                key={index}
                className="sm:!w-[calc(50%-1rem)] md:!w-[calc(33.333%-1rem)] 2xl:!w-[calc(25%-1rem)]"
                eventPageURL="/events/100"
              />
            ))}
          </CardGrid>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default PastEvents;

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
  {
    title: "Node.js",
    description: "Learn how to develop the basics of Node.js applications.",
    date: new Date(2024, 11, 5, 9, 30, 0),
  },
  {
    title: "Vue.js",
    description: "Learn how to develop the basics of Vue.js applications.",
    date: new Date(2024, 12, 10, 13, 0, 0),
  },
  {
    title: "Angular",
    description:
      "Learn how to develop the basics of Angular applications. sadfasdfk hjsabdfsadbfjhas dbfkjhsbfkj hasdbfhjskabfhjasfbhajsdf sdfasdf asfdasdfasdfasdf asedfa sdf adsdas adsada dasdsadasda sasdasdasd asdasda asdasd",
    date: new Date(2025, 1, 15, 16, 30, 0),
  },
  {
    title: "Python",
    description: "Learn how to develop the basics of Python web applications.",
    date: new Date(2025, 2, 22, 10, 0, 0),
  },
  {
    title: "PHP",
    description: "Learn how to develop the basics of PHP web development.",
    date: new Date(2025, 3, 30, 14, 30, 0),
  },
];

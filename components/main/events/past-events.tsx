import CardGrid from "@/components/ui/cards/card-grid";
import ContentCard from "@/components/ui/cards/content-card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TitleHeader from "@/components/ui/title-header";
import { GDSCEvent } from "@prisma/client";

import { TabsContent } from "@radix-ui/react-tabs";
import { formatDate } from "date-fns";
import React from "react";

interface PastEventsProps {
  events: GDSCEvent[];
}

const PastEvents = ({ events }: PastEventsProps) => {
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
            {events &&
              events.length > 0 &&
              events?.map((e, index) => (
                <ContentCard
                  title={e.name}
                  description={e.description}
                  date={
                    e.date ? formatDate(new Date(e.date), "PPP") : undefined
                  }
                  imageSrc={
                    e.imageSrc
                      ? `https://utfs.io/f/${e.imageSrc}`
                      : "/images/stock/reflections.jpg"
                  }
                  key={index}
                  className="sm:!w-[calc(50%-1rem)] md:!w-[calc(33.333%-1rem)]"
                  websiteUrl={`/events/${e.id}`}
                  tags={e.tags}
                  eventType={e.type}
                  type="event"
                />
              ))}
          </CardGrid>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default PastEvents;

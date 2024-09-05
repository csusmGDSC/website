import EventsTable from "@/components/main/admin/events/events-table";
import Container from "@/components/ui/container";
import React from "react";

/**
 * Renders the Events component, which displays a table of events wrapped in a custom max-width container.
 *
 * @return {JSX.Element} The rendered Events component.
 */
const Events = () => {
  return (
    <Container className="custom-max-width flex flex-col justify-center -mt-20">
      <EventsTable />
    </Container>
  );
};

export default Events;

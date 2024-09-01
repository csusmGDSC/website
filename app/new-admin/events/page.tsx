import EventsTable from "@/components/main/admin/events/events-table";
import Container from "@/components/ui/container";
import React from "react";

const Events = () => {
  return (
    <Container className="custom-max-width flex flex-col justify-center -mt-20">
      <EventsTable />
    </Container>
  );
};

export default Events;

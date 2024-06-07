import PastEvents from "@/components/main/events/past-events";
import UpcomingEvents from "@/components/main/events/upcoming-events";
import PageHeader from "@/components/ui/page-header";
import React from "react";

const Events = () => {
  return (
    <main className="w-full mt-[4.5rem]">
      {/* PAGE HEADER */}
      <PageHeader
        title="Events"
        subTitle="Check out upcoming and past events, along with interview prep sessions"
        backgroundImageSrc="/images/background-2.jpeg"
      />

      {/* PAGE CONTENT */}
      <div className="w-full flex-center-col">
        <div className="custom-max-width space-y-20">
          <UpcomingEvents />
          <PastEvents />
        </div>
      </div>
    </main>
  );
};

export default Events;

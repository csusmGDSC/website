import PastEvents from "@/components/main/events/past-events";
import UpcomingEvents from "@/components/main/events/upcoming-events";
import PageHeader from "@/components/ui/page-header";
import { Input } from "@/components/ui/shadcn/input";
import { testEvents } from "@/constants/test/example-events";
import React from "react";
import { FaSearch } from "react-icons/fa";

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
        <div className="custom-max-width flex flex-col gap-10">
          {/* <span className="relative">
            <Input placeholder="Search events..." />
            <FaSearch className="absolute right-4 top-1 translate-y-1/2 text-blue" />
          </span> */}

          <UpcomingEvents />
          <PastEvents events={testEvents} />
        </div>
      </div>
    </main>
  );
};

export default Events;

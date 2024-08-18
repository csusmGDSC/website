import { Button } from "@/components/ui/shadcn/button";
import React from "react";

const Notifications = () => {
  return (
    <div>
      <Button className="w-full" variant="outline">
        Create Event
      </Button>
      <Button className="w-full" variant="outline">
        Create Document
      </Button>
    </div>
  );
};

export default Notifications;

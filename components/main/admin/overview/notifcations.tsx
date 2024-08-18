import { Button } from "@/components/ui/shadcn/button";
import React from "react";

const Notifications = () => {
  return (
    <div>
      <div className="flex gap-4">
        <Button className="w-full" variant="outline">
          Create Event
        </Button>
        <Button className="w-full" variant="outline">
          Create Blog
        </Button>
      </div>
    </div>
  );
};

export default Notifications;

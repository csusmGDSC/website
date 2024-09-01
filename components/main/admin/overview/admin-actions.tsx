import { Button } from "@/components/ui/button";
import React from "react";
import { IoIosDocument } from "react-icons/io";
import { MdEvent } from "react-icons/md";

const AdminActions = () => {
  return (
    <div className="flex gap-4">
      <Button
        className="w-full hover:bg-blue/30 hover:border-blue/60 gap-2"
        variant="outline"
      >
        <MdEvent /> Create Event
      </Button>
      <Button
        className="w-full hover:bg-green/30 hover:border-green/60 gap-2"
        variant="outline"
      >
        <IoIosDocument /> Create Blog
      </Button>
    </div>
  );
};

export default AdminActions;

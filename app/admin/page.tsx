import AdminInterface from "@/components/main/admin-interface";
import React from "react";

const Events = () => {
  return (
    <main className="w-full">
      {/* PAGE CONTENT */}
      <div className="w-full flex-center-col">
        <div className="custom-max-width">
          <AdminInterface />
        </div>
      </div>
    </main>
  );
};

export default Events;

import AdminInterface from "@/components/main/admin-interface";
import React from "react";

const Dashboard = () => {
  return (
    <main className="w-full">
      {/* PAGE CONTENT */}
      <div className="w-full flex-center-col">
        <AdminInterface />
      </div>
    </main>
  );
};

export default Dashboard;

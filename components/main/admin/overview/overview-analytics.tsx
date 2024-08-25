import Container from "@/components/ui/container";
import React from "react";
import AttendenceGraph from "./attendence-graph";
import UserPieChart from "./user-pie-chart";
import AdminActions from "./admin-actions";

const OverviewAnalytics = () => {
  return (
    <Container
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      padding={false}
    >
      <div className="sm:col-span-2">
        <AttendenceGraph />
      </div>
      <div className="sm:col-span-1 flex flex-col gap-6">
        <AdminActions />
        <UserPieChart />
      </div>
    </Container>
  );
};

export default OverviewAnalytics;

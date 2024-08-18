import Container from "@/components/ui/container";
import React from "react";
import AttendenceGraph from "./attendence-graph";
import Notifications from "./notifcations";

const OverviewAnalytics = () => {
  return (
    <Container className="grid grid-cols-2 custom-max-width">
      <AttendenceGraph />
      <Notifications />
    </Container>
  );
};

export default OverviewAnalytics;

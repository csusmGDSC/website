import OverviewAnalytics from "@/components/main/admin/overview/overview-analytics";
import OverviewCards from "@/components/main/admin/overview/overview-cards";
import Container from "@/components/ui/container";
import React from "react";

const Dashboard = () => {
  return (
    <Container className="custom-max-width flex flex-col justify-center -mt-20 gap-8">
      <OverviewCards />
      <OverviewAnalytics />
    </Container>
  );
};

export default Dashboard;

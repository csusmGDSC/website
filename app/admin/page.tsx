import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/shadcn/tabs";
import EventsTable from "@/components/main/admin/events/events-table";
import UsersTable from "@/components/main/admin/users/users-table";
import Container from "@/components/ui/container";
import OverviewCards from "@/components/main/admin/overview/overview-cards";
import AttendenceGraph from "@/components/main/admin/overview/attendence-graph";
import Notifications from "@/components/main/admin/overview/notifcations";
import OverviewAnalytics from "@/components/main/admin/overview/overview-analytics";

const Dashboard = () => {
  return (
    <main className="w-full flex-center-col py-[6rem]">
      {/* PAGE CONTENT */}
      <div className="custom-max-width">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>
          <TabsContent value="users">
            <UsersTable />
          </TabsContent>
          <TabsContent value="overview">
            <OverviewCards />
            <OverviewAnalytics />
          </TabsContent>
          <TabsContent value="events">
            <EventsTable />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default Dashboard;

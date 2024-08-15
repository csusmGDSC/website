import AdminInterface from "@/components/main/admin-interface";
import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/shadcn/tabs";

const Dashboard = () => {
  return (
    <main className="w-full flex-center-col py-[10rem]">
      {/* PAGE CONTENT */}
      <div className="custom-max-width">
        <Tabs defaultValue="users" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>
          <TabsContent value="users">
            <AdminInterface />
          </TabsContent>
          <TabsContent value="overview">test o</TabsContent>
          <TabsContent value="events">test e</TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default Dashboard;

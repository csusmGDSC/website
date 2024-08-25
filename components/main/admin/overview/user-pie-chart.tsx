"use client";

import { Button } from "@/components/ui/shadcn/button";
import React, { useMemo } from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { testUsers } from "@/constants/test/example-users";

const chartConfig = {
  project: {
    label: "Project",
    color: "hsla(var(--chart-1), 0.7)",
  },
  interview: {
    label: "Interview",
    color: "hsla(var(--chart-2), 0.7)",
  },
  marketing: {
    label: "Marketing",
    color: "hsla(var(--chart-3), 0.7)",
  },
  other: {
    label: "Others",
    color: "hsla(var(--chart-4), 0.7)",
  },
} satisfies ChartConfig;

const chartData = [
  {
    branch: "project",
    users: testUsers.filter((user) => user.branch === "project").length,
    fill: "var(--color-project)",
  },
  {
    branch: "interview",
    users: testUsers.filter((user) => user.branch === "interview").length,
    fill: "var(--color-interview)",
  },
  {
    branch: "marketing",
    users: testUsers.filter((user) => user.branch === "marketing").length,
    fill: "var(--color-marketing)",
  },
  {
    branch: "other",
    users: testUsers.filter((user) => user.branch === "other").length,
    fill: "var(--color-other)",
  },
];

const UserPieChart = () => {
  const totalUsers = useMemo(() => testUsers.length, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="pb-0">
        <CardTitle>Total Members</CardTitle>
        <CardDescription>August 2024 - August 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="users"
              nameKey="branch"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalUsers}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Members
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default UserPieChart;

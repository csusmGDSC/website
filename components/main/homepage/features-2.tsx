import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/shadcn/skeleton";

import React from "react";
import { IconType } from "react-icons";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { BsCheck2Circle, BsFillSuitDiamondFill } from "react-icons/bs";
import { IoCubeOutline } from "react-icons/io5";

const Features2 = () => {
  return (
    <Container className="custom-max-width mt-10 mb-10">
      <div className="flex flex-row items-center">
        <div className="w-1/2 space-y-2">
          <h1 className="font-semibold text-2xl text-primary w-1/2">
            Ideate and specify what to build next
          </h1>
          <p className="font-medium">Collaborative Documents</p>
          <p className="font-medium">Inline comments</p>
          <p className="font-medium">Text-to-issue commands</p>
        </div>
        <Skeleton className="w-1/2 h-[500px] rounded-xl" />
      </div>

      <hr className="my-8" />

      <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-16">
        {[
          {
            title: "Initiatives",
            desc: "Coordinate strategic product efforts",
            icon: BsCheck2Circle,
          },
          {
            title: "Cross-team projects",
            desc: "Collaborate across teams and departments.",
            icon: IoCubeOutline,
          },
          {
            title: "Milestones",
            desc: "Break projects down into concrete phases.",
            icon: BsFillSuitDiamondFill,
          },
          {
            title: "Progress insights",
            desc: "Track scope, velocity, and progress over time.",
            icon: BiSolidBarChartAlt2,
          },
        ].map((item, index) => (
          <Thing
            title={item.title}
            desc={item.desc}
            icon={item.icon}
            className="col-span-1 w-fit"
            key={index}
          />
        ))}
      </div>
    </Container>
  );
};

interface ThingProps {
  title: string;
  desc: string;
  icon: IconType;
  className?: string;
}

const Thing = ({ title, desc, icon: Icon, className }: ThingProps) => {
  return (
    <div className={className}>
      <span className="flex flex-row items-center gap-2 font-semibold text-primary">
        <Icon />
        {title}
      </span>
      <p className="text-primary/70">{desc}</p>
    </div>
  );
};

export default Features2;

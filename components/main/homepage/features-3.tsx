import Container from "@/components/ui/container";
import IconCloud from "@/components/ui/magicui/icon-cloud";
import { Skeleton } from "@/components/ui/shadcn/skeleton";
import React from "react";
import { IconType } from "react-icons";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { BsCheck2Circle, BsFillSuitDiamondFill } from "react-icons/bs";
import { IoCubeOutline } from "react-icons/io5";

const Features3 = () => {
  return (
    <Container className="custom-max-width">
      <div className="flex flex-row items-center gap-20">
        <div className="w-full md:w-1/2">
          <h1 className="font-semibold text-5xl text-primary">
            Built on strong foundations
          </h1>
          <p className="my-8">
            GDSC is a community driven to give students the best software
            engineering experience at CSUSM.
          </p>
          <hr />
          <dl className="grid-cols-2 grid my-8 gap-y-8">
            <Row
              label="Linear Sync Engine"
              desc="Built with a high-performance architecture and an obsessive focus on speed."
            />
            <Row
              label="Enterprise-ready security"
              desc="Best-in-class security practices keep your work safe and secure at every layer."
            />
            <Row
              label="Engineered for scale"
              desc="Built for teams of all sizes. From early-stage startups to global enterprises."
            />
          </dl>
          <hr />
          <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-16 mt-8">
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
                icon={item.icon}
                className="col-span-1 w-fit"
                key={index}
              />
            ))}
          </div>
        </div>
        <div
          className="relative hidden md:flex w-1/2 max-w-[32rem]
          items-center justify-center overflow-hidden"
        >
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </Container>
  );
};

export default Features3;

const Row = ({ label, desc }: { label: string; desc: string }) => {
  return (
    <div className="contents">
      <dt className="font-semibold text-primary/90">{label}</dt>
      <dd className="text-primary/70">{desc}</dd>
    </div>
  );
};

interface ThingProps {
  title: string;
  icon: IconType;
  className?: string;
}

const Thing = ({ title, icon: Icon, className }: ThingProps) => {
  return (
    <div className={className}>
      <span className="text-primary">
        <Icon />
        {title}
      </span>
    </div>
  );
};

const slugs = [
  "googlechrome",
  "google",
  "typescript",
  "javascript",
  "react",
  "android",
  "apple",
  "html5",
  "css3",
  "tailwind",
  "prisma",
  "github",
  "git",
  "docker",
  "cypress",
  "figma",
  "jest",
  "visualstudiocode",
  "androidstudio",
  "nextdotjs",
  "nodedotjs",
  "amazonaws",
  "vercel",
  "python",
  "leetcode",
  "hackerrank",
];

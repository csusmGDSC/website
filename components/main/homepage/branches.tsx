"use client";

import React from "react";
import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/shadcn/button";
import { FaExternalLinkAlt } from "react-icons/fa";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/shadcn/tooltip";
import { IconType } from "react-icons";
import { GoProjectSymlink } from "react-icons/go";
import { BiRun } from "react-icons/bi";
import { GrCloudSoftware } from "react-icons/gr";
import { IoMdPeople } from "react-icons/io";
import { FaLaptop } from "react-icons/fa6";
import { SiFuturelearn } from "react-icons/si";
import { FadeText } from "@/components/ui/magicui/fade-text";

/**
 * Component that shows the different teams a member can join
 */
const Branches = () => {
  return (
    <Container
      heading="Branches"
      subheading="Choose your desired development path"
      className="w-full flex flex-col md:flex-row gap-4 items-center mt-10 custom-max-width"
    >
      <BranchCard
        title="Project Team"
        descriptionItems={projectBranch}
        technologies={projectTechnologies}
        linkText="VIEW PROJECTS"
        linkHref="/projects"
      />
      <BranchCard
        title="Interview Team"
        descriptionItems={interviewBranch}
        technologies={interviewTechnologies}
        linkText="VIEW INTERVIEW"
        linkHref="/interview"
      />
    </Container>
  );
};

/**
 * Sub-component that lists the description of a specific benefit
 * @param {IconType} icon Image source url or path
 * @param {string} heading The name of the benefit
 * @param {number} index The current index of the row, so that the animation cascades after the previous
 */
const BranchDescription = ({
  icon: Icon,
  heading,
  index,
}: {
  icon: IconType;
  heading: string;
  index: number;
}) => {
  return (
    <div className="space-y-2 px-2 sm:block text-left">
      <div className="flex flex-row items-center gap-4">
        <Icon size={40} />
        <FadeText
          className="text-lg font-medium text-foreground/70"
          direction="right"
          framerProps={{
            show: { transition: { delay: index * 0.5 } },
          }}
          text={heading}
        />
      </div>
    </div>
  );
};

const BranchCard = ({
  title,
  descriptionItems,
  technologies,
  linkHref,
  linkText,
}: {
  title: string;
  descriptionItems: any;
  technologies: any;
  linkHref: string;
  linkText: string;
}) => {
  return (
    <div className="border rounded-md p-6 w-full custom-box-shadow custom-dark-background">
      <div>
        <h2 className="text-2xl font-semibold text-foreground/70 mb-4">
          {title}
        </h2>
        {descriptionItems.map((benefit: any, index: number) => (
          <div key={index} className={`flex flex-col w-full gap-8 mb-8`}>
            <BranchDescription
              heading={benefit.heading}
              icon={benefit.icon}
              index={index}
            />
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-lg font-semibold text-foreground/70 mt-4 mb-2">
          Technologies You&apos;ll Learn
        </h2>
        <div className="w-full flex flex-row items-center overflow-x-auto gap-4">
          {technologies.map((tech: any, index: number) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src={tech.imageSrc}
                    alt={tech.topic}
                    width={40}
                    height={40}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-base font-medium">{tech.topic}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>

      {/* Navigate to projects page */}
      <Link href={linkHref}>
        <Button
          className="mt-10 h-10 rounded-md font-bold text-xs
     bg-blue hover:bg-blue/80 gap-2"
        >
          {linkText} <FaExternalLinkAlt />
        </Button>
      </Link>
    </div>
  );
};

export default Branches;

// TO-DO: Move static data elsewhere
const projectBranch = [
  {
    icon: GoProjectSymlink,
    heading: "Partake in coding projects",
    description: "",
  },
  {
    icon: BiRun,
    heading: "Collaborate on sprints",
    description: "",
  },
  {
    icon: GrCloudSoftware,
    heading: "Deploy real software",
    description: "",
  },
];
const interviewBranch = [
  {
    icon: IoMdPeople,
    heading: "Perform mock interviews",
    description: "",
  },
  {
    icon: FaLaptop,
    heading: "Partake in coding comps",
    description: "",
  },
  {
    icon: SiFuturelearn,
    heading: "Learn interview problems",
    description: "",
  },
];
const projectTechnologies = [
  {
    topic: "HTML",
    imageSrc: "/images/tech/html.png",
  },
  {
    topic: "CSS",
    imageSrc: "/images/tech/CSS.webp",
  },
  {
    topic: "TypeScript",
    imageSrc: "/images/tech/TS.webp",
  },
  {
    topic: "React",
    imageSrc: "/images/tech/React.png",
  },
  {
    topic: "NextJS",
    imageSrc: "/images/tech/NextJS.webp",
  },
  {
    topic: "GitHub",
    imageSrc: "/images/tech/github.png",
  },
];
const interviewTechnologies = [
  {
    topic: "Python",
    imageSrc: "/images/tech/python.png",
  },
  {
    topic: "Leetcode",
    imageSrc: "/images/tech/leetcode.png",
  },
  {
    topic: "GitHub",
    imageSrc: "/images/tech/github.png",
  },
  {
    topic: "HackerRank",
    imageSrc: "/images/tech/hackerrank.png",
  },
];

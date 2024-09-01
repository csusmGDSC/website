"use client";

import React from "react";
import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaExternalLinkAlt } from "react-icons/fa";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
      subheading="Choose your desired team at GDSC"
      className="w-full flex flex-col md:flex-row gap-4 items-center mt-10 custom-max-width"
    >
      <BranchCard
        title="Project Team"
        description="Collaborate on a variety of software applications and business solutions"
        descriptionItems={projectBranch}
        technologies={projectTechnologies}
        linkText="VIEW PROJECTS"
        linkHref="/projects"
      />
      <BranchCard
        title="Interview Team"
        description="Improve your technical and soft skills to propel your chances of winning interviews"
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
        <Icon size={40} className="text-primary" />
        <FadeText
          className="text-neutral-400 text-foreground/70"
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
  description,
  technologies,
  linkHref,
  linkText,
}: {
  title: string;
  descriptionItems: any;
  technologies: any;
  description: string;
  linkHref: string;
  linkText: string;
}) => {
  return (
    <div className="rounded-xl p-6 w-full custom-box-shadow dark:bg-primary-foreground">
      <div>
        <h2 className="text-xl text-neutral-700 dark:text-neutral-300 font-semibold mb-2">
          {title}
        </h2>
        <h2 className="text-neutral-400">{description}</h2>
        <hr className="my-4" />
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
              <Tooltip delayDuration={150}>
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
     bg-blue hover:bg-blue/80 gap-2 text-white"
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

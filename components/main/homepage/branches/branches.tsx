"use client";

import React, { useState } from "react";
import styles from "./branches.module.css";
import Container from "@/components/ui/helpers/container";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/inputs/button";
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
    heading: "Partake in coding competitions",
    description: "",
  },
  {
    icon: SiFuturelearn,
    heading: "Learn interview-level problems",
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

/**
 * Component that shows the different teams a member can join
 */
const Branches = () => {
  return (
    <Container
      heading="Branches"
      subheading="Choose your desired development path"
      className="w-full flex flex-col items-center mt-10"
    >
      <div className="custom-max-width flex flex-col md:flex-row gap-6">
        <div className="border rounded-md p-6 w-full shadow-md">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-700 mb-4">
              Project Team
            </h2>
            {projectBranch.map((benefit, index) => (
              <div
                key={index}
                className={`flex flex-row w-full items-center justify-center sm:justify-between gap-8 mb-8`}
              >
                <BranchDescription
                  heading={benefit.heading}
                  icon={benefit.icon}
                />
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-lg font-semibold text-neutral-700 mt-4 mb-2">
              Technologies You&apos;ll Learn
            </h2>
            <div className="w-full flex flex-row items-center overflow-x-auto gap-4">
              {projectTechnologies.map((tech, index) => (
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
          <Link href="/projects">
            <Button className="mt-10 h-10 rounded-md font-bold text-xs bg-blue hover:bg-blue/80 gap-2">
              VIEW PROJECTS <FaExternalLinkAlt />
            </Button>
          </Link>
        </div>
        <div className="border rounded-md p-6 w-full shadow-md space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-700 mb-4">
              Interview Team
            </h2>
            {interviewBranch.map((benefit, index) => (
              <div
                key={index}
                className={`flex flex-row w-full items-center justify-center sm:justify-between gap-8 mb-8`}
              >
                <BranchDescription
                  heading={benefit.heading}
                  icon={benefit.icon}
                />
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-neutral-700 mt-4 mb-2">
              Technologies You&apos;ll Learn
            </h2>
            <div className="w-full flex flex-row items-center overflow-x-auto gap-4">
              {interviewTechnologies.map((tech, index) => (
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
          <Link href="/interview">
            <Button className="mt-10 h-10 rounded-md font-bold text-xs bg-blue hover:bg-blue/80 gap-2">
              VIEW INTERVIEWS <FaExternalLinkAlt />
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

/**
 * Sub-component that lists the description of a specific benefit
 * @param {IconType} icon Image source url or path
 * @param {string} heading The name of the benefit
 */
const BranchDescription = ({
  icon: Icon,
  heading,
}: {
  icon: IconType;
  heading: string;
}) => {
  return (
    <div className={styles.benefitsDescriptionContainer}>
      <div className="flex flex-row items-center gap-4">
        <Icon size={40} />
        <h1 className={styles.benefitsHeading}>{heading}</h1>
      </div>
    </div>
  );
};

export default Branches;

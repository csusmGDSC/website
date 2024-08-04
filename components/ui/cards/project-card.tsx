import { cn, convertToReadableDate } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "../shadcn/button";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";

interface ProjectProps {
  title?: string;
  description?: string;
  websiteUrl?: string;
  githubUrl?: string;
  imageSrc?: string;
  className?: string;
}

/**
 * Component that shows an event card
 * @param {string} title Name of the event
 * @param {string} description Information relating to the event
 * @param {string} websiteUrl URL or path to project
 * @param {string} githubUrl URL or path to github source code
 * @param {string} imageSrc URL or path to image source (View NextJS documentation if using URL)
 * @param {string} className Additional CSS classes to extend to the card
 */
const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  websiteUrl,
  githubUrl,
  imageSrc,
  className,
}) => {
  return (
    <div
      className={cn(
        "rounded-xl custom-box-shadow w-full overflow-hidden",
        className
      )}
    >
      <ProjectImage imageSrc={imageSrc} />
      <div
        className={cn(
          "w-full p-4 flex flex-col justify-between min-h-[200px] dark:bg-primary-foreground"
        )}
      >
        <ProjectInfo title={title} description={description} />
        <ProjectDetails websiteUrl={websiteUrl} githubUrl={githubUrl} />
      </div>
    </div>
  );
};
export default ProjectCard;

/**
 * Sub-component that shows image of event
 * @param {string} imageSrc URL or path to image source (View NextJS documentation if using URL)
 */
const ProjectImage: React.FC<ProjectProps> = ({ imageSrc }) => {
  if (!imageSrc) return null;
  return (
    <div className="w-full overflow-hidden h-[180px]">
      <Image
        src={imageSrc}
        alt={"event-image"}
        width="1920"
        height="1080"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

/**
 * Sub-component that displays information about the event
 * @param {string} title Name of the event
 * @param {string} description Information relating to the event
 */
const ProjectInfo: React.FC<ProjectProps> = ({ title, description }) => {
  return (
    <div className="space-y-2 line-clamp-6">
      <h1 className="font-bold text-foreground/80">{title}</h1>
      <p className="text-xs text-foreground/80">{description}</p>
    </div>
  );
};

/**
 * Sub-component that gives more details on project
 * @param {string} websiteUrl URL or path to project
 * @param {string} githubUrl URL or path to source code
 */
const ProjectDetails: React.FC<ProjectProps> = ({ websiteUrl, githubUrl }) => {
  return (
    <div className="flex flex-row items-center justify-between">
      {websiteUrl && (
        <Link href={websiteUrl} target="_blank">
          <Button
            className={cn(
              "px-3 rounded-lg truncate gap-2 text-center max-w-fit text-[10px] font-semibold text-white flex flex-row items-center bg-blue hover:bg-blue/80"
            )}
          >
            Website <FaExternalLinkAlt size={10} />
          </Button>
        </Link>
      )}
      {githubUrl && (
        <Link href={githubUrl} target="_blank">
          <BsGithub
            className="hover:text-blue hover:cursor-pointer transition"
            size={25}
          />
        </Link>
      )}
    </div>
  );
};

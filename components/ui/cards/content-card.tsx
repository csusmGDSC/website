import { cn, upperCaseFirstLetter } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import { CiCalendar, CiGlobe } from "react-icons/ci";
import { VscSymbolEvent } from "react-icons/vsc";
import { Button } from "../button";
import { GDSCEvent } from "@prisma/client";

export interface ContentProps {
  title?: string;
  description?: string;
  websiteUrl?: string;
  githubUrl?: string;
  imageSrc?: string;
  className?: string;
  date?: string;
  tags?: string[];
  type?: "event" | "project" | "other";
  eventType?: GDSCEvent["type"];
}

/**
 * A reusable content card component that displays an image, title, description, date, tags, and links to a website and GitHub repository.
 *
 * @param {string} title - The title of the content.
 * @param {string} description - A brief description of the content.
 * @param {string} websiteUrl - The URL of the content's website.
 * @param {string} githubUrl - The URL of the content's GitHub repository.
 * @param {string} imageSrc - The source URL of the content's image.
 * @param {string} className - Additional CSS class names to apply to the component.
 * @param {string} date - The date associated with the content.
 * @param {string[]} tags - An array of tags associated with the content.
 * @param {string} type - The type of content.
 * @param {string} eventType - The type of event if type is event.
 * @return {JSX.Element} The content card component.
 */
const ContentCard: React.FC<ContentProps> = ({
  title,
  description,
  websiteUrl,
  githubUrl,
  imageSrc,
  className,
  date,
  tags,
  type,
  eventType,
}) => {
  return (
    <div
      className={cn(
        "rounded-md border border-border w-full overflow-hidden custom-box-shadow",
        className
      )}
    >
      <ContentImage
        imageSrc={imageSrc || "/images/gdsc/short logo light.png"}
      />
      <div
        className={cn(
          "w-full p-4 flex flex-col dark:bg-primary-foreground min-h-0"
        )}
      >
        <div>
          <ContentInfo
            title={title}
            description={description}
            date={date}
            eventType={eventType}
          />
          <ContentTags tags={tags} />
        </div>
        <ContentDetails
          websiteUrl={websiteUrl}
          githubUrl={githubUrl}
          type={type}
        />
      </div>
    </div>
  );
};
export default ContentCard;

/**
 * Renders an image component with the given image source.
 *
 * @param {ContentProps} props - The properties for the image component.
 * @param {string} props.imageSrc - The source of the image.
 * @return {React.ReactElement | null} The rendered image component or null if no image source is provided.
 */
const ContentImage: React.FC<ContentProps> = ({ imageSrc }) => {
  if (!imageSrc) return null;
  return (
    <div className="w-full overflow-hidden h-[180px] border-b border-border">
      <Image
        src={imageSrc}
        alt={"content-image"}
        width="1920"
        height="1080"
        className="w-full h-full object-cover"
        fetchPriority="auto"
      />
    </div>
  );
};

/**
 * Renders the content information with title, description, and date.
 *
 * @param {ContentProps} props - The props containing the title, description, and date.
 * @param {string} props.title - The title of the content.
 * @param {string} props.description - The description of the content.
 * @param {string} props.date - The date of the content.
 * @param {string} props.eventType - The type of event if type is event.
 * @return {ReactElement} The JSX element representing the content information.
 */
const ContentInfo: React.FC<ContentProps> = ({
  title,
  description,
  date,
  eventType,
}) => {
  return (
    <div className="space-y-2 line-clamp-6">
      <h1 className="font-bold text-foreground/90 line-clamp-1">{title}</h1>
      {date && (
        <span className="flex gap-2 items-center">
          <CiCalendar />
          <h2 className="text-sm text-foreground/80">{date}</h2>
        </span>
      )}
      {eventType && (
        <span className="flex gap-2 items-center">
          <CiGlobe />
          <h2 className="text-sm text-foreground/80">
            {upperCaseFirstLetter(eventType)}
          </h2>
        </span>
      )}
      <p className="text-sm text-foreground/70">{description}</p>
    </div>
  );
};

/**
 * Renders a list of tags as a series of small, rounded, and colored spans.
 *
 * @param {ContentProps} tags - The list of tags to be rendered.
 * @return {React.ReactElement} The rendered list of tags.
 */
const ContentTags: React.FC<ContentProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2 my-4">
      {tags?.map((tag, index) => (
        <span
          key={index}
          className="p-1 rounded-sm bg-primary-foreground dark:bg-secondary-foreground/20 text-xs"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

/**
 * Renders a container with links to the website and GitHub repository.
 *
 * @param {ContentProps} props - The props containing the website URL and GitHub URL.
 * @param {string} props.websiteUrl - The URL of the website.
 * @param {string} props.githubUrl - The URL of the GitHub repository.
 * @return {ReactElement|null} The JSX element representing the links, or null if neither URL is provided.
 */
const ContentDetails: React.FC<ContentProps> = ({
  websiteUrl,
  githubUrl,
  type,
}) => {
  if (!websiteUrl && !githubUrl) return null;

  return (
    <div className="flex flex-row items-center gap-2">
      {websiteUrl && (
        <Link href={websiteUrl} target="_blank">
          <Button
            className={cn(
              "px-3 rounded-lg truncate gap-2 text-center max-w-fit text-xs text-primary flex items-center text-white bg-blue hover:bg-blue/70"
            )}
            size="sm"
          >
            <CiGlobe size={25} />
            {type === "event"
              ? "View Event"
              : type === "project"
              ? "View Project"
              : "View Details"}
          </Button>
        </Link>
      )}
      {githubUrl && (
        <Link href={githubUrl} target="_blank">
          <Button
            className={cn(
              "px-3 rounded-lg truncate gap-2 text-center max-w-fit text-xs text-primary flex items-center text-white bg-blue hover:bg-blue/70"
            )}
            size="sm"
          >
            <BsGithub
              className="hover:text-blue hover:cursor-pointer transition"
              size={25}
            />
            Source
          </Button>
        </Link>
      )}
    </div>
  );
};

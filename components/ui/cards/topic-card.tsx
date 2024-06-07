import Image from "next/image";
import React from "react";
import { Button } from "../inputs/button";
import { FaExternalLinkAlt } from "react-icons/fa";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface TopicCardProps {
  topic: string;
  description: string;
  imageSrc?: string;
  className?: string;
  topicLink?: string;
}

/**
 * Component that is general-use and displays information about a topic
 * @param {string} topic The name of the topic
 * @param {string} description Information relating to the topic
 * @param {string} imageSrc URL or path to image source (View NextJS documentation if using URL)
 * @param {string} topicLink URL or path to topic (View NextJS documentation if using URL)
 * @param {string} className CSS class names that extend the default containers
 */
export const HorizontalTopicCard: React.FC<TopicCardProps> = ({
  topic,
  description,
  imageSrc,
  topicLink,
  className,
}) => {
  return (
    <div className="w-full h-[230px] border border-[#CFCFCF] flex flex-row justify-center sm:justify-between items-center px-8 rounded-lg space-x-4 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
      {/* TOPIC CARD CONTENT */}
      <div className="flex flex-col gap-2 items-center sm:items-start">
        {/* DETAILS */}
        <h3 className="text-2xl font-semibold text-[#3F3F3F]">{topic}</h3>
        <p className="text-[#3F3F3F]">{description}</p>

        {/* LINK */}
        {topicLink && (
          <Link href={topicLink}>
            <Button className="mt-auto w-20 h-10 rounded-md font-bold text-xs bg-blue hover:bg-blue/80 gap-2">
              VIEW <FaExternalLinkAlt />
            </Button>
          </Link>
        )}
      </div>

      {/* IMAGE OF TOPIC CARD */}
      {imageSrc && (
        <Image
          src={imageSrc}
          alt="topic"
          width={120}
          height={120}
          className="hidden sm:block"
        />
      )}
    </div>
  );
};

/**
 * Component that is general-use and displays information about a topic
 * @param {string} topic The name of the topic
 * @param {string} description Information relating to the topic
 * @param {string} imageSrc URL or path to image source (View NextJS documentation if using URL)
 * @param {string} topicLink URL or path to topic (View NextJS documentation if using URL)
 * @param {string} className CSS class names that extend the default containers
 */
export const VerticalTopicCard: React.FC<TopicCardProps> = ({
  topic,
  description,
  imageSrc,
  topicLink,
  className,
}) => {
  return (
    <div
      className={cn(
        "w-full border border-[#CFCFCF] flex flex-col items-center p-4 pr-8  rounded-lg space-x-4 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1",
        className
      )}
    >
      {/* IMAGE OF TOPIC CARD */}
      <div className="w-full flex flex-row items-center px-4 mb-4">
        {imageSrc && (
          <Image src={imageSrc} alt="topic" width={60} height={60} />
        )}
      </div>

      {/* TOPIC CARD CONTENT */}
      <div className="flex flex-col gap-2 items-center justify-between h-full">
        {/* DETAILS */}
        <div>
          <h3 className="text-2xl font-semibold text-[#3F3F3F] text-center">
            {topic}
          </h3>
          <p className="text-[#3F3F3F] text-center">{description}</p>
        </div>

        {/* LINK */}
        {topicLink && (
          <Link href={topicLink} className="w-full">
            <Button className="w-full rounded-md text-xs bg-blue hover:bg-blue/80">
              Learn More
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

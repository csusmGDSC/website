import TitleHeader from "@/components/ui/title-header";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Container from "@/components/ui/container";
import { FaExternalLinkAlt } from "react-icons/fa";
import ContentCard from "@/components/ui/cards/content-card";

const interviewTopics = [
  {
    topic: "Data Structures",
    description:
      "Understanding fundamental data structures like arrays, linked lists, trees, etc.",
    imageSrc: "/images/interview/1.jpeg",
  },
  {
    topic: "Algorithms",
    description:
      "Learning essential algorithms such as sorting, searching, graph algorithms, etc.",
    imageSrc: "/images/interview/4.jpeg",
  },
  {
    topic: "Time Complexity",
    description:
      "Analyzing and understanding the time complexity of algorithms and operations.",
    imageSrc: "/images/interview/2.jpeg",
  },
  {
    topic: "System Design",
    description:
      "Architecting scalable software systems for optimal performance and reliability.",
    imageSrc: "/images/interview/3.png",
  },
];
const InterviewPreparation = () => {
  return (
    <>
      <TitleHeader heading="Interview Preparation" />
      <p className="text-sm px-2 md:px-0 mb-8 w-full text-primary/80 text-left">
        Joining GDSC-CSUSM team will allow you to participate in various
        projects and resources designed to enhance your interview skills. Both
        individual and collaborative projects are available to help you learn
        and apply technical skills that you can showcase on your resume.
      </p>
      <Container
        heading="Mock Interviews"
        subheading="Explore key areas for mock interviews and technical discussions"
        padding={false}
        className="flex flex-col items-center justify-center custom-max-width mt-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {interviewTopics.map((interviewTopic, index) => (
            // Individual project card
            <ContentCard
              key={index}
              title={interviewTopic.topic}
              description={interviewTopic.description}
              imageSrc={interviewTopic.imageSrc}
            />
          ))}
        </div>
        <Link href="#">
          <Button className="mt-10 h-10 rounded-md font-bold text-xs bg-blue hover: bg-blue/80 gap-2">
            SCHEDULE AN INTERVIEW <FaExternalLinkAlt />
          </Button>
        </Link>
      </Container>
    </>
  );
};
export default InterviewPreparation;

import TitleHeader from "@/components/ui/title-header";
import React from "react";
import styles from "./interview.module.css";
import { Button } from "@/components/ui/inputs/button";
import Link from "next/link";
import Container from "@/components/ui/helpers/container";
import { FaExternalLinkAlt } from "react-icons/fa";
import { HorizontalTopicCard } from "@/components/ui/cards/topic-card";

const interviewTopics = [
  {
    topic: "Data Structures",
    description: "Understanding fundamental data structures like arrays, linked lists, trees, etc.",
    imageSrc: "/images/google/ecosystem-mobile.png",
  },
  {
    topic: "Algorithms",
    description: "Learning essential algorithms such as sorting, searching, graph algorithms, etc.",
    imageSrc: "/images/google/ecosystem-web.png",
  },
  {
    topic: "Time Complexity",
    description: "Analyzing and understanding the time complexity of algorithms and operations.",
    imageSrc: "/images/google/ecosystem-ai.png",
  },
  {
    topic: "System Design",
    description: "Architecting scalable software systems for optimal performance and reliability.",
    imageSrc: "/images/google/ecosystem-cloud.png",
  },
];
const InterviewPreparation = () => {
  return (
    <>
      <TitleHeader heading="Interview Preparation" />
      <p className={styles.descriptionText}>Joining GDSC-CSUSM team will allow you to participate in
        various projects and resources designed to enhance your interview
        skills. Both individual and collaborative projects are available to help
        you learn and apply technical skills that you can showcase on your
        resume.
      </p>
      <Container
        heading="Mock Interviews"
        subheading="Explore key areas for mock interviews and technical discussions"
        padding={false}
        className={styles.centerContent}
      >
        <div className={styles.interviewTopicsGridLayout}>
          {interviewTopics.map((interviewTopic, index) => (
            // Individual project card
            <HorizontalTopicCard
              key={index}
              topic={interviewTopic.topic}
              description={interviewTopic.description}
              imageSrc={interviewTopic.imageSrc}
            />
          ))}
        </div>
        <Link href="#">
          <Button className={styles.button}>
            SCHEDULE AN INTERVIEW <FaExternalLinkAlt />
          </Button>
        </Link>
      </Container>
    </>
  );
};
export default InterviewPreparation
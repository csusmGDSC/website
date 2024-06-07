import CardGrid from "@/components/ui/card-grid";
import EventCard from "@/components/ui/cards/event-card";
import TitleHeader from "@/components/ui/title-header";
import React from "react";
import styles from "./projects.module.css";

const exampleProjects = [
  {
    title: "Routify",
    description:
      "City pathfinding visualizer. Used to learn fundamental graph traversal algorithms.",
  },
  {
    title: "Reside",
    description:
      "Real estate website platform built for college students. Find other roommates, cheap rental costs, and message real estate agents.",
  },
  {
    title: "WebWizzard",
    description:
      "Chrome extension AI chat bot. Use anywhere on the web and ask it questions about the web page your using.",
  },
  {
    title: "Forestify",
    description:
      "Motivating arid communities to combat desertification through proactive envrionemtnal restoration and protection.",
  },
];

const ProjectList = () => {
  return (
    <section>
      <TitleHeader heading="Projects" />
      <CardGrid placeholder="There is currently no projects at the moment.">
        {exampleProjects.map((e, index) => (
          <EventCard
            title={e.title}
            description={e.description}
            key={index}
            className={styles.eventCardWidths}
          />
        ))}
      </CardGrid>
    </section>
  );
};

export default ProjectList;

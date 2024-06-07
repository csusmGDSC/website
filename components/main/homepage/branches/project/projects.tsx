import { Button } from "@/components/ui/inputs/button";
import Container from "@/components/ui/helpers/container";
import {
  HorizontalTopicCard,
  VerticalTopicCard,
} from "@/components/ui/cards/topic-card";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import styles from "./projects.module.css";
import Link from "next/link";

// TO-DO: Move static data else-where
const projects = [
  {
    topic: "Mobile",
    description: "Develop applications for a range of audiences",
    imageSrc: "/images/google/ecosystem-mobile.png",
    topicLink: "/projects",
  },
  {
    topic: "Web",
    description: "Create, fast, secure sites and apps for the web",
    imageSrc: "/images/google/ecosystem-web.png",
    topicLink: "/projects",
  },
  {
    topic: "Cybersecurity",
    description: "Construct security & safety solutions",
    imageSrc: "/images/google/ecosystem-ai.png",
    topicLink: "/projects",
  },
  {
    topic: "Cloud & APIs",
    description: "Simplify and scale end-to-end development",
    imageSrc: "/images/google/ecosystem-cloud.png",
    topicLink: "/projects",
  },
];

// TO-DO: Move static data else-where
const technologies = [
  {
    topic: "HTML",
    description:
      "The standard markup language for documents designed to be displayed in a web browser",
    imageSrc: "/images/tech/html.png",
  },
  {
    topic: "CSS",
    description:
      "Style sheet language used for specifying the presentation and styling of a document",
    imageSrc: "/images/tech/CSS.webp",
  },
  {
    topic: "TypeScript",
    description:
      "Programming language that adds static typing with optional type annotations to JavaScript",
    imageSrc: "/images/tech/TS.webp",
  },
  {
    topic: "React",
    description:
      "Front-end JavaScript library for building user interfaces based on components",
    imageSrc: "/images/tech/React.png",
  },
  {
    topic: "NextJS",
    description:
      "Framework with React-based web applications with server-side rendering and static website generation",
    imageSrc: "/images/tech/NextJS.webp",
  },
  {
    topic: "Vercel",
    description: "American cloud platform as a service company",
    imageSrc: "/images/tech/Vercel.svg",
  },
  {
    topic: "Google Cloud",
    description:
      "Cloud computing services that provides cloud services including computing, data storage, alongside a set of management tools",
    imageSrc: "/images/tech/Google Cloud.png",
  },
  {
    topic: "MongoDB",
    description:
      "No-SQL database that uses JSON-like documents with optional schemas",
    imageSrc: "/images/tech/MongoDB.svg",
  },
];

/**
 * Sub-component that shows the current technologies and skills that GDSC offers with their projects
 */
const Projects = () => {
  return (
    <>
      {/* Different Types Of Projects */}
      <Container
        heading="Project Team"
        subheading="Choose your development path with different continuous projects"
        padding={false}
        className={styles.centerContent}
      >
        <div className={styles.projectsGridLayout}>
          {projects.map((project, index) => (
            // Individual project card
            <HorizontalTopicCard
              key={index}
              topic={project.topic}
              description={project.description}
              imageSrc={project.imageSrc}
              topicLink={project.topicLink}
            />
          ))}
        </div>
      </Container>

      {/* Skills that can be learned from partaking in projects */}
      <Container
        heading="Technologies You'll Learn"
        subheading="Languages, Libraries, and Frameworks that you'll encounter as a project member"
        className={styles.centerWithFlex}
      >
        <div className={styles.skillsGridLayout}>
          {technologies.map((tech, index) => (
            // Individual skill card
            <VerticalTopicCard
              key={index}
              topic={tech.topic}
              description={tech.description}
              imageSrc={tech.imageSrc}
              className="[&_*]:justify-center"
            />
          ))}
        </div>

        {/* Navigate to projects page */}
        <Link href="/projects">
          <Button className={styles.button}>
            VIEW PROJECTS <FaExternalLinkAlt />
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default Projects;

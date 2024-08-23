import CardGrid from "@/components/ui/cards/card-grid";
import ContentCard from "@/components/ui/cards/content-card";
import TitleHeader from "@/components/ui/title-header";
import React from "react";

const exampleProjects = [
  {
    title: "Routify",
    description:
      "City pathfinding visualizer. Used to learn fundamental graph traversal algorithms such as BFS, DFS, or A* Search.",
    websiteUrl: "https://www.routify.cc",
    githubUrl: "https://www.github.com/jaedonspurlock01/routify",
    imageSrc: "/images/projects/routify.gif",
    tags: [
      "JavaScript",
      "NextJS",
      "ReactJS",
      "ThreeJS",
      "Nominatim API",
      "Overpass API",
      "Amazon S3",
    ],
    date: "Jan 2024 - Mar 2024",
  },
];

const ProjectList = () => {
  return (
    <section>
      <TitleHeader heading="Projects" />
      <CardGrid placeholder="There is currently no projects at the moment.">
        {exampleProjects.map((e, index) => (
          <ContentCard
            title={e.title}
            description={e.description}
            key={index}
            className="sm:!w-[calc(50%-1rem)] md:!w-[calc(33.333%-1rem)]"
            imageSrc={e.imageSrc}
            websiteUrl={e.websiteUrl}
            githubUrl={e.githubUrl}
            tags={e.tags}
            date={e.date}
            type="project"
          />
        ))}
      </CardGrid>
    </section>
  );
};

export default ProjectList;

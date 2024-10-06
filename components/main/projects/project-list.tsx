import CardGrid from "@/components/ui/cards/card-grid";
import ContentCard from "@/components/ui/cards/content-card";
import TitleHeader from "@/components/ui/title-header";
import React from "react";



const ProjectList = ({projects}: any) => {
  return (
    <section>
      <TitleHeader heading="Projects" />
      <CardGrid placeholder="There is currently no projects at the moment.">
        {projects.map((e, index) => (
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

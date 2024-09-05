import ProjectList from "@/components/main/projects/project-list";
import ProjectRequirements from "@/components/main/projects/project-requirements";
import PageHeader from "@/components/ui/page-header";
import React from "react";

/**
 * A functional component that renders the Projects page.
 *
 * @return {JSX.Element} The JSX element representing the Projects page.
 */
const Projects = () => {
  return (
    <main className="w-full mt-[4.5rem]">
      {/* PAGE HEADER */}
      <PageHeader
        title="Projects"
        backgroundImageSrc="/images/background-1.png"
      />

      {/* PAGE CONTENT */}
      <div className="w-full flex-center-col">
        <div className="custom-max-width space-y-10">
          <ProjectRequirements />
          <ProjectList />
        </div>
      </div>
    </main>
  );
};

export default Projects;

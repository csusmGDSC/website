import PageHeader from "@/components/ui/page-header";
import React from "react";
import InterviewPreparation from "@/components/main/interview/interview-preparation";
import InterviewCompetitions from "@/components/main/interview/interview-competitions";
const Interview = () => {
  return (
    <main className="w-full mt-[4.5rem]">
      {/* PAGE HEADER */}
      <PageHeader
        title="Interview"
        subTitle="Explore insightful sessions and tips for interview preparation"
        backgroundImageSrc="/images/background-2.jpeg"
      />

      {/* PAGE CONTENT */}
      <div className="w-full flex-center-col">
        <div className="custom-max-width">
          <InterviewPreparation />
          <InterviewCompetitions />
        </div>
      </div>
    </main>
  );
};

export default Interview;

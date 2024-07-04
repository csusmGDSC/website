import AccordionGroup from "@/components/ui/accordion-group";
import TitleHeader from "@/components/ui/title-header";
import React from "react";

const group1: [string, string][] = [
  [
    "Q: Who can join GDSC?",
    "A: GDSC is open to all students regardless of program! Don't worry about not having a computer science or engineering background; GDSC invites all students who are interested in learning about technology, getting involved in their community, and meeting new people, whether you're studying English, the arts, political science, biology, or anything else!",
  ],
  [
    "Q: How do I become a club member?",
    "A: Interested in getting involved with GDSC CSUSM? Check out our events page to stay updated and register for all of our upcoming events and initiatives.",
  ],
  [
    "Q: Why should I join GDSC CSUSM?",
    "A: By getting involved with GDSC CSUSM, you`ll gain access to a multitude of resources and opportunities that can help you grow your skills and network for a career in tech and beyond! The workshops we host will help you develop sought-after skills in the tech industry, helping you upgrade your resume, and our general meetings will keep you up-to-date with hot news in tech and think critically about the industry by engaging in thoughtful conversation with peers. You`ll also expand your network by meeting like-minded students as well as industry professionals and recruiters from various tech companies, helping you gain insightful advice and mentorship, career opportunities, and valuable connections to your own campus community!",
  ],
  [
    "Q: I'm not A CS/SE/CIS/CE major, is there anything for me?",
    "A: Yes! Stay tuned for our open source initiative, where you'll gain similar experience working on established community projects!",
  ],
];

const ProjectRequirements = () => {
  return (
    <section>
      <TitleHeader heading="Contributions" />
      <p className="text-sm px-2 md:px-0 mb-8 w-full text-center sm:text-left">
        Joining GDSC-CSUSM will allow you to partake in various community
        projects, where you can learn a variety of technical skills that you can
        apply on your resume. Both member&apos;s individual projects, as well as
        the club projects are listed here that exist at GDSC-CSUSM.
      </p>
      <TitleHeader heading="Frequently Asked Questions" />
      <AccordionGroup
        title="Contributing to community projects"
        accordionTuples={group1}
      />
    </section>
  );
};

export default ProjectRequirements;

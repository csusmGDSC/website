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
    "Q: What is the commitment like to join GDSC CSUSM?",
    "A: We understand that students have busy lives with school, work, and other responsibilities. We encourage you to attend any GDSC event that you’re interested in, but you are not obligated to attend all of our events to maintain membership in our group–your commitment level is up to you! We try our best to schedule our events and initiatives around major assignments and tests that students in the tech community may have so you can come out to as many events as possible!",
  ],
];

const group2: [string, string][] = [
  [
    "Q: What is GDSC?",
    "A: GDSC stands for Google Developer Student Clubs, student-led groups sponsored by Google for university students interested in Google Developer technologies. Universities around the world can have their own GDSC chapter where students will learn and grow their knowledge about technology, meet like-minded peers in their community, try new ideas, and tackle real-world problems. Students can also connect with peers across the GDSC chapters and Google Developer Community and build their network through events and initiatives hosted by various GDSC chapters.",
  ],
  [
    "Q: What does GDSC CSUSM do?",
    "A: The GDSC CSUSM hosts a variety of workshops and initiatives across all areas of technology!",
  ],
];

const group3: [string, string][] = [
  [
    "Q: Can I request certain events/initiatives to be hosted by GDSC CSUSM?",
    "A: We really value feedback and suggestions from the community, and you can definitely reach out to us with any ideas of events and initiatives that you’d like to see. We can’t promise that we’ll be able to accommodate the event (ie. our team might not have the necessary skills/knowledge, we may not be able to fit it into our current schedule for the year, etc.), but we’ll do our best!",
  ],
];

const FAQ = () => {
  return (
    <section className="w-full flex-center-col">
      <div className="custom-max-width space-y-10">
        <TitleHeader heading="Frequently Asked Questions" />
        <AccordionGroup
          title="Getting Involved with GDSC"
          accordionTuples={group1}
        />
        <AccordionGroup title="About GDSC" accordionTuples={group2} />
        <AccordionGroup title="Events & Initiatives" accordionTuples={group3} />
      </div>
    </section>
  );
};

export default FAQ;

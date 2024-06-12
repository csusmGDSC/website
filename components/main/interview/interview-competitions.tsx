import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/helpers/carousel";
import React from "react";
import styles from "./interview.module.css";
import EventCard from "@/components/ui/cards/event-card";
import Container from "@/components/ui/helpers/container";
import AvatarCard from "@/components/ui/cards/avatar-card";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "@/components/ui/inputs/button";

const futureCompetitions = [
  {
    tags: ["Leetcode", "HackerRank"],
    title: "Leetcode & HackerRank Competition",
    description: "Participate in coding challenges on Leetcode and HackerRank.",
    date: new Date(2024, 7, 31, 10, 30, 0),
  },
  {
    tags: ["Leetcode", "HackerRank"],
    title: "Leetcode & HackerRank Competition",
    description: "Participate in coding challenges on Leetcode and HackerRank.",
    date: new Date(2024, 8, 11, 15, 30, 0),
  },
  {
    tags: ["Leetcode", "HackerRank"],
    title: "Leetcode & HackerRank Competition",
    description: "Participate in coding challenges on Leetcode and HackerRank.",
    date: new Date(2024, 9, 12, 11, 30, 0),
  },
  {
    tags: ["Leetcode", "HackerRank"],
    title: "Leetcode & HackerRank Competition",
    description: "Participate in coding challenges on Leetcode and HackerRank.",
    date: new Date(2024, 10, 20, 14, 0, 0),
  },
  {
    tags: ["Leetcode", "HackerRank"],
    title: "Leetcode & HackerRank Competition",
    description: "Participate in coding challenges on Leetcode and HackerRank.",
    date: new Date(2024, 11, 5, 9, 30, 0),
  },
  {
    tags: ["Leetcode", "HackerRank"],
    title: "Leetcode & HackerRank Competition",
    description: "Participate in coding challenges on Leetcode and HackerRank.",
    date: new Date(2024, 12, 10, 13, 0, 0),
  },
  {
    tags: ["Leetcode", "HackerRank"],
    title: "Leetcode & HackerRank Competition",
    description: "Participate in coding challenges on Leetcode and HackerRank.",
    date: new Date(2025, 1, 15, 16, 30, 0),
  },
  {
    tags: ["Leetcode", "HackerRank"],
    title: "Leetcode & HackerRank Competition",
    description: "Participate in coding challenges on Leetcode and HackerRank.",
    date: new Date(2025, 2, 22, 10, 0, 0),
  },
  {
    tags: ["Leetcode", "HackerRank"],
    title: "Leetcode & HackerRank Competition",
    description: "Participate in coding challenges on Leetcode and HackerRank.",
    date: new Date(2025, 3, 30, 14, 30, 0),
  },
];

const leetcodeTeam = {
  "Interview Team": [
    {
      name: "Alexandra Collins",
      role: "Computer Science Major",
      linkedinLink: "",
      gitHubLink: "",
      instagramLink: "",
      imageSrc: "/images/test/fake-people/1.jpg",
    },
    {
      name: "Benjamin Harper",
      role: "Project",
      linkedinLink: "",
      gitHubLink: "",
      instagramLink: "",
      imageSrc: "/images/test/fake-people/2.jpg",
    },
    {
      name: "Catherine Reed",
      role: "Project",
      linkedinLink: "",
      gitHubLink: "",
      instagramLink: "",
      imageSrc: "/images/test/fake-people/3.jpg",
    },
    {
      name: "David Turner",
      role: "Interview",
      linkedinLink: "",
      gitHubLink: "",
      instagramLink: "",
      imageSrc: "/images/test/fake-people/4.jpg",
    },
  ],
}
const InterviewCompetitions = () => {
  return (
    <>
      <Container
        heading="Future Competitions"
        subheading="Check out upcoming competitions"
        className={styles.container}
      >
        <Carousel>
          <CarouselContent className="py-1">
            {futureCompetitions.map((competition, index) => (
              <CarouselItem key={index} className={styles.carouselItem}>
                <EventCard
                  title={competition.title}
                  description={competition.description}
                  date={competition.date}
                  imageSrc="/images/google/card-background-template.jpg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Container heading="Interview Team" className={styles.team}>
          {leetcodeTeam["Interview Team"].map((member, index) => (
            <AvatarCard
              key={index}
              name={member.name}
              role={member.role}
              linkedinLink={member.linkedinLink}
              gitHubLink={member.gitHubLink}
              instagramLink={member.instagramLink}
              imageSrc={member.imageSrc}
            />
          ))}
        </Container>
        <div className="flex flex-col items-center">
        <Link href="#">
          <Button className={styles.button}>
            JOIN THE TEAM <FaExternalLinkAlt />
          </Button>
        </Link>
        </div>
      </Container>
    </>
  );
};
export default InterviewCompetitions
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import Container from "@/components/ui/container";
import ContentCard from "@/components/ui/cards/content-card";
import { formatDate } from "date-fns";

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

const InterviewCompetitions = () => {
  return (
    <Container
      heading="Future Competitions"
      subheading="Check out upcoming competitions"
      className="flex flex-col items-center justify-center"
    >
      <Carousel className="custom-max-width">
        <CarouselContent className="py-1">
          {futureCompetitions.map((competition, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 2xl:basics-[25%] flex flex-col items-center mt-10"
            >
              <ContentCard
                title={competition.title}
                description={competition.description}
                date={formatDate(competition.date, "PPP")}
                imageSrc="/images/google/card-background-template.jpg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
};
export default InterviewCompetitions;

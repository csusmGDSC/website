import AvatarCard from "@/components/ui/cards/avatar-card";
import Container from "@/components/ui/container";
import React from "react";

/**
 * Component that shows the GDSC-CSUSM's current team members
 */
const Team = () => {
  return (
    <Container heading="GDSC-CSUSM Team 2024" className="custom-max-width">
      <Container className="flex flex-row flex-wrap items-center justify-center gap-4">
        {team.map((member, index) => (
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
    </Container>
  );
};

export default Team;

// TO-DO: Move static data else-where
const team = [
  {
    name: "Jaedon",
    role: "Project",
    linkedinLink: "",
    gitHubLink: "",
    instagramLink: "",
    imageSrc: "/images/team/jaedonspurlock.jpg",
  },
  {
    name: "Josh",
    role: "Project",
    linkedinLink: "",
    gitHubLink: "",
    instagramLink: "",
    imageSrc: "",
  },
  {
    name: "Thanh",
    role: "Interview",
    linkedinLink: "",
    gitHubLink: "",
    instagramLink: "",
    imageSrc: "",
  },
  {
    name: "Jacob",
    role: "Interview",
    linkedinLink: "",
    gitHubLink: "",
    instagramLink: "",
    imageSrc: "",
  },
  {
    name: "Gabriel",
    role: "Project",
    linkedinLink: "",
    gitHubLink: "",
    instagramLink: "",
    imageSrc: "",
  },
  {
    name: "Chris",
    role: "Project",
    linkedinLink: "",
    gitHubLink: "",
    instagramLink: "",
    imageSrc: "",
  },
  {
    name: "Mauro",
    role: "Project",
    linkedinLink: "",
    gitHubLink: "",
    instagramLink: "",
    imageSrc: "",
  },
  {
    name: "Max",
    role: "Interview",
    linkedinLink: "",
    gitHubLink: "",
    instagramLink: "",
    imageSrc: "",
  },
  {
    name: "Aaron",
    role: "Interview",
    linkedinLink: "",
    gitHubLink: "",
    instagramLink: "",
    imageSrc: "",
  },
];

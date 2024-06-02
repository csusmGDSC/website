import AvatarCard from "@/components/ui/cards/avatar-card";
import Container from "@/components/ui/helpers/container";
import React from "react";
import styles from "./team.module.css";

// TO-DO: Move static data else-where
const team = {
  "GDSC Lead": [
    {
      name: "Alexandra Collins",
      role: "President",
      linkedinLink: "",
      gitHubLink: "",
      instagramLink: "",
      imageSrc: "/images/test/fake-people/1.jpg",
    },
  ],
  "Team Leads": [
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
    {
      name: "Elena Martinez",
      role: "Project",
      linkedinLink: "",
      gitHubLink: "",
      instagramLink: "",
      imageSrc: "/images/test/fake-people/5.jpg",
    },
  ],
  Associates: [
    {
      name: "Frederick Lawson",
      role: "Project",
      linkedinLink: "",
      gitHubLink: "",
      instagramLink: "",
      imageSrc: "",
    },
    {
      name: "Gabriella Cooper",
      role: "Project",
      linkedinLink: "",
      gitHubLink: "",
      instagramLink: "",
      imageSrc: "",
    },
    {
      name: "Henry Foster",
      role: "Project",
      linkedinLink: "",
      gitHubLink: "",
      instagramLink: "",
      imageSrc: "/images/test/fake-people/8.jpg",
    },
    {
      name: "Isabella Warren",
      role: "Project",
      linkedinLink: "",
      gitHubLink: "",
      instagramLink: "",
      imageSrc: "/images/test/fake-people/9.jpg",
    },
    {
      name: "Jacob Simmons",
      role: "Interview",
      linkedinLink: "",
      gitHubLink: "",
      instagramLink: "",
      imageSrc: "/images/test/fake-people/10.jpg",
    },
    {
      name: "Katherine Pierce",
      role: "Project",
      linkedinLink: "",
      gitHubLink: "",
      instagramLink: "",
      imageSrc: "",
    },
    {
      name: "Liam Bennett",
      role: "Project",
      linkedinLink: "",
      gitHubLink: "",
      instagramLink: "",
      imageSrc: "/images/test/fake-people/12.jpg",
    },
    {
      name: "Madison Brooks",
      role: "Interview",
      linkedinLink: "",
      gitHubLink: "",
      instagramLink: "",
      imageSrc: "/images/test/fake-people/13.jpg",
    },
    {
      name: "Nathaniel Coleman",
      role: "Interview",
      linkedinLink: "",
      gitHubLink: "",
      instagramLink: "",
      imageSrc: "/images/test/fake-people/14.jpg",
    },
  ],
  Advisors: [
    {
      name: "Olivia Sanders",
      role: "Advisor",
      linkedinLink: "",
      gitHubLink: "",
      instagramLink: "",
      imageSrc: "/images/test/fake-people/15.jpg",
    },
    {
      name: "Patrick Howard",
      role: "Advisor",
      linkedinLink: "",
      gitHubLink: "",
      instagramLink: "",
      imageSrc: "",
    },
  ],
};

/**
 * Component that shows the GDSC-CSUSM's current team members
 */
const Team = () => {
  return (
    <Container heading="GDSC-CSUSM Team 2024" className={styles.team}>
      <Container subheading="GDSC Leads" className={styles.innerTeam}>
        {team["GDSC Lead"].map((member, index) => (
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
      <Container subheading="Team Leads" className={styles.innerTeam}>
        {team["Team Leads"].map((member, index) => (
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
      <Container subheading="Associates" className={styles.innerTeam}>
        {team["Associates"].map((member, index) => (
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
      <Container subheading="Advisors" className={styles.innerTeam}>
        {team["Advisors"].map((member, index) => (
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

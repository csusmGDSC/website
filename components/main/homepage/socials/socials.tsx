import { VerticalTopicCard } from "@/components/ui/cards/topic-card";
import Container from "@/components/ui/helpers/container";
import React from "react";
import styles from "./socials.module.css";
import { cn } from "@/lib/utils";

// TO-DO: Move static data else-where
const socials = [
  {
    topic: "YouTube",
    description:
      "Subscribe to join a community of creative developers and learn the latest in Google technology",
    imageSrc: "/images/socials/youtube.webp",
    topicLink: "https://www.instagram.com/gdsc.csusm/",
  },
  {
    topic: "Instagram",
    description:
      "Follow and discover developer resources, community events, and inspirational stories",
    imageSrc: "/images/socials/instagram.png",
    topicLink: "https://www.instagram.com/gdsc.csusm/",
  },
  {
    topic: "LinkedIn",
    description:
      "Join a community of creative developers and learn how to use the latest in technology",
    imageSrc: "/images/socials/linkedin.png",
    topicLink: "https://www.instagram.com/gdsc.csusm/",
  },
  {
    topic: "X",
    description:
      "Join the conversation to discover the latest resources, events, and announcements",
    imageSrc: "/images/socials/X.svg",
    topicLink: "https://x.com/dsccsusm?lang=en",
  },
  {
    topic: "CSUSM",
    description:
      "University in San Marcos that's part of the Cal State System.",
    imageSrc: "/images/csusm.jpg",
    topicLink: "https://www.csusm.edu/index.html",
  },
  {
    topic: "Another Social",
    description:
      "There should be another social link here so that it don't look awkward.",
    imageSrc: "/images/socials/X.svg",
    topicLink: "https://x.com/dsccsusm?lang=en",
  },
];

/**
 * Component that shows the socials of GDSC-CSUSM
 */
const Socials = () => {
  return (
    <Container
      heading="Follow GDSC-CSUSM"
      className={cn(styles.container, "custom-max-width")}
    >
      <div className={styles.gridLayout}>
        {socials.map((social, index) => (
          <VerticalTopicCard
            key={index}
            topic={social.topic}
            description={social.description}
            imageSrc={social.imageSrc}
            topicLink={social.topicLink}
            className={styles.innerCardLayout}
          />
        ))}
      </div>
    </Container>
  );
};

export default Socials;

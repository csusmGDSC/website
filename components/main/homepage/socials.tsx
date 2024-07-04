import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";

/**
 * Component that shows the socials of GDSC-CSUSM
 */
const Socials = () => {
  return (
    <Container
      heading="Follow GDSC-CSUSM"
      className="flex flex-col items-center justify-center mt-10 custom-max-width"
    >
      <div className="flex flex-wrap gap-4">
        {socials.map((social, index) => (
          <a key={index} href={social.topicLink} target="_blank">
            <span className="border w-20 h-20 rounded-lg flex items-center justify-center hover:shadow-md transition-shadow">
              <Image src={social.imageSrc} alt="topic" width={35} height={35} />
            </span>
          </a>
        ))}
      </div>
    </Container>
  );
};

export default Socials;

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
];

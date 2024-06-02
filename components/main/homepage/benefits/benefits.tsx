import Container from "@/components/ui/helpers/container";
import Image from "next/image";
import React from "react";
import styles from "./benefits.module.css";

// TO-DO: Move static data elsewhere
const benefits = [
  {
    imageSrc: "/images/test/workshop-test-3.jpg",
    IconImageSrc: "/images/google/explore-interests-eyebrow.png",
    heading: "Propel Your Development",
    description:
      "Improve technical skills to advance your career and drive impactful projects",
  },
  {
    imageSrc: "/images/test/workshop-test-1.jpg",
    IconImageSrc: "/images/google/technical-skills-eyebrow.png",
    heading: "Elevate Your Network",
    description:
      "Build meaningful relationships and expand your professional circle through engaging club activities.",
  },
  {
    imageSrc: "/images/test/workshop-test-2.jpg",
    IconImageSrc: "/images/google/find-community-eyebrow.png",
    heading: "Join a Community",
    description:
      "Connect with like-minded individuals to collaborate on cutting-edge projects and share knowledge.",
  },
];

/**
 * Component that displays benefits of club activities
 * TO-DO: Fix ugly styling
 */
const Benefits = () => {
  return (
    <div className="group mt-20">
      {benefits.map((benefit, index) => (
        <Container
          key={index}
          // For each even benefit, have a white background, otherwise a gray background
          className={`${
            index % 2 === 0 ? "bg-[#f9f9f9]" : ""
          } flex flex-col items-center py-5`}
          padding={false}
        >
          <div
            // For each even benefit, have the image on the left, otherwise on the right
            className={`flex flex-row ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            } md:max-w-[90%] xl:max-w-[60%] w-full items-center justify-center sm:justify-between gap-8`}
          >
            <RoundedImage src={benefit.imageSrc} />
            <BenefitDescription
              heading={benefit.heading}
              description={benefit.description}
              imageSrc={benefit.IconImageSrc}
            />
          </div>
        </Container>
      ))}
    </div>
  );
};

/**
 * Rounded image component that is a fixed sized image with rounded corners
 * @param {string} src Image source url or path
 */
const RoundedImage = ({ src }: { src: string }) => {
  return (
    <div className="hidden sm:block overflow-hidden w-1/2 h-[300px] rounded-lg">
      <Image
        src={src}
        alt="benefits"
        width="1920"
        height="1080"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

/**
 * Sub-component that lists the description of a specific benefit
 * @param {string} imageSrc Image source url or path
 * @param {string} heading The name of the benefit
 * @param {string} description The description of the benefit
 */
const BenefitDescription = ({
  imageSrc,
  heading,
  description,
}: {
  imageSrc: string;
  heading: string;
  description: string;
}) => {
  return (
    <div className={styles.benefitsDescriptionContainer}>
      <Image src={imageSrc} alt="Benefit Icon" width="80" height="80" />
      <h1 className={styles.benefitsHeading}>{heading}</h1>
      <p className={styles.benefitsDescription}>{description}</p>
    </div>
  );
};

export default Benefits;

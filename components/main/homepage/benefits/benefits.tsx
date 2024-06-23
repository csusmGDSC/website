import Container from "@/components/ui/helpers/container";
import Image from "next/image";
import React from "react";
import styles from "./benefits.module.css";
import { Button } from "@/components/ui/inputs/button";
import { FaExternalLinkAlt } from "react-icons/fa";

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
      <Container
        // For each even benefit, have a white background, otherwise a gray background
        className="relative overflow-hidden flex flex-col text-center sm:text-left sm:flex-row custom-max-width gap-10 border rounded-lg px-6 py-10 shadow-md"
        padding={false}
      >
        <div>
          <h1 className="text-3xl font-bold text-neutral-700">
            Join a community of passionate developers.
          </h1>
          <RoundedImage src="/images/screenshot-dark.png" />
        </div>
        <div className="space-y-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex flex-row w-full items-center justify-center sm:justify-between gap-8`}
            >
              <BenefitDescription
                heading={benefit.heading}
                description={benefit.description}
                imageSrc={benefit.IconImageSrc}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

/**
 * Rounded image component that is a fixed sized image with rounded corners
 * @param {string} src Image source url or path
 */
const RoundedImage = ({ src }: { src: string }) => {
  return (
    <div className="hidden sm:block overflow-hidden h-[300px] rounded-lg absolute -translate-x-28 translate-y-10">
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
      <div className="flex flex-row items-center gap-2">
        <Image src={imageSrc} alt="Benefit Icon" width="50" height="50" />
        <h1 className={styles.benefitsHeading}>{heading}</h1>
      </div>
      <p className={styles.benefitsDescription}>{description}</p>
    </div>
  );
};

export default Benefits;

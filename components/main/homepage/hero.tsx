import { Button } from "@/components/ui/shadcn/button";
import Image from "next/image";
import React from "react";
import { IoMdAlert } from "react-icons/io";
import IconCloud from "@/components/ui/magicui/icon-cloud";
import { GrDocumentUser } from "react-icons/gr";

/**
 * Component that shows the hero (top section) of the web-page
 */
const Hero = () => {
  return (
    <section
      className="relative w-full h-[30rem] items-center flex flex-col
      justify-center overflow-hidden"
    >
      {/* The background of the hero section*/}
      <Image
        src="/images/header-background.png"
        alt="header-background"
        width="1920"
        height="1080"
        className="absolute -z-10 object-cover w-full h-full"
      />

      {/* Hero Section Content */}
      <div className="px-2 md:px-0 flex flex-row items-center custom-max-width">
        <div className="space-y-10 w-full md:w-1/2">
          <h1
            className="text-center md:text-left text-4xl md:text-3xl lg:text-4xl
            font-semibold text-foreground/70"
          >
            Developer Student Club <br /> CSUSM
          </h1>

          <p className="text-center md:text-left text-foreground/70">
            {description}
          </p>

          <span className="flex flex-col md:flex-row gap-10 items-center w-full">
            <a
              href="https://gdsc.community.dev/"
              target="_blank"
              className="w-1/2"
            >
              <Button
                className="m-auto w-full md:m-0 h-10 rounded-md font-bold
                text-xs bg-blue hover:bg-blue/80 gap-2 text-white"
              >
                <GrDocumentUser size={20} /> APPLY
              </Button>
            </a>
            <a
              className="flex items-center gap-2 hover:underline text-blue transition-colors"
              href="https://gdsc.community.dev/"
              target="_blank"
            >
              <IoMdAlert size={20} /> Learn More
            </a>
          </span>
        </div>

        <div
          className="relative hidden md:flex h-full w-1/2 max-w-[32rem]
          items-center justify-center overflow-hidden pb-20 pl-20 pt-8"
        >
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

const slugs = [
  "googlechrome",
  "google",
  "typescript",
  "javascript",
  "react",
  "android",
  "apple",
  "html5",
  "css3",
  "tailwind",
  "prisma",
  "github",
  "git",
  "docker",
  "cypress",
  "figma",
  "jest",
  "visualstudiocode",
  "androidstudio",
  "nextdotjs",
  "nodedotjs",
  "amazonaws",
  "vercel",
  "python",
  "leetcode",
  "hackerrank",
];

// TO-DO: Move static data else-where
const description =
  "The Google Developer Student Club (GDSC) at California State University San Marcos is a university-based community for students interested in developing technical skills and leadership. ";

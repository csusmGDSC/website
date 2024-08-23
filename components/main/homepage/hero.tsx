import { Button } from "@/components/ui/shadcn/button";
import Image from "next/image";
import React from "react";
import { IoMdAlert } from "react-icons/io";
import { GrDocumentUser } from "react-icons/gr";
import DotPattern from "@/components/ui/magicui/dot-background";
import { ChevronRight } from "lucide-react";

/**
 * Component that shows the hero (top section) of the web-page
 */
const Hero = () => {
  return (
    <section
      className="relative w-full h-[30rem] items-center flex flex-col
      justify-center overflow-hidden border-b border-border bg-primary-foreground"
    >
      {/* Background */}
      <DotPattern className="[mask-image:linear-gradient(to_bottom,white,transparent,transparent)]" />

      {/* Hero Section Content */}
      <div className="px-2 md:px-0 flex flex-row items-center custom-max-width gap-8">
        <div className="space-y-10 w-full md:w-2/3">
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
                text-xs bg-blue hover:bg-blue/80 gap-2 text-white group"
              >
                APPLY
                <ChevronRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
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
          className="hidden md:block h-full w-1/3 max-w-[32rem]
          overflow-hidden rounded-lg z-10"
        >
          <Image
            src="/images/hero-image.png"
            alt="header-background"
            width="1920"
            height="1080"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

// TO-DO: Move static data else-where
const description =
  "The Google Developer Student Club (GDSC) at California State University San Marcos is a university-based community for students interested in developing technical skills and leadership. ";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { IoMdAlert } from "react-icons/io";

const Hero = () => {
  return (
    <section className="relative w-full h-[30rem] items-center flex flex-col justify-center overflow-hidden mb-[20rem]">
      <Image
        src="/images/header-background.png"
        alt="header-background"
        width="1920"
        height="1080"
        className="absolute -z-10 object-cover w-full h-full"
      />

      <div className="px-2 md:px-0 flex flex-row md:max-w-[90%] xl:max-w-[60%] w-full items-center">
        <div className="space-y-10">
          <h1 className="text-center md:text-left text-5xl md:text-4xl lg:text-5xl font-semibold text-[#3F3F3F] ">
            Developer Student Club <br /> CSUSM
          </h1>

          <p className="text-center md:text-left text-[#3F3F3F]">
            The Google Developer Student Club (GDSC) at California State
            University San Marcos is a university-based community for students
            interested in developing technical skills and leadership. By joining
            GDSC, you can participate in projects, practice interview questions,
            and partake in peer-to-peer activities, while building real-world
            software products for stakeholders.
          </p>

          <a
            href="https://gdsc.community.dev/"
            target="_blank"
            className="block"
          >
            <Button className="m-auto md:m-0 h-10 rounded-md font-bold text-xs bg-blue hover:bg-blue/80 gap-2">
              <IoMdAlert size={20} /> LEARN MORE
            </Button>
          </a>
        </div>

        <div className="hidden md:block w-[100rem]">
          <Image
            src="/images/hero-image.png"
            alt="hero-image"
            width={0}
            height={0}
            sizes="100vw"
            quality={100}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

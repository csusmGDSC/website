"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { IoMdAlert } from "react-icons/io";
import DotPattern from "@/components/ui/magicui/dot-background";
import { ChevronRight } from "lucide-react";
import { useClerk, useUser } from "@clerk/nextjs";
import Ripple from "@/components/ui/ripple";
import { useRouter } from "next/navigation";
import { Announcement } from "@/components/ui/announcement";

/**
 * Component that shows the hero (top section) of the web-page
 */
const Hero = () => {
  const clerk = useClerk();
  const user = useUser();
  const router = useRouter();

  return (
    <section
      className="relative w-full h-[30rem] items-center flex flex-col
      justify-center overflow-hidden border-b border-border bg-primary-foreground"
    >
      {/* Background */}
      <DotPattern className="[mask-image:linear-gradient(to_bottom,white,transparent,transparent)]" />

      {/* Hero Section Content */}
      <div className="px-2 md:px-0 flex flex-col justify-center items-center custom-max-width gap-6">
        <Announcement
          onClick={() => {
            router.push("/events");
          }}
          text="Accepting 2024 Applications"
          color="blue"
        />

        <h1
          className="text-center text-2xl md:text-3xl lg:text-5xl
            font-semibold text-primary z-10"
        >
          Google Developer Student Club
        </h1>

        <h2 className="text-center text-sm md:text-lg lg:text-xl text-foreground/50">
          California State University, San Marcos
        </h2>

        <p className="text-center text-foreground/70 mb-6">
          {user.isSignedIn
            ? "Welcome back " + user.user?.fullName + "!"
            : description}
        </p>

        {user.isSignedIn ? (
          <a href="/events" target={"_self"} className="w-1/2 z-10">
            <Button
              className="m-auto w-full md:m-0 h-10 rounded-md font-bold
                text-xs bg-blue hover:bg-blue/80 gap-2 text-white group"
            >
              Explore GDSC
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </a>
        ) : (
          <Button
            className="m-auto px-10 md:m-0 h-10 rounded-md font-bold
                text-xs bg-blue z-10 hover:bg-blue/80 gap-2 text-white group"
            onClick={() => clerk.openSignUp()}
          >
            Apply
            <ChevronRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Button>
        )}
        {!user.isSignedIn && (
          <a
            className="flex items-center gap-2 hover:underline text-blue transition-colors"
            href="https://gdsc.community.dev/"
            target="_blank"
          >
            <IoMdAlert size={20} /> Learn More
          </a>
        )}
      </div>

      <Ripple
        className="!-bottom-[132rem]"
        numCircles={8}
        mainCircleSize={1800}
        mainCircleOpacity={0.1}
      />
    </section>
  );
};

export default Hero;

// TO-DO: Move static data else-where
const description =
  "University-based community for students interested in developing technical skills, projects, and leadership. ";

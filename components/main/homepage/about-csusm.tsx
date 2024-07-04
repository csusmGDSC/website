import Container from "@/components/ui/container";
import React from "react";
import { Button } from "@/components/ui/shadcn/button";
import Link from "next/link";
import Image from "next/image";

/**
 * Component that displays information about csusm
 */
const AboutCSUSM = () => {
  return (
    <Container className="custom-max-width">
      <div
        className="w-full flex flex-row items-center justify-center mt-10
        gap-4 mb-10 border rounded-lg p-4 custom-box-shadow"
      >
        {/* CSUSM Image */}
        <div className="hidden md:block overflow-hidden w-1/2 h-[300px] rounded-lg">
          <Image
            src="/images/campus.png"
            alt="benefits"
            width="1920"
            height="1080"
            className="w-full h-full object-cover"
          />
        </div>

        {/* CSUSM Description */}
        <div
          className="w-full sm:w-1/2 flex flex-col items-center md:items-start
          text-center md:text-left"
        >
          <h1 className="text-xl font-semibold text-[#3f3f3f] mb-2">
            California State University, San Marcos
          </h1>

          <p className="text-sm text-[#3f3f3f]">
            {description1}
            <br />
            <br />
            {description2}
          </p>

          <Link href="https://www.csusm.edu/index.html" target="_blank">
            <Button className="rounded-md text-xs bg-blue hover:bg-blue/80 mt-4">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default AboutCSUSM;

// TO-DO: Move static data somewhere else
const description1 =
  "A forward-focused institution, dedicated to preparing future leaders, building great communities and solving critical issues. Located on a 304-acre hillside overlooking the city of San Marcos, the University is just a short distance from some of Southern California’s best beaches and an hour from the U.S.-Mexico border.";
const description2 =
  "Through leading-edge programs, superior teaching and extensive workforce training opportunities, CSU students graduate with the critical thinking skills, industry knowledge and hands-on experience necessary for employment and career advancement.";

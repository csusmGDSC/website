import Container from "@/components/ui/container";
import DotPattern from "@/components/ui/magicui/dot-background";
import { Button } from "@/components/ui/shadcn/button";
import React from "react";
import { BiQuestionMark } from "react-icons/bi";
import { GrDocumentUser } from "react-icons/gr";

/**
 * Component that shows the BottomApplySection of GDSC-CSUSM
 */
const BottomApplySection = () => {
  return (
    <section className="w-full -mb-20 pb-20 custom-gradient-background">
      <Container className="flex flex-col items-center justify-center mt-32 custom-max-width">
        <div className="flex flex-row justify-between w-full">
          <h1 className="text-5xl font-semibold text-primary/90">
            Ready to join?
          </h1>

          <span className="flex flex-row gap-1 items-center">
            <a
              href="https://gdsc.community.dev/"
              target="_blank"
              className="w-1/2"
            >
              <Button
                className="h-10 rounded-md font-bold
                text-xs bg-blue hover:bg-blue/80 gap-2 text-white"
              >
                <GrDocumentUser size={20} /> APPLY
              </Button>
            </a>
            <a
              href="https://gdsc.community.dev/"
              target="_blank"
              className="w-1/2"
            >
              <Button
                className="h-10 rounded-md font-bold
                text-xs bg-primary-foreground hover:bg-primary-foreground/80 gap-2 text-primary/70"
              >
                <BiQuestionMark size={20} /> More info
              </Button>
            </a>
          </span>
        </div>
      </Container>
    </section>
  );
};

export default BottomApplySection;

"use client";

import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import React from "react";
import { BiQuestionMark } from "react-icons/bi";
import { useClerk, useUser } from "@clerk/nextjs";

/**
 * Component that shows the BottomApplySection of GDSC-CSUSM
 */
const BottomApplySection = () => {
  const { isSignedIn } = useUser();
  const clerk = useClerk();

  if (isSignedIn) return null;

  return (
    <section className="w-full -mb-20 pb-20 border-t border-border mt-20 bg-primary-foreground">
      <Container className="flex flex-col items-center justify-center custom-max-width">
        <div className="flex flex-col gap-10 sm:gap-0 sm:flex-row justify-between w-full">
          <h1 className="text-5xl font-semibold text-primary/90">
            Ready to join?
          </h1>

          <span className="flex flex-row gap-1 items-center">
            <Button
              className="h-10 rounded-md font-bold w-1/2
                text-xs bg-blue hover:bg-blue/80 gap-2 text-white group"
              onClick={() => clerk.openSignUp()}
            >
              APPLY
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Button>
            <a
              href="https://gdsc.community.dev/"
              target="_blank"
              className="w-1/2"
            >
              <Button
                className="h-10 rounded-md font-bold
                text-xs bg-primary-foreground hover:bg-primary-foreground/80 gap-2 text-primary/70 w-full"
                variant="outline"
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

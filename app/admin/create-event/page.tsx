"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence } from "framer-motion";
import { useMultipleStepForm } from "@/hooks/useMultipleStepForm";
import { useUser } from "@clerk/nextjs";

import Container from "@/components/ui/container";
import SideBar, { STEPS } from "@/components/main/admin/create-event/sidebar";
import SuccessMessage from "@/components/main/admin/create-event/success-message";

// FORM VALIDATION WITH REACT-HOOK-FORM, ZOD, and SHADCN-UI FORM https://ui.shadcn.com/docs/components/form
import { useForm } from "react-hook-form";
import { EventSchema } from "@/schemas";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import EventInfoForm from "@/components/main/admin/create-event/forms/event-info-form";
import LocationForm from "@/components/main/admin/create-event/forms/location-form";
import DescriptionForm from "@/components/main/admin/create-event/forms/description-form";
import LinksForm from "@/components/main/admin/create-event/forms/links-form";
import Summary from "@/components/main/admin/create-event/summary";

export default function CreateEvent() {
  const {
    previousStep,
    nextStep,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    steps,
    goTo,
    showSuccessMsg,
  } = useMultipleStepForm(STEPS.REVIEW_AND_SUBMIT);

  const { user } = useUser();

  const form = useForm<z.infer<typeof EventSchema>>({
    resolver: zodResolver(EventSchema),
    defaultValues: {
      eventName: "",
      tags: [],
      startTime: "",
      endTime: "",
      type: null,
      location: "California State University, San Marcos",
      date: new Date(),
      description: "",
      organizerIds: [user?.id],
    },
  });

  const validateCurrentStep = async () => {
    let isValid = false;

    switch (currentStepIndex) {
      case STEPS.BASIC_INFO:
        isValid = await form.trigger([
          "eventName",
          "type",
          "date",
          "startTime",
          "endTime",
          "imageSrc",
        ]);
        break;
      case STEPS.DESCRIPTION_AND_TAGS:
        isValid = await form.trigger(["description", "tags"]);
        break;
      case STEPS.LOCATION:
        isValid = await form.trigger(["room"]);
        break;
      case STEPS.MEDIA_AND_RESOURCES:
        isValid = await form.trigger(["slidesURL", "githubRepo"]);
        break;
      case STEPS.REVIEW_AND_SUBMIT:
        isValid = form.formState.isValid;
        break;
    }

    return isValid;
  };

  const handleSubmit = async (values: z.infer<typeof EventSchema>) => {
    if (isLastStep) {
      console.log("SUBMITTED FORM: ", values);
      nextStep();
    } else {
      const isValid = await validateCurrentStep();

      // If the section is valid, go to the next step
      if (isValid) {
        nextStep();
      }
    }
  };

  return (
    <Container className="w-full flex justify-center mt-20 custom-max-width">
      <div
        className={`flex justify-between ${
          currentStepIndex === 1
            ? "min-h-[600px] md:min-h-[500px]"
            : "min-h-[500px]"
        } w-full relative m-1 rounded-lg border border-border bg-primary-foreground p-4`}
      >
        {!showSuccessMsg ? (
          <SideBar currentStepIndex={currentStepIndex} goTo={goTo} />
        ) : (
          ""
        )}
        <main
          className={`${
            showSuccessMsg ? "w-full" : "w-full md:mt-5 md:w-[65%]"
          }`}
        >
          {showSuccessMsg ? (
            <AnimatePresence mode="wait">
              <SuccessMessage />
            </AnimatePresence>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="w-full flex flex-col justify-between h-full"
              >
                <AnimatePresence mode="wait">
                  {currentStepIndex === STEPS.BASIC_INFO && (
                    <EventInfoForm form={form} />
                  )}
                  {currentStepIndex === STEPS.DESCRIPTION_AND_TAGS && (
                    <DescriptionForm form={form} />
                  )}
                  {currentStepIndex === STEPS.LOCATION && (
                    <LocationForm form={form} />
                  )}
                  {currentStepIndex === STEPS.MEDIA_AND_RESOURCES && (
                    <LinksForm form={form} />
                  )}
                  {currentStepIndex === STEPS.REVIEW_AND_SUBMIT && (
                    <Summary form={form} goTo={goTo} />
                  )}
                </AnimatePresence>
                <div className="w-full items-center flex justify-between mt-10">
                  <div className="">
                    <Button
                      onClick={previousStep}
                      type="button"
                      variant="ghost"
                      className={`${
                        isFirstStep ? "invisible" : "visible hover:bg-inherit"
                      }`}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="flex items-center">
                    <div className="relative after:pointer-events-none after:absolute after:inset-px after:rounded-[11px] after:shadow-highlight after:shadow-white/10 focus-within:after:shadow-[#77f6aa] after:transition">
                      <Button
                        type="submit"
                        className="relative text-white bg-blue border border-border hover:bg-blue/70 rounded-xl hover:text-white"
                      >
                        {isLastStep ? "Create" : "Next Step"}
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </Form>
          )}
        </main>
      </div>
    </Container>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence } from "framer-motion";
import { useMultipleStepForm } from "@/hooks/use-multiple-step-form";
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
import { useState } from "react";
import { createEvent } from "@/actions/event";

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
  } = useMultipleStepForm(STEPS.REVIEW_AND_SUBMIT + 1);

  const { user } = useUser();

  const form = useForm<z.infer<typeof EventSchema>>({
    resolver: zodResolver(EventSchema),
    defaultValues: {
      tags: [],
      about: {
        images: [],
        // If you don't set default ops value, it will cause runtime error
        body: '{"ops":[{"insert":""}]}',
      },
      location: "California State University, San Marcos",
      date: new Date(),
      organizerIds: ["12345"],
    },
  });

  const [formErrorMessage, setFormErrorMessage] = useState<string | null>(null);

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
        isValid = await form.trigger([
          "description",
          "about.body",
          "about.images",
        ]);
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
    const isValid = await validateCurrentStep();

    if (isLastStep) {
      if (isValid) {
        setFormErrorMessage(null);

        try {
          const serverFormData = new FormData();

          serverFormData.append("eventName", values.eventName);
          serverFormData.append("type", values.type || "other");
          serverFormData.append("date", values.date.toISOString());
          serverFormData.append("startTime", values.startTime);
          serverFormData.append("endTime", values.endTime);
          serverFormData.append("room", values.room);
          serverFormData.append("description", values.description);
          serverFormData.append(
            "location",
            values.location || "California State University, San Marcos"
          );
          serverFormData.append("slidesURL", values.slidesURL || "");
          serverFormData.append("githubRepo", values.githubRepo || "");
          serverFormData.append(
            "organizerIds",
            JSON.stringify(values.organizerIds)
          );
          serverFormData.append("imageSrc", values.imageSrc || "");

          // We can't stringify the File type, so we can send the about data separately
          serverFormData.append(
            "aboutBody",
            JSON.stringify(values.about?.body)
          );
          values.about?.images?.forEach((file, index) => {
            serverFormData.append(`aboutImages[${index}]`, file);
          });
          serverFormData.append("imageCount", values.about?.images?.length.toString() || "0");

          const eventCreationResponse = await createEvent(serverFormData);

          console.log(eventCreationResponse);
        } catch (error) {
          console.log(error);
        }

        // Show the success message
        nextStep();
      } else {
        setFormErrorMessage("Please fill out all required fields.");
      }
    } else {
      // If the current inptus are valid, go to the next step
      if (isValid) {
        nextStep();

        // If the selected event type is virtual, skip the location step
        if (form.watch("type") === "virtual" && currentStepIndex === 1) {
          nextStep();
        }
      }
    }
  };

  return (
    <Container className="custom-max-width lg:-mt-20">
      <div
        className={`flex justify-between ${
          currentStepIndex === 1
            ? "min-h-[600px] lg:min-h-[500px]"
            : "min-h-[500px]"
        } w-full relative m-1 rounded-lg border border-border p-4`}
      >
        {!showSuccessMsg ? (
          <SideBar
            currentStepIndex={currentStepIndex}
            goTo={goTo}
            showLocation={form.watch("type") === "virtual" ? false : true}
          />
        ) : (
          ""
        )}
        <main
          className={`${
            showSuccessMsg ? "w-full" : "w-full lg:mt-5 lg:w-[73%]"
          }`}
        >
          {showSuccessMsg ? (
            <AnimatePresence mode="wait">
              <SuccessMessage />
            </AnimatePresence>
          ) : (
            <Form {...form}>
              <form className="w-full flex flex-col justify-between h-full">
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
                  <Button
                    onClick={() => {
                      previousStep();
                      // If the event type is virtual, skip the location step
                      if (
                        form.watch("type") === "virtual" &&
                        currentStepIndex === 3
                      ) {
                        previousStep();
                      }
                    }}
                    type="button"
                    variant="ghost"
                    className={`${
                      isFirstStep ? "invisible" : "visible hover:bg-inherit"
                    }`}
                  >
                    Go Back
                  </Button>
                  <div className="flex items-center">
                    <div className="relative after:pointer-events-none after:absolute after:inset-px after:rounded-[11px] after:shadow-highlight after:shadow-white/10 focus-within:after:shadow-[#77f6aa] after:transition">
                      <Button
                        type="button"
                        onClick={(e) => {
                          // Manually submit form because using "submit" type causes the whole form to validate before actually
                          // calling the function, which we don't want to do in a multi-step form since only some of the values may be valid
                          e.preventDefault;
                          handleSubmit(form.getValues());
                        }}
                        className="relative text-white bg-blue border border-border hover:bg-blue/70 rounded-xl hover:text-white"
                      >
                        {isLastStep ? "Create" : "Next Step"}
                      </Button>
                    </div>
                  </div>
                </div>

                {formErrorMessage && (
                  <div className="flex justify-end">
                    <p className="text-destructive text-xs">
                      {formErrorMessage}
                    </p>
                  </div>
                )}
              </form>
            </Form>
          )}
        </main>
      </div>
    </Container>
  );
}

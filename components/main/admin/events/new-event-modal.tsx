import React, { useState, Dispatch, SetStateAction, useMemo } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { GDSCEvent } from "@/types/gdsc-event";
import { Button } from "@/components/ui/shadcn/button";
import { cn } from "@/lib/utils";
import CustomInput from "@/components/ui/inputs/custom-input";

enum STEPS {
  BASIC_INFO = 0,
  LOCATION = 1,
  MEDIA_AND_RESOURCES = 2,
  DESCRIPTION_AND_TAGS = 3,
  REVIEW_AND_SUBMIT = 4,
}

const AddNewEventModal = ({
  addEventModalOpen,
  setAddEventModalOpen,
}: {
  addEventModalOpen: boolean;
  setAddEventModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [step, setStep] = useState<STEPS>(STEPS.BASIC_INFO);

  const [eventForm, setEventForm] = useState<GDSCEvent>({
    id: crypto.randomUUID(),
    name: "",
    tags: [],
    duration: 0,
    type: null,
    location: "",
    date: null,
    githubRepo: "",
    slidesURL: "",
    imageSrc: "",
    extraImageSrcs: [],
    description: "",
    about: "",
    organizerIds: [],
    attendeeIds: [],
  });

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const InfoSection = useMemo(() => {
    /**
     * Event Name (name)
        Type (type)
        Date (date)
        Duration (duration)
     */

    return (
      <form className="flex flex-col gap-4">
        <h1 className="text-xl text-primary font-semibold">Information</h1>
        <CustomInput id="name" label="Event Name" required />
        <CustomInput id="type" label="Event Type" required />
        <CustomInput id="date" label="Event Date" required />
        <CustomInput id="duration" label="Duration (in minutes)" required />
      </form>
    );
  }, []);

  const LocationSection = useMemo(() => {
    /**
     * Event Location
        If type is "virtual": Show input for Location (location)
        If type is "physical": Show options for selecting a Room (room) from the CSUSM_ROOM interface.
     */
    return (
      <form>
        <h1 className="text-xl text-primary font-semibold">Location</h1>
      </form>
    );
  }, []);

  const MediaSection = useMemo(() => {
    /**
     * GitHub Repository (githubRepo)
        Slides URL (slidesURL)
        Main Image (imageSrc)
        Additional Images (extraImageSrcs)
     */
    return (
      <form>
        <h1 className="text-xl text-primary font-semibold">
          Media & Resources
        </h1>
      </form>
    );
  }, []);

  const DescriptionSection = useMemo(() => {
    /**
     * Description (description)
        About (about)
        Tags (tags
     */
    return (
      <form>
        <h1 className="text-xl text-primary font-semibold">
          Description & Tags
        </h1>
      </form>
    );
  }, []);

  const SubmitSection = useMemo(() => {
    /**
     * A summary of all the entered details.
        Option to go back and edit any of the previous steps.
        Submit button to create the event.
     */
    return (
      <form>
        <h1 className="text-xl text-primary font-semibold">
          Review and Submit
        </h1>
      </form>
    );
  }, []);

  return (
    <AlertDialog open={addEventModalOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <p>Create GDSC Event</p>
            <div className="flex">
              <Step name="Info" focused={step === STEPS.BASIC_INFO} />
              <Step name="Location" focused={step === STEPS.LOCATION} />
              <Step
                name="Resources"
                focused={step === STEPS.MEDIA_AND_RESOURCES}
              />
              <Step
                name="Description"
                focused={step === STEPS.DESCRIPTION_AND_TAGS}
              />
              <Step name="Review" focused={step === STEPS.REVIEW_AND_SUBMIT} />
            </div>
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          {(() => {
            switch (step) {
              case STEPS.BASIC_INFO:
                return InfoSection;
              case STEPS.LOCATION:
                return LocationSection;
              case STEPS.MEDIA_AND_RESOURCES:
                return MediaSection;
              case STEPS.DESCRIPTION_AND_TAGS:
                return DescriptionSection;
              case STEPS.REVIEW_AND_SUBMIT:
                return SubmitSection;
              default:
                return null;
            }
          })()}
        </AlertDialogDescription>
        <AlertDialogFooter>
          {step !== STEPS.BASIC_INFO ? (
            <Button onClick={onBack} variant="outline">
              Back
            </Button>
          ) : (
            <AlertDialogCancel
              onClick={() => {
                setAddEventModalOpen(false);
                setStep(STEPS.BASIC_INFO);
              }}
            >
              Cancel
            </AlertDialogCancel>
          )}
          {step !== STEPS.REVIEW_AND_SUBMIT ? (
            <Button onClick={onNext} className="bg-green hover:bg-green/70">
              Next
            </Button>
          ) : (
            <AlertDialogCancel
              onClick={() => {
                setAddEventModalOpen(false);
                setStep(STEPS.BASIC_INFO);
              }}
              className="bg-blue text-white hover:bg-blue/70 hover:text-white"
            >
              Create
            </AlertDialogCancel>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddNewEventModal;

const Step = ({ focused, name }: { focused: boolean; name: string }) => {
  return (
    <p
      className={cn(
        "border-b-4 text-xs font-semibold px-2 flex-1 text-center py-2 transition-colors",
        focused ? "border-blue" : "border-primary-foreground"
      )}
    >
      {name}
    </p>
  );
};

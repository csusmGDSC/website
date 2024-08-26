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
import { EVENT_TYPES, GDSCEvent } from "@/types/gdsc-event";
import { Button } from "@/components/ui/shadcn/button";
import { cn } from "@/lib/utils";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";

// FORM VALIDATION WITH ZOD, REACT-HOOK-FORM, SHADCN-UI. See https://ui.shadcn.com/docs/components/form for more info
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { DESCRIPTION_MAX_LENGTH, EventSchema } from "@/schemas";
import { Input } from "@/components/ui/shadcn/input";

import { Calendar } from "@/components/ui/shadcn/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";

enum STEPS {
  BASIC_INFO = 0,
  DESCRIPTION_AND_TAGS = 1,
  MEDIA_AND_RESOURCES = 2,
  REVIEW_AND_SUBMIT = 3,
}

const AddNewEventModal = ({
  addEventModalOpen,
  setAddEventModalOpen,
}: {
  addEventModalOpen: boolean;
  setAddEventModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [step, setStep] = useState<STEPS>(STEPS.BASIC_INFO);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof EventSchema>>({
    resolver: zodResolver(EventSchema),
    defaultValues: {
      name: "",
      tags: [],
      duration: 0,
      type: null,
      location: "",
      date: new Date(),
      githubRepo: "",
      slidesURL: "",
      imageSrc: "",
      extraImageSrcs: [],
      description: "",
      about: "",
      attendeeIds: [],
      organizerIds: [],
    },
  });

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const handleSubmit = async (values: z.infer<typeof EventSchema>) => {
    console.log(values);
    // if (res?.error) {
    //   setError(res?.error);
    // }
  };

  const InfoSection = useMemo(() => {
    return (
      <div className="flex flex-col gap-8">
        <h1 className="text-xl text-primary font-semibold">Information</h1>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name of Event</FormLabel>
              <FormControl>
                <Input placeholder="Enter Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type of Event</FormLabel>
              <FormControl>
                <div className="flex gap-2 flex-wrap">
                  {EVENT_TYPES.map((event_type) => (
                    <Button
                      key={event_type}
                      type="button"
                      variant="outline"
                      onClick={() => {
                        field.onChange(
                          field.value === event_type ? null : event_type
                        );
                      }}
                      className={cn(
                        "rounded-xl text-primary",
                        field.value === event_type
                          ? "bg-blue hover:bg-blue/80 hover:text-white text-white font-medium"
                          : ""
                      )}
                    >
                      {event_type.charAt(0).toUpperCase() + event_type.slice(1)}
                    </Button>
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of Event</FormLabel>
              <FormControl>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={(value) => {
                        field.onChange(value);
                      }}
                      initialFocus
                      fromDate={new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Duration of Event</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter in minutes"
                  {...field}
                  type="number"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    );
  }, [form.control]);

  const MediaSection = useMemo(() => {
    /**
     * GitHub Repository (githubRepo)
        Slides URL (slidesURL)
        Main Image (imageSrc)
        Additional Images (extraImageSrcs)
     */
    return (
      <div>
        <h1 className="text-xl text-primary font-semibold">
          Media & Resources
        </h1>
      </div>
    );
  }, []);

  const DescriptionSection = useMemo(() => {
    /**
     * Description (description)
        About (about)
        Tags (tags
     */
    return (
      <div className="flex flex-col gap-8">
        <h1 className="text-xl text-primary font-semibold">
          Description & Tags
        </h1>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description of Event</FormLabel>
              <FormControl>
                <>
                  <Textarea
                    placeholder="Enter a short description of the event"
                    maxLength={DESCRIPTION_MAX_LENGTH}
                    {...field}
                  />
                  <p className="text-sm text-primary/80">
                    {field.value?.length || 0}/{DESCRIPTION_MAX_LENGTH}
                  </p>
                </>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    );
  }, [form.control]);

  const SubmitSection = useMemo(() => {
    /**
     * A summary of all the entered details.
        Option to go back and edit any of the previous steps.
        Submit button to create the event.
     */
    return (
      <div>
        <h1 className="text-xl text-primary font-semibold">
          Review and Submit
        </h1>
      </div>
    );
  }, []);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <AlertDialog open={addEventModalOpen}>
          <AlertDialogContent className="w-[1200px]">
            <AlertDialogHeader>
              <AlertDialogTitle>
                <p>Create GDSC Event</p>
                <div className="flex">
                  <Step name="Info" focused={step === STEPS.BASIC_INFO} />
                  <Step
                    name="Description"
                    focused={step === STEPS.DESCRIPTION_AND_TAGS}
                  />
                  <Step
                    name="Resources"
                    focused={step === STEPS.MEDIA_AND_RESOURCES}
                  />
                  <Step
                    name="Review"
                    focused={step === STEPS.REVIEW_AND_SUBMIT}
                  />
                </div>
              </AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogDescription>
              {(() => {
                switch (step) {
                  case STEPS.BASIC_INFO:
                    return InfoSection;
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
                <Button onClick={onBack} variant="outline" type="button">
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
                <Button
                  onClick={onNext}
                  className="bg-green hover:bg-green/70"
                  type="button"
                >
                  Next
                </Button>
              ) : (
                <AlertDialogCancel
                  onClick={() => {
                    setAddEventModalOpen(false);
                    setStep(STEPS.BASIC_INFO);
                  }}
                  className="bg-blue text-white hover:bg-blue/70 hover:text-white"
                  type="submit"
                >
                  Create
                </AlertDialogCancel>
              )}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </form>
    </Form>
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

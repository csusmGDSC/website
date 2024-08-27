import React, { useState, Dispatch, SetStateAction, useRef } from "react";

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
import { cn, formatMinutes } from "@/lib/utils";
import { Calendar as CalendarIcon, ImageIcon, XIcon } from "lucide-react";
import { format, formatDate, formatDuration } from "date-fns";

// FORM VALIDATION WITH ZOD, REACT-HOOK-FORM, SHADCN-UI. See https://ui.shadcn.com/docs/components/form for more info
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
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
import {
  ABOUT_MAX_LENGTH,
  DESCRIPTION_MAX_LENGTH,
  EventSchema,
  SHORT_BIO_MAX_LENGTH,
} from "@/schemas";
import { Input } from "@/components/ui/shadcn/input";

import { Calendar } from "@/components/ui/shadcn/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";

const Editor = dynamic(() => import("@/components/ui/controlled-editor"), {
  ssr: false,
});
const Renderer = dynamic(() => import("@/components/ui/renderer"), {
  ssr: false,
});

import { ScrollArea, ScrollBar } from "@/components/ui/shadcn/scroll-area";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { MdEdit, MdSchool } from "react-icons/md";
import Link from "next/link";
import { FaBuilding } from "react-icons/fa6";
import dynamic from "next/dynamic";

enum STEPS {
  BASIC_INFO = 0,
  DESCRIPTION_AND_TAGS = 1,
  LOCATION = 2,
  MEDIA_AND_RESOURCES = 3,
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
  const [error, setError] = useState<string | null>(null);
  const imageElementRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const { user } = useUser();

  const form = useForm<z.infer<typeof EventSchema>>({
    resolver: zodResolver(EventSchema),
    defaultValues: {
      name: "",
      tags: [],
      duration: 0,
      type: null,
      location: "California State University, San Marcos",
      date: new Date(),
      description: "",
      organizerIds: [user?.id],
    },
  });

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const handleSubmit = async (values: z.infer<typeof EventSchema>) => {
    console.log("HERE", values);
    // if (res?.error) {
    //   setError(res?.error);
    // }
  };

  const InfoSection = (
    <div className="flex flex-col gap-8">
      <h1 className="text-xl text-primary font-semibold">Information</h1>

      {/* NAME OF EVENT */}
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

      {/* TYPE OF EVENT */}
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

      {/* DATE OF EVENT */}
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

      {/* DURATION OF EVENT */}
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
                min="0"
                onChange={(e) => {
                  // Convert the string value to a number and update the field
                  const numericValue = Number(e.target.value);
                  field.onChange(numericValue);
                }}
                value={field.value || ""}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* MAIN IMAGE OF THE EVENT */}
      <FormField
        control={form.control}
        name="imageSrc"
        render={({ field }) => (
          <FormItem>
            {/* IMAGE UPLOADER, HIDDEN BECAUSE DEFAULT IS UGLY */}
            <input
              type="file"
              accept="image/*"
              ref={imageElementRef}
              onChange={(event) => {
                const image = event.target.files?.[0];

                // Set selected image for user to see
                setSelectedImage(image || null);

                // Set form field value to image
                field.onChange(image || null);
              }}
              className="hidden"
            />

            <FormLabel>Main Image</FormLabel>
            <div className="flex flex-col gap-2">
              {selectedImage ? (
                <div className="relative w-full h-[300px]">
                  <Image
                    src={URL.createObjectURL(selectedImage)}
                    alt="event-image"
                    className="rounded-xl border object-cover aspect-square w-full h-full"
                    width={0}
                    height={0}
                  />

                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute top-2.5 right-2.5"
                    onClick={() => setSelectedImage(null)}
                  >
                    <XIcon />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="outline"
                  onClick={() => imageElementRef.current?.click()}
                  className="text-primary gap-2 h-[300px]"
                >
                  <ImageIcon className="" /> Select Image
                </Button>
              )}
            </div>
          </FormItem>
        )}
      />

      {/* ORGANIZERS OF EVENT, TODO: MAKE THIS DYNAMIC, DOESN'T DO ANYTHING YET */}
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Organizers</FormLabel>
            <div className="w-full border border-border rounded-xl p-4 flex items-center justify-between">
              <span className="flex gap-2 items-center">
                <Avatar>
                  <AvatarImage src={user?.imageUrl} />
                  <AvatarFallback>{user?.fullName![0] || "?"}</AvatarFallback>
                </Avatar>

                <span>
                  <p className="text-sm text-primary/90">{user?.fullName}</p>
                  <p className="text-sm text-primary/70">
                    {user?.publicMetadata.branch as string} team
                  </p>
                </span>
              </span>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => {}}
                className="rounded-full"
              >
                <XIcon />
              </Button>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );

  const MediaSection = (
    /**
     * GitHub Repository (githubRepo)
        Slides URL (slidesURL)
        Main Image (imageSrc)
        Additional Images (extraImageSrcs)
     */
    <div className="flex flex-col gap-8">
      <h1 className="text-xl text-primary font-semibold">Media & Resources</h1>

      <FormField
        control={form.control}
        name="githubRepo"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Github Repo URL (optional)</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Enter URL" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="slidesURL"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Slides URL (optional)</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Enter URL of slides" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );

  const DescriptionSection = (
    /**
     * Description (description)
        About (about)
        Tags (tags
     */
    <div className="flex flex-col gap-8">
      <h1 className="text-xl text-primary font-semibold">Description</h1>

      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <div>
                <Textarea
                  {...field}
                  placeholder="Enter a short description of the event."
                  maxLength={DESCRIPTION_MAX_LENGTH}
                />
                <p className="text-sm text-primary/80">
                  {field.value?.length || 0}/{DESCRIPTION_MAX_LENGTH}
                </p>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <Controller
        name="about"
        control={form.control}
        defaultValue={{ images: [], body: "" }}
        render={({ field }) => (
          <div className="w-full">
            <Editor
              control={form.control}
              placeholder="Write a in-depth summary of the event."
              disabled={false}
              defaultValue={[]}
            />
            <p className="text-sm text-primary/80">
              {field.value?.body?.replace(/<(.|\n)*?>/g, "").trim().length || 0}
              /{ABOUT_MAX_LENGTH}
            </p>
          </div>
        )}
      />
    </div>
  );

  const LocationSection = (
    /**
     * Location (location)
        Date (date)
     */
    <div className="flex flex-col gap-8">
      <h1 className="text-xl text-primary font-semibold">Location</h1>

      <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>School</FormLabel>
            <div className="p-4 border border-border w-full rounded-xl flex justify-between">
              <span className="flex gap-2 items-center">
                <MdSchool size={25} />{" "}
                <p>California State University, San Marcos</p>
              </span>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => {}}
                className="rounded-full"
              >
                <XIcon />
              </Button>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="room"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Room</FormLabel>
            <div className="p-4 border border-border w-full rounded-xl flex justify-between"></div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );

  const SubmitSection = (
    /**
     * A summary of all the entered details.
        Option to go back and edit any of the previous steps.
        Submit button to create the event.
     */
    <div className="flex flex-col gap-4">
      {/* EVENT DETAILS SUMMARY */}
      <div className="flex justify-between items-center text-primary font-semibold">
        <p className="text-xl">Event Details</p>
        <Button onClick={() => setStep(STEPS.BASIC_INFO)} variant="outline">
          <MdEdit />
        </Button>
      </div>
      <div>
        <div className="flex justify-between">
          <p>Name</p>
          <p className="font-medium text-primary">
            {form.watch("name") ? form.watch("name") : "Untitled Event"}
          </p>
        </div>

        <div className="flex justify-between">
          <p>Type</p>
          <p className="font-medium text-primary">
            {form.watch("type") ? form.watch("type") : "Unselected"}
          </p>
        </div>

        <div className="flex justify-between">
          <p>Date</p>
          <p className="font-medium text-primary">
            {formatDate(form.watch("date"), "PPP")}
          </p>
        </div>

        <div className="flex justify-between">
          <p>Duration</p>
          <p className="font-medium text-primary">
            {form.watch("duration") &&
              formatMinutes(form.watch("duration") || 0)}
          </p>
        </div>
      </div>

      {/* ORGANIZERS SUMMARY */}
      <p className="text-xl text-primary font-semibold">Organizers</p>
      <div className="w-full border border-border rounded-xl p-4 flex items-center justify-between">
        <span className="flex gap-2 items-center">
          <Avatar>
            <AvatarImage src={user?.imageUrl} />
            <AvatarFallback>{user?.fullName![0] || "?"}</AvatarFallback>
          </Avatar>

          <span>
            <p className="text-sm text-primary/90">{user?.fullName}</p>
            <p className="text-sm text-primary/70">
              {user?.publicMetadata.branch as string} team
            </p>
          </span>
        </span>
      </div>

      {/* EVENT IMAGE SUMMARY */}
      <p className="text-xl text-primary font-semibold">Event Image</p>
      <div className="relative w-full h-[300px]">
        <Image
          src={
            selectedImage
              ? URL.createObjectURL(selectedImage as File)
              : "/images/stock/reflections.jpg"
          }
          alt="event-image"
          className="rounded-xl border object-cover aspect-square w-full h-full"
          width={1920}
          height={1080}
        />
      </div>

      {/* DESCRIPTION SUMMARY */}
      <div className="flex justify-between items-center">
        <p className="text-xl text-primary font-semibold">Description</p>
        <Button
          onClick={() => setStep(STEPS.DESCRIPTION_AND_TAGS)}
          variant="outline"
        >
          <MdEdit />
        </Button>
      </div>
      <p className="text-primary text-wrap">
        {form.watch("description").length > 0
          ? form.watch("description")
          : "No description provided"}
      </p>

      {/* ABOUT SUMMARY */}
      <p className="text-xl text-primary font-semibold">About</p>
      <p className="text-primary text-wrap">
        {form.watch("about") ? (
          <Renderer value={form.watch("about")?.body || ""} />
        ) : (
          "No about provided"
        )}
      </p>

      {/* EXTRA IMAGES SUMMARY */}
      <p className="text-xl text-primary font-semibold">Extra Images</p>
      {(form.watch("about")?.images ?? []).length > 0 ? (
        <ScrollArea>
          <div className="flex gap-2 overflow-x-hidden">
            {form.watch("about")?.images?.map((image, key) => (
              <div key={key} className="w-[200px] h-[200px]  my-4">
                <Image
                  src={URL.createObjectURL(image)}
                  alt="extra-image"
                  className="rounded-xl border object-cover aspect-square w-full h-full"
                  width={0}
                  height={0}
                />
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      ) : (
        <p>No extra images provided</p>
      )}

      {/* LOCATION AND ROOM SUMMARY */}
      <div className="flex justify-between items-center">
        <p className="text-xl text-primary font-semibold">Location</p>
        <Button onClick={() => setStep(STEPS.LOCATION)} variant="outline">
          <MdEdit />
        </Button>
      </div>
      <div className="p-4 border border-border w-full rounded-xl">
        <span className="flex gap-2 items-center">
          <MdSchool size={25} /> <p>California State University, San Marcos</p>
        </span>
      </div>
      <div className="p-4 border border-border w-full rounded-xl">
        <span className="flex gap-2 items-center">
          <FaBuilding size={25} /> <p>Science Hall 242</p>
        </span>
      </div>

      {/* RESOURCES SUMMARY */}
      <div className="flex justify-between items-center text-primary font-semibold">
        <p className="text-xl">Resources</p>
        <Button
          onClick={() => setStep(STEPS.MEDIA_AND_RESOURCES)}
          variant="outline"
        >
          <MdEdit />
        </Button>
      </div>
      <div className="flex justify-between">
        <p>Github Repository</p>
        {form.watch("githubRepo") ? (
          <Link
            className="hover:underline text-blue"
            // @ts-ignore
            href={form.watch("githubRepo")}
            target="_blank"
          >
            {form.watch("githubRepo")}
          </Link>
        ) : (
          <p>No URL provided</p>
        )}
      </div>

      <div className="flex justify-between">
        <p>Slides</p>
        {form.watch("slidesURL") ? (
          <Link
            className="hover:underline text-blue"
            // @ts-ignore
            href={form.watch("slidesURL")}
            target="_blank"
          >
            {form.watch("slidesURL")}
          </Link>
        ) : (
          <p>No URL provided</p>
        )}
      </div>
    </div>
  );

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
                  <Step name="Location" focused={step === STEPS.LOCATION} />
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
            <ScrollArea className="-mx-6 px-6">
              <AlertDialogDescription className="h-[500px]">
                {(() => {
                  switch (step) {
                    case STEPS.BASIC_INFO:
                      return InfoSection;
                    case STEPS.DESCRIPTION_AND_TAGS:
                      return DescriptionSection;
                    case STEPS.LOCATION:
                      return LocationSection;
                    case STEPS.MEDIA_AND_RESOURCES:
                      return MediaSection;
                    case STEPS.REVIEW_AND_SUBMIT:
                      return SubmitSection;
                    default:
                      return null;
                  }
                })()}
              </AlertDialogDescription>
            </ScrollArea>
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
                <AlertDialogAction
                  onClick={() => {
                    // If there are issues with the form input, don't close the modal
                    if (!form.formState.isDirty) {
                      setAddEventModalOpen(false);
                      setStep(STEPS.BASIC_INFO);
                    }
                  }}
                  className="bg-blue text-white hover:bg-blue/70 hover:text-white"
                  type="submit"
                >
                  Create
                </AlertDialogAction>
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

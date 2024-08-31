import React from "react";
import FormWrapper from "./form-wrapper";
import { EventFormValues } from "@/schemas";
import { UseFormReturn } from "react-hook-form";
import dynamic from "next/dynamic";
import Link from "next/link";
import { MdEdit, MdSchool } from "react-icons/md";
import { Button } from "@/components/ui/shadcn/button";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";
import { formatDate } from "date-fns";
import { FaBuilding } from "react-icons/fa6";
import { ScrollArea, ScrollBar } from "@/components/ui/shadcn/scroll-area";
import { STEPS } from "./sidebar";

const Renderer = dynamic(() => import("@/components/ui/renderer"), {
  ssr: false,
});

interface SummaryProps {
  form: UseFormReturn<EventFormValues>;
  goTo: (index: number) => void;
}

const Summary = ({ form, goTo }: SummaryProps) => {
  const { user } = useUser();

  return (
    <FormWrapper
      title="Information"
      description="Please provide basic information about the event"
    >
      {/* EVENT DETAILS SUMMARY */}
      <div className="flex justify-between items-center text-primary font-semibold">
        <p className="text-xl">Event Details</p>
        <Button onClick={() => goTo(STEPS.BASIC_INFO)} variant="outline">
          <MdEdit />
        </Button>
      </div>
      <div>
        <div className="flex justify-between">
          <p>Name</p>
          <p className="font-medium text-primary">
            {form.watch("eventName")
              ? form.watch("eventName")
              : "Untitled Event"}
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
            {form.watch("startTime") &&
              form.watch("endTime") &&
              `${form.watch("startTime")} - ${form.watch("endTime")}`}
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
            form.watch("imageSrc")
              ? URL.createObjectURL(form.watch("imageSrc")!)
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
          onClick={() => goTo(STEPS.DESCRIPTION_AND_TAGS)}
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
        <Button onClick={() => goTo(STEPS.LOCATION)} variant="outline">
          <MdEdit />
        </Button>
      </div>
      {form.watch("type") === "virtual" ? (
        <div className="flex justify-between">
          <p>Virtual</p>
        </div>
      ) : (
        <>
          <div className="p-4 border border-border w-full rounded-xl">
            <span className="flex gap-2 items-center">
              <MdSchool size={25} />{" "}
              <p>California State University, San Marcos</p>
            </span>
          </div>
          {form.watch("room") && (
            <div className="p-4 border border-border w-full rounded-xl">
              <span className="flex gap-2 items-center">
                <FaBuilding size={25} /> <p>{form.watch("room")}</p>
              </span>
            </div>
          )}
        </>
      )}

      {/* RESOURCES SUMMARY */}
      <div className="flex justify-between items-center text-primary font-semibold">
        <p className="text-xl">Resources</p>
        <Button
          onClick={() => goTo(STEPS.MEDIA_AND_RESOURCES)}
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
    </FormWrapper>
  );
};

export default Summary;

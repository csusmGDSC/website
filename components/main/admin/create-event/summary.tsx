import React from "react";
import FormWrapper from "./form-wrapper";
import { EventFormValues } from "@/schemas";
import { UseFormReturn } from "react-hook-form";
import dynamic from "next/dynamic";
import Link from "next/link";
import { MdEdit, MdLaptop, MdSchool } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";
import { formatDate } from "date-fns";
import { FaBuilding } from "react-icons/fa6";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { STEPS } from "./sidebar";
import { UserRowCard } from "./user-row-card";
import { useGDSCTeam } from "@/hooks/use-gdsc-team";

const Renderer = dynamic(() => import("@/components/ui/renderer"), {
  ssr: false,
});

interface SummaryProps {
  form: UseFormReturn<EventFormValues>;
  goTo: (index: number) => void;
}

const Summary = ({ form, goTo }: SummaryProps) => {
  const { team } = useGDSCTeam();

  return (
    <FormWrapper
      title="Summary"
      description="Please review the details of the event before creating it"
    >
      {/* EVENT DETAILS SUMMARY */}
      <div className="flex justify-between items-center text-primary font-semibold">
        <p className="text-xl">Event Details</p>
        <Button
          onClick={() => goTo(STEPS.BASIC_INFO)}
          variant="outline"
          type="button"
        >
          <MdEdit />
        </Button>
      </div>
      <div className="bg-primary-foreground rounded-md border border-border p-5 text-sm">
        <div className="flex justify-between">
          <p>Name</p>
          <p className="text-primary/80">
            {form.watch("eventName")
              ? form.watch("eventName")
              : "Untitled Event"}
          </p>
        </div>

        <div className="flex justify-between">
          <p>Type</p>
          <p className="text-primary/80">
            {form.watch("type") ? form.watch("type") : "Unselected"}
          </p>
        </div>

        <div className="flex justify-between">
          <p>Date</p>
          <p className="text-primary/80">
            {formatDate(form.watch("date"), "PPP")}
          </p>
        </div>

        <div className="flex justify-between">
          <p>Duration</p>
          <p className="text-primary/80">
            {form.watch("startTime") &&
              form.watch("endTime") &&
              `${form.watch("startTime")} - ${form.watch("endTime")}`}
          </p>
        </div>
      </div>

      {/* ORGANIZERS SUMMARY */}
      <p className="text-xl text-primary font-semibold">Organizers</p>
      <div className="flex flex-col gap-2">
        {form.watch("organizerIds")?.map((organizerId) => (
          <UserRowCard
            key={organizerId}
            user={team.filter((user) => user.id === organizerId)[0]}
          />
        ))}
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
          className="rounded-md border object-cover aspect-square w-full h-full"
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
          type="button"
        >
          <MdEdit />
        </Button>
      </div>
      <div className="bg-primary-foreground rounded-md border border-border p-5">
        <p className="text-primary text-sm text-wrap">
          {form.watch("description")?.length > 0
            ? form.watch("description")
            : "No description provided"}
        </p>
      </div>

      {/* ABOUT SUMMARY */}
      <p className="text-xl text-primary font-semibold">About</p>
      <div className="text-primary text-wrap bg-primary-foreground rounded-md border border-border p-5">
        {form.watch("about") ? (
          <Renderer value={form.watch("about")?.body || ""} />
        ) : (
          "No about provided"
        )}
      </div>

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
                  className="rounded-md border object-cover aspect-square w-full h-full"
                  width={0}
                  height={0}
                />
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      ) : (
        <p className="text-sm">No extra images provided</p>
      )}

      {/* LOCATION AND ROOM SUMMARY */}
      <div className="flex justify-between items-center">
        <p className="text-xl text-primary font-semibold">Location</p>
        <Button
          onClick={() => goTo(STEPS.LOCATION)}
          variant="outline"
          type="button"
        >
          <MdEdit />
        </Button>
      </div>
      {form.watch("type") === "virtual" ? (
        <div className="p-5 bg-primary-foreground border border-border w-full rounded-md">
          <span className="flex gap-2 items-center text-primary text-sm">
            <MdLaptop size={25} /> <p>Virtual</p>
          </span>
        </div>
      ) : (
        <>
          <div className="p-5 bg-primary-foreground border border-border w-full rounded-md">
            <span className="flex gap-2 items-center text-primary text-sm">
              <MdSchool size={25} />{" "}
              <p>California State University, San Marcos</p>
            </span>
          </div>
          {form.watch("room") && (
            <div className="p-5 bg-primary-foreground border border-border w-full rounded-md">
              <span className="flex gap-2 items-center text-primary text-sm">
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
          type="button"
        >
          <MdEdit />
        </Button>
      </div>
      <div className="bg-primary-foreground rounded-md border border-border p-5 text-sm">
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
    </FormWrapper>
  );
};

export default Summary;

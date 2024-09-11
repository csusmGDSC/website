"use server";

import AvatarCard from "@/components/ui/cards/avatar-card";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiInstagram } from "react-icons/ci";
import {
  FaAngleLeft,
  FaBuilding,
  FaDiscord,
  FaLinkedin,
  FaLocationDot,
  FaXTwitter,
} from "react-icons/fa6";
import { getEventById } from "@/actions/event";
import dynamic from "next/dynamic";
import EmptyState from "@/components/main/empty-state";
import { GDSCUser } from "@/types/gdsc-user";
import { getMultipleUsersByIds } from "@/actions/users";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RSVPForm } from "@/components/main/events/rsvp-form";

const Renderer = dynamic(() => import("@/components/ui/renderer"), {
  ssr: false,
});

interface IParams {
  eventID: string;
}

/**
 * EventDetails component displays the details of a specific event.
 *
 * @param {{ params: IParams }} props - The component props.
 * @param {IParams} props.params - The event ID and other parameters.
 * @return {JSX.Element} The event details JSX element.
 */
export default async function EventDetails({ params }: { params: IParams }) {
  const eventData = await getEventById(params.eventID);
  const organizers = await getMultipleUsersByIds(eventData?.organizerIds || []);

  if (!eventData) {
    return (
      <EmptyState
        label="Event not found"
        actionLabel="Go back to events"
        href="/events"
      />
    );
  }

  return (
    <section className="w-full pt-10">
      <Container className="custom-max-width flex flex-col gap-10">
        <Link href={"/events"}>
          <Button
            variant="link"
            className="w-fit gap-2 !px-0 text-primary font-bold"
            size="lg"
          >
            <FaAngleLeft /> Back
          </Button>
        </Link>

        {/* EVENT IMAGE */}
        <div className="w-full overflow-hidden h-[300px] rounded-xl custom-box-shadow">
          <Image
            src={
              eventData.imageSrc
                ? `https://utfs.io/f/${eventData.imageSrc}`
                : "/images/stock/reflections.jpg"
            }
            alt={"event-image"}
            width="1920"
            height="1080"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-10 relative">
          {/* EVENT DETAILS */}
          <div className="flex-1 h-full flex flex-col gap-6 w-1/2">
            <div>
              <h1 className="text-3xl font-bold text-primary">
                {eventData?.name}
              </h1>
              <span className="text-primary/90 items-center flex gap-2">
                <FaBuilding />
                <h2 className="font-semibold">{eventData?.room}</h2>
              </span>
              <span className="text-primary/70 flex items-center gap-2">
                <FaLocationDot />
                <h3 className="font-semibold">{eventData?.location}</h3>
              </span>
            </div>

            <hr />

            <p className="text-sm text-primary">{eventData?.description}</p>

            <div className="flex flex-row gap-4 text-neutral-700">
              <a
                href="https://www.instagram.com/gdsc.csusm/"
                target="_blank"
                className="border border-border rounded-full p-1"
              >
                <CiInstagram
                  className="hover:text-blue hover:cursor-pointer transition"
                  size={20}
                />
              </a>
              <a
                href="https://x.com/dsccsusm?lang=en"
                target="_blank"
                className="border border-border rounded-full p-1"
              >
                <FaXTwitter
                  className="hover:text-blue hover:cursor-pointer transition"
                  size={20}
                />
              </a>
              <a className="border border-border rounded-full p-1">
                <FaLinkedin
                  className="hover:text-blue hover:cursor-pointer transition"
                  size={20}
                />
              </a>
              <a className="border border-border rounded-full p-1">
                <FaDiscord
                  className="hover:text-blue hover:cursor-pointer transition"
                  size={20}
                />
              </a>
            </div>

            <hr />

            <h1 className="text-3xl font-bold text-primary">About the Event</h1>

            <div>
              {/* We have to use a quill editor to render the Delta OPs language, so we can't use p tags here */}
              <Renderer value={eventData?.about || '{"ops":[{"insert":""}]}'} />
            </div>

            <ScrollArea className="w-full">
              <div className="flex gap-2">
                {eventData.extraImageSrcs.map((imageSrc) => {
                  return (
                    <Dialog key={imageSrc}>
                      <DialogTrigger>
                        <div className="w-[250px] overflow-hidden rounded-xl custom-box-shadow">
                          <Image
                            src={`https://utfs.io/f/${imageSrc}`}
                            alt={"event-image"}
                            width="1920"
                            height="1080"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogTitle>{eventData.name}</DialogTitle>
                        <DialogDescription>
                          <Image
                            src={`https://utfs.io/f/${imageSrc}`}
                            alt={"event-image"}
                            width="1920"
                            height="1080"
                            className="w-full h-full object-cover rounded-md"
                          />
                        </DialogDescription>
                      </DialogContent>
                    </Dialog>
                  );
                })}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>

            <hr />

            <div>
              <h1 className="text-3xl font-bold text-primary">Location</h1>
              <span className="text-primary/90 items-center flex gap-2">
                <FaBuilding />
                <h2 className="font-semibold">{eventData?.room}</h2>
              </span>
              <span className="text-primary/70 flex items-center gap-2">
                <FaLocationDot />
                <h3 className="font-semibold">{eventData?.location}</h3>
              </span>
            </div>

            <hr />

            <h1 className="text-3xl font-bold text-primary">Organizers</h1>
            <div className="flex flex-row flex-wrap gap-3 ">
              {organizers.map((organizer: GDSCUser) => (
                <AvatarCard key={organizer.id} user={organizer} />
              ))}
            </div>
          </div>

          {/* RSVP FORM */}
          <RSVPForm event={eventData}/>
        </div>
      </Container>
    </section>
  );
}
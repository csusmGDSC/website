"use server";

import AvatarCard from "@/components/ui/cards/avatar-card";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiInstagram } from "react-icons/ci";
import {
  FaAngleLeft,
  FaBuilding,
  FaDiscord,
  FaLaptop,
  FaLinkedin,
  FaLocationDot,
  FaXTwitter,
} from "react-icons/fa6";
import { getEventById } from "@/actions/event";
import EmptyState from "@/components/main/empty-state";
import { GDSCUser } from "@/types/gdsc-user";
import { getMultipleUsersByIds } from "@/actions/users";

import { RSVPForm } from "@/components/main/events/rsvp-form";
import { ImageListView } from "@/components/ui/image-list-view";
import { ClientMarkdown } from "@/components/main/events/client-markdown";

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
        <div className="w-full overflow-hidden h-[300px] rounded-md custom-box-shadow">
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
          <div className="flex-1 h-full flex flex-col gap-6 w-full md:w-1/2">
            <div>
              <h1 className="text-3xl font-bold text-primary">
                {eventData?.name}
              </h1>
              <span className="text-primary/90 items-center flex gap-2">
                {eventData?.room === "N/A" ? <FaLaptop /> : <FaBuilding />}
                <h2 className="font-semibold">
                  {eventData?.room === "N/A" ? "Virtual" : eventData?.room}
                </h2>
              </span>
              <span className="text-primary/70 flex items-center gap-2">
                <FaLocationDot />
                {eventData.type === "virtual" ? (
                  eventData.virtualURL ? (
                    <Link
                      href={eventData.virtualURL || "/"}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue hover:underline transition"
                    >
                      {eventData.virtualURL}
                    </Link>
                  ) : (
                    <p>No virtual link provided</p>
                  )
                ) : (
                  <h3 className="font-semibold">{eventData?.location}</h3>
                )}
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

            <ClientMarkdown source={eventData.about} />
            <ImageListView images={eventData.extraImageSrcs} />

            <hr />

            <h1 className="text-3xl font-bold text-primary">Organizers</h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {organizers.map((organizer: GDSCUser) => (
                <AvatarCard key={organizer.id} user={organizer} />
              ))}
            </div>
          </div>

          {/* RSVP FORM */}
          <RSVPForm event={eventData} />
        </div>
      </Container>
    </section>
  );
}

import Container from "@/components/ui/container";
import { BentoCard, BentoGrid } from "@/components/ui/magicui/bento-grid";
import Marquee from "@/components/ui/magicui/marquee";
import { CalendarIcon, FileTextIcon, InputIcon } from "@radix-ui/react-icons";
import { Share2Icon } from "lucide-react";
import React from "react";
import { cn, convertToReadableDate } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { AnimatedBeamMultipleOutputDemo } from "@/components/ui/magicui/output-demo";
import { testEvents } from "@/constants/test/example-events";
import ContentCard from "@/components/ui/cards/content-card";

const Features = () => {
  return (
    <Container
      heading="What does GDSC-CSUSM do?"
      subheading="We help students grow and accelerate their technical development"
      className="custom-max-width mt-10"
    >
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </Container>
  );
};

export default Features;

const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Host Workshops",
    description: "We host a variety of technical skill workshops",
    href: "/events",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute [--duration:40s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      >
        {testEvents?.map((e, index) => (
          <ContentCard
            title={e.name}
            description={e.description}
            date={
              e.date
                ? convertToReadableDate(
                    e.date.getMonth(),
                    e.date.getDate(),
                    e.date.getFullYear()
                  )
                : undefined
            }
            key={index}
            className="scale-75 -translate-y-10 hover:bg-primary/10 hover:scale-[.85] transition-transform"
            websiteUrl="/events/100"
            tags={e.tags}
            type="event"
          />
        ))}
      </Marquee>
    ),
  },
  {
    Icon: Share2Icon,
    name: "Build Projects",
    description: "We build production-ready software with modern technologies",
    href: "/projects",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Scheduling",
    description: "We accomdate around students' busy schedules",
    className: "col-span-3 lg:col-span-1",
    href: "/",
    cta: "Learn more",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
];

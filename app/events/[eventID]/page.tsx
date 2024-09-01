import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AvatarCard from "@/components/ui/cards/avatar-card";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LucideMonitorPlay } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  FaAngleLeft,
  FaBuilding,
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
  FaXTwitter,
} from "react-icons/fa6";
import { GrResources } from "react-icons/gr";
import { MdAccessTime, MdArticle, MdPerson } from "react-icons/md";

// TO-DO: Make the event details more dynamic using Event interface
const EventDetails = ({}) => {
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
            src="/images/stock/reflections.jpg"
            alt={"event-image"}
            width="1920"
            height="1080"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-10 relative">
          {/* EVENT DETAILS */}
          <div className="flex-1 h-full flex flex-col gap-6">
            <div>
              <h1 className="text-3xl font-bold text-primary">
                Intro to Web: React Ecosystem
              </h1>
              <span className="text-primary/90 items-center flex gap-2">
                <FaBuilding />
                <h2 className="font-semibold">Science Hall 2, Room 302</h2>
              </span>
              <span className="text-primary/70 flex items-center gap-2">
                <FaLocationDot />
                <h3 className="font-semibold">
                  California State University - San Marcos, United States
                </h3>
              </span>
            </div>

            <hr />

            <p className="text-sm text-primary">
              The conference featured keynote speeches from prominent React core
              team members, highlighting new features and improvements in the
              React library. Workshops and breakout sessions provided hands-on
              experience with cutting-edge tools and techniques, focusing on
              performance optimization, server-side rendering, and state
              management.
            </p>

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

            <p className="text-sm text-primary">
              Malware Analysis Course Workshop lessons will make you aware with
              all the basics of Malware Analysis. It starts by a revision on
              Cyber Security basics that needed from (Programming Basics to
              Network Basics).
              <br />
              <br />
              Then it will Dive into Malware Word by: Defining what is Malware,
              Types of Malware, and the Steps of Analysis.
              <br />
              <br />
              The road will be a bit long from Diving into the World of Virtual
              Machines, Basics of Static & Dynamic Analysis, Get Assembly x86,
              Dive into Assembly x86, Dive into IDA & Disassemble
              Algorithms(Advanced Static Analysis), Intro to Ghidra(Advanced
              Static Analysis), Intro to Debuggers(Advanced Dynamic Analysis),
              <br />
              <br />
              Finally we will end this course by Reporting.
            </p>

            <hr />

            <div>
              <h1 className="text-3xl font-bold text-primary">Location</h1>
              <span className="text-primary/90 items-center flex gap-2">
                <FaBuilding />
                <h2 className="font-semibold">Science Hall 2, Room 302</h2>
              </span>
              <span className="text-primary/70 flex items-center gap-2">
                <FaLocationDot />
                <h3 className="font-semibold">
                  California State University - San Marcos, United States
                </h3>
              </span>
            </div>

            <div className="w-full overflow-hidden rounded-xl custom-box-shadow">
              <Image
                src="/images/temp-map-csusm.png"
                alt={"event-image"}
                width="1920"
                height="1080"
                className="w-full h-full object-cover"
              />
            </div>

            <hr />

            <h1 className="text-3xl font-bold text-primary">Organizers</h1>
            <div className="flex flex-row flex-wrap gap-3 ">
              <AvatarCard
                name="Jaedon"
                role="Technical Lead"
                linkedinLink=""
                gitHubLink=""
                instagramLink=""
                imageSrc="/images/team/jaedonspurlock.jpg"
              />
              <AvatarCard
                name="Jaedon"
                role="Technical Lead"
                linkedinLink=""
                gitHubLink=""
                instagramLink=""
                imageSrc="/images/team/jaedonspurlock.jpg"
              />
              <AvatarCard
                name="Jaedon"
                role="Technical Lead"
                linkedinLink=""
                gitHubLink=""
                instagramLink=""
                imageSrc="/images/team/jaedonspurlock.jpg"
              />
              <AvatarCard
                name="Jaedon"
                role="Technical Lead"
                linkedinLink=""
                gitHubLink=""
                instagramLink=""
                imageSrc="/images/team/jaedonspurlock.jpg"
              />
              <AvatarCard
                name="Jaedon"
                role="Technical Lead"
                linkedinLink=""
                gitHubLink=""
                instagramLink=""
                imageSrc="/images/team/jaedonspurlock.jpg"
              />
              <AvatarCard
                name="Jaedon"
                role="Technical Lead"
                linkedinLink=""
                gitHubLink=""
                instagramLink=""
                imageSrc="/images/team/jaedonspurlock.jpg"
              />
              <AvatarCard
                name="Jaedon"
                role="Technical Lead"
                linkedinLink=""
                gitHubLink=""
                instagramLink=""
                imageSrc="/images/team/jaedonspurlock.jpg"
              />
            </div>
          </div>

          {/* RSVP FORM */}
          <div>
            <div className="w-full sm:w-[18rem] rounded-xl custom-box-shadow flex flex-col p-4 gap-3 sticky top-32 dark:bg-primary-foreground">
              <h1 className="text-3xl font-semibold text-primary">
                Interested?
              </h1>
              <span className="flex items-center gap-2">
                <MdAccessTime />
                <p className="text-primary font-semibold">
                  Aug 31, 12:00 - 1:00 PM
                </p>
              </span>

              <Button
                variant="outline"
                className="w-full gap-2 font-semibold text-primary/90"
              >
                <FaGithub /> Source Code
              </Button>
              <Button
                variant="outline"
                className="w-full font-semibold text-primary/90"
              >
                View Slides
              </Button>
              <Button className="bg-blue w-full font-medium hover:bg-blue/80">
                RSVP Now
              </Button>
              <div className="flex gap-2 my-4 text-primary/70 justify-center items-center">
                <MdPerson size={30} />
                <p>23 others coming</p>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 sm:gap-4">
          {/* RESOURCES TO GET STARTED */}
          <div>
            <h1 className="text-3xl font-bold text-primary">
              Resources To Get Started
            </h1>
            <p className="text-primary/80 mb-4">
              Take a look at these resources if you want to get a headstart
            </p>
            <div className="flex-1 custom-box-shadow rounded-xl p-4">
              <ScrollArea className="w-full h-[350px]">
                {exampleResources.map((resource, index) => (
                  <>
                    <Resource
                      key={index}
                      title={resource.title}
                      desc={resource.desc}
                      imageSrc={resource.imageSrc}
                      url={resource.url}
                      type={resource.type}
                    />
                    <hr />
                  </>
                ))}
              </ScrollArea>
            </div>
          </div>

          {/* LIST OF ATTENDEES */}
          <div>
            <h1 className="text-3xl font-bold text-primary">
              See who is attending
            </h1>
            <p className="text-primary/80 mb-4">
              Connect early and come together this event
            </p>
            <div className="flex-1 custom-box-shadow rounded-xl p-4">
              <ScrollArea className="w-full h-[350px]">
                {exampleAttendees.map((attendee, index) => (
                  <>
                    <Attendee
                      name={attendee.name}
                      major={attendee.major}
                      imageSrc={attendee.imageSrc}
                      linkedIn={attendee.linkedIn}
                      github={attendee.github}
                      key={index}
                    />
                    <hr />
                  </>
                ))}
              </ScrollArea>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EventDetails;

const Attendee = ({
  name,
  major,
  imageSrc,
  linkedIn,
  github,
}: {
  name: string;
  major: string;
  imageSrc: string;
  linkedIn: string;
  github: string;
}) => {
  return (
    <div className="flex justify-between my-3 pr-6">
      <span className="flex gap-3 items-center">
        <Avatar>
          <AvatarImage src={imageSrc} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>

        <span>
          <p className="text-sm text-primary/90 font-semibold">{name}</p>
          <p className="text-sm text-primary/70">{major}</p>
        </span>
      </span>

      <span className="flex items-center gap-2 text-primary/80">
        <a className="border border-border rounded-full p-1">
          <FaLinkedin
            className="hover:text-blue hover:cursor-pointer transition"
            size={20}
          />
        </a>
        <a className="border border-border rounded-full p-1">
          <FaGithub
            className="hover:text-blue hover:cursor-pointer transition"
            size={20}
          />
        </a>
      </span>
    </div>
  );
};

const Resource = ({
  title,
  desc,
  type,
  url,
  imageSrc,
}: {
  title: string;
  desc: string;
  imageSrc: string;
  type: string;
  url: string;
}) => {
  return (
    <div className="flex justify-between my-6 px-6 items-center gap-4">
      <span className="flex gap-5 items-center">
        <span>
          {type === "video" && <LucideMonitorPlay size={40} />}
          {type === "article" && <MdArticle size={40} />}
          {type === "other" && <GrResources size={40} />}
        </span>

        <span>
          <p className="text-sm text-primary/90 font-semibold">{title}</p>
          <p className="text-sm text-primary/70">{desc}</p>
        </span>
      </span>

      <Button className="bg-blue hover:bg-blue/80">
        {type === "video" && <p>Watch</p>}
        {type === "article" && <p>Read</p>}
        {type === "other" && <p>View</p>}
      </Button>
    </div>
  );
};

const exampleAttendees = [
  {
    name: "John Smith",
    major: "Computer Science",
    imageSrc: "/images/test/fake-people/1.jpg",
    linkedIn: "",
    github: "",
  },
  {
    name: "Jane Doe",
    major: "Mechanical Engineering",
    imageSrc: "/images/test/fake-people/2.jpg",
    linkedIn: "",
    github: "",
  },
  {
    name: "Michael Johnson",
    major: "Electrical Engineering",
    imageSrc: "/images/test/fake-people/3.jpg",
    linkedIn: "",
    github: "",
  },
  {
    name: "Emily Davis",
    major: "Biology",
    imageSrc: "/images/test/fake-people/4.jpg",
    linkedIn: "",
    github: "",
  },
  {
    name: "David Martinez",
    major: "Chemical Engineering",
    imageSrc: "/images/test/fake-people/5.jpg",
    linkedIn: "",
    github: "",
  },
  {
    name: "Olivia Brown",
    major: "Physics",
    imageSrc: "/images/test/fake-people/6.jpg",
    linkedIn: "",
    github: "",
  },
  {
    name: "James Wilson",
    major: "Mathematics",
    imageSrc: "/images/test/fake-people/7.jpg",
    linkedIn: "",
    github: "",
  },
  {
    name: "Sophia Taylor",
    major: "Civil Engineering",
    imageSrc: "/images/test/fake-people/8.jpg",
    linkedIn: "",
    github: "",
  },
  {
    name: "Alexander Moore",
    major: "Economics",
    imageSrc: "/images/test/fake-people/9.jpg",
    linkedIn: "",
    github: "",
  },
  {
    name: "Mia White",
    major: "Environmental Science",
    imageSrc: "/images/test/fake-people/10.jpg",
    linkedIn: "",
    github: "",
  },
  {
    name: "Benjamin Harris",
    major: "Information Technology",
    imageSrc: "/images/test/fake-people/11.jpg",
    linkedIn: "",
    github: "",
  },
  {
    name: "Charlotte Clark",
    major: "Business Administration",
    imageSrc: "/images/test/fake-people/12.jpg",
    linkedIn: "",
    github: "",
  },
  {
    name: "Daniel Walker",
    major: "Political Science",
    imageSrc: "/images/test/fake-people/13.jpg",
    linkedIn: "",
    github: "",
  },
  {
    name: "Amelia Hall",
    major: "Psychology",
    imageSrc: "/images/test/fake-people/14.jpg",
    linkedIn: "",
    github: "",
  },
  {
    name: "Lucas Lewis",
    major: "Sociology",
    imageSrc: "/images/test/fake-people/15.jpg",
    linkedIn: "",
    github: "",
  },
  {
    name: "Harper Young",
    major: "Art History",
    imageSrc: "/images/test/fake-people/16.jpg",
    linkedIn: "",
    github: "",
  },
  {
    name: "Ethan King",
    major: "Philosophy",
    imageSrc: "/images/test/fake-people/1.jpg",
    linkedIn: "",
    github: "",
  },
  {
    name: "Avery Wright",
    major: "Architecture",
    imageSrc: "/images/test/fake-people/2.jpg",
    linkedIn: "",
    github: "",
  },
  {
    name: "Logan Scott",
    major: "Music",
    imageSrc: "/images/test/fake-people/3.jpg",
    linkedIn: "",
    github: "",
  },
  {
    name: "Isabella Green",
    major: "Nursing",
    imageSrc: "/images/test/fake-people/4.jpg",
    linkedIn: "",
    github: "",
  },
  {
    name: "Jackson Adams",
    major: "History",
    imageSrc: "/images/test/fake-people/5.jpg",
    linkedIn: "",
    github: "",
  },
];

const exampleResources = [
  {
    title: "Getting Started with React",
    desc: "Learn the basics of React and start building interactive web applications from scratch.",
    type: "video",
    url: "",
    imageSrc: "/images/react-background.png",
  },
  {
    title: "Understanding React Components",
    desc: "Deep dive into React components, exploring how they work and how to create reusable elements.",
    type: "article",
    url: "",
    imageSrc: "/images/react-background.png",
  },
  {
    title: "React State Management Essentials",
    desc: "Master the fundamentals of state management in React to build dynamic and responsive apps.",
    type: "video",
    url: "",
    imageSrc: "/images/react-background.png",
  },
  {
    title: "React Hooks in Action",
    desc: "Explore the power of React Hooks and learn how they can simplify your component logic.",
    type: "article",
    url: "",
    imageSrc: "/images/react-background.png",
  },
  {
    title: "Advanced React Patterns",
    desc: "Level up your React skills by learning advanced patterns and techniques for building complex apps.",
    type: "video",
    url: "",
    imageSrc: "/images/react-background.png",
  },
  {
    title: "React Ecosystem Overview",
    desc: "Get familiar with the React ecosystem, including tools, libraries, and best practices for development.",
    type: "other",
    url: "",
    imageSrc: "/images/react-background.png",
  },
];

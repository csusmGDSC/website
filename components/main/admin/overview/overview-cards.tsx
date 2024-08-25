import Container from "@/components/ui/container";
import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { IoPeopleCircle } from "react-icons/io5";
import { MdEvent, MdPeople } from "react-icons/md";

const OverviewCards = () => {
  return (
    <Container className="-mt-16">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <li className="w-full rounded-xl border border-border p-2 flex items-center gap-4">
          <span className="p-4 rounded-full bg-blue bg-opacity-10">
            <MdEvent size={30} className="text-blue" />
          </span>

          <span>
            <h1 className="text-lg lg:text-2xl font-semibold text-primary/90">
              53
            </h1>
            <h2 className="lg:text-lg text-primary/70">Events</h2>
          </span>
        </li>

        <li className="w-full rounded-xl border border-border p-2 flex items-center gap-4">
          <span className="p-4 rounded-full bg-red bg-opacity-10">
            <IoPeopleCircle size={30} className="text-red" />
          </span>

          <span>
            <h1 className="text-lg lg:text-2xl font-semibold text-primary/90">
              103
            </h1>
            <h2 className="lg:text-lg text-primary/70">Members</h2>
          </span>
        </li>

        <li className="w-full rounded-xl border border-border p-2 flex items-center gap-4">
          <span className="p-4 rounded-full bg-yellow bg-opacity-10">
            <FaProjectDiagram size={30} className="text-yellow" />
          </span>

          <span>
            <h1 className="text-lg lg:text-2xl font-semibold text-primary/90">
              3
            </h1>
            <h2 className="lg:text-lg text-primary/70">Projects</h2>
          </span>
        </li>

        <li className="w-full rounded-xl border border-border p-2 flex items-center gap-4">
          <span className="p-4 rounded-full bg-green bg-opacity-10">
            <IoIosDocument size={30} className="text-green" />
          </span>

          <span>
            <h1 className="text-lg lg:text-2xl font-semibold text-primary/90">
              23
            </h1>
            <h2 className="lg:text-lg text-primary/70">Blogs</h2>
          </span>
        </li>
      </ul>
    </Container>
  );
};

export default OverviewCards;

"use client";

import React, { useState } from "react";
import Projects from "./project/projects";
import Interview from "./interview/interview";
import { cn } from "@/lib/utils";
import styles from "./branches.module.css";

const teams = ["Project", "Interview"];

/**
 * Component that shows the different teams a member can join
 */
const Branches = () => {
  const [currentTeam, setCurrentTeam] = useState<string>("Project");

  return (
    <>
      {/* Navigation Links */}
      <ul className={styles.navLinks}>
        {teams.map((team, index) => (
          <li
            key={index}
            className={cn(
              styles.navLink,
              team === currentTeam ? "border-blue" : "border-white"
            )}
          >
            {/* When a user clicks on a differnt link, change the current active section */}
            <div onClick={() => setCurrentTeam(team)}>{team}</div>
          </li>
        ))}
      </ul>

      {/* Current Selection Content */}
      {currentTeam === "Project" ? <Projects /> : <Interview />}
    </>
  );
};

export default Branches;

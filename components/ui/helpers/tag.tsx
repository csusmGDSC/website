import { cn } from "@/lib/utils";
import React from "react";
import { IconType } from "react-icons";

interface TagProps {
  text: string;
  icon?: IconType;
  color?: "blue" | "yellow" | "red" | "green";
}

// For some reason, using a string literal doesn't work very well with tailwind, this solves it
const colorClasses = {
  blue: "bg-blue/80",
  green: "bg-green/80",
  red: "bg-red/80",
  yellow: "bg-yellow/80",
};

/**
 * Component that just shows a box with text
 * @param {string} text The name of the tag
 * @param {"blue" | "yellow" | "red" | "green"} color The background color of the tag
 * @param {IconType} icon React-icons if the tag needs an icon (Visit https://react-icons.github.io/react-icons/ for icons)
 */
const Tag: React.FC<TagProps> = ({ text, icon: Icon, color = "blue" }) => {
  return (
    <p
      className={cn(
        "py-1 px-3 rounded-md truncate gap-2 text-center max-w-fit text-[10px] font-semibold text-neutral-700 flex flex-row items-center",
        colorClasses[color]
      )}
    >
      {text} {Icon && <Icon size={10} />}
    </p>
  );
};

export default Tag;

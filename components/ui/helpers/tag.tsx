import { cn } from "@/lib/utils";
import React from "react";
import { IconType } from "react-icons";

interface TagProps {
  text: string;
  icon?: IconType;
  color?: "blue" | "yellow" | "red" | "green";
}

/**
 * Component that just shows a box with text
 * @param {string} text The name of the tag
 * @param {"blue" | "yellow" | "red" | "green"} color The background color of the tag
 * @param {IconType} icon React-icons if the tag needs an icon (Visit https://react-icons.github.io/react-icons/ for icons)
 */
const Tag: React.FC<TagProps> = ({ text, icon: Icon, color = "blue" }) => {
  const colorClass = `bg-${color}/80`;

  return (
    <p
      className={cn(
        "py-1 px-3 rounded-md truncate gap-2 text-center max-w-fit text-[10px] font-semibold text-neutral-700 flex flex-row items-center",
        colorClass
      )}
    >
      {text} {Icon && <Icon size={10} />}
    </p>
  );
};

export default Tag;

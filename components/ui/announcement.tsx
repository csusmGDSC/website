import { cn } from "@/lib/utils";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

interface AnnouncementProps {
  onClick?: () => void;
  text: string;
  color: "red" | "green" | "blue" | "yellow";
}

/**
 * Renders an announcement component with a colored background and arrow icon.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.onClick - The click event handler.
 * @param {string} props.text - The text to display in the announcement.
 * @param {string} props.color - The color of the announcement. Can be "red", "green", "blue", or "yellow".
 * @return {JSX.Element} The rendered announcement component.
 */
export const Announcement = ({ onClick, text, color }: AnnouncementProps) => {
  const bgColors = {
    red: "bg-red/20",
    green: "bg-green/20",
    blue: "bg-blue/20",
    yellow: "bg-yellow/20",
  };

  const colors = {
    red: "text-red",
    green: "text-green",
    blue: "text-blue",
    yellow: "text-yellow",
  };

  return (
    <div
      className={cn(
        "rounded-full flex items-center gap-2 py-1 px-2 z-10 group hover:cursor-pointer",
        bgColors[color]
      )}
      onClick={onClick}
    >
      <span
        className={cn(
          "flex gap-2 text-xs font-semibold items-center bg-slate-100 rounded-full p-1",
          colors[color]
        )}
      >
        📣 Announcment
      </span>

      <p className={cn("text-xs font-semibold", colors[color])}>{text}</p>

      <FaArrowRight
        className={cn(
          "text-xs group-hover:translate-x-1 transition-transform",
          colors[color]
        )}
      />
    </div>
  );
};

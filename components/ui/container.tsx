import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  heading?: string;
  subheading?: string;
  children?: React.ReactNode;
  className?: string;
  padding?: boolean;
}

/**
 * Component that just is a helper component that has a title, sub-title, and children.
 * The reason this exists: Consistency with styling, and less repetitive time to remake the same html elements
 * @param {string} heading The main title of the container
 * @param {string} subheading The description of the container
 * @param {React.ReactNode} children React components that are used inside the container
 * @param {string} className CSS class names that extend the default container styles
 * @param {boolean} padding Whether or not there should be vertical padding
 */
const Container: React.FC<ContainerProps> = ({
  heading,
  subheading,
  children,
  className,
  padding = true,
}) => {
  return (
    <section
      className={cn(
        "w-full flex flex-col items-center justify-center px-2 md:px-0",
        padding ? "pt-20" : ""
      )}
    >
      {heading && (
        <h1 className="text-4xl font-bold text-foreground/70">{heading}</h1>
      )}
      {subheading && (
        <h2 className="text-2xl mt-2 text-foreground/70">{subheading}</h2>
      )}
      <div className={cn("w-full", className)}>{children}</div>
    </section>
  );
};

export default Container;

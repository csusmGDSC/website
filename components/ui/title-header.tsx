import React from "react";

interface TitleHeaderProps {
  heading: string;
}

/**
 * Title component that just is just a styled heading text. Used frequently in the website.
 * The reason this exists: Consistency with styling, and less repetitive time to remake the same html elements
 * @param {string} heading Text that describes the following section
 */
const TitleHeader: React.FC<TitleHeaderProps> = ({ heading }) => {
  return (
    <h1 className="text-2xl font-bold text-foreground/80 w-full text-center sm:text-left px-2 md:px-0 mb-8">
      {heading}
    </h1>
  );
};

export default TitleHeader;

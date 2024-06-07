import React from "react";

interface CardGridProps {
  children?: React.ReactNode;
  placeholder?: string;
}

/**
 * Component that sorts given elements in a styled grid.
 * The reason this exists: Consistency with styling, and less repetitive time to remake the same html elements
 * @param {React.ReactNode} children The elements that you want to put in the grid, could be text, cards, etc.
 * @param {string} placeholder Text that shows up when you don't provide any elements.
 */
const CardGrid: React.FC<CardGridProps> = ({ children, placeholder }) => {
  return (
    <div className="w-full flex flex-row flex-wrap gap-[1rem] px-2 md:px-0">
      {!children && <p>{placeholder}</p>}
      {children}
    </div>
  );
};

export default CardGrid;

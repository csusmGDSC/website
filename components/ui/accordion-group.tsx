import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/shadcn/accordion";

interface AccordionGroupProps {
  title?: string;
  accordionTuples: [string, string][];
}

/**
 * Component that shows a list of accordion items as one group. Used for things like FAQs, Resources, Etc.
 * Don't know what an accordion is? Check out this link, https://w3schools.com/w3css/w3css_accordions.asp
 * The reason this exists: Consistency with styling, and less repetitive time to remake the same html elements
 * @param {string} title The main title of the accordion group. (I.e. A title could be like "Frequently Asked Questions")
 * @param {[string, string][]} accordionTuples An array of tuples that contain a title and a description (i.e. Question and Answer).
 */
const AccordionGroup: React.FC<AccordionGroupProps> = ({
  title,
  accordionTuples,
}) => {
  return (
    <div className="w-full px-2 md:px-0 ">
      <h1 className="text-lg text-[#4d4d4d] font-semibold mb-2">{title}</h1>
      <Accordion
        type="single"
        collapsible
        className="w-full border px-2 rounded-sm shadow-sm"
      >
        {accordionTuples.map((tuple, index) => (
          <AccordionItem key={index} value={`item-${index}}`}>
            <AccordionTrigger className="text-[#5a5a5a] text-sm">
              {tuple[0]}
            </AccordionTrigger>
            <AccordionContent className="text-[#5a5a5a] text-xs">
              {tuple[1]}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionGroup;

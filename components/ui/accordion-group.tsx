import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <div className="w-full px-2 md:px-0">
      <h1 className="text-lg text-foreground/80 font-semibold mb-2">{title}</h1>
      <Accordion
        type="single"
        collapsible
        className="w-full px-4 rounded-md custom-box-shadow dark:bg-primary-foreground"
      >
        {accordionTuples.map((tuple, index) => (
          <AccordionItem key={index} value={`item-${index}}`} className="py-1">
            <AccordionTrigger className="text-foreground/70 text-sm !text-left">
              {tuple[0]}
            </AccordionTrigger>
            <AccordionContent className="text-foreground/70 text-xs">
              {tuple[1]}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionGroup;

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IconType } from "react-icons";

export interface TableActionButtonProps {
  action: string;
  icon: IconType;
  id: string;
  className?: string;
  onClick?: () => void;
}

/**
 * Renders a table action button with an icon and optional click event handler.
 * Also has a tooltip to show the action.
 *
 * @param {TableActionButtonProps} props - The properties for the table action button.
 * @param {string} props.action - The action text to display.
 * @param {IconType} props.icon - The icon component to display.
 * @param {string} props.id - The id of the button.
 * @param {string} [props.className] - The optional class name for the button.
 * @param {() => void} [props.onClick] - The optional click event handler.
 * @return {JSX.Element} The table action button component.
 */
export const TableActionButton = ({
  action,
  icon: Icon,
  id,
  className,
  onClick,
  ...props
}: TableActionButtonProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={150}>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            {...props}
            className={className}
            onClick={onClick}
            id={id}
          >
            <Icon size={20} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-base font-medium">{action}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

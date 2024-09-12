import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { GDSCUser } from "@/types/gdsc-user";
import { XIcon } from "lucide-react";
import React from "react";

export const UserRowCard = ({
  user,
  onDelete,
}: {
  user: GDSCUser;
  onDelete?: () => void;
}) => {
  return (
    <div className="w-full border border-border rounded-md p-5 bg-primary-foreground flex items-center justify-between">
      <span className="flex gap-2 items-center">
        <Avatar>
          <AvatarImage src={user?.image} />
          <AvatarFallback>{user?.fullName![0] || "?"}</AvatarFallback>
        </Avatar>

        <span>
          <p className="text-sm text-primary/90">{user?.fullName}</p>
          <p className="text-sm text-primary/70">
            {user?.branch as string} team
          </p>
        </span>
      </span>

      {onDelete && (
        <Button
          variant="outline"
          size="sm"
          className="text-primary hover:text-red"
          onClick={onDelete}
        >
          <XIcon />
        </Button>
      )}
    </div>
  );
};

import React, { Dispatch, SetStateAction } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useGDSCTeam } from "@/hooks/use-gdsc-team";
import { GDSCUser } from "@/types/gdsc-user";

export const SelectUserFromList = ({
  open,
  setOpen,
  setUser,
  usersSelected = [],
  setUsersSelected = () => {},
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setUser: (user: GDSCUser) => void;
  usersSelected: GDSCUser[];
  setUsersSelected: Dispatch<SetStateAction<GDSCUser[]>>;
}) => {
  const { team } = useGDSCTeam();

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No users found.</CommandEmpty>
          <CommandGroup heading="Admins">
            {team.map(
              (user) =>
                user.role === "ADMIN" &&
                !usersSelected.includes(user) && (
                  <>
                    <CommandItem
                      key={user.id}
                      value={user.fullName}
                      onSelect={() => {
                        setUser(user);
                        setUsersSelected([...usersSelected, user]);
                        setOpen(false);
                      }}
                    >
                      {user.fullName}
                    </CommandItem>
                    <CommandSeparator />
                  </>
                )
            )}
          </CommandGroup>
          <CommandGroup heading="Members">
            {team.map(
              (user) =>
                user.role === "USER" &&
                !usersSelected.includes(user) && (
                  <>
                    <CommandItem
                      key={user.id}
                      value={user.fullName}
                      onSelect={() => {
                        setUser(user);
                        setUsersSelected([...usersSelected, user]);
                        setOpen(false);
                      }}
                    >
                      {user.fullName}
                    </CommandItem>
                    <CommandSeparator />
                  </>
                )
            )}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

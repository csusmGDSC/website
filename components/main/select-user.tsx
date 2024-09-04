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

/**
 * A function to render a dialog for selecting users from a list.
 * It categorizes users into admins and members, and allows selection of users.
 *
 * @param {boolean} open - Whether the dialog is open or not.
 * @param {Dispatch<SetStateAction<boolean>>} setOpen - A function to set the open state of the dialog.
 * @param {(user: GDSCUser) => void} setUser - A function to set the selected user.
 * @param {GDSCUser[]} usersSelected - An array of already selected users.
 * @param {Dispatch<SetStateAction<GDSCUser[]>>} setUsersSelected - A function to set the array of selected users.
 * @return {JSX.Element} The JSX element representing the dialog.
 */
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

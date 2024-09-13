import React from "react";
import FormWrapper from "../form-wrapper";
import { EventFormValues } from "@/schemas";
import { UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { MdSchool } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

interface LocationFormProps {
  form: UseFormReturn<EventFormValues>;
}

const LocationForm = ({ form }: LocationFormProps) => {
  return (
    <FormWrapper
      title="Location"
      description="Please provide where your event is located"
    >
      <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>School</FormLabel>
            <div className="p-4 border border-border w-full rounded-md flex justify-between">
              <span className="flex gap-2 items-center">
                <MdSchool size={25} />{" "}
                <p>California State University, San Marcos</p>
              </span>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => {}}
                type="button"
                className="rounded-full"
              >
                <XIcon />
              </Button>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="room"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Room</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Enter where the room is located" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </FormWrapper>
  );
};

export default LocationForm;

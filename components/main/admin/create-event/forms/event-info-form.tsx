import React, { useRef, useState } from "react";
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
import { Input } from "@/components/ui/input";
import { EVENT_TYPES } from "@/types/gdsc-event";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, ImageIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";

interface EventInfoFormProps {
  form: UseFormReturn<EventFormValues>;
}

const EventInfoForm = ({ form }: EventInfoFormProps) => {
  const { user } = useUser();
  const imageElementRef = useRef<HTMLInputElement>(null);

  return (
    <FormWrapper
      title="Information"
      description="Please provide basic information about the event"
    >
      {/* NAME OF EVENT */}
      <FormField
        control={form.control}
        name="eventName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name of Event</FormLabel>
            <FormControl>
              <Input placeholder="Enter Name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* TYPE OF EVENT */}
      <FormField
        control={form.control}
        name="type"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Type of Event</FormLabel>
            <FormControl>
              <div className="flex gap-2 flex-wrap">
                {EVENT_TYPES.map((event_type) => (
                  <Button
                    key={event_type}
                    type="button"
                    variant="outline"
                    onClick={() => {
                      if (event_type === "virtual") {
                        form.setValue("room", "N/A");
                      } else {
                        form.resetField("room");
                      }

                      field.onChange(
                        field.value === event_type ? null : event_type
                      );
                    }}
                    className={cn(
                      "rounded-xl text-primary",
                      field.value === event_type
                        ? "bg-blue hover:bg-blue/80 hover:text-white text-white font-medium"
                        : ""
                    )}
                  >
                    {event_type.charAt(0).toUpperCase() + event_type.slice(1)}
                  </Button>
                ))}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* DATE OF EVENT */}
      <FormField
        control={form.control}
        name="date"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel>Date of Event</FormLabel>
            <FormControl>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                    type="button"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={(value) => {
                      field.onChange(value);
                    }}
                    initialFocus
                    fromDate={new Date()}
                  />
                </PopoverContent>
              </Popover>
            </FormControl>
          </FormItem>
        )}
      />

      {/* DURATION OF EVENT */}
      <div className="flex gap-2">
        <FormField
          control={form.control}
          name="startTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>From</FormLabel>
              <FormControl>
                <Input placeholder="HH:MM AM/PM" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="endTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>To</FormLabel>
              <FormControl>
                <Input placeholder="HH:MM AM/PM" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* MAIN IMAGE OF THE EVENT */}
      <FormField
        control={form.control}
        name="imageSrc"
        render={({ field }) => (
          <FormItem>
            {/* IMAGE UPLOADER, HIDDEN BECAUSE DEFAULT IS UGLY */}
            <input
              type="file"
              accept="image/*"
              ref={imageElementRef}
              onChange={(event) => {
                const image = event.target.files?.[0];
                field.onChange(image || null);
              }}
              className="hidden"
            />

            <FormLabel>Main Image</FormLabel>
            <div className="flex flex-col gap-2">
              {form.watch("imageSrc") ? (
                <div className="relative w-full h-[300px]">
                  <Image
                    src={URL.createObjectURL(form.watch("imageSrc")!)}
                    alt="event-image"
                    className="rounded-xl border object-cover aspect-square w-full h-full"
                    width={0}
                    height={0}
                  />

                  <Button
                    size="sm"
                    variant="outline"
                    type="button"
                    className="absolute top-2.5 right-2.5"
                    onClick={() => field.onChange(null)}
                  >
                    <XIcon />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => imageElementRef.current?.click()}
                  className="text-primary gap-2 h-[300px]"
                >
                  <ImageIcon className="" /> Select Image
                </Button>
              )}
            </div>
          </FormItem>
        )}
      />

      {/* ORGANIZERS OF EVENT, TODO: MAKE THIS DYNAMIC, DOESN'T DO ANYTHING YET */}
      {/* <FormField
        control={form.control}
        name="organizerIds"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Organizers</FormLabel> */}
      <div className="w-full border border-border rounded-xl p-5 bg-primary-foreground flex items-center justify-between">
        <span className="flex gap-2 items-center">
          <Avatar>
            <AvatarImage src={user?.imageUrl} />
            <AvatarFallback>{user?.fullName![0] || "?"}</AvatarFallback>
          </Avatar>

          <span>
            <p className="text-sm text-primary/90">{user?.fullName}</p>
            <p className="text-sm text-primary/70">
              {user?.publicMetadata.branch as string} team
            </p>
          </span>
        </span>

        <Button
          variant="ghost"
          size="sm"
          type="button"
          onClick={() => {}}
          className="rounded-full"
        >
          <XIcon />
        </Button>
      </div>
      {/* <FormMessage />
          </FormItem>
        )}
      /> */}
    </FormWrapper>
  );
};

export default EventInfoForm;

import React from "react";
import FormWrapper from "../form-wrapper";
import {
  ABOUT_MAX_LENGTH,
  DESCRIPTION_MAX_LENGTH,
  EventFormValues,
} from "@/schemas";
import { Controller, UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/ui/controlled-editor"), {
  ssr: false,
});

interface DescriptionFormProps {
  form: UseFormReturn<EventFormValues>;
}

const DescriptionForm = ({ form }: DescriptionFormProps) => {
  return (
    <FormWrapper
      title="Description"
      description="Please provide an in-depth summary of the event"
    >
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <div>
                <Textarea
                  {...field}
                  placeholder="Enter a short description of the event."
                  maxLength={DESCRIPTION_MAX_LENGTH}
                />
                <p className="text-sm text-primary/80">
                  {field.value?.length || 0}/{DESCRIPTION_MAX_LENGTH}
                </p>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <Controller
        name="about"
        control={form.control}
        defaultValue={form.getValues("about")}
        render={({ field }) => (
          <div className="w-full">
            <FormLabel>About</FormLabel>
            <Editor
              control={form.control}
              placeholder="Write a in-depth summary of the event."
              disabled={false}
              defaultValue={[]}
            />
            <p className="text-sm text-primary/80">
              {field.value?.body?.replace(/<(.|\n)*?>/g, "").trim().length || 0}
              /{ABOUT_MAX_LENGTH}
            </p>
          </div>
        )}
      />
    </FormWrapper>
  );
};

export default DescriptionForm;

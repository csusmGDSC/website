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
import { Input } from "@/components/ui/input";

interface LinksFormProps {
  form: UseFormReturn<EventFormValues>;
}

const LinksForm = ({ form }: LinksFormProps) => {
  return (
    <FormWrapper
      title="Links"
      description="Please provide links related to your event"
    >
      <FormField
        control={form.control}
        name="githubRepo"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Github Repo URL (optional)</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Enter URL" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="slidesURL"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Slides URL (optional)</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Enter URL of slides" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </FormWrapper>
  );
};

export default LinksForm;

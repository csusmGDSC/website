"use client";

import React, { useRef, useState } from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import FormWrapper from "../form-wrapper";
import {
  ABOUT_MAX_LENGTH,
  DESCRIPTION_MAX_LENGTH,
  EventFormValues,
} from "@/schemas";
import { Controller, UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { ImageIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });
import { commands } from "@uiw/react-md-editor";
import { EmbedYoutubeLink } from "../embed-youtube-link";
import { Input } from "@/components/ui/input";

interface DescriptionFormProps {
  form: UseFormReturn<EventFormValues>;
}

const DescriptionForm = ({ form }: DescriptionFormProps) => {
  const [imageError, setImageError] = useState<string | null>(null);
  const imageElementRef = useRef<HTMLInputElement>(null);

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

      <FormField
        control={form.control}
        name="tags"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Tags</FormLabel>
            <FormControl>
              <div className="border border-border flex flex-wrap rounded-md p-2 gap-4">
                {field.value?.map((tag, index) => (
                  <span
                    key={index}
                    className="relative flex justify-between p-2 rounded-md bg-primary-foreground"
                  >
                    <p className="text-sm">{tag}</p>

                    <button
                      onClick={() =>
                        field.onChange(
                          (field.value || []).filter((f) => f !== tag)
                        )
                      }
                      type="button"
                      className="group-hover:block rounded-full bg-black/70 hover:bg-black absolute -top-2.5 -right-2.5
                    text-white w-6 h-6 z-[4] border-2 border-white flex items-center justify-center transition-colors"
                    >
                      <XIcon className="w-3.5 h-3.5" />
                    </button>
                  </span>
                ))}

                <Input
                  type="text"
                  placeholder="Enter a tag"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      field.onChange([
                        ...(field.value || []),
                        e.currentTarget.value,
                      ]);
                      e.currentTarget.value = "";
                    }
                  }}
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="extraImageSrcs"
        render={({ field }) => {
          const handleImageUpload = (
            event: React.ChangeEvent<HTMLInputElement>
          ) => {
            event.preventDefault();
            const file = event.target.files && event.target.files[0];

            if (file !== null) {
              // Check if the image is correct size (constrained by mongodb) and correct file type
              // TO-DO: MOVE THESE CONSTANTS LATER
              const MAX_UPLOAD_SIZE = 1024 * 1024 * 16; // 16MB MAX BYTES ON MONGODB
              const ACCEPTED_FILE_TYPES = [
                "image/png",
                "image/jpeg",
                "image/jpg",
                "image/webp",
              ];

              if (file.size > MAX_UPLOAD_SIZE) {
                setImageError(
                  "Image size too large, max 16MB allowed. Your size was: " +
                    file.size / 1000000 +
                    " MB"
                );
                return;
              }

              if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
                setImageError(
                  "Image must be PNG, JPG, or WEBP. Your type was: " + file.type
                );
                return;
              }

              setImageError(null);

              field.onChange([...(field.value || []), file]);
            }
          };

          const handleRemoveImage = (imageSrc: File) => {
            field.onChange((field.value || []).filter((f) => f !== imageSrc));
          };

          return (
            <FormItem>
              <FormLabel>Extra Images</FormLabel>
              <FormControl>
                <>
                  {/* IMAGE UPLOADER, HIDDEN BECAUSE DEFAULT IS UGLY */}
                  <input
                    type="file"
                    accept="image/*"
                    ref={imageElementRef}
                    onChange={handleImageUpload}
                    className="hidden"
                  />

                  <div className="flex flex-col">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => imageElementRef.current?.click()}
                      className="text-primary gap-2 border border-border w-fit px-8"
                    >
                      <ImageIcon className="size-5" /> Add Image
                    </Button>

                    {field.value && field.value.length > 0 && (
                      <ScrollArea>
                        <div className="flex gap-4 py-4">
                          {field.value.map((imageSrc, index) => (
                            <div
                              key={index}
                              className="relative w-32 h-32 flex-shrink-0"
                            >
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleRemoveImage(imageSrc);
                                }}
                                type="button"
                                className="group-hover:block rounded-full bg-black/70 hover:bg-black absolute -top-2.5 -right-2.5
                    text-white w-6 h-6 z-[4] border-2 border-white flex items-center justify-center transition-colors"
                              >
                                <XIcon className="w-3.5 h-3.5" />
                              </button>
                              <Image
                                src={URL.createObjectURL(imageSrc)}
                                alt="Uploaded"
                                fill
                                className="rounded-md border object-cover"
                              />
                            </div>
                          ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                      </ScrollArea>
                    )}
                  </div>
                </>
              </FormControl>
              <FormMessage />
              {imageError && (
                <p className="text-destructive text-sm">{imageError}</p>
              )}
            </FormItem>
          );
        }}
      />

      <FormField
        control={form.control}
        name="about"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <div className="w-full">
                <FormLabel>About</FormLabel>
                <FormDescription>
                  In-depth description of the event. This editor has markdown
                  support with youtube link embeds.
                </FormDescription>
                <MDEditor
                  value={field.value || ""}
                  onChange={field.onChange}
                  textareaProps={{
                    maxLength: ABOUT_MAX_LENGTH,
                    placeholder:
                      "Enter markdown here, you can include code samples, links, and more",
                  }}
                  className="mt-2"
                  extraCommands={[
                    EmbedYoutubeLink,
                    commands.codeEdit,
                    commands.codeLive,
                    commands.codePreview,
                    commands.fullscreen,
                  ]}
                />
                <p className="text-sm text-primary/80">
                  {field.value?.length || 0}/{ABOUT_MAX_LENGTH}
                </p>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </FormWrapper>
  );
};

export default DescriptionForm;

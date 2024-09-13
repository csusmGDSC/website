"use client";

import * as React from "react";

// USER AUTHENTICATION
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { completeOnboarding } from "@/actions/onboarding";

import { cn, upperCaseFirstLetter } from "@/lib/utils";

// CONSTANTS
import { GDSC_BRANCHES, GDSC_POSITIONS } from "@/types/gdsc-user";

// COMPONENTS
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Container from "@/components/ui/container";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MdInfo } from "react-icons/md";

// FORM VALIDATION WITH ZOD, REACT-HOOK-FORM, SHADCN-UI. See https://ui.shadcn.com/docs/components/form for more info
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { OnboardingSchema, SHORT_BIO_MAX_LENGTH } from "@/schemas";

/**
 * Onboarding page for new users.
 *
 * This component handles the onboarding process for new users,
 * including collecting user information and updating their profile.
 *
 * [Note]: This page is only accessed by new users who have not completed their onboarding.
 *
 * @return {JSX.Element} The onboarding component JSX element.
 */
export default function OnboardingPage() {
  const [error, setError] = React.useState("");
  const { user } = useUser();
  const router = useRouter();

  const form = useForm<z.infer<typeof OnboardingSchema>>({
    resolver: zodResolver(OnboardingSchema),
    defaultValues: {
      firstName: user?.firstName ?? "",
      lastName: user?.lastName ?? "",
      shortBio: "",
      position: null,
      branch: null,
      website: "",
      github: "",
      linkedin: "",
      instagram: "",
      twitter: "",
      discord: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof OnboardingSchema>) => {
    const res = await completeOnboarding(values);
    if (res?.message) {
      // Reloads the user's data from Clerk's API
      await user?.reload();
      router.push("/");
    }
    if (res?.error) {
      setError(res?.error);
    }
  };

  return (
    <Container className="custom-max-width pt-20">
      <div className="flex flex-col gap-10">
        {/* INTRODUCTION */}
        <div className="flex items-center gap-4">
          <Image
            src="/images/gdsc/logo-only.png"
            alt="gdsc-logo"
            width="100"
            height="100"
            className="w-auto h-auto"
          />
          <span>
            <h1 className="text-xl sm:text-3xl font-bold text-primary w-full">
              Welcome to GDSC-CSUSM
            </h1>
            <h2 className="sm:text-xl text-primary/80 w-full">
              We&apos;re glad you&apos;re here!
            </h2>
          </span>
        </div>

        <hr />

        {/* DISCLOSURE */}
        <div className="flex flex-col gap-4">
          <span className="flex items-center gap-4">
            <MdInfo size={30} className="text-primary" />
            <p>Before we get started, we need some information about you.</p>
          </span>
        </div>

        {/* FORM */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-10"
          >
            {/* FIRST NAME INPUT */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* LAST NAME INPUT */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* SHORT BIO INPUT */}
            <FormField
              control={form.control}
              name="shortBio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Bio</FormLabel>
                  <FormControl>
                    <>
                      <Textarea
                        placeholder="Enter a short description of who you are! This can include your major, interests, and more."
                        maxLength={SHORT_BIO_MAX_LENGTH}
                        {...field}
                      />
                      <p className="text-sm text-primary/80">
                        {field.value?.length || 0}/{SHORT_BIO_MAX_LENGTH}
                      </p>
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* GRADUATION YEAR INPUT */}
            <FormField
              control={form.control}
              name="graduationYear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Graduation Year</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter year (e.g. 2024)"
                      {...field}
                      min="1960"
                      onChange={(e) => {
                        // Convert the string value to a number and update the field
                        const numericValue = Number(e.target.value);
                        field.onChange(numericValue);
                      }}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* POSITION AND BRANCH SECTION */}
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-3xl font-bold text-primary w-full">
                  Placement
                </h1>
                <h2 className="text text-primary/80 w-full">
                  Choose your position and team at GDSC-CSUSM
                </h2>
              </div>

              {/* POSITION INPUT */}
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Position</FormLabel>
                    <FormControl>
                      <div className="flex gap-2 flex-wrap">
                        {GDSC_POSITIONS.filter(
                          (gdsc_position) =>
                            gdsc_position !== "president" &&
                            gdsc_position !== "staff"
                        ).map((gdsc_position) => (
                          <Button
                            key={gdsc_position}
                            type="button"
                            variant="outline"
                            onClick={() => {
                              field.onChange(
                                field.value === gdsc_position
                                  ? null
                                  : gdsc_position
                              );
                            }}
                            className={cn(
                              "rounded-md text-primary",
                              field.value === gdsc_position
                                ? "bg-blue hover:bg-blue/80 hover:text-white text-white font-medium"
                                : ""
                            )}
                          >
                            {upperCaseFirstLetter(gdsc_position)}
                          </Button>
                        ))}
                      </div>
                    </FormControl>
                    <FormDescription className="text-primary/80 text-xs">
                      Choose the position that best fits you
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* BRANCH INPUT */}
              <FormField
                control={form.control}
                name="branch"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Branch</FormLabel>
                    <FormControl>
                      <div className="flex gap-2 flex-wrap">
                        {GDSC_BRANCHES.map((gdsc_branch) => (
                          <Button
                            key={gdsc_branch}
                            type="button"
                            variant="outline"
                            onClick={() => {
                              field.onChange(
                                field.value === gdsc_branch ? null : gdsc_branch
                              );
                            }}
                            className={cn(
                              "rounded-md text-primary",
                              field.value === gdsc_branch
                                ? "bg-blue hover:bg-blue/80 hover:text-white text-white font-medium"
                                : ""
                            )}
                          >
                            {upperCaseFirstLetter(gdsc_branch)}
                          </Button>
                        ))}
                      </div>
                    </FormControl>
                    <FormDescription className="text-primary/80 text-xs">
                      Choose the team you&apos;re interested in joining
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* SOCIAL LINKS SECTION */}
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-3xl font-bold text-primary w-full">
                  Links
                </h1>
                <h2 className="text text-primary/80 w-full">
                  Add links so that others can connect to you. <br /> We love
                  being able to help students grow their network, so it is
                  encouraged to include some links.
                </h2>
              </div>

              {/* WEBSITE INPUT, HAS TOOLTIP FOR NEW USERS IF CONFUSED */}
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <span className="flex items-center gap-2">
                        <label>Website</label>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <MdInfo className="text-primary" />
                            </TooltipTrigger>
                            <TooltipContent>
                              You can include links to your website or portfolio
                              so others can visit.
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter URL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* TWITTER INPUT */}
              <FormField
                control={form.control}
                name="twitter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Twitter</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter URL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* INSTAGRAM INPUT */}
              <FormField
                control={form.control}
                name="instagram"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Instagram</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter URL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* GITHUB INPUT */}
              <FormField
                control={form.control}
                name="github"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Github</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter URL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* LINKEDIN INPUT */}
              <FormField
                control={form.control}
                name="linkedin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LinkedIn</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter URL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* DISCORD INPUT */}
              <FormField
                control={form.control}
                name="discord"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Discord</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* ENTIRE FORM SUBMIT BUTTON */}
            <Button type="submit" className="bg-blue hover:bg-blue/80 w-full">
              Submit
            </Button>

            {error && <p className="text-destructive">{error}</p>}
          </form>
        </Form>
      </div>
    </Container>
  );
}

"use server";

import { OnboardingSchema } from "@/schemas";
import { GDSCUser } from "@/types/gdsc-user";
import { auth, clerkClient } from "@clerk/nextjs/server";
import * as z from "zod";

export const completeOnboarding = async (
  values: z.infer<typeof OnboardingSchema>
) => {
  const { userId } = auth();
  const validatedFields = OnboardingSchema.safeParse(values);

  if (!userId) {
    return { message: "No Logged In User" };
  }

  if (!validatedFields.success) {
    return { error: validatedFields.error.errors[0].message };
  }

  const publicMetadata: Partial<GDSCUser> = {
    fullName: `${validatedFields.data.firstName} ${validatedFields.data.lastName}`,
    total_points: 0,
    role: "USER",
    position: validatedFields.data.position!,
    branch: validatedFields.data.branch!,
    website: validatedFields.data.website,
    github: validatedFields.data.github,
    linkedin: validatedFields.data.linkedin,
    instagram: validatedFields.data.instagram,
    twitter: validatedFields.data.twitter,
    discord: validatedFields.data.discord,
    bio: validatedFields.data.shortBio,
    tags: [],
  };

  try {
    const res = await clerkClient().users.updateUser(userId, {
      firstName: validatedFields.data.firstName,
      lastName: validatedFields.data.lastName,
      publicMetadata: {
        ...publicMetadata,
        onboardingComplete: true,
      },
    });
    return { message: res.publicMetadata };
  } catch (err) {
    return { error: "There was an error updating the user metadata." };
  }
};

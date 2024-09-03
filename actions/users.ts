"use server";

import { GDSCUser, GDSC_BRANCHES, GDSC_POSITIONS } from "@/types/gdsc-user";
import { clerkClient, User } from "@clerk/nextjs/server";

export async function mapClerkUserToGDSCUser(user: User): Promise<GDSCUser> {
  return {
    id: user.id,
    fullName: user.fullName || "",
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    position: user.publicMetadata.position as (typeof GDSC_POSITIONS)[number],
    branch: user.publicMetadata.branch as (typeof GDSC_BRANCHES)[number],
    website: (user.publicMetadata.website as string) || "",
    github: (user.publicMetadata.github as string) || "",
    linkedin: (user.publicMetadata.linkedin as string) || "",
    instagram: (user.publicMetadata.instagram as string) || "",
    twitter: (user.publicMetadata.twitter as string) || "",
    bio: (user.publicMetadata.shortBio as string) || "",
    tags: (user.publicMetadata.tags as string[]) || [],
    graduationYear: (user.publicMetadata.graduationYear as number) || 0,
    total_points: (user.publicMetadata.total_points as number) || 0,
    email: user.emailAddresses[0].emailAddress,
    image: user.imageUrl,
    role: user.publicMetadata.role as "USER" | "ADMIN",
  };
}

export async function getUsers(): Promise<GDSCUser[]> {
  const users = await clerkClient.users.getUserList();

  const GDSCUserData: GDSCUser[] = [];
  for (const user of users.data) {
    GDSCUserData.push(await mapClerkUserToGDSCUser(user));
  }
  return GDSCUserData;
}

export async function getMultipleUsersByIds(
  ids: string[]
): Promise<GDSCUser[]> {
  const users: GDSCUser[] = [];

  for (const id of ids) {
    const user = await getUserById(id);
    if (user) {
      users.push(user);
    }
  }

  return users;
}

export async function getUserById(userId: string): Promise<GDSCUser | null> {
  const user = await clerkClient.users.getUser(userId);

  if (!user) {
    return null;
  }

  return mapClerkUserToGDSCUser(user);
}

export async function removeUserById(userId: string) {
  await clerkClient.users.deleteUser(userId);
}

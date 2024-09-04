import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from "@clerk/nextjs/server";

const f = createUploadthing();

/**
 * Read the docs for more info on UploadThing routing: https://docs.uploadthing.com/getting-started/appdir
 */
export const GDSCFileRouter = {
  imageUploader: f({ image: { maxFileSize: "16MB", maxFileCount: 10 } })
    .middleware(async ({ req }) => {
      const user = auth();

      if (!user) {
        throw new UploadThingError("Not authenticated");
      }

      if (user.sessionClaims?.metadata.role !== "ADMIN") {
        throw new UploadThingError(
          "Not authorized, only admins can upload files."
        );
      }

      return { userId: user.userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      return { imageId: file.url, uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type GDSCFileRouter = typeof GDSCFileRouter;

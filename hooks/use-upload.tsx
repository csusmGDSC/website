"use client";

import { generateReactHelpers } from "@uploadthing/react";
import { GDSCFileRouter } from "@/app/api/uploadthing/core";

/**
 * Hooks provided by UploadThing to upload images
 * */
export const { useUploadThing, uploadFiles } =
  generateReactHelpers<GDSCFileRouter>();

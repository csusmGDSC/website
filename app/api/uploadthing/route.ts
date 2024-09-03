import { createRouteHandler } from "uploadthing/next";
import { GDSCFileRouter } from "./core";

export const { GET, POST } = createRouteHandler({
  router: GDSCFileRouter,
});

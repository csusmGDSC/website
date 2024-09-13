"use client";

import React from "react";
import dynamic from "next/dynamic";

const MDX = dynamic(
  () =>
    import("@uiw/react-md-editor").then((mod) => {
      return mod.default.Markdown;
    }),
  { ssr: false }
);

export const ClientMarkdown = ({ source }: { source: string | null }) => {
  console.log("SOURCE: ", source);
  return <MDX source={source || "No information provided"} />;
};

import FAQ from "@/components/main/resources/faq";
import PageHeader from "@/components/ui/page-header";
import React from "react";

const Resources = () => {
  return (
    <main className="w-full mt-[4.5rem]">
      {/* PAGE HEADER */}
      <PageHeader
        title="Resources"
        subTitle="Past recordings of events, past leetcode sessions, FAQs, and more"
        backgroundImageSrc="/images/background-3.png"
      />

      {/* PAGE CONTENT */}
      <FAQ/>
    </main>
  );
};

export default Resources;

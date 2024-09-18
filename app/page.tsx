"use client";

import Hero from "@/components/main/homepage/hero";
import Team from "@/components/main/homepage/team";
import Branches from "@/components/main/homepage/branches";
import Features from "@/components/main/homepage/features";
import Features3 from "@/components/main/homepage/features-3";
import BottomApplySection from "@/components/main/homepage/bottom-apply";
import { useEffect } from "react";
import { notification } from "antd";
import { BsMicrosoftTeams } from "react-icons/bs";

/**
 * The home page of the website, for more information on NextJS page routing, visit the documentation
 */
export default async function Home() {
  useEffect(() => {
    const existingNotification = document.querySelector(
      ".ant-notification-notice"
    );
    if (!existingNotification) {
      notification.open({
        key: "uniqueNotification", // Add a unique key to ensure only one notification
        message: "Want to stay updated?",
        description: "Click here to join our Microsoft Teams channel!",
        showProgress: true,
        pauseOnHover: false,
        duration: 5,
        icon: <BsMicrosoftTeams className="text-2xl text-[#4E5FBF]" />,
        placement: "bottomRight",
        onClick: () => {
          window.open(
            "https://teams.microsoft.com/l/team/19%3A7u6FOYbIkk7NLclaCv9ucmdDrPBkvXReZm2ixYlEe601%40thread.tacv2/conversations?groupId=8ca48579-37f4-4060-9bf3-cfca2a74f25e&tenantId=128753ab-cb28-4f82-9733-2b9b91d2aca9",
            "_blank"
          );
        },
      });
    }
  }, []);

  return (
    <main className="w-full mt-[4.5rem]">
      <div className="space-y-10">
        <Hero />
        <Features />
        <Features3 />
        <Branches />
        <Team />
      </div>
      <BottomApplySection />
    </main>
  );
}

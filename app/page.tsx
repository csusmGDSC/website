import Hero from "@/components/main/homepage/hero";
import Team from "@/components/main/homepage/team";
import Branches from "@/components/main/homepage/branches";
import NearbyEvents from "@/components/main/homepage/nearby-events";
import Features from "@/components/main/homepage/features";
import Features2 from "@/components/main/homepage/features-2";
import Features3 from "@/components/main/homepage/features-3";
import BottomApplySection from "@/components/main/homepage/bottom-apply";

/**
 * The home page of the website, for more information on NextJS page routing, visit the documentation
 */
export default function Home() {
  return (
    <main className="w-full mt-[4.5rem]">
      <div className="space-y-10">
        <Hero />
        <NearbyEvents />
        <Features />
        <Features3 />
        <Branches />
        <Features2 />
        <Team />
      </div>
      <BottomApplySection />
    </main>
  );
}

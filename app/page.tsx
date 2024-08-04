import Hero from "@/components/main/homepage/hero";
import Team from "@/components/main/homepage/team";
import Socials from "@/components/main/homepage/socials";
import Branches from "@/components/main/homepage/branches";
import NearbyEvents from "@/components/main/homepage/nearby-events";
import Leaderboard from "@/components/main/leaderboard";
import Features from "@/components/main/homepage/features";
import Gallery from "@/components/main/homepage/gallery";
import { Skeleton } from "@/components/ui/shadcn/skeleton";
import Container from "@/components/ui/container";
import Features2 from "@/components/main/homepage/features-2";
import Features3 from "@/components/main/homepage/features-3";

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
        {/* <Leaderboard /> */}
        <Team />
      </div>
      <Socials />
    </main>
  );
}

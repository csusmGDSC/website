import Benefits from "@/components/main/homepage/benefits/benefits";
import Hero from "@/components/main/homepage/hero/hero";
import Team from "@/components/main/homepage/team/team";
import Socials from "@/components/main/homepage/socials/socials";
import Branches from "@/components/main/homepage/branches/branches";
import NearbyEvents from "@/components/main/homepage/nearby-events/nearby-events";
import AboutCSUSM from "@/components/main/homepage/about-csusm/about-csusm";
import Leaderboard from "@/components/main/leaderboard";

/**
 * The home page of the website, for more information on NextJS page routing, visit the documentation
 */
export default function Home() {
  return (
    <main className="w-full mt-[4.5rem]">
      <Hero />
      <NearbyEvents />
      <Benefits />
      <Branches />
      <Leaderboard />
      <AboutCSUSM />
      <Team />
      <Socials />
    </main>
  );
}

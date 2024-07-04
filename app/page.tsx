import Hero from "@/components/main/homepage/hero";
import Team from "@/components/main/homepage/team";
import Socials from "@/components/main/homepage/socials";
import Branches from "@/components/main/homepage/branches";
import NearbyEvents from "@/components/main/homepage/nearby-events";
import AboutCSUSM from "@/components/main/homepage/about-csusm";
import Leaderboard from "@/components/main/leaderboard";
import Features from "@/components/main/homepage/features";
import Gallery from "@/components/main/homepage/gallery";

/**
 * The home page of the website, for more information on NextJS page routing, visit the documentation
 */
export default function Home() {
  return (
    <main className="w-full mt-[4.5rem]">
      <Hero />
      <NearbyEvents />
      {/* <Gallery /> */}
      <Features />
      <Branches />
      {/* <Leaderboard /> */}
      {/* <AboutCSUSM /> */}
      <Team />
      <Socials />
    </main>
  );
}

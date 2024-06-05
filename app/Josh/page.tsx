import Benefits from "@/components/main/homepage/benefits/benefits";
import Hero from "@/components/main/homepage/hero/hero";
import Team from "@/components/main/homepage/team/team";
import Paths from "@/components/main/homepage/paths/paths";
import UpcomingEvents from "@/components/main/homepage/upcoming-events/upcoming-events";
import Socials from "@/components/main/homepage/socials/socials";

/**
 * The home page of the website, for more information on NextJS page routing, visit the documentation
 */
export default function Josh() {
  return (
    <main className="w-full mt-[4.5rem]">
      <Hero />
      <UpcomingEvents />
      <Benefits />
      <Paths />
      <Team />
      <Socials />
      <p>Hey Guys - Josh</p>
    </main>
  );
}

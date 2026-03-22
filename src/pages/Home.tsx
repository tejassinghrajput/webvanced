import { PageLayout } from "@/components/layout/PageLayout";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomeFutureReady } from "@/components/sections/HomeFutureReady";
import { HomeAbout } from "@/components/sections/HomeAbout";
import { HomeInnovation } from "@/components/sections/HomeInnovation";
import { HomeProcess } from "@/components/sections/HomeProcess";
import { HomeIndustries } from "@/components/sections/HomeIndustries";
import { HomeStats } from "@/components/sections/HomeStats";
import { HomeLogos } from "@/components/sections/HomeLogos";
import { HomeTeam } from "@/components/sections/HomeTeam";
import { HomeEdge } from "@/components/sections/HomeEdge";
import { HomeFAQ } from "@/components/sections/HomeFAQ";
import { HomeCTA } from "@/components/sections/HomeCTA";

export default function HomePage() {
  return (
    <PageLayout>
      <HomeHero />
      <HomeFutureReady />
      <HomeAbout />
      <HomeInnovation />
      <HomeProcess />
      <HomeIndustries />
      <HomeStats />
      <HomeLogos />
      <HomeTeam />
      <HomeEdge />
      <HomeFAQ />
      <HomeCTA />
    </PageLayout>
  );
}

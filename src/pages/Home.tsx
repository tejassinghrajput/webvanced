import { PageLayout } from "@/components/layout/PageLayout";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomeFutureReady } from "@/components/sections/HomeFutureReady";
import { HomeStats } from "@/components/sections/HomeStats";
import { HomeLogos } from "@/components/sections/HomeLogos";
import { HomeEdge } from "@/components/sections/HomeEdge";
import { HomeCTA } from "@/components/sections/HomeCTA";

export default function HomePage() {
  return (
    <PageLayout>
      <HomeHero />
      <HomeFutureReady />
      <HomeStats />
      <HomeLogos />
      <HomeEdge />
      <HomeCTA />
    </PageLayout>
  );
}

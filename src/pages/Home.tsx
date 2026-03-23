import { SEO } from "@/components/seo/SEO";
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
      <SEO
        title="From Invisible to Inevitable"
        description="Webvance is a full-service digital agency that crafts SEO strategies, web development, PPC campaigns, mobile apps, and content marketing to grow your business with precision."
        canonical="https://webvance.tech/"
      />
      <HomeHero />
      <HomeFutureReady />
      <HomeStats />
      <HomeLogos />
      <HomeEdge />
      <HomeCTA />
    </PageLayout>
  );
}

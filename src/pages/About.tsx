import { PageLayout } from "@/components/layout/PageLayout";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutMission } from "@/components/sections/AboutMission";
import { AboutPrinciples } from "@/components/sections/AboutPrinciples";
import { AboutCTA } from "@/components/sections/AboutCTA";

export default function AboutPage() {
  return (
    <PageLayout>
      <AboutHero />
      <AboutMission />
      <AboutPrinciples />
      <AboutCTA />
    </PageLayout>
  );
}

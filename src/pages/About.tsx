import { SEO } from "@/components/seo/SEO";
import { PageLayout } from "@/components/layout/PageLayout";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutMission } from "@/components/sections/AboutMission";
import { AboutPrinciples } from "@/components/sections/AboutPrinciples";
import { AboutTeam } from "@/components/sections/AboutTeam";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function AboutPage() {
  return (
    <PageLayout>
      <SEO
        title="About Webvance"
        description="Learn the Webvance story — a digital agency built to make great digital work accessible to every business, without the agency bloat, broken promises, or disappearing act after launch."
        canonical="https://webvance.tech/about"
      />
      <BackgroundBeamsWithCollision className="bg-[#03070e]">
        <div className="relative z-10 w-full">
          <AboutHero />
        </div>
      </BackgroundBeamsWithCollision>
      <AboutMission />
      <AboutTeam />
      <AboutPrinciples />
    </PageLayout>
  );
}

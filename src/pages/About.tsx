import { PageLayout } from "@/components/layout/PageLayout";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutMission } from "@/components/sections/AboutMission";
import { AboutPrinciples } from "@/components/sections/AboutPrinciples";
import { AboutTeam } from "@/components/sections/AboutTeam";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function AboutPage() {
  return (
    <PageLayout>
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

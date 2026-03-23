import { PageLayout } from "@/components/layout/PageLayout";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { ServicesFeatures } from "@/components/sections/ServicesFeatures";
import { ServicesDirectory } from "@/components/sections/ServicesDirectory";
import { ServicesCTA } from "@/components/sections/ServicesCTA";

export default function ServicesPage() {
  return (
    <PageLayout>
      <ServicesHero />
      <ServicesFeatures />
      <ServicesDirectory />
      <ServicesCTA />
    </PageLayout>
  );
}

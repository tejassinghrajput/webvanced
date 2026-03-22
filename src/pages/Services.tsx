import { PageLayout } from "@/components/layout/PageLayout";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { ServicesFeatures } from "@/components/sections/ServicesFeatures";
import { ServicesCTA } from "@/components/sections/ServicesCTA";

export default function ServicesPage() {
  return (
    <PageLayout>
      <ServicesHero />
      <ServicesFeatures />
      <ServicesCTA />
    </PageLayout>
  );
}

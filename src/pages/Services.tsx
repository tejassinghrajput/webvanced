import { SEO } from "@/components/seo/SEO";
import { PageLayout } from "@/components/layout/PageLayout";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { ServicesFeatures } from "@/components/sections/ServicesFeatures";
import { ServicesDirectory } from "@/components/sections/ServicesDirectory";
import { ServicesCTA } from "@/components/sections/ServicesCTA";

export default function ServicesPage() {
  return (
    <PageLayout>
      <SEO
        title="Digital Services & Solutions"
        description="Explore Webvance's full-spectrum digital services: SEO, PPC, web development, mobile apps, content writing, graphic design and IT outsourcing — all under one agency."
        canonical="https://webvance.tech/services"
      />
      <ServicesHero />
      <ServicesFeatures />
      <ServicesDirectory />
      <ServicesCTA />
    </PageLayout>
  );
}

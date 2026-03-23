import { Database } from "lucide-react";
import { SEO } from "@/components/seo/SEO";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { ServicePageData } from "@/components/sections/ServicePageTemplate";
import { DataServicesIllustration } from "@/components/ui/illustrations/TechIllustrations";
import data from "@/mockData/serviceDataServices.json";

export default function DataServicesPage() {
  return (
    <>
      <SEO
        title="Data Services"
        description="Reliable data entry, processing, migration, and analytics solutions from Webvance that help you make smarter, faster business decisions at a fraction of in-house cost."
        canonical="https://webvance.tech/services/data-services"
      />
      <ServicePageTemplate
        data={data as ServicePageData}
        icon={<Database className="h-5 w-5" />}
        illustration={<DataServicesIllustration className="w-full h-auto" />}
        accentColor="rose"
      />
    </>
  );
}

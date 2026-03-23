import { MapPin } from "lucide-react";
import { SEO } from "@/components/seo/SEO";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { ServicePageData } from "@/components/sections/ServicePageTemplate";
import { LocalSEOIllustration } from "@/components/ui/illustrations/BusinessIllustrations";
import data from "@/mockData/serviceLocalSEO.json";

export default function LocalSEOPage() {
  return (
    <>
      <SEO
        title="Local SEO Services"
        description="Dominate local search results with Webvance's local SEO strategies. Be found by customers in your area — on Google Maps, local packs, and nearby searches."
        canonical="https://webvance.tech/services/local-seo"
      />
      <ServicePageTemplate
        data={data as ServicePageData}
        icon={<MapPin className="h-5 w-5" />}
        illustration={<LocalSEOIllustration className="w-full h-auto" />}
        accentColor="teal"
      />
    </>
  );
}

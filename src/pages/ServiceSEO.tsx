import { Search } from "lucide-react";
import { SEO } from "@/components/seo/SEO";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { ServicePageData } from "@/components/sections/ServicePageTemplate";
import { SEOIllustration } from "@/components/ui/illustrations/MarketingIllustrations";
import data from "@/mockData/serviceSEO.json";

export default function SEOPage() {
  return (
    <>
      <SEO
        title="SEO Services"
        description="Boost your organic search rankings and drive sustainable traffic with Webvance's expert SEO services — on-page optimisation, technical SEO, content strategy, and link building."
        canonical="https://webvance.tech/services/seo"
      />
      <ServicePageTemplate
        data={data as ServicePageData}
        icon={<Search className="h-5 w-5" />}
        illustration={<SEOIllustration className="w-full h-auto" />}
        accentColor="emerald"
      />
    </>
  );
}

import { Search } from "lucide-react";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { ServicePageData } from "@/components/sections/ServicePageTemplate";
import { SEOIllustration } from "@/components/ui/illustrations/MarketingIllustrations";
import data from "@/mockData/serviceSEO.json";

export default function SEOPage() {
  return (
    <ServicePageTemplate
      data={data as ServicePageData}
      icon={<Search className="h-5 w-5" />}
      illustration={<SEOIllustration className="w-full h-auto max-h-80" />}
      accentColor="emerald"
    />
  );
}

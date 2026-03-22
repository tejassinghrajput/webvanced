import { MapPin } from "lucide-react";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { ServicePageData } from "@/components/sections/ServicePageTemplate";
import { LocalSEOIllustration } from "@/components/ui/illustrations/BusinessIllustrations";
import data from "@/mockData/serviceLocalSEO.json";

export default function LocalSEOPage() {
  return (
    <ServicePageTemplate
      data={data as ServicePageData}
      icon={<MapPin className="h-5 w-5" />}
      illustration={<LocalSEOIllustration className="w-full h-auto max-h-80" />}
      accentColor="teal"
    />
  );
}

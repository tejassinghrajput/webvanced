import { MousePointerClick } from "lucide-react";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { ServicePageData } from "@/components/sections/ServicePageTemplate";
import { PPCIllustration } from "@/components/ui/illustrations/MarketingIllustrations";
import data from "@/mockData/servicePPC.json";

export default function PPCPage() {
  return (
    <ServicePageTemplate
      data={data as ServicePageData}
      icon={<MousePointerClick className="h-5 w-5" />}
      illustration={<PPCIllustration className="w-full h-auto" />}
      accentColor="orange"
    />
  );
}

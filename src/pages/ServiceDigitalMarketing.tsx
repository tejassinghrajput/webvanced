import { Megaphone } from "lucide-react";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { ServicePageData } from "@/components/sections/ServicePageTemplate";
import { DigitalMarketingIllustration } from "@/components/ui/illustrations/MarketingIllustrations";
import data from "@/mockData/serviceDigitalMarketing.json";

export default function DigitalMarketingPage() {
  return (
    <ServicePageTemplate
      data={data as ServicePageData}
      icon={<Megaphone className="h-5 w-5" />}
      illustration={<DigitalMarketingIllustration className="w-full h-auto max-h-80" />}
      accentColor="indigo"
    />
  );
}

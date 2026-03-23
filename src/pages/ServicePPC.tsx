import { MousePointerClick } from "lucide-react";
import { SEO } from "@/components/seo/SEO";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { ServicePageData } from "@/components/sections/ServicePageTemplate";
import { PPCIllustration } from "@/components/ui/illustrations/MarketingIllustrations";
import data from "@/mockData/servicePPC.json";

export default function PPCPage() {
  return (
    <>
      <SEO
        title="Pay-Per-Click Advertising"
        description="Maximise your ad spend ROI with Webvance's PPC campaigns \u2014 targeted, measurable, and built around your goals. Drive qualified traffic from Google, Bing, and beyond."
        canonical="https://webvance.tech/services/ppc"
      />
      <ServicePageTemplate
        data={data as ServicePageData}
        icon={<MousePointerClick className="h-5 w-5" />}
        illustration={<PPCIllustration className="w-full h-auto" />}
        accentColor="orange"
      />
    </>
  );
}

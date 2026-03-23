import { Megaphone } from "lucide-react";
import { SEO } from "@/components/seo/SEO";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { ServicePageData } from "@/components/sections/ServicePageTemplate";
import { DigitalMarketingIllustration } from "@/components/ui/illustrations/MarketingIllustrations";
import data from "@/mockData/serviceDigitalMarketing.json";

export default function DigitalMarketingPage() {
  return (
    <>
      <SEO
        title="Digital Marketing Services"
        description="Full-spectrum digital marketing by Webvance — helping brands reach more customers online through targeted, data-driven SEO, PPC, social media, and content campaigns."
        canonical="https://webvance.tech/services/digital-marketing"
      />
      <ServicePageTemplate
        data={data as ServicePageData}
        icon={<Megaphone className="h-5 w-5" />}
        illustration={<DigitalMarketingIllustration className="w-full h-auto" />}
        accentColor="indigo"
      />
    </>
  );
}

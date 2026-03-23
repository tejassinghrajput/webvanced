import { Smartphone } from "lucide-react";
import { SEO } from "@/components/seo/SEO";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { ServicePageData } from "@/components/sections/ServicePageTemplate";
import { MobileAppIllustration } from "@/components/ui/illustrations/TechIllustrations";
import data from "@/mockData/serviceMobileApp.json";

export default function MobileAppPage() {
  return (
    <>
      <SEO
        title="Mobile App Development"
        description="Webvance builds fast, user-friendly Android and iOS apps that unlock new revenue channels and bring you closer to your customers. Native and cross-platform solutions."
        canonical="https://webvance.tech/services/mobile-app"
      />
      <ServicePageTemplate
        data={data as ServicePageData}
        icon={<Smartphone className="h-5 w-5" />}
        illustration={<MobileAppIllustration className="w-full h-auto" />}
        accentColor="cyan"
      />
    </>
  );
}

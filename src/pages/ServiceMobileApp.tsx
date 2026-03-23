import { Smartphone } from "lucide-react";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { ServicePageData } from "@/components/sections/ServicePageTemplate";
import { MobileAppIllustration } from "@/components/ui/illustrations/TechIllustrations";
import data from "@/mockData/serviceMobileApp.json";

export default function MobileAppPage() {
  return (
    <ServicePageTemplate
      data={data as ServicePageData}
      icon={<Smartphone className="h-5 w-5" />}
      illustration={<MobileAppIllustration className="w-full h-auto" />}
      accentColor="cyan"
    />
  );
}

import { Laptop } from "lucide-react";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { ServicePageData } from "@/components/sections/ServicePageTemplate";
import { AppDevelopmentIllustration } from "@/components/ui/illustrations/TechIllustrations";
import data from "@/mockData/serviceWebDevelopment.json";

export default function WebDevelopmentPage() {
  return (
    <ServicePageTemplate
      data={data as ServicePageData}
      icon={<Laptop className="h-5 w-5" />}
      illustration={<AppDevelopmentIllustration className="w-full h-auto" />}
      accentColor="indigo"
    />
  );
}

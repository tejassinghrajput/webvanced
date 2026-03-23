import { LayoutGrid } from "lucide-react";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { ServicePageData } from "@/components/sections/ServicePageTemplate";
import { ERPIllustration } from "@/components/ui/illustrations/TechIllustrations";
import data from "@/mockData/serviceERP.json";

export default function ERPPage() {
  return (
    <ServicePageTemplate
      data={data as ServicePageData}
      icon={<LayoutGrid className="h-5 w-5" />}
      illustration={<ERPIllustration className="w-full h-auto" />}
      accentColor="purple"
    />
  );
}

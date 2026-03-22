import { Database } from "lucide-react";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { ServicePageData } from "@/components/sections/ServicePageTemplate";
import { DataServicesIllustration } from "@/components/ui/illustrations/TechIllustrations";
import data from "@/mockData/serviceDataServices.json";

export default function DataServicesPage() {
  return (
    <ServicePageTemplate
      data={data as ServicePageData}
      icon={<Database className="h-5 w-5" />}
      illustration={<DataServicesIllustration className="w-full h-auto max-h-80" />}
      accentColor="rose"
    />
  );
}

import { Server } from "lucide-react";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { ServicePageData } from "@/components/sections/ServicePageTemplate";
import { ITOutsourcingIllustration } from "@/components/ui/illustrations/TechIllustrations";
import data from "@/mockData/serviceITOutsourcing.json";

export default function ITOutsourcingPage() {
  return (
    <ServicePageTemplate
      data={data as ServicePageData}
      icon={<Server className="h-5 w-5" />}
      illustration={<ITOutsourcingIllustration className="w-full h-auto" />}
      accentColor="sky"
    />
  );
}

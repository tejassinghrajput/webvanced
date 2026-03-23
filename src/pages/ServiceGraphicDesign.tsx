import { Palette } from "lucide-react";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { ServicePageData } from "@/components/sections/ServicePageTemplate";
import { GraphicDesignIllustration } from "@/components/ui/illustrations/BusinessIllustrations";
import data from "@/mockData/serviceGraphicDesign.json";

export default function GraphicDesignPage() {
  return (
    <ServicePageTemplate
      data={data as ServicePageData}
      icon={<Palette className="h-5 w-5" />}
      illustration={<GraphicDesignIllustration className="w-full h-auto" />}
      accentColor="fuchsia"
    />
  );
}

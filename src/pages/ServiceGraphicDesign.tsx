import { Palette } from "lucide-react";
import { SEO } from "@/components/seo/SEO";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { ServicePageData } from "@/components/sections/ServicePageTemplate";
import { GraphicDesignIllustration } from "@/components/ui/illustrations/BusinessIllustrations";
import data from "@/mockData/serviceGraphicDesign.json";

export default function GraphicDesignPage() {
  return (
    <>
      <SEO
        title="Graphic Design Services"
        description="Visuals that capture attention and drive action. Webvance creates brand identities, ad creatives, and digital assets that make your business stand out."
        canonical="https://webvance.tech/services/graphic-design"
      />
      <ServicePageTemplate
        data={data as ServicePageData}
        icon={<Palette className="h-5 w-5" />}
        illustration={<GraphicDesignIllustration className="w-full h-auto" />}
        accentColor="fuchsia"
      />
    </>
  );
}

import { LayoutGrid } from "lucide-react";
import { SEO } from "@/components/seo/SEO";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { ServicePageData } from "@/components/sections/ServicePageTemplate";
import { ERPIllustration } from "@/components/ui/illustrations/TechIllustrations";
import data from "@/mockData/serviceERP.json";

export default function ERPPage() {
  return (
    <>
      <SEO
        title="ERP Solutions"
        description="Streamline and automate your operations with Webvance's custom ERP solutions — built around your workflows to integrate departments, reduce manual work, and drive efficiency."
        canonical="https://webvance.tech/services/erp"
      />
      <ServicePageTemplate
        data={data as ServicePageData}
        icon={<LayoutGrid className="h-5 w-5" />}
        illustration={<ERPIllustration className="w-full h-auto" />}
        accentColor="purple"
      />
    </>
  );
}

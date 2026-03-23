import { Server } from "lucide-react";
import { SEO } from "@/components/seo/SEO";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { ServicePageData } from "@/components/sections/ServicePageTemplate";
import { ITOutsourcingIllustration } from "@/components/ui/illustrations/TechIllustrations";
import data from "@/mockData/serviceITOutsourcing.json";

export default function ITOutsourcingPage() {
  return (
    <>
      <SEO
        title="IT Outsourcing Services"
        description="Focus on your core business while Webvance engineers your technology. End-to-end IT outsourcing solutions — web, mobile, testing, ERP, and data services — that scale with you."
        canonical="https://webvance.tech/services/it-outsourcing"
      />
      <ServicePageTemplate
        data={data as ServicePageData}
        icon={<Server className="h-5 w-5" />}
        illustration={<ITOutsourcingIllustration className="w-full h-auto" />}
        accentColor="sky"
      />
    </>
  );
}

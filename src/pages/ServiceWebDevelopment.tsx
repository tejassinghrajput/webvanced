import { Laptop } from "lucide-react";
import { SEO } from "@/components/seo/SEO";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { ServicePageData } from "@/components/sections/ServicePageTemplate";
import { AppDevelopmentIllustration } from "@/components/ui/illustrations/TechIllustrations";
import data from "@/mockData/serviceWebDevelopment.json";

export default function WebDevelopmentPage() {
  return (
    <>
      <SEO
        title="Web Development Services"
        description="Webvance builds fast, responsive and scalable websites and web applications — engineered to convert, optimised for search, and built to grow with your business."
        canonical="https://webvance.tech/services/web-development"
      />
      <ServicePageTemplate
        data={data as ServicePageData}
        icon={<Laptop className="h-5 w-5" />}
        illustration={<AppDevelopmentIllustration className="w-full h-auto" />}
        accentColor="indigo"
      />
    </>
  );
}

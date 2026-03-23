import { PenLine } from "lucide-react";
import { SEO } from "@/components/seo/SEO";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { ServicePageData } from "@/components/sections/ServicePageTemplate";
import { ContentWritingIllustration } from "@/components/ui/illustrations/MarketingIllustrations";
import data from "@/mockData/serviceContentWriting.json";

export default function ContentWritingPage() {
  return (
    <>
      <SEO
        title="Content Writing Services"
        description="Words that convert. Webvance's content writing team creates SEO-optimised copy, blog posts, and web content that builds brand authority and drives leads."
        canonical="https://webvance.tech/services/content-writing"
      />
      <ServicePageTemplate
        data={data as ServicePageData}
        icon={<PenLine className="h-5 w-5" />}
        illustration={<ContentWritingIllustration className="w-full h-auto" />}
        accentColor="violet"
      />
    </>
  );
}

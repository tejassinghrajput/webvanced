import { Share2 } from "lucide-react";
import { SEO } from "@/components/seo/SEO";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { ServicePageData } from "@/components/sections/ServicePageTemplate";
import { SocialMediaIllustration } from "@/components/ui/illustrations/BusinessIllustrations";
import data from "@/mockData/serviceSocialMedia.json";

export default function SocialMediaPage() {
  return (
    <>
      <SEO
        title="Social Media Management"
        description="Webvance manages your social media presence across all platforms — growing your audience, driving engagement, and converting followers into loyal customers."
        canonical="https://webvance.tech/services/social-media"
      />
      <ServicePageTemplate
        data={data as ServicePageData}
        icon={<Share2 className="h-5 w-5" />}
        illustration={<SocialMediaIllustration className="w-full h-auto" />}
        accentColor="pink"
      />
    </>
  );
}

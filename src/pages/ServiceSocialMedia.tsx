import { Share2 } from "lucide-react";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { ServicePageData } from "@/components/sections/ServicePageTemplate";
import { SocialMediaIllustration } from "@/components/ui/illustrations/BusinessIllustrations";
import data from "@/mockData/serviceSocialMedia.json";

export default function SocialMediaPage() {
  return (
    <ServicePageTemplate
      data={data as ServicePageData}
      icon={<Share2 className="h-5 w-5" />}
      illustration={<SocialMediaIllustration className="w-full h-auto max-h-80" />}
      accentColor="pink"
    />
  );
}

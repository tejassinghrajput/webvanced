import { PenLine } from "lucide-react";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { ServicePageData } from "@/components/sections/ServicePageTemplate";
import { ContentWritingIllustration } from "@/components/ui/illustrations/MarketingIllustrations";
import data from "@/mockData/serviceContentWriting.json";

export default function ContentWritingPage() {
  return (
    <ServicePageTemplate
      data={data as ServicePageData}
      icon={<PenLine className="h-5 w-5" />}
      illustration={<ContentWritingIllustration className="w-full h-auto" />}
      accentColor="violet"
    />
  );
}

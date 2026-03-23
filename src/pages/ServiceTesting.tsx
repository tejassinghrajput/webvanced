import { BugPlay } from "lucide-react";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { ServicePageData } from "@/components/sections/ServicePageTemplate";
import { TestingIllustration } from "@/components/ui/illustrations/TechIllustrations";
import data from "@/mockData/serviceTesting.json";

export default function TestingPage() {
  return (
    <ServicePageTemplate
      data={data as ServicePageData}
      icon={<BugPlay className="h-5 w-5" />}
      illustration={<TestingIllustration className="w-full h-auto" />}
      accentColor="amber"
    />
  );
}

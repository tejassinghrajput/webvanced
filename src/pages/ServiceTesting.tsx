import { BugPlay } from "lucide-react";
import { SEO } from "@/components/seo/SEO";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import type { ServicePageData } from "@/components/sections/ServicePageTemplate";
import { TestingIllustration } from "@/components/ui/illustrations/TechIllustrations";
import data from "@/mockData/serviceTesting.json";

export default function TestingPage() {
  return (
    <>
      <SEO
        title="Software Testing Services"
        description="Bug-free software delivery with Webvance's comprehensive testing services — manual QA, automation testing, performance testing, and regression suites."
        canonical="https://webvance.tech/services/testing"
      />
      <ServicePageTemplate
        data={data as ServicePageData}
        icon={<BugPlay className="h-5 w-5" />}
        illustration={<TestingIllustration className="w-full h-auto" />}
        accentColor="amber"
      />
    </>
  );
}

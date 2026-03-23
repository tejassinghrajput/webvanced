import { SEO } from "@/components/seo/SEO";
import { PageLayout } from "@/components/layout/PageLayout";
import { HomeFAQ } from "@/components/sections/HomeFAQ";

export default function FAQPage() {
  return (
    <PageLayout>
      <SEO
        title="Frequently Asked Questions"
        description="Find answers to the most common questions about Webvance's digital services, pricing, process and turnaround times. Have more questions? Contact us directly."
        canonical="https://webvance.tech/faq"
      />
      <div className="pt-32 pb-24">
        <HomeFAQ />
      </div>
    </PageLayout>
  );
}

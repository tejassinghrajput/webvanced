import { SEO } from "@/components/seo/SEO";
import { PageLayout } from "@/components/layout/PageLayout";
import { QuoteHero } from "@/components/sections/QuoteHero";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { QuoteFeatures } from "@/components/sections/QuoteFeatures";

export default function QuotePage() {
  return (
    <PageLayout>
      <SEO
        title="Get a Free Quote"
        description="Request a free consultation and project quote from Webvance. Tell us your goals and we will tailor a personalised digital strategy and pricing for your business."
        canonical="https://webvance.tech/quote"
      />
      <QuoteHero />
      <QuoteForm />
      <QuoteFeatures />
    </PageLayout>
  );
}

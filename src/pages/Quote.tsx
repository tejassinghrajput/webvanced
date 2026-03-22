import { PageLayout } from "@/components/layout/PageLayout";
import { QuoteHero } from "@/components/sections/QuoteHero";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { QuoteFeatures } from "@/components/sections/QuoteFeatures";

export default function QuotePage() {
  return (
    <PageLayout>
      <QuoteHero />
      <QuoteForm />
      <QuoteFeatures />
    </PageLayout>
  );
}

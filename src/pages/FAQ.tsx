import { PageLayout } from "@/components/layout/PageLayout";
import { HomeFAQ } from "@/components/sections/HomeFAQ";

export default function FAQPage() {
  return (
    <PageLayout>
      <div className="pt-32 pb-24">
        <HomeFAQ />
      </div>
    </PageLayout>
  );
}

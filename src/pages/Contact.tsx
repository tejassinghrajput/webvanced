import { PageLayout } from "@/components/layout/PageLayout";
import { ContactHero } from "@/components/sections/ContactHero";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactLocation } from "@/components/sections/ContactLocation";

export default function ContactPage() {
  return (
    <PageLayout>
      <ContactHero />
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      <ContactLocation />
    </PageLayout>
  );
}

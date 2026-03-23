import { SEO } from "@/components/seo/SEO";
import { PageLayout } from "@/components/layout/PageLayout";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { ContactForm } from "@/components/sections/ContactForm";

/** Concentric signal-pulse rings — CSS-animated so they run off the JS main thread */
function SignalPulse() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -right-32 -bottom-32">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="absolute rounded-full border border-indigo-200/60 animate-signal-pulse"
            style={{
              inset: `-${i * 80}px`,
              "--pulse-delay": `${i * 0.7}s`,
            } as React.CSSProperties}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-3 w-3 rounded-full bg-indigo-300/40" />
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <PageLayout>
      <SEO
        title="Contact Us"
        description="Get in touch with Webvance. Reach our team in New Delhi for digital marketing, web development, SEO, or any project enquiry. We respond within 24 hours."
        canonical="https://webvance.tech/contact"
      />
      <SignalPulse />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-stretch">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </PageLayout>
  );
}
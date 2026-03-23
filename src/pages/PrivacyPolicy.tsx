import { SEO } from "@/components/seo/SEO";
import { PageLayout } from "@/components/layout/PageLayout";
import data from "@/mockData/privacy.json";
import { motion } from "motion/react";

export default function PrivacyPolicy() {
  return (
    <PageLayout>
      <SEO
        title="Privacy Policy"
        description="Read Webvance's privacy policy to understand how we collect, use, and protect your personal data in line with applicable data protection regulations."
        canonical="https://webvance.tech/privacy-policy"
      />
      <div className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            {data.title}
          </motion.h1>
          <p className="mt-4 text-sm text-gray-500">Last Updated: {data.lastUpdated}</p>
          <div className="mt-16 space-y-12">
            {data.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold text-gray-900">{section.heading}</h2>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">{section.content}</p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

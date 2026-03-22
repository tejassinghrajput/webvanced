import { PageLayout } from "@/components/layout/PageLayout";
import { motion } from "motion/react";
import data from "@/mockData/industries.json";

export default function IndustriesPage() {
  return (
    <PageLayout>
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {data.hero.heading}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {data.hero.subheading}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {data.industries.map((industry, idx) => (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                    {industry.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    {industry.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

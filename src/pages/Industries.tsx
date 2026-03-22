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
          <div className="mx-auto mt-16 max-w-7xl space-y-24">
            {data.industries.map((industry, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={`overflow-hidden rounded-2xl shadow-sm ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="h-full w-full object-cover aspect-video"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className={`flex flex-col ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <h3 className="text-3xl font-bold tracking-tight text-gray-900">
                      {industry.title}
                    </h3>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      {industry.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

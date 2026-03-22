import { PageLayout } from "@/components/layout/PageLayout";
import { motion } from "motion/react";
import * as LucideIcons from "lucide-react";
import data from "@/mockData/howWeWork.json";

export default function HowWeWorkPage() {
  return (
    <PageLayout>
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-5xl font-extrabold tracking-tighter text-gray-950 sm:text-7xl">
              {data.hero.heading}
            </h1>
            <p className="mt-8 text-xl leading-8 text-gray-700">
              {data.hero.subheading}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.steps.map((step, idx) => {
                const Icon = (LucideIcons as any)[step.icon];
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`rounded-3xl p-10 border transition-all hover:scale-105 hover:shadow-xl ${step.color}`}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-sm font-bold tracking-widest uppercase opacity-80">Step {step.number}</div>
                      {Icon && <Icon className="w-8 h-8 opacity-80" />}
                    </div>
                    <h3 className="text-3xl font-extrabold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-lg leading-8 opacity-90">
                      {step.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

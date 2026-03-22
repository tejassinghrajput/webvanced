import { PageLayout } from "@/components/layout/PageLayout";
import { motion } from "motion/react";
import data from "@/mockData/howWeWork.json";
import { Sparkles, GlitterCard, GlitterText } from "@/components/ui/Sparkles";

export default function HowWeWorkPage() {
  return (
    <PageLayout>
      <section className="relative bg-white py-20 md:py-32 overflow-hidden">
        <Sparkles />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              <GlitterText>{data.hero.heading}</GlitterText>
            </h1>
            <p className="mt-6 text-base md:text-lg leading-8 text-gray-600">
              {data.hero.subheading}
            </p>
          </div>
          <div className="mx-auto mt-12 md:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-12 md:gap-y-16 lg:grid-cols-2">
              {data.steps.map((step, idx) => (
                <div key={step.number}>
                  <GlitterCard>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex flex-col border-l border-indigo-600 pl-8 h-full"
                    >
                      <dt className="text-sm font-semibold leading-6 text-indigo-600">
                        Step {step.number}
                      </dt>
                      <dd className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
                        {step.title}
                      </dd>
                      <dd className="mt-4 text-base leading-7 text-gray-600">
                        {step.body}
                      </dd>
                    </motion.div>
                  </GlitterCard>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

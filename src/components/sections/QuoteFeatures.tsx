import { motion } from "motion/react";
import { ShieldCheck, Eye } from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ComponentType } from "react";
import quoteData from "@/mockData/quote.json";

const FEATURE_ICONS: Record<string, ComponentType<LucideProps>> = {
  ShieldCheck, Eye,
};

export function QuoteFeatures() {
  const { features } = quoteData;

  return (
    <section className="mx-auto max-w-4xl px-6 pb-32">
      <div className="grid gap-8 sm:grid-cols-2">
        {features.map((feature, idx) => {
          const Icon = FEATURE_ICONS[feature.icon] || ShieldCheck;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">{feature.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{feature.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import * as Icons from "lucide-react";
import aboutData from "@/mockData/about.json";

export function AboutPrinciples() {
  const { badge, title, items } = aboutData.principles;

  return (
    <section className="py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <span className="text-sm font-semibold tracking-widest text-indigo-600 uppercase">{badge}</span>
          <h2 className="mt-4 text-5xl font-bold tracking-tight text-gray-950">{title}</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, idx) => {
            const Icon = (Icons as any)[item.icon] || Icons.Sparkles;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-3xl bg-white p-10 shadow-sm border border-gray-100"
              >
                <div className="mb-8 h-12 w-12 flex items-center justify-center rounded-full bg-gray-950 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-950">{item.title}</h3>
                <p className="mt-4 text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

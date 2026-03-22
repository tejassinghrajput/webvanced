import { motion } from "motion/react";
import * as Icons from "lucide-react";
import aboutData from "@/mockData/about.json";

export function AboutPrinciples() {
  const { badge, title, items } = aboutData.principles;

  return (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-24"
      >
        <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">{badge}</span>
        <h2 className="mt-4 text-5xl font-bold tracking-tight text-gray-900">{title}</h2>
      </motion.div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => {
          const Icon = (Icons as any)[item.icon] || Icons.Sparkles;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-3xl bg-white p-12 shadow-sm ring-1 ring-gray-200 ${idx === 3 ? 'md:col-span-2 lg:col-span-3 lg:flex lg:items-center lg:justify-between' : ''}`}
            >
              <div className={idx === 3 ? 'lg:w-1/2 lg:pr-12' : ''}>
                <Icon className="h-8 w-8 text-indigo-600 mb-8" />
                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-4 text-gray-600 leading-relaxed">{item.description}</p>
              </div>
              {item.image && (
                <div className="mt-12 lg:mt-0 lg:w-1/2">
                  <img src={item.image} alt={item.title} className="rounded-2xl object-cover h-64 w-full" referrerPolicy="no-referrer" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

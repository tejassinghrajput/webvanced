import { motion } from "motion/react";
import * as Icons from "lucide-react";
import aboutData from "@/mockData/about.json";

export function AboutMission() {
  const { title, description, pillars } = aboutData.mission;

  return (
    <section className="bg-gray-50 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 border-b-2 border-indigo-600 inline-block pb-2">{title}</h2>
          </motion.div>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl leading-relaxed text-gray-900"
            >
              {description}
            </motion.p>
            <div className="mt-16 grid gap-12 sm:grid-cols-2">
              {pillars.map((pillar, idx) => {
                const Icon = (Icons as any)[pillar.icon] || Icons.Compass;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  >
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm ring-1 ring-gray-200">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{pillar.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-gray-600">{pillar.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

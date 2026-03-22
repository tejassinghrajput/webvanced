import { motion } from "motion/react";
import * as Icons from "lucide-react";
import aboutData from "@/mockData/about.json";

export function AboutMission() {
  const { title, description, pillars } = aboutData.mission;

  return (
    <section className="py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold tracking-tight text-gray-950"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-10 text-2xl text-gray-600 leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
        
        <div className="mt-24 grid gap-12 md:grid-cols-2">
          {pillars.map((pillar, idx) => {
            const Icon = (Icons as any)[pillar.icon] || Icons.Compass;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="border-t border-gray-200 pt-12"
              >
                <div className="mb-6 h-12 w-12 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-950">{pillar.title}</h3>
                <p className="mt-4 text-gray-600 leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

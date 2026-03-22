import { motion } from "motion/react";
import data from "@/mockData/homeStats.json";
import { Counter } from "../ui/Counter";

export function HomeStats() {
  const bg = "https://img.freepik.com/free-photo/abstract-background-with-low-poly-design_1048-10022.jpg";
  return (
    <section className="relative bg-gray-900 py-12 sm:py-16 text-white overflow-hidden">
      <div className="absolute inset-0 z-0"><img src={bg} className="h-full w-full object-cover opacity-20" referrerPolicy="no-referrer" /></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold text-indigo-400">{data.sectionLabel}</h2>
          <p className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{data.heading}</p>
          <div className="mt-3 text-sm text-gray-300 space-y-4">{data.paragraphs.map((p, i) => <p key={i}>{p}</p>)}</div>
        </motion.div>
        <dl className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {data.stats.map((stat, idx) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="flex flex-col bg-white/5 p-8 rounded-2xl border border-white/10">
              <dt className="text-sm font-semibold text-gray-400">{stat.label}</dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-white"><Counter value={stat.value} /></dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}

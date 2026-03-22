import { motion } from "motion/react";
import data from "@/mockData/homeInnovation.json";

export function HomeInnovation() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-base font-semibold text-indigo-600">{data.sectionLabel}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{data.heading}</p>
          <div className="mt-6 text-lg text-gray-600 space-y-6">
            {data.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </motion.div>
        <motion.img src={data.image} alt="Philosophy" className="rounded-2xl shadow-xl" referrerPolicy="no-referrer" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} />
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {data.features.map((feature, idx) => (
            <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="flex flex-col">
              <dt className="text-base font-semibold text-gray-900">{feature.title}</dt>
              <dd className="mt-1 text-base text-gray-600">{feature.body}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}

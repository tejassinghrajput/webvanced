import { motion } from "motion/react";
import data from "@/mockData/homeProcess.json";

export function HomeProcess() {
  return (
    <section className="bg-gray-900 py-32 text-white overflow-hidden">
      <div className="mx-auto w-full px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sticky top-32 h-fit"
          >
            <h2 className="text-base font-semibold leading-7 text-indigo-400 uppercase tracking-widest">{data.sectionLabel}</h2>
            <p className="mt-4 text-5xl font-bold tracking-tight sm:text-7xl leading-[1.1]">
              {data.heading}
            </p>
            <p className="mt-8 text-xl leading-8 text-gray-400 max-w-md">
              {data.subtext}
            </p>
            <div className="mt-12 h-1 w-20 bg-indigo-500 rounded-full" />
          </motion.div>
          
          <div className="space-y-24">
            {data.steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative pl-20 group"
              >
                <div className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-2xl font-bold text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                  {step.number}
                </div>
                <h3 className="text-3xl font-bold mb-6 group-hover:text-indigo-400 transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-lg leading-8 text-gray-400">
                  {step.body}
                </p>
                {idx !== data.steps.length - 1 && (
                  <div className="absolute left-7 top-20 bottom-[-60px] w-px bg-gradient-to-b from-indigo-500/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import data from "@/mockData/homeIndustries.json";
import { ShoppingBag, HeartPulse, Utensils, Briefcase, GraduationCap, Building2 } from "lucide-react";

const icons = [ShoppingBag, HeartPulse, Utensils, Briefcase, GraduationCap, Building2];

export function HomeIndustries() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">{data.sectionLabel}</h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">{data.heading}</p>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">{data.subtext}</p>
        </motion.div>
        <div className="mx-auto mt-16 max-w-7xl">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {data.industries.map((industry, idx) => {
              const Icon = icons[idx];
              return (
                <motion.div key={industry.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }} className="group flex flex-col p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:border-indigo-100 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <dt className="text-2xl font-bold text-gray-900">{industry.title}</dt>
                  <dd className="mt-4 text-base text-gray-600 leading-relaxed">{industry.body}</dd>
                </motion.div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}

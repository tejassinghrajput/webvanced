import { Link } from "react-router-dom";
import { motion } from "motion/react";
import aboutData from "@/mockData/about.json";

export function AboutCTA() {
  const { title, subtitle, buttons } = aboutData.cta;
  
  return (
    <section className="bg-[#111827] py-32 text-center text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-6"
      >
        <h2 className="text-5xl font-bold tracking-tight sm:text-6xl">
          {title.split("luminous?")[0]}
          <span className="text-teal-400">luminous?</span>
        </h2>
        <p className="mt-8 text-xl text-gray-400">{subtitle}</p>
        <div className="mt-12 flex justify-center gap-4">
          {buttons.map((btn) => (
            <Link
              key={btn.label}
              to={btn.href}
              className={`rounded-md px-8 py-4 text-sm font-semibold transition-all ${
                btn.primary
                  ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/20"
                  : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
              }`}
            >
              {btn.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

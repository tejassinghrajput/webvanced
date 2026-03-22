import { Link } from "react-router-dom";
import { motion } from "motion/react";
import aboutData from "@/mockData/about.json";

export function AboutCTA() {
  const { title, subtitle, buttons } = aboutData.cta;
  
  return (
    <section className="py-32 bg-gray-950 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl px-6 text-center"
      >
        <h2 className="text-6xl font-bold tracking-tight">{title}</h2>
        <p className="mt-8 text-2xl text-gray-400">{subtitle}</p>
        <div className="mt-16 flex justify-center gap-4">
          {buttons.map((btn) => (
            <Link
              key={btn.label}
              to={btn.href}
              className="rounded-full bg-indigo-600 px-10 py-4 text-lg font-semibold text-white hover:bg-indigo-500 transition-colors"
            >
              {btn.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

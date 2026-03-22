import { motion } from "motion/react";
import quoteData from "@/mockData/quote.json";

export function QuoteHero() {
  const { badge, title, description } = quoteData.hero;
  
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl"
      >
        <span className="inline-flex items-center text-xs font-bold tracking-widest text-indigo-600 uppercase">
          {badge}
        </span>
        <h1 className="mt-8 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-[1.1]">
          {title.split("Consultation")[0]}
          <span className="text-indigo-600">Consultation</span>
          <span className="block">{title.split("Consultation")[1]}</span>
        </h1>
        <p className="mt-8 text-xl leading-relaxed text-gray-600">
          {description}
        </p>
      </motion.div>
    </section>
  );
}

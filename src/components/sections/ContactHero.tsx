import { motion } from "motion/react";
import contactData from "@/mockData/contact.json";

export function ContactHero() {
  const { badge, title, description } = contactData.hero;

  return (
    <section className="mx-auto max-w-7xl px-6 pt-12 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-[10px] font-bold tracking-widest text-indigo-600 uppercase">{badge}</span>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">{title}</h1>
        <p className="mt-3 text-base text-gray-500 max-w-2xl">{description}</p>
      </motion.div>
    </section>
  );
}

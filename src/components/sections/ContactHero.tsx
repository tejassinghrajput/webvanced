import { motion } from "motion/react";
import contactData from "@/mockData/contact.json";
import { Sparkles, GlitterText } from "../ui/Sparkles";

export function ContactHero() {
  const { badge, title, description } = contactData.hero;
  
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20 md:py-32 overflow-hidden">
      <Sparkles />
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <span className="inline-flex items-center text-[10px] md:text-xs font-bold tracking-widest text-indigo-600 uppercase">
            {badge}
          </span>
          <h1 className="mt-6 md:mt-8 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            {title.split("Digital")[0]}
            <GlitterText className="text-indigo-600 block">Digital</GlitterText>
            <GlitterText className="text-indigo-600 block">Blueprint.</GlitterText>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl leading-relaxed text-gray-600">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

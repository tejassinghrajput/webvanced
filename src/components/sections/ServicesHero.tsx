import { motion } from "motion/react";
import servicesData from "@/mockData/services.json";

export function ServicesHero() {
  const { badge, title, description } = servicesData.hero;
  
  return (
    <section className="relative mx-auto w-full px-6 py-24 md:py-32 overflow-hidden bg-gray-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-gray-950 to-gray-950" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl relative z-10 mx-auto text-center"
      >
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center rounded-full bg-indigo-500/10 px-4 py-1.5 text-xs font-bold text-indigo-400 tracking-widest uppercase border border-indigo-500/20"
        >
          {badge}
        </motion.span>
        <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9]">
          {title}
        </h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 text-xl md:text-2xl leading-relaxed text-gray-400 max-w-2xl mx-auto font-medium"
        >
          {description}
        </motion.p>
      </motion.div>
    </section>
  );
}

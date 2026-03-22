import { motion } from "motion/react";
import servicesData from "@/mockData/services.json";
import { Sparkles, GlowText } from "../ui/Sparkles";

export function ServicesHero() {
  const { badge, title, description } = servicesData.hero;
  const words = title.split(" ");
  
  return (
    <section className="relative mx-auto w-full px-6 py-24 md:py-48 lg:px-12 xl:px-20 overflow-hidden">
      <Sparkles />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl relative z-10"
      >
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-[10px] md:text-xs font-bold text-teal-600 tracking-widest uppercase border border-teal-100"
        >
          {badge}
        </motion.span>
        <h1 className="mt-6 md:mt-8 text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight text-gray-900 leading-[0.9]">
          {words.map((word, i) => (
            <span key={i} className={`text-reveal mr-2 md:mr-4 ${word.includes("Digital") || word.includes("Design") ? "text-indigo-600" : ""}`}>
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-reveal-inner"
              >
                {word.includes("Digital") || word.includes("Design") ? (
                  <GlowText>{word}</GlowText>
                ) : word}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8 md:mt-12 text-lg md:text-2xl leading-relaxed text-gray-600 max-w-2xl font-medium"
        >
          {description}
        </motion.p>
      </motion.div>
    </section>
  );
}

import { motion } from "motion/react";
import aboutData from "@/mockData/about.json";

export function AboutHero() {
  const { badge, title, description, image, quote, quoteAuthor } = aboutData.hero;
  
  return (
    <section className="relative mx-auto w-full px-6 py-24 lg:px-12 xl:px-20 bg-white">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block text-sm font-semibold tracking-widest text-indigo-600 uppercase mb-6">
            {badge}
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-gray-950 leading-[0.95]">
            {title}
          </h1>
          <p className="mt-10 text-xl text-gray-600 leading-relaxed max-w-lg">
            {description}
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl">
            <img src={image} alt="Studio" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute -bottom-10 -left-10 rounded-2xl bg-gray-950 p-8 text-white shadow-2xl max-w-xs">
            <p className="text-lg font-medium italic leading-relaxed">
              "{quote}"
            </p>
            <p className="mt-4 text-xs font-bold uppercase tracking-widest text-indigo-400">— {quoteAuthor}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

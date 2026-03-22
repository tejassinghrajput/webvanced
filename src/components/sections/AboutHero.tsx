import { motion } from "motion/react";
import aboutData from "@/mockData/about.json";

export function AboutHero() {
  const { badge, title, description, image, quote, quoteAuthor } = aboutData.hero;
  const words = title.split(" ");
  
  return (
    <section className="mx-auto w-full px-6 py-32 md:py-48 lg:px-12 xl:px-20">
      <div className="grid gap-24 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center text-xs font-bold tracking-widest text-indigo-600 uppercase"
          >
            {badge}
          </motion.span>
          <h1 className="mt-8 text-7xl font-bold tracking-tight text-gray-900 sm:text-9xl leading-[0.9]">
            {words.map((word, i) => (
              <span key={i} className="text-reveal mr-4">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="text-reveal-inner"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-12 text-2xl leading-relaxed text-gray-600 font-medium"
          >
            {description}
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-[3rem] bg-gray-100 shadow-2xl">
            <img src={image} alt="Studio" className="h-full w-full object-cover hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute -bottom-12 -left-12 rounded-[2rem] bg-white p-10 shadow-2xl ring-1 ring-gray-100 max-w-sm"
          >
            <div className="text-4xl font-serif text-indigo-600/20 mb-4">"</div>
            <p className="text-xl font-medium italic text-gray-900 leading-relaxed">
              {quote}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-8 bg-indigo-600" />
              <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{quoteAuthor}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

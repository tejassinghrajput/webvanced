import { Link } from "react-router-dom";
import { motion } from "motion/react";
import data from "@/mockData/homeHero.json";
import { MeshBackground, FloatingBlobs, GridPattern, DecorativeCircle } from "../ui/VisualDecorations";

import { Sparkles, GlowText, GlitterButton } from "../ui/Sparkles";

export function HomeHero() {
  const words = data.headline.split(" ");
  
  return (
    <section className="relative overflow-hidden bg-white pt-32 md:pt-40 pb-24 md:pb-48">
      <MeshBackground />
      <FloatingBlobs />
      <GridPattern />
      <Sparkles />
      <div className="mx-auto w-full px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 md:mb-8 inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50/50 backdrop-blur-sm px-4 py-1.5 text-xs md:text-sm font-bold text-indigo-600 uppercase tracking-widest"
            >
              <span className="mr-2 h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
              {data.badge}
            </motion.div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-8 md:mb-10">
              {words.map((word, i) => (
                <span key={i} className={`text-reveal mr-2 md:mr-4 ${i === 2 ? 'text-indigo-600' : ''}`}>
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-reveal-inner"
                  >
                    <GlowText>{word}</GlowText>
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-6 md:mt-8 text-lg md:text-xl leading-relaxed text-gray-600 max-w-lg font-medium"
            >
              {data.subheadline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-10 md:mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10"
            >
              <GlitterButton className="rounded-full w-full sm:w-auto">
                <Link
                  to={data.primaryButton.href}
                  className="block bg-indigo-600 px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-bold text-white shadow-2xl shadow-indigo-200 hover:bg-indigo-500 transition-all text-center"
                >
                  {data.primaryButton.label}
                </Link>
              </GlitterButton>
              <Link
                to={data.secondaryButton.href}
                className="text-base md:text-lg font-bold leading-6 text-gray-900 hover:text-indigo-600 group transition-all flex items-center gap-2"
              >
                {data.secondaryButton.label} 
                <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <DecorativeCircle className="absolute -top-20 -right-20 h-80 w-80 text-indigo-600" />
            <div className="aspect-[4/5] rounded-[3rem] bg-gray-100 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] relative z-10">
              <img 
                src="https://picsum.photos/seed/innovation/800/1000" 
                alt="Innovation" 
                className="h-full w-full object-cover hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

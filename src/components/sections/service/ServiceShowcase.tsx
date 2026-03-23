import React, { cloneElement, isValidElement, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { ServicePageData, ServiceTheme } from "./types";

interface Props {
  data: ServicePageData;
  icon: ReactNode;
  theme: ServiceTheme;
}

export function ServiceShowcase({ data, icon, theme }: Props) {
  const { accentBg, accent, hoverBg, heroGlow, accentBgLight } = theme;
  
  // Format the intro to give the first sentence more visual weight
  const sentences = data.intro.split('. ').filter(Boolean);
  const headline = sentences.length > 0 ? sentences[0] + '.' : data.intro;
  const paragraph = sentences.length > 1 ? sentences.slice(1).join('. ') + '.' : '';

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16 text-gray-900 border-b border-gray-100">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ background: `radial-gradient(circle 800px at 50% 50%, ${heroGlow}, transparent)` }} />
      <div className="relative mx-auto w-full max-w-[110rem] px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          
          {/* Animated Icon Graphic */}
          <motion.div initial={{ opacity: 0, scale: 0.9, rotate: -5 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 blur-[80px] rounded-full opacity-30" style={{ backgroundColor: heroGlow }} />
              
              <div className={`h-64 w-64 md:h-[320px] md:w-[320px] rounded-[2rem] bg-gray-50 flex items-center justify-center relative overflow-hidden shadow-xl`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-80" />
                {isValidElement(icon) ? cloneElement(icon as React.ReactElement, { className: `w-24 h-24 md:w-32 md:h-32 ${accent} opacity-90 drop-shadow-md` } as any) : icon}
              </div>
              
              <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className={`absolute -top-4 -right-4 md:-top-6 md:-right-6 h-20 w-20 md:h-24 md:w-24 rounded-2xl ${accentBgLight} flex items-center justify-center rotate-6 shadow-lg`}>
                {isValidElement(icon) ? cloneElement(icon as React.ReactElement, { className: `w-10 h-10 ${accent}` } as any) : null}
              </motion.div>
            </div>
          </motion.div>

          {/* Intro text */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="w-full lg:w-1/2 text-center lg:text-left z-10">
            <span className={`inline-block py-1.5 px-3 rounded-md border border-transparent ${accentBgLight} text-xs font-bold uppercase tracking-widest ${accent} mb-4`}>
               Core Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-950 leading-tight tracking-tight mb-5">
              {headline}
            </h2>
            {paragraph && (
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                {paragraph}
              </p>
            )}
            <Link to="/contact" className={`inline-flex items-center gap-2 rounded-xl ${accentBg} ${hoverBg} px-6 py-3.5 text-sm font-bold text-white uppercase tracking-widest shadow-lg hover:scale-[1.02] transition-all`}>
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

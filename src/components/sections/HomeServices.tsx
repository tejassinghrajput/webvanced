import { motion } from "motion/react";
import * as Icons from "lucide-react";
import data from "@/mockData/homeServices.json";
import { DecorativeCircle } from "../ui/VisualDecorations";
import { GlitterCard } from "../ui/Sparkles";

export function HomeServices() {
  return (
    <section className="bg-white py-20 md:py-32 relative overflow-hidden">
      <DecorativeCircle className="absolute -bottom-40 -left-40 h-96 w-96 text-indigo-600 opacity-20 md:opacity-100" />
      <div className="mx-auto w-full px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-xs md:text-base font-bold leading-7 text-indigo-600 uppercase tracking-[0.2em]">{data.sectionLabel}</h2>
            <p className="mt-4 md:mt-6 text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              {data.heading}
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg leading-8 text-gray-600 max-w-md font-medium"
          >
            {data.subtext}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.cards.map((card, idx) => {
            const IconComponent = (Icons as any)[card.icon] || Icons.HelpCircle;
            return (
              <div key={card.title}>
                <GlitterCard className="rounded-[3rem] h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="group relative flex flex-col bg-gray-50 p-12 hover:bg-indigo-600 transition-all duration-700 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 h-full"
                  >
                    <div className="relative z-10">
                      <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-indigo-600 group-hover:bg-white/10 group-hover:text-white transition-all duration-500 shadow-sm">
                        <IconComponent className="h-8 w-8" aria-hidden="true" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-500">
                        {card.title}
                      </h3>
                      <p className="mt-6 text-base leading-relaxed text-gray-600 group-hover:text-white/80 transition-colors duration-500">
                        {card.body}
                      </p>
                      <div className="mt-10">
                        <span className="inline-flex items-center rounded-full bg-white px-5 py-2 text-xs font-bold text-indigo-600 group-hover:bg-white/20 group-hover:text-white transition-all duration-500 uppercase tracking-widest">
                          {card.tag}
                        </span>
                      </div>
                    </div>
                    <div className="absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-indigo-500/0 group-hover:bg-indigo-400/20 blur-3xl transition-all duration-700" />
                  </motion.div>
                </GlitterCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

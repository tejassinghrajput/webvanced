import { motion } from "motion/react";
import data from "@/mockData/homeAbout.json";
import { cn } from "@/lib/utils";

export function HomeAbout() {
  return (
    <div className="bg-white">
      {data.sections.map((section, idx) => (
        <section 
          key={section.id} 
          className={cn(
            "py-20 md:py-32 overflow-hidden",
            idx % 2 === 1 ? "bg-gray-50" : "bg-white"
          )}
        >
          <div className="mx-auto w-full px-6 lg:px-12 xl:px-20">
            <div className={cn(
              "grid lg:grid-cols-2 gap-12 md:gap-24 items-center",
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            )}>
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={cn(idx % 2 === 1 ? "lg:order-2" : "")}
              >
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
                  {section.title}
                </h2>
                <div className="space-y-6">
                  {section.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-lg text-gray-600 leading-relaxed font-medium">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: idx % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={cn(
                  "relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl",
                  idx % 2 === 1 ? "lg:order-1" : ""
                )}
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

import { motion } from "motion/react";
import type { ServicePageData, ServiceTheme } from "./types";

interface Props {
  data: ServicePageData;
  theme: ServiceTheme;
}

export function ServiceWhyUs({ data, theme }: Props) {
  const { accent, accentBgLight, accentBg } = theme;
  return (
    <section className="bg-gray-50 text-gray-950 py-12 md:py-16 relative overflow-hidden border-t border-gray-200">
      
      <div className="mx-auto w-full max-w-[110rem] px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        
        {/* Left Column: Heading */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5 sticky top-24">
          <span className={`inline-block py-1 px-3 rounded-md ${accentBgLight} ${accent} border border-transparent text-xs font-bold uppercase tracking-widest mb-4`}>
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            What Sets<br/>Us Apart
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            {data.whyUs}
          </p>
          <hr className="border-gray-200 w-16 mb-8" />
        </motion.div>

        {/* Right Column: Grid of Qualities */}
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 md:gap-5">
          {data.qualities.map((q, i) => (
            <motion.div 
              key={q.title} 
              initial={{ opacity: 0, y: 15 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1, duration: 0.4 }} 
              className="group rounded-2xl bg-white border border-gray-100 p-6 hover:shadow-lg hover:border-gray-200 transition-all relative overflow-hidden"
            >
              {/* Highlight strip on hover */}
              <div className={`absolute top-0 left-0 w-1 h-full ${accentBg} scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500`} />
              
              <div className="text-3xl font-black text-gray-100 mb-4 group-hover:text-gray-200 transition-colors">
                {(i + 1).toString().padStart(2, '0')}
              </div>
              <p className={`text-lg font-bold tracking-wide text-gray-900 mb-2 transition-colors`}>
                {q.title}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                {q.description}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

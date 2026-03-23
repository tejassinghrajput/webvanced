import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { CheckCircle2, Star, ArrowUpRight } from "lucide-react";
import { ICON_MAP } from "./constants";
import type { ServicePageData, ServiceTheme } from "./types";

interface Props {
  data: ServicePageData;
  theme: ServiceTheme;
}

export function ServiceBenefitsOffers({ data, theme }: Props) {
  const { accent, accentBgLight, hoverBorder, hoverText, accentDark } = theme;
  return (
    <>
      <section className="bg-white py-12 md:py-16 relative z-20 text-gray-900 border-b border-gray-100">
        <div className="mx-auto w-full max-w-[110rem] px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
          <div className="max-w-2xl mb-10">
            <span className={`inline-block py-1 px-3 rounded-md ${accentBgLight} ${accent} text-xs font-bold uppercase tracking-widest mb-3`}>
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight">Our Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {data.services.map((svc, i) => {
              const SvcIcon = (svc.icon && ICON_MAP[svc.icon]) || Star;
              return (
                <motion.div 
                  key={svc.title} 
                  initial={{ opacity: 0, y: 15 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true, margin: "-50px" }} 
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <div 
                    key={svc.title}
                    className={`group flex flex-col bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg ${hoverBorder} hover:bg-white transition-all duration-300 relative overflow-hidden h-full`}
                  >
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 origin-left">
                        <SvcIcon className={`h-12 w-12 ${accent}`} strokeWidth={1.5} />
                      </div>
                      <h3 className={`text-lg font-bold text-gray-900 mb-3 ${hoverText} transition-colors`}>{svc.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-1 flex-1">{svc.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS - Modern Grid */}
      <section className="bg-gray-50 py-12 md:py-16 relative overflow-hidden">
        <div className="mx-auto w-full max-w-[110rem] px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
          <div className="max-w-2xl mb-10">
            <span className={`inline-block py-1 px-3 rounded-md ${accentBgLight} ${accent} text-xs font-bold uppercase tracking-widest mb-3`}>
              Core Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight">Why It Matters</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.benefits.map((b, i) => {
              const BenefitIcon = (b.icon && ICON_MAP[b.icon]) || CheckCircle2;
              return (
                <motion.div 
                  key={b.title} 
                  initial={{ opacity: 0, y: 15 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true, margin: "-50px" }} 
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all group"
                >
                  <div className="shrink-0 mt-1">
                    <div className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                      <BenefitIcon className={`h-8 w-8 ${accent}`} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1.5">{b.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{b.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { PROCESS_ICONS } from "./constants";
import type { ServicePageData, ServiceTheme } from "./types";

interface Props {
  data: ServicePageData;
  icon: ReactNode;
  form: ReactNode;
  illustration?: ReactNode;
  theme: ServiceTheme;
}

export function ServiceHero({ data, icon, form, illustration, theme }: Props) {
  const { heroGradient } = theme;
  
  return (
    <section className={`relative overflow-hidden pt-20 pb-8 md:pt-24 md:pb-12 text-white z-20 ${heroGradient}`}>
      {/* Abstract Background Vectors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Curved Swoosh/Waves */}
        <svg className="absolute w-full h-full text-white/5" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 400C300 200 600 600 1440 200V800H0V400Z" fill="currentColor"/>
          <path d="M0 600C400 400 800 800 1440 400V800H0V600Z" fill="currentColor" opacity="0.5"/>
        </svg>
        {/* Dot pattern */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="mx-auto w-full max-w-[110rem] px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Text & Benefits */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-7 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] mb-4 drop-shadow-sm">{data.hero.title}</h1>
          <p className="text-sm md:text-base text-white/90 leading-relaxed mb-6 md:mb-8">{data.hero.stat}</p>

          <ul className="space-y-3 md:space-y-4 mb-2">
            {data.benefits.slice(0, 3).map((benefit, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 mt-0.5 border border-white/20">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm md:text-base text-white/95 font-medium leading-tight">{benefit.title}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        
        {/* Right Column: Form */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-5 w-full max-w-lg mx-auto lg:max-w-none relative mt-8 lg:mt-0 xl:pl-8">
          <div className="relative z-10">
            {form}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

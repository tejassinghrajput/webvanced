import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { ServiceLeadFormSection } from "./ServiceLeadForm";

interface ServiceItem {
  title: string;
  description: string;
  href: string;
}

interface Benefit {
  title: string;
  description: string;
}

interface Quality {
  title: string;
  description: string;
}

interface HeroData {
  badge: string;
  stat: string;
  title: string;
  description: string;
}

export interface ServicePageData {
  hero: HeroData;
  intro: string;
  benefits: Benefit[];
  services: ServiceItem[];
  qualities: Quality[];
  process: string[];
  whyUs: string;
}

type AccentColor = "indigo" | "emerald" | "orange" | "violet" | "pink" | "fuchsia" | "teal" | "sky" | "cyan" | "amber" | "rose" | "purple";

const COLOR_MAP: Record<AccentColor, {
  accent: string; accentBg: string; accentBgLight: string; accentBorder: string;
  accentDark: string; accentIconBg: string; hoverBg: string; hoverBorder: string; hoverText: string; hoverShadow: string;
  heroBg: string; heroGlow: string;
}> = {
  indigo:  { accent: "text-indigo-600",  accentBg: "bg-indigo-600",  accentBgLight: "bg-indigo-50",  accentBorder: "border-indigo-200",  accentDark: "text-indigo-400",  accentIconBg: "bg-indigo-500/20",  hoverBg: "hover:bg-indigo-500",  hoverBorder: "hover:border-indigo-200",  hoverText: "group-hover:text-indigo-600",  hoverShadow: "hover:shadow-indigo-500/10",  heroBg: "bg-indigo-950",   heroGlow: "rgba(99,102,241,0.45)"  },
  emerald: { accent: "text-emerald-600", accentBg: "bg-emerald-600", accentBgLight: "bg-emerald-50", accentBorder: "border-emerald-200", accentDark: "text-emerald-400", accentIconBg: "bg-emerald-500/20", hoverBg: "hover:bg-emerald-500", hoverBorder: "hover:border-emerald-200", hoverText: "group-hover:text-emerald-600", hoverShadow: "hover:shadow-emerald-500/10", heroBg: "bg-emerald-950",  heroGlow: "rgba(16,185,129,0.40)"  },
  orange:  { accent: "text-orange-600",  accentBg: "bg-orange-600",  accentBgLight: "bg-orange-50",  accentBorder: "border-orange-200",  accentDark: "text-orange-400",  accentIconBg: "bg-orange-500/20",  hoverBg: "hover:bg-orange-500",  hoverBorder: "hover:border-orange-200",  hoverText: "group-hover:text-orange-600",  hoverShadow: "hover:shadow-orange-500/10",  heroBg: "bg-orange-950",   heroGlow: "rgba(234,88,12,0.45)"   },
  violet:  { accent: "text-violet-600",  accentBg: "bg-violet-600",  accentBgLight: "bg-violet-50",  accentBorder: "border-violet-200",  accentDark: "text-violet-400",  accentIconBg: "bg-violet-500/20",  hoverBg: "hover:bg-violet-500",  hoverBorder: "hover:border-violet-200",  hoverText: "group-hover:text-violet-600",  hoverShadow: "hover:shadow-violet-500/10",  heroBg: "bg-violet-950",   heroGlow: "rgba(124,58,237,0.45)"  },
  pink:    { accent: "text-pink-600",    accentBg: "bg-pink-600",    accentBgLight: "bg-pink-50",    accentBorder: "border-pink-200",    accentDark: "text-pink-400",    accentIconBg: "bg-pink-500/20",    hoverBg: "hover:bg-pink-500",    hoverBorder: "hover:border-pink-200",    hoverText: "group-hover:text-pink-600",    hoverShadow: "hover:shadow-pink-500/10",    heroBg: "bg-pink-950",     heroGlow: "rgba(219,39,119,0.45)"  },
  fuchsia: { accent: "text-fuchsia-600", accentBg: "bg-fuchsia-600", accentBgLight: "bg-fuchsia-50", accentBorder: "border-fuchsia-200", accentDark: "text-fuchsia-400", accentIconBg: "bg-fuchsia-500/20", hoverBg: "hover:bg-fuchsia-500", hoverBorder: "hover:border-fuchsia-200", hoverText: "group-hover:text-fuchsia-600", hoverShadow: "hover:shadow-fuchsia-500/10", heroBg: "bg-fuchsia-950",  heroGlow: "rgba(192,38,211,0.45)"  },
  teal:    { accent: "text-teal-600",    accentBg: "bg-teal-600",    accentBgLight: "bg-teal-50",    accentBorder: "border-teal-200",    accentDark: "text-teal-400",    accentIconBg: "bg-teal-500/20",    hoverBg: "hover:bg-teal-500",    hoverBorder: "hover:border-teal-200",    hoverText: "group-hover:text-teal-600",    hoverShadow: "hover:shadow-teal-500/10",    heroBg: "bg-teal-950",     heroGlow: "rgba(13,148,136,0.45)"  },
  sky:     { accent: "text-sky-600",     accentBg: "bg-sky-600",     accentBgLight: "bg-sky-50",     accentBorder: "border-sky-200",     accentDark: "text-sky-400",     accentIconBg: "bg-sky-500/20",     hoverBg: "hover:bg-sky-500",     hoverBorder: "hover:border-sky-200",     hoverText: "group-hover:text-sky-600",     hoverShadow: "hover:shadow-sky-500/10",     heroBg: "bg-sky-950",      heroGlow: "rgba(2,132,199,0.45)"   },
  cyan:    { accent: "text-cyan-600",    accentBg: "bg-cyan-600",    accentBgLight: "bg-cyan-50",    accentBorder: "border-cyan-200",    accentDark: "text-cyan-400",    accentIconBg: "bg-cyan-500/20",    hoverBg: "hover:bg-cyan-500",    hoverBorder: "hover:border-cyan-200",    hoverText: "group-hover:text-cyan-600",    hoverShadow: "hover:shadow-cyan-500/10",    heroBg: "bg-cyan-950",     heroGlow: "rgba(8,145,178,0.45)"   },
  amber:   { accent: "text-amber-600",   accentBg: "bg-amber-600",   accentBgLight: "bg-amber-50",   accentBorder: "border-amber-200",   accentDark: "text-amber-400",   accentIconBg: "bg-amber-500/20",   hoverBg: "hover:bg-amber-500",   hoverBorder: "hover:border-amber-200",   hoverText: "group-hover:text-amber-600",   hoverShadow: "hover:shadow-amber-500/10",   heroBg: "bg-amber-950",    heroGlow: "rgba(217,119,6,0.50)"   },
  rose:    { accent: "text-rose-600",    accentBg: "bg-rose-600",    accentBgLight: "bg-rose-50",    accentBorder: "border-rose-200",    accentDark: "text-rose-400",    accentIconBg: "bg-rose-500/20",    hoverBg: "hover:bg-rose-500",    hoverBorder: "hover:border-rose-200",    hoverText: "group-hover:text-rose-600",    hoverShadow: "hover:shadow-rose-500/10",    heroBg: "bg-rose-950",     heroGlow: "rgba(225,29,72,0.50)"   },
  purple:  { accent: "text-purple-600",  accentBg: "bg-purple-600",  accentBgLight: "bg-purple-50",  accentBorder: "border-purple-200",  accentDark: "text-purple-400",  accentIconBg: "bg-purple-500/20",  hoverBg: "hover:bg-purple-500",  hoverBorder: "hover:border-purple-200",  hoverText: "group-hover:text-purple-600",  hoverShadow: "hover:shadow-purple-500/10",  heroBg: "bg-purple-950",   heroGlow: "rgba(147,51,234,0.45)"  },
};

interface ServicePageTemplateProps {
  data: ServicePageData;
  icon: ReactNode;
  illustration: ReactNode;
  accentColor?: AccentColor;
}

/** Reusable full-page layout for all service sub-pages. */
export function ServicePageTemplate({
  data,
  icon,
  illustration,
  accentColor = "indigo",
}: ServicePageTemplateProps) {
  const { accent, accentBg, accentBgLight, accentBorder, accentDark, accentIconBg, hoverBg, hoverBorder, hoverText, hoverShadow, heroBg, heroGlow } = COLOR_MAP[accentColor];

  return (
    <PageLayout>

      {/* ── HERO — 2-col: text left, illustration right ── */}
      <section className={`relative overflow-hidden ${heroBg} pt-24 md:pt-32 pb-12 md:pb-16 text-white`}>
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 70% 60% at 60% 50%, ${heroGlow}, transparent)` }} />
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12 xl:px-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left: copy */}
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-5">
                <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${accentIconBg} ${accentDark}`}>{icon}</div>
                <span className={`text-xs font-bold uppercase tracking-widest ${accentDark}`}>{data.hero.badge}</span>
              </div>
              <p className={`text-xs font-semibold ${accentDark} mb-4 italic opacity-80`}>"{data.hero.stat}"</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-5">
                {data.hero.title}
              </h1>
              <p className="text-base text-gray-300 leading-relaxed mb-8 max-w-xl">{data.hero.description}</p>
              <div className="flex flex-wrap gap-3">
                <a href="#lead-form" className={`inline-flex items-center gap-2 rounded-full ${accentBg} ${hoverBg} px-7 py-3 text-sm font-bold text-white uppercase tracking-widest transition-all shadow-lg`}>
                  Get Started <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#lead-form" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-bold text-white uppercase tracking-widest hover:bg-white/10 transition-all">
                  Free Quote
                </a>
              </div>
            </motion.div>

            {/* Right: illustration */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className={`hidden lg:flex items-center justify-center rounded-3xl ${accentIconBg} p-10`}
            >
              {illustration}
            </motion.div>
          </div>
        </div>

        {/* Process bar pinned to bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
            <div className="flex items-center justify-between gap-2 py-3 overflow-x-auto">
              {data.process.map((step, i) => (
                <div key={step} className="flex items-center gap-2 shrink-0">
                  <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white ${accentBg}`}>{i + 1}</span>
                  <span className="text-xs text-gray-300 font-medium whitespace-nowrap">{step}</span>
                  {i < data.process.length - 1 && <ChevronRight className="h-3 w-3 text-gray-600 ml-2" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS + SERVICES — side by side ── */}
      <section className="bg-white py-10 md:py-14 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Benefits */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className={`text-xs font-bold uppercase tracking-widest ${accent}`}>Benefits</span>
              <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight text-gray-950 mb-6">Why It Matters</h2>
              <ul className="space-y-4">
                {data.benefits.map((benefit, i) => (
                  <motion.li
                    key={benefit.title}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-3"
                  >
                    <CheckCircle2 className={`h-5 w-5 ${accent} mt-0.5 shrink-0`} />
                    <div>
                      <p className="text-sm font-bold text-gray-900">{benefit.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{benefit.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <span className={`text-xs font-bold uppercase tracking-widest ${accent}`}>What We Offer</span>
              <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight text-gray-950 mb-6">Our Services</h2>
              <div className="space-y-3">
                {data.services.map((service, i) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={service.href}
                      className={`group flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50/80 px-4 py-3.5 ${hoverBorder} hover:bg-white hover:shadow-md ${hoverShadow} transition-all duration-200`}
                    >
                      <div className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${accentBgLight} ${accent} text-xs font-bold`}>{i + 1}</div>
                      <div className="min-w-0 flex-1">
                        <p className={`text-sm font-bold text-gray-900 ${hoverText} transition-colors`}>{service.title}</p>
                        <p className="text-xs text-gray-500 leading-relaxed mt-0.5 line-clamp-2">{service.description}</p>
                      </div>
                      <ChevronRight className={`h-4 w-4 text-gray-300 ${hoverText} shrink-0 mt-1 transition-colors`} />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY US — dark section with quality grid ── */}
      <section className="bg-gray-950 text-white py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-3 gap-10 items-start">

            {/* Left: heading + paragraph */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-1">
              <span className={`text-xs font-bold uppercase tracking-widest ${accentDark}`}>Why Choose Us</span>
              <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight mb-4">What Sets Us Apart</h2>
              <p className="text-sm text-gray-400 leading-relaxed">{data.whyUs}</p>
            </motion.div>

            {/* Right: qualities grid */}
            <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {data.qualities.map((q, i) => (
                <motion.div
                  key={q.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition-colors"
                >
                  <p className={`text-xs font-bold uppercase tracking-wide ${accentDark} mb-1`}>{q.title}</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{q.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LEAD FORM ── */}
      <div id="lead-form">
        <ServiceLeadFormSection serviceName={data.hero.badge} />
      </div>

    </PageLayout>
  );
}



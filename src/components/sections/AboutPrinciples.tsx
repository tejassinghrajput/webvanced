import { motion } from "motion/react";
import { Layers, Code2, TrendingUp, Smartphone, Cpu, BarChart2, Sparkles as SparklesIcon } from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ComponentType } from "react";
import aboutData from "@/mockData/about.json";

const PRINCIPLES_ICONS: Record<string, ComponentType<LucideProps>> = {
  Layers, Code2, TrendingUp, Smartphone, Cpu, BarChart2,
};

const COLOR_MAP: Record<string, { bg: string; text: string; bar: string; glow: string }> = {
  indigo:  { bg: "bg-indigo-50",  text: "text-indigo-600",  bar: "bg-indigo-500",  glow: "group-hover:shadow-indigo-100" },
  violet:  { bg: "bg-violet-50",  text: "text-violet-600",  bar: "bg-violet-500",  glow: "group-hover:shadow-violet-100" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600", bar: "bg-emerald-500", glow: "group-hover:shadow-emerald-100" },
  blue:    { bg: "bg-blue-50",    text: "text-blue-600",    bar: "bg-blue-500",    glow: "group-hover:shadow-blue-100" },
  orange:  { bg: "bg-orange-50",  text: "text-orange-500",  bar: "bg-orange-500",  glow: "group-hover:shadow-orange-100" },
  rose:    { bg: "bg-rose-50",    text: "text-rose-600",    bar: "bg-rose-500",    glow: "group-hover:shadow-rose-100" },
};

export function AboutPrinciples() {
  const { badge, title, items } = aboutData.what;

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-xl">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-indigo-600 uppercase"
          >
            <span className="h-px w-6 bg-indigo-300" />
            {badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-950"
          >
            {title}
          </motion.h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = PRINCIPLES_ICONS[item.icon] ?? SparklesIcon;
            const c = COLOR_MAP[item.color] ?? COLOR_MAP.indigo;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 + i * 0.07 }}
                className={`group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm p-7 hover:shadow-lg transition-shadow duration-300 ${c.glow}`}
              >
                {/* Hover gradient fill */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-gray-50/80 to-white" />
                {/* Coloured top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] ${c.bar} rounded-t-2xl`} />

                {/* Card number watermark */}
                <span className="absolute bottom-5 right-6 text-6xl font-black text-gray-100 select-none leading-none">
                  {i + 1}
                </span>

                <div className={`relative mt-2 mb-5 h-11 w-11 flex items-center justify-center rounded-xl ${c.bg}`}>
                  <Icon className={`h-5 w-5 ${c.text}`} />
                </div>
                <h3 className="relative text-base font-bold text-gray-950">{item.title}</h3>
                <p className="relative mt-2 text-sm text-gray-500 leading-relaxed">{item.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
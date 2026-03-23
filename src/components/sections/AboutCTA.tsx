import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import aboutData from "@/mockData/about.json";

export function AboutCTA() {
  const { title, subtitle, buttons } = aboutData.cta;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-violet-950 to-indigo-950 py-28">
      {/* Static orbs — no JS timers */}
      <div className="pointer-events-none absolute -left-48 top-0 h-[560px] w-[560px] rounded-full bg-indigo-600/20 blur-[110px]" />
      <div className="pointer-events-none absolute -right-48 bottom-0 h-[460px] w-[460px] rounded-full bg-violet-600/20 blur-[100px]" />

      {/* Faint dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(rgba(165,180,252,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-3xl px-6 text-center text-white"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">{title}</h2>
        <p className="mt-5 text-lg text-indigo-200/60 leading-relaxed">{subtitle}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {buttons.map((btn) => (
            <Link
              key={btn.label}
              to={btn.href}
              className="inline-flex items-center gap-2 rounded-lg bg-white text-indigo-700 hover:bg-indigo-50 px-8 py-3 text-sm font-bold transition-colors"
            >
              {btn.label} <ArrowRight className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
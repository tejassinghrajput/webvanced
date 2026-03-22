import { motion } from "motion/react";
import * as Icons from "lucide-react";
import aboutData from "@/mockData/about.json";

/** Slowly rotating concentric rings in the top-right corner */
function RotatingRings() {
  return (
    <div className="pointer-events-none absolute -right-40 -top-40 overflow-visible" aria-hidden="true">
      {[360, 280, 200].map((size, i) => (
        <motion.div
          key={size}
          className="absolute rounded-full border border-indigo-400/[0.07]"
          style={{
            width: size,
            height: size,
            top: -size / 2,
            right: -size / 2,
          }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 40 + i * 15, repeat: Infinity, ease: "linear" }}
        />
      ))}
      {/* Glowing centre dot */}
      <div className="absolute -top-4 -right-4 h-3 w-3 rounded-full bg-indigo-500/40 blur-[2px]" />
    </div>
  );
}

/** Drifting micro-particles scattered across section */
function FloatingDots() {
  const positions = [
    { left: "8%", top: "30%" }, { left: "22%", top: "65%" }, { left: "45%", top: "18%" },
    { left: "58%", top: "75%" }, { left: "75%", top: "40%" }, { left: "90%", top: "20%" },
  ];
  return (
    <>
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-indigo-400/25"
          style={pos}
          animate={{ y: [0, -18, 0, 18, 0], opacity: [0.25, 0.55, 0.25] }}
          transition={{ duration: 5 + i * 0.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.9 }}
        />
      ))}
    </>
  );
}

export function AboutMission() {
  const { badge, title, description, reasons } = aboutData.why;

  return (
    <section className="relative bg-slate-950 py-24 md:py-32 text-white overflow-hidden">
      <RotatingRings />
      <FloatingDots />

      {/* Faint horizontal scan-line grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(165,180,252,1) 1px, transparent 1px)",
          backgroundSize: "100% 44px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-indigo-400 uppercase"
          >
            <span className="h-px w-6 bg-indigo-400/50" />
            {badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg text-slate-400 leading-relaxed"
          >
            {description}
          </motion.p>
        </div>

        {/* Reason cards — left-border minimal style */}
        <div className="grid gap-5 md:grid-cols-3">
          {reasons.map((r, i) => {
            const Icon = (Icons as any)[r.icon] ?? Icons.Sparkles;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/[0.08] p-8 hover:bg-white/[0.06] transition-colors"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-indigo-600/10 to-transparent" />
                {/* Number */}
                <span className="absolute top-5 right-6 text-5xl font-black text-white/[0.035] select-none">
                  0{i + 1}
                </span>
                <div className="relative mb-5 h-11 w-11 flex items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="relative text-base font-bold text-white">{r.title}</h3>
                <p className="relative mt-3 text-sm text-slate-400 leading-relaxed">{r.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

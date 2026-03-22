import { motion } from "motion/react";
import teamData from "@/mockData/homeTeam.json";

const PALETTES = [
  { avatar: "bg-indigo-600 text-white",  ring: "ring-indigo-100",  label: "bg-indigo-50 text-indigo-700",  dot: "bg-indigo-500" },
  { avatar: "bg-violet-600 text-white",  ring: "ring-violet-100",  label: "bg-violet-50 text-violet-700",  dot: "bg-violet-500" },
  { avatar: "bg-emerald-600 text-white", ring: "ring-emerald-100", label: "bg-emerald-50 text-emerald-700", dot: "bg-emerald-500" },
  { avatar: "bg-blue-600 text-white",    ring: "ring-blue-100",    label: "bg-blue-50 text-blue-700",      dot: "bg-blue-500" },
];

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

export function AboutTeam() {
  const { sectionLabel, heading, subtext, members } = teamData;

  return (
    <section className="bg-slate-950 py-24 md:py-32 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-indigo-400 uppercase"
          >
            <span className="h-px w-6 bg-indigo-400/50" />
            {sectionLabel}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            {heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-slate-400 leading-relaxed"
          >
            {subtext}
          </motion.p>
        </div>

        {/* Member cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m, i) => {
            const p = PALETTES[i % PALETTES.length];
            return (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 + i * 0.1 }}
                className="group rounded-2xl bg-white/[0.04] border border-white/[0.08] p-7 flex flex-col gap-5 hover:bg-white/[0.07] transition-colors"
              >
                {/* Avatar */}
                <div className={`h-14 w-14 rounded-2xl flex items-center justify-center text-lg font-black ring-4 ring-offset-2 ring-offset-slate-950 ${p.avatar} ${p.ring}`}>
                  {getInitials(m.name)}
                </div>

                {/* Name + role */}
                <div>
                  <p className="font-bold text-white text-sm">{m.name}</p>
                  <span className={`mt-1.5 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wide ${p.label}`}>
                    {m.title}
                  </span>
                </div>

                {/* Bio */}
                <p className="text-sm text-slate-400 leading-relaxed flex-1">{m.bio}</p>

                {/* Indicator dot */}
                <div className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${p.dot}`} />
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Active member</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
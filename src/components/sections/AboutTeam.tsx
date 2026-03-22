import { motion } from "motion/react";
import teamData from "@/mockData/homeTeam.json";
import { TeamCard } from "./TeamCard";
import type { TeamMember } from "@/types/team";


export function AboutTeam() {
  const { sectionLabel, heading, subtext, members } = teamData;

  return (
    <section className="bg-white py-24 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section header */}
        <div className="mb-20 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase"
          >
            <span className="h-px w-8 bg-indigo-300" />
            {sectionLabel}
            <span className="h-px w-8 bg-indigo-300" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900"
          >
            {heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-base text-slate-500 leading-relaxed max-w-xl mx-auto"
          >
            {subtext}
          </motion.p>
        </div>

        {/* Single card — four columns side by side */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 rounded-3xl border border-gray-100 bg-white shadow-xl shadow-slate-100 overflow-hidden"
        >
          {(members as TeamMember[]).map((m, i) => (
            <TeamCard key={m.name} member={m} index={i} isLast={i === members.length - 1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

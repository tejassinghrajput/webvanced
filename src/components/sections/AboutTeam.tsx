import { motion } from "motion/react";
import teamData from "@/mockData/homeTeam.json";
import { TeamCard } from "./TeamCard";
import type { TeamMember } from "@/types/team";


export function AboutTeam() {
  const { sectionLabel, heading, subtext, members } = teamData;

  return (
    <section className="bg-slate-50 py-24 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-[85rem] px-6">

        {/* Section header */}
        <div className="mb-16 md:mb-20 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 text-xs font-bold tracking-widest text-indigo-500 uppercase"
          >
            <span className="h-[2px] w-6 bg-indigo-500 rounded-full" />
            {sectionLabel}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900"
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {(members as TeamMember[]).map((m, i) => (
            <TeamCard key={m.name} member={m} index={i} isLast={i === members.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

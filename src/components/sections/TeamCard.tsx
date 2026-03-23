import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { TeamMember } from "@/types/team";

interface Props { member: TeamMember; index: number; isLast: boolean }

const THEMES: Record<string, { bg: string; text: string; bgHover: string; borderHover: string; lightBg: string }> = {
  indigo: { lightBg: "bg-indigo-50", bg: "bg-indigo-600", text: "text-indigo-600", bgHover: "group-hover:bg-indigo-50", borderHover: "hover:border-indigo-200 hover:shadow-[0_20px_40px_-12px_rgba(79,70,229,0.15)]" },
  violet: { lightBg: "bg-violet-50", bg: "bg-violet-600", text: "text-violet-600", bgHover: "group-hover:bg-violet-50", borderHover: "hover:border-violet-200 hover:shadow-[0_20px_40px_-12px_rgba(124,58,237,0.15)]" },
  emerald: { lightBg: "bg-emerald-50", bg: "bg-emerald-600", text: "text-emerald-700", bgHover: "group-hover:bg-emerald-50", borderHover: "hover:border-emerald-200 hover:shadow-[0_20px_40px_-12px_rgba(5,150,105,0.15)]" },
  amber: { lightBg: "bg-amber-50", bg: "bg-amber-500", text: "text-amber-600", bgHover: "group-hover:bg-amber-50", borderHover: "hover:border-amber-200 hover:shadow-[0_20px_40px_-12px_rgba(217,119,6,0.15)]" },
};

/** Single Team Member Card */
export function TeamCard({ member, index }: Props) {
  const theme = THEMES[member.color] || THEMES.indigo;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 + index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative flex flex-col bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-sm transition-all duration-500 hover:-translate-y-2 overflow-hidden",
        theme.borderHover
      )}
    >
      {/* Top Background Gradient on Hover */}
      <div className={cn(
        "absolute top-0 left-0 right-0 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 bg-gradient-to-b to-transparent",
        theme.lightBg
      )} />

      {/* Top Banner Accent */}
      <div className={cn("absolute top-0 left-0 right-0 h-1", theme.bg)} />

      {/* Header Profile */}
      <div className="flex items-center gap-4 mb-6 z-10">
        <div className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] font-black text-lg text-white shadow-inner",
          theme.bg
        )}>
          {member.name.charAt(0)}
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-extrabold tracking-tight text-slate-900 leading-tight">{member.name}</h3>
          <p className={cn("text-[12px] font-bold mt-1 uppercase tracking-widest", theme.text)}>{member.title}</p>
        </div>
      </div>

      {/* Quote Bubble */}
      <div className={cn("relative p-4 rounded-2xl mb-7 transition-colors duration-500", theme.lightBg)}>
        <p className="text-[14px] font-medium text-slate-700 leading-relaxed italic relative z-10">
          "{member.quote}"
        </p>
      </div>

      {/* Experience & Bio */}
      <div className="flex flex-col gap-3 flex-1 px-1">
        {member.experience && (
          <div className="flex items-center gap-2">
            <span className={cn("h-1.5 w-1.5 rounded-full", theme.bg)} />
            <p className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">{member.experience}</p>
          </div>
        )}
        <p className="text-[13.5px] text-slate-500 leading-relaxed">
          {member.bio}
        </p>
      </div>
    </motion.div>
  );
}

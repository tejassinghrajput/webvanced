import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { PALETTES, type Palette } from "@/lib/teamPalettes";
import type { TeamMember } from "@/types/team";

interface Props { member: TeamMember; index: number; isLast: boolean }

/** Single column inside the team roster card */
export function TeamCard({ member, index, isLast }: Props) {
  const p: Palette = (PALETTES as Record<string, Palette>)[member.color] ?? PALETTES.indigo;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.06 + index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative flex flex-col gap-6 px-8 py-10 overflow-hidden transition-shadow duration-300",
        !isLast && "border-r border-gray-100",
        p.card
      )}
    >
      {/* Watermark */}
      <span aria-hidden className={cn("pointer-events-none absolute -bottom-6 -right-2 select-none text-[8rem] font-black leading-none", p.watermark)}>
        {member.name[0]}
      </span>

      {/* Accent bar */}
      <div className={cn("h-1 w-14 rounded-full bg-gradient-to-r", p.accent)} />

      {/* Name + role + experience */}
      <div className="space-y-2.5">
        <h3 className="text-lg font-bold tracking-tight text-slate-900 leading-snug">{member.name}</h3>
        <span className={cn("inline-block rounded-full px-3.5 py-1 text-[11px] font-semibold", p.role)}>{member.title}</span>
        {member.experience && (
          <p className={cn("text-[10px] font-bold tracking-widest uppercase", p.quote)}>{member.experience}</p>
        )}
      </div>

      {/* Quote */}
      <div className={cn("relative pl-4 border-l-2", p.quoteBorder)}>
        <p className={cn("text-sm font-semibold italic leading-relaxed", p.quote)}>{member.quote}</p>
      </div>

      {/* Divider */}
      <div className={cn("h-px bg-gradient-to-r from-transparent", p.div, "to-transparent")} />

      {/* Bio */}
      <p className="text-[13px] leading-relaxed text-slate-500">{member.bio}</p>
    </motion.div>
  );
}

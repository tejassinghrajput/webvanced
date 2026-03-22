export interface Palette {
  role: string;
  quote: string;
  card: string;
  div: string;
  accent: string;
  watermark: string;
  quoteBorder: string;
}

export const PALETTES = {
  indigo: {
    role: "bg-indigo-50 border border-indigo-200 text-indigo-700",
    quote: "text-indigo-600",
    card: "hover:shadow-[0_8px_40px_-8px_rgba(99,102,241,0.18)]",
    div: "via-indigo-200",
    accent: "from-indigo-500 to-violet-500",
    watermark: "text-indigo-50",
    quoteBorder: "border-indigo-300",
  },
  violet: {
    role: "bg-violet-50 border border-violet-200 text-violet-700",
    quote: "text-violet-600",
    card: "hover:shadow-[0_8px_40px_-8px_rgba(139,92,246,0.18)]",
    div: "via-violet-200",
    accent: "from-violet-500 to-fuchsia-500",
    watermark: "text-violet-50",
    quoteBorder: "border-violet-300",
  },
  emerald: {
    role: "bg-emerald-50 border border-emerald-200 text-emerald-700",
    quote: "text-emerald-600",
    card: "hover:shadow-[0_8px_40px_-8px_rgba(16,185,129,0.15)]",
    div: "via-emerald-200",
    accent: "from-emerald-500 to-teal-400",
    watermark: "text-emerald-50",
    quoteBorder: "border-emerald-300",
  },
  amber: {
    role: "bg-amber-50 border border-amber-200 text-amber-700",
    quote: "text-amber-600",
    card: "hover:shadow-[0_8px_40px_-8px_rgba(245,158,11,0.15)]",
    div: "via-amber-200",
    accent: "from-amber-500 to-orange-400",
    watermark: "text-amber-50",
    quoteBorder: "border-amber-300",
  },
} satisfies Record<string, Palette>;

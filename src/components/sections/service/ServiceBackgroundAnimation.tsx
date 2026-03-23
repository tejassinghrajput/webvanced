import { motion } from "motion/react";
import { useEffect, useState } from "react";
import type { ServicePageData, ServiceTheme } from "./types";

interface Props {
  data: ServicePageData;
  theme: ServiceTheme;
}

export function ServiceBackgroundAnimation({ data, theme }: Props) {
  // Returns a clean, minimal white background matching the US/UK agency aesthetic from the references.
  return (
    <div className="fixed inset-0 pointer-events-none z-[0] bg-white overflow-hidden" aria-hidden="true">
      {/* Subtle bottom glow just to keep it from being perfectly stark */}
      <div 
        className="absolute bottom-0 right-0 w-[60vw] h-[60vh] opacity-[0.03] blur-[150px] transition-colors duration-1000" 
        style={{ background: `radial-gradient(circle at 100% 100%, ${theme.heroGlow}, transparent 70%)` }} 
      />
    </div>
  );
}

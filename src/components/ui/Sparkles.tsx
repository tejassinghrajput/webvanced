import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// Unused Particle interface removed — PARTICLES array typed inline below

// Particle shape is static — values chosen once at module load (not per render)
const PARTICLES = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  size: 1 + (i % 3),
  left: (i * 11 + 3) % 100,
  top: (i * 17 + 7) % 100,
  opacity: 0.3 + (i % 5) * 0.1,
  duration: 2 + (i % 4),
  delay: (i % 6) * 0.7,
}));

export function Sparkles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute bg-white rounded-full animate-sparkle"
          style={{
            width: p.size + "px",
            height: p.size + "px",
            left: p.left + "%",
            top: p.top + "%",
            "--sparkle-opacity": p.opacity,
            "--sparkle-duration": p.duration + "s",
            "--sparkle-delay": p.delay + "s",
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

export function ShimmerEffect() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-sweep pointer-events-none"
    />
  );
}

export function GlowText({ children, className }: { children: React.ReactNode, className?: string }) {
  return <span className={className}>{children}</span>;
}

export function GlitterText({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={cn("relative inline-block overflow-hidden", className)}>
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-shimmer-sweep pointer-events-none" aria-hidden="true" />
      <span className="relative z-10">{children}</span>
    </span>
  );
}

export function GlitterButton({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      className={cn("relative overflow-hidden", className)}
      whileHover="hover"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
        variants={{
          hover: { x: ["-100%", "200%"] }
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      {children}
    </motion.div>
  );
}

export function GlitterCard({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      className={cn("relative overflow-hidden", className)}
      whileHover="hover"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 pointer-events-none"
        variants={{
          hover: { x: ["-100%", "200%"] }
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      {children}
    </motion.div>
  );
}

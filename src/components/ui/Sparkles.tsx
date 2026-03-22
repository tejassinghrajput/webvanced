import React, { useMemo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Particle {
  id: number;
  width: number;
  height: number;
  left: number;
  top: number;
  opacity: number;
  duration: number;
  delay: number;
}

export function Sparkles() {
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        width: Math.random() * 3 + 1,
        height: Math.random() * 3 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.3,
        duration: 2 + Math.random() * 3,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-white rounded-full"
          style={{
            width: p.width + "px",
            height: p.height + "px",
            left: p.left + "%",
            top: p.top + "%",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, p.opacity, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function ShimmerEffect() {
  return (
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
      animate={{ x: ["-100%", "200%"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
    />
  );
}

export function GlowText({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.span
      className={className}
      animate={{ 
        textShadow: [
          "0 0 0px rgba(79,70,229,0)",
          "0 0 10px rgba(79,70,229,0.5)",
          "0 0 0px rgba(79,70,229,0)"
        ]
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.span>
  );
}

export function GlitterText({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={cn("relative inline-block overflow-hidden", className)}>
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
      />
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

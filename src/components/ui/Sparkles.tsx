import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function Sparkles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: Math.random() * 3 + 1 + "px",
            height: Math.random() * 3 + 1 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
          }}
          initial={{ 
            scale: 0,
            opacity: 0 
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, Math.random() * 0.5 + 0.3, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
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

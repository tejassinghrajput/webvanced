import { motion } from "motion/react";

import { ShimmerEffect } from "./Sparkles";

export function MeshBackground() {
  return (
    <div className="bg-mesh absolute inset-0 -z-10 overflow-hidden">
      <ShimmerEffect />
    </div>
  );
}

export function FloatingBlobs() {
  return (
    <>
      <div className="blob bg-brand h-96 w-96 -top-20 -left-20" />
      <div className="blob bg-accent-teal h-80 w-80 top-1/2 -right-20" />
      <div className="blob bg-accent-violet h-72 w-72 -bottom-20 left-1/4" />
    </>
  );
}

export function GridPattern() {
  return (
    <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
      <svg className="h-full w-full stroke-gray-200/50" aria-hidden="true">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M.5 40V.5H40" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

export function DecorativeCircle({ className }: { className?: string }) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className={className}
    >
      <svg viewBox="0 0 100 100" className="h-full w-full opacity-20">
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
      </svg>
    </motion.div>
  );
}

export function NetworkBackground() {
  return (
    <div className="absolute inset-0 -z-10 bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.3),rgba(139,92,246,0.2),transparent_70%)]" />
      <svg className="h-full w-full opacity-60" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        {[...Array(60)].map((_, i) => (
          <motion.circle
            key={`star-${i}`}
            r={Math.random() * 2 + 0.5}
            fill="white"
            initial={{ cx: Math.random() * 1000, cy: Math.random() * 1000 }}
            animate={{ 
              opacity: [0.2, 1, 0.2], 
              scale: [1, 1.8, 1],
              fill: ["#fff", "#8b5cf6", "#fff"]
            }}
            transition={{ 
              duration: 2 + Math.random() * 3, 
              repeat: Infinity, 
              delay: Math.random() * 5 
            }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <motion.line
            key={`line-${i}`}
            x1={Math.random() * 1000} y1={Math.random() * 1000}
            x2={Math.random() * 1000} y2={Math.random() * 1000}
            stroke="white" strokeWidth="0.2" strokeOpacity="0.1"
            animate={{ x1: [null, Math.random() * 1000], y1: [null, Math.random() * 1000] }}
            transition={{ duration: 30 + Math.random() * 30, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </svg>
    </div>
  );
}

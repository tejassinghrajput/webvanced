import React from "react";
import { cn } from "@/lib/utils";
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
    <div className={cn("animate-spin-slow", className)} aria-hidden="true">
      <svg viewBox="0 0 100 100" className="h-full w-full opacity-20">
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
      </svg>
    </div>
  );
}

// Star positions generated once at module load — stable across renders, no JS timers.
const STARS = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  cx: ((i * 97 + 13) % 1000),
  cy: ((i * 61 + 37) % 1000),
  r: 0.5 + (i % 3) * 0.75,
  opacity: 0.2 + (i % 5) * 0.16,
  delay: (i % 7) * 0.7,
  dur: 2 + (i % 4),
}));

export function NetworkBackground() {
  return (
    <div className="absolute inset-0 -z-10 bg-gray-950 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.3),rgba(139,92,246,0.2),transparent_70%)]" />
      <svg className="h-full w-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        {/* Static connection lines */}
        <line x1="120" y1="80"  x2="450" y2="320" stroke="white" strokeWidth="0.2" strokeOpacity="0.07" />
        <line x1="450" y1="320" x2="780" y2="150" stroke="white" strokeWidth="0.2" strokeOpacity="0.07" />
        <line x1="780" y1="150" x2="920" y2="480" stroke="white" strokeWidth="0.2" strokeOpacity="0.07" />
        <line x1="200" y1="600" x2="560" y2="750" stroke="white" strokeWidth="0.2" strokeOpacity="0.07" />
        <line x1="560" y1="750" x2="850" y2="680" stroke="white" strokeWidth="0.2" strokeOpacity="0.07" />
        {/* CSS-pulsing stars — no JS timers */}
        {STARS.map((s) => (
          <circle
            key={s.id}
            cx={s.cx}
            cy={s.cy}
            r={s.r}
            fill="white"
            className="animate-sparkle"
            style={{
              "--sparkle-opacity": s.opacity,
              "--sparkle-delay": s.delay + "s",
              "--sparkle-duration": s.dur + "s",
            } as React.CSSProperties}
          />
        ))}
      </svg>
    </div>
  );
}

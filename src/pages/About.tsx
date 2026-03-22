import { useEffect, useRef } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutMission } from "@/components/sections/AboutMission";
import { AboutPrinciples } from "@/components/sections/AboutPrinciples";
import { AboutTeam } from "@/components/sections/AboutTeam";

/** Full-page floating particle network — fixed behind all sections */
function PageNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * devicePixelRatio;
      canvas.height = H * devicePixelRatio;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    type P = { x: number; y: number; vx: number; vy: number };
    let nodes: P[] = Array.from({ length: 48 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    }));

    let raf: number;
    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      nodes = nodes.map((n) => ({
        ...n,
        x: ((n.x + n.vx) + W) % W,
        y: ((n.y + n.vy) + H) % H,
      }));
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d < 140) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(99,102,241,${(1 - d / 140) * 0.18})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(129,140,248,0.35)";
        ctx.fill();
      });
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      aria-hidden="true"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

export default function AboutPage() {
  return (
    <PageLayout>
      <PageNetworkCanvas />
      <div className="relative z-10">
        <AboutHero />
        <AboutMission />
        <AboutPrinciples />
        <AboutTeam />
      </div>
    </PageLayout>
  );
}

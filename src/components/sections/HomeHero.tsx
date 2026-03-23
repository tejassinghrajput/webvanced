import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import data from "@/mockData/homeHero.json";

// ── Magnetic particle network ─────────────────────────────────────────────────
function MagneticField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Track mouse at window level so it works through overlay divs
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    type P = { x: number; y: number; ox: number; oy: number; vx: number; vy: number; r: number; hue: number; a: number; angle: number; angleSpeed: number };

    const W = () => canvas.width, H = () => canvas.height;
    const COUNT = 90;
    let pts: P[] = [];

    const spawn = () => {
      pts = Array.from({ length: COUNT }, () => {
        const x = Math.random() * W(), y = Math.random() * H();
        return { x, y, ox: x, oy: y, vx: (Math.random() - 0.5) * 4.5, vy: (Math.random() - 0.5) * 4.5,
          r: 1 + Math.random() * 1.8,
          hue: Math.random() < 0.35 ? 255 + Math.random() * 30 : 215 + Math.random() * 50,
          a: 0.35 + Math.random() * 0.65,
          angle: Math.random() * Math.PI * 2,
          angleSpeed: (Math.random() - 0.5) * 0.036 };
      });
    };
    spawn();
    window.addEventListener("resize", spawn);

    let raf: number;
    const WANDER   = 0.54;   // autonomous wander force
    const ATTRACT  = 1.4;
    const ATTRACT_R = 300;
    const RETURN   = 0.006;
    const DAMP     = 0.94;
    const LINE_R   = 130;

    function tick() {
      if (!canvas || !ctx) return;
      const w = W(), h = H();
      const mx = mouseRef.current.x, my = mouseRef.current.y;

      // Fading trail — never fully clear so particles leave soft motion blur
      ctx.fillStyle = "rgba(3,7,18,0.22)";
      ctx.fillRect(0, 0, w, h);

      // Physics
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];

        // Autonomous wander — always moving
        p.angle += p.angleSpeed;
        p.vx += Math.cos(p.angle) * WANDER;
        p.vy += Math.sin(p.angle) * WANDER;

        // Mouse attraction
        const dx = mx - p.x, dy = my - p.y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < ATTRACT_R && d > 0.5) {
          const t = 1 - d / ATTRACT_R;
          const f = t * t * ATTRACT;
          p.vx += (dx / d) * f;
          p.vy += (dy / d) * f;
        }

        // Soft inter-particle repulsion (keep field airy)
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const rx = p.x - q.x, ry = p.y - q.y;
          const rd = Math.sqrt(rx * rx + ry * ry);
          if (rd < 40 && rd > 0.3) {
            const f = (1 - rd / 40) * 0.07;
            p.vx += (rx / rd) * f; p.vy += (ry / rd) * f;
            q.vx -= (rx / rd) * f; q.vy -= (ry / rd) * f;
          }
        }

        // Drift home
        p.vx += (p.ox - p.x) * RETURN;
        p.vy += (p.oy - p.y) * RETURN;

        p.vx *= DAMP; p.vy *= DAMP;

        // Speed cap
        const sp = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (sp > 33) { p.vx = (p.vx / sp) * 33; p.vy = (p.vy / sp) * 33; }

        p.x += p.vx; p.y += p.vy;
      }

      // Connection lines
      ctx.lineWidth = 0.5;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const p = pts[i], q = pts[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < LINE_R) {
            ctx.strokeStyle = `hsla(225,70%,75%,${(1 - d / LINE_R) * 0.28})`;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
      }

      // Particles  
      for (const p of pts) {
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3.5);
        g.addColorStop(0,   `hsla(${p.hue},90%,85%,${p.a})`);
        g.addColorStop(0.4, `hsla(${p.hue},80%,62%,${p.a * 0.4})`);
        g.addColorStop(1,   `hsla(${p.hue},70%,50%,0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      }

      // Cursor ripple glow
      if (mx > 0 && mx < w && my > 0 && my < h) {
        const cg = ctx.createRadialGradient(mx, my, 0, mx, my, 100);
        cg.addColorStop(0,   "rgba(99,102,241,0.18)");
        cg.addColorStop(0.6, "rgba(99,102,241,0.06)");
        cg.addColorStop(1,   "rgba(99,102,241,0)");
        ctx.beginPath(); ctx.arc(mx, my, 100, 0, Math.PI * 2);
        ctx.fillStyle = cg; ctx.fill();
        ctx.beginPath(); ctx.arc(mx, my, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(165,180,252,0.95)"; ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    }

    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("resize", spawn);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

// Skip the canvas on touch/pointer-coarse devices — no mouse = no magnetic effect,
// and the O(n²) particle physics burns mobile CPU for zero UX gain.
const SUPPORTS_FINE_POINTER =
  typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;

// ── hero ──────────────────────────────────────────────────────────────────────
export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#03070e] min-h-[65vh] flex items-center pt-14 md:pt-16">
      {SUPPORTS_FINE_POINTER && <MagneticField />}

      {/* Left-side dark fade so text is readable over the particles */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{ background: "linear-gradient(105deg, rgba(3,7,18,0.97) 0%, rgba(3,7,18,0.80) 38%, rgba(3,7,18,0.15) 65%, transparent 100%)" }}
      />

      {/* Content */}
      <div className="relative z-20 w-full px-6 sm:px-10 lg:px-14 xl:px-18 py-10">

        {/* Headline — rendered visible immediately so LCP is measured from first paint.
            Minimal CSS-driven fade replaces the JS clip animation. */}
        <div className="mb-1">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
            className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.0]"
          >
            From Invisible
          </motion.h1>
        </div>
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.0]"
            style={{ background: "linear-gradient(135deg, #a5b4fc 0%, #818cf8 45%, #c084fc 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            To Inevitable
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl"
        >
          {data.subheadline}
        </motion.p>

      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-gray-600 font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="h-4 w-px bg-gradient-to-b from-gray-600 to-transparent"
        />
      </motion.div>
    </section>
  );
}


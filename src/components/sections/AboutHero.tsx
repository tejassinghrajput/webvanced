import { motion } from "motion/react";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import aboutData from "@/mockData/about.json";

/** Drifting aurora blobs — slow, ethereal gradient orbs */
function AuroraBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -top-48 -left-48 h-[640px] w-[640px] rounded-full bg-indigo-600/20 blur-[130px]"
        animate={{ x: [0, 90, -40, 70, 0], y: [0, -70, 50, -40, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -top-20 right-0 h-[480px] w-[480px] rounded-full bg-violet-500/12 blur-[110px]"
        animate={{ x: [0, -70, 30, -50, 0], y: [0, 60, -50, 30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />
    </div>
  );
}

export function AboutHero() {
  const { badge, title, description, stats } = aboutData.hero;
  const [line1, line2] = title.split("\n");

  return (
    <section className="relative bg-[#03070e] text-white overflow-hidden min-h-[82vh] flex flex-col justify-center">
      <AuroraBlobs />

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(165,180,252,1) 1px, transparent 1px), linear-gradient(90deg, rgba(165,180,252,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl w-full px-6 pt-8 pb-16 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-indigo-400 uppercase mb-6">
            <span className="h-px w-6 bg-indigo-400/50" />
            {badge}
            <span className="h-px w-6 bg-indigo-400/50" />
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[3.6rem] font-extrabold tracking-tight leading-[1.08]">
            <span className="block text-white">{line1}</span>
            <span className="block bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              {line2}
            </span>
          </h1>
          <p className="mt-7 text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">{description}</p>
          <div className="mt-3 flex items-center justify-center gap-2 text-sm text-gray-500">
            <MapPin className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
            <span>New Delhi, India &middot; Remote-friendly worldwide</span>
          </div>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors"
            >
              Work with us <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/how-we-work" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors">
              How we work &rarr;
            </Link>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-[#03070e] px-6 py-6 text-center">
              <p className="text-3xl font-black bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                {s.value}
              </p>
              <p className="mt-1.5 text-[10px] font-bold text-gray-500 uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/** Drifting aurora blobs — slow, ethereal gradient orbs */

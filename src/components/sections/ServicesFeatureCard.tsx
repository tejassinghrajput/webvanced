import { motion } from "motion/react";
import * as Icons from "lucide-react";

interface FeatureCardProps {
  feature: any;
  index: number;
  isDark?: boolean;
}

export function ServicesFeatureCard({ feature, index, isDark }: FeatureCardProps) {
  const Icon = (Icons as any)[feature.icon] || Icons.Zap;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isDark ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col justify-between rounded-3xl p-12 shadow-sm ring-1 ${
        isDark ? "bg-[#111827] text-white ring-white/10 shadow-xl" : "bg-white text-gray-900 ring-gray-200"
      }`}
    >
      <div>
        <div className={`mb-8 inline-flex h-12 w-12 items-center justify-center rounded-xl ${
          isDark ? "bg-white/10 text-white" : "bg-indigo-50 text-indigo-600"
        }`}>
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-3xl font-bold">{feature.title}</h3>
        <p className={`mt-6 text-lg leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          {feature.description}
        </p>
      </div>
      {feature.bullets ? (
        <ul className="mt-12 space-y-4">
          {feature.bullets.map((bullet: string, idx: number) => (
            <motion.li
              key={bullet}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
              className="flex items-center gap-3 text-sm font-semibold tracking-wider text-gray-500"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              {bullet}
            </motion.li>
          ))}
        </ul>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 rounded-2xl bg-white/5 p-6 border border-white/10 flex items-center justify-between"
        >
          <div>
            <p className="text-xs font-bold tracking-widest text-white uppercase">SYSTEM PULSE</p>
            <p className="mt-2 text-xs font-mono text-gray-400 uppercase">{feature.systemPulse}</p>
          </div>
          <div className="flex gap-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-1.5 rounded-full bg-indigo-500 animate-pulse" style={{ height: `${12 + i * 4}px`, animationDelay: `${i * 150}ms` }} />
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

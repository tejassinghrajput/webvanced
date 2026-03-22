import { motion } from "motion/react";
import { Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import servicesData from "@/mockData/services.json";
import { Link } from "react-router-dom";
import { GlitterCard } from "../ui/Sparkles";

export function ServicesContinuity() {
  const { continuity } = servicesData;

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-8 lg:grid-cols-2">
        <GlitterCard>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between rounded-3xl bg-gray-50 p-12 shadow-sm ring-1 ring-gray-200 h-full"
          >
            <div>
              <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-600">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900">{continuity.title}</h3>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">{continuity.description}</p>
            </div>
            <Link to={continuity.link.href} className="mt-12 inline-flex items-center gap-2 text-sm font-bold tracking-wider text-indigo-600 uppercase hover:text-indigo-700 transition-colors">
              {continuity.link.label} <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </GlitterCard>
        <GlitterCard>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center rounded-3xl bg-gray-50 p-12 shadow-sm ring-1 ring-gray-200 h-full"
          >
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-100">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-teal-500">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">{continuity.status.label}</p>
                  <p className="text-xs text-gray-500">{continuity.status.sub}</p>
                </div>
              </div>
              <div className="mt-8">
                <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full rounded-full bg-indigo-600"
                  />
                </div>
                <div className="mt-3 flex justify-between text-xs font-bold uppercase tracking-wider">
                  <span className="text-gray-500">UPTIME PERFORMANCE</span>
                  <span className="text-gray-900">{continuity.status.uptime}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </GlitterCard>
      </div>
    </section>
  );
}

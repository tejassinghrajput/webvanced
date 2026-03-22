import { Link } from "react-router-dom";
import { motion } from "motion/react";
import data from "@/mockData/homeCTA.json";
import { DecorativeCircle } from "../ui/VisualDecorations";

export function HomeCTA() {
  return (
    <section className="bg-white py-32 relative overflow-hidden">
      <DecorativeCircle className="absolute -top-20 -right-20 h-96 w-96 text-indigo-600" />
      <div className="mx-auto w-full px-6 lg:px-12 xl:px-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative isolate overflow-hidden bg-indigo-600 px-6 py-24 text-center shadow-2xl rounded-[4rem] sm:px-16"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.500),theme(colors.indigo.900))]" />
          <h2 className="mx-auto max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-7xl leading-[1.1]">
            {data.heading}
          </h2>
          <p className="mx-auto mt-10 max-w-xl text-xl leading-8 text-indigo-100 font-medium">
            {data.body}
          </p>
          <div className="mt-14 flex items-center justify-center gap-x-10">
            <Link
              to={data.primaryButton.href}
              className="rounded-full bg-white px-10 py-5 text-lg font-bold text-indigo-600 shadow-xl hover:bg-indigo-50 hover:scale-105 transition-all"
            >
              {data.primaryButton.label}
            </Link>
            <Link
              to={data.secondaryButton.href}
              className="text-lg font-bold leading-6 text-white hover:text-indigo-200 group transition-all"
            >
              {data.secondaryButton.label} 
              <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
            </Link>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[70rem] w-[70rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#cta-grad)" fillOpacity="0.5" />
            <defs>
              <radialGradient id="cta-grad">
                <stop stopColor="#fff" />
                <stop offset={1} stopColor="#4f46e5" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

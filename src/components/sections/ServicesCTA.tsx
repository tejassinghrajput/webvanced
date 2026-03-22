import { Link } from "react-router-dom";
import { motion } from "motion/react";
import servicesData from "@/mockData/services.json";
import { Sparkles, GlitterButton } from "../ui/Sparkles";

export function ServicesCTA() {
  const { title, button } = servicesData.cta;
  
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative flex flex-col items-center justify-center overflow-hidden rounded-[2.5rem] bg-[#111827] px-6 py-32 text-center text-white shadow-2xl"
      >
        <Sparkles />
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] bg-[length:24px_24px]" />
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-5xl font-bold tracking-tight sm:text-6xl leading-[1.1]">
            {title}
          </h2>
          <div className="mt-12">
            <GlitterButton>
              <Link
                to={button.href}
                className="inline-flex rounded-md bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-700"
              >
                {button.label}
              </Link>
            </GlitterButton>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

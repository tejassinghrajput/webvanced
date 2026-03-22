import { motion } from "motion/react";
import { Info, Lock } from "lucide-react";
import quoteData from "@/mockData/quote.json";
import { QuoteFormStep } from "./QuoteFormStep";

export function QuoteForm() {
  const { steps, notice, security, submit } = quoteData.form;

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="rounded-2xl bg-white p-10 shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_8px_48px_rgba(0,0,0,0.08)]">
        <form className="space-y-14" onSubmit={(e) => e.preventDefault()}>
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
            >
              {idx > 0 && <div className="mb-10 border-t border-gray-100" />}
              <QuoteFormStep step={step} />
            </motion.div>
          ))}
          <div className="rounded-xl bg-teal-50 p-5 flex gap-4 text-teal-800">
            <Info className="h-5 w-5 shrink-0 mt-0.5" />
            <p className="text-sm leading-relaxed">{notice}</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-2 border-t border-gray-100">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Lock className="h-4 w-4 shrink-0" />
              <span>{security}</span>
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto rounded-md bg-indigo-600 hover:bg-indigo-700 px-10 py-2.5 text-sm font-semibold text-white transition-colors"
            >
              {submit}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
import { motion } from "motion/react";
import { Info, Lock } from "lucide-react";
import quoteData from "@/mockData/quote.json";
import { QuoteFormStep } from "./QuoteFormStep";

export function QuoteForm() {
  const { steps, notice, security, submit } = quoteData.form;

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl bg-white p-12 shadow-xl ring-1 ring-gray-100"
      >
        <form className="space-y-16" onSubmit={(e) => e.preventDefault()}>
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
            >
              <QuoteFormStep step={step} />
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="rounded-2xl bg-teal-50 p-6 flex gap-4 text-teal-800"
          >
            <Info className="h-6 w-6 shrink-0" />
            <p className="text-sm leading-relaxed">{notice}</p>
          </motion.div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Lock className="h-4 w-4" />
              <span>{security}</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full sm:w-auto rounded-md bg-[#111827] px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 transition-colors"
            >
              {submit}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}

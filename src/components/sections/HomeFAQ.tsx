import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import data from "@/mockData/homeFAQ.json";

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="faq" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold text-indigo-600 tracking-wide uppercase">{data.sectionLabel}</h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">{data.heading}</p>
        </motion.div>
        <div className="mx-auto mt-16 grid grid-cols-1 gap-4">
          {data.faqs.map((faq, idx) => (
            <div key={faq.question} className="rounded-3xl bg-gray-50 border border-gray-100 overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className="w-full p-8 flex items-center justify-between text-left">
                <span className="text-xl font-bold text-gray-900">{faq.question}</span>
                <ChevronDown className={`w-6 h-6 text-gray-500 transition-transform ${openIndex === idx ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.dd initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="px-8 pb-8 text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </motion.dd>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

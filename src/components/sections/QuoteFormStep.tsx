import React from "react";
import { motion } from "motion/react";
import * as Icons from "lucide-react";

export function QuoteFormStep({ step }: { step: any; key?: React.Key }) {
  return (
    <div>
      <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111827] text-xs font-bold text-white">{step.id}</span>
        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
      </div>
      {step.fields && (
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {step.fields.map((field: any) => (
            <div key={field.id} className={field.type === "textarea" ? "sm:col-span-2" : ""}>
              <label htmlFor={field.id} className="block text-xs font-bold tracking-widest text-gray-500 uppercase">{field.label}</label>
              {field.type === "textarea" ? (
                <textarea id={field.id} rows={4} placeholder={field.placeholder} className="mt-2 block w-full rounded-xl border-0 bg-gray-50 py-4 px-5 text-gray-900 ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none transition-all" />
              ) : (
                <input type={field.type} id={field.id} placeholder={field.placeholder} className="mt-2 block w-full rounded-xl border-0 bg-gray-50 py-4 px-5 text-gray-900 ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all" />
              )}
            </div>
          ))}
        </div>
      )}
      {step.options && (
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {step.options.map((opt: any, idx: number) => {
            const Icon = (Icons as any)[opt.icon] || Icons.Code;
            return (
              <motion.label
                key={opt.id}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(243, 244, 246, 1)" }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative flex cursor-pointer rounded-2xl border border-gray-200 bg-gray-50 p-6 focus-within:ring-2 focus-within:ring-indigo-600 transition-colors"
              >
                <input type="radio" name="specialty" value={opt.id} className="sr-only" />
                <div className="flex flex-col gap-4">
                  <Icon className="h-6 w-6 text-indigo-600" />
                  <span className="text-sm font-bold text-gray-900">{opt.label}</span>
                </div>
              </motion.label>
            );
          })}
        </div>
      )}
    </div>
  );
}

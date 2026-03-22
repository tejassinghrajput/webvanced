import React from "react";
import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { LabelInputContainer, FormInput, FormTextarea } from "@/components/ui/FormInput";

export function QuoteFormStep({ step }: { step: any; key?: React.Key }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">
          {step.id}
        </span>
        <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
      </div>
      {step.fields && (
        <div className="grid gap-5 sm:grid-cols-2">
          {step.fields.map((field: any) => (
            <LabelInputContainer key={field.id} className={field.type === "textarea" ? "sm:col-span-2" : ""}>
              <label htmlFor={field.id} className="text-sm font-medium text-neutral-700">{field.label}</label>
              {field.type === "textarea"
                ? <FormTextarea id={field.id} rows={5} placeholder={field.placeholder} />
                : <FormInput id={field.id} type={field.type} placeholder={field.placeholder} />}
            </LabelInputContainer>
          ))}
        </div>
      )}
      {step.options && (
        <div className="grid gap-4 sm:grid-cols-3">
          {step.options.map((opt: any, idx: number) => {
            const Icon = (Icons as any)[opt.icon] || Icons.Code;
            return (
              <motion.label
                key={opt.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="relative flex cursor-pointer rounded-xl border border-gray-200 bg-gray-50 p-5 hover:bg-indigo-50 hover:border-indigo-200 focus-within:ring-2 focus-within:ring-indigo-500 transition-colors"
              >
                <input type="radio" name="specialty" value={opt.id} className="sr-only" />
                <div className="flex flex-col gap-3">
                  <Icon className="h-5 w-5 text-indigo-600" />
                  <span className="text-sm font-semibold text-gray-900">{opt.label}</span>
                </div>
              </motion.label>
            );
          })}
        </div>
      )}
    </div>
  );
}
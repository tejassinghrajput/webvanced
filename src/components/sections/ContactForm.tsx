import { motion } from "motion/react";
import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import contactData from "@/mockData/contact.json";
import {
  LabelInputContainer,
  FormInput,
  FormTextarea,
  FormSelect,
} from "@/components/ui/FormInput";

export function ContactForm() {
  const { title, fields, security, submit } = contactData.form;
  const [serviceValue, setServiceValue] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.15 }}
      className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm h-full flex flex-col"
    >
      <h2 className="text-lg font-bold text-neutral-800">{title}</h2>
      <p className="mt-1 mb-5 text-xs text-gray-400">All fields required. We’ll never share your data.</p>

      <form className="flex flex-col gap-4 flex-1" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-4 sm:flex-row">
          {fields.slice(0, 2).map((f) => (
            <LabelInputContainer key={f.id}>
              <label htmlFor={f.id} className="text-xs font-semibold text-neutral-600">{f.label}</label>
              <FormInput id={f.id} type={f.type} placeholder={f.placeholder} />
            </LabelInputContainer>
          ))}
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <LabelInputContainer>
            <label htmlFor={fields[2].id} className="text-xs font-semibold text-neutral-600">{fields[2].label}</label>
            <FormInput id={fields[2].id} type={fields[2].type} placeholder={fields[2].placeholder} />
          </LabelInputContainer>
          <LabelInputContainer>
            <label htmlFor={fields[3].id} className="text-xs font-semibold text-neutral-600">{fields[3].label}</label>
            <FormSelect
              id={fields[3].id}
              options={fields[3].options ?? []}
              value={serviceValue}
              onValueChange={setServiceValue}
              placeholder="Select a service…"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="flex-1">
          <label htmlFor={fields[4].id} className="text-xs font-semibold text-neutral-600">{fields[4].label}</label>
          <FormTextarea id={fields[4].id} rows={6} placeholder={fields[4].placeholder} className="h-full" />
        </LabelInputContainer>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1 mt-auto">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <ShieldCheck className="h-3.5 w-3.5 text-teal-500 shrink-0" />
            <span>{security}</span>
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto rounded-md bg-indigo-600 hover:bg-indigo-700 px-8 py-2.5 text-sm font-semibold text-white transition-colors"
          >
            {submit}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
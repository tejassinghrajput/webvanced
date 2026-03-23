import { motion } from "motion/react";
import { Compass, Cloud, Code } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LabelInputContainer, FormInput, FormTextarea } from "@/components/ui/FormInput";

const STEP_OPTION_ICONS: Record<string, LucideIcon> = {
  Compass, Cloud, Code,
};

interface StepField { id: string; label: string; placeholder: string; type: string }
interface StepOption { id: string; icon: string; label: string }
interface Step { id: string; title: string; fields?: StepField[]; options?: StepOption[] }

interface Props {
  step: Step;
  values: Record<string, string>;
  selectedServices: string[];
  onChange: (id: string, val: string) => void;
  onServiceToggle: (id: string) => void;
}

export function QuoteFormStep({ step, values, selectedServices, onChange, onServiceToggle }: Props) {
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
          {step.fields.map((field) => (
            <LabelInputContainer key={field.id} className={field.type === "textarea" ? "sm:col-span-2" : ""}>
              <label htmlFor={field.id} className="text-sm font-medium text-neutral-700">{field.label}</label>
              {field.type === "textarea"
                ? <FormTextarea id={field.id} rows={5} placeholder={field.placeholder}
                    value={values[field.id] ?? ""} onChange={(e) => onChange(field.id, e.target.value)} />
                : <FormInput id={field.id} type={field.type} placeholder={field.placeholder}
                    value={values[field.id] ?? ""} onChange={(e) => onChange(field.id, e.target.value)} />}
            </LabelInputContainer>
          ))}
        </div>
      )}

      {step.options && (
        <div className="grid gap-4 sm:grid-cols-3">
          {step.options.map((opt, idx) => {
            const Icon = STEP_OPTION_ICONS[opt.icon] ?? Code;
            const checked = selectedServices.includes(opt.id);
            return (
              <motion.label key={opt.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.3, delay: idx * 0.08 }}
                className={`relative flex cursor-pointer rounded-xl border p-5 transition-colors ${
                  checked ? "bg-indigo-50 border-indigo-400" : "bg-gray-50 border-gray-200 hover:bg-indigo-50 hover:border-indigo-200"
                }`}
              >
                <input type="checkbox" className="sr-only" checked={checked}
                  onChange={() => onServiceToggle(opt.id)} />
                <div className="flex flex-col gap-3">
                  <Icon className={`h-5 w-5 ${checked ? "text-indigo-600" : "text-gray-400"}`} />
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

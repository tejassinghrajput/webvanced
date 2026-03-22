import { motion } from "motion/react";
import { useState } from "react";
import { Info, Lock, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import quoteData from "@/mockData/quote.json";
import { QuoteFormStep } from "./QuoteFormStep";
import { submitQuoteLead } from "@/lib/leadService";

export function QuoteForm() {
  const { steps, notice, security, submit } = quoteData.form;
  const [values, setValues] = useState<Record<string, string>>({});
  const [services, setServices] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (id: string, val: string) =>
    setValues((prev) => ({ ...prev, [id]: val }));

  const handleServiceToggle = (id: string) =>
    setServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!values.legalName || !values.domain || services.length === 0 || !values.objectives) {
      setStatus("error");
      setMessage("Please fill in all fields and select at least one service.");
      return;
    }
    setStatus("loading");
    const res = await submitQuoteLead({
      legalName: values.legalName,
      domain: values.domain,
      services,
      objectives: values.objectives,
    });
    setStatus(res.success ? "success" : "error");
    setMessage(res.message);
    if (res.success) { setValues({}); setServices([]); }
  };

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="rounded-2xl bg-white p-10 shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_8px_48px_rgba(0,0,0,0.08)]">
        <form className="space-y-14" onSubmit={handleSubmit}>
          {steps.map((step, idx) => (
            <motion.div key={step.id} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}>
              {idx > 0 && <div className="mb-10 border-t border-gray-100" />}
              <QuoteFormStep step={step} values={values} selectedServices={services}
                onChange={handleChange} onServiceToggle={handleServiceToggle} />
            </motion.div>
          ))}

          <div className="rounded-xl bg-teal-50 p-5 flex gap-4 text-teal-800">
            <Info className="h-5 w-5 shrink-0 mt-0.5" />
            <p className="text-sm leading-relaxed">{notice}</p>
          </div>

          {status === "success" && (
            <div className="flex items-center gap-2 rounded-lg bg-teal-50 px-4 py-3 text-sm text-teal-700">
              <CheckCircle2 className="h-4 w-4 shrink-0" />{message}
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
              <AlertCircle className="h-4 w-4 shrink-0" />{message}
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-2 border-t border-gray-100">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Lock className="h-4 w-4 shrink-0" /><span>{security}</span>
            </div>
            <button type="submit" disabled={status === "loading"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 px-10 py-2.5 text-sm font-semibold text-white transition-colors">
              {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
              {status === "loading" ? "Submitting..." : submit}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

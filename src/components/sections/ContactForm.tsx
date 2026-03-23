import { motion } from "motion/react";
import { useState } from "react";
import { ShieldCheck, Loader2, AlertCircle } from "lucide-react";
import contactData from "@/mockData/contact.json";
import { LabelInputContainer, FormInput, FormTextarea, FormSelect } from "@/components/ui/FormInput";
import { submitContactLead } from "@/lib/leadService";
import type { ContactLeadPayload } from "@/types/lead";
import { AnimatedCheckmark } from "@/components/ui/AnimatedCheckmark";

const EMPTY: ContactLeadPayload = { name: "", email: "", company: "", category: "", brief: "" };

export function ContactForm() {
  const { title, fields, security, submit } = contactData.form;
  const [form, setForm] = useState<ContactLeadPayload>(EMPTY);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const set = (key: keyof ContactLeadPayload) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.company || !form.category || !form.brief) {
      setStatus("error"); setMessage("Please fill in all fields."); return;
    }
    setStatus("loading");
    const res = await submitContactLead(form);
    setStatus(res.success ? "success" : "error");
    setMessage(res.message);
    if (res.success) setForm(EMPTY);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.15 }}
      className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm h-full flex flex-col relative"
    >
      {status === "success" ? (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center py-16 flex-1">
          <div className="mb-6">
            <AnimatedCheckmark className="w-28 h-28" />
          </div>
          <h3 className="text-2xl font-extrabold text-neutral-900 mb-3">Message Received!</h3>
          <p className="text-base text-neutral-600 max-w-sm mx-auto">
            {message || "We will get back to you within 24 hours."}
          </p>
        </motion.div>
      ) : (
        <>
          <h2 className="text-lg font-bold text-neutral-800">{title}</h2>
          <p className="mt-1 mb-5 text-xs text-gray-400">All fields required. We'll never share your data.</p>
          <form className="flex flex-col gap-4 flex-1" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <LabelInputContainer>
                <label htmlFor="name" className="text-xs font-semibold text-neutral-600">{fields[0].label}</label>
                <FormInput id="name" type="text" placeholder={fields[0].placeholder} value={form.name} onChange={set("name")} />
              </LabelInputContainer>
              <LabelInputContainer>
                <label htmlFor="email" className="text-xs font-semibold text-neutral-600">{fields[1].label}</label>
                <FormInput id="email" type="email" placeholder={fields[1].placeholder} value={form.email} onChange={set("email")} />
              </LabelInputContainer>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <LabelInputContainer>
                <label htmlFor="company" className="text-xs font-semibold text-neutral-600">{fields[2].label}</label>
                <FormInput id="company" type="text" placeholder={fields[2].placeholder} value={form.company} onChange={set("company")} />
              </LabelInputContainer>
              <LabelInputContainer>
                <label htmlFor="category" className="text-xs font-semibold text-neutral-600">{fields[3].label}</label>
                <FormSelect id="category" options={fields[3].options ?? []} value={form.category}
                  onValueChange={(v) => setForm((p) => ({ ...p, category: v }))} placeholder="Select a service" />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="flex-1">
              <label htmlFor="brief" className="text-xs font-semibold text-neutral-600">{fields[4].label}</label>
              <FormTextarea id="brief" rows={6} placeholder={fields[4].placeholder} value={form.brief} onChange={set("brief")} className="h-full" />
            </LabelInputContainer>
            {status === "error" && (
              <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                <AlertCircle className="h-4 w-4 shrink-0" />{message}
              </div>
            )}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1 mt-auto">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <ShieldCheck className="h-3.5 w-3.5 text-teal-500 shrink-0" /><span>{security}</span>
              </div>
              <button type="submit" disabled={status === "loading"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 px-8 py-2.5 text-sm font-semibold text-white transition-colors">
                {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
                {status === "loading" ? "Sending..." : submit}
              </button>
            </div>
          </form>
        </>
      )}
    </motion.div>
  );
}

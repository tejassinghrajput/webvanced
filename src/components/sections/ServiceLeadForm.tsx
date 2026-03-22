import { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2, AlertCircle, Loader2, Zap, Lock, Target, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

interface FieldProps {
  id: keyof FormState;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

function Field({ id, label, type, placeholder, value, onChange, error, required }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={cn(
          "block w-full rounded-xl border bg-gray-50 py-3.5 px-4 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all",
          error ? "border-red-300 bg-red-50 focus:ring-red-400" : "border-gray-200"
        )}
      />
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}

function validate(state: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!state.name.trim()) errors.name = "Full name is required.";
  if (!state.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!state.message.trim()) errors.message = "Tell us about your project.";
  return errors;
}

const TRUST_POINTS = [
  { icon: Zap, label: "24-hour response guaranteed" },
  { icon: Lock, label: "100% confidential consultation" },
  { icon: Target, label: "Tailored to your specific needs" },
  { icon: BadgeCheck, label: "No commitment required" },
] as const;

interface ServiceLeadFormProps {
  /** Service name pre-filled into the service field (e.g. "SEO SERVICES"). */
  serviceName: string;
}

/** Full lead generation section: trust copy on left, controlled form on right. */
export function ServiceLeadFormSection({ serviceName }: ServiceLeadFormProps) {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", company: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name in errors) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setStatus("loading");
    try {
      // TODO: Replace with POST /api/leads when backend is available.
      await new Promise<void>((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-gray-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: trust copy */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Free Consultation</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-950 mb-5">
              Let's Talk About Your Project
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10">
              Fill in the form and our specialists will come back to you within 24 hours with a tailored plan.
              No fluff. Just data-driven strategy built for your goals.
            </p>
            <ul className="space-y-5">
              {TRUST_POINTS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-100 shrink-0">
                    <Icon className="h-4 w-4 text-indigo-600" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/40"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-5">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-extrabold text-gray-950 mb-3">Message Received!</h3>
                <p className="text-sm text-gray-500 max-w-xs">
                  Thanks for reaching out about{" "}
                  <span className="font-semibold text-indigo-600">{serviceName}</span>. Our team will be
                  in touch within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-extrabold text-gray-950 mb-6">Get a Free Consultation</h3>
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field id="name" label="Full Name *" type="text" placeholder="Jane Smith" value={form.name} onChange={handleChange} error={errors.name} required />
                    <Field id="email" label="Business Email *" type="email" placeholder="jane@company.com" value={form.email} onChange={handleChange} error={errors.email} required />
                    <Field id="phone" label="Phone" type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={handleChange} />
                    <Field id="company" label="Company" type="text" placeholder="Acme Inc." value={form.company} onChange={handleChange} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Service of Interest</label>
                    <div className="block w-full rounded-xl border border-indigo-100 bg-indigo-50 py-3.5 px-4 text-sm font-semibold text-indigo-600">
                      {serviceName}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                      How Can We Help? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project, goals, and timeline..."
                      value={form.message}
                      onChange={handleChange}
                      className={cn(
                        "block w-full rounded-xl border bg-gray-50 py-3.5 px-4 text-sm text-gray-900 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all",
                        errors.message ? "border-red-300 bg-red-50" : "border-gray-200"
                      )}
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
                  </div>
                  {status === "error" && (
                    <div className="flex items-center gap-2 rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-700">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}
                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                    whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 py-4 text-sm font-bold text-white uppercase tracking-widest hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-200"
                  >
                    {status === "loading"
                      ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
                      : <><Send className="h-4 w-4" /> Send Message</>}
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

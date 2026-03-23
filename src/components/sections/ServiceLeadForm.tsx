import { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2, AlertCircle, Loader2, Zap, Lock, Target, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { submitContactLead } from "@/lib/leadService";
import { AnimatedCheckmark } from "@/components/ui/AnimatedCheckmark";

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
  const autoComplete = id === "name" ? "name" : id === "email" ? "email" : id === "phone" ? "tel" : id === "company" ? "organization" : "on";

  return (
    <div className="relative z-0 w-full group">
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        placeholder=" "
        className={cn(
          "block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-white peer",
          "[&:-webkit-autofill]:bg-transparent [&:-webkit-autofill]:[-webkit-text-fill-color:white] [&:-webkit-autofill]:[transition:background-color_5000s_ease-in-out_0s]",
          error ? "border-red-400 focus:border-red-400" : ""
        )}
      />
      <label 
        htmlFor={id} 
        className="peer-focus:font-medium absolute text-sm text-white/60 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 tracking-wide uppercase"
      >
        {placeholder}
      </label>
      {error && <p className="mt-1 text-[11px] text-red-400 absolute">{error}</p>}
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
  themeColorClass?: string;
}

export function ServiceLeadFormCard({ serviceName, themeColorClass }: ServiceLeadFormProps) {
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
    const res = await submitContactLead({
      name: form.name,
      email: form.email,
      phone: form.phone || undefined,
      company: form.company,
      category: serviceName,
      brief: form.message,
    });
    setStatus(res.success ? "success" : "error");
  }

  return (
    <div className="bg-black/25 backdrop-blur-2xl rounded-3xl p-5 md:p-6 lg:p-7 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden ring-1 ring-white/5">
      {/* Glossy inner glow */}
      <div className="absolute inset-0 top-0 left-0 w-full h-[150px] opacity-[0.06]" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, transparent 100%)' }} />
      <div className="relative z-10">
      {status === "success" ? (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center py-8">
          <div className="mb-5">
            <AnimatedCheckmark className="w-24 h-24" colorClass={themeColorClass || "text-green-500"} />
          </div>
          <h3 className="text-2xl font-extrabold text-white mb-2">Message Received!</h3>
          <p className="text-sm text-white/80 max-w-xs mx-auto">
            Our team will be in touch within 24 hours regarding your {serviceName.toLowerCase()} needs.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 mt-1">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
            <Field id="name" label="Name" type="text" placeholder="Name *" value={form.name} onChange={handleChange} error={errors.name} required />
            <Field id="email" label="Business Email" type="email" placeholder="Business Email *" value={form.email} onChange={handleChange} error={errors.email} required />
            <Field id="phone" label="Contact No." type="tel" placeholder="Contact No." value={form.phone} onChange={handleChange} />
            <Field id="company" label="Company Name" type="text" placeholder="Company Name" value={form.company} onChange={handleChange} />
          </div>
          
          <div className="relative z-0 w-full group mt-1">
            <input
              id="serviceName"
              type="text"
              value={serviceName.toUpperCase()}
              disabled
              placeholder=" "
              className="block py-2 px-0 w-full text-sm font-semibold text-white/80 bg-transparent border-0 border-b-2 border-white/20 appearance-none focus:outline-none focus:ring-0 cursor-not-allowed peer"
            />
            <label htmlFor="serviceName" className="absolute text-[10px] sm:text-xs text-white/50 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] tracking-widest uppercase font-bold">
              Service of Interest
            </label>
          </div>

          <div className="relative z-0 w-full group mt-1">
            <textarea
              id="message"
              name="message"
              rows={1}
              value={form.message}
              onChange={handleChange}
              placeholder=" "
              className={cn(
                "block py-2 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-white peer resize-none overflow-hidden",
                "[&:-webkit-autofill]:bg-transparent [&:-webkit-autofill]:[-webkit-text-fill-color:white] [&:-webkit-autofill]:[transition:background-color_5000s_ease-in-out_0s]",
                errors.message ? "border-red-400 focus:border-red-400" : ""
              )}
            />
            <label 
              htmlFor="message" 
              className="peer-focus:font-medium absolute text-sm text-white/60 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 tracking-wide uppercase"
            >
              How Can We Help? *
            </label>
            {errors.message && <p className="mt-1 text-[11px] text-red-400 absolute">{errors.message}</p>}
          </div>

          {status === "error" && (
            <div className="flex items-center gap-2 rounded-lg bg-red-500/10 p-3 text-sm text-red-400 border border-red-500/20 mt-2">
              <AlertCircle className="h-4 w-4 shrink-0" />
              Something went wrong. Please try again.
            </div>
          )}

          <div className="pt-2 relative">
            <p className="text-[11px] text-white/50 mb-3 font-medium text-center">Let's craft our relationship over freshly brewed Coffee!</p>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white text-gray-950 px-8 py-3 text-sm font-bold tracking-wide hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>SUBMIT</>
              )}
            </button>
          </div>
        </form>
      )}
      </div>
    </div>
  );
}

/** Full lead generation section: trust copy on left, controlled form on right. */
export function ServiceLeadFormSection({ serviceName }: ServiceLeadFormProps) {
  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-100" id="lead-form">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Trust copy */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">Free Consultation</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-950 mb-4">
              Let's Talk About Your Project
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mb-8">
              Get a tailored <span className="font-semibold text-gray-900">{serviceName}</span> strategy within 24 hours. No fluff. Just a data-driven plan built for your goals.
            </p>
            <ul className="space-y-4">
              {TRUST_POINTS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 shrink-0">
                    <Icon className="h-4 w-4 text-indigo-600" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ServiceLeadFormCard serviceName={serviceName} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

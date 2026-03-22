import { motion } from "motion/react";
import { Clock, CheckCircle2, Phone } from "lucide-react";
import { CONTACT } from "@/lib/contact";

type DetailItem = { logo: string | null; alt: string; label: string; value: string; href: string | null; icon?: string };

const DETAILS: DetailItem[] = [
  {
    logo: "https://cdn.simpleicons.org/gmail/EA4335",
    alt: "Gmail",
    label: "Email",
    value: CONTACT.email.display,
    href: CONTACT.email.href,
  },
  {
    logo: "https://cdn.simpleicons.org/whatsapp/25D366",
    alt: "WhatsApp",
    label: "WhatsApp",
    value: CONTACT.whatsapp.display,
    href: CONTACT.whatsapp.href,
  },
  {
    logo: null,
    alt: "Phone",
    label: "Phone",
    value: CONTACT.phone.display,
    href: CONTACT.phone.href,
    icon: "phone",
  },
  {
    logo: "https://cdn.simpleicons.org/googlemaps/4285F4",
    alt: "Google Maps",
    label: "Location",
    value: CONTACT.location.short,
    href: CONTACT.location.mapsHref,
  },
];

const STEPS = [
  { n: "01", title: "Send your brief",       body: "Fill the form with your project goals, timeline, and any specific requirements." },
  { n: "02", title: "We review & respond",    body: "Our team reviews your submission and comes back with a personalised response within 24 hours." },
  { n: "03", title: "Kick-off consultation",  body: "We schedule a focused call to align on scope, approach, and next steps." },
];

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">

      {/* Page header */}
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <p className="text-xs font-bold tracking-widest text-indigo-600 uppercase mb-2">Contact Us</p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
          Let's build something<br />
          <span className="text-indigo-600">great together</span>
        </h1>
        <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-sm">
          Tell us about your project and we'll put together a tailored plan — no fluff, no obligation.
        </p>
      </motion.div>

      {/* Contact details */}
      <motion.div
        initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}
        className="grid grid-cols-2 gap-px rounded-2xl border border-gray-200 bg-gray-200 overflow-hidden shadow-sm"
      >
        {DETAILS.map((d) => (
          <div key={d.label} className="flex items-center gap-3 bg-white px-5 py-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-50 border border-gray-100">
              {d.logo
                ? <img src={d.logo} alt={d.alt} className="h-4 w-4 object-contain" />
                : d.icon === "phone"
                  ? <Phone className="h-4 w-4 text-gray-400" />
                  : <Clock className="h-4 w-4 text-gray-400" />}
            </div>
            <div className="min-w-0">
              {d.href ? (
                <a href={d.href} className="text-xs font-semibold text-gray-800 hover:text-indigo-600 transition-colors truncate block">{d.value}</a>
              ) : (
                <p className="text-xs font-semibold text-gray-800 truncate">{d.value}</p>
              )}
            </div>
          </div>
        ))}
      </motion.div>

      {/* What happens next */}
      <motion.div
        initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}
        className="rounded-2xl border border-gray-200 bg-white p-6"
      >
        <div className="flex items-center gap-2 mb-5">
          <CheckCircle2 className="h-4 w-4 text-indigo-500" />
          <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">What happens next</p>
        </div>
        <div className="flex flex-col gap-5">
          {STEPS.map((s, i) => (
            <div key={s.n} className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white">{s.n}</span>
                {i < STEPS.length - 1 && <div className="mt-1.5 w-px flex-1 bg-indigo-100" />}
              </div>
              <div className="pb-4">
                <p className="text-sm font-semibold text-gray-900">{s.title}</p>
                <p className="mt-0.5 text-xs text-gray-500 leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}

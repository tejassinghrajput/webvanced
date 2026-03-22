import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import contactData from "@/mockData/contact.json";

export function ContactLocation() {
  const { title, description, status } = contactData.location;

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row items-center justify-between gap-8 rounded-3xl bg-gray-50 p-12 shadow-sm ring-1 ring-gray-200"
      >
        <div className="flex items-center gap-6">
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-indigo-600 shadow-sm ring-1 ring-gray-200"
          >
            <MapPin className="h-8 w-8" />
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-4 rounded-full bg-white px-6 py-3 shadow-sm ring-1 ring-gray-200"
        >
          <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">{status.tz}</span>
          <div className="h-4 w-px bg-gray-200" />
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">{status.label}</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

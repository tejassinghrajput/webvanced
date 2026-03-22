import { motion } from "motion/react";
import { ShieldCheck, Send } from "lucide-react";
import contactData from "@/mockData/contact.json";

export function ContactForm() {
  const { title, fields, security, submit } = contactData.form;

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="rounded-3xl bg-white p-12 shadow-xl ring-1 ring-gray-100"
    >
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      <form className="mt-12 space-y-8" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-8 sm:grid-cols-2">
          {fields.slice(0, 2).map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className="block text-xs font-bold tracking-widest text-gray-500 uppercase">{field.label}</label>
              <input type={field.type} id={field.id} placeholder={field.placeholder} className="mt-2 block w-full rounded-xl border-0 bg-gray-50 py-4 px-5 text-gray-900 ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all" />
            </div>
          ))}
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {fields.slice(2, 4).map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className="block text-xs font-bold tracking-widest text-gray-500 uppercase">{field.label}</label>
              {field.type === "select" ? (
                <select id={field.id} className="mt-2 block w-full rounded-xl border-0 bg-gray-50 py-4 px-5 text-gray-900 ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 appearance-none transition-all">
                  {field.options?.map((opt) => <option key={opt}>{opt}</option>)}
                </select>
              ) : (
                <input type={field.type} id={field.id} placeholder={field.placeholder} className="mt-2 block w-full rounded-xl border-0 bg-gray-50 py-4 px-5 text-gray-900 ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all" />
              )}
            </div>
          ))}
        </div>
        <div>
          <label htmlFor={fields[4].id} className="block text-xs font-bold tracking-widest text-gray-500 uppercase">{fields[4].label}</label>
          <textarea id={fields[4].id} rows={6} placeholder={fields[4].placeholder} className="mt-2 block w-full rounded-xl border-0 bg-gray-50 py-4 px-5 text-gray-900 ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none transition-all" />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <ShieldCheck className="h-5 w-5 text-teal-500" />
            <span>{security}</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition-colors"
          >
            {submit} <Send className="h-4 w-4" />
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}

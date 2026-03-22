import { motion } from "motion/react";
import * as Icons from "lucide-react";
import contactData from "@/mockData/contact.json";

export function ContactInfo() {
  const { guarantee, channels, image } = contactData.info;

  return (
    <div className="flex flex-col gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl bg-[#111827] p-10 text-white shadow-xl relative overflow-hidden"
      >
        <Icons.Clock className="absolute -right-8 -top-8 h-48 w-48 text-white/5" />
        <h3 className="text-2xl font-bold relative z-10">{guarantee.title}</h3>
        <p className="mt-4 text-gray-400 leading-relaxed relative z-10">
          {guarantee.description.split("24 hours")[0]}
          <span className="text-teal-400 font-bold">24 hours</span>.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="rounded-3xl bg-gray-50 p-10 shadow-sm ring-1 ring-gray-200"
      >
        <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-8">{channels.badge}</p>
        <div className="space-y-6">
          {channels.items.map((item, idx) => {
            const Icon = (Icons as any)[item.icon] || Icons.Mail;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500">{item.label}</p>
                  <p className="font-bold text-gray-900">{item.value}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100 shadow-sm ring-1 ring-gray-200"
      >
        <img src={image} alt="Office" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
      </motion.div>
    </div>
  );
}

import { motion } from "motion/react";
import data from "@/mockData/homeLogos.json";

export function HomeLogos() {
  return (
    <section className="bg-gray-50 py-12 border-y border-gray-100">
      <div className="mx-auto w-full px-6 lg:px-12 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] text-indigo-600 uppercase">{data.sectionLabel}</h2>
        </motion.div>
        <div className="mx-auto grid w-full grid-cols-4 items-center gap-x-12 gap-y-12 sm:grid-cols-6 lg:grid-cols-5">
          {data.logos.map((logo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex justify-center"
            >
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer hover:scale-110"
                src={logo}
                alt="Client Logo"
                width={158}
                height={48}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import data from "@/mockData/homeTestimonials.json";

export function HomeTestimonials() {
  return (
    <section className="bg-white py-32 overflow-hidden">
      <div className="mx-auto w-full px-6 lg:px-12 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-600 uppercase tracking-widest">{data.sectionLabel}</h2>
          <p className="mt-4 text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            {data.heading}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {data.testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="relative p-12 rounded-[3rem] bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="absolute top-10 right-10 text-8xl font-serif text-indigo-600/10 group-hover:text-indigo-600/20 transition-colors duration-500">
                "
              </div>
              <blockquote className="relative z-10">
                <p className="text-2xl font-medium leading-relaxed text-gray-900 italic">
                  {testimonial.quote}
                </p>
              </blockquote>
              <div className="mt-12 flex items-center gap-6">
                <div className="h-14 w-14 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-indigo-600 font-medium">{testimonial.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

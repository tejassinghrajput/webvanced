import { motion } from "motion/react";
import data from "@/mockData/homeTeam.json";

export function HomeTeam() {
  return (
    <section className="bg-[#fafafa] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-600">{data.sectionLabel}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {data.heading}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {data.subtext}
          </p>
        </motion.div>
        <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {data.members.map((person, idx) => (
            <motion.li
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-sm leading-6 text-indigo-600">{person.title}</p>
              <p className="mt-4 text-sm leading-6 text-gray-600">{person.bio}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import servicesData from "@/mockData/services.json";
import { motion } from "motion/react";
import {
  SiReact, SiTypescript, SiTailwindcss, SiNextdotjs,
  SiOpenai, SiAnthropic, SiGoogle, SiHuggingface,
  SiZapier, SiMake, SiPython, SiN8N,
  SiStripe, SiPaypal, SiSquare, SiRazorpay,
  SiShopify, SiWoocommerce, SiBigcommerce,
  SiGooglemaps, SiMapbox, SiLeaflet, SiOpenstreetmap,
  SiCalendly, SiGooglecalendar, SiZoom,
} from "react-icons/si";
import type React from "react";

type SvgIcon = React.ComponentType<{ className?: string; style?: React.CSSProperties }>;

const SI_ICONS: Record<string, SvgIcon> = {
  SiReact, SiTypescript, SiTailwindcss, SiNextdotjs,
  SiOpenai, SiAnthropic, SiGoogle, SiHuggingface,
  SiZapier, SiMake, SiPython,
  // SiN8n is exported as SiN8N in react-icons/si
  SiN8n: SiN8N,
  SiStripe, SiPaypal, SiSquare, SiRazorpay,
  SiShopify, SiWoocommerce, SiBigcommerce,
  SiGooglemaps, SiMapbox, SiLeaflet, SiOpenstreetmap,
  SiCalendly, SiGooglecalendar, SiZoom,
};

export function ServicesFeatures() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.services.map((service: any, index: number) => {
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-[2rem] bg-gray-50 p-8 border border-gray-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="mb-6 flex flex-wrap gap-3">
                  {service.icons.map((iconObj: { name: string, color: string }) => {
                    const Icon = SI_ICONS[iconObj.name];
                    return Icon ? (
                      <div key={iconObj.name} className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6" style={{ color: iconObj.color }} />
                      </div>
                    ) : null;
                  })}
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight text-gray-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-600">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

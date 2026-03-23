import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, BarChart, Search, MousePointerClick, PenTool, Share2, Layers, MapPin, Code2, Smartphone, Laptop, ShieldCheck, Database, Boxes } from "lucide-react";
import React from "react";

const ICON_MAP: Record<string, React.FC<any>> = {
  "Digital Marketing Overview": BarChart,
  "SEO": Search,
  "Pay-Per-Click (PPC)": MousePointerClick,
  "Content Writing": PenTool,
  "Social Media Management": Share2,
  "Graphic Designing": Layers,
  "Local Search Optimization": MapPin,
  "IT Outsourcing Overview": Code2,
  "Mobile App Development": Smartphone,
  "Web Development": Laptop,
  "Testing Services": ShieldCheck,
  "Data Services": Database,
  "ERP Solutions": Boxes,
};

const SERVICES_DIRECTORY = [
  {
    category: "Digital Marketing",
    items: [
      { label: "Digital Marketing", href: "/services/digital-marketing", description: "Full-spectrum digital marketing for your brand" },
      { label: "SEO", href: "/services/seo", description: "Rank higher and drive organic traffic" },
      { label: "Pay-Per-Click (PPC)", href: "/services/ppc", description: "Targeted ads with measurable ROI" },
      { label: "Content Writing", href: "/services/content-writing", description: "Content that converts and builds authority" },
      { label: "Social Media Management", href: "/services/social-media", description: "Grow your audience across all platforms" },
      { label: "Graphic Designing", href: "/services/graphic-design", description: "Visuals that capture attention and drive action" },
      { label: "Local Search Optimization", href: "/services/local-seo", description: "Dominate searches in your neighbourhood" }
    ]
  },
  {
    category: "IT Outsourcing & Dev",
    items: [
      { label: "IT Outsourcing", href: "/services/it-outsourcing", description: "End-to-end IT solutions for your business" },
      { label: "Web Development", href: "/services/web-development", description: "Responsive, high-performance web applications" },
      { label: "Mobile App Development", href: "/services/mobile-app", description: "Android, iOS and React Native apps" },
      { label: "Testing Services", href: "/services/testing", description: "Bug-free, optimized software delivery" },
      { label: "Data Services", href: "/services/data-services", description: "Data entry, processing and analytics" },
      { label: "ERP Solutions", href: "/services/erp", description: "Automate and integrate your operations" }
    ]
  }
];

export function ServicesDirectory() {
  return (
    <section className="bg-slate-50 py-24 border-t border-gray-100 relative overflow-hidden">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 w-full">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-indigo-600 uppercase mb-4">
            <span className="h-[2px] w-6 bg-indigo-500 rounded-full" />
            Explore Our Sub-Services
            <span className="h-[2px] w-6 bg-indigo-500 rounded-full" />
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-950">
            Dedicated Solutions
          </h2>
          <p className="mt-5 text-gray-600">
            Dive deeper into our specialized service offerings designed to scale your brand and operations.
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {SERVICES_DIRECTORY.map((category, catIndex) => (
            <div key={category.category}>
              <h3 className="text-2xl font-bold mb-8 text-gray-900 border-b border-gray-200 pb-4">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {category.items.map((item, index) => {
                  const labelKey = category.category === "Digital Marketing" && item.label === "Digital Marketing" ? "Digital Marketing Overview" : 
                                   category.category === "IT Outsourcing & Dev" && item.label === "IT Outsourcing" ? "IT Outsourcing Overview" : 
                                   item.label;
                  const Icon = ICON_MAP[labelKey] || BarChart;

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                    >
                      <Link
                        to={item.href}
                        className="group flex flex-col h-full bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-indigo-100 transition-all duration-300 relative overflow-hidden"
                      >
                        <div className="h-12 w-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 origin-left">
                          <Icon className="h-6 w-6 text-indigo-600" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                          {item.label}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-6">
                          {item.description}
                        </p>
                        <div className="mt-auto flex items-center text-sm font-bold text-indigo-600 uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                          Explore More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
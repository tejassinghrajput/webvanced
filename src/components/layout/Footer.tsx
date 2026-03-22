import { Link } from "react-router-dom";
import { motion } from "motion/react";
import footerData from "@/mockData/footer.json";
import { FooterColumn } from "./FooterColumn";

export function Footer() {
  const bg = "https://img.freepik.com/free-photo/panoramic-view-london-sunset-uk_268835-1113.jpg?t=st=1774193831~exp=1774197431~hmac=9d967cf7f3c5f1b617117eb7bb2493cb21c4fee9454d53665a3d7ebbfeba0747&w=1480";
  return (
    <footer className="relative bg-gray-900 py-16 text-white overflow-hidden">
      <div className="absolute inset-0 z-0"><img src={bg} className="h-full w-full object-cover opacity-30" referrerPolicy="no-referrer" /></div>
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="col-span-1 sm:col-span-2 md:col-span-1">
            <Link to="/" className="text-xl font-bold tracking-tight">{footerData.logo}</Link>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed max-w-xs">{footerData.tagline}</p>
          </motion.div>
          {footerData.columns.map((col: any, idx) => (
            <div key={col.title}>
              <FooterColumn 
                title={col.title}
                links={col.links}
                email={col.email}
                phone={col.phone}
                location={col.location}
                idx={idx} 
              />
            </div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© {footerData.copyright}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

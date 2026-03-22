import { motion } from "motion/react";

interface FooterColumnProps {
  title: string;
  links?: string[];
  email?: string;
  phone?: string;
  location?: string;
  idx: number;
}

export function FooterColumn({ title, links, email, phone, location, idx }: FooterColumnProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
    >
      <h3 className="text-xs font-semibold uppercase tracking-wider text-white">{title}</h3>
      <ul className="mt-6 space-y-4">
        {links ? links.map((link) => (
          <li key={link}>
            <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">{link}</a>
          </li>
        )) : (
          <>
            <li><a href={`mailto:${email}`} className="text-sm text-gray-300 hover:text-white transition-colors">{email}</a></li>
            <li><a href={`tel:${phone}`} className="text-sm text-gray-300 hover:text-white transition-colors">{phone}</a></li>
            <li><span className="text-sm text-gray-300">{location}</span></li>
          </>
        )}
      </ul>
    </motion.div>
  );
}

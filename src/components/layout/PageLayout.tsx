import { ReactNode } from "react";
import { motion } from "motion/react";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <motion.main
      initial={{ y: 8 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="flex-1 pt-14 md:pt-16"
    >
      {children}
    </motion.main>
  );
}

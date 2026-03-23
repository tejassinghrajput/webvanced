import { ReactNode } from "react";
import { motion } from "motion/react";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="flex-1 pt-14 md:pt-16"
    >
      {children}
    </motion.main>
  );
}

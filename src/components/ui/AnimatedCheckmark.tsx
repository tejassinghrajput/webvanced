import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedCheckProps {
  colorClass?: string;
  className?: string;
}

export function AnimatedCheckmark({ colorClass = "text-green-500", className = "w-16 h-16" }: AnimatedCheckProps) {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <motion.svg
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("w-full h-full", colorClass)}
      >
        <motion.circle
          cx="25"
          cy="25"
          r="22"
          fill="currentColor"
          initial={{ scale: 0, originX: "50%", originY: "50%" }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 20,
            delay: 0.1
          }}
        />
        <motion.path
          d="M16 26l6 6 12-12"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: 0.4
          }}
        />
      </motion.svg>
    </div>
  );
}
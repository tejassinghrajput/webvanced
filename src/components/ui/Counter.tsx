import { motion, useMotionValue, useTransform, animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";

export function Counter({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const formatted = Math.round(latest).toLocaleString();
    return `${formatted}${suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, { duration: 2 });
      return () => controls.stop();
    }
  }, [isInView, count, numericValue]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

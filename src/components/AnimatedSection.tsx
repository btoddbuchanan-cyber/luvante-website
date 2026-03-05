"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fallback: if IntersectionObserver doesn't fire within 2s, force visible
    const timeout = setTimeout(() => setIsVisible(true), 2000 + delay * 1000);

    const el = ref.current;
    if (!el) return () => clearTimeout(timeout);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [delay]);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: isVisible ? delay : 0, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

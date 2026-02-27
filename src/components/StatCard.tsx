"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

export default function StatCard({ value, label, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-green/30 transition-colors"
    >
      <span className="font-heading text-4xl md:text-5xl font-bold text-green">
        {value}
      </span>
      <span className="mt-2 text-sm text-slate text-center">{label}</span>
    </motion.div>
  );
}

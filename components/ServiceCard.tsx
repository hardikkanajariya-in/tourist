"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { type Service } from "@/data/services";
import {
  Compass,
  Heart,
  Mountain,
  TreePine,
  Palmtree,
  Sparkles,
  Users,
  Bus,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Compass,
  Heart,
  Mountain,
  TreePine,
  Palmtree,
  Sparkles,
  Users,
  Bus,
};

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = iconMap[service.icon] || Compass;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border border-gray-100 transition-shadow duration-300 group"
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
        <Icon size={26} />
      </div>
      <h3 className="font-heading text-lg font-bold text-secondary mb-2">
        {service.title}
      </h3>
      <p className="text-sm text-muted leading-relaxed">
        {service.shortDescription}
      </p>
    </motion.div>
  );
}

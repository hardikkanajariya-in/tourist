"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Wallet,
  HeadphonesIcon,
  Pencil,
  ShieldCheck,
  UserCheck,
  Heart,
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Budget-Friendly Pricing",
    description: "Transparent pricing with no hidden charges. Quality travel experiences that fit every budget.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Customer Support",
    description: "Round-the-clock assistance from our dedicated travel experts whenever you need help.",
  },
  {
    icon: Pencil,
    title: "Customized Itineraries",
    description: "Every trip is tailored to your preferences, pace, and interests for a personal touch.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Hotels & Transport",
    description: "All our partner hotels and vehicles are personally verified for quality and safety.",
  },
  {
    icon: UserCheck,
    title: "Expert Local Guides",
    description: "Knowledgeable local guides who bring destinations alive with stories and insights.",
  },
  {
    icon: Heart,
    title: "Safe & Comfortable Travel",
    description: "Your safety and comfort are our top priority — from the first step to the last.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Why Travel With Us
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary mt-3">
            Why Choose WanderNest?
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            We go above and beyond to make your travel experience seamless, memorable, and worry-free.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border border-gray-100 transition-shadow duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                <feature.icon size={26} />
              </div>
              <h3 className="font-heading text-lg font-bold text-secondary mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

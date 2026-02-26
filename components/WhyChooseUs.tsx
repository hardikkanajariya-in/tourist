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
    color: "from-orange-500 to-amber-400",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Customer Support",
    description: "Round-the-clock assistance from our dedicated travel experts whenever you need help.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Pencil,
    title: "Customized Itineraries",
    description: "Every trip is tailored to your preferences, pace, and interests for a personal touch.",
    color: "from-purple-500 to-pink-400",
  },
  {
    icon: ShieldCheck,
    title: "Verified Hotels & Transport",
    description: "All our partner hotels and vehicles are personally verified for quality and safety.",
    color: "from-green-500 to-emerald-400",
  },
  {
    icon: UserCheck,
    title: "Expert Local Guides",
    description: "Knowledgeable local guides who bring destinations alive with stories and insights.",
    color: "from-red-500 to-orange-400",
  },
  {
    icon: Heart,
    title: "Safe & Comfortable Travel",
    description: "Your safety and comfort are our top priority — from the first step to the last.",
    color: "from-pink-500 to-rose-400",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-widest">
            Why Travel With Us
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold text-secondary mt-3">
            Why Choose WanderNest?
          </h2>
          <p className="text-muted mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            We go above and beyond to make your travel experience seamless, memorable, and worry-free.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary/20 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover gradient glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

              <div className="relative">
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-4 sm:mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={24} />
                </div>
                <h3 className="font-heading text-base sm:text-lg font-bold text-secondary mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { MapPin, Users, Calendar, Award } from "lucide-react";

const stats = [
  { icon: Users, value: 2500, suffix: "+", label: "Happy Travelers" },
  { icon: MapPin, value: 150, suffix: "+", label: "Destinations" },
  { icon: Calendar, value: 10, suffix: "+", label: "Years Experience" },
  { icon: Award, value: 98, suffix: "%", label: "Satisfaction Rate" },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-heading tabular-nums">
      {count.toLocaleString("en-IN")}{suffix}
    </span>
  );
}

export default function StatsBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative bg-secondary py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary" />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 border border-primary/10 mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <stat.icon size={22} className="text-primary" />
              </div>
              <div className="mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

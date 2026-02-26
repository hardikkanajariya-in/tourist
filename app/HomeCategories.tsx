"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  { name: "Pilgrimage Tours", emoji: "🙏" },
  { name: "Honeymoon Packages", emoji: "💑" },
  { name: "Adventure & Trekking", emoji: "🏔️" },
  { name: "Wildlife Safaris", emoji: "🐯" },
  { name: "Leisure Holidays", emoji: "🏖️" },
  { name: "Festival Special", emoji: "🎉" },
  { name: "Corporate Tours", emoji: "🏢" },
  { name: "Student Tours", emoji: "🎓" },
];

export default function HomeCategories() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Browse By Category
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mt-3">
            Find Your Perfect Tour
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.07, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-5 py-3 bg-gray-50 hover:bg-primary/10 border border-gray-200 hover:border-primary/30 rounded-full text-sm font-medium text-secondary transition-colors"
            >
              <span className="text-xl">{cat.emoji}</span>
              {cat.name}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

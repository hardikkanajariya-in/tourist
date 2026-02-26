"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const categories = [
  { name: "Pilgrimage Tours", emoji: "🙏", image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=300&h=200&fit=crop&q=80" },
  { name: "Honeymoon Packages", emoji: "💑", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=200&fit=crop&q=80" },
  { name: "Adventure & Trekking", emoji: "🏔️", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300&h=200&fit=crop&q=80" },
  { name: "Wildlife Safaris", emoji: "🐯", image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=300&h=200&fit=crop&q=80" },
  { name: "Leisure Holidays", emoji: "🏖️", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=300&h=200&fit=crop&q=80" },
  { name: "Festival Special", emoji: "🎉", image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=300&h=200&fit=crop&q=80" },
  { name: "Corporate Tours", emoji: "🏢", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop&q=80" },
  { name: "Student Tours", emoji: "🎓", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=300&h=200&fit=crop&q=80" },
];

export default function HomeCategories() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs sm:text-sm font-semibold uppercase tracking-wide mx-auto">
            Browse By Category
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mt-3">
            Find Your Perfect Tour
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {categories.map((cat, i) => (
            <Link key={cat.name} href="/packages">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="relative aspect-[3/2] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-3 sm:p-4">
                  <span className="text-xl sm:text-2xl mb-1">{cat.emoji}</span>
                  <span className="text-white text-xs sm:text-sm font-semibold text-center leading-tight">{cat.name}</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

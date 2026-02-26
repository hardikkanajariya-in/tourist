"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { packages } from "@/data/packages";
import PackageCard from "@/components/PackageCard";

export default function HomeFeatured() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const featured = packages.slice(0, 6);

  return (
    <section ref={ref} className="py-12 sm:py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative orb */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs sm:text-sm font-semibold uppercase tracking-wide mx-auto">
            <Sparkles size={14} /> Featured Packages
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold text-secondary mt-3">
            Handpicked Journeys For You
          </h2>
          <p className="text-muted mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Discover our most popular and carefully curated travel packages, loved by thousands of happy travelers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {featured.map((pkg, i) => (
            <PackageCard key={pkg.slug} pkg={pkg} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-8 sm:mt-12"
        >
          <Link href="/packages">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-primary to-orange-500 text-white rounded-full font-semibold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all flex items-center gap-2 mx-auto cursor-pointer"
            >
              View All Packages
              <ArrowRight size={16} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

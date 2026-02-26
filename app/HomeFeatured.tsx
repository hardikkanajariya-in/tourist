"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { packages } from "@/data/packages";
import PackageCard from "@/components/PackageCard";

export default function HomeFeatured() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const featured = packages.slice(0, 6);

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
            Featured Packages
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary mt-3">
            Handpicked Journeys For You
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Discover our most popular and carefully curated travel packages, loved by thousands of happy travelers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((pkg, i) => (
            <PackageCard key={pkg.slug} pkg={pkg} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/packages">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 border-2 border-primary text-primary rounded-full font-semibold text-sm hover:bg-primary hover:text-white transition-colors"
            >
              View All Packages
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

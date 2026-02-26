"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { packages } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import { SlidersHorizontal, ChevronRight } from "lucide-react";

const categories = ["All", "Pilgrimage", "Honeymoon", "Adventure", "Wildlife", "Leisure", "Festival"];
const durations = ["All", "3-4 Days", "5-6 Days", "7+ Days"];
const sortOptions = ["Popular", "Price: Low to High", "Price: High to Low", "Rating"];

export default function PackagesPage() {
  const [category, setCategory] = useState("All");
  const [duration, setDuration] = useState("All");
  const [sortBy, setSortBy] = useState("Popular");

  const filtered = packages
    .filter((pkg) => category === "All" || pkg.category === category)
    .filter((pkg) => {
      if (duration === "All") return true;
      const days = parseInt(pkg.duration);
      if (duration === "3-4 Days") return days >= 3 && days <= 4;
      if (duration === "5-6 Days") return days >= 5 && days <= 6;
      return days >= 7;
    })
    .sort((a, b) => {
      if (sortBy === "Price: Low to High") return a.price - b.price;
      if (sortBy === "Price: High to Low") return b.price - a.price;
      if (sortBy === "Rating") return b.rating - a.rating;
      return b.reviews - a.reviews;
    });

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-secondary via-[#16213E] to-secondary overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          animate={{ x: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-primary">Packages</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white">
              Our Tour Packages
            </h1>
            <p className="text-gray-400 mt-3 max-w-xl">
              Explore our handcrafted collection of tour packages designed to give you the best travel experience across India and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-10"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-secondary mb-4">
              <SlidersHorizontal size={16} className="text-primary" />
              Filter Packages
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs text-muted uppercase tracking-wider mb-1 block">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs text-muted uppercase tracking-wider mb-1 block">Duration</label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  {durations.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs text-muted uppercase tracking-wider mb-1 block">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  {sortOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Results count */}
          <p className="text-sm text-muted mb-6">
            Showing <span className="font-semibold text-secondary">{filtered.length}</span> packages
          </p>

          {/* Package Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((pkg, i) => (
              <PackageCard key={pkg.slug} pkg={pkg} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted text-lg">No packages match your filter criteria.</p>
              <button
                onClick={() => { setCategory("All"); setDuration("All"); }}
                className="mt-4 text-primary font-semibold hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

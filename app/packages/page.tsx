"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { packages } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import { SlidersHorizontal, ChevronRight, Search, MapPin, Compass, X } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Pilgrimage", "Honeymoon", "Adventure", "Wildlife", "Leisure", "Festival"];
const durations = ["All", "3-4 Days", "5-6 Days", "7+ Days"];
const sortOptions = ["Popular", "Price: Low to High", "Price: High to Low", "Rating"];

const categoryEmojis: Record<string, string> = {
  All: "🌍", Pilgrimage: "🙏", Honeymoon: "💑", Adventure: "🏔️",
  Wildlife: "🐯", Leisure: "🏖️", Festival: "🎉",
};

export default function PackagesPage() {
  const [category, setCategory] = useState("All");
  const [duration, setDuration] = useState("All");
  const [sortBy, setSortBy] = useState("Popular");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = packages
    .filter((pkg) => category === "All" || pkg.category === category)
    .filter((pkg) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          pkg.title.toLowerCase().includes(q) ||
          pkg.destinations.some((d) => d.toLowerCase().includes(q)) ||
          pkg.category.toLowerCase().includes(q)
        );
      }
      return true;
    })
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
      <section className="relative pt-28 sm:pt-32 pb-24 sm:pb-32 overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&h=800&fit=crop&q=80"
          alt="Travel destinations"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/85 via-secondary/70 to-secondary/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5" />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/15 blur-[100px]"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-accent/10 blur-[100px]"
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-sm text-white/60 mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-primary font-medium">Packages</span>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 mb-6"
            >
              <Compass size={14} className="text-primary" />
              <span className="text-xs sm:text-sm text-white/80 font-medium">{packages.length} Curated Journeys</span>
            </motion.div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-accent">Packages</span>
            </h1>
            <p className="text-white/60 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Handcrafted travel experiences designed to create unforgettable memories across India and beyond.
            </p>
          </motion.div>

          {/* Search bar in hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="max-w-xl mx-auto mt-8"
          >
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                placeholder="Search destinations, packages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition cursor-pointer"
                >
                  <X size={12} className="text-white/60" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category tabs - overlapping hero */}
      <section className="relative -mt-6 sm:-mt-8 z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={cn(
                  "flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 border cursor-pointer shrink-0",
                  category === cat
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/25"
                    : "bg-white text-secondary border-gray-200 hover:border-primary/30 hover:bg-primary/5 shadow-md"
                )}
              >
                <span className="text-base">{categoryEmojis[cat]}</span>
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="py-8 sm:py-12 md:py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Compact filter bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8"
          >
            <p className="text-sm text-muted">
              Showing <span className="font-bold text-secondary">{filtered.length}</span> packages
              {category !== "All" && (
                <span> in <span className="text-primary font-semibold">{category}</span></span>
              )}
            </p>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <SlidersHorizontal size={14} className="text-primary" />
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-white border border-gray-200 text-xs sm:text-sm font-medium text-secondary focus:outline-none focus:ring-2 focus:ring-primary/30 cursor-pointer"
                >
                  {durations.map((d) => (
                    <option key={d} value={d}>{d === "All" ? "Any Duration" : d}</option>
                  ))}
                </select>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 rounded-xl bg-white border border-gray-200 text-xs sm:text-sm font-medium text-secondary focus:outline-none focus:ring-2 focus:ring-primary/30 cursor-pointer"
              >
                {sortOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Package Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filtered.map((pkg, i) => (
              <PackageCard key={pkg.slug} pkg={pkg} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <MapPin size={32} className="text-gray-300" />
              </div>
              <p className="text-muted text-lg font-medium">No packages match your criteria</p>
              <p className="text-sm text-muted mt-1">Try adjusting your filters or search query</p>
              <button
                onClick={() => { setCategory("All"); setDuration("All"); setSearchQuery(""); }}
                className="mt-4 px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors cursor-pointer"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}

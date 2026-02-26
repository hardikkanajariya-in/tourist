"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Clock, MapPin, ArrowRight, Users, Heart, Sparkles } from "lucide-react";
import { type TourPackage } from "@/data/packages";
import { cn } from "@/lib/utils";

interface PackageCardProps {
  pkg: TourPackage;
  index?: number;
}

const badgeStyles: Record<string, string> = {
  "Best Seller": "from-primary to-orange-500",
  Trending: "from-violet-600 to-indigo-500",
  New: "from-emerald-500 to-teal-500",
  "Limited Seats": "from-rose-500 to-red-500",
};

export default function PackageCard({ pkg, index = 0 }: PackageCardProps) {
  const discount = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);
  const badgeGradient = pkg.badge ? badgeStyles[pkg.badge] || "from-primary to-orange-500" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col border border-gray-100/80 hover:border-primary/20"
    >
      {/* Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Top row */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
          {pkg.badge ? (
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.05 }}
              className={cn(
                "inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r text-white text-[11px] font-bold rounded-full shadow-lg",
                badgeGradient
              )}
            >
              <Sparkles size={10} />
              {pkg.badge}
            </motion.span>
          ) : <span />}

          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/40 transition-all cursor-pointer"
            aria-label="Add to wishlist"
          >
            <Heart size={14} className="text-white" />
          </motion.button>
        </div>

        {/* Bottom overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <div className="flex items-center gap-1.5 text-white/90 text-xs">
            <MapPin size={12} className="text-primary" />
            <span className="font-medium">{pkg.destinations.slice(0, 2).join(", ")}</span>
          </div>
          <div className="flex items-center gap-1 bg-black/30 backdrop-blur-md px-2 py-1 rounded-full">
            <Star size={11} className="text-yellow-400 fill-yellow-400" />
            <span className="text-white text-[11px] font-bold">{pkg.rating}</span>
            <span className="text-white/50 text-[10px]">({pkg.reviews})</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-[11px] font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wide">
            {pkg.category}
          </span>
          <span className="flex items-center gap-1 text-[11px] text-muted">
            <Clock size={11} className="text-primary/60" />
            {pkg.duration}
          </span>
          <span className="flex items-center gap-1 text-[11px] text-muted">
            <Users size={11} className="text-primary/60" />
            {pkg.groupSize}
          </span>
        </div>

        <h3 className="font-heading text-base sm:text-lg font-bold text-secondary mb-1.5 line-clamp-1 group-hover:text-primary transition-colors duration-300">
          {pkg.title}
        </h3>

        <p className="text-xs text-muted line-clamp-2 mb-4 leading-relaxed">
          {pkg.highlights.slice(0, 2).join(" • ")}
        </p>

        {/* Price + CTA */}
        <div className="flex items-end justify-between mt-auto pt-3 border-t border-gray-100">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-xs text-muted line-through">
                ₹{pkg.originalPrice.toLocaleString("en-IN")}
              </span>
              <span className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                {discount}% OFF
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl sm:text-2xl font-bold text-primary font-heading">
                ₹{pkg.price.toLocaleString("en-IN")}
              </span>
              <span className="text-[10px] text-muted">/ person</span>
            </div>
          </div>

          <Link href={`/packages/${pkg.slug}`}>
            <motion.button
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-secondary to-secondary/90 text-white text-xs font-semibold rounded-full hover:from-primary hover:to-orange-500 transition-all duration-300 shadow-md hover:shadow-primary/20 cursor-pointer"
            >
              View Details
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

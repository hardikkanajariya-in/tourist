"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Clock, MapPin, ArrowRight, Users } from "lucide-react";
import { type TourPackage } from "@/data/packages";

interface PackageCardProps {
  pkg: TourPackage;
  index?: number;
}

export default function PackageCard({ pkg, index = 0 }: PackageCardProps) {
  const discount = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Top row */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
          {/* Badge */}
          {pkg.badge ? (
            <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary text-white text-[11px] font-bold rounded-full shadow-lg">
              {pkg.badge}
            </span>
          ) : <span />}

          {/* Rating */}
          <div className="flex items-center gap-1 bg-black/30 backdrop-blur-md px-2.5 py-1.5 rounded-full">
            <Star size={12} className="text-yellow-400 fill-yellow-400" />
            <span className="text-white text-xs font-bold">{pkg.rating}</span>
            <span className="text-white/60 text-[10px]">({pkg.reviews})</span>
          </div>
        </div>

        {/* Bottom overlay info */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <div className="flex items-center gap-3 text-white/90 text-xs">
            <span className="flex items-center gap-1">
              <MapPin size={12} />
              {pkg.destinations.slice(0, 2).join(", ")}
            </span>
          </div>
          <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">
            {discount}% OFF
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-2.5">
          <span className="text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
            {pkg.category}
          </span>
          <span className="flex items-center gap-1 text-[11px] text-muted">
            <Clock size={11} />
            {pkg.duration}
          </span>
          <span className="flex items-center gap-1 text-[11px] text-muted">
            <Users size={11} />
            {pkg.groupSize}
          </span>
        </div>

        <h3 className="font-heading text-base sm:text-lg font-bold text-secondary mb-3 line-clamp-1 group-hover:text-primary transition-colors duration-300">
          {pkg.title}
        </h3>

        {/* Price + CTA */}
        <div className="flex items-end justify-between mt-auto pt-3 border-t border-gray-100">
          <div>
            <span className="text-[11px] text-muted line-through block">
              ₹{pkg.originalPrice.toLocaleString("en-IN")}
            </span>
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
              className="flex items-center gap-1.5 px-4 py-2.5 bg-secondary text-white text-xs font-semibold rounded-full hover:bg-primary transition-colors duration-300"
            >
              Details
              <ArrowRight size={14} />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

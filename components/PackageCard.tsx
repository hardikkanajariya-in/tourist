"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Clock, MapPin } from "lucide-react";
import { type TourPackage } from "@/data/packages";

interface PackageCardProps {
  pkg: TourPackage;
  index?: number;
}

export default function PackageCard({ pkg, index = 0 }: PackageCardProps) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -4 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Package Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-end p-5">
          <div>
            <p className="text-white/80 text-xs font-medium flex items-center gap-1">
              <MapPin size={12} />
              {pkg.destinations.slice(0, 2).join(", ")}
            </p>
          </div>
        </div>

        {/* Badge */}
        {pkg.badge && (
          <div className="absolute top-3 left-3">
            <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full shadow-md">
              {pkg.badge}
            </span>
          </div>
        )}

        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/20 backdrop-blur-md px-2 py-1 rounded-full">
          <Star size={12} className="text-yellow-400 fill-yellow-400" />
          <span className="text-white text-xs font-semibold">{pkg.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            {pkg.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted">
            <Clock size={12} />
            {pkg.duration}
          </span>
        </div>

        <h3 className="font-heading text-lg font-bold text-secondary mb-3 line-clamp-1 group-hover:text-primary transition-colors">
          {pkg.title}
        </h3>

        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs text-muted line-through">₹{pkg.originalPrice.toLocaleString("en-IN")}</span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-primary">₹{pkg.price.toLocaleString("en-IN")}</span>
              <span className="text-xs text-muted">/ person</span>
            </div>
          </div>

          <Link href={`/packages/${pkg.slug}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-4 py-2 bg-secondary text-white text-xs font-semibold rounded-full hover:bg-primary transition-colors"
            >
              View Details
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

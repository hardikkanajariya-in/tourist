"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Compass,
  Heart,
  Mountain,
  TreePine,
  Palmtree,
  Sparkles,
  Users,
  Bus,
  Check,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Compass,
  Heart,
  Mountain,
  TreePine,
  Palmtree,
  Sparkles,
  Users,
  Bus,
};

const serviceImages = [
  "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=800&h=600&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop&q=80",
  "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop&q=80",
  "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=800&h=600&fit=crop&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80",
  "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop&q=80",
];

function ServiceRow({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = iconMap[service.icon] || Compass;
  const isReversed = index % 2 === 1;
  const serviceImage = serviceImages[index] || serviceImages[0];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={cn(
        "flex flex-col gap-6 sm:gap-8 items-center",
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      )}
    >
      {/* Service Image */}
      <div className="w-full md:w-1/2">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="aspect-[4/3] rounded-2xl sm:rounded-3xl relative overflow-hidden group shadow-lg"
        >
          <img
            src={serviceImage}
            alt={service.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
              <Icon size={20} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 space-y-3 sm:space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
          <Icon size={14} className="text-primary" />
          <span className="text-xs font-semibold text-primary uppercase tracking-wide">
            {service.title.split(" ")[0]}
          </span>
        </div>
        <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-secondary">
          {service.title}
        </h3>
        <p className="text-sm sm:text-base text-muted leading-relaxed">
          {service.longDescription}
        </p>
        <ul className="space-y-2">
          {service.features.slice(0, 4).map((f, i) => (
            <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-secondary/70">
              <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                <Check size={10} className="text-green-500" />
              </div>
              {f}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 sm:px-6 py-2.5 bg-gradient-to-r from-primary to-orange-500 text-white rounded-full text-xs sm:text-sm font-semibold shadow-md shadow-primary/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              Book Now
              <ArrowRight size={14} />
            </motion.button>
          </Link>
          <Link href="/packages">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 sm:px-6 py-2.5 border border-gray-200 text-secondary rounded-full text-xs sm:text-sm font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer"
            >
              Know More
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden min-h-[40vh] sm:min-h-[45vh] flex items-end">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&h=900&fit=crop&q=80"
          alt="Our Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-transparent to-transparent" />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 right-10 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-primary/20 blur-3xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-xs sm:text-sm text-white/60 mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span className="text-white/90">Services</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-3">
              Our <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-white/60 max-w-xl text-sm sm:text-base">
              From pilgrimage to paradise, from adventure to leisure — explore our comprehensive range of travel services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 sm:py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-20 md:space-y-28">
          {services.map((service, i) => (
            <ServiceRow key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}

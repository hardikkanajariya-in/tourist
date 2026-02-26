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
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services } from "@/data/services";

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
  "https://images.unsplash.com/photo-1591018653367-4e4f0b946792?w=800&h=600&fit=crop&q=80",
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
      className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
    >
      {/* Service Image */}
      <div className="w-full md:w-1/2">
        <div className="aspect-[4/3] rounded-3xl relative overflow-hidden">
          <img
            src={serviceImage}
            alt={service.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 space-y-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary">
          <Icon size={24} />
        </div>
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-secondary">
          {service.title}
        </h3>
        <p className="text-muted leading-relaxed">
          {service.longDescription}
        </p>
        <ul className="space-y-2">
          {service.features.slice(0, 4).map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-muted">
              <Check size={14} className="text-primary shrink-0" />
              {f}
            </li>
          ))}
        </ul>
        <div className="flex gap-3 pt-2">
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2.5 bg-primary text-white rounded-full text-sm font-semibold shadow-md shadow-primary/20 hover:bg-primary-dark transition-colors"
            >
              Book Now
            </motion.button>
          </Link>
          <Link href="/packages">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2.5 border border-gray-300 text-secondary rounded-full text-sm font-semibold hover:bg-gray-50 transition-colors"
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
              <span className="text-primary">Services</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white">
              Our Services
            </h1>
            <p className="text-gray-400 mt-3 max-w-xl">
              From pilgrimage to paradise, from adventure to leisure — explore our comprehensive range of travel services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-28">
          {services.map((service, i) => (
            <ServiceRow key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}

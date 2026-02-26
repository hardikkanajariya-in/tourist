"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { packages } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import DestinationGallery from "@/components/DestinationGallery";
import TestimonialSlider from "@/components/TestimonialSlider";
import NewsletterBanner from "@/components/NewsletterBanner";
import StatsBanner from "@/components/StatsBanner";
import {
  ArrowRight,
  MapPin,
  Calendar,
  Users,
  Star,
  Shield,
  Compass,
  ChevronDown,
  Sparkles,
  Heart,
  Camera,
} from "lucide-react";

/* ─── Split Hero: Image left + Content right ─── */
function SplitHero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-secondary">
      {/* Mobile: full bg image, Desktop: split */}
      <div className="absolute inset-0 lg:hidden">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&h=1080&fit=crop&q=80"
          alt="Mountains landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-primary/15 border border-primary/20 rounded-full px-4 py-1.5 mb-6"
            >
              <Heart size={13} className="text-primary fill-primary" />
              <span className="text-xs sm:text-sm font-medium text-primary">Trusted by 10,000+ Travelers</span>
            </motion.div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
              Travel Beyond
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">
                Imagination
              </span>
            </h1>

            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-lg mb-8 leading-relaxed">
              Handcrafted journeys to India&apos;s most stunning destinations. Every trip is a story waiting to be lived.
            </p>

            {/* Quick search pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["Kashmir", "Rajasthan", "Goa", "Kerala", "Ladakh"].map((place) => (
                <Link key={place} href="/packages">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs sm:text-sm text-white/70 hover:bg-primary/20 hover:border-primary/30 hover:text-white transition-all cursor-pointer"
                  >
                    <MapPin size={12} className="text-primary" />
                    {place}
                  </motion.span>
                </Link>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href="/packages">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary to-orange-500 text-white rounded-full font-semibold text-sm shadow-xl shadow-primary/25 flex items-center gap-2"
                >
                  Explore Packages
                  <ArrowRight size={16} />
                </motion.button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["RS", "MP", "AN"].map((initials, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-orange-400 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-secondary">
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={10} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-400">2,500+ Reviews</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image collage — desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-[4/5]">
              {/* Main image */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=1000&fit=crop&q=80"
                  alt="Mountain lake"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-8 top-1/4 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Camera size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted">Destinations</p>
                    <p className="text-sm font-bold text-secondary">150+ Places</p>
                  </div>
                </div>
              </motion.div>
              {/* Floating card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -right-6 bottom-1/4 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <Shield size={18} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted">Satisfaction</p>
                    <p className="text-sm font-bold text-secondary">98% Happy</p>
                  </div>
                </div>
              </motion.div>
              {/* Decorative circle */}
              <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full border-4 border-primary/20" />
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-primary/10 blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-white/40"
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── Category Cards with Images ─── */
function CategoryCards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const categories = [
    { name: "Pilgrimage", icon: "🙏", image: "https://images.unsplash.com/photo-1591018653367-4e4f0b946792?w=400&h=300&fit=crop&q=80", count: 4 },
    { name: "Honeymoon", icon: "💑", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop&q=80", count: 3 },
    { name: "Adventure", icon: "🏔️", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop&q=80", count: 2 },
    { name: "Wildlife", icon: "🐯", image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=400&h=300&fit=crop&q=80", count: 2 },
    { name: "Leisure", icon: "🏖️", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=300&fit=crop&q=80", count: 2 },
    { name: "Festival", icon: "🎉", image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=400&h=300&fit=crop&q=80", count: 1 },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-widest">
            Browse By Category
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold text-secondary mt-3">
            Choose Your Style
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group cursor-pointer"
            >
              <Link href="/packages">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-3">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-2xl">{cat.icon}</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-0.5 text-[10px] font-semibold text-secondary">
                    {cat.count} Pkgs
                  </div>
                </div>
                <p className="text-sm font-semibold text-secondary group-hover:text-primary transition-colors text-center">
                  {cat.name}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Featured with left-aligned heading ─── */
function FeaturedSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const featured = packages.slice(0, 6);

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-14 gap-4"
        >
          <div>
            <span className="inline-flex items-center gap-1.5 text-primary text-xs sm:text-sm font-semibold uppercase tracking-widest">
              <Sparkles size={14} />
              Featured Tours
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold text-secondary mt-2">
              Handpicked For You
            </h2>
          </div>
          <Link href="/packages" className="group flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all shrink-0">
            View All <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {featured.map((pkg, i) => (
            <PackageCard key={pkg.slug} pkg={pkg} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Trust Banner ─── */
function TrustBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const items = [
    { icon: Shield, title: "100% Safe", desc: "Verified hotels & transport" },
    { icon: Compass, title: "Expert Guides", desc: "Local knowledgeable guides" },
    { icon: Calendar, title: "Flexible Dates", desc: "Reschedule hassle-free" },
    { icon: Users, title: "Group Friendly", desc: "Custom group packages" },
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-3 sm:gap-4"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <item.icon size={20} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm sm:text-base">{item.title}</p>
                <p className="text-white/70 text-xs sm:text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function Home3Page() {
  return (
    <>
      <SplitHero />
      <TrustBanner />
      <CategoryCards />
      <FeaturedSection />
      <DestinationGallery />
      <StatsBanner />
      <TestimonialSlider />
      <NewsletterBanner />
    </>
  );
}

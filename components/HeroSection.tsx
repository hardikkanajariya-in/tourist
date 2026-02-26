"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ChevronDown, MapPin, Star, Shield } from "lucide-react";

const words = ["Your", "Next", "Adventure", "Awaits"];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: -45, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const trustBadges = [
  { icon: Star, text: "4.8/5 Rating" },
  { icon: Shield, text: "Verified Tours" },
  { icon: MapPin, text: "150+ Destinations" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image with parallax feel */}
      <motion.img
        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&h=1080&fit=crop&q=80"
        alt="Travel adventure background"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 12, ease: "easeOut" }}
      />
      {/* Layered overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-transparent to-secondary/40" />

      {/* Animated floating orbs */}
      <motion.div
        className="absolute top-1/4 left-[5%] w-64 h-64 md:w-96 md:h-96 rounded-full bg-primary/15 blur-[100px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-[5%] w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-full bg-accent/10 blur-[100px]"
        animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Floating tagline pill */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs sm:text-sm font-medium tracking-wide">
            Explore · Experience · Remember
          </span>
        </motion.div>

        {/* Main heading with 3D stagger */}
        <motion.h1
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-6 perspective-[1000px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className={`inline-block mr-2 sm:mr-3 md:mr-5 ${
                word === "Adventure"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-accent"
                  : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed"
        >
          WanderNest Holidays crafts unforgettable journeys across India&apos;s most breathtaking destinations.
          From sacred pilgrimages to tropical paradises — you dream, we take you there.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 md:mb-14"
        >
          <Link href="/packages">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,107,53,0.35)" }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-orange-500 text-white rounded-full font-semibold text-sm md:text-base shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all"
            >
              Explore Packages
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold text-sm md:text-base hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Plan My Trip
            </motion.button>
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-2 text-white/70 text-xs sm:text-sm"
            >
              <badge.icon size={16} className="text-primary" />
              <span>{badge.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-white/50"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] mb-2">Scroll</span>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}

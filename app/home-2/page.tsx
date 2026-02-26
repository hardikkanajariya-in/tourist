"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { packages } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialSlider from "@/components/TestimonialSlider";
import NewsletterBanner from "@/components/NewsletterBanner";
import StatsBanner from "@/components/StatsBanner";
import {
  Play,
  Pause,
  ArrowRight,
  Compass,
  MapPin,
  Star,
  Shield,
  ChevronDown,
  Sparkles,
} from "lucide-react";

/* ─── Hero with Video Background ─── */
function VideoHero() {
  const [paused, setPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    paused ? videoRef.current.play() : videoRef.current.pause();
    setPaused(!paused);
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Video background — fallback to image via poster */}
      <motion.div style={{ y }} className="absolute inset-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&h=1080&fit=crop&q=80"
        >
          <source
            src="https://videos.pexels.com/video-files/3015510/3015510-hd_1920_1080_24fps.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/30 to-secondary/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/50 via-transparent to-secondary/50" />

      {/* Animated grain texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIi8+PC9zdmc+')]" />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full px-5 py-2 mb-8"
        >
          <Sparkles size={14} className="text-primary" />
          <span className="text-xs sm:text-sm font-medium">Cinematic Travel Experiences</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-6"
        >
          Discover The
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-300">
            World&apos;s Beauty
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Immerse yourself in cinematic landscapes and unforgettable adventures crafted just for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/packages">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-semibold text-sm md:text-base shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all flex items-center gap-2"
            >
              Start Your Journey
              <ArrowRight size={16} />
            </motion.button>
          </Link>

          <button
            onClick={toggleVideo}
            className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group cursor-pointer"
          >
            <span className="w-12 h-12 rounded-full border-2 border-white/30 group-hover:border-primary flex items-center justify-center transition-colors">
              {paused ? <Play size={18} /> : <Pause size={18} />}
            </span>
            <span className="text-sm font-medium">{paused ? "Play" : "Pause"} Video</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Video control badge — bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-white/40"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] mb-2">Explore</span>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── Horizontal scroll destinations ─── */
function DestinationStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const destinations = [
    { name: "Vaishno Devi", image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=600&h=800&fit=crop&q=80", tours: 12 },
    { name: "Kashmir", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop&q=80", tours: 8 },
    { name: "Rajasthan", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=800&fit=crop&q=80", tours: 15 },
    { name: "Goa", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&h=800&fit=crop&q=80", tours: 10 },
    { name: "Kerala", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=800&fit=crop&q=80", tours: 9 },
    { name: "Ladakh", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=800&fit=crop&q=80", tours: 6 },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-14 gap-4"
        >
          <div>
            <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-widest">
              Where To Next
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold text-secondary mt-2">
              Trending Destinations
            </h2>
          </div>
          <Link href="/packages" className="group flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all">
            View All <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-4 sm:gap-6 px-4 sm:px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative min-w-[200px] sm:min-w-[240px] md:min-w-[280px] aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group shrink-0"
            >
              <img
                src={dest.image}
                alt={dest.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-1">{dest.name}</h3>
                <span className="text-xs text-white/60">{dest.tours} Tours Available</span>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <ArrowRight size={14} className="text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Featured Packages (showing 4 with different grid) ─── */
function FeaturedGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const featured = packages.slice(0, 4);

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-14"
        >
          <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs sm:text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <Compass size={12} />
            Curated For You
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold text-secondary mt-2">
            Popular Tour Packages
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {featured.map((pkg, i) => (
            <PackageCard key={pkg.slug} pkg={pkg} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-10 sm:mt-12"
        >
          <Link href="/packages">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 bg-secondary text-white rounded-full font-semibold text-sm hover:bg-secondary/90 transition-colors"
            >
              View All Packages
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Quick Stats Bar ─── */
function InlineStats() {
  const stats = [
    { icon: Star, value: "4.8/5", label: "Rating" },
    { icon: MapPin, value: "150+", label: "Destinations" },
    { icon: Shield, value: "10K+", label: "Happy Travelers" },
    { icon: Compass, value: "98%", label: "Satisfaction" },
  ];

  return (
    <section className="bg-background border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <stat.icon size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-heading text-lg sm:text-xl font-bold text-secondary">{stat.value}</p>
                <p className="text-xs text-muted">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function Home2Page() {
  return (
    <>
      <VideoHero />
      <InlineStats />
      <DestinationStrip />
      <FeaturedGrid />
      <WhyChooseUs />
      <TestimonialSlider />
      <StatsBanner />
      <NewsletterBanner />
    </>
  );
}

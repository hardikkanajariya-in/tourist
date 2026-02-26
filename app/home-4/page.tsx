"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { packages } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import DestinationGallery from "@/components/DestinationGallery";
import TestimonialSlider from "@/components/TestimonialSlider";
import NewsletterBanner from "@/components/NewsletterBanner";
import StatsBanner from "@/components/StatsBanner";
import {
  ArrowRight,
  ArrowLeft,
  MapPin,
  Clock,
  Star,
  ChevronDown,
  Plane,
} from "lucide-react";

/* ─── Hero Image Carousel ─── */
const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&q=80",
    title: "Kashmir",
    subtitle: "Paradise On Earth",
    desc: "Pristine valleys, snow-capped peaks, and serene lakes await your arrival.",
  },
  {
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&h=1080&fit=crop&q=80",
    title: "Rajasthan",
    subtitle: "Land of Kings",
    desc: "Majestic forts, golden deserts, and a vibrant culture that mesmerizes.",
  },
  {
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1920&h=1080&fit=crop&q=80",
    title: "Goa",
    subtitle: "Sun, Sand & Soul",
    desc: "Tropical beaches, thrilling water sports, and unforgettable sunsets.",
  },
  {
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920&h=1080&fit=crop&q=80",
    title: "Kerala",
    subtitle: "God\u2019s Own Country",
    desc: "Lush backwaters, spice plantations, and tranquil houseboat cruises.",
  },
];

function CarouselHero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % heroSlides.length);
  }, []);

  const goPrev = () => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const t = setInterval(goNext, 7000);
    return () => clearInterval(t);
  }, [goNext]);

  const slide = heroSlides[current];

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background images with crossfade */}
      <AnimatePresence mode="popLayout">
        <motion.img
          key={current}
          src={slide.image}
          alt={slide.title}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.05, opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-secondary/30" />

      {/* Content — left aligned  */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-24">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <MapPin size={14} className="text-primary" />
                <span className="text-xs sm:text-sm font-medium text-white">{slide.title}</span>
              </motion.div>

              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4">
                {slide.subtitle}
              </h1>

              <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-lg mb-8 leading-relaxed">
                {slide.desc}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/packages">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-semibold text-sm shadow-xl shadow-primary/30 flex items-center justify-center gap-2"
                  >
                    <Plane size={16} />
                    Book This Trip
                  </motion.button>
                </Link>
                <Link href="/packages">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold text-sm hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-2"
                  >
                    View All Tours
                    <ArrowRight size={16} />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide navigation — bottom */}
        <div className="absolute bottom-8 sm:bottom-12 right-4 sm:right-8 lg:right-[calc((100vw-80rem)/2+2rem)] flex items-center gap-3">
          <button
            onClick={goPrev}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-primary hover:border-primary flex items-center justify-center text-white transition-all cursor-pointer"
          >
            <ArrowLeft size={18} />
          </button>

          {/* Progress bar */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-white font-medium tabular-nums">
              {String(current + 1).padStart(2, "0")}
            </span>
            <div className="w-16 sm:w-24 h-0.5 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                key={current}
                transition={{ duration: 7, ease: "linear" }}
              />
            </div>
            <span className="text-sm text-white/50 tabular-nums">
              {String(heroSlides.length).padStart(2, "0")}
            </span>
          </div>

          <button
            onClick={goNext}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-primary hover:border-primary flex items-center justify-center text-white transition-all cursor-pointer"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Scroll indicator — bottom center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0"
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

/* ─── Quick Feature Cards ─── */
function FeatureCards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const features = [
    { icon: MapPin, title: "150+ Destinations", desc: "Across India & beyond", color: "from-orange-500 to-red-500" },
    { icon: Star, title: "4.8★ Rating", desc: "By 2,500+ travelers", color: "from-yellow-500 to-amber-500" },
    { icon: Clock, title: "24/7 Support", desc: "Always here for you", color: "from-blue-500 to-indigo-500" },
  ];

  return (
    <section ref={ref} className="relative z-20 -mt-12 sm:-mt-16 px-4 sm:px-6 pb-8 sm:pb-12">
      <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-gray-100 group hover:shadow-2xl transition-shadow"
          >
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
              <f.icon size={20} className="text-white" />
            </div>
            <p className="font-semibold text-secondary text-sm sm:text-base">{f.title}</p>
            <p className="text-xs text-muted mt-0.5">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── Packages Tabs ─── */
const tabCategories = ["All", "Pilgrimage", "Honeymoon", "Adventure", "Wildlife", "Leisure"];

function PackageTabs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? packages.slice(0, 6)
    : packages.filter((p) => p.category === active).slice(0, 6);

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-widest">
            Our Packages
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold text-secondary mt-3">
            Find Your Perfect Trip
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10">
          {tabCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                active === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-white text-secondary border border-gray-200 hover:border-primary/30 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filtered.map((pkg, i) => (
            <PackageCard key={pkg.slug} pkg={pkg} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted py-12">No packages found in this category.</p>
        )}

        <div className="text-center mt-10 sm:mt-12">
          <Link href="/packages">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 border-2 border-primary text-primary rounded-full font-semibold text-sm hover:bg-primary hover:text-white transition-colors"
            >
              Browse All Packages
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function Home4Page() {
  return (
    <>
      <CarouselHero />
      <FeatureCards />
      <PackageTabs />
      <WhyChooseUs />
      <DestinationGallery />
      <StatsBanner />
      <TestimonialSlider />
      <NewsletterBanner />
    </>
  );
}

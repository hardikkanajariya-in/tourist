"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from "lucide-react";
import { testimonials } from "@/data/testimonials";

// avatar gradient per testimonial
const avatarGradients = [
  "from-rose-500 to-orange-400",
  "from-violet-500 to-indigo-400",
  "from-emerald-500 to-teal-400",
  "from-amber-500 to-yellow-400",
  "from-sky-500 to-cyan-400",
];

export default function TestimonialSlider() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goTo = (i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.92,
      rotateY: dir > 0 ? 8 : -8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.92,
      rotateY: dir > 0 ? -8 : 8,
    }),
  };

  const t = testimonials[current];

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-28 bg-secondary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.02] blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs sm:text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <Star size={12} className="fill-primary" />
            Traveler Stories
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold text-white mt-2">
            What Our Travelers Say
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-md mx-auto">
            Real experiences from real travelers who explored with us
          </p>
        </motion.div>

        {/* Main slider area */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Large decorative quote */}
          <div className="absolute -top-4 left-6 sm:left-10 z-20 opacity-20">
            <Quote size={48} className="text-primary sm:w-16 sm:h-16" />
          </div>

          {/* Slider card */}
          <div className="relative min-h-[360px] sm:min-h-[320px] flex items-center" style={{ perspective: "1200px" }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center"
              >
                {/* Avatar + Stars row */}
                <div className="flex flex-col items-center mb-5 sm:mb-6">
                  <div className={`w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br ${avatarGradients[current % avatarGradients.length]} text-white text-lg sm:text-xl font-bold flex items-center justify-center shadow-xl ring-4 ring-white/10 mb-3`}>
                    {t.initials}
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < t.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-600"
                        }
                      />
                    ))}
                    <span className="text-xs text-gray-400 ml-1.5">{t.rating}.0</span>
                  </div>
                </div>

                {/* Review */}
                <blockquote className="text-white/85 text-sm sm:text-base md:text-lg leading-relaxed mb-6 italic max-w-2xl line-clamp-4 sm:line-clamp-none">
                  &ldquo;{t.review}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex flex-col items-center gap-1 w-full px-2">
                  <p className="font-heading text-base sm:text-lg font-bold text-white">
                    {t.name}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs sm:text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-primary shrink-0" />
                      <span className="truncate max-w-[180px] sm:max-w-none">{t.location}</span>
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-500 shrink-0" />
                    <span className="text-primary/80 truncate max-w-[160px] sm:max-w-none">{t.tourType}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation row */}
          <div className="flex items-center justify-between mt-6 sm:mt-8">
            {/* Prev button */}
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary flex items-center justify-center text-white transition-all duration-300 cursor-pointer group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
            </motion.button>

            {/* Progress indicators */}
            <div className="flex items-center gap-2 sm:gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="relative group/dot cursor-pointer p-1"
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  {/* Outer ring for active */}
                  <div className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full transition-all duration-500 ${
                    i === current
                      ? "bg-primary shadow-lg shadow-primary/40 scale-100"
                      : "bg-white/15 scale-75 hover:bg-white/30 hover:scale-90"
                  }`}>
                    {/* Auto-slide progress ring on active dot */}
                    {i === current && !isPaused && (
                      <motion.div
                        className="absolute inset-[-3px] rounded-full border-2 border-primary/40"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1.4, opacity: [0.6, 0] }}
                        transition={{ duration: 6, ease: "linear", repeat: Infinity }}
                        key={`pulse-${current}`}
                      />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Next button */}
            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary flex items-center justify-center text-white transition-all duration-300 cursor-pointer group"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </div>

          {/* Slide counter */}
          <div className="text-center mt-4">
            <span className="text-xs text-gray-500 tabular-nums">
              {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

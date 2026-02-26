"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialSlider() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

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

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0, scale: 0.95 }),
  };

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-28 bg-secondary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-widest">
            Traveler Stories
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold text-white mt-3">
            What Our Travelers Say
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Quote icon */}
          <div className="hidden sm:block absolute -top-6 left-1/2 -translate-x-1/2">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Quote size={20} className="text-primary" />
            </div>
          </div>

          <div className="relative min-h-[320px] sm:min-h-[280px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-center flex flex-col items-center justify-center"
              >
                {/* Avatar */}
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-orange-400 text-white text-lg sm:text-xl font-bold mb-4 shadow-lg shadow-primary/20">
                  {testimonials[current].initials}
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mb-3 sm:mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < testimonials[current].rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-600"
                      }
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-white/85 text-sm sm:text-base md:text-lg leading-relaxed mb-5 italic line-clamp-4 sm:line-clamp-none max-w-2xl">
                  &ldquo;{testimonials[current].review}&rdquo;
                </p>

                {/* Author */}
                <p className="font-heading text-base sm:text-lg font-bold text-white">
                  {testimonials[current].name}
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  {testimonials[current].location} · {testimonials[current].tourType}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary flex items-center justify-center text-white transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-6" : "bg-white/20 w-2 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary flex items-center justify-center text-white transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

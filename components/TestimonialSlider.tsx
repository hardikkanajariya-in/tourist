"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialSlider() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary relative overflow-hidden">
      <motion.div
        className="absolute top-10 left-10 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Traveler Stories
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3">
            What Our Travelers Say
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="glass rounded-3xl p-8 md:p-10 text-center"
          >
            {/* Avatar */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-xl font-bold mb-5">
              {testimonials[current].initials}
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={
                    i < testimonials[current].rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-500"
                  }
                />
              ))}
            </div>

            {/* Review */}
            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6 italic">
              &ldquo;{testimonials[current].review}&rdquo;
            </p>

            {/* Author */}
            <p className="font-heading text-lg font-bold text-white">
              {testimonials[current].name}
            </p>
            <p className="text-sm text-gray-400">
              {testimonials[current].location} · {testimonials[current].tourType}
            </p>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

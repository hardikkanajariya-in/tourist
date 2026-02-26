"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const destinations = [
  { name: "Vaishno Devi", image: "https://images.unsplash.com/photo-1591018653367-4e4f0b946792?w=800&h=600&fit=crop&q=80", span: "col-span-2 row-span-2", tours: "12 Tours" },
  { name: "Ladakh", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&q=80", span: "col-span-1 row-span-1", tours: "8 Tours" },
  { name: "Rajasthan", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop&q=80", span: "col-span-1 row-span-1", tours: "15 Tours" },
  { name: "Goa", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop&q=80", span: "col-span-1 row-span-2", tours: "10 Tours" },
  { name: "Kerala", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop&q=80", span: "col-span-1 row-span-1", tours: "9 Tours" },
  { name: "Andaman", image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop&q=80", span: "col-span-1 row-span-1", tours: "6 Tours" },
];

export default function DestinationGallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-widest">
            Popular Destinations
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold text-secondary mt-3">
            Explore Iconic Destinations
          </h2>
          <p className="text-muted mt-3 max-w-lg mx-auto text-sm sm:text-base">
            Discover the most sought-after travel spots across India
          </p>
        </motion.div>

        {/* Mobile: scrollable cards, Desktop: bento grid */}
        <div className="block md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative min-w-[260px] sm:min-w-[300px] h-[200px] rounded-2xl overflow-hidden snap-start shrink-0 group cursor-pointer"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-end p-5">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white">{dest.name}</h3>
                    <span className="text-xs text-white/70">{dest.tours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="hidden md:grid grid-cols-3 auto-rows-[180px] gap-4">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer group ${dest.span}`}
            >
              <img
                src={dest.image}
                alt={dest.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-6 lg:p-8">
                <div className="transform group-hover:translate-y-0 translate-y-1 transition-transform duration-300">
                  <h3 className="font-heading text-xl lg:text-2xl font-bold text-white mb-1">
                    {dest.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-white/70">{dest.tours}</span>
                    <Link
                      href="/packages"
                      className="text-xs font-semibold text-white bg-primary/80 hover:bg-primary px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                    >
                      Explore →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

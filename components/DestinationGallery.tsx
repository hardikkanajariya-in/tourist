"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const destinations = [
  { name: "Vaishno Devi", image: "https://images.unsplash.com/photo-1585135497273-1a86d9d9108e?w=800&h=600&fit=crop&q=80", span: "md:col-span-2 md:row-span-2" },
  { name: "Ladakh", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&q=80", span: "md:col-span-1 md:row-span-1" },
  { name: "Rajasthan", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop&q=80", span: "md:col-span-1 md:row-span-1" },
  { name: "Goa", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop&q=80", span: "md:col-span-1 md:row-span-2" },
  { name: "Kerala", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop&q=80", span: "md:col-span-1 md:row-span-1" },
  { name: "Andaman", image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop&q=80", span: "md:col-span-1 md:row-span-1" },
];

export default function DestinationGallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Popular Destinations
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary mt-3">
            Explore Iconic Destinations
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[160px] gap-4">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${dest.span}`}
            >
              <img
                src={dest.image}
                alt={dest.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-6">
                <div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-1">
                    {dest.name}
                  </h3>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="inline-block text-xs font-semibold text-white bg-primary/80 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Explore →
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

export default function NewsletterBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section ref={ref} className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-orange-500 to-amber-500" />
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Get Exclusive Travel Deals & Itinerary Inspirations
          </h2>
          <p className="text-white/80 mb-8 text-sm md:text-base">
            Subscribe to our newsletter and never miss out on special offers, new packages, and travel tips.
          </p>

          {subscribed ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-white"
            >
              <p className="text-lg font-semibold">🎉 Thank you for subscribing!</p>
              <p className="text-sm mt-1 text-white/80">You&apos;ll hear from us soon with exciting travel deals.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="px-6 py-3.5 bg-secondary text-white rounded-full font-semibold text-sm flex items-center justify-center gap-2 hover:bg-secondary/90 transition-colors"
              >
                <Send size={16} />
                Subscribe
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

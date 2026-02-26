"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle, Sparkles } from "lucide-react";

export default function NewsletterBanner() {
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
    <section className="relative py-14 sm:py-20 md:py-24 overflow-hidden bg-gradient-to-br from-primary via-primary to-orange-600">
      {/* decorative shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-white/3 blur-[60px]" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-1.5 bg-white/15 text-white text-xs sm:text-sm font-medium px-3 py-1 rounded-full mb-5 backdrop-blur-sm">
            <Sparkles size={14} />
            Stay Updated
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-3 sm:mb-4">
            Get Travel Inspiration
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-lg mx-auto mb-8">
            Subscribe to our newsletter and receive handpicked travel deals, destination guides and insider tips.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {subscribed ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center justify-center gap-2 text-white text-base sm:text-lg font-medium"
            >
              <CheckCircle size={22} />
              Thank you for subscribing!
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/40 text-sm sm:text-base"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 transition-colors duration-200 text-sm sm:text-base cursor-pointer"
              >
                Subscribe
                <Send size={16} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function FloatingCTA() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          className="absolute bottom-full right-0 mb-2 bg-secondary text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg"
        >
          Chat with us on WhatsApp
          <div className="absolute -bottom-1 right-4 w-2 h-2 bg-secondary rotate-45" />
        </motion.div>
      )}
      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-xl shadow-green-500/30 text-white"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white" />
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-green-400"
          animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.a>
    </div>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function FloatingCTA() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-xl shadow-xl px-4 py-3 text-sm text-gray-700 max-w-[200px] border border-gray-100"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-1.5 -right-1.5 bg-gray-100 rounded-full p-0.5 hover:bg-gray-200 transition-colors cursor-pointer"
            >
              <X size={12} />
            </button>
            <p className="font-medium text-secondary mb-0.5">Need help?</p>
            <p className="text-xs text-gray-500">Chat with us on WhatsApp</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => setShowTooltip(false)}
        className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors duration-200"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        <MessageCircle size={24} className="relative z-10" />
      </motion.a>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Compass, Calendar, Users } from "lucide-react";

export default function HomeSearchBar() {
  return (
    <section className="relative z-20 -mt-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-5xl glass-white rounded-3xl shadow-2xl p-6 md:p-8"
      >
        {/* Filters grid: 1 col mobile → 2 col sm → inline row lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Destination */}
          <div className="space-y-1.5">
            <label className="flex items-center gap-1.5 text-xs font-semibold text-secondary uppercase tracking-wider">
              <MapPin size={14} className="text-primary" />
              Destination
            </label>
            <select className="w-full px-3 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-secondary focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none cursor-pointer">
              <option value="">Where to?</option>
              <option>Kashmir</option>
              <option>Ladakh</option>
              <option>Rajasthan</option>
              <option>Goa</option>
              <option>Kerala</option>
              <option>Andaman</option>
              <option>Uttarakhand</option>
              <option>Maldives</option>
            </select>
          </div>

          {/* Tour Type */}
          <div className="space-y-1.5">
            <label className="flex items-center gap-1.5 text-xs font-semibold text-secondary uppercase tracking-wider">
              <Compass size={14} className="text-primary" />
              Tour Type
            </label>
            <select className="w-full px-3 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-secondary focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none cursor-pointer">
              <option value="">All Types</option>
              <option>Pilgrimage</option>
              <option>Honeymoon</option>
              <option>Adventure</option>
              <option>Wildlife</option>
              <option>Leisure</option>
              <option>Festival</option>
            </select>
          </div>

          {/* Travel Month */}
          <div className="space-y-1.5">
            <label className="flex items-center gap-1.5 text-xs font-semibold text-secondary uppercase tracking-wider">
              <Calendar size={14} className="text-primary" />
              Travel Month
            </label>
            <select className="w-full px-3 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-secondary focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none cursor-pointer">
              <option value="">Any Month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          </div>

          {/* Group Size */}
          <div className="space-y-1.5">
            <label className="flex items-center gap-1.5 text-xs font-semibold text-secondary uppercase tracking-wider">
              <Users size={14} className="text-primary" />
              Group Size
            </label>
            <select className="w-full px-3 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-secondary focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none cursor-pointer">
              <option value="">Any Size</option>
              <option>1-2 Persons</option>
              <option>3-5 Persons</option>
              <option>6-10 Persons</option>
              <option>10+ Persons</option>
            </select>
          </div>
        </div>

        {/* Search Button — always full width below filters on mobile/tablet, inline on lg */}
        <div className="mt-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-semibold text-sm shadow-lg shadow-primary/20 hover:bg-primary-dark transition-colors cursor-pointer"
          >
            <Search size={16} />
            Search Tours
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

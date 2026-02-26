"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Clock,
  Users,
  Star,
  Check,
  X,
  ChevronDown,
  Shield,
  CreditCard,
  RotateCcw,
  Mountain,
} from "lucide-react";
import type { TourPackage } from "@/data/packages";

const categoryGalleryImages: Record<string, string[]> = {
  Pilgrimage: [
    "https://images.unsplash.com/photo-1591018653367-4e4f0b946792?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=400&fit=crop&q=80",
  ],
  Honeymoon: [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1520483691742-bada60a1a1f0?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=400&fit=crop&q=80",
  ],
  Adventure: [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=400&fit=crop&q=80",
  ],
  Wildlife: [
    "https://images.unsplash.com/photo-1549366021-9f761d450615?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=400&fit=crop&q=80",
  ],
  Leisure: [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=400&fit=crop&q=80",
  ],
  Festival: [
    "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1591018653367-4e4f0b946792?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=400&fit=crop&q=80",
  ],
};

interface Props {
  pkg: TourPackage;
  gradient: string;
}

export default function PackageDetailClient({ pkg, gradient }: Props) {
  const [openDay, setOpenDay] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    travelDate: "",
    persons: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} />
              <Link href="/packages" className="hover:text-white transition-colors">Packages</Link>
              <ChevronRight size={14} />
              <span className="text-white">{pkg.title}</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              {pkg.badge && (
                <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                  {pkg.badge}
                </span>
              )}
              <span className="text-white/80 text-sm">{pkg.category}</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">
              {pkg.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
              <span className="flex items-center gap-1.5">
                <Clock size={16} /> {pkg.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <Users size={16} /> {pkg.groupSize}
              </span>
              <span className="flex items-center gap-1.5">
                <Mountain size={16} /> {pkg.difficulty}
              </span>
              <span className="flex items-center gap-1.5">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                {pkg.rating} ({pkg.reviews} reviews)
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-10">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
              >
                <h2 className="font-heading text-2xl font-bold text-secondary mb-4">Package Overview</h2>
                <p className="text-muted leading-relaxed">{pkg.description}</p>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <Clock size={20} className="text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted">Duration</p>
                    <p className="text-sm font-semibold text-secondary">{pkg.duration}</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <Users size={20} className="text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted">Group Size</p>
                    <p className="text-sm font-semibold text-secondary">{pkg.groupSize}</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <Mountain size={20} className="text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted">Difficulty</p>
                    <p className="text-sm font-semibold text-secondary">{pkg.difficulty}</p>
                  </div>
                </div>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
              >
                <h2 className="font-heading text-2xl font-bold text-secondary mb-4">Highlights</h2>
                <ul className="space-y-3">
                  {pkg.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={14} className="text-primary" />
                      </div>
                      <span className="text-sm text-muted">{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Day-wise Itinerary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
              >
                <h2 className="font-heading text-2xl font-bold text-secondary mb-6">Day-wise Itinerary</h2>
                <div className="space-y-3">
                  {pkg.itinerary.map((item, i) => (
                    <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenDay(openDay === i ? null : i)}
                        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-primary text-white text-xs font-bold flex items-center justify-center">
                            D{item.day}
                          </span>
                          <span className="font-semibold text-secondary text-sm">{item.title}</span>
                        </div>
                        <ChevronDown
                          size={18}
                          className={`text-muted transition-transform ${openDay === i ? "rotate-180" : ""}`}
                        />
                      </button>
                      {openDay === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          className="px-4 pb-4"
                        >
                          <p className="text-sm text-muted pl-11 leading-relaxed">{item.description}</p>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Inclusions / Exclusions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
              >
                <h2 className="font-heading text-2xl font-bold text-secondary mb-6">Inclusions & Exclusions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-green-700 text-sm mb-3 flex items-center gap-2">
                      <Check size={16} /> What&apos;s Included
                    </h3>
                    <ul className="space-y-2.5">
                      {pkg.inclusions.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted">
                          <Check size={14} className="text-green-500 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-700 text-sm mb-3 flex items-center gap-2">
                      <X size={16} /> What&apos;s Not Included
                    </h3>
                    <ul className="space-y-2.5">
                      {pkg.exclusions.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted">
                          <X size={14} className="text-red-400 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
              >
                <h2 className="font-heading text-2xl font-bold text-secondary mb-6">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {(categoryGalleryImages[pkg.category] || categoryGalleryImages.Leisure).map((imgUrl, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-xl overflow-hidden cursor-pointer group"
                    >
                      <img
                        src={imgUrl}
                        alt={`${pkg.title} gallery ${i + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* FAQs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
              >
                <h2 className="font-heading text-2xl font-bold text-secondary mb-6">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {pkg.faqs.map((faq, i) => (
                    <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-left"
                      >
                        <span className="font-semibold text-secondary text-sm pr-4">{faq.question}</span>
                        <ChevronDown
                          size={18}
                          className={`text-muted shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                        />
                      </button>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          className="px-4 pb-4"
                        >
                          <p className="text-sm text-muted leading-relaxed">{faq.answer}</p>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Price Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <p className="text-sm text-muted">Starting from</p>
                  <div className="flex items-baseline gap-2 mt-1 mb-1">
                    <span className="text-3xl font-bold text-primary font-heading">
                      ₹{pkg.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-sm text-muted">/ person</span>
                  </div>
                  <span className="text-sm text-muted line-through">
                    ₹{pkg.originalPrice.toLocaleString("en-IN")}
                  </span>
                  <span className="ml-2 text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                    Save {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}%
                  </span>
                </motion.div>

                {/* Enquiry Form */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <h3 className="font-heading text-lg font-bold text-secondary mb-4">Send Enquiry</h3>
                  {submitted ? (
                    <div className="text-center py-6">
                      <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                        <Check size={28} className="text-green-600" />
                      </div>
                      <p className="font-semibold text-secondary">Enquiry Sent!</p>
                      <p className="text-sm text-muted mt-1">We&apos;ll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                      <input
                        type="date"
                        value={formData.travelDate}
                        onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                      <select
                        value={formData.persons}
                        onChange={(e) => setFormData({ ...formData, persons: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      >
                        <option value="">No. of Persons</option>
                        <option>1-2</option>
                        <option>3-5</option>
                        <option>6-10</option>
                        <option>10+</option>
                      </select>
                      <textarea
                        placeholder="Any special requests?"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                      />
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full py-3 bg-primary text-white rounded-xl font-semibold text-sm shadow-lg shadow-primary/20 hover:bg-primary-dark transition-colors"
                      >
                        Send Enquiry
                      </motion.button>
                    </form>
                  )}
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
                >
                  <div className="space-y-3">
                    {[
                      { icon: Shield, label: "Secure Booking" },
                      { icon: CreditCard, label: "No Hidden Charges" },
                      { icon: RotateCcw, label: "Free Cancellation" },
                    ].map((badge) => (
                      <div key={badge.label} className="flex items-center gap-3 text-sm text-muted">
                        <badge.icon size={18} className="text-green-500" />
                        {badge.label}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
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
  MapPin,
  Camera,
  Phone,
  Share2,
  Heart,
} from "lucide-react";
import type { TourPackage } from "@/data/packages";
import { cn } from "@/lib/utils";

const categoryGalleryImages: Record<string, string[]> = {
  Pilgrimage: [
    "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=400&h=400&fit=crop&q=80",
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
    "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=400&h=400&fit=crop&q=80",
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
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    travelDate: "",
    persons: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const discount = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden min-h-[50vh] sm:min-h-[55vh] flex items-end">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 via-transparent to-transparent" />

        {/* Floating action buttons */}
        <div className="absolute top-24 sm:top-28 right-4 sm:right-8 flex gap-2 z-20">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition cursor-pointer"
            aria-label="Share"
          >
            <Share2 size={16} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-red-500/80 hover:border-red-500/80 transition cursor-pointer"
            aria-label="Wishlist"
          >
            <Heart size={16} />
          </motion.button>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-xs sm:text-sm text-white/60 mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link href="/packages" className="hover:text-white transition-colors">Packages</Link>
              <ChevronRight size={12} />
              <span className="text-white/90 truncate max-w-[200px]">{pkg.title}</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
              {pkg.badge && (
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-primary to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                  {pkg.badge}
                </span>
              )}
              <span className="text-white/60 text-xs sm:text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">{pkg.category}</span>
            </div>
            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {pkg.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-white/80">
              {[
                { icon: Clock, text: pkg.duration },
                { icon: Users, text: pkg.groupSize },
                { icon: Mountain, text: pkg.difficulty },
              ].map((item) => (
                <span key={item.text} className="flex items-center gap-1.5 text-xs sm:text-sm bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <item.icon size={14} className="text-primary" /> {item.text}
                </span>
              ))}
              <span className="flex items-center gap-1.5 text-xs sm:text-sm bg-yellow-500/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                <span className="text-yellow-200 font-semibold">{pkg.rating}</span>
                <span className="text-white/50">({pkg.reviews} reviews)</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick info strip */}
      <section className="bg-white border-b border-gray-100 sticky top-16 sm:top-[4.5rem] z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 overflow-x-auto gap-4 scrollbar-hide">
            <div className="flex items-center gap-4 sm:gap-6 shrink-0">
              <span className="flex items-center gap-1.5 text-xs sm:text-sm text-muted whitespace-nowrap">
                <MapPin size={14} className="text-primary" />
                {pkg.destinations.join(" → ")}
              </span>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <div className="text-right">
                <span className="text-xs text-muted line-through block leading-none">₹{pkg.originalPrice.toLocaleString("en-IN")}</span>
                <span className="text-lg sm:text-xl font-bold text-primary font-heading">₹{pkg.price.toLocaleString("en-IN")}</span>
                <span className="text-[10px] text-muted"> / person</span>
              </div>
              <Link href="#enquiry-form">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-primary to-orange-500 text-white text-xs sm:text-sm font-semibold rounded-full shadow-md shadow-primary/20 cursor-pointer whitespace-nowrap"
                >
                  Book Now
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 md:py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm border border-gray-100"
              >
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-secondary mb-4">Package Overview</h2>
                <p className="text-sm sm:text-base text-muted leading-relaxed">{pkg.description}</p>
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6">
                  {[
                    { icon: Clock, label: "Duration", value: pkg.duration },
                    { icon: Users, label: "Group Size", value: pkg.groupSize },
                    { icon: Mountain, label: "Difficulty", value: pkg.difficulty },
                  ].map((item) => (
                    <div key={item.label} className="text-center p-3 sm:p-4 bg-gradient-to-br from-gray-50 to-primary/5 rounded-xl sm:rounded-2xl border border-gray-100">
                      <item.icon size={20} className="text-primary mx-auto mb-2" />
                      <p className="text-[10px] sm:text-xs text-muted">{item.label}</p>
                      <p className="text-xs sm:text-sm font-semibold text-secondary">{item.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm border border-gray-100"
              >
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-secondary mb-4">Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pkg.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-green-50/50 border border-green-100/50">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-white" />
                      </div>
                      <span className="text-xs sm:text-sm text-secondary/80">{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Day-wise Itinerary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm border border-gray-100"
              >
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-secondary mb-6">Day-wise Itinerary</h2>
                <div className="space-y-3">
                  {pkg.itinerary.map((item, i) => (
                    <div key={i} className={cn(
                      "border rounded-xl sm:rounded-2xl overflow-hidden transition-all",
                      openDay === i ? "border-primary/30 shadow-md shadow-primary/5" : "border-gray-100"
                    )}>
                      <button
                        onClick={() => setOpenDay(openDay === i ? null : i)}
                        className="w-full flex items-center justify-between p-3.5 sm:p-4 hover:bg-gray-50/50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className={cn(
                            "w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl text-white text-xs sm:text-sm font-bold flex items-center justify-center transition-all shrink-0",
                            openDay === i
                              ? "bg-gradient-to-br from-primary to-orange-500 shadow-md shadow-primary/20"
                              : "bg-gray-200 text-secondary"
                          )}>
                            D{item.day}
                          </span>
                          <span className={cn(
                            "font-semibold text-xs sm:text-sm text-left transition-colors",
                            openDay === i ? "text-primary" : "text-secondary"
                          )}>{item.title}</span>
                        </div>
                        <ChevronDown
                          size={16}
                          className={cn("text-muted transition-transform shrink-0 ml-2", openDay === i && "rotate-180 text-primary")}
                        />
                      </button>
                      <AnimatePresence>
                        {openDay === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 pb-4 pl-[3.25rem] sm:pl-[4rem]">
                              <p className="text-xs sm:text-sm text-muted leading-relaxed">{item.description}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Inclusions / Exclusions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm border border-gray-100"
              >
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-secondary mb-6">Inclusions & Exclusions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50/50 rounded-2xl p-4 sm:p-5 border border-green-100/50">
                    <h3 className="font-semibold text-green-700 text-sm mb-3 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                        <Check size={12} className="text-white" />
                      </div>
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-2.5">
                      {pkg.inclusions.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-secondary/70">
                          <Check size={14} className="text-green-500 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50/50 rounded-2xl p-4 sm:p-5 border border-red-100/50">
                    <h3 className="font-semibold text-red-700 text-sm mb-3 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                        <X size={12} className="text-white" />
                      </div>
                      What&apos;s Not Included
                    </h3>
                    <ul className="space-y-2.5">
                      {pkg.exclusions.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-secondary/70">
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
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-secondary">Gallery</h2>
                  <span className="flex items-center gap-1.5 text-xs text-muted">
                    <Camera size={14} className="text-primary" />
                    {(categoryGalleryImages[pkg.category] || categoryGalleryImages.Leisure).length} Photos
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                  {(categoryGalleryImages[pkg.category] || categoryGalleryImages.Leisure).map((imgUrl, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setLightboxImg(imgUrl)}
                      className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group relative"
                    >
                      <img
                        src={imgUrl}
                        alt={`${pkg.title} gallery ${i + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <Camera size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* FAQs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm border border-gray-100"
              >
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-secondary mb-6">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {pkg.faqs.map((faq, i) => (
                    <div key={i} className={cn(
                      "border rounded-xl sm:rounded-2xl overflow-hidden transition-all",
                      openFaq === i ? "border-primary/30 shadow-sm" : "border-gray-100"
                    )}>
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between p-3.5 sm:p-4 hover:bg-gray-50/50 transition-colors text-left cursor-pointer"
                      >
                        <span className={cn(
                          "font-semibold text-xs sm:text-sm pr-4 transition-colors",
                          openFaq === i ? "text-primary" : "text-secondary"
                        )}>{faq.question}</span>
                        <ChevronDown
                          size={16}
                          className={cn("text-muted shrink-0 transition-transform", openFaq === i && "rotate-180 text-primary")}
                        />
                      </button>
                      <AnimatePresence>
                        {openFaq === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 pb-4">
                              <p className="text-xs sm:text-sm text-muted leading-relaxed">{faq.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-5">
                {/* Price Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-lg border border-gray-100 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
                  <p className="text-xs text-muted">Starting from</p>
                  <div className="flex items-baseline gap-2 mt-1 mb-1">
                    <span className="text-2xl sm:text-3xl font-bold text-primary font-heading">
                      ₹{pkg.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs sm:text-sm text-muted">/ person</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-muted line-through">
                      ₹{pkg.originalPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                      Save {discount}%
                    </span>
                  </div>

                  {/* Destinations */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {pkg.destinations.map((d) => (
                      <span key={d} className="inline-flex items-center gap-1 text-[11px] px-2 py-1 bg-gray-50 rounded-full text-secondary/70 border border-gray-100">
                        <MapPin size={10} className="text-primary" />{d}
                      </span>
                    ))}
                  </div>

                  {/* Quick CTA */}
                  <a href="tel:+919876543210">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-gradient-to-r from-primary to-orange-500 text-white rounded-xl sm:rounded-2xl font-semibold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 cursor-pointer mb-2"
                    >
                      <Phone size={16} />
                      Call to Book
                    </motion.button>
                  </a>
                </motion.div>

                {/* Enquiry Form */}
                <motion.div
                  id="enquiry-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-lg border border-gray-100"
                >
                  <h3 className="font-heading text-lg font-bold text-secondary mb-4">Send Enquiry</h3>
                  {submitted ? (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-6"
                    >
                      <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                        <Check size={28} className="text-green-600" />
                      </div>
                      <p className="font-semibold text-secondary">Enquiry Sent!</p>
                      <p className="text-xs sm:text-sm text-muted mt-1">We&apos;ll get back to you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      {[
                        { type: "text", placeholder: "Your Name", key: "name" },
                        { type: "tel", placeholder: "Phone Number", key: "phone" },
                        { type: "email", placeholder: "Email Address", key: "email" },
                      ].map((field) => (
                        <input
                          key={field.key}
                          type={field.type}
                          placeholder={field.placeholder}
                          required
                          value={formData[field.key as keyof typeof formData]}
                          onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all"
                        />
                      ))}
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="date"
                          value={formData.travelDate}
                          onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                        <select
                          value={formData.persons}
                          onChange={(e) => setFormData({ ...formData, persons: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                        >
                          <option value="">Persons</option>
                          <option>1-2</option>
                          <option>3-5</option>
                          <option>6-10</option>
                          <option>10+</option>
                        </select>
                      </div>
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
                        className="w-full py-3 bg-secondary text-white rounded-xl font-semibold text-sm shadow-lg hover:bg-secondary/90 transition-colors cursor-pointer"
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
                  className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-sm border border-gray-100"
                >
                  <div className="space-y-3">
                    {[
                      { icon: Shield, label: "Secure Booking", desc: "100% safe & verified" },
                      { icon: CreditCard, label: "No Hidden Charges", desc: "Transparent pricing" },
                      { icon: RotateCcw, label: "Free Cancellation", desc: "Up to 48hrs before" },
                    ].map((badge) => (
                      <div key={badge.label} className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                          <badge.icon size={16} className="text-green-500" />
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-medium text-secondary">{badge.label}</p>
                          <p className="text-[10px] text-muted">{badge.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={lightboxImg.replace("w=400&h=400", "w=1200&h=900")}
              alt="Gallery preview"
              className="max-w-full max-h-[80vh] object-contain rounded-2xl"
            />
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition cursor-pointer"
            >
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

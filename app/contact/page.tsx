"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Send,
  Check,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, "")))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden min-h-[40vh] sm:min-h-[45vh] flex items-end">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=900&fit=crop&q=80"
          alt="Contact WanderNest"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-transparent to-transparent" />

        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-primary/15 blur-3xl"
          animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-xs sm:text-sm text-white/60 mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span className="text-white/90">Contact</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-3">
              Get In <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-white/60 max-w-xl text-sm sm:text-base">
              Have a question or ready to plan your next trip? We&apos;d love to hear from you. Reach out and our team will get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-10 sm:py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-5 sm:mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4 sm:space-y-5">
                  <a href="tel:+919876543210" className="flex items-start gap-3 sm:gap-4 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/10 to-orange-500/10 flex items-center justify-center shrink-0 group-hover:from-primary group-hover:to-orange-500 transition-all duration-300">
                      <Phone size={18} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-muted">Phone</p>
                      <p className="font-semibold text-sm sm:text-base text-secondary">+91 98765 43210</p>
                    </div>
                  </a>

                  <a href="mailto:hello@wandernestholidays.com" className="flex items-start gap-3 sm:gap-4 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/10 to-orange-500/10 flex items-center justify-center shrink-0 group-hover:from-primary group-hover:to-orange-500 transition-all duration-300">
                      <Mail size={18} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-muted">Email</p>
                      <p className="font-semibold text-sm sm:text-base text-secondary">hello@wandernestholidays.com</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/10 to-orange-500/10 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-muted">Address</p>
                      <p className="font-semibold text-sm sm:text-base text-secondary">
                        101, Shivam Complex, Rajkot, Gujarat - 360001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/10 to-orange-500/10 flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-muted">Office Hours</p>
                      <p className="font-semibold text-sm sm:text-base text-secondary">Mon – Sat, 9:00 AM – 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-heading text-base sm:text-lg font-bold text-secondary mb-3 sm:mb-4">Follow Us</h3>
                <div className="flex gap-2.5">
                  {[
                    { icon: Facebook, label: "Facebook", href: "#", color: "hover:bg-blue-600" },
                    { icon: Instagram, label: "Instagram", href: "#", color: "hover:bg-pink-600" },
                    { icon: Youtube, label: "YouTube", href: "#", color: "hover:bg-red-600" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gray-100 flex items-center justify-center text-muted ${social.color} hover:text-white transition-all duration-300`}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Image */}
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
                <div className="aspect-[16/9] relative">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=450&fit=crop&q=80"
                    alt="Office location map"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="text-center bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3 sm:py-4 shadow-lg border border-white/50">
                      <MapPin size={24} className="text-primary mx-auto mb-1" />
                      <p className="text-sm font-semibold text-secondary">Rajkot, Gujarat</p>
                      <p className="text-[10px] text-muted">Click to open in Maps</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-secondary mb-5 sm:mb-6 relative">
                  Send Us a Message
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <Check size={32} className="text-green-600" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-secondary mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                      }}
                      className="mt-4 text-primary font-semibold text-sm hover:underline"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${errors.name ? "border-red-400" : "border-gray-200"} text-sm focus:outline-none focus:ring-2 focus:ring-primary/30`}
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="email"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${errors.email ? "border-red-400" : "border-gray-200"} text-sm focus:outline-none focus:ring-2 focus:ring-primary/30`}
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <input
                          type="tel"
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${errors.phone ? "border-red-400" : "border-gray-200"} text-sm focus:outline-none focus:ring-2 focus:ring-primary/30`}
                        />
                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <input
                      type="text"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />

                    <div>
                      <textarea
                        placeholder="Your Message *"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${errors.message ? "border-red-400" : "border-gray-200"} text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none`}
                      />
                      {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full py-3 sm:py-3.5 bg-gradient-to-r from-primary to-orange-500 text-white rounded-xl sm:rounded-2xl font-semibold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send size={16} />
                      Send Message
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

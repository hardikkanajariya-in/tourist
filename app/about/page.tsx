"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Compass,
  Shield,
  Heart,
  Gem,
} from "lucide-react";
import StatsBanner from "@/components/StatsBanner";

const team = [
  { name: "Vikram Mehta", role: "Founder & CEO", initials: "VM", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80" },
  { name: "Priya Sharma", role: "Head of Operations", initials: "PS", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&q=80" },
  { name: "Arjun Patel", role: "Tour Planning Lead", initials: "AP", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&q=80" },
  { name: "Sneha Reddy", role: "Customer Relations", initials: "SR", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&q=80" },
];

const values = [
  { icon: Compass, title: "Adventure", desc: "We believe in the thrill of discovery and the joy of exploring new horizons." },
  { icon: Shield, title: "Trust", desc: "Transparency, reliability, and honesty form the foundation of every trip we plan." },
  { icon: Heart, title: "Comfort", desc: "Your comfort is our obsession — from handpicked stays to smooth transfers." },
  { icon: Gem, title: "Value for Money", desc: "Premium experiences without premium price tags. Quality travel within your budget." },
];

export default function AboutPage() {
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden min-h-[40vh] sm:min-h-[45vh] flex items-end">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&h=900&fit=crop&q=80"
          alt="About WanderNest"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-transparent to-transparent" />

        <motion.div
          className="absolute top-16 left-10 w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-primary/15 blur-3xl"
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
              <span className="text-white/90">About</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-3">
              About <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-white/60 max-w-xl text-sm sm:text-base">
              The story behind WanderNest Holidays — your trusted travel companion since 2015.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section ref={storyRef} className="py-12 sm:py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden relative group">
                <img
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=800&fit=crop&q=80"
                  alt="WanderNest Holidays - Our Story"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/15 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl px-4 py-3 sm:px-5 sm:py-4">
                  <p className="text-white text-xl sm:text-2xl font-bold font-heading">Since 2015</p>
                  <p className="text-white/70 text-xs sm:text-sm">Crafting memories</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 sm:space-y-6"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs sm:text-sm font-semibold uppercase tracking-wide">
                <Compass size={14} /> Our Story
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary">
                Born From a Love for Travel
              </h2>
              <p className="text-muted leading-relaxed">
                WanderNest Holidays was founded with a single belief — that travel should be joyful, effortless, and within everyone&apos;s reach. What started as a small family-run operation in Rajkot, Gujarat, has grown into a trusted name serving thousands of travelers across India.
              </p>
              <p className="text-muted leading-relaxed">
                Our founder, Vikram Mehta, began organizing pilgrimage tours for local communities in 2015. His attention to detail, genuine care for travelers, and commitment to quality quickly earned WanderNest a loyal following. Today, we offer everything from divine pilgrimages and dreamy honeymoons to thrilling adventures and relaxing getaways.
              </p>
              <p className="text-muted leading-relaxed">
                Every itinerary we craft reflects our core values: affordability, safety, comfort, and unforgettable experiences. Because at WanderNest, you don&apos;t just travel — you create stories worth telling.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-primary to-orange-600 rounded-3xl p-8 md:p-10 text-white"
            >
              <h3 className="font-heading text-2xl font-bold mb-4">🎯 Our Mission</h3>
              <p className="text-white/90 leading-relaxed">
                To make travel accessible, enjoyable, and hassle-free for every Indian family. We strive to deliver exceptional value through carefully planned itineraries, verified accommodations, and genuine hospitality — turning every journey into a cherished memory.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-gradient-to-br from-secondary to-[#16213E] rounded-3xl p-8 md:p-10 text-white"
            >
              <h3 className="font-heading text-2xl font-bold mb-4">🔭 Our Vision</h3>
              <p className="text-white/90 leading-relaxed">
                To become India&apos;s most loved travel company — known for trust, innovation, and heartfelt service. We envision a world where every person can explore the beauty of our incredible country and beyond, regardless of budget or experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef} className="py-12 sm:py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-14"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs sm:text-sm font-semibold uppercase tracking-wide mx-auto">
              <Heart size={14} /> Our Team
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold text-secondary mt-3">
              Meet The People Behind WanderNest
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-center shadow-sm hover:shadow-xl border border-gray-100 transition-all group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mx-auto mb-3 sm:mb-4 ring-3 ring-primary/10 group-hover:ring-primary/30 transition-all">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-heading text-sm sm:text-lg font-bold text-secondary">{member.name}</h3>
                <p className="text-xs sm:text-sm text-muted mt-0.5 sm:mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBanner />

      {/* Values */}
      <section ref={valuesRef} className="py-12 sm:py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-14"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs sm:text-sm font-semibold uppercase tracking-wide mx-auto">
              <Gem size={14} /> Our Values
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold text-secondary mt-3">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-center shadow-sm hover:shadow-xl border border-gray-100 transition-all group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/10 to-orange-500/10 text-primary mb-3 sm:mb-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-orange-500 group-hover:text-white transition-all duration-300">
                  <v.icon size={22} />
                </div>
                <h3 className="font-heading text-sm sm:text-lg font-bold text-secondary mb-1 sm:mb-2">{v.title}</h3>
                <p className="text-xs sm:text-sm text-muted">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

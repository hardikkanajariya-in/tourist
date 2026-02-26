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
  { name: "Vikram Mehta", role: "Founder & CEO", initials: "VM" },
  { name: "Priya Sharma", role: "Head of Operations", initials: "PS" },
  { name: "Arjun Patel", role: "Tour Planning Lead", initials: "AP" },
  { name: "Sneha Reddy", role: "Customer Relations", initials: "SR" },
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
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-secondary via-[#16213E] to-secondary overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          animate={{ x: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-primary">About</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white">
              About Us
            </h1>
            <p className="text-gray-400 mt-3 max-w-xl">
              The story behind WanderNest Holidays — your trusted travel companion since 2015.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section ref={storyRef} className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square rounded-3xl overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=800&fit=crop&q=80"
                  alt="WanderNest Holidays - Our Story"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Story</span>
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
      <section ref={teamRef} className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Team</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary mt-3">
              Meet The People Behind WanderNest
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-xl border border-gray-100 transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent text-white text-2xl font-bold shadow-lg mb-4">
                  {member.initials}
                </div>
                <h3 className="font-heading text-lg font-bold text-secondary">{member.name}</h3>
                <p className="text-sm text-muted mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBanner />

      {/* Values */}
      <section ref={valuesRef} className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">What We Stand For</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary mt-3">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-xl border border-gray-100 transition-shadow group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <v.icon size={26} />
                </div>
                <h3 className="font-heading text-lg font-bold text-secondary mb-2">{v.title}</h3>
                <p className="text-sm text-muted">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

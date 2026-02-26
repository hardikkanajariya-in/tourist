"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const homeVariants = [
  { href: "/", label: "Home 1", desc: "Classic Hero" },
  { href: "/home-2", label: "Home 2", desc: "Video Background" },
  { href: "/home-3", label: "Home 3", desc: "Split Layout" },
  { href: "/home-4", label: "Home 4", desc: "Image Carousel" },
];

const navLinks = [
  { href: "/packages", label: "Packages" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <div className="relative w-10 h-10 flex items-center justify-center">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:rotate-12"
        >
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" className="text-primary" />
          <path d="M20 4 L20 36 M4 20 L36 20" stroke="currentColor" strokeWidth="1.5" className="text-primary/50" />
          <path d="M20 8 L22 18 L20 16 L18 18 Z" fill="currentColor" className="text-primary" />
          <circle cx="20" cy="20" r="3" fill="currentColor" className="text-primary" />
          <path
            d="M14 14 Q20 10 26 14 Q28 18 26 22 Q24 20 20 22 Q16 20 14 22 Q12 18 14 14Z"
            fill="currentColor"
            className="text-primary/20"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-heading text-lg sm:text-xl font-bold leading-tight tracking-tight">
          Wander<span className="text-primary">Nest</span>
        </span>
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-muted leading-none">
          Holidays
        </span>
      </div>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [mobileHomeOpen, setMobileHomeOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname.startsWith("/home-");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setHomeDropdownOpen(false);
    setMobileHomeOpen(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setHomeDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navBg = scrolled || !isHome
    ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5"
    : "bg-transparent";

  const textColor = scrolled || !isHome ? "text-secondary" : "text-white";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        navBg
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-18 md:h-20 items-center justify-between">
          <div className={cn(textColor, "transition-colors duration-300")}>
            <Logo />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Home dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setHomeDropdownOpen(!homeDropdownOpen)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full hover:text-primary flex items-center gap-1 cursor-pointer",
                  textColor,
                  isHome && "text-primary"
                )}
              >
                Home
                <ChevronDown size={14} className={cn("transition-transform duration-200", homeDropdownOpen && "rotate-180")} />
                {isHome && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {homeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 overflow-hidden z-50"
                  >
                    {homeVariants.map((v) => (
                      <Link
                        key={v.href}
                        href={v.href}
                        className={cn(
                          "flex flex-col px-4 py-2.5 hover:bg-primary/5 transition-colors",
                          pathname === v.href && "bg-primary/5"
                        )}
                      >
                        <span className={cn(
                          "text-sm font-medium",
                          pathname === v.href ? "text-primary" : "text-secondary"
                        )}>
                          {v.label}
                        </span>
                        <span className="text-[11px] text-muted">{v.desc}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full hover:text-primary",
                  textColor,
                  pathname === link.href && "text-primary"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className={cn(
                "hidden xl:flex items-center gap-1.5 text-xs font-medium transition-colors",
                textColor,
                "hover:text-primary"
              )}
            >
              <Phone size={14} className="text-primary" />
              +91 98765 43210
            </a>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-gradient-to-r from-primary to-orange-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
              >
                <Phone size={15} />
                Book Now
              </motion.button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn("lg:hidden p-2 rounded-xl transition-colors", textColor, "hover:bg-white/10")}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-16 sm:top-[4.5rem] bg-white z-50 overflow-y-auto"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="px-5 py-6 space-y-1"
            >
              {/* Home Variants Submenu */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <button
                  onClick={() => setMobileHomeOpen((v) => !v)}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-4 rounded-2xl text-base font-medium transition-all",
                    isHome
                      ? "bg-primary/10 text-primary"
                      : "text-secondary hover:bg-gray-50 active:bg-gray-100"
                  )}
                >
                  <span>Home</span>
                  <ChevronDown
                    size={18}
                    className={cn(
                      "transition-transform duration-300",
                      mobileHomeOpen ? "rotate-180" : ""
                    )}
                  />
                </button>
                <AnimatePresence>
                  {mobileHomeOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden pl-4"
                    >
                      {homeVariants.map((variant) => (
                        <Link
                          key={variant.href}
                          href={variant.href}
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileHomeOpen(false);
                          }}
                          className={cn(
                            "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                            pathname === variant.href
                              ? "bg-primary/10 text-primary"
                              : "text-secondary/70 hover:bg-gray-50"
                          )}
                        >
                          <span className={cn(
                            "w-2 h-2 rounded-full flex-shrink-0",
                            pathname === variant.href ? "bg-primary" : "bg-gray-300"
                          )} />
                          <span>
                            <span className="block">{variant.label}</span>
                            <span className="block text-xs text-muted">{variant.desc}</span>
                          </span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-4 py-4 rounded-2xl text-base font-medium transition-all",
                      pathname === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-secondary hover:bg-gray-50 active:bg-gray-100"
                    )}
                  >
                    {link.label}
                    <ChevronRight size={18} className="text-muted" />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-4 space-y-3"
              >
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 text-sm font-medium text-secondary py-3"
                >
                  <Phone size={16} className="text-primary" />
                  +91 98765 43210
                </a>
                <Link href="/contact" className="block">
                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-orange-500 text-white px-6 py-4 rounded-2xl text-sm font-semibold shadow-lg shadow-primary/20">
                    <Phone size={16} />
                    Book Now
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

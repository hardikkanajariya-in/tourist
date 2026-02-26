"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
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
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

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
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
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

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
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
    <Link href="/" className="flex items-center gap-2 group">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform group-hover:rotate-12"
      >
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" className="text-primary" />
        <path
          d="M20 4 L20 36 M4 20 L36 20"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-primary/50"
        />
        <path
          d="M20 8 L22 18 L20 16 L18 18 Z"
          fill="currentColor"
          className="text-primary"
        />
        <circle cx="20" cy="20" r="3" fill="currentColor" className="text-primary" />
        <path
          d="M14 14 Q20 10 26 14 Q28 18 26 22 Q24 20 20 22 Q16 20 14 22 Q12 18 14 14Z"
          fill="currentColor"
          className="text-primary/20"
        />
      </svg>
      <div className="flex flex-col">
        <span className="font-heading text-xl font-bold leading-tight tracking-tight">
          Wander<span className="text-primary">Nest</span>
        </span>
        <span className="text-[10px] uppercase tracking-widest text-muted leading-none">
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navBg = scrolled || !isHome
    ? "bg-white/95 backdrop-blur-md shadow-md"
    : "bg-transparent";

  const textColor = scrolled || !isHome ? "text-secondary" : "text-white";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        navBg
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <div className={cn(textColor)}>
            <Logo />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-primary",
                  textColor,
                  pathname === link.href && "text-primary"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-primary/25 hover:bg-primary-dark transition-colors"
              >
                <Phone size={16} />
                Book Now
              </motion.button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn("md:hidden p-2 rounded-lg", textColor)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t shadow-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-secondary hover:bg-gray-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="block pt-2">
                <button className="w-full flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-xl text-sm font-semibold">
                  <Phone size={16} />
                  Book Now
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

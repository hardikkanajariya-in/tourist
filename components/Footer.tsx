import Link from "next/link";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, ArrowUpRight, Heart } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Tour Packages" },
  { href: "/services", label: "Our Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

const tourCategories = [
  "Pilgrimage Tours",
  "Honeymoon Packages",
  "Adventure Treks",
  "Wildlife Safaris",
  "Leisure Holidays",
  "Festival Special",
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-8 sm:pt-16 sm:pb-10 md:pt-20 md:pb-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-5">
            <div className="flex items-center gap-2.5">
              <svg
                width="36"
                height="36"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="18" stroke="#FF6B35" strokeWidth="2" />
                <path d="M20 4 L20 36 M4 20 L36 20" stroke="#FF6B35" strokeWidth="1.5" opacity="0.5" />
                <path d="M20 8 L22 18 L20 16 L18 18 Z" fill="#FF6B35" />
                <circle cx="20" cy="20" r="3" fill="#FF6B35" />
              </svg>
              <div>
                <span className="font-heading text-xl font-bold">
                  Wander<span className="text-primary">Nest</span>
                </span>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Holidays</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              You Dream. We Take You There. Crafting unforgettable travel experiences across India and beyond since 2015.
            </p>
            <div className="flex gap-2.5">
              {[
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Youtube, label: "YouTube", href: "#" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                >
                  <social.icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base font-bold mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-primary rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group/link flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <ArrowUpRight size={12} className="text-primary opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tour Categories */}
          <div>
            <h4 className="font-heading text-base font-bold mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-primary rounded-full" />
              Tour Categories
            </h4>
            <ul className="space-y-3">
              {tourCategories.map((cat) => (
                <li key={cat}>
                  <Link
                    href="/packages"
                    className="group/link flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <ArrowUpRight size={12} className="text-primary opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-base font-bold mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-primary rounded-full" />
              Contact Info
            </h4>
            <div className="space-y-4">
              <a href="tel:+919876543210" className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors group/contact">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover/contact:bg-primary/20 transition-colors">
                  <Phone size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">+91 98765 43210</p>
                  <p className="text-[11px] text-gray-500">Mon – Sat, 9 AM – 7 PM</p>
                </div>
              </a>
              <a href="mailto:hello@wandernestholidays.com" className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors group/contact">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover/contact:bg-primary/20 transition-colors">
                  <Mail size={16} className="text-primary" />
                </div>
                <p className="text-sm break-all">hello@wandernest<wbr />holidays.com</p>
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-primary" />
                </div>
                <p className="text-sm">101, Shivam Complex,<br />Rajkot, Gujarat - 360001</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} WanderNest Holidays. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-gray-500">
            Built with <Heart size={12} className="text-red-500 fill-red-500" /> by{" "}
            <a
              href="https://hardikkanajariya.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-white font-medium transition-colors"
            >
              hardikkanajariya.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

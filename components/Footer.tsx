import Link from "next/link";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

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
    <footer className="bg-secondary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
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
                <p className="text-[10px] uppercase tracking-widest text-gray-400">Holidays</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              You Dream. We Take You There. Crafting unforgettable travel experiences across India and beyond since 2015.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Youtube, label: "YouTube", href: "#" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tour Categories */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Tour Categories</h4>
            <ul className="space-y-2.5">
              {tourCategories.map((cat) => (
                <li key={cat}>
                  <Link
                    href="/packages"
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a href="tel:+919876543210" className="flex items-start gap-3 text-sm text-gray-400 hover:text-primary transition-colors">
                <Phone size={18} className="shrink-0 mt-0.5 text-primary" />
                +91 98765 43210
              </a>
              <a href="mailto:hello@wandernestholidays.com" className="flex items-start gap-3 text-sm text-gray-400 hover:text-primary transition-colors">
                <Mail size={18} className="shrink-0 mt-0.5 text-primary" />
                hello@wandernestholidays.com
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={18} className="shrink-0 mt-0.5 text-primary" />
                101, Shivam Complex, Rajkot, Gujarat - 360001
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Mon – Sat, 9:00 AM – 7:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-center text-xs text-gray-500">
            © 2025 WanderNest Holidays. All Rights Reserved. | Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
}

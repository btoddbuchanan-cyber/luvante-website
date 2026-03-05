"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Mail, TrendingUp } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/platform", label: "The Luvante Platform" },
];

const contactDropdownItems = [
  {
    href: "/contact",
    label: "Sales & General Inquiries",
    description: "CPO partnerships, fleet charging, and more",
    icon: Mail,
  },
  {
    href: "/invest",
    label: "Investment Opportunities",
    description: "Learn about investing in Luvante",
    icon: TrendingUp,
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-white/10">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="block">
          <Image
            src="/images/logo-white.png"
            alt="Luvante — Elevated EV Charging"
            width={180}
            height={40}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-slate-light hover:text-green transition-colors rounded-md"
            >
              {link.label}
            </Link>
          ))}

          {/* Contact Us Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-light hover:text-green transition-colors rounded-md"
            >
              Contact Us
              <ChevronDown
                size={14}
                className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-72 bg-navy border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                {contactDropdownItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-start gap-3 px-5 py-4 hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-green/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-green/20 transition-colors">
                      <item.icon size={16} className="text-green" />
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-white group-hover:text-green transition-colors">
                        {item.label}
                      </span>
                      <span className="block text-xs text-slate mt-0.5">
                        {item.description}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="ml-4 px-5 py-2.5 bg-green text-navy-dark text-sm font-bold rounded-md hover:bg-green-light transition-colors"
          >
            Get in Touch
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium text-slate-light hover:text-green transition-colors rounded-md"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile: Contact options shown inline */}
            <div className="px-4 pt-3 pb-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate">
                Contact Us
              </span>
            </div>
            {contactDropdownItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-light hover:text-green transition-colors rounded-md"
              >
                <item.icon size={16} className="text-green/60" />
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-5 py-3 bg-green text-navy-dark text-sm font-bold rounded-md hover:bg-green-light transition-colors text-center"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

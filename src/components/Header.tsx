"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/platform", label: "The Luvante Platform" },
  { href: "/invest", label: "Investment Opportunities" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-white/10">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <span className="font-heading text-2xl font-bold tracking-wide text-white group-hover:text-green transition-colors">
              LUVANTE
            </span>
            <span className="text-[10px] tracking-[0.25em] text-slate uppercase">
              Elevated EV Charging
            </span>
          </div>
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
          <Link
            href="/invest"
            className="ml-4 px-5 py-2.5 bg-green text-navy-dark text-sm font-bold rounded-md hover:bg-green-light transition-colors"
          >
            Invest
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
            <Link
              href="/invest"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-5 py-3 bg-green text-navy-dark text-sm font-bold rounded-md hover:bg-green-light transition-colors text-center"
            >
              Invest
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-forest text-cream text-center py-2.5 px-4">
        <p className="font-sans text-xs tracking-widest2 uppercase">
          Free shipping on all orders &nbsp;·&nbsp; Introducing The Face Canopy
        </p>
      </div>

      {/* Navigation */}
      <header
        className={`fixed top-[38px] left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-sm border-b border-sand/60 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl font-semibold tracking-widest2 uppercase text-forest hover:text-gold transition-colors duration-300"
          >
            Coveshade
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-10">
            {[
              { label: "Story", href: "#story" },
              { label: "Features", href: "#features" },
              { label: "Shop", href: "#shop" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-sans text-xs tracking-widest uppercase text-dark/70 hover:text-forest transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#shop"
              className="font-sans text-xs tracking-widest uppercase bg-forest text-cream px-6 py-2.5 hover:bg-forest-light transition-colors duration-300"
            >
              Shop Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-forest transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-forest transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-forest transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-cream border-b border-sand/60 transition-all duration-500 overflow-hidden ${
            menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-6 flex flex-col gap-6">
            {[
              { label: "Story", href: "#story" },
              { label: "Features", href: "#features" },
              { label: "Shop", href: "#shop" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-sans text-sm tracking-widest uppercase text-dark/70 hover:text-forest transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#shop"
              onClick={() => setMenuOpen(false)}
              className="font-sans text-xs tracking-widest uppercase bg-forest text-cream px-6 py-3 text-center hover:bg-forest-light transition-colors"
            >
              Shop Now
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

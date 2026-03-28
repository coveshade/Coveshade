"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-dark text-cream">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="font-display text-2xl font-semibold tracking-widest2 uppercase text-cream mb-4">
              Coveshade
            </p>
            <p className="font-sans font-light text-sm text-cream/60 leading-relaxed max-w-sm mb-8">
              Your private cove, anywhere you lay. Coveshade designs luxury
              beach sun protection for those who seek quality without compromise.
            </p>

            {/* Newsletter */}
            {subscribed ? (
              <div className="border border-gold/30 px-6 py-4 max-w-sm">
                <p className="font-sans text-sm text-gold">
                  Thank you — you&apos;re on the list.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex max-w-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 bg-transparent border border-cream/20 px-4 py-3 font-sans text-xs text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors"
                />
                <button
                  type="submit"
                  className="font-sans text-xs tracking-widest uppercase bg-gold text-dark px-5 py-3 hover:bg-gold-light transition-colors shrink-0"
                >
                  Join
                </button>
              </form>
            )}
            <p className="font-sans text-xs text-cream/40 mt-3">
              Early access, new colourways, and seasonal stories.
            </p>
          </div>

          {/* Shop */}
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-cream/40 mb-6">
              Shop
            </p>
            <ul className="space-y-3">
              {[
                { label: "The Face Canopy", href: "#shop" },
                { label: "New Arrivals", href: "#shop" },
                { label: "Gift Cards", href: "#shop" },
                { label: "Stockists", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans font-light text-sm text-cream/70 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-cream/40 mb-6">
              Support
            </p>
            <ul className="space-y-3">
              {[
                { label: "Shipping & Returns", href: "#" },
                { label: "Care Instructions", href: "#" },
                { label: "FAQ", href: "#" },
                { label: "Contact Us", href: "mailto:hello@coveshade.com" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans font-light text-sm text-cream/70 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-cream/10" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-sans text-xs text-cream/40">
          © {new Date().getFullYear()} Coveshade. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {[
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-xs text-cream/40 hover:text-cream/70 transition-colors"
            >
              {link.label}
            </a>
          ))}
          {/* Social */}
          <div className="flex items-center gap-4 ml-4">
            <a
              href="https://instagram.com/coveshade"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/40 hover:text-cream transition-colors"
              aria-label="Instagram"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://tiktok.com/@coveshade"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/40 hover:text-cream transition-colors"
              aria-label="TikTok"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.77 1.52V6.75a4.85 4.85 0 0 1-1-.06z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

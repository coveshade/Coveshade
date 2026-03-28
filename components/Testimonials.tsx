"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "I've never experienced anything like it at the beach. Total shade, total quiet. It's genuinely changed how I spend my summers.",
    author: "Emma R.",
    location: "Bondi Beach, NSW",
  },
  {
    quote:
      "The quality is exceptional. The fabric feels premium, the setup is ridiculously easy, and the shade it provides is incredible.",
    author: "James T.",
    location: "Noosa, QLD",
  },
  {
    quote:
      "I was sceptical at first but this is now the first thing I pack for the beach. The design is beautiful too — people always ask about it.",
    author: "Sofia M.",
    location: "Cottesloe, WA",
  },
];

export default function Testimonials() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );
    refs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => { refs.current.forEach((el) => { if (el) observer.unobserve(el); }); };
  }, []);

  return (
    <section className="bg-forest py-24 lg:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-4">
            What they&apos;re saying
          </p>
          <h2 className="font-display font-light text-5xl lg:text-6xl text-cream">
            Loved by{" "}
            <em className="italic text-gold">beach-goers.</em>
          </h2>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-forest-light/50">
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              ref={(el) => { refs.current[i] = el; }}
              className={`reveal reveal-delay-${i + 1} bg-forest p-8 lg:p-10 flex flex-col`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="#C49A3C"
                  >
                    <path d="M7 1l1.5 4h4l-3.2 2.4 1.2 4L7 9 3.5 11.4l1.2-4L1.5 5h4z" />
                  </svg>
                ))}
              </div>

              <blockquote className="font-display text-xl lg:text-2xl font-light text-cream/90 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-8 pt-6 border-t border-forest-light/50">
                <p className="font-sans font-medium text-sm text-cream">
                  {t.author}
                </p>
                <p className="font-sans text-xs text-cream/50 tracking-wider mt-0.5">
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Press / As seen in */}
        <div className="mt-20 text-center">
          <p className="font-sans text-xs tracking-widest3 uppercase text-cream/40 mb-8">
            As seen in
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-40">
            {["Vogue Living", "Broadsheet", "The Design Files", "Gourmet Traveller", "RUSSH"].map(
              (pub) => (
                <span
                  key={pub}
                  className="font-display text-lg text-cream tracking-wide"
                >
                  {pub}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

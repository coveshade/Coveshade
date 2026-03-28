"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    number: "01",
    title: "UPF 50+ Protection",
    description:
      "Our proprietary fabric blocks 98% of UV rays, so you can rest without compromise. Your skin, protected.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 2v4M16 26v4M2 16h4M26 16h4M6.34 6.34l2.83 2.83M22.83 22.83l2.83 2.83M6.34 25.66l2.83-2.83M22.83 9.17l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Instant Setup",
    description:
      "Unfolds and stakes in under two minutes. No poles. No frustration. Just you and the shade.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4L4 24h24L16 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16 14v6M16 24v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Integrated Beach Mat",
    description:
      "A generous padded mat is built into the base. Lay back and let the shade come to you.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="12" width="24" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 12C4 8 8 6 16 6s12 2 12 6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 24v4M22 24v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Wind-Resistant Stakes",
    description:
      "Precision-machined stakes anchor deep into any sand. Stay comfortable even when conditions change.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4v24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 12l8-8 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 28l6 0 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Features() {
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
    <section id="features" className="py-24 lg:py-36 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-24 gap-6">
          <div>
            <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-4">
              Engineered for the beach
            </p>
            <h2 className="font-display font-light text-5xl lg:text-6xl text-forest leading-tight">
              Thoughtfully
              <br />
              <em className="italic">designed.</em>
            </h2>
          </div>
          <p className="font-sans font-light text-base text-bark max-w-sm leading-relaxed lg:text-right">
            Every detail of The Face Canopy has been refined over years of
            testing on beaches around the world.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-sand">
          {features.map((feature, i) => (
            <div
              key={feature.number}
              ref={(el) => { refs.current[i] = el; }}
              className={`reveal reveal-delay-${i + 1} bg-cream p-8 lg:p-10 flex flex-col gap-6`}
            >
              <div className="text-gold">{feature.icon}</div>
              <div>
                <p className="font-sans text-xs tracking-widest text-bark/60 mb-2">
                  {feature.number}
                </p>
                <h3 className="font-display text-2xl font-medium text-forest mb-3">
                  {feature.title}
                </h3>
                <p className="font-sans font-light text-sm text-bark leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

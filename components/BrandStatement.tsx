"use client";

import { useEffect, useRef } from "react";

export default function BrandStatement() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.3 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <section id="story" className="bg-forest text-cream py-24 lg:py-36 px-6">
      <div
        ref={ref}
        className="reveal max-w-4xl mx-auto text-center"
      >
        <div className="line-gold mb-12 mx-auto max-w-xs" />

        <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-8">
          The Coveshade Ethos
        </p>

        <blockquote className="font-display font-light text-4xl lg:text-5xl xl:text-6xl leading-[1.2] text-cream">
          &ldquo;Crafted for those who seek shade
          <em className="italic text-gold"> without sacrifice.</em>&rdquo;
        </blockquote>

        <div className="line-gold mt-12 mx-auto max-w-xs" />

        <p className="font-sans font-light text-base text-cream/70 mt-10 max-w-2xl mx-auto leading-relaxed">
          We believe the beach should be enjoyed on your terms. The Coveshade
          Face Canopy is the result of obsessive craft — premium fabrics,
          thoughtful engineering, and an unwillingness to settle for less than
          extraordinary.
        </p>
      </div>
    </section>
  );
}

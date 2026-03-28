"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function ProductShowcase() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    refs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => { refs.current.forEach((el) => { if (el) observer.unobserve(el); }); };
  }, []);

  return (
    <section className="bg-sand/30">
      {/* Panel 1 — Image Left, Text Right */}
      <div className="flex flex-col lg:flex-row min-h-[85vh]">
        {/* Image */}
        <div className="lg:w-1/2 relative min-h-[60vw] lg:min-h-0 bg-[#3A5244]">
          <Image
            src="/images/product-open.jpg"
            alt="Coveshade Face Canopy open view on beach"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Text */}
        <div
          ref={(el) => { refs.current[0] = el; }}
          className="reveal lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-16 bg-cream"
        >
          <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-6">
            The Design
          </p>
          <h2 className="font-display font-light text-5xl lg:text-6xl text-forest leading-tight mb-6">
            A cove
            <br />
            <em className="italic">above you.</em>
          </h2>
          <p className="font-sans font-light text-base text-bark leading-relaxed max-w-md mb-8">
            The arc of The Face Canopy forms a personal cave of cool, dark shade
            directly above your head. The padded mat beneath cradles you as the
            ocean breeze flows freely around you.
          </p>
          <p className="font-sans font-light text-sm text-bark/70 leading-relaxed max-w-md">
            Constructed from solution-dyed recycled polyester with a DWR
            coating — resistant to sand, salt water, and UV degradation. Built
            for a lifetime of summers.
          </p>

          {/* Material tags */}
          <div className="flex flex-wrap gap-3 mt-10">
            {[
              "Recycled Polyester",
              "DWR Coated",
              "UPF 50+",
              "Matte Finish",
            ].map((tag) => (
              <span
                key={tag}
                className="font-sans text-xs tracking-wider uppercase border border-sand text-bark px-4 py-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Panel 2 — Text Left, Image Right */}
      <div className="flex flex-col-reverse lg:flex-row min-h-[85vh]">
        {/* Text */}
        <div
          ref={(el) => { refs.current[1] = el; }}
          className="reveal lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-16 bg-cream"
        >
          <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-6">
            The Experience
          </p>
          <h2 className="font-display font-light text-5xl lg:text-6xl text-forest leading-tight mb-6">
            Total
            <br />
            <em className="italic">privacy.</em>
          </h2>
          <p className="font-sans font-light text-base text-bark leading-relaxed max-w-md mb-8">
            The enclosed dome wraps around your personal space, shielding you
            from the sun&apos;s glare, reducing wind, and creating a quiet retreat
            from a busy beach — without blocking the view or the breeze.
          </p>
          <p className="font-sans font-light text-sm text-bark/70 leading-relaxed max-w-md">
            Available in Forest Green, with more colourways arriving soon. A
            product thoughtfully designed to look as good as it performs.
          </p>

          {/* Dimensions */}
          <div className="mt-10 grid grid-cols-3 gap-6 pt-8 border-t border-sand">
            {[
              { label: "Open", value: "180 × 70 cm" },
              { label: "Canopy", value: "90 × 80 cm" },
              { label: "Packed", value: "40 × 15 cm" },
            ].map((dim) => (
              <div key={dim.label}>
                <p className="font-display text-xl text-forest font-medium">
                  {dim.value}
                </p>
                <p className="font-sans text-xs tracking-widest uppercase text-bark mt-1">
                  {dim.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 relative min-h-[60vw] lg:min-h-0 bg-[#2A4D38]">
          <Image
            src="/images/product-dome.jpg"
            alt="Coveshade Face Canopy dome view"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}

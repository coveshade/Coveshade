"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Unroll & Unfold",
    description:
      "Pull The Face Canopy from its carry pouch and unfold the flexible arc frame. It springs into shape in seconds.",
  },
  {
    number: "02",
    title: "Stake & Position",
    description:
      "Drive the two stakes into the sand to anchor the base. Angle the canopy to face away from the sun.",
  },
  {
    number: "03",
    title: "Lay Back & Relax",
    description:
      "Lie on the integrated mat, tuck in, and let the shade do its work. Your private cove awaits.",
  },
];

export default function HowItWorks() {
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
    <section className="bg-cream py-24 lg:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-4">
            Simple by design
          </p>
          <h2 className="font-display font-light text-5xl lg:text-6xl text-forest">
            Set up in{" "}
            <em className="italic">three steps.</em>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              ref={(el) => { refs.current[i] = el; }}
              className={`reveal reveal-delay-${i + 1} relative flex flex-col px-8 lg:px-12 py-10 border-b lg:border-b-0 lg:border-r border-sand last:border-0`}
            >
              {/* Step number — large background */}
              <span className="font-display text-[8rem] lg:text-[10rem] font-semibold leading-none text-sand/80 absolute top-4 right-6 select-none pointer-events-none">
                {step.number}
              </span>

              <div className="relative z-10">
                <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4">
                  Step {step.number}
                </p>
                <h3 className="font-display text-3xl lg:text-4xl font-medium text-forest mb-4">
                  {step.title}
                </h3>
                <p className="font-sans font-light text-sm text-bark leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#shop"
            className="font-sans text-xs tracking-widest uppercase bg-forest text-cream px-10 py-4 hover:bg-forest-light transition-colors duration-300 inline-block"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
}

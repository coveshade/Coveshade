"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const colors = [
  {
    name: "Forest Green",
    hex: "#1C3829",
    image: "/images/product-open.jpg",
    available: true,
  },
  {
    name: "Sand",
    hex: "#C8B89A",
    image: "/images/product-sand.jpg",
    available: false,
    label: "Coming Soon",
  },
  {
    name: "Midnight",
    hex: "#1A1A2E",
    image: "/images/product-midnight.jpg",
    available: false,
    label: "Coming Soon",
  },
];

export default function ShopSection() {
  const [selectedColor, setSelectedColor] = useState(0);
  const [added, setAdded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  const handleAddToCart = () => {
    if (!colors[selectedColor].available) return;
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <section id="shop" className="bg-sand/20 py-24 lg:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-4">
            The Collection
          </p>
          <h2 className="font-display font-light text-5xl lg:text-6xl text-forest">
            Shop <em className="italic">The Face Canopy</em>
          </h2>
        </div>

        {/* Product Card */}
        <div
          ref={ref}
          className="reveal grid grid-cols-1 lg:grid-cols-2 gap-0 bg-cream max-w-5xl mx-auto"
        >
          {/* Image */}
          <div className="relative aspect-[4/5] bg-[#2A4D38]">
            <Image
              src={colors[selectedColor].image}
              alt={`Coveshade Face Canopy in ${colors[selectedColor].name}`}
              fill
              className="object-cover object-center transition-opacity duration-500"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Color label */}
            <div className="absolute top-5 left-5 bg-cream/90 backdrop-blur-sm px-3 py-1.5">
              <p className="font-sans text-xs tracking-widest uppercase text-bark">
                {colors[selectedColor].name}
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between p-8 lg:p-10 xl:p-14">
            <div>
              <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-2">
                Coveshade
              </p>
              <h3 className="font-display text-4xl lg:text-5xl font-light text-forest mb-2">
                The Face Canopy
              </h3>
              <p className="font-display text-3xl text-forest font-medium mb-8">
                $189
                <span className="font-sans text-sm font-light text-bark ml-3">
                  AUD · inc. GST
                </span>
              </p>

              {/* Short description */}
              <p className="font-sans font-light text-sm text-bark leading-relaxed mb-8">
                UPF 50+ sun protection canopy with integrated beach mat and
                staking system. Free shipping Australia-wide.
              </p>

              {/* Color selection */}
              <div className="mb-8">
                <p className="font-sans text-xs tracking-widest uppercase text-bark mb-3">
                  Colour — {colors[selectedColor].name}
                </p>
                <div className="flex gap-3">
                  {colors.map((color, i) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(i)}
                      title={color.name}
                      className={`relative w-9 h-9 rounded-full border-2 transition-all duration-200 ${
                        selectedColor === i
                          ? "border-forest scale-110"
                          : "border-transparent hover:border-sand"
                      } ${!color.available ? "opacity-50" : ""}`}
                      style={{ backgroundColor: color.hex }}
                    >
                      {!color.available && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="w-6 h-px bg-bark/50 rotate-45 block" />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
                {!colors[selectedColor].available && (
                  <p className="font-sans text-xs text-bark/60 mt-2">
                    {colors[selectedColor].label}
                  </p>
                )}
              </div>

              {/* What's included */}
              <div className="mb-8">
                <p className="font-sans text-xs tracking-widest uppercase text-bark mb-3">
                  What&apos;s Included
                </p>
                <ul className="space-y-1.5">
                  {[
                    "The Face Canopy (canopy + mat)",
                    "2× Precision-machined stakes",
                    "Carry pouch",
                    "Care guide",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-4 h-px bg-gold flex-shrink-0" />
                      <span className="font-sans font-light text-sm text-bark">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Add to cart */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                disabled={!colors[selectedColor].available}
                className={`w-full font-sans text-xs tracking-widest uppercase py-4 transition-all duration-300 ${
                  colors[selectedColor].available
                    ? added
                      ? "bg-gold text-cream"
                      : "bg-forest text-cream hover:bg-forest-light"
                    : "bg-sand text-bark cursor-not-allowed"
                }`}
              >
                {!colors[selectedColor].available
                  ? "Notify Me When Available"
                  : added
                  ? "Added to Cart ✓"
                  : "Add to Cart"}
              </button>
              <p className="font-sans text-xs text-bark/60 text-center tracking-wide">
                Free shipping · 30-day returns · Australian-made
              </p>
            </div>
          </div>
        </div>

        {/* Guarantee Strip */}
        <div className="max-w-5xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-3 gap-px bg-sand">
          {[
            {
              title: "Free Shipping",
              sub: "Australia-wide on all orders",
            },
            {
              title: "30-Day Returns",
              sub: "No questions asked",
            },
            {
              title: "2-Year Warranty",
              sub: "Covered against manufacturing defects",
            },
          ].map((g) => (
            <div key={g.title} className="bg-cream px-8 py-5 text-center">
              <p className="font-display text-lg font-medium text-forest">
                {g.title}
              </p>
              <p className="font-sans text-xs text-bark/70 mt-1">{g.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

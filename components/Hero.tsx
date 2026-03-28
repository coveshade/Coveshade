import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row pt-[78px]">
      {/* Left — Text */}
      <div className="flex flex-col justify-center px-6 lg:px-16 xl:px-24 py-16 lg:py-0 lg:w-[45%] xl:w-[42%] z-10">
        <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-6 animate-fade-in">
          The Face Canopy
        </p>

        <h1 className="font-display font-light text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-forest mb-8 animate-fade-up">
          Your
          <br />
          <em className="italic font-light">Private</em>
          <br />
          Cove.
        </h1>

        <p
          className="font-sans font-light text-base lg:text-lg text-bark leading-relaxed max-w-sm mb-10"
          style={{ animationDelay: "0.2s" }}
        >
          A personal sanctuary of shade wherever you lay. Engineered for the
          beach. Designed for those who refuse to compromise.
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-4">
          <a
            href="#shop"
            className="font-sans text-xs tracking-widest uppercase bg-forest text-cream px-8 py-4 hover:bg-forest-light transition-all duration-300 inline-block"
          >
            Shop Now — $189
          </a>
          <a
            href="#story"
            className="font-sans text-xs tracking-widest uppercase text-forest border border-forest px-8 py-4 hover:bg-forest hover:text-cream transition-all duration-300 inline-block"
          >
            Our Story
          </a>
        </div>

        {/* Trust signals */}
        <div className="flex items-center gap-8 mt-12 pt-8 border-t border-sand">
          {[
            { value: "UPF 50+", label: "Protection" },
            { value: "2 min", label: "Setup" },
            { value: "1.2 kg", label: "Packable" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl font-semibold text-forest">
                {stat.value}
              </p>
              <p className="font-sans text-xs tracking-widest uppercase text-bark mt-0.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right — Product Image */}
      <div className="lg:w-[55%] xl:w-[58%] relative min-h-[60vw] lg:min-h-0 bg-[#2A4D38]">
        <Image
          src="/images/hero.jpg"
          alt="Coveshade Face Canopy on the beach"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 1024px) 100vw, 58vw"
        />
        {/* Subtle gradient overlay to blend with left panel */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream/20 via-transparent to-transparent lg:block hidden" />

        {/* Floating label */}
        <div className="absolute bottom-8 right-8 bg-cream/90 backdrop-blur-sm px-5 py-3 hidden lg:block">
          <p className="font-sans text-xs tracking-widest uppercase text-bark">
            Forest Green
          </p>
          <p className="font-display text-lg text-forest mt-0.5">
            The Original
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-6 lg:left-16 xl:left-24 flex items-center gap-3 hidden lg:flex">
        <div className="w-8 h-px bg-gold" />
        <p className="font-sans text-xs tracking-widest uppercase text-bark">
          Scroll
        </p>
      </div>
    </section>
  );
}

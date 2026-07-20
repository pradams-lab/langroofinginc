import { useEffect, useState } from "react";
import { ArrowRight, Triangle } from "lucide-react";
import heroCommercial from "@/assets/hero-commercial.jpg";
import heroIndustrial from "@/assets/hero-industrial.jpg";
import heroResidential from "@/assets/hero-residential.jpg";

const slides = [
  { src: heroCommercial, alt: "Commercial flat roof installation, Southern California" },
  { src: heroIndustrial, alt: "Industrial refinery roofing project" },
  { src: heroResidential, alt: "Multi-family residential tile roofing" },
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative isolate min-h-screen w-full overflow-hidden bg-navy-deep">
      {/* Carousel */}
      <div className="absolute inset-0">
        {slides.map((s, idx) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            width={1600}
            height={900}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ease-in-out ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Navy gradient overlay left-to-right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(6,21,48,0.95) 0%, rgba(11,37,69,0.85) 35%, rgba(11,37,69,0.35) 70%, rgba(11,37,69,0.05) 100%)",
        }}
      />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-deep to-transparent" />

      {/* Structural grid rules */}
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-[1400px]">
        <div className="absolute left-6 top-0 h-full w-px bg-white/10 lg:left-10" />
        <div className="absolute right-6 top-0 h-full w-px bg-white/10 lg:right-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-end px-6 pb-24 pt-40 lg:px-10 lg:pb-32 lg:pt-44">
        <div className="max-w-3xl">
          <p className="tag-mono flex items-center gap-2 text-white/80">
            <Triangle size={10} className="fill-crimson text-crimson" />
            Since 1974 <span className="text-white/40">//</span> Southern California
          </p>

          <h1 className="mt-6 text-[42px] font-bold leading-[1.02] text-white sm:text-6xl lg:text-[76px]">
            Protecting Southern California&apos;s
            <span className="block text-white/85">Infrastructure For</span>
            <span className="block text-white">
              Over <span className="italic text-crimson">50 Years.</span>
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Bespoke roofing solutions for commercial complexes, municipal facilities, industrial
            parks, and premium HOAs. Built to endure, backed by five decades of master workmanship.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#quote"
              className="group inline-flex items-center justify-center gap-3 bg-crimson px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-crimson-hover"
            >
              Request Enterprise Quote
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center justify-center gap-3 border border-white/70 bg-transparent px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-navy"
            >
              View Industrial Portfolio
            </a>
          </div>
        </div>

        {/* Slide markers */}
        <div className="mt-14 flex items-center gap-4">
          <span className="tag-mono text-white/60">
            {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-px w-10 transition-all ${
                  i === idx ? "bg-crimson h-[2px]" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

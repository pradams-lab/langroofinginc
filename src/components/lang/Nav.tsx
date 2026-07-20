import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Commercial", href: "#commercial" },
  { label: "Public Properties", href: "#public" },
  { label: "Residential", href: "#residential" },
  { label: "Case Studies", href: "#case-studies" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur border-b border-slate-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-baseline gap-3">
          <span
            className={`text-[15px] font-extrabold uppercase tracking-[0.18em] ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            Lang Roofing Inc.
          </span>
          <span
            className={`hidden text-[10px] tracking-[0.3em] sm:block ${
              scrolled ? "text-muted-foreground" : "text-white/70"
            }`}
          >
            EST. 1974
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[13px] font-medium tracking-wide transition-colors ${
                scrolled ? "text-navy hover:text-crimson" : "text-white/85 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#quote"
            className="hidden bg-crimson px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-crimson-hover md:inline-flex"
          >
            Request Enterprise Quote
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className={`lg:hidden ${scrolled ? "text-navy" : "text-white"}`}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-line bg-white lg:hidden">
          <div className="flex flex-col divide-y divide-slate-line px-6 py-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[13px] font-semibold uppercase tracking-widest text-navy"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="mt-3 mb-3 bg-crimson px-5 py-3 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-white"
            >
              Request Enterprise Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

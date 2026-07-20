import { Instagram, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { useState, type FormEvent } from "react";

// Simple Yelp glyph
function YelpIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13.5 2c-.4 0-.8.1-1.1.3L8.7 4.6c-.6.4-.9 1.1-.7 1.8l2.9 9.3c.3 1 1.5 1.4 2.4.8l3.8-2.5c.6-.4.9-1.1.7-1.8L14.9 3c-.2-.6-.8-1-1.4-1zM7.3 14.4c-.7 0-1.3.5-1.4 1.2l-.5 4.2c-.1.9.9 1.5 1.7 1L11 18c.6-.4.7-1.2.3-1.8l-2.4-3.3c-.4-.5-1-.7-1.6-.5zm10 1.5c-.6-.2-1.3.1-1.6.7l-1.4 3c-.3.7.1 1.5.9 1.7l3.9.8c.9.2 1.6-.7 1.3-1.5l-1.4-3.7c-.2-.5-.7-.9-1.2-.9-.2 0-.3 0-.5.1zM4.5 8.2c-.8-.1-1.5.6-1.4 1.4l.4 3.5c.1.7.8 1.2 1.5 1l3.8-1c.8-.2 1.1-1.2.5-1.8L6.6 8.8c-.4-.4-1-.7-1.6-.6z" />
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (email.includes("@")) {
      setOk(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Top marquee row */}
        <div className="grid grid-cols-12 gap-8 border-b border-white/10 py-14 lg:py-20">
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-extrabold uppercase tracking-[0.16em]">
                Lang Roofing Inc.
              </span>
              <span className="tag-mono text-white/50">EST. 1974</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              Southern California&apos;s trusted commercial, public, and residential roofing
              contractor for over five decades.
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <p className="tag-mono text-white/50">Contact</p>
            <ul className="mt-5 space-y-4 text-[15px]">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-1 text-crimson" />
                <a href="tel:5629238728" className="hover:text-crimson">
                  (562) 923-8728
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-1 text-crimson" />
                <a
                  href="mailto:Customerservice@langroofinginc.com"
                  className="break-all hover:text-crimson"
                >
                  Customerservice@langroofinginc.com
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <p className="tag-mono text-white/50">Operating Hours</p>
            <ul className="mt-5 space-y-3 text-[14px] text-white/85">
              <li className="flex items-start gap-3">
                <Clock size={14} className="mt-1 text-crimson" />
                <div>
                  Mon – Fri
                  <div className="text-white/60">08:00 – 17:00</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={14} className="mt-1 text-white/30" />
                <div>
                  Sat &amp; Sun
                  <div className="text-white/60">Closed</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-2">
            <p className="tag-mono text-white/50">Maintenance Reminders</p>
            <form
              onSubmit={submit}
              className="mt-5 flex items-center border border-white/20 bg-white/[0.03]"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full bg-transparent px-3 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-[46px] w-[46px] shrink-0 items-center justify-center bg-crimson text-white hover:bg-crimson-hover"
              >
                <ArrowRight size={16} />
              </button>
            </form>
            {ok && <p className="mt-2 text-xs text-white/60">Subscribed. Talk soon.</p>}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-6 py-8 md:flex-row md:items-center">
          <p className="text-xs text-white/50">
            Copyright © 2026 LangRoofingInc.com — All Rights Reserved. Powered by Sprix.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center border border-white/20 text-white/80 hover:border-crimson hover:text-crimson"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              aria-label="Yelp"
              className="flex h-9 w-9 items-center justify-center border border-white/20 text-white/80 hover:border-crimson hover:text-crimson"
            >
              <YelpIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

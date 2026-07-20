import { useRef, useState, useCallback, useEffect } from "react";
import { GripVertical } from "lucide-react";
import beforeCommercial from "@/assets/before-commercial.jpg";
import afterCommercial from "@/assets/after-commercial.jpg";
import beforeTile from "@/assets/before-tile.jpg";
import afterTile from "@/assets/after-tile.jpg";

const projects = [
  {
    id: "long-beach",
    category: "Commercial Flat Roofs",
    title: "Long Beach Logistics Complex",
    meta: "142,000 SQ FT // TITLE 24 TPO MEMBRANE",
    before: beforeCommercial,
    after: afterCommercial,
  },
  {
    id: "pasadena",
    category: "Tile & Shingle Repairs",
    title: "Pasadena Residential Estate",
    meta: "SPANISH CLAY TILE // FULL RESTORATION",
    before: beforeTile,
    after: afterTile,
  },
];

const tabs = ["All Projects", "Commercial Flat Roofs", "Tile & Shingle Repairs", "Custom Sheet Metal"] as const;

function Slider({ before, after, alt }: { before: string; after: string; alt: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const x = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      update(x);
    };
    const stop = () => (dragging.current = false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchmove", move);
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", stop);
    };
  }, [update]);

  return (
    <div
      ref={ref}
      className="relative aspect-[16/10] w-full select-none overflow-hidden border border-slate-line bg-slate-soft"
      onMouseDown={(e) => {
        dragging.current = true;
        update(e.clientX);
      }}
      onTouchStart={(e) => {
        dragging.current = true;
        update(e.touches[0].clientX);
      }}
    >
      <img
        src={after}
        alt={`${alt} — after`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={before}
          alt={`${alt} — before`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: ref.current?.clientWidth ?? "100%", maxWidth: "none" }}
        />
      </div>

      {/* Labels */}
      <div className="tag-mono absolute left-4 top-4 bg-navy px-3 py-1.5 text-white">Before</div>
      <div className="tag-mono absolute right-4 top-4 bg-crimson px-3 py-1.5 text-white">After</div>

      {/* Handle */}
      <div
        className="absolute inset-y-0 z-10 flex w-px cursor-ew-resize items-center justify-center bg-white"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="flex h-12 w-12 items-center justify-center border border-white bg-crimson text-white shadow-[0_0_0_4px_rgba(217,4,41,0.15)]">
          <GripVertical size={18} />
        </div>
      </div>
    </div>
  );
}

export function CaseStudies() {
  const [active, setActive] = useState<(typeof tabs)[number]>("All Projects");
  const filtered = projects.filter(
    (p) => active === "All Projects" || p.category === active,
  );

  return (
    <section id="case-studies" className="bg-slate-soft py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-12 items-end gap-8 border-b border-slate-line pb-8">
          <div className="col-span-12 lg:col-span-7">
            <p className="tag-mono text-crimson">▲ Field Evidence</p>
            <h2 className="mt-5 text-4xl font-bold leading-[1.05] text-navy lg:text-5xl">
              Drag the handle. See what
              <span className="italic text-navy/70"> five decades</span> of craft delivers.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Every case documented from tear-off through final inspection. Same building, same
              angle, months apart.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-px border border-slate-line bg-slate-line">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`bg-white px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors ${
                active === t
                  ? "bg-navy text-white"
                  : "text-navy hover:bg-slate-soft"
              }`}
              style={active === t ? { backgroundColor: "var(--navy)", color: "#fff" } : undefined}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-10 space-y-16">
          {filtered.length === 0 && (
            <div className="border border-dashed border-slate-line bg-white p-12 text-center">
              <p className="tag-mono text-crimson">No archived cases in this category yet</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Contact our project office for reference projects in this category.
              </p>
            </div>
          )}
          {filtered.map((p, idx) => (
            <article key={p.id} className="grid grid-cols-12 gap-6 lg:gap-10">
              <div className="col-span-12 lg:col-span-3">
                <span className="tag-mono text-crimson">
                  Case // {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-2xl font-bold leading-tight text-navy">{p.title}</h3>
                <p className="tag-mono mt-3 text-muted-foreground">{p.meta}</p>
                <div className="mt-6 h-px w-16 bg-crimson" />
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  {p.category === "Commercial Flat Roofs"
                    ? "Tear-off of a failed bitumen system, installation of a Title 24 compliant white TPO membrane, and full re-flashing of all HVAC penetrations."
                    : "Full removal of failed underlayment, replacement of broken clay tiles with matched profile, and restoration of ridge caps and copper flashing."}
                </p>
              </div>
              <div className="col-span-12 lg:col-span-9">
                <Slider before={p.before} after={p.after} alt={p.title} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

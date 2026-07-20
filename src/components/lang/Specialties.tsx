const cols = [
  {
    num: "S / 01",
    title: "Roofing Specialties",
    items: [
      "Roof Replacements",
      "Restorations & Recoats",
      "Emergency Repairs (24/7)",
      "Preventive Maintenance Programs",
      "Custom Sheet Metal — Gutters to Coping",
      "Title 24 Cool Roof Membranes & Coatings",
      "Roof Insulation Systems",
    ],
  },
  {
    num: "S / 02",
    title: "Roof Drains & Water Systems",
    items: [
      "Addition of New Drains",
      "Replacement of Existing Drains",
      "Overflow / Secondary Drainage Systems",
      "Collector Boxes",
      "Downspouts & Leaders",
      "Scuppers & Through-Wall Outlets",
    ],
  },
];

export function Specialties() {
  return (
    <section className="relative bg-navy py-24 text-white lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-12 items-end gap-8 border-b border-white/15 pb-10">
          <div className="col-span-12 lg:col-span-8">
            <p className="tag-mono text-white/60">▲ Technical Capabilities</p>
            <h2 className="mt-5 text-4xl font-bold leading-[1.05] lg:text-5xl">
              A full mechanical
              <span className="italic text-white/70"> roofing division</span> — assembled in-house.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <p className="text-sm leading-relaxed text-white/70">
              No subcontracted labor. No handoffs. Our crews own every step from tear-off to
              waterproofing to sheet metal fabrication.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-24">
          {cols.map((c) => (
            <div key={c.num}>
              <div className="flex items-baseline justify-between border-b border-white/20 pb-4">
                <h3 className="text-xl font-bold uppercase tracking-wide">{c.title}</h3>
                <span className="tag-mono text-crimson">{c.num}</span>
              </div>
              <ul className="mt-2 divide-y divide-white/10">
                {c.items.map((it, idx) => (
                  <li
                    key={it}
                    className="flex items-baseline justify-between py-4 text-[15px] text-white/90"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="tag-mono text-white/40">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      {it}
                    </span>
                    <span className="text-white/30">—</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const items = [
  {
    marker: "01",
    strong: "50+ Years",
    text: "of Unmatched Field Workmanship Across Southern California",
  },
  {
    marker: "02",
    strong: "Fully Bonded & Insured",
    text: "California State Licensed General Contractor",
  },
  {
    marker: "03",
    strong: "Title 24 Compliant",
    text: "Cool Roof Membrane Certified — Cal-Energy Approved",
  },
];

export function TrustBar() {
  return (
    <section className="relative border-y border-slate-line bg-slate-soft">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 divide-y divide-slate-line md:grid-cols-3 md:divide-x md:divide-y-0">
        {items.map((it) => (
          <div key={it.marker} className="px-8 py-10 lg:px-12 lg:py-14">
            <div className="flex items-start gap-4">
              <span className="tag-mono mt-1 text-crimson">{it.marker}</span>
              <div>
                <div className="text-2xl font-bold leading-tight text-navy lg:text-[28px]">
                  {it.strong}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

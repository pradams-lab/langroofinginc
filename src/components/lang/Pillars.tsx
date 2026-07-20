import { Building2, Landmark, Home, ArrowUpRight } from "lucide-react";

const pillars = [
  {
    num: "01",
    tag: "Commercial",
    id: "commercial",
    icon: Building2,
    title: "Commercial & Industrial Properties",
    lead: "Heavy-scale environments demanding durable, code-compliant assemblies and seamless coordination with facility operations.",
    services: [
      "Refineries & Industrial Complexes",
      "Storage Facilities & Warehouses",
      "Hotels & Hospitality Portfolios",
      "Business Centers & Strip Malls",
      "HVAC Ducting Platforms",
      "Turbine Install & Repairs",
    ],
  },
  {
    num: "02",
    tag: "Public",
    id: "public",
    icon: Landmark,
    title: "Public & Municipal Properties",
    lead: "Prevailing-wage capable teams delivering prequalified work for city, county, and district facilities.",
    services: [
      "Government Owned Buildings",
      "Educational Facilities (K–12, Colleges)",
      "Religious Facilities",
      "Hospitals & Clinics",
      "Libraries & City Halls",
      "Parks & Recreation Structures",
    ],
  },
  {
    num: "03",
    tag: "Residential",
    id: "residential",
    icon: Home,
    title: "Multi-Family & Residential Infrastructure",
    lead: "Discreet, disciplined execution for property managers, boards, and high-end estates across the region.",
    services: [
      "Homeowner Associations (HOAs)",
      "Condominium Communities",
      "Apartment Complexes",
      "Townhome Developments",
      "Single Family Estates",
    ],
  },
];

export function Pillars() {
  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 border-b border-slate-line pb-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="tag-mono text-crimson">▲ Three Pillars // Discipline</p>
            <h2 className="mt-5 text-4xl font-bold leading-[1.05] text-navy lg:text-5xl">
              Every project routes through one of three
              <span className="italic text-navy/70"> operational tracks.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-base leading-relaxed text-muted-foreground">
              We structure our practice around the three property classes we&apos;ve served since
              1974. Each track carries its own project managers, safety protocols, and material
              specifications — nothing about your building is handled generically.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px bg-slate-line md:grid-cols-3">
          {pillars.map(({ icon: Icon, ...p }) => (
            <article
              key={p.num}
              id={p.id}
              className="group relative flex flex-col bg-white p-8 transition-colors lg:p-10"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-transparent transition-colors group-hover:bg-crimson" />

              <div className="flex items-start justify-between">
                <span className="tag-mono text-crimson">
                  {p.num} // {p.tag}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-navy/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-crimson"
                />
              </div>

              <Icon size={40} strokeWidth={1.25} className="mt-8 text-navy" />

              <h3 className="mt-6 text-2xl font-bold leading-tight text-navy">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.lead}</p>

              <ul className="mt-6 space-y-2 border-t border-slate-line pt-6">
                {p.services.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-[13px] text-navy">
                    <span className="mt-2 inline-block h-px w-4 flex-none bg-navy/40" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

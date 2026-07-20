import { useState, type FormEvent, type DragEvent } from "react";
import { UploadCloud, ArrowRight, CheckCircle2, X } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Name required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Phone required").max(30),
  street: z.string().trim().min(2, "Address required").max(200),
  city: z.string().trim().min(2, "City required").max(100),
  zip: z.string().trim().min(4, "ZIP required").max(15),
  property: z.enum(["Commercial", "Public", "Residential HOA"]),
});

export function QuoteForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    setFiles((prev) => [...prev, ...Array.from(e.dataTransfer.files)].slice(0, 5));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((iss) => {
        errs[String(iss.path[0])] = iss.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="quote" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-10 lg:gap-16">
          <aside className="col-span-12 lg:col-span-4">
            <p className="tag-mono text-crimson">▲ Enterprise Quote Engine</p>
            <h2 className="mt-5 text-4xl font-bold leading-[1.05] text-navy lg:text-5xl">
              Submit your
              <span className="italic text-navy/70"> project brief.</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Project managers respond within one business day with a scoping call, site survey
              window, and preliminary specification. All submissions are confidential.
            </p>

            <dl className="mt-10 space-y-6 border-t border-slate-line pt-8 text-sm">
              <div>
                <dt className="tag-mono text-muted-foreground">Direct Line</dt>
                <dd className="mt-1 text-lg font-semibold text-navy">(562) 923-8728</dd>
              </div>
              <div>
                <dt className="tag-mono text-muted-foreground">Project Desk</dt>
                <dd className="mt-1 text-base font-medium text-navy">
                  Customerservice@langroofinginc.com
                </dd>
              </div>
              <div>
                <dt className="tag-mono text-muted-foreground">Response SLA</dt>
                <dd className="mt-1 text-base font-medium text-navy">1 Business Day</dd>
              </div>
            </dl>
          </aside>

          <div className="col-span-12 lg:col-span-8">
            {submitted ? (
              <div className="border border-slate-line bg-slate-soft p-10 lg:p-14">
                <CheckCircle2 size={40} className="text-crimson" strokeWidth={1.5} />
                <h3 className="mt-6 text-3xl font-bold text-navy">Request Received.</h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  A project manager from Lang Roofing Inc. will contact you within one business day
                  to schedule your site survey and scoping call.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFiles([]);
                  }}
                  className="mt-8 border border-navy px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-navy hover:bg-navy hover:text-white"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-slate-line bg-white p-6 lg:p-10"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Field label="Contact Name" name="name" error={errors.name} />
                  <Field
                    label="Property Type"
                    name="property"
                    error={errors.property}
                    as="select"
                    options={["Commercial", "Public", "Residential HOA"]}
                  />
                  <Field label="Business Email" name="email" type="email" error={errors.email} />
                  <Field label="Direct Phone" name="phone" type="tel" error={errors.phone} />
                </div>

                <div className="mt-8 border-t border-slate-line pt-8">
                  <p className="tag-mono mb-4 text-muted-foreground">Project Address</p>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-6">
                    <div className="md:col-span-3">
                      <Field label="Street" name="street" error={errors.street} />
                    </div>
                    <div className="md:col-span-2">
                      <Field label="City" name="city" error={errors.city} />
                    </div>
                    <div className="md:col-span-1">
                      <Field label="ZIP" name="zip" error={errors.zip} />
                    </div>
                  </div>
                </div>

                {/* Upload zone */}
                <div className="mt-8 border-t border-slate-line pt-8">
                  <p className="tag-mono mb-4 text-muted-foreground">Attachments (Optional)</p>
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragOver(true);
                    }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={onDrop}
                    className={`flex flex-col items-center justify-center border border-dashed p-10 text-center transition-colors ${
                      dragOver ? "border-crimson bg-crimson/5" : "border-slate-line bg-slate-soft"
                    }`}
                  >
                    <UploadCloud size={28} strokeWidth={1.5} className="text-navy" />
                    <p className="mt-4 text-sm font-semibold text-navy">
                      Attach Existing Roof Layouts, Blueprints, or Damage Photos
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Drag and drop or{" "}
                      <label className="cursor-pointer text-crimson underline underline-offset-2">
                        browse files
                        <input
                          type="file"
                          multiple
                          className="hidden"
                          onChange={(e) =>
                            setFiles((prev) =>
                              [...prev, ...Array.from(e.target.files ?? [])].slice(0, 5),
                            )
                          }
                        />
                      </label>
                    </p>
                  </div>
                  {files.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {files.map((f, i) => (
                        <li
                          key={i}
                          className="flex items-center justify-between border border-slate-line bg-white px-4 py-2 text-xs text-navy"
                        >
                          <span className="truncate">{f.name}</span>
                          <button
                            type="button"
                            onClick={() => setFiles((p) => p.filter((_, idx) => idx !== i))}
                            className="text-muted-foreground hover:text-crimson"
                            aria-label="Remove"
                          >
                            <X size={14} />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-10 flex flex-col items-center gap-4 border-t border-slate-line pt-8">
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-3 bg-crimson px-10 py-5 text-[12px] font-bold uppercase tracking-[0.22em] text-white transition-colors hover:bg-crimson-hover sm:w-auto"
                  >
                    Submit Request for Proposal
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                  <p className="tag-mono text-muted-foreground">
                    Confidential // Reviewed by Senior PM
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  as,
  options,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  as?: "select";
  options?: string[];
}) {
  const baseCls =
    "mt-2 block w-full border-0 border-b border-slate-line bg-transparent px-0 py-3 text-[15px] text-navy placeholder:text-muted-foreground focus:border-crimson focus:outline-none focus:ring-0";
  return (
    <label className="block">
      <span className="tag-mono text-muted-foreground">{label}</span>
      {as === "select" ? (
        <select name={name} defaultValue="" className={baseCls} required>
          <option value="" disabled>
            Select…
          </option>
          {options?.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : (
        <input name={name} type={type} className={baseCls} required autoComplete="off" />
      )}
      {error && <span className="mt-1 block text-[11px] font-semibold text-crimson">{error}</span>}
    </label>
  );
}

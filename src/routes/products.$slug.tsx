import { Link, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { getProduct, products } from "@/lib/products";
import { Reveal, CountUp } from "@/components/Reveal";
import lifestyleRider from "@/assets/lifestyle-rider.jpg";
import lifestyleCharge from "@/assets/lifestyle-charge.jpg";
import lifestyleCity from "@/assets/lifestyle-city.jpg";
import { PageHead } from "@/lib/PageHead";

const featureImgs = [lifestyleRider, lifestyleCharge, lifestyleCity];

export default function ProductPage() {
  const params = useParams<{ slug: string }>();
  const product = useMemo(() => {
    if (!params.slug) return null;
    return getProduct(params.slug);
  }, [params.slug]);

  if (!product) {
    return (
      <>
        <PageHead
          title="Model not found — OMEV"
          meta={[
            { title: "Model not found — OMEV" },
            { name: "description", content: "The requested OMEV model could not be found." },
            { property: "og:title", content: "Model not found — OMEV" },
            { property: "og:description", content: "The requested OMEV model could not be found." },
          ]}
        />
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display-tight text-6xl text-ink">Model not found</h1>
            <Link to="/products" className="mt-6 inline-block text-[11px] tracked font-bold text-volt-deep">
              ← Back to fleet
            </Link>
          </div>
        </div>
      </>
    );
  }

  const title = `${product.name} — OMEV`;
  const desc = `${product.name}. ${product.specs.range} range, ${product.specs.topSpeed} top speed. From ${product.price}. ${product.tagline}`;

  return (
    <>
      <PageHead
        title={title}
        meta={[
          { title },
          { name: "description", content: desc },
          { property: "og:title", content: title },
          { property: "og:description", content: desc },
          { property: "og:type", content: "product" },
        ]}
        links={[{ rel: "canonical", href: `/products/${product.slug}` }]}
      />
      <ProductDetail product={product} />
    </>
  );
}

function ProductDetail({ product }: { product: (typeof products)[number] }) {
  const [color, setColor] = useState(0);
  const [variant, setVariant] = useState(0);
  const [tab, setTab] = useState<"perf" | "batt" | "dim" | "feat">("perf");
  const [activeImage, setActiveImage] = useState(0);

  // Get current variant or default
  const currentVariant = product.variants?.[variant] || {
    name: product.name,
    price: product.price,
    specs: product.specs,
    image: product.image,
    gallery: [product.image, lifestyleRider, lifestyleCharge, lifestyleCity],
  };

  // Get current color
  const currentColor = product.colors?.[color] || { name: "Default", hex: "#D4A017" };

  // Get current image based on color + variant
  const displayImage = currentVariant.gallery?.[activeImage] || currentVariant.image || product.image;

  return (
    <>
      {/* HERO — Split layout with gallery */}
      <section className="relative bg-cream min-h-[100vh] flex items-center overflow-hidden">
        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 md:px-10 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left: Product info */}
            <div className="md:col-span-5 order-2 md:order-1">
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-6 h-[2px] bg-volt" />
                  <p className="text-[11px] tracked text-ink/40 font-bold uppercase">
                    {product.category || "Electric Vehicle"}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="font-display-tight text-ink text-[18vw] md:text-[7vw] leading-[0.82]">
                  {currentVariant.name}
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="text-sm text-ink/50 leading-[1.7] mt-6 max-w-sm">
                  {product.tagline}
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-8 flex items-baseline gap-4">
                  <p className="font-display-tight text-volt-deep text-5xl md:text-6xl">
                    {currentVariant.price}
                  </p>
                  <div className="flex flex-col">
                    <span className="text-[10px] tracked text-ink/30 font-bold">EX-SHOWROOM</span>
                    <span className="text-[11px] tracked text-volt-deep font-bold">EMI from ₹2,499/mo</span>
                  </div>
                </div>
              </Reveal>

              {/* Variant Selector */}
              {product.variants && product.variants.length > 1 && (
                <Reveal delay={300}>
                  <div className="mt-8">
                    <p className="text-[11px] tracked text-ink/40 font-bold mb-3 uppercase">Model Variant</p>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.map((v, i) => (
                        <button
                          key={v.name}
                          onClick={() => { setVariant(i); setActiveImage(0); }}
                          className={`px-5 py-3 text-[11px] tracked font-bold transition-all duration-300 ${
                            variant === i
                              ? "bg-ink text-paper"
                              : "bg-paper text-ink border-2 border-ink/10 hover:border-ink"
                          }`}
                        >
                          {v.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Color Selector */}
              {product.colors && product.colors.length > 0 && (
                <Reveal delay={350}>
                  <div className="mt-6">
                    <p className="text-[11px] tracked text-ink/40 font-bold mb-3 uppercase">
                      Colour — <span className="text-ink">{currentColor.name}</span>
                    </p>
                    <div className="flex gap-3">
                      {product.colors.map((c, i) => (
                        <button
                          key={c.name}
                          onClick={() => setColor(i)}
                          className={`group relative p-1.5 border-2 transition-all duration-300 ${
                            color === i ? "border-volt -translate-y-1" : "border-transparent hover:border-ink/20"
                          }`}
                        >
                          <span
                            className="block h-10 w-10 md:h-12 md:w-12"
                            style={{ background: c.hex }}
                          />
                          {color === i && (
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-volt rotate-45" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              <Reveal delay={400}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    to="/test-ride"
                    className="inline-flex items-center gap-3 bg-ink px-8 py-5 text-[12px] tracked font-bold text-paper hover:bg-volt hover:text-ink transition-colors"
                  >
                    Book Test Ride
                    <span className="h-1.5 w-1.5 rounded-full bg-volt" />
                  </Link>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-3 bg-paper border-2 border-ink px-8 py-5 text-[12px] tracked font-bold text-ink hover:bg-ink hover:text-paper transition-colors"
                  >
                    View All Models
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right: Image + Gallery */}
            <div className="md:col-span-7 order-1 md:order-2 relative">
              <Reveal delay={200}>
                {/* Main image */}
                <div className="relative">
                  {/* Giant watermark number */}
                  <span className="absolute -top-8 right-0 md:-right-8 font-display-tight text-[30vw] md:text-[15vw] leading-none text-ink/[0.03] select-none pointer-events-none z-0">
                    0{product.colors ? color + 1 : 1}
                  </span>

                  <div className="relative bg-paper shadow-product overflow-hidden aspect-[4/3]">
                    <img
                      key={displayImage}
                      src={displayImage}
                      alt={`${currentVariant.name} in ${currentColor.name}`}
                      width={1600}
                      height={1200}
                      className="w-full h-full object-cover animate-[fadeIn_0.5s_ease-out]"
                    />

                    {/* Color overlay tint */}
                    <div
                      className="absolute inset-0 opacity-10 mix-blend-multiply pointer-events-none transition-colors duration-500"
                      style={{ backgroundColor: currentColor.hex }}
                    />

                    {/* Variant badge */}
                    <div className="absolute top-4 left-4 bg-ink text-paper px-4 py-2 text-[10px] tracked font-bold">
                      {currentVariant.name}
                    </div>

                    {/* Color badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 bg-paper/90 backdrop-blur px-4 py-2">
                      <span
                        className="w-3 h-3"
                        style={{ background: currentColor.hex }}
                      />
                      <span className="text-[10px] tracked font-bold text-ink">{currentColor.name}</span>
                    </div>
                  </div>
                </div>

                {/* Thumbnail gallery */}
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {(currentVariant.gallery || [product.image, lifestyleRider, lifestyleCharge, lifestyleCity]).map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`relative aspect-square overflow-hidden border-2 transition-all duration-300 ${
                        activeImage === i ? "border-volt" : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`View ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {activeImage === i && (
                        <div className="absolute inset-0 bg-volt/10" />
                      )}
                    </button>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SPECS BAR */}
      <section className="bg-ink text-paper py-8 md:py-10">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { val: currentVariant.specs?.range || product.specs.range, unit: "KM", label: "Range" },
              { val: currentVariant.specs?.topSpeed || product.specs.topSpeed, unit: "KMPH", label: "Top Speed" },
              { val: currentVariant.specs?.charge || product.specs.charge, unit: "HRS", label: "Charge Time" },
              { val: "3", unit: "YRS", label: "Warranty" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="text-center md:text-left">
                  <div className="flex items-baseline justify-center md:justify-start gap-1">
                    <span className="font-display-tight text-3xl md:text-4xl text-volt">{s.val}</span>
                    <span className="text-[10px] tracked text-paper/40 font-bold">{s.unit}</span>
                  </div>
                  <p className="text-[10px] tracked text-paper/30 font-bold mt-1 uppercase">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SPEC TABS */}
      <section className="bg-cream py-20 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <Reveal>
            <div className="flex items-center gap-6 mb-12">
              <p className="text-[11px] tracked text-volt-deep font-bold shrink-0">Technical Details</p>
              <div className="h-px flex-1 bg-ink/10" />
            </div>
          </Reveal>

          <div className="relative flex gap-6 md:gap-10 border-b border-ink/10 mb-12 overflow-x-auto">
            {([
              ["perf", "Performance"],
              ["batt", "Battery"],
              ["dim", "Dimensions"],
              ["feat", "Features"],
            ] as const).map(([v, l]) => (
              <button
                key={v}
                onClick={() => setTab(v)}
                className={`relative pb-4 text-[12px] tracked font-bold transition whitespace-nowrap ${
                  tab === v ? "text-ink" : "text-ink/40 hover:text-ink/60"
                }`}
              >
                {l}
                {tab === v && <span className="absolute -bottom-px left-0 right-0 h-[3px] bg-volt" />}
              </button>
            ))}
          </div>

          {tab === "perf" && (
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  label: "Range",
                  val: parseInt(currentVariant.specs?.range || product.specs.range),
                  unit: "KM",
                  pct: 75,
                  desc: "Real world range on Indian roads",
                },
                {
                  label: "Top Speed",
                  val: parseInt(currentVariant.specs?.topSpeed || product.specs.topSpeed),
                  unit: "KMPH",
                  pct: 60,
                  desc: "Maximum tested speed",
                },
                {
                  label: "Acceleration",
                  val: 3.5,
                  unit: "SEC 0-40",
                  pct: 85,
                  desc: "Quick off the line torque",
                },
              ].map((m, i) => (
                <Reveal key={m.label} delay={i * 100}>
                  <div className="group">
                    <div className="flex items-baseline justify-between mb-3">
                      <p className="text-[11px] tracked font-bold text-volt-deep">{m.label}</p>
                      <p className="text-[10px] tracked text-ink/30 font-bold">{m.desc}</p>
                    </div>
                    <p className="font-display-tight text-ink text-7xl md:text-8xl leading-none">
                      {m.val}
                      <span className="text-2xl text-ink/30 ml-2">{m.unit}</span>
                    </p>
                    <div className="mt-5 h-3 bg-ink/5 relative overflow-hidden">
                      <div
                        className="h-full bg-volt animate-[fillBar_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards]"
                        style={{ width: `${m.pct}%` }}
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
              <style>{`@keyframes fillBar { from{width:0} }`}</style>
            </div>
          )}

          {tab === "batt" && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Reveal>
                <div className="relative aspect-square max-w-[360px] mx-auto">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="44" fill="none" stroke="oklch(0.86 0.02 85)" strokeWidth="5" />
                    <circle
                      cx="50"
                      cy="50"
                      r="44"
                      fill="none"
                      stroke="oklch(0.82 0.24 145)"
                      strokeWidth="5"
                      strokeDasharray={`${2 * Math.PI * 44 * 0.92} ${2 * Math.PI * 44}`}
                      strokeLinecap="round"
                      className="animate-[spinIn_1.5s_ease-out_forwards]"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-display-tight text-6xl md:text-7xl text-ink">
                      92<span className="text-volt text-4xl">%</span>
                    </span>
                    <span className="text-[11px] tracked text-ink/40 mt-2 font-bold">BATTERY EFFICIENCY</span>
                  </div>
                </div>
              </Reveal>
              <div className="space-y-0">
                {[
                  ["Charge time", currentVariant.specs?.charge || product.specs.charge],
                  ["Battery type", "3.2 kWh Lithium-ion"],
                  ["Warranty", "3 Years / 30,000 KM"],
                  ["Charge cycles", "1,200+"],
                  ["Charger", "Portable 3A included"],
                ].map(([k, v], i) => (
                  <Reveal key={k} delay={i * 60}>
                    <div className="flex justify-between items-center border-b border-ink/10 py-5 group hover:bg-paper px-4 -mx-4 transition-colors">
                      <span className="text-[11px] tracked font-bold text-volt-deep uppercase">{k}</span>
                      <span className="text-ink font-semibold text-sm">{v}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {tab === "dim" && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                ["Length", "1850", "MM"],
                ["Width", "720", "MM"],
                ["Weight", "98", "KG"],
                ["Ground Clearance", "165", "MM"],
                ["Seat Height", "780", "MM"],
                ["Wheelbase", "1320", "MM"],
                ["Load Capacity", "150", "KG"],
                ["Turning Radius", "2.1", "M"],
              ].map(([k, v, u], i) => (
                <Reveal key={k} delay={i * 60}>
                  <div className="group">
                    <p className="text-[11px] tracked font-bold text-volt-deep mb-2">{k}</p>
                    <p className="font-display-tight text-ink text-5xl md:text-6xl">
                      {v}<span className="text-xl text-ink/30 ml-1">{u}</span>
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {tab === "feat" && (
            <div className="grid md:grid-cols-2 gap-0">
              {[...(product.features || []), "Smart App Connectivity", "Anti-theft Alarm", "USB Charging Port", "Cruise Control", "Regenerative Braking", "Tubeless Tyres"].map((f, i) => (
                <Reveal key={f} delay={i * 40}>
                  <div className="flex items-center gap-5 border-b border-ink/5 py-6 group hover:bg-paper px-4 -mx-4 transition-colors">
                    <span className="w-10 h-10 rounded-full border-2 border-ink/10 flex items-center justify-center group-hover:bg-volt group-hover:border-volt transition-all duration-300">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" className="text-ink group-hover:text-ink" />
                      </svg>
                    </span>
                    <span className="text-ink font-semibold text-sm md:text-base">{f}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* COMPARISON — Variant vs Variant */}
      {product.variants && product.variants.length > 1 && (
        <section className="bg-ink text-paper py-24 md:py-32 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
            <span className="font-display-tight text-[25vw] md:text-[15vw] leading-none text-paper/[0.02] whitespace-nowrap">
              COMPARE
            </span>
          </div>

          <div className="relative z-10 mx-auto max-w-[1500px] px-5 md:px-10">
            <Reveal>
              <div className="flex items-center gap-6 mb-16">
                <p className="text-[11px] tracked text-volt font-bold shrink-0">Compare Variants</p>
                <div className="h-px flex-1 bg-paper/10" />
              </div>
            </Reveal>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-paper/10">
                    <th className="text-left py-4 pr-8 text-[11px] tracked text-paper/40 font-bold uppercase">Feature</th>
                    {product.variants.map((v) => (
                      <th key={v.name} className={`text-left py-4 px-6 text-[12px] tracked font-bold ${v.name === currentVariant.name ? "text-volt" : "text-paper"}`}>
                        {v.name}
                        {v.name === currentVariant.name && <span className="ml-2 text-[10px] text-volt/60">(Selected)</span>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Price", ...product.variants.map((v) => v.price)],
                    ["Range", ...product.variants.map((v) => v.specs?.range || product.specs.range)],
                    ["Top Speed", ...product.variants.map((v) => v.specs?.topSpeed || product.specs.topSpeed)],
                    ["Charge Time", ...product.variants.map((v) => v.specs?.charge || product.specs.charge)],
                    ["Battery", ...product.variants.map((v) => v.specs?.battery || "3.2 kWh")],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-paper/5 hover:bg-paper/5 transition-colors">
                      <td className="py-5 pr-8 text-[11px] tracked text-volt font-bold uppercase">{row[0]}</td>
                      {row.slice(1).map((cell, j) => (
                        <td key={j} className={`py-5 px-6 text-sm font-semibold ${product.variants[j].name === currentVariant.name ? "text-volt" : "text-paper/70"}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* FEATURE GRID */}
      <section className="bg-cream">
        <div className="grid md:grid-cols-3">
          {featureImgs.map((src, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="relative aspect-[4/5] overflow-hidden group">
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="text-volt font-display-tight text-3xl md:text-4xl leading-tight">
                    {product.features?.[i] || ["Built Tough", "Charge Anywhere", "City Ready"][i]}
                  </span>
                  <p className="text-paper/60 text-sm mt-3 leading-relaxed">
                    {["Tested on UP roads. Monsoon, dust, potholes — it handles everything.", "Plug in at home. Full charge overnight. No petrol station queues.", "Nimble in traffic. Spacious for cargo. Perfect for Bharat's streets."][i]}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <Reveal>
            <div className="flex items-center gap-6 mb-12">
              <p className="text-[11px] tracked text-volt-deep font-bold shrink-0">More Machines</p>
              <div className="h-px flex-1 bg-ink/10" />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {products.filter((p) => p.slug !== product.slug).map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <Link to={`/products/${p.slug}`} className="group block">
                  <div className="relative bg-paper overflow-hidden shadow-card group-hover:shadow-product transition-all duration-700">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        width={1200}
                        height={1200}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute top-4 right-4 bg-volt text-ink px-3 py-1.5 text-[10px] tracked font-bold">
                      {p.price}
                    </div>
                  </div>
                  <div className="mt-5 flex items-start justify-between">
                    <div>
                      <h3 className="font-display-tight text-2xl md:text-3xl text-ink group-hover:text-volt-deep transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-sm text-ink/40 mt-1">{p.tagline}</p>
                    </div>
                    <span className="w-10 h-10 rounded-full border-2 border-ink/10 flex items-center justify-center group-hover:bg-ink group-hover:text-paper transition-all duration-300 shrink-0">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-4 h-[2px] bg-ink/5 relative overflow-hidden">
                    <div className="absolute inset-y-0 left-0 w-0 bg-volt group-hover:w-full transition-all duration-700" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes spinIn {
          from { stroke-dashoffset: ${2 * Math.PI * 44}; }
          to { stroke-dashoffset: ${2 * Math.PI * 44 * 0.08}; }
        }
      `}</style>
    </>
  );
}
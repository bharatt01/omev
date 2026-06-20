import { Link } from "react-router-dom";
import { useState } from "react";
import { products } from "@/lib/products";
import { Reveal } from "@/components/Reveal";
import { PageHead } from "@/lib/PageHead";

const meta = [
  { title: "The Fleet — OMEV Electric Vehicles" },
  { name: "description", content: "Browse OMEV's full lineup of electric two and three wheelers. Built in Lakhimpur, designed for Bharat." },
  { property: "og:title", content: "The Fleet — OMEV" },
  { property: "og:description", content: "Electric scooters and three wheelers from OMEV." },
  { property: "og:url", content: "/products" },
];

const links = [{ rel: "canonical", href: "/products" }];

export default function Products() {
  const [cat, setCat] = useState<"all" | "two" | "three">("all");
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const list = products.filter((p) => (cat === "all" ? true : p.category === cat));

  // Get featured product for hero
  const featured = products[0];

  return (
    <>
      <PageHead title="The Fleet — OMEV Electric Vehicles" meta={meta} links={links} />

      {/* HERO — Full bleed with massive typography */}
      <section className="relative bg-cream min-h-[85vh] md:min-h-[90vh] flex items-end overflow-hidden">
        {/* Background watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span className="font-display-tight text-[50vw] md:text-[30vw] leading-none text-ink/[0.02] whitespace-nowrap">
            FLEET
          </span>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 md:px-10 pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            {/* Left: Title */}
            <div className="md:col-span-7">
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-[2px] bg-volt" />
                  <p className="text-[11px] tracked text-ink/40 font-bold uppercase">The Complete Lineup</p>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display-tight text-ink text-[22vw] md:text-[11vw] leading-[0.8]">
                  OUR<br />
                  <span className="text-volt-deep">FLEET.</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 text-sm md:text-base text-ink/50 leading-[1.7] max-w-md">
                  Hand-built electric machines for India's roads, riders, and routines. Every model tested on UP roads before it reaches you.
                </p>
              </Reveal>
            </div>

            {/* Right: Featured product preview */}
            <div className="md:col-span-5 relative">
              <Reveal delay={200}>
                <div className="relative">
                  <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-full h-full border-2 border-volt" />
                  <div className="relative bg-paper shadow-product overflow-hidden aspect-[4/3]">
                    <img
                      src={featured.image}
                      alt={featured.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/80 to-transparent p-6 md:p-8">
                      <p className="text-[10px] tracked text-volt font-bold mb-1">FEATURED</p>
                      <p className="font-display-tight text-paper text-2xl md:text-3xl">{featured.name}</p>
                      <p className="text-paper/60 text-sm mt-1">{featured.price}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER — Sticky with mustard active indicator */}
      <section className="sticky top-0 z-40 bg-cream/95 backdrop-blur-md border-y border-ink/10">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="flex items-center gap-0 overflow-x-auto">
            {[
              { v: "all" as const, label: "All Models", count: products.length },
              { v: "two" as const, label: "Two Wheelers", count: products.filter((p) => p.category === "two").length },
              { v: "three" as const, label: "Three Wheelers", count: products.filter((p) => p.category === "three").length },
            ].map((t) => (
              <button
                key={t.v}
                onClick={() => setCat(t.v)}
                className={`relative py-6 md:py-7 px-4 md:px-8 text-left transition-all duration-300 group ${
                  cat === t.v ? "bg-ink text-paper" : "text-ink/40 hover:text-ink/70"
                }`}
              >
                <span className="font-display-tight text-xl md:text-2xl block leading-none">
                  {t.label}
                </span>
                <span className={`text-[10px] tracked font-bold mt-2 block ${
                  cat === t.v ? "text-volt" : "text-ink/30"
                }`}>
                  {t.count} {t.count === 1 ? "Model" : "Models"}
                </span>

                {/* Mustard bottom bar for active */}
                {cat === t.v && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-volt" />
                )}
              </button>
            ))}

            {/* Right side: Sort hint */}
            <div className="ml-auto hidden md:flex items-center gap-2 py-6 px-8 text-[10px] tracked text-ink/30 font-bold">
              <span>{list.length} VEHICLES SHOWN</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID — Editorial Masonry with hover reveals */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="grid gap-12 md:gap-16">
            {list.map((p, i) => {
              const isLarge = i === 0;
              const isReversed = i % 2 === 1;

              return (
                <Reveal key={p.slug} delay={i * 100}>
                  <Link
                    to={`/products/${p.slug}`}
                    className="group block"
                    onMouseEnter={() => setHoveredSlug(p.slug)}
                    onMouseLeave={() => setHoveredSlug(null)}
                  >
                    <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center ${
                      isReversed ? 'md:[direction:rtl]' : ''
                    } [&>*]:md:[direction:ltr]`}>
                      {/* Image Column */}
                      <div className={`${isLarge ? 'md:col-span-7' : 'md:col-span-6'} relative`}>
                        {/* Index number watermark */}
                        <span className="absolute -top-6 md:-top-10 left-0 md:left-4 font-display-tight text-[100px] md:text-[160px] leading-none text-ink/[0.03] select-none pointer-events-none z-0">
                          0{i + 1}
                        </span>

                        <div className="relative">
                          {/* Mustard offset frame on hover */}
                          <div className={`absolute -bottom-3 ${isReversed ? '-left-3' : '-right-3'} w-full h-full border-2 border-volt opacity-0 group-hover:opacity-100 transition-all duration-700`} />

                          <div className={`relative overflow-hidden bg-paper shadow-card group-hover:shadow-product transition-all duration-700 ${
                            isLarge ? 'aspect-[16/10]' : 'aspect-[4/3]'
                          }`}>
                            <img
                              src={p.image}
                              alt={p.name}
                              width={1200}
                              height={1200}
                              loading="lazy"
                              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-[1.06] group-hover:-translate-y-2"
                            />

                            {/* Hover overlay with quick specs */}
                            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/50 transition-all duration-500 flex items-end">
                              <div className="p-6 md:p-10 translate-y-full group-hover:translate-y-0 transition-transform duration-600 ease-out">
                                <div className="flex gap-8 md:gap-12 text-paper">
                                  <div>
                                    <p className="text-[10px] tracked text-paper/50 font-bold mb-1">RANGE</p>
                                    <p className="font-display-tight text-2xl md:text-3xl">{p.range || "120"}<span className="text-sm">KM</span></p>
                                  </div>
                                  <div>
                                    <p className="text-[10px] tracked text-paper/50 font-bold mb-1">TOP SPEED</p>
                                    <p className="font-display-tight text-2xl md:text-3xl">{p.topSpeed || "55"}<span className="text-sm">KMPH</span></p>
                                  </div>
                                  <div>
                                    <p className="text-[10px] tracked text-paper/50 font-bold mb-1">CHARGE</p>
                                    <p className="font-display-tight text-2xl md:text-3xl">{p.chargeTime || "4"}<span className="text-sm">HRS</span></p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Category badge */}
                            <div className="absolute top-4 left-4 bg-ink text-paper px-3 py-1.5 text-[10px] tracked font-bold">
                              {p.category === "two" ? "TWO WHEELER" : "THREE WHEELER"}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Info Column */}
                      <div className={`${isLarge ? 'md:col-span-5' : 'md:col-span-6'} py-4`}>
                        <div className={`${isReversed ? 'md:pr-8' : 'md:pl-8'}`}>
                          {/* Category tag */}
                          <div className="flex items-center gap-3 mb-5">
                            <span className="w-6 h-[2px] bg-volt" />
                            <span className="text-[10px] tracked text-ink/30 font-bold uppercase">
                              {p.category === "two" ? "Electric Scooter" : "Electric Three Wheeler"}
                            </span>
                          </div>

                          {/* Name */}
                          <h3 className="font-display-tight text-ink text-4xl md:text-6xl lg:text-7xl leading-[0.85] group-hover:text-volt-deep transition-colors duration-500">
                            {p.name}
                          </h3>

                          {/* Tagline */}
                          <p className="text-sm md:text-base text-ink/40 leading-[1.7] mt-5 max-w-sm">
                            {p.tagline}
                          </p>

                          {/* Price block */}
                          <div className="mt-8 flex items-baseline gap-5">
                            <div>
                              <p className="font-display-tight text-ink text-2xl md:text-3xl">{p.price}</p>
                              <p className="text-[10px] tracked text-ink/30 font-bold mt-1">EX-SHOWROOM, LAKHIMPUR</p>
                            </div>
                            <div className="h-10 w-px bg-ink/10" />
                            <div>
                              <p className="text-[11px] tracked text-volt-deep font-bold">EMI from ₹2,499/mo</p>
                              <p className="text-[10px] tracked text-ink/30 font-bold mt-0.5">NO COST EMI AVAILABLE</p>
                            </div>
                          </div>

                          {/* CTA */}
                          <div className="mt-8 flex items-center gap-4">
                            <span className="inline-flex items-center gap-3 text-[11px] tracked font-bold text-ink group/link">
                              <span className="w-12 h-12 rounded-full border-2 border-ink flex items-center justify-center group-hover/link:bg-ink group-hover/link:text-paper transition-all duration-300">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover/link:translate-x-0.5 transition-transform">
                                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                              </span>
                              Explore {p.name}
                            </span>
                          </div>

                          {/* Animated underline */}
                          <div className="mt-10 h-[3px] bg-ink/5 relative overflow-hidden max-w-xs">
                            <div className="absolute inset-y-0 left-0 w-0 bg-volt group-hover:w-full transition-all duration-1000 ease-out" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Divider between products */}
                  {i < list.length - 1 && (
                    <div className="hidden md:block my-12 md:my-16">
                      <div className="h-px bg-ink/5 relative max-w-[200px] mx-auto">
                        <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 w-3 h-3 bg-cream border border-ink/10 rotate-45" />
                      </div>
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>

          {/* Empty state */}
          {list.length === 0 && (
            <div className="text-center py-24">
              <p className="font-display-tight text-ink text-4xl">No models found.</p>
              <button
                onClick={() => setCat("all")}
                className="mt-6 inline-flex items-center gap-2 text-[11px] tracked font-bold text-volt-deep hover:text-ink transition-colors"
              >
                View all models →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* BOTTOM CTA — Full width dark band */}
      <section className="bg-ink text-paper py-24 md:py-40 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span className="font-display-tight text-[30vw] md:text-[18vw] leading-none text-paper/[0.02] whitespace-nowrap">
            RIDE
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <h2 className="font-display-tight text-paper text-[14vw] md:text-[7vw] leading-[0.82]">
                ELECTRIC<br />
                MOBILITY,<br />
                <span className="text-volt">WITHIN REACH.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="md:pl-12">
                <p className="text-paper/50 leading-[1.7] max-w-md text-sm md:text-base">
                  EMI from ₹2,499/month. Zero down payment options. Approved in 24 hours. No hidden costs, no dealer markups — just honest pricing for honest people.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    to="/finance"
                    className="inline-flex items-center gap-3 bg-volt px-8 py-5 text-[12px] tracked font-bold text-ink hover:bg-paper hover:text-ink transition-colors"
                  >
                    Apply for Finance
                    <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                  </Link>
                  <Link
                    to="/test-ride"
                    className="inline-flex items-center gap-3 border-2 border-paper/20 px-8 py-5 text-[12px] tracked font-bold text-paper hover:border-volt hover:text-volt transition-colors"
                  >
                    Book Test Ride
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
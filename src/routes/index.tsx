
import { Link } from "react-router-dom";
import heroScooter from "@/assets/hero-scooter.jpg";
import factory from "@/assets/factory.jpg";
import testimonial from "@/assets/testimonial-1.jpg";
import { products } from "@/lib/products";
import { Marquee } from "@/components/Marquee";
import { Reveal, CountUp } from "@/components/Reveal";
import { useState } from "react";
import { PageHead } from "@/lib/PageHead";

const meta = [
  { title: "OMEV — Built in Lakhimpur. Built for Bharat." },
  { name: "description", content: "Electric two and three wheelers, hand-assembled in Lakhimpur, UP. Zero emissions. 150KM range. Affordable EMI from ₹2,499/month." },
  { property: "og:title", content: "OMEV — Built in Lakhimpur. Built for Bharat." },
  { property: "og:description", content: "Electric two and three wheelers, hand-assembled in Lakhimpur, UP." },
  { property: "og:url", content: "/" },
];

const links = [{ rel: "canonical", href: "/" }];

export default function Home() {
  return (
    <>
      <PageHead title="OMEV — Built in Lakhimpur. Built for Bharat." meta={meta} links={links} />
      {/* HERO — shifted up by -2rem */}
      <section className="relative overflow-hidden bg-cream min-h-[100vh] flex items-center -mt-8">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none">
          <span className="text-outline-thick font-display-tight text-cream-watermark text-[42vw] leading-none">
            OMEV
          </span>
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-[1500px] grid-cols-1 items-center gap-8 px-5 py-20 md:grid-cols-12 md:gap-6 md:px-10 md:py-32">
          <div className="md:col-span-5">
            <Reveal>
              <p className="text-[11px] tracked text-volt-deep font-bold mb-6">Lakhimpur · Uttar Pradesh · India</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display-tight text-ink text-[16vw] md:text-[7.5vw] leading-[0.85]">
                BUILT IN<br />LAKHIMPUR.
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <h2 className="font-display-tight text-[16vw] md:text-[7.5vw] leading-[0.85] text-volt-deep">
                BUILT FOR<br />BHARAT.
              </h2>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-3 bg-ink px-7 py-4 text-[12px] tracked font-bold text-paper hover:bg-volt hover:text-ink transition-colors"
                >
                  Explore Fleet
                  <span className="h-1.5 w-1.5 rounded-full bg-volt" />
                </Link>
                <Link
                  to="/test-ride"
                  className="inline-flex items-center gap-3 bg-volt px-7 py-4 text-[12px] tracked font-bold text-ink hover:bg-ink hover:text-volt transition-colors"
                >
                  Book Test Ride
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7 relative">
            <Reveal delay={250}>
              <div className="relative">
                <img
                  src={heroScooter}
                  alt="OMEV electric scooter"
                  width={1600}
                  height={1280}
                  className="w-full h-auto object-contain animate-[bob_4s_ease-in-out_infinite]"
                />
                <div className="absolute -bottom-2 left-1/4 right-1/4 h-8 rounded-full bg-ink/20 blur-2xl" />
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracked text-ink/60">
          <span>Scroll</span>
          <span className="h-8 w-px bg-ink/40 animate-pulse" />
        </div>
        <style>{`@keyframes bob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }`}</style>
      </section>

      {/* MARQUEE */}
      
      {/* BUILT FOR BHARAT — Split-screen manifesto with sticky image */}
      <BuiltForBharat />

      {/* FLEET */}
     {/* FLEET — Editorial Showcase */}
<section className="bg-cream py-24 md:py-40 relative overflow-hidden">
  {/* Background watermark */}
  <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none">
    <span className="font-display-tight text-[40vw] md:text-[20vw] leading-none text-ink/[0.02] whitespace-nowrap -ml-[5vw]">
      FLEET
    </span>
  </div>

  <div className="relative z-10 mx-auto max-w-[1500px] px-5 md:px-10">
    {/* Header — Asymmetric split */}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 md:mb-32">
      <div className="md:col-span-8">
        <Reveal>
          <p className="text-[11px] tracked text-volt-deep font-bold mb-6">01 — The Fleet</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display-tight text-ink text-[18vw] md:text-[8vw] leading-[0.82]">
            PICK YOUR<br />
            <span className="text-volt-deep">MACHINE.</span>
          </h2>
        </Reveal>
      </div>
      <div className="md:col-span-4 flex flex-col justify-end items-start md:items-end">
        <Reveal delay={160}>
          <p className="text-sm text-ink/50 leading-[1.7] max-w-xs md:text-right">
            Every OMEV is engineered for Indian roads — potholes, monsoons, and everything in between. Choose the ride that fits your life.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-3 mt-6 text-[11px] tracked font-bold text-ink group"
          >
            <span className="border-b-2 border-volt pb-1 group-hover:border-ink transition-colors">View Full Catalogue</span>
            <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </Reveal>
      </div>
    </div>

    {/* Product Grid — Editorial Masonry */}
    <div className="grid gap-8 md:gap-6">
      {products.map((p, i) => {
        const isEven = i % 2 === 0;
        const isFirst = i === 0;

        return (
          <Reveal key={p.slug} delay={i * 120}>
            <Link
              to={`/products/${p.slug}`}
              className="group block"
            >
              <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center ${isEven ? '' : 'md:[direction:rtl]'} [&>*]:md:[direction:ltr]`}>
                {/* Image Column */}
                <div className={`${isFirst ? 'md:col-span-7' : 'md:col-span-6'} relative`}>
                  {/* Index number — massive, behind image */}
                  <span className="absolute -top-4 md:-top-8 left-0 md:left-4 font-display-tight text-[120px] md:text-[200px] leading-none text-ink/[0.04] select-none z-0 pointer-events-none">
                    0{i + 1}
                  </span>

                  {/* Image container with mustard frame */}
                  <div className="relative">
                    {/* Mustard offset frame */}
                    <div className={`absolute -bottom-3 ${isEven ? '-right-3' : '-left-3'} w-full h-full border-2 border-volt opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                    <div className={`relative overflow-hidden bg-paper ${isFirst ? 'aspect-[16/10]' : 'aspect-[4/3]'} shadow-card group-hover:shadow-product transition-shadow duration-700`}>
                      {/* Corner mustard triangle */}
                      <div className="absolute top-0 right-0 w-20 h-20 md:w-28 md:h-28 bg-volt z-10
                        [clip-path:polygon(100%_0,0_0,100%_100%)]
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />

                      <img
                        src={p.image}
                        alt={p.name}
                        width={1200}
                        height={1200}
                        loading="lazy"
                        className="w-full h-full object-cover transition-all duration-1000
                          group-hover:scale-[1.08] group-hover:-translate-y-3"
                      />

                      {/* Hover overlay with specs */}
                      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/50 transition-all duration-500 z-[2] flex items-end">
                        <div className="p-6 md:p-10 translate-y-full group-hover:translate-y-0 transition-transform duration-600 ease-out">
                          <div className="flex gap-8 md:gap-12 text-paper">
                            <div>
                              <p className="text-[10px] tracked text-paper/50 font-bold mb-1">RANGE</p>
                              <p className="font-display-tight text-3xl md:text-4xl">{p.range || "120"}<span className="text-lg">KM</span></p>
                            </div>
                            <div>
                              <p className="text-[10px] tracked text-paper/50 font-bold mb-1">TOP SPEED</p>
                              <p className="font-display-tight text-3xl md:text-4xl">{p.topSpeed || "55"}<span className="text-lg">KMPH</span></p>
                            </div>
                            <div>
                              <p className="text-[10px] tracked text-paper/50 font-bold mb-1">CHARGE</p>
                              <p className="font-display-tight text-3xl md:text-4xl">{p.chargeTime || "4"}<span className="text-lg">HRS</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info Column */}
                <div className={`${isFirst ? 'md:col-span-5' : 'md:col-span-6'} py-4 md:py-8`}>
                  <div className={`${isEven ? 'md:pl-8' : 'md:pr-8'}`}>
                    {/* Category tag */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-6 h-[2px] bg-volt" />
                      <span className="text-[10px] tracked text-ink/40 font-bold uppercase">
                        {p.category || "Electric Vehicle"}
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="font-display-tight text-ink text-4xl md:text-6xl lg:text-7xl leading-[0.9] group-hover:text-volt-deep transition-colors duration-500">
                      {p.name}
                    </h3>

                    {/* Tagline */}
                    <p className="text-sm md:text-base text-ink/40 leading-[1.7] mt-5 max-w-sm">
                      {p.tagline}
                    </p>

                    {/* Price block */}
                    <div className="mt-8 flex items-baseline gap-4">
                      <div>
                        <p className="font-display-tight text-ink text-2xl md:text-3xl">{p.price}</p>
                        <p className="text-[10px] tracked text-ink/30 font-bold mt-1">EX-SHOWROOM, LAKHIMPUR</p>
                      </div>
                      <div className="h-8 w-px bg-ink/10" />
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
            {i < products.length - 1 && (
              <div className="hidden md:block my-16 md:my-24">
                <div className="h-px bg-ink/5 relative">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 w-3 h-3 bg-cream border border-ink/10 rotate-45" />
                </div>
              </div>
            )}
          </Reveal>
        );
      })}
    </div>

    {/* Bottom CTA */}
    <Reveal delay={200}>
      <div className="mt-24 md:mt-36 pt-12 border-t-2 border-ink/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="font-display-tight text-ink text-2xl md:text-3xl leading-tight">
            Not sure which one?
          </p>
          <p className="text-sm text-ink/40 mt-2">
            Book a free test ride and feel the difference yourself.
          </p>
        </div>
        <Link
          to="/test-ride"
          className="inline-flex items-center gap-3 bg-ink px-10 py-5 text-[11px] tracked font-bold text-paper hover:bg-volt hover:text-ink transition-colors"
        >
          Book Test Ride
          <span className="h-1.5 w-1.5 rounded-full bg-volt" />
        </Link>
      </div>
    </Reveal>
  </div>
</section>

      {/* WHY OMEV */}
      <section className="bg-ink text-paper py-24 md:py-40 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span className="font-display-tight text-[30vw] md:text-[20vw] leading-none text-paper/[0.03] whitespace-nowrap">
            MADE HERE
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-5 md:px-10">
          <Reveal>
            <div className="flex items-center gap-6 mb-16 md:mb-20">
              <p className="text-[11px] tracked text-volt font-bold shrink-0">02 — Why OMEV</p>
              <div className="h-px flex-1 bg-paper/10" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
            <div className="md:col-span-6">
              <Reveal>
                <h2 className="font-display-tight text-[15vw] md:text-[7vw] leading-[0.82] text-paper">
                  ZERO<br />EMISSIONS.
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-display-tight text-[15vw] md:text-[7vw] leading-[0.82] text-volt mt-1">
                  MAXIMUM<br />RANGE.
                </h2>
              </Reveal>

              <Reveal delay={160}>
                <div className="mt-10 md:mt-14 max-w-lg">
                  <p className="text-[15px] md:text-base text-paper/50 leading-[1.7]">
                    Every OMEV is assembled by hand in Lakhimpur, Uttar Pradesh. Not in a lab. On real Indian roads.
                    Through real monsoons. Over real potholes.
                  </p>
                  <p className="text-[15px] md:text-base text-paper/50 leading-[1.7] mt-4">
                    We don't chase specs on paper. We chase reliability on the road. Because Bharat doesn't need promises.
                    It needs machines that work.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 mt-10 text-[11px] tracked font-bold text-paper group"
                >
                  <span className="w-10 h-10 rounded-full border border-paper/20 flex items-center justify-center
                    group-hover:bg-volt group-hover:border-volt group-hover:text-ink transition-all duration-300">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                  Our Story
                </Link>
              </Reveal>
            </div>

            <div className="md:col-span-5 md:col-start-8 relative mt-4 md:mt-12">
              <Reveal delay={120}>
                <div className="absolute -top-3 -right-3 md:-top-5 md:-right-5 w-full h-full border-2 border-volt" />
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={factory}
                    alt="OMEV factory floor in Lakhimpur"
                    width={1080}
                    height={1350}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-ink/15" />
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-12 bg-volt p-5 md:p-7 z-10">
                  <p className="font-display-tight text-ink text-3xl md:text-4xl leading-none">100%</p>
                  <p className="text-[10px] tracked text-ink/60 font-bold mt-2 uppercase">Assembled in<br />Uttar Pradesh</p>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={350}>
            <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 border-t border-paper/10 pt-12">
              {[
                { title: "Hand Assembled", desc: "Every nut, bolt, and wire fitted by skilled technicians in Lakhimpur. No robots. Just hands that care." },
                { title: "Road Tested", desc: "Not dyno-tested. Driven on actual UP roads before it reaches you. Rain, dust, and all." },
                { title: "Bharat Pricing", desc: "EMI from ₹2,499/month. No hidden costs. No dealer markups. Honest pricing for honest people." },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-volt shrink-0" />
                    <h4 className="text-[11px] tracked font-bold text-paper uppercase">{item.title}</h4>
                  </div>
                  <p className="text-sm text-paper/40 leading-[1.7] pl-5 border-l border-paper/10">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <ImpactCounter />
<HowItWorks />
      {/* TESTIMONIAL */}
      <Testimonial />

      {/* CTA BANNER */}
      <CTABanner />
    </>
  );
}


function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Choose Your Ride",
      desc: "Pick from our fleet of electric two and three wheelers. Every model built for Indian roads, Indian weather, Indian budgets.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Book a Test Ride",
      desc: "Feel the torque. Feel the silence. No pushy salesmen, no paperwork — just you and the machine on real roads.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Finance & Delivery",
      desc: "EMI from ₹2,499/month. Zero hidden costs. We handle RTO, insurance, and registration. You just ride.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M2 10h20" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Ride & Save",
      desc: "₹0.50 per kilometre. No petrol. No pollution. Just pure, silent, affordable mobility. Built in Lakhimpur. Built for you.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-cream py-24 md:py-40 relative overflow-hidden">
      {/* Background watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="font-display-tight text-[25vw] md:text-[15vw] leading-none text-ink/[0.03] whitespace-nowrap">
          STEPS
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 md:px-10">
        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-6 mb-16 md:mb-24">
            <p className="text-[11px] tracked text-volt-deep font-bold shrink-0">04 — How It Works</p>
            <div className="h-px flex-1 bg-ink/10" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Left: Sticky title */}
          <div className="md:col-span-4 md:sticky md:top-32 md:self-start">
            <Reveal>
              <h2 className="font-display-tight text-ink text-[14vw] md:text-[5vw] leading-[0.85]">
                FOUR<br />
                <span className="text-volt-deep">STEPS.</span><br />
                ONE<br />
                RIDE.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 text-sm text-ink/50 leading-[1.7] max-w-xs">
                From choosing your machine to hitting the road — we've stripped away every unnecessary step. No dealership drama. No hidden fees.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <Link
                to="/products"
                className="inline-flex items-center gap-3 mt-8 text-[11px] tracked font-bold text-ink group"
              >
                <span className="w-10 h-10 rounded-full border-2 border-ink flex items-center justify-center group-hover:bg-ink group-hover:text-paper transition-all duration-300">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                Start Now
              </Link>
            </Reveal>
          </div>

          {/* Right: Steps with animated vertical line */}
          <div className="md:col-span-7 md:col-start-6 relative">
            {/* Animated vertical mustard line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-ink/10 overflow-hidden">
              <div className="w-full bg-volt animate-[drawLine_2s_ease-out_forwards]" style={{ height: 0, animationFillMode: 'forwards' }} />
            </div>

            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 150}>
                <div className="group relative pl-16 md:pl-24 pb-16 md:pb-24 last:pb-0">
                  {/* Number circle */}
                  <div className="absolute left-0 md:left-2 top-0 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-ink bg-cream flex items-center justify-center group-hover:bg-ink group-hover:border-ink transition-all duration-500 z-10">
                    <span className="font-display-tight text-ink text-sm md:text-base group-hover:text-volt transition-colors duration-500">
                      {step.num}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="group-hover:translate-x-2 transition-transform duration-500">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-ink/20 group-hover:text-volt transition-colors duration-500">
                        {step.icon}
                      </span>
                      <h3 className="font-display-tight text-ink text-2xl md:text-3xl group-hover:text-volt-deep transition-colors duration-500">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-ink/50 leading-[1.7] max-w-md group-hover:text-ink/70 transition-colors duration-500">
                      {step.desc}
                    </p>

                    {/* Mustard underline */}
                    <div className="mt-6 h-[2px] bg-ink/5 relative overflow-hidden max-w-xs">
                      <div className="absolute inset-y-0 left-0 w-0 bg-volt group-hover:w-full transition-all duration-700 ease-out" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes drawLine {
          0% { height: 0; }
          100% { height: 100%; }
        }
      `}</style>
    </section>
  );
}

function ImpactCounter() {
  const stats = [
    {
      prefix: "₹",
      value: 0.5,
      suffix: "",
      label: "Per Kilometre",
      desc: "That's 7x cheaper than petrol. The math doesn't lie.",
      highlight: "0.50",
    },
    {
      prefix: "₹",
      value: 12000,
      suffix: "+",
      label: "Monthly Savings",
      desc: "Average fuel cost saved by delivery riders switching to OMEV.",
      highlight: "12,000",
    },
    {
      value: 150,
      suffix: "KM",
      label: "Real World Range",
      desc: "Not lab conditions. Actual range on UP roads, full load, real speeds.",
      highlight: "150",
    },
    {
      value: 100,
      suffix: "%",
      label: "Assembled in UP",
      desc: "Every nut, bolt, and wire. Hand-fitted in Lakhimpur by skilled technicians.",
      highlight: "100",
    },
  ];

  return (
    <section className="bg-ink text-paper py-24 md:py-40 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 80px)`
        }} />
      </div>

      {/* Giant watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="font-display-tight text-[30vw] md:text-[18vw] leading-none text-paper/[0.02] whitespace-nowrap">
          IMPACT
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 md:px-10">
        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-6 mb-16 md:mb-24">
            <p className="text-[11px] tracked text-volt font-bold shrink-0">05 — The Real Math</p>
            <div className="h-px flex-1 bg-paper/10" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 md:gap-y-28">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 120}>
              <div className="group relative">
                {/* Number */}
                <div className="flex items-baseline gap-1 mb-4">
                  {stat.prefix && (
                    <span className="font-display-tight text-volt text-[6vw] md:text-[3vw] leading-none">
                      {stat.prefix}
                    </span>
                  )}
                  <span className="font-display-tight text-paper text-[18vw] md:text-[9vw] leading-[0.8] group-hover:text-volt transition-colors duration-700">
                    {stat.highlight}
                  </span>
                  <span className="font-display-tight text-volt text-[6vw] md:text-[3vw] leading-none">
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-[2px] bg-volt" />
                  <h3 className="text-[11px] tracked font-bold text-paper uppercase">
                    {stat.label}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-paper/40 leading-[1.7] max-w-sm pl-11 group-hover:text-paper/60 transition-colors duration-500">
                  {stat.desc}
                </p>

                {/* Hover mustard block */}
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-volt scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top hidden md:block" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={400}>
          <div className="mt-24 md:mt-32 pt-12 border-t border-paper/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <p className="text-sm text-paper/40 max-w-md">
              These aren't projections. These are numbers from real OMEV riders on real Indian roads. Every single day.
            </p>
            <Link
              to="/test-ride"
              className="inline-flex items-center gap-3 bg-volt px-8 py-4 text-[11px] tracked font-bold text-ink hover:bg-paper hover:text-ink transition-colors shrink-0"
            >
              Calculate Your Savings
              <span className="h-1.5 w-1.5 rounded-full bg-ink" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


/* ─── BUILT FOR BHARAT — Split-screen manifesto with sticky image ─── */
function BuiltForBharat() {
  const painPoints = [
    {
      label: "Fuel Prices",
      stat: "₹104",
      unit: "/litre",
      desc: "Petrol in UP. Rising every month. Eating into every family's budget.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 20h16M6 20V10l6-6 6 6v10M12 4v16" />
        </svg>
      ),
    },
    {
      label: "Daily Savings",
      stat: "₹400",
      unit: "/day",
      desc: "Average fuel cost saved by OMEV riders. That's ₹12,000 every single month.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      ),
    },
    {
      label: "Running Cost",
      stat: "₹0.50",
      unit: "/km",
      desc: "Electric vs ₹3.50/km on petrol. The math is simple. The savings are real.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v20M2 12h20" />
        </svg>
      ),
    },
  ];

  return (

    <section className="bg-paper relative">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Sticky image */}
          <div className="relative h-[50vh] md:h-auto md:sticky md:-top-[-4rem] md:self-start">
            <div className="absolute inset-0 bg-ink">
              <img
                src={factory}
                alt="OMEV factory"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-ink/60" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-16">
              <Reveal>
                <p className="text-[11px] tracked text-volt font-bold mb-4">The Problem</p>
                <h2 className="font-display-tight text-paper text-[12vw] md:text-[5vw] leading-[0.85]">
                  FUEL IS<br />BURNING<br />HOLES.
                </h2>
              </Reveal>
            </div>
            {/* Diagonal mustard slash */}
            <div className="absolute top-0 right-0 w-32 h-full bg-volt [clip-path:polygon(100%_0,100%_100%,0_100%)] opacity-20 hidden md:block" />
          </div>

          {/* Right: Scrolling pain points */}
          <div className="bg-cream">
            {painPoints.map((point, i) => (
              <Reveal key={point.label} delay={i * 100}>
                <div className="group border-b border-ink/5 p-8 md:p-16 hover:bg-paper transition-colors duration-500">
                  <div className="flex items-start justify-between mb-8">
                    <span className="text-ink/20 group-hover:text-volt/30 transition-colors duration-500">
                      {point.icon}
                    </span>
                    <span className="text-[10px] tracked text-ink/30 font-bold">0{i + 1}</span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-display-tight text-ink text-[15vw] md:text-[6vw] leading-none">
                      {point.stat}
                    </span>
                    <span className="text-[11px] tracked text-ink/40 font-bold">{point.unit}</span>
                  </div>

                  <h3 className="text-[11px] tracked text-volt-deep font-bold mb-3 uppercase">
                    {point.label}
                  </h3>
                  <p className="text-sm text-ink/50 leading-[1.7] max-w-sm">
                    {point.desc}
                  </p>

                  {/* Hover mustard line */}
                  <div className="mt-8 h-[2px] bg-ink/5 relative overflow-hidden">
                    <div className="absolute inset-y-0 left-0 w-0 bg-volt group-hover:w-full transition-all duration-700" />
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Bottom CTA within the scrollable column */}
            <Reveal delay={300}>
              <div className="p-8 md:p-16 bg-ink">
                <p className="font-display-tight text-paper text-3xl md:text-4xl leading-tight mb-6">
                  There is a<br />better way.
                </p>
                <p className="text-sm text-paper/40 leading-[1.7] max-w-sm mb-8">
                  Switch to electric. Start saving from day one. No compromise on power. No compromise on range.
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-3 bg-volt px-8 py-4 text-[11px] tracked font-bold text-ink hover:bg-paper hover:text-ink transition-colors"
                >
                  See the Fleet
                  <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  const quotes = [
    { name: "Rajesh K.", role: "Delivery rider, Kanpur", text: "I save ₹400 on fuel every single day. The VOLT X paid itself off in 9 months." },
    { name: "Priya S.", role: "Student, Lucknow", text: "First electric scooter that actually feels built for our roads. Mine has 18,000km on it." },
    { name: "Suresh M.", role: "Farmer, Sitapur", text: "The KARYA 3 carries my produce to the mandi every morning. Charges off my solar setup." },
  ];
  const [i, setI] = useState(0);
  return (
    <section className="bg-cream pb-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <Reveal>
          <div className="relative bg-paper p-8 md:p-16 shadow-card">
            <div className="grid gap-10 md:grid-cols-[200px_1fr] items-center">
              <img src={testimonial} alt={quotes[i].name} width={400} height={400} loading="lazy" className="aspect-square w-40 md:w-48 rounded-full object-cover" />
              <div>
                <span className="font-display-tight text-volt text-7xl leading-none">"</span>
                <p className="font-display-tight text-ink text-3xl md:text-5xl leading-tight italic">
                  {quotes[i].text}
                </p>
                <p className="mt-6 text-[12px] tracked font-bold text-volt-deep">{quotes[i].name}</p>
                <p className="text-[12px] tracked text-ink/60">{quotes[i].role}</p>
              </div>
            </div>
            <div className="absolute bottom-6 left-8 right-8 md:left-16 md:right-16 h-[2px] bg-ink/10">
              <div
                className="h-full bg-volt transition-all duration-500"
                style={{ width: `${((i + 1) / quotes.length) * 100}%` }}
              />
            </div>
            <div className="absolute top-8 right-8 flex gap-2">
              {quotes.map((_, j) => (
                <button
                  key={j}
                  onClick={() => setI(j)}
                  aria-label={`Quote ${j + 1}`}
                  className={`h-2 w-2 rounded-full transition-all ${j === i ? "bg-volt w-8" : "bg-ink/20"}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CTABanner() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section data-surface="dark" className="bg-volt py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 text-center">
        <Reveal>
          <h2 className="font-display-tight text-ink text-[14vw] md:text-[7vw] leading-[0.85]">
            STOP WAITING.<br />START RIDING.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="mt-12 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.in"
              className="flex-1 bg-cream border-2 border-ink px-5 py-4 text-ink text-sm placeholder:text-ink/40 focus:outline-none focus:border-ink"
            />
            <button
              className="bg-ink text-paper px-8 py-4 text-[11px] tracked font-bold hover:bg-cream hover:text-ink transition-colors"
            >
              {sent ? "YOU'RE IN ✓" : "Subscribe"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
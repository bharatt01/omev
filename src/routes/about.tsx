import factory from "@/assets/factory.jpg";
import leader1 from "@/assets/leader-1.jpg";
import leader2 from "@/assets/leader-2.jpg";
import { Reveal } from "@/components/Reveal";
import { PageHead } from "@/lib/PageHead";
import { Link } from "react-router-dom";
import { useState } from "react";

const meta = [
  { title: "Why OMEV — Built in Bharat" },
  { name: "description", content: "We don't import. We build. Inside OMEV's Lakhimpur factory and the team building electric mobility for Bharat." },
  { property: "og:title", content: "Why OMEV — Built in Bharat" },
  { property: "og:description", content: "Inside OMEV's Lakhimpur factory and the team building electric mobility for Bharat." },
  { property: "og:url", content: "/about" },
];

const links = [{ rel: "canonical", href: "/about" }];

const milestones = [
  { year: "2019", text: "OMEV founded in a 2000 sq ft workshop in Lakhimpur with a team of 4.", detail: "Started with a single prototype and a belief that Bharat deserved better mobility." },
  { year: "2021", text: "First 1,000 VOLT scooters delivered across 8 districts in UP.", detail: "Every unit hand-assembled, road-tested, and delivered by our own team." },
  { year: "2023", text: "In-house battery line opens. KARYA 3 launched for commercial riders.", detail: "Vertical integration cut costs by 30%. Local sourcing hit 85%." },
  { year: "2025", text: "Expanded to 3 states. 50+ dealer partners. 15,000+ vehicles on road.", detail: "From Lakhimpur to Lucknow to Jaipur — the mission keeps growing." },
  { year: "2026", text: "New 50,000 sq ft facility under construction. Export planning begins.", detail: "Nepal and Bangladesh markets identified. Bharat's EV goes global." },
];

const values = [
  {
    title: "Hand Built",
    desc: "Every OMEV is assembled by skilled technicians in Lakhimpur. No fully automated lines. Just hands that understand every bolt, every wire, every weld.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Road Tested",
    desc: "Not dyno-tested. Every unit is driven on actual UP roads — through monsoons, dust storms, and potholes — before it reaches a single customer.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Bharat Pricing",
    desc: "EMI from ₹2,499/month. No hidden costs. No dealer markups. Honest pricing because we believe mobility is a right, not a luxury.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Local First",
    desc: "85% of components sourced from Uttar Pradesh and neighbouring states. We don't import what we can build. We don't outsource what we can hire locally.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

const team = [
  { img: leader1, name: "Vikram Singh", title: "Founder & Plant Head", bio: "Former automotive engineer. Built the first OMEV prototype in his backyard workshop in 2019." },
  { img: leader2, name: "Anita Verma", title: "Head of Engineering", bio: "IIT Kanpur alum. Leads battery R&D and vehicle architecture. 12 patents filed." },
  { img: leader1, name: "Rohit Yadav", title: "Battery Lead", bio: "Self-taught electronics expert. Designed OMEV's proprietary BMS from scratch." },
  { img: leader2, name: "Priya Sharma", title: "Operations Director", bio: "Former supply chain lead at a major auto OEM. Brought lean manufacturing to Lakhimpur." },
];

const process = [
  {
    step: "01",
    title: "Design",
    desc: "Every OMEV starts on paper in Lakhimpur. Sketched for Indian roads, Indian weather, Indian budgets. Not adapted from foreign templates.",
  },
  {
    step: "02",
    title: "Prototype",
    desc: "Built by hand in our workshop. Tested on local roads for 3 months minimum. Failed, fixed, rebuilt. Only then approved for production.",
  },
  {
    step: "03",
    title: "Source",
    desc: "Components from UP, Bihar, and MP. Frame from Kanpur. Motors from Noida. Batteries assembled in-house. 85% local. 100% traceable.",
  },
  {
    step: "04",
    title: "Assemble",
    desc: "Skilled technicians — not robots — fit every nut, bolt, and wire. Quality checked at 12 stations. Zero tolerance for shortcuts.",
  },
  {
    step: "05",
    title: "Test",
    desc: "Every unit driven 50km on actual roads. Rain test. Dust test. Load test. If it doesn't survive UP, it doesn't leave the factory.",
  },
  {
    step: "06",
    title: "Deliver",
    desc: "Direct to your door or nearest dealer. No middlemen. Full documentation. 3-year warranty. Local service support from day one.",
  },
];

export default function About() {
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [activeProcess, setActiveProcess] = useState(0);

  return (
    <>
      <PageHead title="Why OMEV — Built in Bharat" meta={meta} links={links} />

      {/* HERO — Split with massive typography and animated image */}
      <section className="relative bg-cream min-h-[90vh] flex items-center overflow-hidden">
        {/* Background watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span className="font-display-tight text-[45vw] md:text-[25vw] leading-none text-ink/[0.02] whitespace-nowrap">
            BUILD
          </span>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 md:px-10 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            {/* Left: Text */}
            <div className="md:col-span-6">
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-[2px] bg-volt" />
                  <p className="text-[11px] tracked text-ink/40 font-bold uppercase">About OMEV</p>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display-tight text-ink text-[18vw] md:text-[9vw] leading-[0.8]">
                  WE DON'T<br />
                  IMPORT.<br />
                  <span className="text-volt-deep">WE BUILD.</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 text-sm md:text-base text-ink/50 leading-[1.7] max-w-md">
                  In a 2000 sq ft workshop in Lakhimpur, Uttar Pradesh, a team of four started with a single belief: Bharat deserves electric mobility built for Bharat — not adapted from abroad, not imported at markup, but designed, engineered, and assembled right here.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-10 flex items-center gap-6">
                  <div className="flex -space-x-3">
                    {[leader1, leader2, leader1, leader2].map((img, i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-cream overflow-hidden">
                        <img src={img} alt="" className="w-full h-full object-cover grayscale" />
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] tracked text-ink/40 font-bold">TEAM OF 80+ BUILDERS</p>
                </div>
              </Reveal>
            </div>

            {/* Right: Image with mustard frame */}
            <div className="md:col-span-6 relative">
              <Reveal delay={200}>
                <div className="relative">
                  <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-full h-full border-2 border-volt" />
                  <div className="relative aspect-[3/4] overflow-hidden bg-ink">
                    <img
                      src={factory}
                      alt="OMEV factory floor in Lakhimpur"
                      width={1080}
                      height={1440}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-ink/20" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-ink/80 to-transparent">
                      <p className="text-[10px] tracked text-volt font-bold mb-2">LAKHIMPUR, UTTAR PRADESH</p>
                      <p className="font-display-tight text-paper text-2xl md:text-3xl">Where it all begins.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO — Dark section with bold statement */}
      <section className="bg-ink text-paper py-24 md:py-40 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span className="font-display-tight text-[35vw] md:text-[20vw] leading-none text-paper/[0.02] whitespace-nowrap">
            BHARAT
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <Reveal>
                <p className="text-[11px] tracked text-volt font-bold mb-6">Our Manifesto</p>
                <h2 className="font-display-tight text-paper text-[12vw] md:text-[5vw] leading-[0.82]">
                  BUILT FOR<br />
                  <span className="text-volt">THE ROAD.</span><br />
                  NOT THE<br />
                  BROCHURE.
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
              <Reveal delay={120}>
                <p className="text-[15px] md:text-base text-paper/50 leading-[1.8]">
                  Most EV companies design for lab conditions. We design for Lakhimpur roads. For the monsoon that floods the streets for three months. For the dust that coats everything in summer. For the potholes that test every weld.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-[15px] md:text-base text-paper/50 leading-[1.8] mt-6">
                  We don't chase range numbers on paper. We chase reliability on the road. Because Bharat doesn't need promises. It needs machines that work — day in, day out, year after year.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <div className="mt-10 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-volt" />
                  <p className="text-[11px] tracked text-volt font-bold">VIKRAM SINGH, FOUNDER</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES — 4 pillars with icons and hover effects */}
      <section className="bg-cream py-24 md:py-40">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <Reveal>
            <div className="flex items-center gap-6 mb-16 md:mb-24">
              <p className="text-[11px] tracked text-volt-deep font-bold shrink-0">What We Stand For</p>
              <div className="h-px flex-1 bg-ink/10" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 120}>
                <div className="group relative p-8 md:p-12 bg-paper border border-ink/5 hover:border-volt/30 transition-all duration-500">
                  {/* Number */}
                  <span className="absolute top-6 right-6 md:top-8 md:right-8 font-display-tight text-6xl md:text-8xl text-ink/[0.03] leading-none select-none">
                    0{i + 1}
                  </span>

                  {/* Icon */}
                  <div className="text-volt mb-6 group-hover:scale-110 transition-transform duration-500">
                    {v.icon}
                  </div>

                  <h3 className="font-display-tight text-ink text-3xl md:text-4xl group-hover:text-volt-deep transition-colors duration-500">
                    {v.title}
                  </h3>

                  <p className="text-sm md:text-base text-ink/50 leading-[1.7] mt-4 max-w-sm group-hover:text-ink/70 transition-colors duration-500">
                    {v.desc}
                  </p>

                  {/* Animated mustard line */}
                  <div className="mt-8 h-[2px] bg-ink/5 relative overflow-hidden max-w-[200px]">
                    <div className="absolute inset-y-0 left-0 w-0 bg-volt group-hover:w-full transition-all duration-700" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE — Interactive with expandable details */}
      <section className="bg-ink text-paper py-24 md:py-40 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-paper/10" />

        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <Reveal>
            <div className="flex items-center gap-6 mb-16 md:mb-24">
              <p className="text-[11px] tracked text-volt font-bold shrink-0">Our Journey</p>
              <div className="h-px flex-1 bg-paper/10" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Left: Year selector */}
            <div className="md:col-span-4">
              <div className="space-y-0">
                {milestones.map((m, i) => (
                  <Reveal key={m.year} delay={i * 80}>
                    <button
                      onClick={() => setActiveMilestone(i)}
                      className={`w-full text-left py-5 border-b border-paper/10 group transition-all ${
                        activeMilestone === i ? "pl-4" : "pl-0 hover:pl-2"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`font-display-tight text-4xl md:text-5xl leading-none transition-colors duration-300 ${
                          activeMilestone === i ? "text-volt" : "text-paper/20 group-hover:text-paper/40"
                        }`}>
                          {m.year}
                        </span>
                        {activeMilestone === i && (
                          <span className="w-8 h-[2px] bg-volt animate-[expand_0.3s_ease-out]" />
                        )}
                      </div>
                    </button>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right: Active milestone detail */}
            <div className="md:col-span-7 md:col-start-6">
              <Reveal key={activeMilestone}>
                <div className="animate-[fadeSlide_0.5s_ease-out]">
                  <p className="font-display-tight text-volt text-8xl md:text-9xl leading-none">
                    {milestones[activeMilestone].year}
                  </p>
                  <h3 className="font-display-tight text-paper text-3xl md:text-4xl mt-8 leading-tight">
                    {milestones[activeMilestone].text}
                  </h3>
                  <p className="text-sm md:text-base text-paper/40 leading-[1.8] mt-6 max-w-lg">
                    {milestones[activeMilestone].detail}
                  </p>

                  {/* Decorative line */}
                  <div className="mt-10 flex items-center gap-4">
                    <span className="w-16 h-[2px] bg-volt" />
                    <span className="text-[10px] tracked text-paper/20 font-bold">
                      MILESTONE {activeMilestone + 1} OF {milestones.length}
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeSlide {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes expand {
            from { width: 0; }
            to { width: 2rem; }
          }
        `}</style>
      </section>

      {/* PROCESS — Horizontal step cards */}
      <section className="bg-cream py-24 md:py-40 overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <Reveal>
            <div className="flex items-center gap-6 mb-16 md:mb-24">
              <p className="text-[11px] tracked text-volt-deep font-bold shrink-0">How We Build</p>
              <div className="h-px flex-1 bg-ink/10" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {process.slice(0, 3).map((p, i) => (
              <Reveal key={p.step} delay={i * 120}>
                <div
                  className={`group relative p-8 md:p-10 bg-paper border border-ink/5 hover:border-volt/20 transition-all duration-500 cursor-pointer ${
                    activeProcess === i ? "border-volt/40" : ""
                  }`}
                  onMouseEnter={() => setActiveProcess(i)}
                >
                  <span className="font-display-tight text-ink/[0.04] text-[120px] md:text-[160px] leading-none absolute -top-4 -right-4 select-none">
                    {p.step}
                  </span>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-10 h-10 rounded-full bg-ink text-paper flex items-center justify-center font-display-tight text-sm">
                        {p.step}
                      </span>
                      <span className="w-8 h-[2px] bg-volt" />
                    </div>
                    <h3 className="font-display-tight text-ink text-2xl md:text-3xl group-hover:text-volt-deep transition-colors duration-500">
                      {p.title}
                    </h3>
                    <p className="text-sm text-ink/50 leading-[1.7] mt-4">
                      {p.desc}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-volt scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-8 md:mt-10">
            {process.slice(3, 6).map((p, i) => (
              <Reveal key={p.step} delay={(i + 3) * 120}>
                <div
                  className={`group relative p-8 md:p-10 bg-paper border border-ink/5 hover:border-volt/20 transition-all duration-500 cursor-pointer ${
                    activeProcess === i + 3 ? "border-volt/40" : ""
                  }`}
                  onMouseEnter={() => setActiveProcess(i + 3)}
                >
                  <span className="font-display-tight text-ink/[0.04] text-[120px] md:text-[160px] leading-none absolute -top-4 -right-4 select-none">
                    {p.step}
                  </span>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-10 h-10 rounded-full bg-ink text-paper flex items-center justify-center font-display-tight text-sm">
                        {p.step}
                      </span>
                      <span className="w-8 h-[2px] bg-volt" />
                    </div>
                    <h3 className="font-display-tight text-ink text-2xl md:text-3xl group-hover:text-volt-deep transition-colors duration-500">
                      {p.title}
                    </h3>
                    <p className="text-sm text-ink/50 leading-[1.7] mt-4">
                      {p.desc}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-volt scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FACTORY VIDEO SECTION */}
      <section className="bg-cream pb-24 md:pb-40">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <Reveal>
            <div className="relative aspect-[21/9] overflow-hidden group">
              <img
                src={factory}
                alt="OMEV factory floor"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/30 transition-colors duration-500" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="relative group/btn">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-volt flex items-center justify-center group-hover/btn:scale-110 transition-transform duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-1">
                      <path d="M5 3l14 9-14 9V3z" fill="currentColor" className="text-ink" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-volt animate-[ping_2s_ease-in-out_infinite] opacity-30" />
                </button>
              </div>

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 bg-gradient-to-t from-ink/80 to-transparent">
                <p className="text-[10px] tracked text-volt font-bold mb-2">WATCH</p>
                <p className="font-display-tight text-paper text-2xl md:text-4xl">Inside the Lakhimpur Factory</p>
              </div>
            </div>
          </Reveal>

          {/* Quick factory stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: "50,000", l: "Sq Ft Facility" },
              { n: "80+", l: "Team Members" },
              { n: "12", l: "Quality Stations" },
              { n: "50km", l: "Road Test Per Unit" },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 80}>
                <div className="border-l-2 border-volt pl-5">
                  <p className="font-display-tight text-ink text-3xl md:text-4xl">{s.n}</p>
                  <p className="text-[10px] tracked text-ink/40 font-bold mt-2 uppercase">{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM — With hover bio reveal */}
      <section className="bg-ink text-paper py-24 md:py-40 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span className="font-display-tight text-[30vw] md:text-[18vw] leading-none text-paper/[0.02] whitespace-nowrap">
            TEAM
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-5 md:px-10">
          <Reveal>
            <div className="flex items-center gap-6 mb-16 md:mb-24">
              <p className="text-[11px] tracked text-volt font-bold shrink-0">The Builders</p>
              <div className="h-px flex-1 bg-paper/10" />
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {team.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <div className="group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-paper">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/60 transition-all duration-500 flex items-end">
                      <div className="p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-sm text-paper/80 leading-[1.6]">{p.bio}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-[12px] tracked font-bold text-volt">{p.name}</p>
                    <p className="text-sm text-paper/50 mt-1">{p.title}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REACH — Network stats */}
      <section className="bg-cream py-24 md:py-40">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
              <div>
                <p className="text-[11px] tracked text-volt-deep font-bold mb-4">Our Reach</p>
                <h2 className="font-display-tight text-ink text-[12vw] md:text-[5vw] leading-[0.82]">
                  GROWING<br />
                  <span className="text-volt-deep">ACROSS BHARAT.</span>
                </h2>
              </div>
              <p className="text-sm md:text-base text-ink/50 leading-[1.7] max-w-md">
                From one workshop in Lakhimpur to a network spanning three states. Every dealer, every service center, every charging point — built with the same hands-on commitment.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { n: "3", l: "States Covered", d: "Uttar Pradesh, Rajasthan, Madhya Pradesh" },
              { n: "50+", l: "Dealer Partners", d: "Authorized showrooms with test ride facilities" },
              { n: "28", l: "Service Centers", d: "Company-trained technicians at every location" },
              { n: "120+", l: "Charging Points", d: "Fast charging network across partner locations" },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 100}>
                <div className="group relative p-6 md:p-8 bg-paper border border-ink/5 hover:border-volt/20 transition-all duration-500">
                  <p className="font-display-tight text-ink text-5xl md:text-6xl group-hover:text-volt-deep transition-colors duration-500">
                    {s.n}
                  </p>
                  <p className="text-[11px] tracked text-volt-deep font-bold mt-3 uppercase">{s.l}</p>
                  <p className="text-sm text-ink/40 leading-[1.6] mt-3">{s.d}</p>
                  <div className="absolute top-0 left-0 w-full h-1 bg-volt scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Final call to action */}
      <section className="bg-ink text-paper py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-paper/10" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-5 md:px-10 text-center">
          <Reveal>
            <h2 className="font-display-tight text-paper text-[14vw] md:text-[7vw] leading-[0.82]">
              JOIN THE<br />
              <span className="text-volt">MOVEMENT.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-paper/50 max-w-lg mx-auto mt-8 text-sm md:text-base leading-[1.7]">
              Whether you're a rider, a dealer, or an investor — there's a place for you in the OMEV story. Built in Lakhimpur. Built for Bharat.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link
                to="/test-ride"
                className="inline-flex items-center gap-3 bg-volt px-8 py-5 text-[12px] tracked font-bold text-ink hover:bg-paper hover:text-ink transition-colors"
              >
                Book a Test Ride
                <span className="h-1.5 w-1.5 rounded-full bg-ink" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border-2 border-paper/20 px-8 py-5 text-[12px] tracked font-bold text-paper hover:border-volt hover:text-volt transition-colors"
              >
                Become a Dealer
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
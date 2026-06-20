import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { PageHead } from "@/lib/PageHead";
import { Link } from "react-router-dom";

const meta = [
  { title: "Find a Dealer — OMEV" },
  { name: "description", content: "Locate your nearest OMEV dealer across Uttar Pradesh, Rajasthan, and Madhya Pradesh. Test rides, service, and sales." },
  { property: "og:title", content: "Find a Dealer — OMEV" },
  { property: "og:description", content: "OMEV dealers and service centers near you." },
  { property: "og:url", content: "/dealers" },
];

const links = [{ rel: "canonical", href: "/dealers" }];

const states = ["All", "Uttar Pradesh", "Rajasthan", "Madhya Pradesh"];

const dealers = [
  {
    name: "OMEV Lakhimpur Flagship",
    city: "Lakhimpur Kheri",
    state: "Uttar Pradesh",
    phone: "+91 98765 11000",
    address: "Station Road, Near Bus Stand, Lakhimpur Kheri, UP 262701",
    hours: "Mon-Sat: 9AM - 7PM | Sun: 10AM - 4PM",
    services: ["Sales", "Test Ride", "Service", "Spares"],
    type: "flagship",
    coords: [220, 180],
  },
  {
    name: "Lucknow Electric Hub",
    city: "Lucknow",
    state: "Uttar Pradesh",
    phone: "+91 98765 11001",
    address: "Hazratganj, Near GPO, Lucknow, UP 226001",
    hours: "Mon-Sat: 9AM - 8PM | Sun: 10AM - 5PM",
    services: ["Sales", "Test Ride", "Service", "Finance"],
    type: "dealer",
    coords: [340, 170],
  },
  {
    name: "Kanpur EV Center",
    city: "Kanpur",
    state: "Uttar Pradesh",
    phone: "+91 98765 11002",
    address: "Mall Road, Civil Lines, Kanpur, UP 208001",
    hours: "Mon-Sat: 9AM - 7PM | Sun: Closed",
    services: ["Sales", "Test Ride", "Service"],
    type: "dealer",
    coords: [380, 230],
  },
  {
    name: "Sitapur Auto World",
    city: "Sitapur",
    state: "Uttar Pradesh",
    phone: "+91 98765 11003",
    address: "Delhi Road, Opposite Railway Station, Sitapur, UP 261001",
    hours: "Mon-Sat: 9AM - 7PM | Sun: 10AM - 2PM",
    services: ["Sales", "Test Ride"],
    type: "dealer",
    coords: [280, 160],
  },
  {
    name: "Bareilly Green Wheels",
    city: "Bareilly",
    state: "Uttar Pradesh",
    phone: "+91 98765 11004",
    address: "Pilibhit Road, Near Stadium, Bareilly, UP 243001",
    hours: "Mon-Sat: 9AM - 7PM | Sun: 10AM - 4PM",
    services: ["Sales", "Service", "Spares"],
    type: "dealer",
    coords: [430, 200],
  },
  {
    name: "Gorakhpur Volt Motors",
    city: "Gorakhpur",
    state: "Uttar Pradesh",
    phone: "+91 98765 11005",
    address: "Medical College Road, Gorakhpur, UP 273001",
    hours: "Mon-Sat: 9AM - 7PM | Sun: 10AM - 4PM",
    services: ["Sales", "Test Ride", "Service", "Finance"],
    type: "dealer",
    coords: [590, 220],
  },
  {
    name: "Jaipur EV Plaza",
    city: "Jaipur",
    state: "Rajasthan",
    phone: "+91 98765 11006",
    address: "MI Road, Near Albert Hall, Jaipur, RJ 302001",
    hours: "Mon-Sat: 9AM - 8PM | Sun: 10AM - 5PM",
    services: ["Sales", "Test Ride", "Service", "Spares", "Finance"],
    type: "flagship",
    coords: [200, 280],
  },
  {
    name: "Bhopal Green Ride",
    city: "Bhopal",
    state: "Madhya Pradesh",
    phone: "+91 98765 11007",
    address: "MP Nagar, Zone 1, Bhopal, MP 462011",
    hours: "Mon-Sat: 9AM - 7PM | Sun: 10AM - 4PM",
    services: ["Sales", "Test Ride", "Service"],
    type: "dealer",
    coords: [320, 320],
  },
];

const serviceTypes = {
  "Sales": { color: "bg-ink", text: "text-paper" },
  "Test Ride": { color: "bg-volt", text: "text-ink" },
  "Service": { color: "bg-paper border border-ink/20", text: "text-ink" },
  "Spares": { color: "bg-paper border border-ink/20", text: "text-ink" },
  "Finance": { color: "bg-ink", text: "text-paper" },
};

export default function Dealers() {
  const [q, setQ] = useState("");
  const [selectedState, setSelectedState] = useState("All");
  const [selectedDealer, setSelectedDealer] = useState<string | null>(null);
  const [hoveredDealer, setHoveredDealer] = useState<string | null>(null);

  const filtered = dealers.filter((d) => {
    const matchesSearch = d.city.toLowerCase().includes(q.toLowerCase()) || d.name.toLowerCase().includes(q.toLowerCase());
    const matchesState = selectedState === "All" || d.state === selectedState;
    return matchesSearch && matchesState;
  });

  const activeDealer = dealers.find((d) => d.name === (selectedDealer || hoveredDealer));

  return (
    <>
      <PageHead title="Find a Dealer — OMEV" meta={meta} links={links} />

      {/* HERO — Bold search-focused */}
      <section className="relative bg-cream min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span className="font-display-tight text-[40vw] md:text-[22vw] leading-none text-ink/[0.02] whitespace-nowrap">
            NEAR YOU
          </span>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 md:px-10 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-[2px] bg-volt" />
                  <p className="text-[11px] tracked text-ink/40 font-bold uppercase">Dealer Network</p>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display-tight text-ink text-[18vw] md:text-[9vw] leading-[0.8]">
                  FIND YOUR<br />
                  <span className="text-volt-deep">DEALER.</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 text-sm md:text-base text-ink/50 leading-[1.7] max-w-md">
                  {dealers.length} locations across 3 states. Every dealer offers test rides, expert guidance, and after-sales support. Find the one nearest to you.
                </p>
              </Reveal>
            </div>

            <div className="md:col-span-5">
              <Reveal delay={200}>
                <div className="bg-paper p-6 md:p-8 shadow-product">
                  <p className="text-[11px] tracked text-volt-deep font-bold mb-4">QUICK SEARCH</p>
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Type your city or dealer name..."
                    className="w-full bg-cream border-2 border-ink/10 px-5 py-4 text-ink text-lg focus:outline-none focus:border-volt placeholder:text-ink/30 transition-colors"
                  />
                  <div className="mt-4 flex flex-wrap gap-2">
                    {states.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedState(s)}
                        className={`px-4 py-2 text-[11px] tracked font-bold transition-all ${
                          selectedState === s
                            ? "bg-ink text-paper"
                            : "bg-cream text-ink/50 hover:text-ink"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* MAP + DEALER LIST — Split layout */}
      <section className="bg-cream pb-24 md:pb-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left: Interactive Map */}
            <div className="md:col-span-7">
              <Reveal>
                <div className="relative aspect-[16/10] bg-ink overflow-hidden shadow-product">
                  <svg viewBox="0 0 800 500" className="w-full h-full">
                    <rect width="800" height="500" fill="#0A0A0A" />
                    {/* State outlines (simplified) */}
                    <path d="M100 150 Q200 100 350 120 Q500 90 650 140 Q750 180 780 250 Q700 320 550 310 Q400 340 250 300 Q120 280 80 200 Z" fill="none" stroke="#1a1a1a" strokeWidth="2" />
                    <path d="M150 320 Q250 280 350 300 Q450 290 500 340 Q480 400 400 420 Q300 440 200 400 Q120 380 150 320 Z" fill="none" stroke="#1a1a1a" strokeWidth="2" />
                    <path d="M400 300 Q500 280 600 310 Q680 340 700 400 Q650 450 550 460 Q450 470 400 420 Z" fill="none" stroke="#1a1a1a" strokeWidth="2" />

                    {/* Connection lines between dealers */}
                    {filtered.length > 1 && filtered.map((d, i) => {
                      if (i === filtered.length - 1) return null;
                      const next = filtered[i + 1];
                      return (
                        <line
                          key={`line-${i}`}
                          x1={d.coords[0]}
                          y1={d.coords[1]}
                          x2={next.coords[0]}
                          y2={next.coords[1]}
                          stroke="#D4A017"
                          strokeWidth="0.5"
                          opacity="0.2"
                        />
                      );
                    })}

                    {/* Dealer dots */}
                    {dealers.map((d) => {
                      const isActive = d.name === (selectedDealer || hoveredDealer);
                      const isFiltered = filtered.some((fd) => fd.name === d.name);
                      const [x, y] = d.coords;

                      if (!isFiltered) {
                        return (
                          <circle
                            key={d.name}
                            cx={x}
                            cy={y}
                            r="3"
                            fill="#333"
                            opacity="0.3"
                          />
                        );
                      }

                      return (
                        <g
                          key={d.name}
                          onMouseEnter={() => setHoveredDealer(d.name)}
                          onMouseLeave={() => setHoveredDealer(null)}
                          onClick={() => setSelectedDealer(d.name === selectedDealer ? null : d.name)}
                          className="cursor-pointer"
                        >
                          {/* Pulse ring */}
                          {(isActive || hoveredDealer === d.name) && (
                            <circle
                              cx={x}
                              cy={y}
                              r="20"
                              fill="none"
                              stroke="#D4A017"
                              strokeWidth="1"
                              opacity="0.4"
                            >
                              <animate
                                attributeName="r"
                                values="12;24;12"
                                dur="2s"
                                repeatCount="indefinite"
                              />
                              <animate
                                attributeName="opacity"
                                values="0.6;0;0.6"
                                dur="2s"
                                repeatCount="indefinite"
                              />
                            </circle>
                          )}
                          {/* Main dot */}
                          <circle
                            cx={x}
                            cy={y}
                            r={isActive ? 8 : 6}
                            fill={d.type === "flagship" ? "#D4A017" : "#fff"}
                            stroke="#D4A017"
                            strokeWidth={d.type === "flagship" ? 0 : 2}
                            className="transition-all duration-300"
                          />
                          {/* Label */}
                          {(isActive || hoveredDealer === d.name) && (
                            <g>
                              <rect
                                x={x + 12}
                                y={y - 20}
                                width={d.name.length * 7 + 20}
                                height="28"
                                fill="#0A0A0A"
                                stroke="#D4A017"
                                strokeWidth="1"
                              />
                              <text
                                x={x + 22}
                                y={y - 2}
                                fill="#fff"
                                fontSize="11"
                                fontWeight="bold"
                                fontFamily="system-ui"
                              >
                                {d.name}
                              </text>
                            </g>
                          )}
                        </g>
                      );
                    })}
                  </svg>

                  {/* Map legend */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-volt" />
                      <span className="text-[10px] tracked text-paper/60 font-bold">FLAGSHIP</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-paper border border-volt" />
                      <span className="text-[10px] tracked text-paper/60 font-bold">DEALER</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 text-[10px] tracked text-volt font-bold">
                    {filtered.length} LOCATIONS
                  </div>
                </div>
              </Reveal>

              {/* Selected dealer detail card */}
              {activeDealer && (
                <Reveal>
                  <div className="mt-6 bg-paper p-6 md:p-8 shadow-card border-l-4 border-volt animate-[slideUp_0.3s_ease-out]">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`text-[10px] tracked font-bold px-3 py-1 ${activeDealer.type === "flagship" ? "bg-volt text-ink" : "bg-ink text-paper"}`}>
                            {activeDealer.type === "flagship" ? "FLAGSHIP" : "AUTHORIZED DEALER"}
                          </span>
                          <span className="text-[10px] tracked text-ink/40 font-bold">{activeDealer.state}</span>
                        </div>
                        <h3 className="font-display-tight text-ink text-2xl md:text-3xl">{activeDealer.name}</h3>
                      </div>
                      <button
                        onClick={() => setSelectedDealer(null)}
                        className="text-ink/30 hover:text-ink transition-colors"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="flex items-start gap-3">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-volt shrink-0 mt-0.5">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <p className="text-sm text-ink/60">{activeDealer.address}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-volt shrink-0 mt-0.5">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <p className="text-sm text-ink/60 font-mono">{activeDealer.phone}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-volt shrink-0 mt-0.5">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <p className="text-sm text-ink/60">{activeDealer.hours}</p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {activeDealer.services.map((s) => (
                        <span
                          key={s}
                          className={`text-[10px] tracked font-bold px-3 py-1.5 ${serviceTypes[s as keyof typeof serviceTypes]?.color || "bg-ink"} ${serviceTypes[s as keyof typeof serviceTypes]?.text || "text-paper"}`}
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex gap-3">
                      <a
                        href={`tel:${activeDealer.phone.replace(/\s/g, "")}`}
                        className="inline-flex items-center gap-2 bg-ink px-6 py-3 text-[11px] tracked font-bold text-paper hover:bg-volt hover:text-ink transition-colors"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        Call Now
                      </a>
                      <Link
                        to="/test-ride"
                        className="inline-flex items-center gap-2 border-2 border-ink px-6 py-3 text-[11px] tracked font-bold text-ink hover:bg-ink hover:text-paper transition-colors"
                      >
                        Book Test Ride
                      </Link>
                    </div>
                  </div>
                </Reveal>
              )}
            </div>

            {/* Right: Dealer list */}
            <div className="md:col-span-5">
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                {filtered.map((d, i) => (
                  <Reveal key={d.name} delay={i * 60}>
                    <div
                      className={`group bg-paper p-5 md:p-6 cursor-pointer transition-all duration-300 ${
                        selectedDealer === d.name
                          ? "shadow-product border-l-4 border-volt"
                          : "shadow-card border-l-4 border-transparent hover:border-volt/50 hover:shadow-product"
                      }`}
                      onClick={() => setSelectedDealer(d.name === selectedDealer ? null : d.name)}
                      onMouseEnter={() => setHoveredDealer(d.name)}
                      onMouseLeave={() => setHoveredDealer(null)}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            {d.type === "flagship" && (
                              <span className="text-[9px] tracked font-bold bg-volt text-ink px-2 py-0.5">FLAGSHIP</span>
                            )}
                            <span className="text-[10px] tracked text-ink/30 font-bold">{d.city}</span>
                          </div>
                          <h3 className="font-display-tight text-ink text-xl md:text-2xl group-hover:text-volt-deep transition-colors">
                            {d.name}
                          </h3>
                        </div>
                        <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                          selectedDealer === d.name ? "bg-ink border-ink text-paper rotate-90" : "border-ink/20 text-ink/30 group-hover:border-ink group-hover:text-ink"
                        }`}>
                          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" />
                          </svg>
                        </span>
                      </div>

                      <div className="mt-3 flex items-center gap-4 text-[11px] tracked text-ink/40">
                        <span className="flex items-center gap-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                          {d.phone}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                          {d.hours.split("|")[0]}
                        </span>
                      </div>

                      {/* Expanded details */}
                      {selectedDealer === d.name && (
                        <div className="mt-4 pt-4 border-t border-ink/5 animate-[slideDown_0.3s_ease-out]">
                          <p className="text-sm text-ink/50 leading-[1.6] mb-3">{d.address}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {d.services.map((s) => (
                              <span
                                key={s}
                                className={`text-[9px] tracked font-bold px-2 py-1 ${serviceTypes[s as keyof typeof serviceTypes]?.color || "bg-ink"} ${serviceTypes[s as keyof typeof serviceTypes]?.text || "text-paper"}`}
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </Reveal>
                ))}

                {filtered.length === 0 && (
                  <div className="text-center py-16 bg-paper">
                    <p className="font-display-tight text-ink text-2xl">No dealers found</p>
                    <p className="text-sm text-ink/40 mt-2">Try a different city or state</p>
                    <button
                      onClick={() => { setQ(""); setSelectedState("All"); }}
                      className="mt-4 text-[11px] tracked font-bold text-volt-deep hover:text-ink transition-colors"
                    >
                      Clear filters →
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BUY FROM DEALER */}
      <section className="bg-cream pb-24 md:pb-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <Reveal>
            <div className="flex items-center gap-6 mb-12">
              <p className="text-[11px] tracked text-volt-deep font-bold shrink-0">Why Visit a Dealer</p>
              <div className="h-px flex-1 bg-ink/10" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Test Before You Buy",
                desc: "Feel the torque. Test the brakes. Ride it on real roads. No brochure can replace the feel of an OMEV under your hands.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                ),
              },
              {
                title: "Expert Guidance",
                desc: "Our dealers aren't salesmen — they're EV enthusiasts who understand every spec, every feature, and every financing option.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                ),
              },
              {
                title: "On-Spot Finance",
                desc: "Get approved in 30 minutes. Zero down payment options. EMI from ₹2,499/month. Drive home the same day.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="group bg-paper p-8 md:p-10 border border-ink/5 hover:border-volt/20 transition-all duration-500">
                  <div className="text-volt mb-6 group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h3 className="font-display-tight text-ink text-2xl md:text-3xl group-hover:text-volt-deep transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink/50 leading-[1.7] mt-4">
                    {item.desc}
                  </p>
                  <div className="mt-6 h-[2px] bg-ink/5 relative overflow-hidden">
                    <div className="absolute inset-y-0 left-0 w-0 bg-volt group-hover:w-full transition-all duration-700" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BECOME A DEALER CTA */}
      <section className="bg-ink text-paper py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span className="font-display-tight text-[30vw] md:text-[18vw] leading-none text-paper/[0.02] whitespace-nowrap">
            PARTNER
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <h2 className="font-display-tight text-paper text-[14vw] md:text-[7vw] leading-[0.82]">
                BECOME A<br />
                <span className="text-volt">PARTNER.</span>
              </h2>
              <p className="text-paper/50 leading-[1.7] mt-8 max-w-md text-sm md:text-base">
                Join India's fastest-growing electric mobility network. Low investment, high margins, full training and support. Be the EV revolution in your city.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    placeholder="Your Name"
                    className="w-full bg-cream border-2 border-ink/20 px-5 py-4 text-ink focus:outline-none focus:border-volt placeholder:text-ink/30 transition-colors"
                  />
                  <input
                    placeholder="City"
                    className="w-full bg-cream border-2 border-ink/20 px-5 py-4 text-ink focus:outline-none focus:border-volt placeholder:text-ink/30 transition-colors"
                  />
                </div>
                <input
                  placeholder="Phone Number"
                  className="w-full bg-cream border-2 border-ink/20 px-5 py-4 text-ink focus:outline-none focus:border-volt placeholder:text-ink/30 transition-colors"
                />
                <input
                  placeholder="Email Address"
                  className="w-full bg-cream border-2 border-ink/20 px-5 py-4 text-ink focus:outline-none focus:border-volt placeholder:text-ink/30 transition-colors"
                />
                <textarea
                  placeholder="Tell us about your business experience..."
                  rows={3}
                  className="w-full bg-cream border-2 border-ink/20 px-5 py-4 text-ink focus:outline-none focus:border-volt placeholder:text-ink/30 transition-colors resize-none"
                />
                <button className="w-full bg-volt text-ink px-8 py-5 text-[12px] tracked font-bold hover:bg-paper hover:text-ink transition-colors">
                  Apply for Dealership
                  <span className="h-1.5 w-1.5 rounded-full bg-ink inline-block ml-2" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #D4A017;
          border-radius: 2px;
        }
      `}</style>
    </>
  );
}
import { useMemo, useState } from "react";
import { Reveal, CountUp } from "@/components/Reveal";
import { PageHead } from "@/lib/PageHead";
import { Link } from "react-router-dom";

const meta = [
  { title: "EMI & Finance — Own an OMEV from ₹2,499/month" },
  { name: "description", content: "Flexible EMI plans from ₹2,499/month. Zero-down options. Approval in 24 hours. Calculate your OMEV monthly cost." },
  { property: "og:title", content: "EMI & Finance — OMEV" },
  { property: "og:description", content: "Own an OMEV from ₹2,499/month." },
  { property: "og:url", content: "/finance" },
];

const links = [{ rel: "canonical", href: "/finance" }];

const vehicleOptions = [
  { name: "VOLT X", price: 89999, image: "/assets/volt-x.jpg" },
  { name: "VOLT X Pro", price: 109999, image: "/assets/volt-x-pro.jpg" },
  { name: "KARYA 3", price: 149999, image: "/assets/karya-3.jpg" },
  { name: "KARYA 3 Max", price: 179999, image: "/assets/karya-3-max.jpg" },
];

const banks = [
  { name: "HDFC Bank", rate: "9.5%", processing: "₹1,499", features: ["Instant approval", "Zero foreclosure"] },
  { name: "ICICI Bank", rate: "10.2%", processing: "₹999", features: ["24hr disbursal", "Flexible tenure"] },
  { name: "Bajaj Finserv", rate: "11%", processing: "₹0", features: ["No processing fee", "Part payment option"] },
  { name: "OMEV Finance", rate: "8.9%", processing: "₹0", features: ["In-house finance", "Lowest rate guaranteed"] },
];

const steps = [
  { num: "01", title: "Apply Online", desc: "Fill the form in 3 minutes. No paperwork, no branch visits.", time: "3 mins" },
  { num: "02", title: "Upload Documents", desc: "PAN, Aadhaar, address proof. Upload via WhatsApp or email.", time: "5 mins" },
  { num: "03", title: "Verification", desc: "We verify and confirm within 24 hours. Most approved same day.", time: "24 hrs" },
  { num: "04", title: "Sign & Pay Down", desc: "E-sign your agreement. Pay down payment online or at dealer.", time: "10 mins" },
  { num: "05", title: "Take Delivery", desc: "Roll out from your nearest OMEV dealer. Full tank... full charge.", time: "Same day" },
];

const documents = [
  { name: "PAN Card", required: true, desc: "Mandatory for all applicants" },
  { name: "Aadhaar", required: true, desc: "Identity & address verification" },
  { name: "Address Proof", required: true, desc: "Rental agreement or utility bill" },
  { name: "Income Proof", required: false, desc: "Salary slip or ITR (for self-employed)" },
  { name: "Bank Statement", required: true, desc: "Last 3 months for income verification" },
  { name: "Passport Photo", required: true, desc: "Recent digital photograph" },
];

const faqs = [
  { q: "Can I get zero down payment?", a: "Yes. Select OMEV Finance or Bajaj Finserv for zero down payment options. Subject to credit score check." },
  { q: "What is the minimum credit score required?", a: "We work with scores as low as 650. However, scores above 750 get the best rates and instant approval." },
  { q: "Can I prepay or foreclose?", a: "Absolutely. With HDFC and OMEV Finance, there is zero foreclosure charge after 6 months." },
  { q: "Do I need a guarantor?", a: "Not for salaried applicants. Self-employed applicants may need a guarantor for loans above ₹1.5 lakhs." },
  { q: "How long does approval take?", a: "Most applications are approved within 24 hours. Some are instant with pre-approved offers." },
];

export default function Finance() {
  const [selectedVehicle, setSelectedVehicle] = useState(0);
  const [price, setPrice] = useState(vehicleOptions[0].price);
  const [down, setDown] = useState(15000);
  const [tenure, setTenure] = useState(24);
  const [selectedBank, setSelectedBank] = useState(3);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const currentVehicle = vehicleOptions[selectedVehicle];

  const emi = useMemo(() => {
    const principal = price - down;
    const rate = parseFloat(banks[selectedBank].rate) / 100 / 12;
    const n = tenure;
    const value = (principal * rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);
    return Math.round(value);
  }, [price, down, tenure, selectedBank]);

  const totalInterest = useMemo(() => {
    return emi * tenure - (price - down);
  }, [emi, tenure, price, down]);

  const petrolSavings = useMemo(() => {
    // Assuming 150km/day, 30 days, petrol ₹104/litre, 50km/litre
    const petrolMonthly = (150 * 30 / 50) * 104;
    const electricMonthly = (150 * 30 / 100) * 7; // 7 rupees per unit, 100km per unit
    return Math.round(petrolMonthly - electricMonthly - emi);
  }, [emi]);

  const handleVehicleChange = (index: number) => {
    setSelectedVehicle(index);
    setPrice(vehicleOptions[index].price);
    setDown(Math.floor(vehicleOptions[index].price * 0.15));
  };

  return (
    <>
      <PageHead title="EMI & Finance — Own an OMEV from ₹2,499/month" meta={meta} links={links} />

      {/* HERO — Dynamic EMI display */}
      <section className="relative bg-cream min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span className="font-display-tight text-[40vw] md:text-[22vw] leading-none text-ink/[0.02] whitespace-nowrap">
            ₹{emi.toLocaleString()}
          </span>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 md:px-10 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-[2px] bg-volt" />
                  <p className="text-[11px] tracked text-ink/40 font-bold uppercase">EMI & Finance</p>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display-tight text-ink text-[18vw] md:text-[9vw] leading-[0.8]">
                  OWN IT FOR<br />
                  <span className="text-volt-deep">₹{emi.toLocaleString()}</span>
                  <span className="text-ink/30 text-[4vw] md:text-[2vw]">/MO</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 text-sm md:text-base text-ink/50 leading-[1.7] max-w-md">
                  Zero down payment options. Approval in 24 hours. No hidden charges, no dealer markups. Just honest financing for honest people.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-8 flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-volt" />
                    <span className="text-[11px] tracked text-ink/40 font-bold">ZERO FORECLOSURE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-volt" />
                    <span className="text-[11px] tracked text-ink/40 font-bold">24HR APPROVAL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-volt" />
                    <span className="text-[11px] tracked text-ink/40 font-bold">NO HIDDEN COSTS</span>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-5">
              <Reveal delay={200}>
                <div className="bg-paper p-6 md:p-8 shadow-product">
                  <p className="text-[11px] tracked text-volt-deep font-bold mb-4">QUICK ESTIMATE</p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-ink/5">
                      <span className="text-sm text-ink/50">Vehicle</span>
                      <span className="font-display-tight text-ink text-xl">{currentVehicle.name}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-ink/5">
                      <span className="text-sm text-ink/50">Down Payment</span>
                      <span className="font-display-tight text-ink text-xl">₹{down.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-ink/5">
                      <span className="text-sm text-ink/50">Tenure</span>
                      <span className="font-display-tight text-ink text-xl">{tenure} months</span>
                    </div>
                    <div className="pt-4">
                      <p className="text-[10px] tracked text-ink/30 font-bold mb-1">MONTHLY EMI</p>
                      <p className="font-display-tight text-volt-deep text-5xl md:text-6xl">₹{emi.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* VEHICLE SELECTOR */}
      <section className="bg-cream pb-12">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <Reveal>
            <p className="text-[11px] tracked text-volt-deep font-bold mb-6">Select Your Vehicle</p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {vehicleOptions.map((v, i) => (
              <Reveal key={v.name} delay={i * 80}>
                <button
                  onClick={() => handleVehicleChange(i)}
                  className={`w-full text-left p-5 md:p-6 transition-all duration-300 ${
                    selectedVehicle === i
                      ? "bg-ink text-paper shadow-product"
                      : "bg-paper text-ink border border-ink/5 hover:border-volt/30"
                  }`}
                >
                  <p className="font-display-tight text-2xl md:text-3xl">{v.name}</p>
                  <p className={`text-[11px] tracked font-bold mt-2 ${selectedVehicle === i ? "text-volt" : "text-ink/40"}`}>
                    ₹{v.price.toLocaleString()}
                  </p>
                  {selectedVehicle === i && (
                    <div className="mt-3 h-1 bg-volt w-full" />
                  )}
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EMI CALCULATOR */}
      <section className="bg-cream pb-24 md:pb-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left: Calculator */}
            <div className="md:col-span-7">
              <Reveal>
                <div className="bg-paper p-8 md:p-12 shadow-product">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-8 h-[2px] bg-volt" />
                    <p className="text-[11px] tracked text-ink/40 font-bold uppercase">Customize Your Plan</p>
                  </div>

                  {/* Price slider */}
                  <div className="mb-10">
                    <div className="flex justify-between items-end mb-4">
                      <span className="text-[11px] tracked text-volt-deep font-bold">Vehicle Price</span>
                      <span className="font-display-tight text-ink text-3xl md:text-4xl">₹{price.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min={70000}
                      max={300000}
                      step={1000}
                      value={price}
                      onChange={(e) => setPrice(+e.target.value)}
                      className="w-full h-2 bg-ink/10 appearance-none cursor-pointer accent-volt"
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-[10px] tracked text-ink/30 font-bold">₹70,000</span>
                      <span className="text-[10px] tracked text-ink/30 font-bold">₹3,00,000</span>
                    </div>
                  </div>

                  {/* Down payment slider */}
                  <div className="mb-10">
                    <div className="flex justify-between items-end mb-4">
                      <span className="text-[11px] tracked text-volt-deep font-bold">Down Payment</span>
                      <span className="font-display-tight text-ink text-3xl md:text-4xl">₹{down.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={Math.floor(price * 0.5)}
                      step={1000}
                      value={down}
                      onChange={(e) => setDown(+e.target.value)}
                      className="w-full h-2 bg-ink/10 appearance-none cursor-pointer accent-volt"
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-[10px] tracked text-ink/30 font-bold">₹0</span>
                      <span className="text-[10px] tracked text-ink/30 font-bold">₹{Math.floor(price * 0.5).toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Tenure buttons */}
                  <div className="mb-10">
                    <p className="text-[11px] tracked text-volt-deep font-bold mb-4">Loan Tenure</p>
                    <div className="grid grid-cols-3 gap-3">
                      {[12, 24, 36].map((t) => (
                        <button
                          key={t}
                          onClick={() => setTenure(t)}
                          className={`py-4 text-[12px] tracked font-bold transition-all ${
                            tenure === t
                              ? "bg-ink text-paper"
                              : "bg-cream text-ink/50 hover:bg-ink/10"
                          }`}
                        >
                          {t} Months
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Bank selector */}
                  <div>
                    <p className="text-[11px] tracked text-volt-deep font-bold mb-4">Financing Partner</p>
                    <div className="space-y-2">
                      {banks.map((bank, i) => (
                        <button
                          key={bank.name}
                          onClick={() => setSelectedBank(i)}
                          className={`w-full flex items-center justify-between p-4 transition-all ${
                            selectedBank === i
                              ? "bg-ink text-paper"
                              : "bg-cream text-ink hover:bg-ink/5"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <span className={`w-3 h-3 rounded-full ${selectedBank === i ? "bg-volt" : "bg-ink/20"}`} />
                            <span className="font-display-tight text-lg">{bank.name}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-[11px] tracked font-bold block">{bank.rate}</span>
                            <span className="text-[10px] tracked opacity-50">{bank.processing} processing</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Summary */}
            <div className="md:col-span-5">
              <Reveal delay={120}>
                <div className="bg-ink text-paper p-8 md:p-10 sticky top-24">
                  <p className="text-[11px] tracked text-volt font-bold mb-6">PAYMENT SUMMARY</p>

                  <div className="space-y-6">
                    <div className="flex justify-between items-baseline border-b border-paper/10 pb-4">
                      <span className="text-sm text-paper/50">Ex-Showroom Price</span>
                      <span className="font-display-tight text-2xl">₹{price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-baseline border-b border-paper/10 pb-4">
                      <span className="text-sm text-paper/50">Down Payment</span>
                      <span className="font-display-tight text-2xl text-volt">-₹{down.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-baseline border-b border-paper/10 pb-4">
                      <span className="text-sm text-paper/50">Loan Amount</span>
                      <span className="font-display-tight text-2xl">₹{(price - down).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-baseline border-b border-paper/10 pb-4">
                      <span className="text-sm text-paper/50">Interest Rate</span>
                      <span className="font-display-tight text-2xl">{banks[selectedBank].rate}</span>
                    </div>
                    <div className="flex justify-between items-baseline border-b border-paper/10 pb-4">
                      <span className="text-sm text-paper/50">Total Interest</span>
                      <span className="font-display-tight text-2xl">₹{totalInterest.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t-2 border-volt">
                    <p className="text-[10px] tracked text-paper/30 font-bold mb-2">MONTHLY EMI</p>
                    <p className="font-display-tight text-volt text-6xl md:text-7xl">₹{emi.toLocaleString()}</p>
                    <p className="text-sm text-paper/40 mt-2">for {tenure} months</p>
                  </div>

                  <div className="mt-8 bg-volt/10 p-4 border-l-2 border-volt">
                    <p className="text-sm text-paper/70 leading-[1.6]">
                      <span className="text-volt font-bold">You save ₹{Math.max(0, petrolSavings).toLocaleString()}/month</span> compared to petrol. That's ₹{(Math.max(0, petrolSavings) * tenure).toLocaleString()} over {tenure} months.
                    </p>
                  </div>

                  <button className="w-full mt-8 bg-volt text-ink py-5 text-[12px] tracked font-bold hover:bg-paper hover:text-ink transition-colors">
                    Apply for Finance
                    <span className="h-1.5 w-1.5 rounded-full bg-ink inline-block ml-2" />
                  </button>

                  <p className="text-[10px] tracked text-paper/20 font-bold mt-4 text-center">
                    NO IMPACT ON CREDIT SCORE FOR CHECKING
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* PETROL VS ELECTRIC COMPARISON */}
      <section className="bg-ink text-paper py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span className="font-display-tight text-[30vw] md:text-[18vw] leading-none text-paper/[0.02] whitespace-nowrap">
            SAVE
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-5 md:px-10">
          <Reveal>
            <div className="flex items-center gap-6 mb-16">
              <p className="text-[11px] tracked text-volt font-bold shrink-0">The Real Math</p>
              <div className="h-px flex-1 bg-paper/10" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <h2 className="font-display-tight text-paper text-[12vw] md:text-[6vw] leading-[0.82]">
                PETROL BURNS<br />
                <span className="text-volt">MONEY.</span><br />
                OMEV SAVES<br />
                <span className="text-volt">IT.</span>
              </h2>
            </Reveal>

            <div className="space-y-6">
              {[
                { label: "Petrol Scooter (monthly)", cost: 15600, icon: "🔥" },
                { label: "OMEV Electric (monthly)", cost: emi + 3150, icon: "⚡" },
                { label: "Your Monthly Savings", cost: Math.max(0, 15600 - (emi + 3150)), icon: "💰", highlight: true },
              ].map((item, i) => (
                <Reveal key={item.label} delay={i * 100}>
                  <div className={`p-6 ${item.highlight ? "bg-volt text-ink" : "bg-paper/5"}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <span className={`text-sm ${item.highlight ? "font-bold" : "text-paper/50"}`}>{item.label}</span>
                      </div>
                      <span className={`font-display-tight text-3xl md:text-4xl ${item.highlight ? "text-ink" : "text-paper"}`}>
                        ₹{item.cost.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}

              <Reveal delay={300}>
                <p className="text-sm text-paper/40 leading-[1.7]">
                  Assumes 150km daily usage. Petrol at ₹104/litre, 50km/litre mileage. Electric at ₹7/unit, 100km per charge. EMI included for OMEV.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 5 STEPS — Horizontal cards */}
      <section className="bg-cream py-24 md:py-40">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <Reveal>
            <div className="flex items-center gap-6 mb-16">
              <p className="text-[11px] tracked text-volt-deep font-bold shrink-0">How It Works</p>
              <div className="h-px flex-1 bg-ink/10" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 100}>
                <div className="group relative bg-paper p-6 md:p-8 border border-ink/5 hover:border-volt/20 transition-all duration-500 h-full">
                  <span className="font-display-tight text-ink/[0.04] text-[80px] leading-none absolute top-2 right-2 select-none">
                    {step.num}
                  </span>
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-full bg-ink text-paper flex items-center justify-center font-display-tight text-sm mb-6">
                      {step.num}
                    </div>
                    <h3 className="font-display-tight text-ink text-xl md:text-2xl group-hover:text-volt-deep transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-ink/50 leading-[1.6] mt-3">
                      {step.desc}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-volt">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span className="text-[10px] tracked text-volt-deep font-bold">{step.time}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-volt scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="bg-cream pb-24 md:pb-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <Reveal>
            <div className="flex items-center gap-6 mb-12">
              <p className="text-[11px] tracked text-volt-deep font-bold shrink-0">Documents Required</p>
              <div className="h-px flex-1 bg-ink/10" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {documents.map((doc, i) => (
              <Reveal key={doc.name} delay={i * 60}>
                <div className="group bg-paper p-6 border border-ink/5 hover:border-volt/20 transition-all duration-500 flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                    doc.required ? "bg-volt text-ink" : "bg-ink/5 text-ink/30"
                  }`}>
                    {doc.required ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display-tight text-ink text-xl group-hover:text-volt-deep transition-colors">
                        {doc.name}
                      </h3>
                      {doc.required && (
                        <span className="text-[9px] tracked font-bold bg-volt text-ink px-2 py-0.5">REQUIRED</span>
                      )}
                    </div>
                    <p className="text-sm text-ink/40 mt-1">{doc.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink text-paper py-24 md:py-32">
        <div className="mx-auto max-w-[900px] px-5 md:px-10">
          <Reveal>
            <div className="flex items-center gap-6 mb-16">
              <p className="text-[11px] tracked text-volt font-bold shrink-0">Common Questions</p>
              <div className="h-px flex-1 bg-paper/10" />
            </div>
          </Reveal>

          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="border-b border-paper/10">
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full text-left py-6 flex items-center justify-between group"
                  >
                    <span className={`font-display-tight text-lg md:text-xl transition-colors ${
                      activeFaq === i ? "text-volt" : "text-paper group-hover:text-volt"
                    }`}>
                      {faq.q}
                    </span>
                    <span className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                      activeFaq === i ? "bg-volt border-volt text-ink rotate-45" : "border-paper/20 text-paper/40"
                    }`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  {activeFaq === i && (
                    <div className="pb-6 animate-[slideDown_0.3s_ease-out]">
                      <p className="text-sm text-paper/50 leading-[1.7] max-w-2xl">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-volt py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10 text-center">
          <Reveal>
            <h2 className="font-display-tight text-ink text-[14vw] md:text-[7vw] leading-[0.82]">
              READY TO<br />
              <span className="text-paper">OWN IT?</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-ink/60 max-w-lg mx-auto mt-8 text-sm md:text-base">
              Apply now and get pre-approved in 24 hours. No obligation, no impact on credit score.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/test-ride"
                className="inline-flex items-center gap-3 bg-ink px-8 py-5 text-[12px] tracked font-bold text-paper hover:bg-paper hover:text-ink transition-colors"
              >
                Book Test Ride
              </Link>
              <button className="inline-flex items-center gap-3 border-2 border-ink px-8 py-5 text-[12px] tracked font-bold text-ink hover:bg-ink hover:text-paper transition-colors">
                Apply for Finance
                <span className="h-1.5 w-1.5 rounded-full bg-ink" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background: #D4A017;
          cursor: pointer;
          border-radius: 0;
        }
        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #D4A017;
          cursor: pointer;
          border-radius: 0;
          border: none;
        }
      `}</style>
    </>
  );
}
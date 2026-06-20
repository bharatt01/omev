import { useState } from "react";
import { products } from "@/lib/products";
import { Reveal } from "@/components/Reveal";
import { PageHead } from "@/lib/PageHead";

const meta = [
  { title: "Book a Test Ride — OMEV" },
  { name: "description", content: "Don't read about it. Ride it. Book a free, no-obligation test ride at your nearest OMEV showroom." },
  { property: "og:title", content: "Book a Test Ride — OMEV" },
  { property: "og:description", content: "Free, no-obligation OMEV test ride." },
  { property: "og:url", content: "/test-ride" },
];

const links = [{ rel: "canonical", href: "/test-ride" }];

const faqs: [string, string][] = [
  ["Is the test ride free?", "Yes. Completely free, no obligation."],
  ["Do I need a license?", "Yes, a valid two-wheeler license for scooters and LMV for three wheelers."],
  ["How long is the ride?", "About 15 minutes around the showroom area."],
  ["Can I bring someone?", "Of course. Bring your family or co-rider."],
];

export default function TestRide() {
  const [model, setModel] = useState(products[0].slug);
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHead title="Book a Test Ride — OMEV" meta={meta} links={links} />
      <section className="bg-cream pt-12 md:pt-24 pb-12">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10 grid md:grid-cols-[1fr_auto] gap-8 items-end">
          <Reveal>
            <p className="text-[11px] tracked font-bold text-volt-deep mb-6">Test Ride</p>
            <h1 className="font-display-tight text-ink text-[14vw] md:text-[8vw] leading-[0.85] border-l-4 border-volt pl-6">
              DON'T READ<br />ABOUT IT.<br /><span className="text-volt-deep">RIDE IT.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream pb-24">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10 grid md:grid-cols-5 gap-0 md:gap-12">
          <div className="md:col-span-3">
            {sent ? (
              <Reveal>
                <div className="bg-paper p-12 shadow-card text-center">
                  <p className="font-display-tight text-volt-deep text-7xl">CONFIRMED ✓</p>
                  <p className="text-ink/70 mt-4">We'll call you within 24 hours to confirm your slot.</p>
                </div>
              </Reveal>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-10">
                { ["Name", "Phone", "Email"].map((f) => (
                  <div key={f} className="relative">
                    <input required placeholder=" " className="peer w-full bg-transparent border-b-2 border-ink/30 py-4 text-ink focus:outline-none focus:border-volt transition-colors" />
                    <label className="absolute left-0 top-4 text-[11px] tracked font-bold text-volt-deep transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px]">
                      {f}
                    </label>
                  </div>
                ))}

                <div>
                  <p className="text-[11px] tracked font-bold text-volt-deep mb-4">Pick your model</p>
                  <div className="grid grid-cols-3 gap-3">
                    {products.map((p) => (
                      <button
                        type="button"
                        key={p.slug}
                        onClick={() => setModel(p.slug)}
                        data-cursor="go"
                        className={`group p-3 bg-paper border-2 transition-all ${model === p.slug ? "border-volt -translate-y-1" : "border-transparent shadow-card"}`}
                      >
                        <img src={p.image} alt={p.name} loading="lazy" className="w-full aspect-square object-cover" />
                        <p className="font-display-tight text-base md:text-lg text-ink mt-2">{p.name}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-[11px] tracked font-bold text-volt-deep mb-3">Date</p>
                    <input type="date" required className="w-full bg-paper border border-ink/20 p-3 text-ink" />
                  </div>
                  <div>
                    <p className="text-[11px] tracked font-bold text-volt-deep mb-3">Time</p>
                    <div className="grid grid-cols-3 gap-2">
                      {["10AM", "1PM", "4PM"].map((t) => (
                        <button type="button" key={t} className="bg-paper border border-ink/20 p-3 text-[11px] tracked font-bold hover:bg-volt hover:border-volt">
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  data-cursor="go"
                  className="w-full bg-ink text-paper py-5 text-[12px] tracked font-bold hover:bg-volt hover:text-ink transition-colors active:scale-[0.98]"
                >
                  Lock In My Ride →
                </button>
              </form>
            )}
          </div>

          <aside data-surface="dark" className="md:col-span-2 bg-ink text-paper p-8 md:p-10 mt-12 md:mt-0">
            <p className="text-[11px] tracked font-bold text-volt mb-6">Nearest Showroom</p>
            <p className="font-display-tight text-paper text-3xl md:text-4xl">OMEV Lakhimpur Flagship</p>
            <p className="text-sm text-paper/70 mt-2">12 Industrial Area, Lakhimpur Kheri, UP 262701</p>

            <div className="mt-6 flex flex-col gap-3">
              <a href="tel:+919876543210" data-cursor="go" className="bg-volt text-ink py-4 text-center text-[11px] tracked font-bold hover:bg-paper">
                Call Now
              </a>
              <a href="#" data-cursor="go" className="border border-paper py-4 text-center text-[11px] tracked font-bold hover:bg-paper hover:text-ink">
                Get Directions
              </a>
            </div>

            <div className="mt-10 space-y-6">
              {[
                ["01", "Bring your license"],
                ["02", "15-minute supervised ride"],
                ["03", "Zero obligation"],
              ].map(([n, t]) => (
                <div key={n} className="flex items-center gap-4">
                  <span className="h-10 w-10 rounded-full bg-volt text-ink flex items-center justify-center font-bold text-sm">{n}</span>
                  <span className="text-sm text-paper/80">{t}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-cream pb-24">
        <div className="mx-auto max-w-[1100px] px-5 md:px-10">
          <h2 className="font-display-tight text-ink text-5xl md:text-7xl mb-10">FAQ</h2>
          <div className="divide-y divide-ink/15 border-y border-ink/15">
            {faqs.map(([question, answer], i) => (
              <div key={question}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  data-cursor="go"
                  className="w-full flex items-center justify-between py-6 text-left"
                >
                  <span className="font-display-tight text-2xl md:text-3xl text-ink">{question}</span>
                  <span className={`h-8 w-8 flex items-center justify-center bg-volt text-ink text-xl transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {open === i && <p className="pb-6 text-ink/70 max-w-2xl">{answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

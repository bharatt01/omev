import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer data-surface="dark" className="relative overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute inset-x-0 top-12 select-none text-center">
        <span className="text-outline-thick font-display-tight text-paper/10 text-[20vw] leading-none block">
          OMEV
        </span>
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 pb-10 pt-20 md:px-10 md:pt-28">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <h4 className="text-[11px] tracked text-volt mb-4">Fleet</h4>
            <ul className="space-y-2 text-sm text-paper/80">
              <li><Link to="/products" data-cursor="go" className="hover:text-volt">Two Wheelers</Link></li>
              <li><Link to="/products" data-cursor="go" className="hover:text-volt">Three Wheelers</Link></li>
              <li><Link to="/products" data-cursor="go" className="hover:text-volt">Compare</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] tracked text-volt mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-paper/80">
              <li><Link to="/about" data-cursor="go" className="hover:text-volt">Why Omev</Link></li>
              <li><Link to="/dealers" data-cursor="go" className="hover:text-volt">Dealers</Link></li>
              <li><Link to="/about" data-cursor="go" className="hover:text-volt">Manufacturing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] tracked text-volt mb-4">Own</h4>
            <ul className="space-y-2 text-sm text-paper/80">
              <li><Link to="/test-ride" data-cursor="go" className="hover:text-volt">Test Ride</Link></li>
              <li><Link to="/finance" data-cursor="go" className="hover:text-volt">EMI &amp; Finance</Link></li>
              <li><Link to="/dealers" data-cursor="go" className="hover:text-volt">Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] tracked text-volt mb-4">Reach Us</h4>
            <ul className="space-y-2 text-sm text-paper/80">
              <li>Lakhimpur Kheri, UP</li>
              <li>+91 98765 43210</li>
              <li>hello@omev.in</li>
            </ul>
            <div className="mt-5 flex gap-3">
              {["IG", "YT", "X", "WA"].map((s) => (
                <a
                  key={s}
                  href="#"
                  data-cursor="go"
                  className="flex h-9 w-9 items-center justify-center border border-paper/30 text-[10px] tracked hover:bg-volt hover:text-ink hover:border-volt transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-paper/15 pt-6 flex flex-wrap justify-between gap-3 text-[11px] tracked text-paper/60">
          <span>© 2026 OMEV. Lakhimpur, Uttar Pradesh, India.</span>
          <span>Built for Bharat.</span>
        </div>
      </div>
    </footer>
  );
}

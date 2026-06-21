import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import logoImg from "@/assets/omev-logo.jpg"; // or .svg, .jpg — adjust to your actual logo file

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Models" },
  { to: "/about", label: "About Us" },
  { to: "/dealers", label: "Dealers" },
  { to: "/finance", label: "Finance" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/85 backdrop-blur-md border-b border-ink/10" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-5 md:h-20 md:px-10">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2" data-cursor="go">
          <img
            src={logoImg}
            alt="OMEV"
            className="h-14 md:h-16 w-auto object-contain"
          />
          <span className="hidden md:inline-block h-2 w-2 rounded-full bg-volt group-hover:scale-150 transition-transform" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              data-cursor="go"
              className={({ isActive }) =>
                `group/link relative text-[16px] tracked font-semibold ${
                  isActive ? "text-ink" : "text-ink/70 hover:text-ink"
                }`
              }
            >
              <span>{n.label}</span>
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-volt transition-all duration-300 group-hover/link:w-full data-[status=active]:w-full" />
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          to="/test-ride"
          data-cursor="go"
          className="hidden md:inline-flex items-center gap-2 bg-ink px-5 py-3 text-[11px] font-bold tracked text-paper hover:bg-volt hover:text-ink transition-colors"
        >
          Book Test Ride
          <span className="h-1.5 w-1.5 rounded-full bg-volt" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`h-[2px] w-6 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-[2px] w-6 bg-ink transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-[2px] w-6 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-ink/10">
          <nav className="flex flex-col px-5 py-6 gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="font-display-tight text-4xl text-ink"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
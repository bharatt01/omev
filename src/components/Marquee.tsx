type Props = { items: string[]; outline?: boolean; surface?: "dark" | "light" };
export function Marquee({ items, outline = true, surface = "dark" }: Props) {
  const dark = surface === "dark";
  return (
    <div
      data-surface={dark ? "dark" : undefined}
      className={`overflow-hidden border-y py-6 md:py-10 ${
        dark ? "bg-ink text-paper border-paper/10" : "bg-cream text-ink border-ink/10"
      }`}
    >
      <div className="flex whitespace-nowrap animate-[marquee_38s_linear_infinite] gap-12">
        {[...items, ...items, ...items].map((s, i) => (
          <span
            key={i}
            className={`font-display-tight text-[12vw] md:text-[8vw] leading-none ${outline ? "text-outline-thick" : ""}`}
          >
            {s}<span className="text-volt mx-6">●</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { to { transform: translateX(-33.333%); } }`}</style>
    </div>
  );
}

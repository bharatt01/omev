import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    let lenis: any;
    let raf = 0;
    let cancelled = false;
    (async () => {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;
      lenis = new Lenis({ duration: 1.1, smoothWheel: true });
      const tick = (t: number) => { lenis.raf(t); raf = requestAnimationFrame(tick); };
      raf = requestAnimationFrame(tick);
    })();
    return () => { cancelled = true; cancelAnimationFrame(raf); lenis?.destroy?.(); };
  }, []);
  return null;
}

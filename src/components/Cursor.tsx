import { useEffect } from "react";

export function Cursor() {
  useEffect(() => {
    // Force reset any lingering cursor styles from previous renders
    const style = document.getElementById("cursor-reset-style");
    if (!style) {
      const s = document.createElement("style");
      s.id = "cursor-reset-style";
      s.textContent = `
        * { cursor: auto !important; }
        .cursor-dot, .cursor-ring, [class*="cursor"], [class*="Cursor"] {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
        }
      `;
      document.head.appendChild(s);
    }
    return () => {
      const s = document.getElementById("cursor-reset-style");
      if (s) s.remove();
    };
  }, []);

  return null;
}
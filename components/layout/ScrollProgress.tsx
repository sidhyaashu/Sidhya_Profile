"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const height = doc.scrollHeight - doc.clientHeight;
      const scrolled = doc.scrollTop;
      const pct = height > 0 ? (scrolled / height) * 100 : 0;
      setProgress(pct);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div aria-hidden style={{ position: "fixed", top: 0, left: 0, right: 0, height: 4, zIndex: 70 }}>
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          transition: "width 150ms linear",
          background: "var(--accent, currentColor)",
          boxShadow: "0 0 8px rgba(0,0,0,0.12)",
        }}
      />
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function Typing({ phrases = ["AI & Software Engineer", "Building intelligent systems", "Designing great UX"] }: { phrases?: string[] }) {
  const [text, setText] = useState(phrases[0]);

  useEffect(() => {
    let mounted = true;
    let i = 0;
    let j = 0;
    let isDeleting = false;

    const loop = async () => {
      if (!mounted) return;
      const current = phrases[i];
      setText(current.slice(0, j));
      if (!isDeleting) {
        if (j < current.length) j++;
        else { isDeleting = true; await new Promise(r => setTimeout(r, 900)); }
      } else {
        if (j > 0) j--;
        else { isDeleting = false; i = (i + 1) % phrases.length; }
      }
      const delay = isDeleting ? 40 : 60;
      setTimeout(loop, delay);
    };

    loop();
    return () => { mounted = false; };
  }, [phrases]);

  return (
    <span aria-hidden className="inline-block">
      {text}
      <span className="ml-1 inline-block animate-pulse-slow">|</span>
    </span>
  );
}

"use client";

import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const lines: { x: number; y: number; dx: number; dy: number }[] = [];
    const density = Math.max(10, Math.floor((w * h) / 70000));
    for (let i = 0; i < density; i++) {
      lines.push({ x: Math.random() * w, y: Math.random() * h, dx: (Math.random() - 0.5) * 0.4, dy: (Math.random() - 0.5) * 0.4 });
    }

    let raf = 0;

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", onResize);

    const render = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      for (let i = 0; i < lines.length; i++) {
        const p = lines[i];
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.dx * 6, p.y + p.dy * 6);
        ctx.stroke();
      }
      raf = requestAnimationFrame(render);
    };

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mq.matches) render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} style={{ position: "fixed", inset: 0, zIndex: -20, opacity: 0.95, pointerEvents: "none" }} />;
}

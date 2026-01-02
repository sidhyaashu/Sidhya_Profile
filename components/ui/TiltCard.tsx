"use client";

import { useRef } from "react";

type TiltProps = {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
};

export default function TiltCard({ children, className, maxTilt = 10 }: TiltProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const tiltX = (y - 0.5) * -maxTilt;
    const tiltY = (x - 0.5) * maxTilt;
    el.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(6px)`;
    el.style.transition = "transform 120ms linear";
  }
  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "none";
    el.style.transition = "transform 300ms cubic-bezier(.2,.9,.3,1)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform",
        borderRadius: 12,
        boxShadow: "0 6px 20px rgba(2,6,23,0.35), inset 0 1px 0 rgba(255,255,255,0.02)",
        background: "transparent",
      }}
      tabIndex={0}
    >
      {children}
    </div>
  );
}

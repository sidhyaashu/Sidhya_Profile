"use client";

import { useEffect, useRef } from "react";

export default function CursorRing() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return; // don't show on touch devices

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    let mouseX = -1000;
    let mouseY = -1000;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (el) {
        el.style.transform = `translate3d(${mouseX - 12}px, ${mouseY - 12}px, 0)`;
        el.style.opacity = '1';
      }
    };

    const onLeave = () => {
      if (el) el.style.opacity = '0';
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseenter', onMove);
    document.addEventListener('mouseleave', onLeave);

    // add hover scaling when hovering interactive elements
    const onOver = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest('a, button, [role="button"], .interactive')) {
        el!.style.transform += ' scale(1.6)';
        el!.style.background = 'rgba(255,255,255,0.06)';
      }
    };
    const onOut = () => {
      if (el) {
        el.style.transform = el.style.transform.replace(/ scale\([^)]*\)/, '');
        el.style.background = 'transparent';
      }
    };

    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseenter', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: 24,
        height: 24,
        borderRadius: 9999,
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate3d(-1000px,-1000px,0)',
        transition: 'transform 120ms linear, opacity 200ms ease, background 120ms ease',
        opacity: 0,
        border: '1px solid rgba(255,255,255,0.12)'
      }}
    />
  );
}

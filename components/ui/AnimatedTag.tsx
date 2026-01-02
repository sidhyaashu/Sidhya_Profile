"use client";

import React from "react";

type AnimatedTagProps = {
  children: React.ReactNode;
  className?: string;
};

export default function AnimatedTag({ children, className = "" }: AnimatedTagProps) {
  return (
    <span
      className={
        "inline-flex items-center gap-2 text-xs px-2 py-1 rounded-md transition-transform duration-200 transform hover:-translate-y-0.5 focus:translate-y-0 focus:outline-none " +
        className
      }
      tabIndex={0}
      role="status"
    >
      <span
        aria-hidden
        style={{
          width: 6,
          height: 6,
          borderRadius: 9999,
          background: "rgba(255,255,255,0.06)",
          boxShadow: "0 6px 16px rgba(2,6,23,0.35)",
        }}
      />
      <span className="leading-none">{children}</span>
    </span>
  );
}

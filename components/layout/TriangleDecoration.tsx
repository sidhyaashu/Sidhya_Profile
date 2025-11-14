"use client";

export default function TriangleDecoration() {
  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        left: '50%',
        top: '58vh',
        transform: 'translateX(-50%) translateY(-50%)',
        zIndex: -5, // above grid (-10) but below content (0)
        pointerEvents: 'none',
        width: '360px',
        maxWidth: '40vw',
        height: '260px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.98,
      }}
    >
      <svg viewBox="0 0 200 140" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.9" />
            <stop offset="100%" stopColor="white" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        {/* stacked stroked triangles to emulate the layered effect */}
        {[...Array(18)].map((_, i) => {
          const inset = i * 2.6; // control spacing
          const opacity = 1 - i * 0.05;
          const strokeWidth = 0.9;
          const points = `${100},${12 + inset} ${18 + inset},${118 - inset} ${182 - inset},${118 - inset}`;
          return (
            <polygon
              key={i}
              points={points}
              fill="none"
              stroke="url(#g)"
              strokeOpacity={opacity}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          );
        })}
        {/* a subtle filled base triangle for depth */}
        <polygon points="100,26 36,116 164,116" fill="rgba(0,0,0,0.28)" />
      </svg>
    </div>
  );
}

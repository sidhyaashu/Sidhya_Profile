"use client";

import { motion } from "motion/react";

export default function RainbowCurve({ className = "" }: { className?: string }) {
    return (
        <div className={`w-full relative overflow-hidden ${className}`}>
            <svg
                className="w-full h-full"
                viewBox="0 0 1000 200"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="rainbow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#a855f7" /> {/* Purple */}
                        <stop offset="25%" stopColor="#3b82f6" /> {/* Blue */}
                        <stop offset="50%" stopColor="#22c55e" /> {/* Green */}
                        <stop offset="75%" stopColor="#eab308" /> {/* Yellow */}
                        <stop offset="100%" stopColor="#ef4444" /> {/* Red */}
                    </linearGradient>
                    <filter id="glow-rainbow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Tech Line Background */}
                <path
                    d="M 0,100 C 300,100 700,100 1000,100"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                />

                {/* The Rainbow Curve */}
                <path
                    d="M 0,100 Q 500,50 1000,100"
                    fill="none"
                    stroke="url(#rainbow-gradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    filter="url(#glow-rainbow)"
                    className="animate-pulse-slow"
                />

                {/* Ticks/Nodes along the curve */}
                {[...Array(21)].map((_, i) => {
                    // Position along the X axis
                    const x = i * 50;
                    // Calculate Y based on quadratic bezier Q 500,50
                    // t from 0 to 1
                    const t = i / 20;
                    // B(t) = (1-t)^2 * P0 + 2(1-t)t * P1 + t^2 * P2
                    // P0=(0,100), P1=(500,50), P2=(1000,100)
                    // y = (1-t)^2(100) + 2(1-t)t(50) + t^2(100)
                    const y = Math.pow(1 - t, 2) * 100 + 2 * (1 - t) * t * 50 + Math.pow(t, 2) * 100;

                    return (
                        <g key={i}>
                            <circle cx={x} cy={y} r="2" fill="white" opacity="0.8" />
                            <line
                                x1={x} y1={y}
                                x2={x} y2={y + (i % 5 === 0 ? 15 : 8)}
                                stroke="url(#rainbow-gradient)"
                                strokeWidth={i % 5 === 0 ? 1.5 : 0.5}
                                opacity="0.6"
                            />
                        </g>
                    )
                })}
            </svg>
            <style jsx>{`
                .animate-pulse-slow {
                    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: .7; }
                }
            `}</style>
        </div>
    );
}

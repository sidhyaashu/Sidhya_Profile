"use client";

import { motion } from "motion/react";

export default function CompassCurve({ className = "" }: { className?: string }) {
    return (
        <div className={`w-full max-w-4xl mx-auto h-48 sm:h-64 md:h-80 relative overflow-hidden ${className}`}>
            <svg
                className="w-full h-full"
                viewBox="0 0 1000 400"
                preserveAspectRatio="xMidYMax meet"
            >
                <defs>
                    <linearGradient id="scale-gradient-shared" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(168,85,247,0)" />
                        <stop offset="25%" stopColor="rgba(168,85,247,0.4)" />
                        <stop offset="50%" stopColor="rgba(16,185,129,0.8)" />
                        <stop offset="75%" stopColor="rgba(6,182,212,0.4)" />
                        <stop offset="100%" stopColor="rgba(6,182,212,0)" />
                    </linearGradient>
                    <filter id="glow-shared" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Base Curve (Glassy Track) */}
                <path
                    d="M 100,280 a 400,400 0 0,1 800,0"
                    fill="none"
                    stroke="rgba(255,255,255,0.03)"
                    strokeWidth="40"
                    strokeLinecap="round"
                />

                {/* Glowing Gradient Stroke */}
                <path
                    d="M 100,280 a 400,400 0 0,1 800,0"
                    fill="none"
                    stroke="url(#scale-gradient-shared)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                />

                {/* Ticks */}
                {[...Array(41)].map((_, i) => {
                    const angleDeg = -50 + (i * 2.5); // -50 to +50
                    const isMajor = i % 5 === 0;
                    const isCenter = i === 20;

                    return (
                        <g key={i} transform={`rotate(${angleDeg}, 500, 700)`}>
                            <line
                                x1="500" y1="280" x2="500" y2={isMajor ? 250 : 270}
                                stroke={isCenter ? '#10b981' : 'white'}
                                strokeWidth={isCenter ? 3 : (isMajor ? 2 : 1)}
                                opacity={isCenter ? 1 : (isMajor ? 0.7 : 0.3)}
                            />
                            {isMajor && !isCenter && (
                                <text x="500" y="240" textAnchor="middle" fill="white" fontSize="10" opacity="0.5" transform={`rotate(${-angleDeg}, 500, 240)`}>
                                    {Math.abs(i - 20) * 5}
                                </text>
                            )}
                        </g>
                    )
                })}

                {/* Center Triangle Indicator */}
                <path d="M 500,225 l -8,-10 h 16 z" fill="#10b981" className="animate-bounce" />
            </svg>
            <style jsx>{`
            .animate-bounce {
                animation: bounce 3s infinite;
            }
            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-5px); }
            }
          `}</style>
        </div>
    );
}

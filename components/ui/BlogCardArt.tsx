"use client";

import { motion } from "framer-motion";

export type ArtVariant =
    | 'design-code'
    | 'customer-experience'
    | 'continuous-planning'
    | 'remote-work'
    | 'self-driving'
    | 'liquid-glass';

interface BlogCardArtProps {
    variant: ArtVariant | string;
    className?: string;
    primaryColor?: string; // Hex color for the main accent
}

export const BlogCardArt = ({ variant, className = "", primaryColor = "#ffffff" }: BlogCardArtProps) => {
    // Helper style for glows
    const glowingShadow = { boxShadow: `0 0 20px ${primaryColor}40` }; // 40 = 25% opacity
    const borderStyle = { borderColor: `${primaryColor}60` }; // 60 = ~37% opacity
    const bgStyle = { backgroundColor: primaryColor };
    const bgSoftStyle = { backgroundColor: `${primaryColor}20` }; // 20 = ~12% opacity

    switch (variant) {
        case 'design-code':
            // Spirograph / Dotted Circles
            return (
                <div className={`w-full h-full flex items-center justify-center relative overflow-hidden ${className}`}>
                    {/* Left Dashed Circle */}
                    <div className="absolute left-1/4 w-32 h-32 rounded-full border border-dashed" style={{ borderColor: `${primaryColor}40` }} />

                    {/* Right Spirograph */}
                    <div className="absolute right-1/4 w-32 h-32 flex items-center justify-center">
                        {[...Array(12)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-full h-8 border rounded-full"
                                style={{
                                    transform: `rotate(${i * 15}deg)`,
                                    borderColor: `${primaryColor}40`
                                }}
                            />
                        ))}
                        <div
                            className="w-4 h-4 rounded-full absolute"
                            style={{ ...bgStyle, boxShadow: `0 0 15px ${primaryColor}` }}
                        />
                    </div>
                </div>
            );

        case 'customer-experience':
            // Tree / Mindmap
            return (
                <div className={`w-full h-full flex items-center justify-center relative overflow-hidden ${className}`}>
                    <div className="flex items-center gap-8">
                        {/* Left Nodes */}
                        <div className="flex flex-col gap-2">
                            <div className="w-12 h-1 rounded-full opacity-50" style={bgStyle} />
                            <div className="w-16 h-1 rounded-full opacity-50" style={bgStyle} />
                            <div className="w-10 h-1 rounded-full opacity-50" style={bgStyle} />
                        </div>
                        {/* Center Node */}
                        <div className="w-4 h-4 rounded-full relative z-10" style={{ ...bgStyle, boxShadow: `0 0 15px ${primaryColor}` }}>
                            <div className="absolute top-1/2 left-full w-8 h-[1px]" style={{ backgroundColor: primaryColor }} />
                            <div className="absolute top-1/2 right-full w-8 h-[1px]" style={{ backgroundColor: primaryColor }} />
                        </div>
                        {/* Right Nodes */}
                        <div className="flex flex-col gap-2">
                            <div className="w-12 h-1 rounded-full opacity-50" style={bgStyle} />
                            <div className="w-16 h-1 rounded-full opacity-50" style={bgStyle} />
                        </div>
                    </div>
                    {/* Connecting lines background */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" stroke={primaryColor} strokeWidth="1" fill="none">
                        <path d="M 100,100 C 150,100 150,50 200,50" />
                        <path d="M 100,100 C 150,100 150,150 200,150" />
                    </svg>
                </div>
            );

        case 'continuous-planning':
            // Magnetic Field / Torus
            return (
                <div className={`w-full h-full flex items-center justify-center relative overflow-hidden ${className}`}>
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute border rounded-[100%] transition-transform"
                            style={{
                                width: `${100 + i * 20}px`,
                                height: `${60 + i * 10}px`,
                                transform: `rotate(${i * 5}deg)`,
                                borderColor: `${primaryColor}50`
                            }}
                        />
                    ))}
                    {/* Vertical Line */}
                    <div className="h-full w-[1px] absolute" style={{ backgroundColor: `${primaryColor}30` }} />
                </div>
            );

        case 'remote-work':
            // Globe / Grid
            return (
                <div className={`w-full h-full flex items-center justify-center gap-4 ${className}`}>
                    {/* Solid striped globe */}
                    <div className="w-16 h-16 rounded-full overflow-hidden relative" style={{ backgroundColor: `${primaryColor}20` }}>
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="absolute inset-x-0 h-2 rotate-45" style={{ top: `${i * 12}px`, backgroundColor: primaryColor }} />
                        ))}
                    </div>
                    {/* Wireframe globe */}
                    <div className="w-16 h-16 rounded-full border relative flex items-center justify-center" style={{ borderColor: primaryColor }}>
                        <div className="absolute inset-x-0 h-[1px]" style={{ backgroundColor: primaryColor }} />
                        <div className="absolute inset-y-0 w-[1px]" style={{ backgroundColor: primaryColor }} />
                        <div className="w-12 h-12 border rounded-full" style={{ borderColor: `${primaryColor}80` }} />
                    </div>
                </div>
            );

        case 'self-driving':
            // Flowchart / UI
            return (
                <div className={`w-full h-full flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500 ${className}`}>
                    <div className="w-48 h-32 border rounded flex p-2 gap-2 relative backdrop-blur-sm" style={{ borderColor: `${primaryColor}40`, backgroundColor: `${primaryColor}05` }}>
                        {/* Sidebar */}
                        <div className="w-8 h-full border rounded flex flex-col gap-1 p-1" style={{ borderColor: `${primaryColor}30`, backgroundColor: `${primaryColor}10` }}>
                            <div className="w-full h-1 rounded" style={{ backgroundColor: `${primaryColor}40` }} />
                            <div className="w-full h-1 rounded" style={{ backgroundColor: `${primaryColor}40` }} />
                            <div className="w-full h-1 rounded" style={{ backgroundColor: `${primaryColor}40` }} />
                        </div>
                        {/* Content */}
                        <div className="flex-1 border rounded relative" style={{ borderColor: `${primaryColor}30`, backgroundColor: `${primaryColor}10` }}>
                            {/* Floating UI Elements */}
                            <div className="absolute top-4 left-4 w-12 h-16 border rounded flex flex-col items-center justify-center gap-1" style={{ borderColor: primaryColor, backgroundColor: `${primaryColor}20`, boxShadow: `0 0 10px ${primaryColor}30` }}>
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: primaryColor }} />
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: `${primaryColor}60` }} />
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: `${primaryColor}30` }} />
                            </div>

                            <svg className="absolute inset-0 w-full h-full pointer-events-none" stroke={primaryColor} strokeWidth="0.5" strokeDasharray="2 2">
                                <path d="M 40,20 L 80,40" opacity="0.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            );

        default:
            return <div className={`w-full h-full bg-zinc-900 ${className}`} />;
    }
};

export default BlogCardArt;

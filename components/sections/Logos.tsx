"use client";

import { Feather, Command, Hexagon, Triangle, type LucideIcon } from "lucide-react";
import React from "react";

interface Logo {
    name: string;
    icon: React.ElementType;
}

export default function Logos() {
    const logos: Logo[] = [
        { name: "OpenAI", icon: Hexagon },
        {
            name: "Cash App",
            icon: (props: React.ComponentProps<'span'>) => (
                <span className="font-bold font-mono text-xl" {...props}>$ Cash App</span>
            )
        },
        {
            name: "Scale",
            icon: (props: React.ComponentProps<'span'>) => (
                <span className="font-light tracking-widest text-xl" {...props}>scale</span>
            )
        },
        {
            name: "Ramp",
            icon: (props: React.ComponentProps<'div'>) => (
                <div className="flex items-center gap-1" {...props}>
                    <span className="font-bold text-xl">ramp</span>
                    <Triangle className="w-3 h-3 fill-current rotate-90" />
                </div>
            )
        },
        {
            name: "Vercel",
            icon: (props: React.ComponentProps<'div'>) => (
                <div className="flex items-center gap-2" {...props}>
                    <Triangle className="w-5 h-5 fill-current" />
                    <span className="font-bold text-xl">Vercel</span>
                </div>
            )
        },
        {
            name: "Coinbase",
            icon: (props: React.ComponentProps<'span'>) => (
                <span className="font-bold text-xl tracking-tight" {...props}>coinbase</span>
            )
        },
        {
            name: "Boom",
            icon: (props: React.ComponentProps<'div'>) => (
                <div className="flex items-center gap-2" {...props}>
                    <Feather className="w-6 h-6" />
                    <span className="font-bold text-lg tracking-widest">BOOM</span>
                </div>
            )
        },
        {
            name: "Cursor",
            icon: (props: React.ComponentProps<'div'>) => (
                <div className="flex items-center gap-2" {...props}>
                    <Command className="w-5 h-5" />
                    <span className="font-bold text-xl">CURSOR</span>
                </div>
            )
        },
    ];

    return (
        <section className="py-24 bg-black border-y border-white/5 relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                <p className="text-xl md:text-2xl text-white mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
                    Powering the world&apos;s best product teams.
                    <br />
                    <span className="text-zinc-500 mt-2 block">From next-gen startups to established enterprises.</span>
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center opacity-100">
                    {logos.map((logo, index) => {
                        const Icon = logo.icon;
                        return (
                            <div
                                key={index}
                                className="flex items-center justify-center text-white hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
                            >
                                <Icon className="w-auto h-8" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
